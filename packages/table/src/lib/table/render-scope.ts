import { EleScope } from './ele-scope';
import { TableModelIf } from './data/tablemodel/table-model.if';
import { AddColumnDivPara, ConvenienceDomService } from './service/convenience-dom.service';
import { TableOptionsIf } from './data/options/table-options.if';
import { CellRange } from './data/common/cell-range';
import { RendererCleanupFnType } from './renderer/renderer-cleanup-fn.type';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { SideIdent } from './data/side-ident.type';
import { DivScope } from './data/div-scope.type';
import { AreaModelIf } from './data/tablemodel/areamodel/area-model.if';
import { ArgsAdjustColumnsToRowParentParams } from './data/common/args-adjust-columns-to-row-parent-params';
import { ArgsRenderCellDiv } from './data/common/args-render-cell-div';
import { TreeArrowType } from './data/common/tree-arrow.type';
import { TreeRow } from './data/common/tree-row';
import { StoreStateScrollPosService } from './service/store-state-scroll-pos.service';
import { GeMouseEvent } from './data/common/event/ge-mouse-event';
import { GeoData } from './data/geo-data';
import { CellRendererIf } from './renderer/cell-render.if';
import { SelectionModelIf } from './selection/selection-model.if';
import { GetT } from './data/common/get-t';
import { FocusModelIf } from './focus/focus-model.if';
import { ColAndRowspanModel } from './data/tablemodel/areamodel/col-and-rowspan-model';
import { AreaObjectMapType } from './data/common/area-map.type';
import { AreaObjectMap } from './data/common/area-map';
import { TableCellUpdateEventIf } from './data/common/event/input/table-cell-update-event.if';
import { isAreaModelTree, isTreeRow } from './instanceof-workaround';


/**
 * Represents a cell in the ArgsRender.
 * @interface
 */
interface ArgsRenderCell {
  areaModel: AreaModelIf;
  areaIdent: AreaIdent;
  sideIdent: SideIdent;
  rowIndex: number;
  columnIndex: number;
  left: number;
  top: number;
  width: number;
  height: number;
  parent: HTMLDivElement;
  cellSelected: boolean;
  lastRowOfModel: boolean;
  gammaRange: boolean;
}

/**
 * Represents the arguments passed to the renderHeaderCellResizeHandle method.
 * @interface
 */
interface ArgsRenderHeaderCellResizeHandle {
  rowIndex: number;
  columnIndex: number;
  cellLeft: number;
  cellTop: number;
  cellWidth: number;
  cellHeight: number;
  parent: HTMLDivElement;
}




export class RenderScope extends EleScope {

  protected dragging = false;
  protected editing = false;
  protected storedColumnWidths: number[] = [];

  protected storeScrollPosStateService?: StoreStateScrollPosService;
  protected getSelectionModel?: GetT<SelectionModelIf>;
  protected getFocusModel?: GetT<FocusModelIf>;
  protected scrollLeft = 0;
  protected scrollViewportLeft = 0;
  protected scrollFactorY = 0;
  protected scrollFactorX = 0;

  protected readonly cleanupFunctions: {
    header: (RendererCleanupFnType)[],
    body: (RendererCleanupFnType)[],
    footer: (RendererCleanupFnType)[],
  } = {
    header: [],
    body: [],
    footer: []
  };
  protected tree = false;

  protected colAndRowspanModels: AreaObjectMapType<ColAndRowspanModel> = new AreaObjectMap<ColAndRowspanModel>();
  protected firstVisibleRowIndex = -1;

  protected draggingTargetColumnIndex = -1;
  protected mouseEvent?: GeMouseEvent;

  private debounceTimeout?: ReturnType<typeof setTimeout> | null;
  private editorRenderer?: CellRendererIf;
  private editorRendererColumn?: number;
  private editorRendererRow?: number;
  private removables: HTMLDivElement[] = [];

  constructor(
    hostElement: HTMLDivElement,
    tableModel: TableModelIf,
    dom: ConvenienceDomService,
    tableOptions: TableOptionsIf
  ) {
    super(hostElement, tableModel, dom, tableOptions);

    if (this.tableModel.getSelectionModel) {
      this.getSelectionModel = this.tableModel.getSelectionModel;

    } else if (this.tableOptions?.getSelectionModel) {
      // The 'getSelectionModel' method from 'tableOptions' has a higher priority:
      this.getSelectionModel = this.tableOptions.getSelectionModel;
    }

    if (this.tableOptions?.getFocusModel) {
      this.getFocusModel = this.tableOptions.getFocusModel;
    }
    if (isAreaModelTree(tableModel.getAreaModel('body'))) {
      this.tree = true;
    }
    const aereaIds: AreaIdent[] = ['header', 'body', 'footer'];
    aereaIds.forEach(
      areaIdent => {
        this.colAndRowspanModels[areaIdent] = new ColAndRowspanModel(tableModel, tableModel.getAreaModel(areaIdent));
        this.colAndRowspanModels[areaIdent]?.init();
      }
    );
  }


  isEditing() {
    return this.editing;
  }


  /**
   * Resets the editor renderer by clearing its values and state.
   *
   * @function resetEditorRenderer
   * @memberof ClassName
   *
   * @returns {void}
   */
  resetEditorRenderer() {
    this.editorRenderer = undefined;
    this.editorRendererRow = -1;
    this.editorRendererColumn = -1;
    this.editing = false;
  }

  /**
   * Clears the selection in the component.
   *
   * @param {boolean} rerender - Indicates whether to rerender the component after clearing the selection. Default value is false.
   *
   * @return {void}
   */
  clearSelection(rerender: boolean = false) {
    if (this.getSelectionModel) {
      const sm = this.getSelectionModel();
      sm?.clear();
      if (rerender) {
        this.repaint();
      }
    }
  }

  /**
   * Initializes and renders the editor for a specified row and column index.
   *
   * @param {number} rowIdx - The index of the row.
   * @param {number} colIdx - The index of the column.
   */
  initRenderEditor(rowIdx: number, colIdx: number) {
    let rnFn = this.tableModel.getColumnDef(colIdx)?.getEditRenderer;
    if (!rnFn) {
      rnFn = this.tableOptions.getEditRenderer;
    }

    if (rnFn) {
      this.editorRenderer = rnFn(rowIdx, colIdx);

      if (this.editorRenderer) {
        this.editorRendererRow = rowIdx;
        this.editorRendererColumn = colIdx;
        this.editing = true;
        this.repaint();
        // request focus:
        const input = document.querySelector('input.ge-table-cell-editor-input') as HTMLInputElement;
        if (input) {
          input.focus();
        }

      } else {
        this.resetEditorRenderer();
      }
    }
  }


  /**
   * Adjusts the content after scrolling and initiates a repaint of the component.
   *
   * @return {void}
   */
  repaint() {
    this.adjustAfterScrolling();
  }


  /**
   * Repaints the UI by resetting the size of the wrapper div,
   * adjusting the containers and rows, and performing additional adjustments
   * after scrolling.
   *
   * @return {void} This method does not return any value.
   */
  repaintHard() {
    this.tableModel.recalcHeightAndPadding();
    this.resetSizeOfWrapperDiv();
    this.adjustContainersAndRows();
    this.adjustAfterScrolling();
  }

  /**
   * Recalculates the column widths of the table.
   *
   * @param {number} [clientWidth] - The client width of the table. If not provided, the client width of the scroll viewport will be used.
   *
   * @return {undefined}
   */
  recalcColumnWidths(clientWidth?: number) {
    let widthInPixel = clientWidth ? clientWidth : this.scrollViewport.clientWidth;
    this.tableModel.setParentWidth(widthInPixel);
    this.tableModel.init();
    this.repaintHard();
  }


  /**
   * Adjusts the table after scrolling. This method performs various adjustments
   * to the table's appearance and behavior after a scroll event occurs.
   */
  override adjustAfterScrolling() {
    for (const cleaning of this.removables) {
      cleaning.remove();
    }
    this.hideHoverRow();
    this.hideHoverColumn();

    this.scrollTop = this.scrollViewport.scrollTop;
    this.scrollLeft = this.scrollViewport.scrollLeft;
    this.debounce(this.checkForScrollPosSaving.bind(this));

    this.scrollFactorY = this.scrollTop / (this.scrollViewport.scrollHeight - this.scrollViewport.clientHeight);
    this.scrollFactorX = this.scrollLeft / (this.scrollViewport.scrollWidth - this.scrollViewport.clientWidth);

    if (isNaN(this.scrollFactorY)) {
      this.scrollFactorY = 0;
    }
    if (isNaN(this.scrollFactorX)) {
      this.scrollFactorX = 0;
    }

    this.adjustBody();
    this.adjustArea('footer');
    this.adjustArea('header');


    if (this.tableOptions.tableTopBorderVisible) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, 0),
        this.hostElement,
        'ge-table-border'));
    }
    if (this.tableOptions.tableBottomBorderVisible) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1),
        this.hostElement,
        'ge-table-border'));
    }
    // The border between east and center in  header/body/footer (full height):
    if (this.tableModel.getFixedLeftColumnCount() > 0) {
      this.removables.push(this.dom.addVerticalBorder(
        new GeoData(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0),
        this.hostElement,
        'ge-table-body-west-vertical-border'));
    }
    // The border between header and body (full width):
    if (this.tableModel.getAreaModel('header')?.getRowCount() > 0) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight),
        this.hostElement,
        'ge-table-body-west-vertical-border'));
    }
  }

  /**
   * Checks if the scroll position should be saved and saves it.
   *
   * @return {void}
   */
  checkForScrollPosSaving() {
    if (this.storeScrollPosStateService
      && this.tableOptions?.autoRestoreOptions?.autoRestoreScrollPosition) {
      this.storeScrollPosStateService.updateScrollOffset([this.scrollLeft, this.scrollTop]);
    }
  }

  /**
   * Updates the cells in the table with the provided values and optionally repaints all cells.
   *
   * @param {TableCellUpdateEventIf[]} events - The array of events containing information about the cells to update.
   * @param {boolean} repaintAll - Optional. If true, repaints all cells after updating. Defaults to false.
   *
   * @returns {void}
   */
  updateCells(
    events: TableCellUpdateEventIf[],
    repaintAll: boolean = false) {

    events.forEach(evt => {
        this.tableModel
          .getAreaModel(evt.area)
          .setValue(evt.rowIndex, evt.columnIndex, evt.value);
        if (!repaintAll) {
          this.rerenderCellContent(evt);
        }
      }
    );
    if (repaintAll) {
      this.repaint();
    }
  }

  /**
   * Rerenders the content of a table cell based on the given parameters.
   *
   * @param {TableCellUpdateEventIf} area - The area of the table.
   * @param {number} rowIndex - The index of the row.
   * @param {number} columnIndex - The index of the column.
   * @param {any} value - The new value to be displayed in the cell.
   * @param {string[]} cssClasses - An array of CSS classes to be applied to the cell.
   */
  public rerenderCellContent(
    { area, rowIndex, columnIndex, value, cssClasses }: TableCellUpdateEventIf
  ) {
    const areaModel = this.tableModel.getAreaModel(area);
    const selector = 'div[data-col-index="' + columnIndex + '"][data-row-index="' + rowIndex + '"][data-area="' + area + '"]';
    const cell = document.querySelector(selector) as HTMLDivElement;

    if (cell) {
      let fn: RendererCleanupFnType | undefined = undefined;
      const editor = this.editorRenderer && this.editorRendererRow === rowIndex && this.editorRendererColumn === columnIndex;
      let cellRenderer;
      if (editor) {
        cellRenderer = this.editorRenderer;
      } else {
        cellRenderer = areaModel.getCellRenderer(rowIndex, columnIndex);
      }

      cell.innerText = '';
      this.applyCssClasses(cell, cssClasses);
      if (cellRenderer) {
        fn = cellRenderer.render(cell, rowIndex, columnIndex, area, areaModel, value, this.dom.domService);
        if (fn) {
          this.cleanupFunctions[area].push(fn);
        }
      } else {
        const text = `${value}`;
        this.dom.addLabelDiv(cell, text, false, rowIndex, columnIndex, area);
      }
      const classes = areaModel.getCustomClassesAt(rowIndex, columnIndex);
      if (classes.length) {
        this.dom.addClasses(classes, cell);
      }
      const styles = areaModel.getCustomStyleAt(rowIndex, columnIndex);
      if (styles) {
        for (const css in styles) {
          this.dom.setStyle(cell, css, styles[css]);
        }
      }
    }
  }

  /**
   * Stores the widths of all columns in the table.
   *
   * @protected
   * @function storeColumnWidths
   * @returns {void}
   */
  protected storeColumnWidths() {
    const columnDefs = this.tableModel.getColumnDefs();
    if (columnDefs?.length) {
      this.storedColumnWidths = columnDefs.map((_cd, idx) => this.tableModel.getColumnWidth(idx));
    }
  }

  protected getAreaAndSideIdentByAttr(srcElement: HTMLElement): [AreaIdent | undefined, SideIdent | undefined] {
    if (srcElement) {
      const dataArea = this.getStringByAttr(srcElement, 'data-area');
      const dataSide = this.getStringByAttr(srcElement, 'data-side');
      if (dataSide && dataArea) {
        return [dataArea, dataSide] as [AreaIdent, SideIdent];
      }
    }
    return [undefined, undefined];
  }

  /**
   * Retrieves the specified area from the grid layout.
   *
   * @param {string} areaIdent - The identifier for the area ('header', 'body', or 'footer').
   * @param {string} sideIdent - The identifier for the side of the area ('west', 'center', or 'east').
   * @protected
   * @returns {HTMLElement} - The requested area element.
   * @throws {Error} - If the area identifier or side identifier is incorrect.
   */
  protected getArea(areaIdent: AreaIdent, sideIdent: SideIdent): DivScope {
    if (areaIdent === 'header') {
      if (sideIdent === 'west') return this.areaHeaderWest;
      if (sideIdent === 'center') return this.areaHeaderCenter;
      if (sideIdent === 'east') return this.areaHeaderEast;
    } else if (areaIdent === 'body') {
      if (sideIdent === 'west') return this.areaBodyWest;
      if (sideIdent === 'center') return this.areaBodyCenter;
      if (sideIdent === 'east') return this.areaBodyEast;
    } else if (areaIdent === 'footer') {
      if (sideIdent === 'west') return this.areaFooterWest;
      if (sideIdent === 'center') return this.areaFooterCenter;
      if (sideIdent === 'east') return this.areaFooterEast;
    }
    throw Error(`Wrong area identifier: row:${areaIdent}, col:${sideIdent}`);
  }

  /**
   * Adjusts the body of the table.
   *
   * @protected
   * @return {void}
   */
  protected adjustBody() {
    const virtualRowDivTopF1 = this.areaBodyCenterGeo.height - this.tableModel.getContentHeightInPixel();
    const virtualRowDivTop = this.scrollFactorY * virtualRowDivTopF1;

    this.dom.setStyle(this.contentDiv, 'top', `${this.scrollTop}px`);
    this.dom.setStyle(this.contentDiv, 'left', `${this.scrollViewport.scrollLeft}px`);

    this.adjustArea('body', virtualRowDivTop);
  }

  /**
   * Returns a number value extracted from the specified attribute of the source element.
   *
   * @param {HTMLElement} srcElement - The source element from which to extract the attribute value.
   * @param {string} key - The attribute key to extract the value from.
   * @returns {number} - The extracted number value, or -1 if the attribute was not found or not a valid number.
   * @protected
   */
  protected getNumberByAttr(srcElement: HTMLElement, key: string): number {
    if (srcElement) {
      const attr = srcElement.closest('[' + key + ']')?.getAttribute(key);
      if (attr) return Number(attr);
    }
    return -1;
  }


  /**
   * Retrieves the value of the specified attribute from the nearest ancestor element that has the attribute.
   *
   * @param {HTMLElement} srcElement - The source element from which to start searching for the nearest ancestor element.
   * @param {string} key - The name of the attribute to retrieve.
   * @returns {string} The value of the specified attribute, or an empty string if the attribute is not found.
   * @protected
   */
  protected getStringByAttr(srcElement: HTMLElement, key: string): string {
    if (srcElement) {
      const attr = srcElement.closest('[' + key + ']')?.getAttribute(key);
      if (attr) return attr;
    }
    return '';
  }

  public displayedRowCount = 0;

  /**
   * Adjusts the layout and positioning of the specified area in the table.
   * This method is used internally and should not be called directly.
   *
   * @param {AreaIdent} areaIdent - The identifier of the area to adjust (e.g. header, body, footer).
   * @param {number} [yStart=0] - The starting y-position for the layout adjustments.
   * @protected
   */
  protected adjustArea(areaIdent: AreaIdent, yStart: number = 0) {
    const westArea = this.getArea(areaIdent, 'west');
    const centerArea = this.getArea(areaIdent, 'center');
    const eastArea = this.getArea(areaIdent, 'east');
    const divHeight = centerArea.child.clientHeight;

    westArea.child.innerText = '';
    centerArea.child.innerText = '';
    eastArea.child.innerText = '';
    const left = 0;
    const width = this.areaBodyCenterGeo.width;
    const padding = this.tableModel.getPadding();
    const areaModel = this.tableModel.getAreaModel(areaIdent);
    const rowCount = areaModel.getRowCount();

    while (this.cleanupFunctions[areaIdent].length) {
      const fn = this.cleanupFunctions[areaIdent].shift();
      if (fn) {
        fn();
      }
    }
    let y = yStart;

    const columnCount = this.tableModel.getColumnCount();
    const fixedRightColumnCount = this.tableModel.getFixedRightColumnCount();
    const fixedLeftColumnCount = this.tableModel.getFixedLeftColumnCount();

    for (let index = 0; index < rowCount; index++) {
      const top = y;
      const lastRowOfModel = index === rowCount - 1;
      const height = this.tableModel.getRowHeight(areaIdent, index);

      if (top + height > 0) {
        // It's not scrolled out on top:
        // Visible!
        this.firstVisibleRowIndex = index;

        // center -------------------------------------------
        let geo = { left, width, height, top, index };
        let rowDiv = this.dom.addRowDiv(centerArea, geo, index, areaIdent, 'center');
        const centerStartCol = fixedLeftColumnCount;

        this.adjustColumnsToRowParent({
          areaIdent,
          sideIdent: 'center',
          areaModel,
          geo,
          parent: rowDiv,
          rowIndex: index,
          columnIndexStart: centerStartCol,
          columnIndexEnd: columnCount - fixedRightColumnCount - 1,
          verticalFixed: false,
          lastRowOfModel
        });

        // west -------------------------------------------
        if (padding.left > 0) {
          geo = { left, width: this.areaBodyWestGeo.width, height, top, index };
          rowDiv = this.dom.addRowDiv(westArea, geo, index, areaIdent, 'west');
          this.adjustColumnsToRowParent({
            areaIdent,
            sideIdent: 'west',
            areaModel,
            geo,
            parent: rowDiv,
            rowIndex: index,
            columnIndexStart: 0,
            columnIndexEnd: centerStartCol - 1,
            verticalFixed: true,
            lastRowOfModel
          });
        }

        // east -------------------------------------------
        if (padding.right > 0) {
          geo = { left, width: this.areaBodyEastGeo.width, height, top, index };
          rowDiv = this.dom.addRowDiv(eastArea, geo, index, areaIdent, 'east');
          this.adjustColumnsToRowParent({
            areaIdent,
            sideIdent: 'east',
            areaModel,
            geo,
            parent: rowDiv,
            rowIndex: index,
            columnIndexStart: columnCount - fixedRightColumnCount,
            columnIndexEnd: columnCount - 1,
            verticalFixed: true,
            lastRowOfModel
          });
        }

        // "collapse / expand all" event handler action attribute:
        if (areaIdent === 'header' && this.tree && index === rowCount - 1) {
          const div =
            this.dom.applyStyle(
              this.dom.setAttribute(
                this.dom.addDiv(rowDiv, new GeoData(16, 20, 20, 8)),
                'data-ge-action', 'toggleExpandCollapseAll'
              ),
              { 'cursor': 'pointer' }
            );
          const treeOptionsArrow = this.tableOptions.treeOptions.arrowExpandCollapseAll;
          if (treeOptionsArrow) {
            const textElement = this.dom.domService.createText(treeOptionsArrow.content);
            this.dom.domService.appendChild(div, textElement);
            if (treeOptionsArrow.style) {
              this.dom.applyStyleString(div, treeOptionsArrow.style);
            }
          }
        }

      }
      y = y + height;
      // lastVisibleRowIndex = index;
      if (y > divHeight) {
        if (areaIdent === 'body'){
          this.displayedRowCount = this.firstVisibleRowIndex - index;
        }
        break;
      }
    } // for

    // We draw the big colspan and rowspan cells at the end.
    // This fixes the 'half cutted big cell' problem:
    if (this.colAndRowspanModels && this.colAndRowspanModels[areaIdent]) {
      // draw col/rowspan cells again:
      const ranges = this.colAndRowspanModels[areaIdent]?.getRanges() ?? [];
      if (ranges.length) {

        for (const range of ranges) {
          let xStart = 0;
          let child: HTMLDivElement = centerArea.child;
          let sideIdent: SideIdent = 'center';
          if (range.c1 < fixedLeftColumnCount) {
            // West:
            child = westArea.child;
            sideIdent = 'west';
          } else if (fixedRightColumnCount > 0 && range.c1 >= columnCount - fixedRightColumnCount) {
            // East:
            child = eastArea.child;
            sideIdent = 'east';
          } else {
            // Center:
            const virtualRowDivLeftF1 = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
            xStart = (this.scrollFactorX * virtualRowDivLeftF1) - this.areaBodyWestGeo.width;
            sideIdent = 'center';
          }
          this.drawBigCell(range, xStart, yStart, areaModel, child, sideIdent);
        }
      }
    }
  }

  /**
   * Draws big cells (rowspan and or colspan) in body/center
   * @param range CellRange
   * @param xStart X position in pixel for top left corner
   * @param yStart Y position in pixel for top left corner
   * @param areaModel AreaModelIf
   * @param parentDiv Parent div as HTMLDivElement
   * @param sideIdent SideIdent (west,center,east)
   * @protected
   */
  protected drawBigCell(
    range: CellRange,
    xStart: number,
    yStart: number,
    areaModel: AreaModelIf,
    parentDiv: HTMLDivElement,
    sideIdent: SideIdent) {

    const y1 = yStart + this.getRowHeights(0, range.r1 - 1, areaModel).reduce((a, b) => a + b, 0);

    const columnCount = this.tableModel.getColumnCount();
    const fixedRightColumnCount = this.tableModel.getFixedRightColumnCount();
    let firstColIdx = 0;
    if (fixedRightColumnCount > 0 && range.c1 >= columnCount - fixedRightColumnCount) {
      // We are on the (fixed) east side, so we have to fix firstColIdx:
      firstColIdx = columnCount - fixedRightColumnCount;
    }
    const x1 = xStart + this.getColumnWidths(firstColIdx, range.c1 - 1).reduce((a, b) => a + b, 0);

    const h = this.getRowHeights(range.r1, range.r2, areaModel).reduce((a, b) => a + b, 0);
    const w = this.getColumnWidths(range.c1, range.c2).reduce((a, b) => a + b, 0);

    let cellSelected = false;
    const selectionModel = this.getSelectionModel ? this.getSelectionModel() : undefined;
    if (selectionModel) {
      const count = selectionModel.getSelectionCount(range.r1, range.c1);
      cellSelected = count > 0;
    }
    if (range.gammaRange) {
      // TODO render hierarchy cell
      // console.info('TODO here', range);

      this.renderCell({
        areaModel,
        areaIdent: areaModel.areaIdent,
        sideIdent,
        rowIndex: range.r1,
        columnIndex: range.c1,
        left: x1,
        top: y1,
        width: w,
        height: h,
        parent: parentDiv,
        cellSelected,
        lastRowOfModel: true,
        gammaRange: range.gammaRange
      });
    } else {

      this.renderCell({
        areaModel,
        areaIdent: areaModel.areaIdent,
        sideIdent,
        rowIndex: range.r1,
        columnIndex: range.c1,
        left: x1,
        top: y1,
        width: w,
        height: h,
        parent: parentDiv,
        cellSelected,
        lastRowOfModel: true,
        gammaRange: range.gammaRange
      });
    }

    if (areaModel.areaIdent === 'header' && this.tableOptions.columnsResizable) {
      this.renderHeaderCellResizeHandle({
        rowIndex: range.r1,
        columnIndex: range.c1,
        cellLeft: x1,
        cellTop: y1,
        cellWidth: w,
        cellHeight: h,
        parent: parentDiv
      });
    }
  }

  /**
   * Finds the row index of an important rowspan cell in a given area model.
   *
   * @param {AreaModelIf} areaModel - The area model to search in.
   * @param {number} rowIndex - The current row index.
   * @param {number} colIndex - The current column index.
   * @returns {number} - The row index of the important rowspan cell, or -1 if not found.
   * @protected
   */
  protected findRowOfImportantRowspanCell(areaModel: AreaModelIf, rowIndex: number, colIndex: number): number {
    const maxRowspan = areaModel.getMaxRowspan();
    for (let r = rowIndex - 1; r > -1; r--) {
      const rowspan = areaModel.getRowspanAt(r, colIndex);
      if (rowspan > 1 && r + rowspan + 1 >= rowIndex) {
        return r;
      }
      if (rowIndex - r > maxRowspan) {
        return -1;
      }
    }
    return -1;
  }

  /**
   * Adjusts the columns to fit the width of the row's parent element.
   *
   * @param {ArgsAdjustColumnsToRowParentParams} params - The parameters for adjusting the columns.
   * @protected
   * @return {void}
   */
  protected adjustColumnsToRowParent(
    {
      areaIdent,
      sideIdent,
      areaModel,
      geo,
      parent,
      rowIndex,
      columnIndexStart,
      columnIndexEnd,
      verticalFixed = false,
      lastRowOfModel = false
    }: ArgsAdjustColumnsToRowParentParams
  ): void {

    // if (areaIdent==='header'){
    //   console.info('################## rowIndex:' + rowIndex)
    //   console.info('##################')
    // }

    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let virtualRowDivLeft = 0;
    if (!verticalFixed) {
      const virtualRowDivLeftF1 = (this.areaBodyCenterGeo.width) - this.tableModel.getContentWidthInPixel();
      virtualRowDivLeft = this.scrollFactorX * virtualRowDivLeftF1;
    }

    const top = 0;
    const renderSelection = !!(areaIdent === 'body' && sideIdent);

    let x = virtualRowDivLeft;
    for (let index = columnIndexStart; index <= columnIndexEnd; index++) {
      const left = x;
      const w = this.tableModel.getColumnWidth(index);
      if (w > 0 && left + w > 0) {
        // Visible! Render cell div:

        // calc height:
        let height = geo.height;
        const rowspan = areaModel.getRowspanAt(rowIndex, index);
        const colspan = areaModel.getColspanAt(rowIndex, index);
        // if (areaIdent==='header') {
        //   console.info(rowIndex+'/'+index, rowspan+'_'+colspan)
        // }

        if (rowspan > 1) {
          height = this.getRowHeights(rowIndex, rowIndex + rowspan - 1, areaModel).reduce((a, b) => a + b, 0);
        }

        let width = w;
        if (colspan > 1) {
          width = this.getColumnWidths(index, index + colspan - 1).reduce((a, b) => a + b, 0);
        }

        let skip = false;
        if (this.colAndRowspanModels && this.colAndRowspanModels[areaIdent]) {
          if (this.colAndRowspanModels[areaIdent]?.isInRange(rowIndex, index)) {
            skip = true; // for the body area we don't want to render the small single cells
          }
        }

        if (this.draggingTargetColumnIndex === index
          && areaIdent !== 'header') {
          // For a running drag and drop action:
          this.renderDragTargetDiv(parent, left, top, width, height);
          const geo1 = { left, top, width, height };
          this.dom.addColumnBorderDivs(this.tableOptions, parent, geo1, areaIdent, sideIdent);

        } else {
          const cellSelected = this.renderSelectedBackgroundDiv(skip, renderSelection, sideIdent, areaModel, rowIndex, index, parent, left, top, width, height);

          const gammaCells = 'gammaCells' in areaModel;
          if (gammaCells && areaModel.getValueAt(rowIndex, index)) {
            skip = false;
          }
          if (!skip) {
            this.renderCell({
              areaModel,
              areaIdent,
              sideIdent,
              rowIndex,
              columnIndex: index,
              left,
              top,
              width,
              height,
              parent,
              cellSelected,
              lastRowOfModel,
              gammaRange: true
            });
          }
          if (areaIdent === 'header' && this.tableOptions.columnsResizable) {
            this.renderHeaderCellResizeHandle({
              rowIndex: rowIndex,
              columnIndex: index,
              cellLeft: left,
              cellTop: top,
              cellWidth: width,
              cellHeight: height,
              parent: parent
            });
          }
        }
      }

      x = x + w;
      if (x > this.areaBodyCenterGeo.width) {
        break;
      }
    }
    // Right vertical border:
    if (this.tableOptions.verticalBorderVisible) {
      this.dom.addVerticalBorder(new GeoData(x - 1, 1, geo.height, 0), parent);
    }
  }


  /**
   * Retrieves the column index of the tree arrow column in the table.
   *
   * @protected
   *
   * @returns {0 | 1} The column index of the tree arrow column.
   *                Returns 0 if the checkbox is not visible,
   *                otherwise returns 1.
   */
  protected getTreeArrowColumnIndex(): 0 | 1 {
    if (this.tableOptions.showCheckboxWihoutExtraColumn) {
      return 0;
    }
    if (this.tableModel.isRowCheckboxVisible()) {
      return 1;
    }
    return 0;
  }


  protected addAndRenderCellDiv(
    {
      areaModel,
      areaIdent,
      sideIdent,
      rowIndex,
      index,
      left,
      width,
      height,
      top,
      parent,
      lastRowOfModel
    }: ArgsRenderCellDiv): [HTMLDivElement, RendererCleanupFnType | undefined] {

    const editor = this.editorRenderer && this.editorRendererRow === rowIndex && this.editorRendererColumn === index;
    const cellRenderer = (editor) ? this.editorRenderer : areaModel.getCellRenderer(rowIndex, index);
    const geo = { left, width, height, top, index };
    const rowObject = areaModel.getRowByIndex(rowIndex);
    let treeArrow: TreeArrowType = 'none';

    const arrowIndexOk = index === this.getTreeArrowColumnIndex();

    if (arrowIndexOk && isTreeRow(rowObject)) {
      const tr = rowObject as TreeRow<any>;
      if (tr.children?.length) {
        if (tr.expanded) {
          treeArrow = 'expanded';
        } else {
          treeArrow = 'collapsed';
        }
      } else {
        treeArrow = 'hidden';
      }
    }

    let sortState = undefined;
    if (areaIdent === 'header') {
      const columnDef = this.tableModel.getColumnDef(index);
      if (!columnDef?.sortIconVisible || columnDef?.sortIconVisible()) {
        sortState = columnDef?.sortState;
      }
    }

    const val = areaModel.getValueAt(rowIndex, index);
    const text = cellRenderer ? '' : `${val}`;
    const checkedType = areaModel.isRowChecked(rowIndex);
    const cell = this.dom.addColumnDiv(
      {
        parent,
        geo,
        rowIndex,
        columnIndex: index,
        areaIdent,
        sideIdent,
        text,
        treeArrow,
        tableOptions: this.tableOptions,
        checkedType,
        sortState
      });

    const tooltip = areaModel.getTooltipAt(rowIndex, index);
    if (tooltip) {
      this.dom.setAttribute(cell, 'title', tooltip);
    }

    const columnDef = this.tableModel.getColumnDef(index);
    if (columnDef && columnDef.classes[areaIdent]) {
      this.dom.addClasses(columnDef.classes[areaIdent], cell);
    }

    let fn: RendererCleanupFnType | undefined = undefined;
    if (cellRenderer) {
      fn = cellRenderer.render(cell, rowIndex, index, areaIdent, areaModel, val, this.dom.domService);
    }

    const classes = areaModel.getCustomClassesAt(rowIndex, index);
    if (classes.length) {
      this.dom.addClasses(classes, cell);
    }

    this.dom.addColumnBorderDivs(this.tableOptions, parent, geo, areaIdent, sideIdent);
    if (lastRowOfModel) {
      this.dom.addHorizontalBorder({ left, width, height, top: top + height }, parent);
    }
    if (this.getFocusModel && areaIdent === 'body') {
      const fm = this.getFocusModel();
      if (fm?.hasFocus(rowIndex, index)) {
        this.dom.addFocusBorderDivs(parent, geo, {});
      }
    }
    if (areaIdent === 'header') {
      this.dom.setAttribute(cell, 'data-ge-action', 'drag-column');
    }

    const styles = areaModel.getCustomStyleAt(rowIndex, index);
    if (styles) {
      for (const css in styles) {
        this.dom.setStyle(cell, css, styles[css]);
      }
    }
    return [cell, fn];
  }

  /**
   * Applies CSS classes to an HTML element.
   *
   * @param {HTMLDivElement} ele - The HTML element to which CSS classes will be applied.
   * @param {Object.<string, boolean>} cssClasses - An object containing CSS class names as keys and boolean values indicating whether to apply or remove the class.
   * @protected
   */
  protected applyCssClasses(ele: HTMLDivElement, cssClasses: { [key: string]: boolean } = {}) {
    if (ele) {
      Object.entries(cssClasses)
        .forEach(([key, value]) => {
          if (value) {
            this.dom.addClass(key, ele);
          } else {
            this.dom.removeClass(key, ele);
          }
        });
    }
  }

  /**
   * Retrieves the column widths of a table within a specified range.
   *
   * @param {number} startIndex - The index of the first column to retrieve the width of.
   * @param {number} endIndex - The index of the last column to retrieve the width of.
   *
   * @return {number[]} An array containing the widths of the columns within the specified range.
   */
  protected getColumnWidths(startIndex: number, endIndex: number): number[] {
    const ret: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      ret.push(this.tableModel.getColumnWidth(i));
    }
    return ret;
  }

  /**
   * Retrieves the heights of rows within a specified range.
   *
   * @param {number} startIndex - The index of the first row in the range.
   * @param {number} endIndex - The index of the last row in the range.
   * @param {AreaModelIf} areaModel - The area model.
   * @return {number[]} - An array containing the heights of the rows within the specified range.
   */
  protected getRowHeights(startIndex: number, endIndex: number, areaModel: AreaModelIf): number[] {
    const ret: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      ret.push(areaModel.getRowHeight(i));
    }
    return ret;
  }

  /**
   * Adjusts the position and size of the hover row based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
   *
   * @return {void}
   */
  protected adjustHoverRows(mouseMoveEvent: GeMouseEvent) {
    if (this.tableOptions.hoverRowVisible && mouseMoveEvent.rowIndex > -1) {
      const width = this.hostElement.clientWidth;
      const rowHeight = this.tableModel.getAreaModel('body').getRowHeight(mouseMoveEvent.rowIndex);
      const top = mouseMoveEvent.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        'left': '0',
        'top': top + 'px',
        'width': width + 'px',
        'height': rowHeight + 'px',
        'display': 'block'
      });
    } else {
      this.hideHoverRow();
    }
  }

  /**
   * Hides the hover row by applying 'display: none' style to it.
   *
   * @protected
   * @function
   * @name hideHoverRow
   * @memberof ClassName
   *
   * @returns {void}
   */
  protected hideHoverRow() {
    this.dom.applyStyle(this.hoverRow, {
      'display': 'none'
    });
  }

  /**
   * Adjusts the position and size of the hover column based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   */
  protected adjustHoverColumns(mouseMoveEvent: GeMouseEvent) {
    if (this.tableOptions.hoverColumnVisible && mouseMoveEvent.rowIndex > -1) {
      const height = this.hostElement.clientHeight;
      const width = this.tableModel.getColumnWidth(mouseMoveEvent.columnIndex);
      const fixedWest = this.areaBodyWestGeo.width;
      const left = mouseMoveEvent.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - fixedWest;
      this.dom.applyStyle(this.hoverColumn, {
        'left': (left) + 'px',
        'top': '0px',
        'width': width + 'px',
        'height': height + 'px',
        'display': 'block'
      });
    } else {
      this.hideHoverColumn();
    }
  }


  /**
   * Hide hover column.
   *
   * This method hides the hover column by applying a style of 'display: none'
   * to the element representing the hover column.
   *
   * @protected
   * @memberof ClassName
   */
  protected hideHoverColumn() {
    this.dom.applyStyle(this.hoverColumn, {
      'display': 'none'
    });
  }

  /**
   * Executes a function after a specified delay, ensuring that the function is called only once within that delay period.
   *
   * @param {() => void} fn - The function to be executed.
   * @param {number} [delay=1000] - The delay in milliseconds before executing the function.
   *
   * @return {undefined}
   */
  protected debounce(fn: () => void, delay: number = 1000) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    this.debounceTimeout = setTimeout(fn.bind(this), delay);
  }


  /**
   * Adjusts the dragging column during a mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
   * @param {number} sourceColumnIndex - The index of the source column.
   * @param {boolean} firstDraggingRendering - Indicates if it's the first rendering of the dragging column.
   */
  protected adjustDraggingColumn(
    mouseMoveEvent: GeMouseEvent,
    sourceColumnIndex: number,
    firstDraggingRendering: boolean
  ) {
    if (this.dragging) {
      const height = this.hostElement.clientHeight;
      // const width = this.tableModel.getColumnWidth(sourceColumnIndex);
      const width = this.storedColumnWidths[sourceColumnIndex];

      if (mouseMoveEvent.originalEvent?.clientX) {
        const left = mouseMoveEvent.originalEvent?.clientX - width / 2;
        const top = 0;
        const geo: GeoData = { left, width, height, top, index: sourceColumnIndex };
        this.dom.applyStyle(this.draggingColumn, {
          'background': 'rgba(128,128,128,0.2)',
          'display': 'block',
          'overfllow': 'clip',
        });
        this.dom.applyStyleInPx(this.draggingColumn, geo);
        if (firstDraggingRendering) {
          // render dragging column:
          this.renderContentOfDraggingColumn(geo);
        }
      }
    } else {
      this.hideDraggingColumn();
    }
  }

  /**
   * Renders the content of a dragging column.
   *
   * @param {GeoData} columnGeo - The geographic data of the column.
   *
   * @returns {number} The y-coordinate of the rendered content.
   */
  protected renderContentOfDraggingColumn(columnGeo: GeoData) {
    const y = this. renderContentOfDraggingColumnForArea(columnGeo, 'header', 0);
    this. renderContentOfDraggingColumnForArea(columnGeo, 'body', y);
    // we refrain from rendering the footer:
    // y = this. renderContentOfDraggingColumnForArea(columnGeo, 'footer', y);
  }

  /**
   * Renders the content of the dragging column for a specific area.
   *
   * @param {GeoData} columnGeo - The geometry data of the dragging column.
   * @param {AreaIdent} areaIdent - The identifier of the area.
   * @param {number} [y=0] - The starting y-position.
   * @return {number} The final y-position after rendering all the content.
   */
  protected renderContentOfDraggingColumnForArea(
    columnGeo: GeoData,
    areaIdent: AreaIdent,
    y: number = 0
  ): number {

    const sideIdent = 'center';
    const areaModel = this.tableModel.getAreaModel(areaIdent);
    const rowCount = areaModel?.getRowCount();
    if (rowCount) {
      const columnIndex = columnGeo.index ?? 0;
      const parent = this.draggingColumn;

      for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        const top = y;
        const height = areaModel.getRowHeight(rowIndex);
        const geo = { left:0, width: columnGeo.width, height, top, index: rowIndex };
        const val = areaModel.getValueAt(rowIndex, columnIndex);
        const cellRenderer = areaModel.getCellRenderer(rowIndex, columnIndex);
        const text = cellRenderer ? '' : `${val}`;
        const para: AddColumnDivPara = {
          parent,
          geo,
          rowIndex,
          columnIndex,
          areaIdent,
          sideIdent,
          text
        };
        const cell = this.dom.addColumnDiv(para);

        let fn: RendererCleanupFnType | undefined = undefined;
        if (cellRenderer) {
          fn = cellRenderer.render(cell, rowIndex, columnIndex, areaIdent, areaModel, val, this.dom.domService);
          if (fn) {
            this.cleanupFunctions[areaIdent].push(fn);
          }
        }

        const classes = areaModel.getCustomClassesAt(rowIndex, columnIndex);
        if (classes.length) {
          this.dom.addClasses(classes, cell);
        }
        const columnDef = this.tableModel.getColumnDef(columnIndex);
        if (columnDef && columnDef.classes[areaIdent]) {
          this.dom.addClasses(columnDef.classes[areaIdent], cell);
        }

        // unnecessary, as the horizontal borders of the table are visible due to the semi-transparent background of the column:
        this.dom.addColumnBorderDivs(this.tableOptions, parent, geo, areaIdent, sideIdent);

        const styles = areaModel.getCustomStyleAt(rowIndex, columnIndex);
        if (styles) {
          for (const css in styles) {
            this.dom.setStyle(cell, css, styles[css]);
          }
        }
        y = y + height;
      }
    }
    return y;
  }

  /**
   * Hides the dragging column by applying a 'display: none' style to it.
   * This method is protected and can only be accessed within the class.
   *
   * @return {void}
   */
  protected hideDraggingColumn() {
    this.dom.applyStyle(this.draggingColumn, {
      'display': 'none'
    });
  }


  /**
   * Renders a draggable target div element.
   *
   * @param {HTMLDivElement} parent - The parent element where the target div will be appended to.
   * @param {number} left - The left position of the target div in pixels.
   * @param {number} top - The top position of the target div in pixels.
   * @param {number} width - The width of the target div in pixels.
   * @param {number} height - The height of the target div in pixels.
   * @return {HTMLDivElement} - The rendered draggable target div element.
   */
  private renderDragTargetDiv(parent: HTMLDivElement, left: number, top: number, width: number, height: number): HTMLDivElement {
    const div = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass('ge-table-drop-zone', parent)
    );
    this.dom.setStyle(div, 'left', `${left}px`);
    this.dom.setStyle(div, 'top', `${top}px`);
    this.dom.setStyle(div, 'width', `${width}px`);
    this.dom.setStyle(div, 'height', `${height}px`);
    return div;
  }


  /**
   * Render selected background div.
   *
   * @private
   * @param {boolean} skip - Whether to skip rendering.
   * @param {boolean} renderSelection - Whether to render the selection.
   * @param {SideIdent} sideIdent - The side identifier.
   * @param {AreaModelIf} areaModel - The area model.
   * @param {number} rowIndex - The row index.
   * @param {number} index - The index.
   * @param {HTMLDivElement} parent - The parent div element.
   * @param {number} left - The left position.
   * @param {number} top - The top position.
   * @param {number} width - The width of the div.
   * @param {number} height - The height of the div.
   * @returns {boolean} - Whether the cell is selected.
   */
  private renderSelectedBackgroundDiv(
    skip: boolean,
    renderSelection: boolean,
    sideIdent: SideIdent,
    areaModel: AreaModelIf,
    rowIndex: number,
    index: number,
    parent: HTMLDivElement,
    left: number, top: number, width: number, height: number) {
    let cellSelected = false;
    if (!skip && renderSelection && areaModel.isSelectable(rowIndex, index)) {
      if (this.getSelectionModel) {
        const selectionModel = this.getSelectionModel();
        if (selectionModel) {
          const count = selectionModel.getSelectionCount(rowIndex, index);
          cellSelected = count > 0;
          for (let i = 0; i < count; i++) {
            const div = this.dom.applyStylePosistionAbsolute(
              // ge-table-body-west-selected-range
              this.dom.createDivWithClass(`ge-table-${areaModel.areaIdent}-${sideIdent}-selected-range`, parent)
            );
            this.dom.setStyle(div, 'left', `${left}px`);
            this.dom.setStyle(div, 'top', `${top}px`);
            this.dom.setStyle(div, 'width', `${width}px`);
            this.dom.setStyle(div, 'height', `${height}px`);
          }
        }
      }
    }
    return cellSelected;
  }

  /**
   * Renders a cell in the grid.
   *
   * @param {ArgsRenderCell} args - The arguments for rendering the cell.
   * @param {AreaModel} args.areaModel - The area model of the grid.
   * @param {string} args.areaIdent - The identifier of the area.
   * @param {string} args.sideIdent - The identifier of the side.
   * @param {number} args.rowIndex - The index of the row.
   * @param {number} args.columnIndex - The index of the column.
   * @param {number} args.left - The left position of the cell.
   * @param {number} args.top - The top position of the cell.
   * @param {number} args.width - The width of the cell.
   * @param {number} args.height - The height of the cell.
   * @param {HTMLElement} args.parent - The parent element of the cell.
   * @param {boolean} args.cellSelected - Indicates if the cell is selected.
   * @param {boolean} args.lastRowOfModel - Indicates if the cell is in the last row of the model.
   *
   * @returns {void}
   */
  private renderCell(
    {
      areaModel,
      areaIdent,
      sideIdent,
      rowIndex,
      columnIndex,
      left,
      top,
      width,
      height,
      parent,
      cellSelected,
      lastRowOfModel
    }: ArgsRenderCell
  ) {
    const [div, fn] = this.addAndRenderCellDiv({
      areaModel,
      areaIdent,
      sideIdent,
      rowIndex,
      index: columnIndex,
      left,
      width,
      height,
      top,
      parent,
      lastRowOfModel
    });
    if (cellSelected) {
      this.dom.addClass(`ge-table-${areaIdent}-${sideIdent}-selected-range`, div);
    }
    if (fn) {
      this.cleanupFunctions[areaIdent].push(fn);
    }
  }


  /**
   * Render the header cell resize handle.
   *
   * @param {ArgsRenderHeaderCellResizeHandle} args - The arguments for rendering the handle.
   * @param {number} args.rowIndex - The index of the row.
   * @param {number} args.columnIndex - The index of the column.
   * @param {number} args.cellLeft - The left position of the cell.
   * @param {number} args.cellTop - The top position of the cell.
   * @param {number} args.cellWidth - The width of the cell.
   * @param {number} args.cellHeight - The height of the cell.
   * @param {HTMLElement} args.parent - The parent element to append the handle to.
   *
   * @return {void}
   */
  private renderHeaderCellResizeHandle(
    { rowIndex, columnIndex, cellLeft, cellTop, cellWidth, cellHeight, parent }: ArgsRenderHeaderCellResizeHandle
  ) {

    const domService = this.dom.domService;
    const handleWidth = this.tableOptions.columnResizeHandleWidthInPx ?? 2;

    const div = domService.createElement<HTMLDivElement>('div');
    domService.setAttribute(div, 'data-col-index', `${columnIndex}`);
    domService.setAttribute(div, 'data-row-index', `${rowIndex}`);
    domService.setAttribute(div, 'data-area', 'header');
    domService.setAttribute(div, 'data-ge-action', 'resize-column');
    // domService.setAttribute(div, 'data-ge-action', 'column-resize');
    domService.addClass(div, `ge-table-column-resize-handle`);
    domService.setStyle(div, 'display', 'clip');
    domService.setStyle(div, 'position', 'absolute');
    domService.setStyle(div, 'cursor', 'col-resize');
    domService.setStyle(div, 'left', `${(cellLeft + cellWidth - handleWidth)}px`);
    domService.setStyle(div, 'top', `${cellTop}px`);
    domService.setStyle(div, 'width', `${handleWidth}px`);
    domService.setStyle(div, 'height', `${cellHeight}px`);
    domService.appendChild(parent, div);
  }


}

