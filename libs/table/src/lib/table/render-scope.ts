import { EleScope } from "./ele-scope";
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { ConvenienceDomService } from "./service/convenience-dom.service";
import { TableOptionsIf } from "./data/options/table-options.if";
import { CellRange } from "./data/common/cell-range";
import { RendererCleanupFnType } from "./renderer/renderer-cleanup-fn.type";
import { AreaIdent } from "./data/tablemodel/area-ident.type";
import { SideIdent } from "./data/side-ident.type";
import { DivScope } from "./data/div-scope.type";
import { AreaModelIf } from "./data/tablemodel/areamodel/area-model.if";
import { ArgsAdjustColumnsToRowParentParams } from "./data/common/args-adjust-columns-to-row-parent-params";
import { ArgsRenderCellDiv } from "./data/common/args-render-cell-div";
import { TreeArrowType } from "./data/common/tree-arrow.type";
import { TreeRow } from "./data/common/tree-row";
import { StoreStateScrollPosService } from "./service/store-state-scroll-pos.service";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { GeoData } from "./data/geo-data";
import { CellRendererIf } from "./renderer/cell-render.if";
import { SelectionModelIf } from "./selection/selection-model.if";
import { GetT } from "./data/common/get-t";
import { FocusModelIf } from "./focus/focus-model.if";
import { ColAndRowspanModel } from "./data/tablemodel/areamodel/col-and-rowspan-model";
import { AreaObjectMapType } from "./data/common/area-map.type";
import { AreaObjectMap } from "./data/common/area-map";
import { TableCellUpdateEventIf } from "./data/common/event/input/table-cell-update-event.if";
import {isAreaModelTree, isTreeRow} from "./instanceof-workaround";
import { SelectionModel } from './selection/selection-model';


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

  protected storeScrollPosStateService?: StoreStateScrollPosService;
  protected getSelectionModel?: GetT<SelectionModelIf>;
  protected getFocusModel?: GetT<FocusModelIf>; // TODO use it!
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
  // TODO delete? protected rangeEles: HTMLDivElement[] = [];
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
      //  'getSelectionModel' of the tableOptions is more important:
      this.getSelectionModel = this.tableOptions.getSelectionModel;
    }

    if (this.tableOptions?.getFocusModel) {
      this.getFocusModel = this.tableOptions.getFocusModel;
    }
    if (isAreaModelTree(tableModel.getAreaModel("body"))) {
      this.tree = true;
    }
    const aereaIds: AreaIdent[] = ["header", "body", "footer"];
    aereaIds.forEach(
      areaIdent => {
        this.colAndRowspanModels[areaIdent] = new ColAndRowspanModel(tableModel, tableModel.getAreaModel(areaIdent));
        this.colAndRowspanModels[areaIdent]?.init();
      }
    );
  }

  protected editing = false;
  isEditing(){
    return this.editing;
  }

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
        const input = document.querySelector("input.ge-table-cell-editor-input") as HTMLInputElement;
        if (input) {
          input.focus();
        }

      } else {
        this.resetEditorRenderer();
      }
    }
  }

  repaint() {
    this.adjustAfterScrolling();
  }

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
    this.adjustArea("footer");
    this.adjustArea("header");


    if (this.tableOptions.tableTopBorderVisible) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, 0),
        this.hostElement,
        "ge-table-border"));
    }
    if (this.tableOptions.tableBottomBorderVisible) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1),
        this.hostElement,
        "ge-table-border"));
    }
    // The border between east and center in  header/body/footer (full height):
    if (this.tableModel.getFixedLeftColumnCount() > 0) {
      this.removables.push(this.dom.addVerticalBorder(
        new GeoData(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0),
        this.hostElement,
        "ge-table-body-west-vertical-border"));
    }
    // The border between header and body (full width):
    if (this.tableModel.getAreaModel("header")?.getRowCount() > 0) {
      this.removables.push(this.dom.addHorizontalBorder(
        new GeoData(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight),
        this.hostElement,
        "ge-table-body-west-vertical-border"));
    }
  }

  checkForScrollPosSaving() {
    if (this.storeScrollPosStateService
      && this.tableOptions?.autoRestoreOptions?.autoRestoreScrollPosition) {
      this.storeScrollPosStateService.updateScrollOffset([this.scrollLeft, this.scrollTop]);
    }
  }

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

  protected getAreaAndSideIdentByAttr(srcElement: HTMLElement): [AreaIdent | undefined, SideIdent | undefined] {
    if (srcElement) {
      const dataArea = this.getStringByAttr(srcElement, "data-area");
      const dataSide = this.getStringByAttr(srcElement, "data-side");
      if (dataSide && dataArea) {
        return [dataArea, dataSide] as [AreaIdent, SideIdent];
      }
    }
    return [undefined, undefined];
  }

  protected getArea(rowIdent: AreaIdent, sideIdent: SideIdent): DivScope {
    if (rowIdent === "header") {
      if (sideIdent === "west") return this.areaHeaderWest;
      if (sideIdent === "center") return this.areaHeaderCenter;
      if (sideIdent === "east") return this.areaHeaderEast;
    } else if (rowIdent === "body") {
      if (sideIdent === "west") return this.areaBodyWest;
      if (sideIdent === "center") return this.areaBodyCenter;
      if (sideIdent === "east") return this.areaBodyEast;
    } else if (rowIdent === "footer") {
      if (sideIdent === "west") return this.areaFooterWest;
      if (sideIdent === "center") return this.areaFooterCenter;
      if (sideIdent === "east") return this.areaFooterEast;
    }
    throw Error(`Wrong area identifier: row:${rowIdent}, col:${sideIdent}`);
  }

  protected adjustBody() {
    const virtualRowDivTopF1 = this.areaBodyCenterGeo.height - this.tableModel.getContentHeightInPixel();
    const virtualRowDivTop = this.scrollFactorY * virtualRowDivTopF1;

    this.dom.setStyle(this.contentDiv, "top", `${this.scrollTop}px`);
    this.dom.setStyle(this.contentDiv, "left", `${this.scrollViewport.scrollLeft}px`);

    this.adjustArea("body", virtualRowDivTop);
  }

  protected getNumberByAttr(srcElement: HTMLElement, key: string): number {
    if (srcElement) {
      const attr = srcElement.closest("[" + key + "]")?.getAttribute(key);
      if (attr) return Number(attr);
    }
    return -1;
  }

  protected getStringByAttr(srcElement: HTMLElement, key: string): string {
    if (srcElement) {
      const attr = srcElement.closest("[" + key + "]")?.getAttribute(key);
      if (attr) return attr;
    }
    return "";
  }

  protected adjustArea(areaIdent: AreaIdent, yStart: number = 0) {
    const westArea = this.getArea(areaIdent, "west");
    const centerArea = this.getArea(areaIdent, "center");
    const eastArea = this.getArea(areaIdent, "east");
    const divHeight = centerArea.child.clientHeight;

    westArea.child.innerText = "";
    centerArea.child.innerText = "";
    eastArea.child.innerText = "";
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
        let rowDiv = this.dom.addRowDiv(centerArea, geo, index, areaIdent, "center");
        const centerStartCol = fixedLeftColumnCount;

        this.adjustColumnsToRowParent({
          areaIdent,
          sideIdent: "center",
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
          rowDiv = this.dom.addRowDiv(westArea, geo, index, areaIdent, "west");
          this.adjustColumnsToRowParent({
            areaIdent,
            sideIdent: "west",
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
          rowDiv = this.dom.addRowDiv(eastArea, geo, index, areaIdent, "east");
          this.adjustColumnsToRowParent({
            areaIdent,
            sideIdent: "east",
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
        if (areaIdent === "header" && this.tree && index === rowCount - 1) {
          const div =
            this.dom.applyStyle(
              this.dom.setAttribute(
                this.dom.addDiv(rowDiv, new GeoData(16, 20, 20, 8)),
                "data-ge-action", "toggleExpandCollapseAll"
              ),
              { "cursor": "pointer" }
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
      if (y > divHeight) { // + 1000) {
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
          let sideIdent: SideIdent = "center";
          if (range.c1 < fixedLeftColumnCount) {
            // West:
            child = westArea.child;
            sideIdent = "west";
          } else if (fixedRightColumnCount > 0 && range.c1 >= columnCount - fixedRightColumnCount) {
            // East:
            child = eastArea.child;
            sideIdent = "east";
          } else {
            // Center:
            const virtualRowDivLeftF1 = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
            xStart = (this.scrollFactorX * virtualRowDivLeftF1) - this.areaBodyWestGeo.width;
            sideIdent = "center";
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
      console.info('TODO here', range);

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
        gammaRange:range.gammaRange
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
        gammaRange:range.gammaRange
      });
    }

    if (areaModel.areaIdent === "header" && this.tableOptions.columnsResizable) {
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

    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let virtualRowDivLeft = 0;
    if (!verticalFixed) {
      const virtualRowDivLeftF1 = (this.areaBodyCenterGeo.width) - this.tableModel.getContentWidthInPixel();
      virtualRowDivLeft = this.scrollFactorX * virtualRowDivLeftF1;
    }

    const top = 0;
    const renderSelection = !!(areaIdent === "body" && sideIdent);

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
            skip = true; // for the body area we don't want to to render the small single cells
          }
        }

        if (this.draggingTargetColumnIndex === index
          && areaIdent !== "header") {
          // For a running drag and drop action:
          this.renderDragTargetDiv(parent, left, top, width, height);
          const geo1 = { left, top, width, height };
          this.dom.addColumnBorderDivs(this.tableOptions, parent, geo1, areaIdent, sideIdent);

        } else {
          const cellSelected = this.renderSelectedBackgroundDiv(skip, renderSelection, sideIdent, areaModel, rowIndex, index, parent, left, top, width, height);

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
              gammaRange:true
            });
          }
          if (areaIdent === "header" && this.tableOptions.columnsResizable) {
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
      lastRowOfModel,
      gammaRange: _gammaRange
    }: ArgsRenderCellDiv): [HTMLDivElement, RendererCleanupFnType | undefined] {


    const editor = this.editorRenderer && this.editorRendererRow === rowIndex && this.editorRendererColumn === index;
    const cellRenderer = (editor) ? this.editorRenderer : areaModel.getCellRenderer(rowIndex, index);
    const geo = { left, width, height, top, index };
    const rowObject = areaModel.getRowByIndex(rowIndex);
    let treeArrow: TreeArrowType = "none";

    const arrowIndexOk = index === this.getTreeArrowColumnIndex();

    if (arrowIndexOk && isTreeRow(rowObject)) {
      const tr = rowObject as TreeRow<any>;
      if (tr.children?.length) {
        if (tr.expanded) {
          treeArrow = "expanded";
        } else {
          treeArrow = "collapsed";
        }
      } else {
        treeArrow = "hidden";
      }
    }

    let sortState = undefined;
    if (areaIdent === "header") {
      const columnDef = this.tableModel.getColumnDef(index);
      if (!columnDef?.sortIconVisible || columnDef?.sortIconVisible()) {
        sortState = columnDef?.sortState;
      }
    }

    const val = areaModel.getValueAt(rowIndex, index);
    const text = cellRenderer ? "" : `${val}`;
    const checkedType = areaModel.isRowChecked(rowIndex);
    const cell = this.dom.addColumnDiv(
      parent, geo, rowIndex, index, areaIdent, sideIdent,
      text, treeArrow, this.tableOptions, checkedType, sortState);

    const tooltip = areaModel.getTooltipAt(rowIndex, index);
    if (tooltip) {
      this.dom.setAttribute(cell, "title", tooltip);
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
    if (this.getFocusModel && areaIdent === "body") {
      const fm = this.getFocusModel();
      if (fm?.hasFocus(rowIndex, index)) {
        this.dom.addFocusBorderDivs(parent, geo, {});
      }
    }
    if (areaIdent === "header") {
      this.dom.setAttribute(cell, "data-ge-action", "drag-column");
    }

    const styles = areaModel.getCustomStyleAt(rowIndex, index);
    if (styles) {
      for (const css in styles) {
        this.dom.setStyle(cell, css, styles[css]);
      }
    }
    return [cell, fn];
  }

  protected applyCssClasses(ele: HTMLDivElement, cssClasses: {[key:string]: boolean} = {}){
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


  public rerenderCellContent(
    {area, rowIndex, columnIndex, value, cssClasses} : TableCellUpdateEventIf
  ){
    const areaModel = this.tableModel.getAreaModel(area);
    const selector = 'div[data-col-index="'+columnIndex+'"][data-row-index="'+rowIndex+'"][data-area="'+area+'"]';
    const cell = document.querySelector(selector) as HTMLDivElement;

    if (cell) {
      let fn: RendererCleanupFnType | undefined = undefined;
      const editor = this.editorRenderer && this.editorRendererRow === rowIndex && this.editorRendererColumn === columnIndex;
      const cellRenderer = (editor) ? this.editorRenderer : areaModel.getCellRenderer(rowIndex, columnIndex);

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

  protected getColumnWidths(startIndex: number, endIndex: number): number[] {
    const ret: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      ret.push(this.tableModel.getColumnWidth(i));
    }
    return ret;
  }

  protected getRowHeights(startIndex: number, endIndex: number, areaModel: AreaModelIf): number[] {
    const ret: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      ret.push(areaModel.getRowHeight(i));
    }
    return ret;
  }

  protected adjustHoverRows(mouseMoveEvent: GeMouseEvent) {
    if (this.tableOptions.hoverRowVisible && mouseMoveEvent.rowIndex > -1) {
      const width = this.hostElement.clientWidth;
      const rowHeight = this.tableModel.getAreaModel("body").getRowHeight(mouseMoveEvent.rowIndex);
      const top = mouseMoveEvent.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        "left": "0",
        "top": top + "px",
        "width": width + "px",
        "height": rowHeight + "px",
        "display": "block"
      });
    } else {
      this.hideHoverRow();
    }
  }

  protected hideHoverRow() {
    this.dom.applyStyle(this.hoverRow, {
      "display": "none"
    });
  }

  protected adjustHoverColumns(mouseMoveEvent: GeMouseEvent) {
    if (this.tableOptions.hoverColumnVisible && mouseMoveEvent.rowIndex > -1) {
      const height = this.hostElement.clientHeight;
      const width = this.tableModel.getColumnWidth(mouseMoveEvent.columnIndex);
      const fixedWest = this.areaBodyWestGeo.width;
      const left = mouseMoveEvent.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - fixedWest;
      this.dom.applyStyle(this.hoverColumn, {
        "left": (left) + "px",
        "top": "0px",
        "width": width + "px",
        "height": height + "px",
        "display": "block"
      });
    } else {
      this.hideHoverColumn();
    }
  }

  protected hideHoverColumn() {
    this.dom.applyStyle(this.hoverColumn, {
      "display": "none"
    });
  }

  protected debounce(fn: Function, delay: number = 1000) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    this.debounceTimeout = setTimeout(fn.bind(this), delay);
  }

  private renderDragTargetDiv(parent: HTMLDivElement, left: number, top: number, width: number, height: number): HTMLDivElement {
    const div = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass("ge-table-drop-zone", parent)
    );
    this.dom.setStyle(div, "left", `${left}px`);
    this.dom.setStyle(div, "top", `${top}px`);
    this.dom.setStyle(div, "width", `${width}px`);
    this.dom.setStyle(div, "height", `${height}px`);
    return div;
  }


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
            this.dom.setStyle(div, "left", `${left}px`);
            this.dom.setStyle(div, "top", `${top}px`);
            this.dom.setStyle(div, "width", `${width}px`);
            this.dom.setStyle(div, "height", `${height}px`);
          }
        }
      }
    }
    return cellSelected;
  }

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
      lastRowOfModel,
      gammaRange
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
      lastRowOfModel,
      gammaRange
    });
    if (cellSelected) {
      this.dom.addClass(`ge-table-${areaIdent}-${sideIdent}-selected-range`, div);
    }
    if (fn) {
      this.cleanupFunctions[areaIdent].push(fn);
    }
  }


  private renderHeaderCellResizeHandle(
    { rowIndex, columnIndex, cellLeft, cellTop, cellWidth, cellHeight, parent }: ArgsRenderHeaderCellResizeHandle
  ) {

    const domService = this.dom.domService;
    const handleWidth = this.tableOptions.columnResizeHandleWidthInPx ?? 2;

    const div = domService.createElement<HTMLDivElement>("div");
    domService.setAttribute(div, "data-col-index", `${columnIndex}`);
    domService.setAttribute(div, "data-row-index", `${rowIndex}`);
    domService.setAttribute(div, "data-area", "header");
    domService.setAttribute(div, "data-ge-action", "resize-column");
    // domService.setAttribute(div, 'data-ge-action', 'column-resize');
    domService.addClass(div, `ge-table-column-resize-handle`);
    domService.setStyle(div, "display", "clip");
    domService.setStyle(div, "position", "absolute");
    domService.setStyle(div, "cursor", "col-resize");
    domService.setStyle(div, "left", `${(cellLeft + cellWidth - handleWidth)}px`);
    domService.setStyle(div, "top", `${cellTop}px`);
    domService.setStyle(div, "width", `${handleWidth}px`);
    domService.setStyle(div, "height", `${cellHeight}px`);
    domService.appendChild(parent, div);
  }


}

