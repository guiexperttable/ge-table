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


  /**
   * Automatically resizes all columns to fit their content.
   *
   * @param {boolean} recalcWrappers - Determines whether to recalculate wrapper dimensions after resizing columns.
   *                                   Default value is true.
   * 
   * @return {void} - This method doesn't return anything.
   */
  autoResizeColumns(recalcWrappers: boolean= true) {
    this.tableScope.autoResizeColumns(recalcWrappers);
  }

  /**
   * Recalculates the dimensions of all wrapper elements in the table.
   * 
   * This method is typically called after changes to the table structure or content
   * that might affect the layout, such as resizing columns or changing row heights.
   * It ensures that all wrapper elements are properly sized to match their content.
   *
   * @return {void} - This method doesn't return anything.
   */
  recalcWrappers() {
    this.tableScope.recalcWrappers();
  }

  /**
   * Sets the width of a specific column in the table.
   *
   * @param {number} columnIndex - The index of the column to resize.
   * @param {number} width - The new width to set for the column, in pixels.
   * 
   * @return {void} - This method doesn't return anything.
   */
  setColumnWidth(columnIndex: number, width: number): void{
    this.tableScope.setColumnWidth(columnIndex, width);
  }

  /**
   * Retrieves the table model that contains all data and structure information for the table.
   *
   * @return {TableModelIf} The table model interface that provides access to the table's data structure,
   *                        including header, body, and footer area models.
   */
  getTableModel() :TableModelIf{
    return this.tableScope.tableModel;
  }

  /**
   * Retrieves the area model for the body section of the table.
   *
   * @return {AreaModelIf} The area model interface that provides access to the table's body data,
   *                       including rows, cells, and their values.
   */
  getBodyModel() :AreaModelIf {
    return this.tableScope.tableModel.getBodyModel();
  }

  /**
   * Sets the rows data for the table body, replacing any existing rows.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to set as the table's rows
   * 
   * @description
   * This method replaces all existing rows in the table body with the provided array of data objects.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
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

  /**
   * Adds new rows to the end of the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to append to the table's existing rows
   * 
   * @description
   * This method appends the provided array of data objects to the end of the existing rows in the table body.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
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

  /**
   * Inserts new rows at a specific position in the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to insert into the table
   * @param {number} rowIndex - The index position where the new rows should be inserted
   * 
   * @description
   * This method inserts the provided array of data objects at the specified index position in the table body.
   * Existing rows at or after the specified index will be shifted down.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
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

  /**
   * Removes specified rows from the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to remove from the table
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines if two rows match
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the rows are considered a match
   * 
   * @description
   * This method removes rows from the table body that match any of the provided rows based on the predicate function.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
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

  /**
   * Searches for and returns rows from the table body that match the given criteria.
   *
   * @template T - The type of elements in the rows array
   * 
   * @description
   * This method searches through the table body model for rows that match the provided criteria.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * The method uses a predicate function to determine matches between rows.
   *
   * @param {T[]} rows - An array of rows to search for in the table body
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines if two rows match
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the rows are considered a match
   *   - Parameters:
   *     - a: The row from the table body being checked
   *     - b: The row from the input array being searched for
   *
   * @returns {T[]} An array containing all matching rows found in the table body
   *   - Returns an empty array if:
   *     - The body model is not an instance of AreaModelObjectArray
   *     - No matches are found
   *
   * @example
   * // Find rows with simple equality comparison
   * const matchingRows = table.findRows([row1, row2]);
   *
   * @example
   * // Find rows with custom comparison logic
   * const matchingRows = table.findRows([row1, row2], (a, b) => a.id === b.id);
   *
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b): T[] {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      return am.getAllRows().filter(r => rows.some(rr => predicate(r, rr)));
    } else {
      console.warn('findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
    return [];
  }

  /**
   * Searches through the filtered rows of the table to find a row that matches specific criteria.
   * This method only works with tables that use AreaModelObjectArray as their body model.
   *
   * @template T - The type of the row objects in the table
   * 
   * @param {Partial<T>} criteria - A partial object containing the search criteria.
   *                               Only needs to include the properties you want to match against.
   * 
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that defines how to match rows against the criteria.
   *                                                               Returns true if the row matches the criteria, false otherwise.
   * 
   * @returns {T | undefined} The first matching row from the filtered rows, or undefined if no match is found
   *                         or if the body model is not an instance of AreaModelObjectArray.
   * 
   * @example
   * ```typescript
   * interface Person {
   *   id: number;
   *   name: string;
   *   age: number;
   * }
   * 
   * // Find a person by exact match
   * const criteria = { name: "John", age: 30 };
   * const person = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   criteria,
   *   (criteria, row) => row.name === criteria.name && row.age === criteria.age
   * );
   * 
   * // Find a person by partial name match
   * const searchCriteria = { name: "Jo" };
   * const person2 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   searchCriteria,
   *   (criteria, row) => row.name.toLowerCase().includes(criteria.name!.toLowerCase())
   * );
   * 
   * // Find a person within age range
   * const ageCriteria = { minAge: 25, maxAge: 35 };
   * const person3 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   ageCriteria,
   *   (criteria, row) => row.age >= criteria.minAge! && row.age <= criteria.maxAge!
   * );
   * ```
   * 
   * @throws {Warning} Logs a warning to console if the body model is not an instance of AreaModelObjectArray
   * 
   * @remarks
   * - This method only searches through filtered rows (rows that are currently visible in the table)
   * - If you need to search through all rows (including filtered out ones), use findRowFromAllRowsByAllCriteria instead
   * - The predicate function gives you full control over how to match rows against your criteria
   * - Returns undefined if either no match is found or if the table's body model is not compatible
   */
  findRowFromFilteredRowsByAllCriteria<T>(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      return am.getFilteredRows().find(row => predicate(criteria, row));
    } else {
      console.warn('findRowFromFilteredRowsByAllCriteria(...) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
    return undefined;
  }

  /**
   * Searches through all rows in the table's body model to find a row that matches specified criteria.
   * This method works only with AreaModelObjectArray<T> body models.
   *
   * @template T - The type of objects/rows in the table
   * 
   * @param {Partial<T>} criteria - A partial object containing the search criteria.
   *                               Only needs to include the properties you want to match against.
   * 
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that defines how to match rows against the criteria.
   *                                                               Returns true if the row matches the criteria, false otherwise.
   * 
   * @returns {T | undefined} The first matching row, or undefined if no match is found or if the body model is not AreaModelObjectArray.
   * 
   * @example
   * // Find a user row by id and name
   * const criteria = { id: 1, name: "John" };
   * const user = tableApi.findRowFromAllRowsByAllCriteria(criteria, 
   *   (criteria, row) => row.id === criteria.id && row.name === criteria.name
   * );
   * 
   * @example
   * // Find a product row with partial match on name
   * const criteria = { name: "Phone" };
   * const product = tableApi.findRowFromAllRowsByAllCriteria(criteria,
   *   (criteria, row) => row.name.includes(criteria.name)
   * );
   * 
   * @example
   * // Find an order with complex matching logic
   * const criteria = { total: 100, status: "pending" };
   * const order = tableApi.findRowFromAllRowsByAllCriteria(criteria,
   *   (criteria, row) => {
   *     return row.total > criteria.total && 
   *            row.status === criteria.status &&
   *            row.items.length > 0;
   *   }
   * );
   * 
   * @throws {Warning} Logs a warning to console if the body model is not an instance of AreaModelObjectArray
   */
  findRowFromAllRowsByAllCriteria<T>(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
      const bodyModel = this.getBodyModel();
      if (bodyModel instanceof AreaModelObjectArray){
        const am = bodyModel as unknown as AreaModelObjectArray<T>;
        return am.getAllRows().find(row => predicate(criteria, row));
      } else {
        console.warn('findRowFromAllRowsByAllCriteria(...) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
      }
    return undefined;
  }

  /**
   * Updates existing rows in the table body with new data.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects containing the updated values
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines which rows to update
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the row should be updated
   * 
   * @description
   * This method updates existing rows in the table body with new values from the provided rows array.
   * For each row in the table, if the predicate returns true when compared with any row in the provided array,
   * all properties from the provided row will be copied to the existing row.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
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

  /**
   * Re-applies the current sorting configuration to the table data.
   *
   * @description
   * This method triggers a re-sort of the table data using the current sorting configuration.
   * It's useful when the underlying data has changed and needs to be re-sorted without changing
   * the sort columns or direction.
   * 
   * @return {void} - This method doesn't return anything.
   */
  reSort(){
    this.tableScope.reSort();
  }

  /**
   * Sorts the table data using a custom comparison function.
   * 
   * This method allows sorting of table rows by providing a custom comparison function. The comparison function
   * should follow the standard JavaScript array sort comparator pattern, returning:
   * - A negative number if the first element should be sorted before the second
   * - A positive number if the first element should be sorted after the second
   * - Zero if the elements are equal
   * 
   * @param compareFn - A function that defines the sort order. The function should accept two arguments
   *                   and return a number indicating their relative order:
   *                   - Negative number: first argument should come before second
   *                   - Positive number: second argument should come before first
   *                   - Zero: elements are equal
   * 
   * @example
   * // Sort table rows by a specific property in ascending order
   * table.api.sort((a, b) => {
   *   if (a.name < b.name) return -1;
   *   if (a.name > b.name) return 1;
   *   return 0;
   * });
   * 
   * @example
   * // Sort numbers in descending order
   * table.api.sort((a, b) => b.value - a.value);
   * 
   * @example
   * // Sort with multiple criteria
   * table.api.sort((a, b) => {
   *   // First sort by status
   *   const statusCompare = a.status.localeCompare(b.status);
   *   if (statusCompare !== 0) return statusCompare;
   *   
   *   // Then sort by name if status is equal
   *   return a.name.localeCompare(b.name);
   * });
   * 
   * @example
   * // Case-insensitive string sorting
   * table.api.sort((a, b) => 
   *   a.name.toLowerCase().localeCompare(b.name.toLowerCase())
   * );
   */
  sort(compareFn: (a: any, b: any) => number): void {
    this.tableScope.sort(compareFn);
  }


  /**
   * Ensures that a specific row is visible in the viewport by scrolling if necessary.
   * This method checks if the target row is within the currently visible range and
   * adjusts the scroll position if it's not visible.
   *
   * The method performs the following:
   * 1. Checks if the row is above the current viewport (before first visible row)
   * 2. Checks if the row is below the current viewport (after last visible row)
   * 3. Scrolls to make the row visible if needed
   *
   * @param {number} rowIndex - The index of the row to make visible
   * @returns {boolean} Returns true if scrolling was needed and performed, false if the row was already visible
   *
   * @example
   * // Ensure row 5 is visible in the viewport
   * tableApi.ensureRowIsVisible(5);
   *
   * @example
   * // Example usage in a component
   * class MyTableComponent {
   *   private tableApi: TableApi;
   *
   *   scrollToSpecificRow(rowIndex: number) {
   *     // This will scroll the row into view if it's not visible
   *     const didScroll = this.tableApi.ensureRowIsVisible(rowIndex);
   *
   *     if (didScroll) {
   *       console.log(`Table scrolled to show row ${rowIndex}`);
   *     } else {
   *       console.log(`Row ${rowIndex} was already visible`);
   *     }
   *   }
   * }
   *
   * @example
   * // Example with row selection
   * class TableHandler {
   *   selectAndShowRow(rowIndex: number) {
   *     // First ensure the row is visible
   *     this.tableApi.ensureRowIsVisible(rowIndex);
   *
   *     // Then perform selection
   *     this.selectionModel.selectRow(rowIndex);
   *   }
   * }
   *
   * @throws {Error} Implicitly may throw if rowIndex is not a number or if required properties are undefined
   *
   * @see {@link scrollToIndex} - The underlying method used for scrolling
   * @see {@link getDisplayedRowCount} - Related method for getting visible row count
   */
  ensureRowIsVisible(rowIndex:number):boolean{
    return this.tableScope.ensureRowIsVisible(rowIndex);
  }

  /**
   * Retrieves the number of rows currently displayed in the table.
   *
   * @description
   * This method returns the count of rows that are currently visible in the table after
   * applying any filtering, pagination, or other visibility constraints.
   * 
   * @return {number} The number of rows currently displayed in the table.
   */
  getDisplayedRowCount():number {
    return this.tableScope.getDisplayedRowCount();
  }


  /**
   * Returns the index of the first visible row in the table's viewport.
   *
   * This method retrieves the first visible row index from the table's scope, which is useful
   * for virtual scrolling and viewport-related calculations. The index represents the topmost
   * visible row in the current scroll position of the table.
   *
   * This value is maintained internally by the table and updated during scrolling operations.
   * It's particularly important for:
   * - Virtual scrolling optimization
   * - Calculating visible range of rows
   * - Viewport-related operations
   * - Scroll position restoration
   *
   * @returns {number} The index of the first visible row in the table's viewport.
   *                   Returns -1 if no rows are visible or if the table is not yet rendered.
   *
   * @example
   * ```typescript
   * // Get the first visible row index
   * const tableApi = new TableApi(tableScope);
   * const firstVisibleIndex = tableApi.getFirstVisibleRowIndex();
   *
   * // Use the index for scroll position calculations
   * if (firstVisibleIndex >= 0) {
   *   // Perform operations with the first visible row
   *   console.log(`First visible row index: ${firstVisibleIndex}`);
   * }
   * ```
   */
  getFirstVisibleRowIndex(): number {
    return this.tableScope.getFirstVisibleRowIndex();
  }

  getFirstFullVisibleRowIndex(): number {
    return this.tableScope.getFirstFullVisibleRowIndex();
  }

  getLastVisibleRowIndex(): number {
    return this.tableScope.getLastVisibleRowIndex();
  }

  getLastFullVisibleRowIndex(): number {
    return this.tableScope.getLastFullVisibleRowIndex();
  }

  setLoggingActive(active:boolean): void {
    this.tableScope.loggingActive = active;
  }

  isLoggingActive(): boolean {
    return this.tableScope.loggingActive;
  }


}