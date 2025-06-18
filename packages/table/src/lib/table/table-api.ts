import {TableScope} from "./table-scope";
import {ColumnDefIf} from "./data/tablemodel/column/column-def.if";
import {TableCellUpdateEventIf} from "./data/common/event/input/table-cell-update-event.if";
import { SelectionModel } from './selection/selection-model';
import { ActionId } from './action/action-id.type';
import { ShortcutActionIdMapping } from './action/shortcut-actionid-mapping.type';
import { SelectionModelIf } from './selection/selection-model.if';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { TableModelIf } from './data/tablemodel/table-model.if';
import { AreaModelIf } from './data/tablemodel/areamodel/area-model.if';
import { AreaModelObjectArray } from './data/tablemodel/areamodel/area-model-object-array';


/**
 * The TableApi class provides a set of methods to interact with a table's functionality.
 * It enables actions such as updating cells, scrolling, managing visibility, handling selection,
 * copying to the clipboard, downloading data, and triggering specific actions programmatically.
 */
export class TableApi {


  constructor(
    public readonly tableScope: TableScope
  ) {
  }


  /**
   * Updates the cells in the table based on the provided events.
   *
   * @param {TableCellUpdateEventIf[]} events - The array of events representing the updates to perform on the cells.
   * @param {boolean} [repaintAll=false] - Optional parameter indicating whether to repaint all cells or not. Default value is false. If true, the full table will be rendered. If false, the table cell will be rendered immediately.
   *
   * @return {void} - This method doesn't return anything.
   */
  updateCells(
    events: TableCellUpdateEventIf[],
    repaintAll: boolean = false): void {
    this.tableScope.updateCells(events, repaintAll);
  }


  /**
   * Notifies that the external filter has changed.
   *
   * @return {void}
   */
  externalFilterChanged(): void {
    this.tableScope.externalFilterChanged();
  };

  /**
   * Scrolls the table body to the specified pixel coordinates.
   *
   * @param {number} px - The horizontal pixel coordinate to scroll to. Defaults to 0.
   * @param {number} py - The vertical pixel coordinate to scroll to. Defaults to 0.
   * @return {void}
   */
  scrollToPixel(px: number = 0, py: number = 0) {
    this.tableScope.scrollToPixel(px, py);
  }


  /**
   * Scrolls to the specified index in both horizontal and vertical directions.
   *
   * @param {number} indexX - The index of the column to scroll to in the horizontal direction. Default is 0.
   * @param {number} indexY - The index of the row to scroll to in the vertical direction. Default is 0.
   *
   * @return undefined
   */
  scrollToIndex(indexX: number = 0, indexY: number = 0) {
    this.tableScope.scrollToIndex(indexX, indexY);
  }

  /**
   * Sets whether the header is visible or not.
   *
   * @param _visible - A boolean value indicating whether the header should be visible. Default value is true.
   *
   * @return undefined
   */
  setHeaderVisible(_visible: boolean = true) {
    // TODO setHeaderVisible
  }

  /**
   * Sets the visibility of a column in the table.
   *
   * @param {_column} - The column index or column definition to set visibility for.
   * @param {_visible=true} - The flag to set visibility to. true for visible, false for hidden.
   *
   * @return {void} - There is no return value.
   */
  setColumnVisible(_column: number | ColumnDefIf, _visible: boolean = true) {
    // TODO setColumnVisible
  }

  /**
   * Returns whether a column is visible or not.
   *
   * @param {number | ColumnDefIf} _column - The column index or the column definition.
   * @return {boolean} - True if the column is visible, false otherwise.
   */
  isColumnVisible(_column: number | ColumnDefIf): boolean {
    // TODO isColumnVisible
    return true;
  }

  /**
   * Checks if the header is visible.
   *
   * @return {boolean} - Returns true if the header is visible, otherwise returns false.
   */
  isHeaderVisible(): boolean {
    return true; // TODO isHeaderVisible
  }

  /**
   * Sets the visibility of the footer.
   *
   * @param {boolean} _visible - Indicates whether the footer should be visible or not. Default value is true.
   *
   * @return {void} - This method does not return any value.
   */
  setFooterVisible(_visible: boolean = true) {
    // TODO setFooterVisible
  }

  /**
   * Determines if the footer is visible.
   *
   * @returns {boolean} True if the footer is visible, false otherwise.
   */
  isFooterVisible(): boolean {
    return true; // TODO isFooterVisible
  }

  /**
   * Repaints the table.
   *
   * This method calls the repaint method of the tableScope object
   * to update and redraw the table based on the latest data.
   */
  repaint() {
    this.tableScope.repaint();
  }



  /**
   * Repaints the table scope with hard repaint.
   * Repaints the UI by resetting the size of the wrapper div,
   * adjusting the containers and rows, and performing additional adjustments
   * after scrolling.
   *
   * @return {void}
   */
  repaintHard() {
    this.tableScope.repaintHard();
  }


  /**
   * Recalculates the column widths of the table.
   *
   * @param {number} clientWidth - The width of the client area.
   *
   * @return {void}
   */
  recalcColumnWidths(clientWidth?: number) {
    this.tableScope.recalcColumnWidths(clientWidth);
  }


  /**
   * Clears the current selection of the table.
   * The table will be rendered automatically.
   *
   * @returns {void}
   */
  clearSelection() {
    this.tableScope.clearSelection(true);
  }

  /**
   * Sets the selection model for the table scope.
   *
   * @param {SelectionModel} sm - The selection model to be set.
   * @param {boolean} [repaint=true] - Indicates whether the table should be repainted after setting the selection model. Default value is true.
   *
   * @return {void}
   */
  setSelectionModel(sm: SelectionModel, repaint: boolean = true){
    this.tableScope.setSelectionModel(sm, repaint);
  }


  /**
   * Triggers the action with the given action ID.
   * This function can be invoked programmatically.
   *
   * @param {ActionId} actionId - The ID of the action to trigger.
   * @return {void}
   */
  triggerAction(actionId: ActionId){
    this.tableScope.onActionTriggered(actionId);
  }


  /**
   * Retrieves the mapping of shortcuts to corresponding action in the current table scope.
   *
   * @return {ShortcutActionIdMapping} The mapping of shortcuts to corresponding action.
   */
  getShortcutActionMapping(): ShortcutActionIdMapping {
    return this.tableScope.shortcutService.getShortcutActionMapping();
  }



  /**
   * Copies the selected data from the table to the clipboard.
   *
   * @return {Promise<string>} - A promise that resolves with the copied data as a string.
   */
  copyToClipboard() {
    return this.tableScope.copyService.copyToClipboard(
      this.tableScope.tableModel,
      this.tableScope.selectionModel(),
      this.tableScope.focusModel()
    );
  }

  /**
   * Generates and downloads an Excel file based on the table data.
   *
   * @param {string} fileName - The name of the Excel file to be downloaded. Defaults to 'table.xlsx'.
   * @param {string} author - The author of the Excel file. If not provided, it will remain empty.
   * @return {void} No return value. Initiates a file download of the Excel document.
   */
  downloadExcel(
    fileName: string = 'table.xlsx',
    author: string = ''
  ) {
    const matrix: Array<Array<any>> = [];
    const columnCount = this.tableScope.tableModel.getColumnCount()

    const areas: AreaIdent[] = ["header" , "body" , "footer"];
    for (const area of areas) {
      const areaModel = this.tableScope.tableModel.getAreaModel(area);
      const rowCount = areaModel?.getRowCount() ?? 0;
      for (let r = 0; r < rowCount; r++) {
        const row: any[] = [];
        matrix.push(row);
        for (let c = 0; c < columnCount; c++) {
          row.push(areaModel.getValueAt(r,c));
        }
      }
    }
    return this.tableScope.excelService.downloadExcel(matrix, fileName, author);
  }

  /**
   * Retrieves the current scope of the table.
   *
   * @returns {TableScope} The current scope of the table.
   */
  getTableScope(): TableScope {
    return this.tableScope;
  }

  /**
   * Retrieves the selection model of the table.
   *
   * @return {SelectionModelIf | undefined} The selection model of the table,
   * or undefined if no selection model is available.
   */
  getSelectionModel(): SelectionModelIf | undefined {
    return this.tableScope.selectionModel();
  }


  autoResizeColumns(recalcWrappers: boolean= true) {
    this.tableScope.autoResizeColumns(recalcWrappers);
  }

  recalcWrappers() {
    this.tableScope.recalcWrappers();
  }

  setColumnWidth(columnIndex: number, width: number): void{
    this.tableScope.setColumnWidth(columnIndex, width);
  }

  getTableModel() :TableModelIf{
    return this.tableScope.tableModel;
  }

  getBodyModel() :AreaModelIf {
    return this.tableScope.tableModel.getBodyModel();
  }

  setRows<T>(rows: T[]){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      // Type assertion with unknown as intermediate step for type safety
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      am.setRows(rows); 
    } else {
      console.warn('setRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  addRows<T>(rows: T[]){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      am.setRows([...allRows, ...rows]);
    } else {
      console.warn('addRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  addRowsAt<T>(rows: T[], rowIndex: number){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      am.setRows([...allRows.slice(0,rowIndex), ...rows, ...allRows.slice(rowIndex)]);
    }else {
      console.warn('addRowsAt<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  removeRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      const allRows = am.getAllRows().filter(r => !rows.some(rr => predicate(r, rr)));
      am.setRows(allRows);
    } else {
      console.warn('removeRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b): T[] {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      return am.getAllRows().filter(r => !rows.some(rr => predicate(r, rr)));

    } else {
      console.warn('findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
    return [];
  }

  updateRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b): void {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      for (const allRow of allRows) {
        for (const row of rows) {
          if (predicate(allRow, row)) {
            for (const key of Object.keys(row as any)) {
              (allRow as any)[key] = (row as any)[key];
            }
          }
        }     
      }

    } else {
      console.warn('updateRows<T>(rows: T[], predicate: (a: T, b: T) => boolean) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  reSort(){
    this.tableScope.reSort();
  }

  getDisplayedRowCount():number {
    return this.tableScope.getDisplayedRowCount();
  }
}
