import { TableModelIf } from "./table-model.if";
import { Padding } from "./padding";
import { AreaIdent } from "./area-ident.type";
import { AreaModelIf } from "./areamodel/area-model.if";
import { SideIdent } from "../side-ident.type";
import { DefaultRowHeightsIf } from "../options/default-row-heights.if";
import { DefaultRowHeights } from "../options/default-row-heights";
import { ColumnDefIf } from "./column/column-def.if";
import { FilterFunction } from "../common/filter-function";
import { SortItem } from "../common/sort-item";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { GetT } from "../common/get-t";
import { CheckboxModel } from "../../checkbox/checkbox-model";
import {isCheckboxColumnDef} from "../../instanceof-workaround";


/**
 * This is a default implementation of TableModelIf.
 * Ths TableModel is on one hand a container for the header, body, and footer models
 * (see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
 * the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).
 *
 * If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
 * header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
 * will result in the presence of an east area.
 *
 * <pre>
 *  +----------------+-------------------+--------------+
 *  |  header/west   |  header/center    | header/east  |
 *  +----------------+-------------------+--------------+
 *  |  body/west     |  body/center      | body/east    |
 *  +----------------+-------------------+--------------+
 *  |  footer/west   |  footer/center    | footer/east  |
 *  +----------------+-------------------+--------------+ </pre>
 *
 */
export class TableModel implements TableModelIf {

  protected rowCount = 0;
  protected contentHeightInPx = 0;
  protected contentWidthInPx = 0;

  // in case of a fixed header, left or right column, footer:
  protected padding = new Padding(0, 0, 0, 0); // the dimension of the 'body/center'
  protected xPositions: number[] = [];

  constructor(
    public readonly headerAreaModel: AreaModelIf,
    public readonly bodyAreaModel: AreaModelIf,
    public readonly footerAreaModel: AreaModelIf,
    public readonly fixedLeftColumnCount: number = 0,
    public readonly fixedRightColumnCount: number = 0,
    public readonly rowCheckboxVisible: boolean = false,
    public readonly defaultRowHeights: DefaultRowHeightsIf = new DefaultRowHeights(),
    public columnDefs: ColumnDefIf[] = [],
    public columnSizes: number[] = [],
    protected overridingColumnWidth: number = -1,
    protected columnCount: number = 0,
    protected parentSize: number = 400, // can be important when we have percentage widths,
    public readonly getSelectionModel: GetT<SelectionModelIf> = () => undefined
  ) {
    headerAreaModel.areaIdent = "header";
    bodyAreaModel.areaIdent = "body";
    footerAreaModel.areaIdent = "footer";
    if (!this.columnCount) {
      if (this.columnDefs?.length) {
        this.columnCount = this.columnDefs.length;
      } else if (this.columnSizes?.length) {
        this.columnCount = this.columnSizes?.length;
      }
    }
    if (this.columnDefs?.length
      && isCheckboxColumnDef(this.columnDefs[0])
      && !bodyAreaModel.rowSelectionModel) {
      bodyAreaModel.rowSelectionModel = new CheckboxModel();
    }
  }

  init() {
    console.info('init()...'); // TODO
    this.recalcSize(this.parentSize);
    if (this.overridingColumnWidth === -1) {
      this.calcXPositions();
    }
    if (this.headerAreaModel) {
      this.headerAreaModel.init();
    }
    if (this.bodyAreaModel) {
      this.bodyAreaModel.init();
    }
    if (this.footerAreaModel) {
      this.footerAreaModel.init();
    }
  }

  setParentWidth(widthInPixel: number): void {
    this.parentSize = widthInPixel;
  }

  /**
   * Retrieves the count of columns in the current instance.
   *
   * @return {number} The count of columns.
   */
  getColumnCount(): number {
    return this.columnCount;
  };

  /**
   * Sets the width in pixel of a column (by columnIndex) in a table.
   *
   * @param {number} columnIndex - The index of the column.
   * @param {number} width - The desired width of the column.
   * @return {void}
   */
  setColumnWidth(columnIndex: number, width: number): void {
    width = Math.max(0, width);
    if (this.overridingColumnWidth !== -1) {
      this.overridingColumnWidth = width;
    }
    if (columnIndex > -1 && columnIndex < this.columnSizes?.length) {
      this.columnSizes[columnIndex] = width;
    }
    this.recalcContentWidthInPx();
  }

  /**
   * Retrieves the width of a column specified by its index.
   *
   * @param {number} columnIndex - The index of the desired column.
   * @return {number} - The width of the specified column.
   */
  getColumnWidth(columnIndex: number): number {
    const cd = this.getColumnDef(columnIndex);
    if (cd && cd.isVisible && !cd.isVisible()) {
      return 0;
    }
    if (this.overridingColumnWidth !== -1) {
      return this.overridingColumnWidth;
    }
    if (columnIndex > -1 && columnIndex < this.columnSizes?.length) {
      return this.columnSizes[columnIndex];
    }
    return 0;
  };

  /**
   * Retrieves the x position for a given column index.
   *
   * @param {number} columnIndex - The index of the column.
   * @return {number} - The x position of the column.
   */
  getXPosByColumnIndex(columnIndex: number): number {
    if (columnIndex === 0) {
      return 0;
    }
    if (this.overridingColumnWidth > -1) {
      return this.overridingColumnWidth * columnIndex;
    }
    return this.xPositions[columnIndex];
  }

  /**
   * Recalculates the size (width, height, padding)  of the elements based on the client width.
   *
   * @param {number} clientWidth - The width of the client area.
   *
   * @return {void} - This method does not return a value.
   */
  recalcSize(clientWidth: number) {
    this.recalcColumnWidths(clientWidth);
    this.recalcHeightAndPadding();
  }

  /**
   * Recalculates the height and padding for the body area.
   *
   * This method retrieves the area model for the "body" area,
   * and updates the rowCount property with the row count of the model.
   *
   * The contentHeightInPx property is then updated with the height of the "body" area.
   *
   * The method calls the recalcContentWidthInPx() method to recalculate the content width.
   *
   * Finally, the method calls the recalcPadding() method to recalculate the padding.
   *
   * @return {void}
   */
  recalcHeightAndPadding() {
    const bodyModel = this.getAreaModel("body");
    this.rowCount = bodyModel.getRowCount();
    this.contentHeightInPx = this.getAreaHeight("body");
    this.recalcContentWidthInPx();

    this.recalcPadding();
  }

  /**
   * Recalculates the padding of an element based on the width and height of its surrounding areas.
   *
   * @method recalcPadding
   *
   * @returns {void}
   */
  recalcPadding() {
    const westWidth = this.getSideAreaWidth("west");
    const eastWidth = this.getSideAreaWidth("east");
    const headerHeight = this.getAreaHeight("header");
    const footerHeight = this.getAreaHeight("footer");

    this.padding = new Padding(
      headerHeight,
      eastWidth,
      footerHeight,
      westWidth);
  }

  /**
   * Retrieves the padding value.
   *
   * @returns {Padding} The padding value.
   */
  getPadding(): Padding {
    return this.padding;
  }

  /**
   * Returns the height of the content in pixels.
   *
   * @returns {number} The height of the content in pixels.
   */
  getContentHeightInPixel(): number {
    return this.contentHeightInPx;
  }

  /**
   * Returns the width of the content in pixels.
   *
   * @returns {number} The width of the content in pixels.
   */
  getContentWidthInPixel(): number {
    return this.contentWidthInPx;
  }

  /**
   * Returns the height of the specified row in the given row area identifier.
   *
   * @param {AreaIdent} rowAreaIdent - The row area identifier.
   * @param {number} rowIndex - The index of the row.
   * @return {number} - The height of the specified row.
   */
  getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number {
    return this.getAreaModel(rowAreaIdent).getRowHeight(rowIndex);
  }

  /**
   * Retrieves the model for the given row area identifier.
   *
   * @param {AreaIdent} rowAreaIdent - The identifier of the row area.
   * @return {AreaModelIf} - The model of the specified row area.
   */
  getModel(rowAreaIdent: AreaIdent): AreaModelIf {
    return this.getAreaModel(rowAreaIdent);
  }

  /**
   * Calculates the height of the area identified by the given area identifier.
   *
   * @param {AreaIdent} areaIdent - The identifier of the area.
   * @return {number} - The height of the area.
   */
  getAreaHeight(areaIdent: AreaIdent): number {
    const model = this.getModel(areaIdent);
    const rowCount = model.getRowCount();
    if (this.defaultRowHeights[areaIdent]) {
      return rowCount * this.defaultRowHeights[areaIdent];
    }

    let ret = 0;
    for (let i = 0; i < rowCount; i++) {
      ret = ret + model.getRowHeight(i);
    }
    return ret;
  }

  /**
   * Returns the total width of the side area identified by sideIdent.
   *
   * @param {SideIdent} sideIdent - The identifier of the side area ("west" | "center" | "east").
   * @return {number} - The total width in pixels of the side area.
   */
  getSideAreaWidth(sideIdent: SideIdent): number {
    const [cStart, cEnd] = this.getSideStartAndEndColumnIndex(sideIdent);
    let ret = 0;
    for (let i = cStart; i <= cEnd; i++) {
      ret = ret + this.getColumnWidth(i);
    }
    return ret;
  }

  /**
   * Retrieves the start and end column indices based on the given side identifier.
   *
   * @param {SideIdent} sideIdent - The side identifier, which can be "west", "east", or "center".
   * @return {[number, number]} - An array containing the start and end column indices.
   */
  getSideStartAndEndColumnIndex(sideIdent: SideIdent): [number, number] {
    const c1 = this.getFixedLeftColumnCount();
    const c2 = this.getFixedRightColumnCount();

    let cStart = 0;
    let cEnd = this.columnCount - 1;
    if (sideIdent === "west") {
      cEnd = c1 - 1;
    } else if (sideIdent === "east") {
      cStart = this.columnCount - c2;
    } else {
      // center:
      cStart = c1;
      cEnd = this.columnCount - c2 - 1;
    }
    return [cStart, cEnd];
  }

  /**
   * Returns the column definition at the specified index.
   *
   * @param {number} index - The index of the column definition to retrieve.
   * @returns {ColumnDefIf | undefined} - The column definition at the specified index, or undefined if no ColumnDef is specified for the given column
   */
  getColumnDef(index: number): ColumnDefIf | undefined {
    if (index < this.columnDefs.length) {
      return this.columnDefs[index];
    }
    return undefined;
  }

  /**
   * Retrieves the count of fixed left columns.
   *
   * @returns {number} The count of fixed left columns.
   */
  getFixedLeftColumnCount(): number {
    return this.fixedLeftColumnCount;
  }

  /**
   * Returns the number of fixed right columns.
   *
   * @returns {number} The number of fixed right columns.
   */
  getFixedRightColumnCount(): number {
    return this.fixedRightColumnCount;
  }

  /**
   * Retrieves the area model (header, body or footer) based on the area identification.
   *
   * @param {AreaIdent} area - The identifier of the area.
   * @return {AreaModelIf} The area model corresponding to the given area identification.
   * @throws {Error} If the area identification is invalid.
   */
  getAreaModel(area: AreaIdent): AreaModelIf {
    if (area === "header") {
      return this.headerAreaModel;
    }
    if (area === "body") {
      return this.bodyAreaModel;
    }
    if (area === "footer") {
      return this.footerAreaModel;
    }
    throw new Error("Wrong ident.");
  }

  /**
   * Returns the body area model.
   *
   * @returns {AreaModelIf} The body area model.
   */
  getBodyModel(): AreaModelIf {
    return this.bodyAreaModel;
  }

  /**
   * Checks if the footer is visible.
   *
   * @returns {boolean} True if the footer is visible, false otherwise.
   */
  isFooterVisibe(): boolean {
    return (this.footerAreaModel?.getRowCount() ?? 0) > 0;
  }

  /**
   * Checks if the header area is visible.
   * @return {boolean} Returns true if the header area is visible, otherwise false.
   */
  isHeaderVisibe(): boolean {
    return (this.headerAreaModel?.getRowCount() ?? 0) > 0;
  }

  /**
   * Checks whether the row checkbox is visible.
   *
   * @returns {boolean} True if the row checkbox is visible, otherwise false.
   */
  isRowCheckboxVisible(): boolean {
    return this.rowCheckboxVisible;
  }

  /**
   * This method is called when an external filter is changed.
   *
   * @param {FilterFunction<T>} predictFn - The function used to predict whether an element should be filtered or not.
   * @return {void}
   */
  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    this.getAreaModel("body").externalFilterChanged(predictFn);
  }

  /**
   * Sorts the items using the given sortItems array.
   *
   * @param {SortItem[]} sortItems - An array of sort items to sort the items.
   * @return {boolean} - Returns true if the sorting is successful, otherwise false.
   */
  doSort(sortItems: SortItem[]): boolean {
    return this.getAreaModel("body").doSort(sortItems);
  }

  /**
   * Returns an array of ColumnDefIf objects or undefined.
   *
   * @return {ColumnDefIf[] | undefined} An array of ColumnDefIf objects or undefined.
   */
  getColumnDefs(): ColumnDefIf[] | undefined {
    return this.columnDefs;
  }

  /**
   * Retrieves the property key of the table row business object associated with the specified column index.
   * It's only available when columnDefs are specified.
   *
   * @param {number} columnIndex - The index of the column to retrieve the property from.
   * @return {string} The property associated with the specified column index.
   */
  getColumnProperty(columnIndex: number): string {
    if (!this.columnDefs) {
      return '';
    }
    return this.columnDefs[columnIndex].property;
  }

  /**
   * Retrieves the row object from the body model at the specified index.
   *
   * @param {number} rowIndex - The index of the row to retrieve.
   *
   * @return {any} The row object at the specified index.
   */
  getBodyRowByIndex(rowIndex: number): any {
    return this.getBodyModel().getRowByIndex(rowIndex);
  }

  /**
   * Checks if a column at the given index is sortable.
   *
   * @param {number} columnIndex - The index of the column to check.
   *
   * @returns {boolean} - `true` if the column is sortable, `false` otherwise.
   */
  isSortable(columnIndex: number): boolean {
    if (this.columnDefs &&
      columnIndex < this.columnDefs.length) {
      const checkSortability = this.columnDefs[columnIndex]?.sortable;
      if (typeof checkSortability === 'function') {
        return checkSortability();
      }
    }
    return false;
  }

  /**
   * Moves a column in the column order.
   *
   * @param {number} sourceColumnIndex - The index of the column to be moved.
   * @param {number} targetColumnIndex - The index where the column should be moved to.
   *
   * @returns {void}
   */
  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    this.arrayMove(this.columnDefs, sourceColumnIndex, targetColumnIndex);
    this.arrayMove(this.columnSizes, sourceColumnIndex, targetColumnIndex);
    this.headerAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.bodyAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.footerAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.calcXPositions();
  }


  private recalcColumnWidths(clientWidth: number) {
    console.info('recalcColumnWidths...', clientWidth); // TODO
    if (!this.columnDefs?.length && !this.columnSizes?.length) {
      this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth);
    }
    if (this.columnDefs?.length) {
      this.columnSizes = this.columnDefs.map(def => {
        console.info('def.width', def.width); // TODO
        if (def.width.unit === "%" && clientWidth) {
          // only for a % value we have to check min and max:
          let px = Math.floor(def.width.value * clientWidth / 100);
          if (def.minWidth) {
            const pxMin = def.minWidth.unit === "px" ? def.minWidth.value : Math.floor(def.minWidth.value * clientWidth / 100);
            px = Math.max(pxMin, px);
          }
          if (def.maxWidth) {
            const pxMax = def.maxWidth.unit === "px" ? def.maxWidth.value : Math.floor(def.maxWidth.value * clientWidth / 100);
            px = Math.min(pxMax, px);
          }
          return px;
        }
        return def.width.value;
      });
    }
    console.info('recalcColumnWidths. end', this.columnSizes); // TODO
  }

  private arrayMove(arr: any[], fromIndex: number, toIndex: number) {
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
  }

  private recalcContentWidthInPx() {
    this.contentWidthInPx = this.getSideAreaWidth("center");
  }

  private calcXPositions() {
    const columnCount = this.getColumnCount();
    this.xPositions = new Array(columnCount + 1);
    this.xPositions[0] = 0;
    for (let i = 0; i < columnCount; i++) {
      this.xPositions[i + 1] = this.getColumnWidth(i) + this.xPositions[i];
    }
  }


}


