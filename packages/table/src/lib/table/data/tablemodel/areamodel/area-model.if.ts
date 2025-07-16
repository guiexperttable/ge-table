import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { FilterFunction } from "../../common/filter-function";
import { SortItem } from "../../common/sort-item";
import { AreaIdent } from "../area-ident.type";

/**
 * @interface AreaModelIf
 * @description
 * The AreaModelIf interface represents a model for a specific area of a table (header, body, or footer).
 * It provides methods for accessing and manipulating data within that area.
 * 
 * In the GuiExpert Table library, a table is divided into three main areas:
 * - Header: Contains column titles and optional filter/sort controls
 * - Body: Contains the main data of the table
 * - Footer: Contains summary information or additional controls
 * 
 * Each of these areas can be further divided into three sections:
 * - West: Fixed columns on the left side
 * - Center: Scrollable columns in the middle
 * - East: Fixed columns on the right side
 * 
 * <pre>
 *  +----------------+-------------------+--------------+
 *  |  header/west   |  header/center    | header/east  |
 *  +----------------+-------------------+--------------+
 *  |  body/west     |  body/center      | body/east    |
 *  +----------------+-------------------+--------------+
 *  |  footer/west   |  footer/center    | footer/east  |
 *  +----------------+-------------------+--------------+
 * </pre>
 * 
 * The AreaModelIf interface is a core component of the table's architecture. While simple tables might use
 * basic data structures like arrays of arrays or arrays of objects, the GuiExpert Table library uses a more
 * sophisticated model approach. An AreaModelIf implementation provides information about:
 * 
 * - The number of rows in the area
 * - The content of each cell
 * - The styling of cells (CSS classes, custom styles)
 * - Cell spanning (colspan, rowspan)
 * - Row heights
 * - Cell editability and selectability
 * - Row selection state
 * - Filtering and sorting capabilities
 * 
 * This model-based approach provides maximum flexibility for creating complex, interactive tables.
 * 
 * @example
 * // Example of creating a simple table with header, body, and footer areas
 * import { TableFactory, TableModelIf } from "@guiexpert/table";
 * 
 * // Create data for each area
 * const headerData = [["ID", "Name", "Age"]];
 * const bodyData = [
 *   [1, "John", 30],
 *   [2, "Jane", 25],
 *   [3, "Bob", 40]
 * ];
 * const footerData = [["", "Average", 31.67]];
 * 
 * // Create the table model with all three areas
 * const tableModel: TableModelIf = TableFactory.createTableModel({
 *   headerData,
 *   bodyData,
 *   footerData
 * });
 * 
 * // Access the area models
 * const headerModel = tableModel.getAreaModel("header");
 * const bodyModel = tableModel.getAreaModel("body");
 * const footerModel = tableModel.getAreaModel("footer");
 * 
 * // Get information from the body model
 * console.log(`Number of rows: ${bodyModel.getRowCount()}`);
 * console.log(`Value at (1,1): ${bodyModel.getValueAt(1, 1)}`); // "Jane"
 * 
 * @example
 * // Example of creating a table with object data and column definitions
 * import { TableFactory, TableModelIf, ColumnDefIf } from "@guiexpert/table";
 * 
 * // Define the data as an array of objects
 * const data = [
 *   { id: 1, name: "John", age: 30 },
 *   { id: 2, name: "Jane", age: 25 },
 *   { id: 3, name: "Bob", age: 40 }
 * ];
 * 
 * // Define column definitions
 * const columnDefs: ColumnDefIf[] = [
 *   { property: "id", headerLabel: "ID", width: 80 },
 *   { property: "name", headerLabel: "Name", width: 150 },
 *   { property: "age", headerLabel: "Age", width: 80 }
 * ];
 * 
 * // Create the table model
 * const tableModel: TableModelIf = TableFactory.createByObjectArray(
 *   data,
 *   [["ID", "Name", "Age"]], // header
 *   [], // footer (empty)
 *   0, // fixedLeftColumnCount
 *   0, // fixedRightColumnCount
 *   false, // rowCheckboxVisible
 *   undefined, // defaultRowHeights
 *   columnDefs
 * );
 * 
 * @example
 * // Example of implementing a custom AreaModelIf
 * import { AreaModelIf, AreaIdent, CellRendererIf } from "@guiexpert/table";
 * 
 * class CustomAreaModel implements AreaModelIf {
 *   constructor(
 *     public areaIdent: AreaIdent,
 *     private data: any[][],
 *     private defaultRowHeight: number = 30
 *   ) {}
 *   
 *   getRowCount(): number {
 *     return this.data.length;
 *   }
 *   
 *   getValueAt(rowIndex: number, columnIndex: number): any {
 *     if (rowIndex < 0 || rowIndex >= this.data.length) return undefined;
 *     const row = this.data[rowIndex];
 *     if (columnIndex < 0 || columnIndex >= row.length) return undefined;
 *     return row[columnIndex];
 *   }
 *   
 *   getRowHeight(rowIndex: number): number {
 *     return this.defaultRowHeight;
 *   }
 *   
 *   // Implement other required methods...
 * }
 * 
 * @see {@link TableModelIf} - The parent interface that contains area models
 * @see {@link AreaModel} - A base implementation of this interface
 * @see {@link AbstractAreaModel} - An abstract implementation with common functionality
 * @see {@link AreaModelObjectArray} - An implementation for object array data
 */
export interface AreaModelIf {


  /**
   * The identifier for one of the areas: header, body, footer.
   * This property determines which area of the table this model represents.
   * 
   * @type {AreaIdent}
   * 
   * @example
   * // Creating an area model for the header
   * const headerModel = new AreaModel("header");
   * 
   * @example
   * // Checking which area a model represents
   * if (areaModel.areaIdent === "body") {
   *   // This is a body area model
   * }
   */
  areaIdent: AreaIdent;

  /**
   * A model and controller for row checkbox selection.
   * This property allows the area to support row selection via checkboxes.
   * 
   * @type {CheckboxModelIf<any> | undefined}
   * 
   * @example
   * // Creating a checkbox model for row selection
   * import { CheckboxModel } from "@guiexpert/table";
   * 
   * const bodyModel = new AreaModel("body");
   * bodyModel.rowSelectionModel = new CheckboxModel();
   * 
   * // Later, check if a row is selected
   * const isSelected = bodyModel.isRowChecked(5);
   */
  rowSelectionModel: CheckboxModelIf<any> | undefined;

  /**
   * Changes the order of columns by moving a column from one position to another.
   * This method is called when the user drags a column to a new position.
   * 
   * @param {number} sourceColumnIndex - The index of the column to move
   * @param {number} targetColumnIndex - The index where the column should be moved to
   * @returns {void}
   * 
   * @example
   * // Move the second column (index 1) to the fourth position (index 3)
   * areaModel.changeColumnOrder(1, 3);
   * 
   * @example
   * // Implementation example
   * changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
   *   // Move the column in the internal data structure
   *   this.arrayMove(this.columns, sourceColumnIndex, targetColumnIndex);
   *   
   *   // Update any dependent data structures
   *   this.arrayMove(this.cellRenderers, sourceColumnIndex, targetColumnIndex);
   * }
   */
  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;

  /**
   * Sets the value of a cell at the specified row and column indices.
   * This method is called when a cell is edited by the user or programmatically.
   * 
   * @param {number} rowIndex - The index of the row containing the cell
   * @param {number} columnIndex - The index of the column containing the cell
   * @param {any} value - The new value to set
   * @returns {boolean} - True if the value was successfully set, false otherwise
   * 
   * @example
   * // Set the value of a cell
   * areaModel.setValue(1, 2, "New Value");
   * 
   * @example
   * // Implementation example for an object-based model
   * setValue(rowIndex: number, columnIndex: number, value: any): boolean {
   *   const row = this.getRowByIndex(rowIndex);
   *   if (!row) return false;
   *   
   *   const property = this.columnDefs[columnIndex].property;
   *   row[property] = value;
   *   return true;
   * }
   */
  setValue(rowIndex: number, columnIndex: number, value: any): boolean;

  /**
   * Initializes the area model.
   * This method is called internally by the TableModel during initialization.
   * It can be used to perform any necessary setup, such as calculating row positions.
   * 
   * @returns {void}
   * 
   * @example
   * // Implementation example
   * init(): void {
   *   // Calculate y-positions for all rows
   *   this.calculateYPositions();
   *   
   *   // Initialize any other internal state
   *   this.initialized = true;
   * }
   */
  init(): void;

  /**
   * Returns the number of rows in this area.
   * This is a fundamental method that determines the vertical size of the area.
   * 
   * @returns {number} The number of rows in the area
   * 
   * @example
   * // Get the number of rows in the body area
   * const rowCount = bodyAreaModel.getRowCount();
   * console.log(`The body has ${rowCount} rows`);
   * 
   * @example
   * // Implementation example for an array-based model
   * getRowCount(): number {
   *   return this.data.length;
   * }
   */
  getRowCount(): number;

  /**
   * Returns the value of the cell at the specified row and column indices.
   * This is one of the most important methods in the area model, as it provides
   * the actual data to be displayed in each cell.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {any} The value at the specified cell
   * 
   * @example
   * // Get the value of a cell
   * const value = bodyAreaModel.getValueAt(1, 2);
   * console.log(`Cell (1,2) contains: ${value}`);
   * 
   * @example
   * // Implementation example for a 2D array model
   * getValueAt(rowIndex: number, columnIndex: number): any {
   *   if (rowIndex < 0 || rowIndex >= this.data.length) return undefined;
   *   const row = this.data[rowIndex];
   *   if (columnIndex < 0 || columnIndex >= row.length) return undefined;
   *   return row[columnIndex];
   * }
   * 
   * @example
   * // Implementation example for an object array model
   * getValueAt(rowIndex: number, columnIndex: number): any {
   *   const row = this.getRowByIndex(rowIndex);
   *   if (!row) return undefined;
   *   
   *   const property = this.columnDefs[columnIndex].property;
   *   return row[property];
   * }
   */
  getValueAt(rowIndex: number, columnIndex: number): any;

  /**
   * Returns a string representation of the cell value at the specified row and column indices.
   * This method is used when exporting the table data or copying to clipboard.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {string} The text value of the specified cell
   * 
   * @example
   * // Get the text value of a cell for export
   * const textValue = bodyAreaModel.getTextValueAt(1, 2);
   * 
   * @example
   * // Implementation example
   * getTextValueAt(rowIndex: number, columnIndex: number): string {
   *   const value = this.getValueAt(rowIndex, columnIndex);
   *   
   *   // Handle different data types appropriately
   *   if (value === null || value === undefined) return '';
   *   if (value instanceof Date) return value.toISOString();
   *   return String(value);
   * }
   */
  getTextValueAt(rowIndex: number, columnIndex: number): string;

  /**
   * Returns the column span value for the cell at the specified row and column indices.
   * A colspan value of N means the cell spans N columns horizontally.
   * Values less than 2 are ignored (no spanning).
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {number} The colspan value (number of columns the cell spans)
   * 
   * @example
   * // Check if a cell spans multiple columns
   * const colspan = headerAreaModel.getColspanAt(0, 0);
   * if (colspan > 1) {
   *   console.log(`This header cell spans ${colspan} columns`);
   * }
   * 
   * @example
   * // Implementation example for a model with column spanning
   * getColspanAt(rowIndex: number, columnIndex: number): number {
   *   // Special case: first row, first column spans 3 columns
   *   if (rowIndex === 0 && columnIndex === 0) return 3;
   *   
   *   // No spanning for other cells
   *   return 1;
   * }
   */
  getColspanAt(rowIndex: number, columnIndex: number): number;

  /**
   * Returns the maximum colspan value that can occur in this area model.
   * This value is used to optimize rendering performance.
   * 
   * @returns {number} The maximum possible colspan value in this area
   * 
   * @example
   * // Get the maximum colspan for optimization
   * const maxColspan = headerAreaModel.getMaxColspan();
   * 
   * @example
   * // Implementation example
   * getMaxColspan(): number {
   *   // If the model has no colspans, return 0 for optimization
   *   return 0;
   *   
   *   // If the model has colspans, return the maximum possible value
   *   // return 3; // If some cells span up to 3 columns
   * }
   */
  getMaxColspan(): number;

  /**
   * Returns the row span value for the cell at the specified row and column indices.
   * A rowspan value of N means the cell spans N rows vertically.
   * Values less than 2 are ignored (no spanning).
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {number} The rowspan value (number of rows the cell spans)
   * 
   * @example
   * // Check if a cell spans multiple rows
   * const rowspan = bodyAreaModel.getRowspanAt(0, 0);
   * if (rowspan > 1) {
   *   console.log(`This cell spans ${rowspan} rows`);
   * }
   * 
   * @example
   * // Implementation example for a model with row spanning
   * getRowspanAt(rowIndex: number, columnIndex: number): number {
   *   // Special case: first column spans 2 rows at the beginning
   *   if (columnIndex === 0 && rowIndex % 2 === 0) return 2;
   *   
   *   // No spanning for other cells
   *   return 1;
   * }
   */
  getRowspanAt(rowIndex: number, columnIndex: number): number;

  /**
   * Returns the maximum rowspan value that can occur in this area model.
   * This value is used to optimize rendering performance.
   * 
   * @returns {number} The maximum possible rowspan value in this area
   * 
   * @example
   * // Get the maximum rowspan for optimization
   * const maxRowspan = bodyAreaModel.getMaxRowspan();
   * 
   * @example
   * // Implementation example
   * getMaxRowspan(): number {
   *   // If the model has no rowspans, return 0 for optimization
   *   return 0;
   *   
   *   // If the model has rowspans, return the maximum possible value
   *   // return 2; // If some cells span up to 2 rows
   * }
   */
  getMaxRowspan(): number;

  /**
   * Returns an array of CSS class names to apply to the cell at the specified row and column indices.
   * This method allows for custom styling of individual cells.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {string[]} An array of CSS class names
   * 
   * @example
   * // Apply custom classes to cells
   * const classes = bodyAreaModel.getCustomClassesAt(1, 2);
   * console.log(`Cell classes: ${classes.join(', ')}`);
   * 
   * @example
   * // Implementation example with conditional styling
   * getCustomClassesAt(rowIndex: number, columnIndex: number): string[] {
   *   const classes: string[] = [];
   *   
   *   // Add classes based on row index
   *   if (rowIndex % 2 === 0) {
   *     classes.push('even-row');
   *   } else {
   *     classes.push('odd-row');
   *   }
   *   
   *   // Add classes based on cell value
   *   const value = this.getValueAt(rowIndex, columnIndex);
   *   if (typeof value === 'number' && value < 0) {
   *     classes.push('negative-value');
   *   }
   *   
   *   // Add classes for selected rows
   *   if (this.isRowChecked(rowIndex)) {
   *     classes.push('selected-row');
   *   }
   *   
   *   return classes;
   * }
   */
  getCustomClassesAt(rowIndex: number, columnIndex: number): string[];

  /**
   * Returns an object containing CSS style properties to apply to the cell at the specified row and column indices.
   * This method allows for inline styling of individual cells.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {{ [key: string]: string } | undefined} An object with CSS style properties, or undefined if no custom styles
   * 
   * @example
   * // Apply custom styles to cells
   * const styles = bodyAreaModel.getCustomStyleAt(1, 2);
   * console.log('Cell styles:', styles);
   * 
   * @example
   * // Implementation example with conditional styling
   * getCustomStyleAt(rowIndex: number, columnIndex: number): { [key: string]: string } | undefined {
   *   // Apply background color based on value
   *   const value = this.getValueAt(rowIndex, columnIndex);
   *   
   *   if (typeof value === 'number') {
   *     // Color gradient based on value
   *     if (value < 0) {
   *       return { 'background-color': `rgba(255, 0, 0, ${Math.min(Math.abs(value) / 100, 0.5)})` };
   *     } else if (value > 0) {
   *       return { 'background-color': `rgba(0, 255, 0, ${Math.min(value / 100, 0.5)})` };
   *     }
   *   }
   *   
   *   return undefined; // No custom styles
   * }
   */
  getCustomStyleAt(rowIndex: number, columnIndex: number): { [key: string]: string } | undefined;

  /**
   * Returns the tooltip text for the cell at the specified row and column indices.
   * This tooltip will be displayed when the user hovers over the cell.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {any} The tooltip content (usually a string)
   * 
   * @example
   * // Get the tooltip for a cell
   * const tooltip = bodyAreaModel.getTooltipAt(1, 2);
   * 
   * @example
   * // Implementation example
   * getTooltipAt(rowIndex: number, columnIndex: number): any {
   *   // Use the cell value as the tooltip
   *   return this.getValueAt(rowIndex, columnIndex);
   *   
   *   // Or provide a more detailed tooltip
   *   // const value = this.getValueAt(rowIndex, columnIndex);
   *   // return `Value: ${value}\nRow: ${rowIndex}\nColumn: ${columnIndex}`;
   * }
   */
  getTooltipAt(rowIndex: number, columnIndex: number): any;

  /**
   * Returns a cell renderer for the cell at the specified row and column indices.
   * A cell renderer is responsible for rendering the cell content in a custom way.
   * If undefined is returned, the cell value will be rendered directly.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {CellRendererIf | undefined} A cell renderer instance, or undefined for default rendering
   * 
   * @example
   * // Get a custom renderer for a cell
   * const renderer = bodyAreaModel.getCellRenderer(1, 2);
   * 
   * @example
   * // Implementation example using column definitions
   * getCellRenderer(rowIndex: number, columnIndex: number): CellRendererIf | undefined {
   *   // Get renderer from column definition
   *   const columnDef = this.columnDefs[columnIndex];
   *   return columnDef?.rendererMap?.[this.areaIdent];
   * }
   */
  getCellRenderer(rowIndex: number, columnIndex: number): CellRendererIf | undefined;

  /**
   * Returns the height of the row at the specified index, in pixels.
   * This method allows for variable row heights in the table.
   * 
   * @param {number} rowIndex - The index of the row
   * @returns {number} The height of the row in pixels
   * 
   * @example
   * // Get the height of a row
   * const height = bodyAreaModel.getRowHeight(1);
   * console.log(`Row 1 height: ${height}px`);
   * 
   * @example
   * // Implementation example with fixed row height
   * getRowHeight(rowIndex: number): number {
   *   return this.defaultRowHeight; // e.g., 30px
   * }
   * 
   * @example
   * // Implementation example with variable row heights
   * getRowHeight(rowIndex: number): number {
   *   // First row is taller
   *   if (rowIndex === 0) return 50;
   *   
   *   // Rows with more content are taller
   *   const row = this.getRowByIndex(rowIndex);
   *   if (row && row.hasLongContent) return 60;
   *   
   *   // Default height for other rows
   *   return 30;
   * }
   */
  getRowHeight(rowIndex: number): number;

  /**
   * Returns the row object at the specified index.
   * This method provides access to the underlying data structure.
   * 
   * @param {number} rowIndex - The index of the row
   * @returns {any} The row object
   * 
   * @example
   * // Get a row object
   * const row = bodyAreaModel.getRowByIndex(1);
   * console.log('Row data:', row);
   * 
   * @example
   * // Implementation example for an array-based model
   * getRowByIndex(rowIndex: number): any {
   *   if (rowIndex < 0 || rowIndex >= this.data.length) return undefined;
   *   return this.data[rowIndex];
   * }
   */
  getRowByIndex(rowIndex: number): any;

  /**
   * Returns the Y-coordinate (in pixels) of the top of the row at the specified index.
   * This method is used for scrolling and positioning rows in the viewport.
   * 
   * @param {number} rowIndex - The index of the row
   * @returns {number} The Y-coordinate of the top of the row, in pixels
   * 
   * @example
   * // Get the Y-position of a row
   * const yPos = bodyAreaModel.getYPosByRowIndex(10);
   * console.log(`Row 10 starts at Y-position: ${yPos}px`);
   * 
   * @example
   * // Implementation example with fixed row heights
   * getYPosByRowIndex(rowIndex: number): number {
   *   return rowIndex * this.defaultRowHeight;
   * }
   * 
   * @example
   * // Implementation example with variable row heights
   * getYPosByRowIndex(rowIndex: number): number {
   *   // Use a pre-calculated array of Y-positions
   *   return this.yPositions[rowIndex];
   *   
   *   // Or calculate on-the-fly
   *   // let yPos = 0;
   *   // for (let i = 0; i < rowIndex; i++) {
   *   //   yPos += this.getRowHeight(i);
   *   // }
   *   // return yPos;
   * }
   */
  getYPosByRowIndex(rowIndex: number): number;

  /**
   * Determines whether the cell at the specified row and column indices is editable.
   * If true, the user can edit the cell content.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {boolean} True if the cell is editable, false otherwise
   * 
   * @example
   * // Check if a cell is editable
   * const editable = bodyAreaModel.isEditable(1, 2);
   * if (editable) {
   *   console.log('This cell can be edited by the user');
   * }
   * 
   * @example
   * // Implementation example using column definitions
   * isEditable(rowIndex: number, columnIndex: number): boolean {
   *   // Get editability from column definition
   *   const columnDef = this.columnDefs[columnIndex];
   *   return columnDef?.editable?.() ?? false;
   * }
   * 
   * @example
   * // Implementation example with conditional editability
   * isEditable(rowIndex: number, columnIndex: number): boolean {
   *   // Header cells are not editable
   *   if (this.areaIdent === 'header') return false;
   *   
   *   // First column is not editable (e.g., ID column)
   *   if (columnIndex === 0) return false;
   *   
   *   // Other cells in the body are editable
   *   return this.areaIdent === 'body';
   * }
   */
  isEditable(rowIndex: number, columnIndex: number): boolean;

  /**
   * Determines whether the cell at the specified row and column indices is selectable.
   * If true, the user can select the cell.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {boolean} True if the cell is selectable, false otherwise
   * 
   * @example
   * // Check if a cell is selectable
   * const selectable = bodyAreaModel.isSelectable(1, 2);
   * if (selectable) {
   *   console.log('This cell can be selected by the user');
   * }
   * 
   * @example
   * // Implementation example
   * isSelectable(rowIndex: number, columnIndex: number): boolean {
   *   // All cells are selectable by default
   *   return true;
   *   
   *   // Or implement custom logic
   *   // return this.areaIdent === 'body'; // Only body cells are selectable
   * }
   */
  isSelectable(rowIndex: number, columnIndex: number): boolean;

  /**
   * Determines whether the row at the specified index is checkable.
   * If true, a checkbox will be rendered at the beginning of the row.
   * 
   * @param {number} rowIndex - The index of the row
   * @returns {boolean} True if the row is checkable, false otherwise
   * 
   * @example
   * // Check if a row is checkable
   * const checkable = bodyAreaModel.isRowCheckable(1);
   * if (checkable) {
   *   console.log('This row can be checked by the user');
   * }
   * 
   * @example
   * // Implementation example
   * isRowCheckable(rowIndex: number): boolean {
   *   // All rows are checkable by default
   *   return true;
   *   
   *   // Or implement custom logic
   *   // const row = this.getRowByIndex(rowIndex);
   *   // return row && !row.locked; // Only unlocked rows are checkable
   * }
   */
  isRowCheckable(rowIndex: number): boolean;

  /**
   * Returns the checked state of the row at the specified index.
   * 
   * @param {number} rowIndex - The index of the row
   * @returns {CheckedType | undefined} The checked state of the row (true, false, or 'indeterminate'),
   *                                   or undefined if the row is not checkable
   * 
   * @example
   * // Check if a row is checked
   * const checkedState = bodyAreaModel.isRowChecked(1);
   * if (checkedState === true) {
   *   console.log('This row is checked');
   * } else if (checkedState === 'indeterminate') {
   *   console.log('This row is partially checked');
   * }
   * 
   * @example
   * // Implementation example using a row selection model
   * isRowChecked(rowIndex: number): CheckedType | undefined {
   *   if (!this.rowSelectionModel) return undefined;
   *   
   *   const row = this.getRowByIndex(rowIndex);
   *   return this.rowSelectionModel.isRowChecked(row);
   * }
   */
  isRowChecked(rowIndex: number): CheckedType | undefined;

  /**
   * Sets the checked state of the row at the specified index.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {boolean} checked - The new checked state
   * @returns {void}
   * 
   * @example
   * // Check a row
   * bodyAreaModel.setRowChecked(1, true);
   * 
   * // Uncheck a row
   * bodyAreaModel.setRowChecked(2, false);
   * 
   * @example
   * // Implementation example using a row selection model
   * setRowChecked(rowIndex: number, checked: boolean): void {
   *   if (!this.rowSelectionModel) return;
   *   
   *   const row = this.getRowByIndex(rowIndex);
   *   if (row) {
   *     this.rowSelectionModel.checkRow(row, checked);
   *   }
   * }
   */
  setRowChecked(rowIndex: number, checked: boolean): void;

  /**
   * Determines whether this area supports filtering.
   * If true, the area can be filtered using the externalFilterChanged method.
   * 
   * @returns {boolean} True if the area is filterable, false otherwise
   * 
   * @example
   * // Check if an area is filterable
   * const filterable = bodyAreaModel.isFilterable();
   * if (filterable) {
   *   console.log('This area supports filtering');
   * }
   * 
   * @example
   * // Implementation example
   * isFilterable(): boolean {
   *   // Only the body area is filterable
   *   return this.areaIdent === 'body';
   * }
   */
  isFilterable(): boolean;

  /**
   * Applies a filter function to the rows in this area.
   * This method is called when a filter is applied to the table.
   * 
   * @param {FilterFunction<T>} predictFn - A function that takes a row and returns true if the row should be visible
   * @returns {void}
   * 
   * @example
   * // Filter rows where age > 30
   * bodyAreaModel.externalFilterChanged(row => row.age > 30);
   * 
   * // Clear all filters
   * bodyAreaModel.externalFilterChanged(() => true);
   * 
   * @example
   * // Implementation example
   * externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
   *   // Apply the filter to the rows
   *   this.filteredRows = this.rows.filter(predictFn);
   * }
   */
  externalFilterChanged<T>(predictFn: FilterFunction<T>): void;

  /**
   * Sorts the rows in this area based on the provided sort items.
   * This method is called when the user clicks on a sortable column header.
   * 
   * @param {SortItem[]} sortItems - An array of sort items, each containing a column index and sort direction
   * @returns {boolean} True if sorting was performed, false otherwise
   * 
   * @example
   * // Sort by the second column in ascending order
   * bodyAreaModel.doSort([{ columnIndex: 1, sortState: 'asc' }]);
   * 
   * // Sort by the first column in descending order, then by the second column in ascending order
   * bodyAreaModel.doSort([
   *   { columnIndex: 0, sortState: 'desc' },
   *   { columnIndex: 1, sortState: 'asc' }
   * ]);
   * 
   * @example
   * // Implementation example
   * doSort(sortItems: SortItem[]): boolean {
   *   if (!sortItems.length) return false;
   *   
   *   // Apply sorting to the rows
   *   for (const sortItem of sortItems) {
   *     const { columnIndex, sortState } = sortItem;
   *     const property = this.columnDefs[columnIndex].property;
   *     const direction = sortState === 'asc' ? 1 : -1;
   *     
   *     this.rows.sort((a, b) => {
   *       const valueA = a[property];
   *       const valueB = b[property];
   *       
   *       if (valueA < valueB) return -1 * direction;
   *       if (valueA > valueB) return 1 * direction;
   *       return 0;
   *     });
   *   }
   *   
   *   return true;
   * }
   */
  doSort(sortItems: SortItem[]): boolean;

  /**
   * Sorts the rows in this area using a custom comparator function.
   * This method provides more flexibility than doSort for complex sorting logic.
   * 
   * @param {(a: any, b: any) => number} [compareFn] - A function that compares two rows and returns a number:
   *   - Negative if a should come before b
   *   - Positive if a should come after b
   *   - Zero if they are equivalent for sorting purposes
   * @returns {void}
   * 
   * @example
   * // Sort rows by name length
   * bodyAreaModel.sort((a, b) => a.name.length - b.name.length);
   * 
   * // Sort rows by a computed value
   * bodyAreaModel.sort((a, b) => {
   *   const scoreA = a.wins * 3 + a.draws;
   *   const scoreB = b.wins * 3 + b.draws;
   *   return scoreB - scoreA; // Descending order
   * });
   * 
   * @example
   * // Implementation example
   * sort(compareFn?: (a: any, b: any) => number): void {
   *   if (!compareFn) return;
   *   
   *   // Apply the custom sort function
   *   this.rows.sort(compareFn);
   * }
   */
  sort(compareFn?: (a: any, b: any) => number): void;
}
