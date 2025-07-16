import { AreaModelIf } from "./area-model.if";
import { AreaIdent } from "../area-ident.type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { SortItem } from "../../common/sort-item";
import { FilterFunction } from "../../common/filter-function";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";


/**
 * @class AreaModel
 * @implements {AreaModelIf}
 * @description
 * The AreaModel class is a base implementation of the AreaModelIf interface.
 * It represents a model for a specific area of a table (header, body, or footer)
 * and provides methods for accessing and manipulating data within that area.
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
 * This base AreaModel class provides default implementations for all methods
 * required by the AreaModelIf interface. Most methods return default values
 * or do nothing, making this class suitable as a starting point for creating
 * more specialized area models.
 * 
 * @example
 * // Creating a basic area model for the header
 * const headerModel = new AreaModel();
 * headerModel.areaIdent = "header";
 * 
 * @example
 * // Extending AreaModel to create a custom implementation
 * class CustomAreaModel extends AreaModel {
 *   private data: any[][];
 *   
 *   constructor(data: any[][]) {
 *     super();
 *     this.data = data;
 *   }
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
 *   // Override other methods as needed...
 * }
 * 
 * @example
 * // Using AreaModel with a TableModel
 * import { TableFactory, TableModelIf } from "@guiexpert/table";
 * 
 * // Create a table model with custom area models
 * const tableModel: TableModelIf = TableFactory.createTableModel();
 * 
 * // Set custom area models
 * const headerModel = new CustomAreaModel([["ID", "Name", "Age"]]);
 * headerModel.areaIdent = "header";
 * tableModel.setAreaModel("header", headerModel);
 * 
 * const bodyModel = new CustomAreaModel([
 *   [1, "John", 30],
 *   [2, "Jane", 25],
 *   [3, "Bob", 40]
 * ]);
 * bodyModel.areaIdent = "body";
 * tableModel.setAreaModel("body", bodyModel);
 * 
 * @see {@link AreaModelIf} - The interface that this class implements
 * @see {@link AbstractAreaModel} - An abstract implementation with common functionality
 * @see {@link AreaModelObjectArray} - An implementation for object array data
 */
export class AreaModel implements AreaModelIf {

  /**
   * The identifier for one of the areas: header, body, footer.
   * This property determines which area of the table this model represents.
   * Default value is "body".
   * 
   * @type {AreaIdent}
   * 
   * @example
   * // Creating an area model for the header
   * const headerModel = new AreaModel();
   * headerModel.areaIdent = "header";
   */
  areaIdent: AreaIdent = "body";

  /**
   * A model and controller for row checkbox selection.
   * This property allows the area to support row selection via checkboxes.
   * Default value is undefined (no row selection).
   * 
   * @type {CheckboxModelIf<any> | undefined}
   * 
   * @example
   * // Creating a checkbox model for row selection
   * import { CheckboxModel } from "@guiexpert/table";
   * 
   * const bodyModel = new AreaModel();
   * bodyModel.rowSelectionModel = new CheckboxModel();
   */
  rowSelectionModel: CheckboxModelIf<any> | undefined = undefined;

  /**
   * Changes the order of columns by moving a column from one position to another.
   * This method is called when the user drags a column to a new position.
   * The base implementation does nothing and should be overridden by subclasses
   * that support column reordering.
   * 
   * @param {number} _sourceColumnIndex - The index of the column to move
   * @param {number} _targetColumnIndex - The index where the column should be moved to
   * @returns {void}
   * 
   * @example
   * // Override in a subclass to implement column reordering
   * changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
   *   // Move the column in the internal data structure
   *   this.arrayMove(this.columns, sourceColumnIndex, targetColumnIndex);
   * }
   */
  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    // ignore
  }

  /**
   * Sorts the rows in this area based on the provided sort items.
   * This method is called when the user clicks on a sortable column header.
   * The base implementation returns false (no sorting performed) and should be
   * overridden by subclasses that support sorting.
   * 
   * @param {SortItem[]} _sortItems - An array of sort items, each containing a column index and sort direction
   * @returns {boolean} True if sorting was performed, false otherwise
   * 
   * @example
   * // Override in a subclass to implement sorting
   * doSort(sortItems: SortItem[]): boolean {
   *   if (!sortItems.length) return false;
   *   
   *   // Apply sorting to the rows
   *   this.rows.sort((a, b) => {
   *     const { columnIndex, sortState } = sortItems[0];
   *     const valueA = this.getValueAt(this.rows.indexOf(a), columnIndex);
   *     const valueB = this.getValueAt(this.rows.indexOf(b), columnIndex);
   *     
   *     const direction = sortState === 'asc' ? 1 : -1;
   *     if (valueA < valueB) return -1 * direction;
   *     if (valueA > valueB) return 1 * direction;
   *     return 0;
   *   });
   *   
   *   return true;
   * }
   */
  doSort(_sortItems: SortItem[]): boolean {
    return false;
  }

  /**
   * Sorts the rows in this area using a custom comparator function.
   * This method provides more flexibility than doSort for complex sorting logic.
   * The base implementation does nothing and should be overridden by subclasses
   * that support custom sorting.
   * 
   * @param {(a: any, b: any) => number} [_compareFn] - A function that compares two rows and returns a number:
   *   - Negative if a should come before b
   *   - Positive if a should come after b
   *   - Zero if they are equivalent for sorting purposes
   * @returns {void}
   * 
   * @example
   * // Override in a subclass to implement custom sorting
   * sort(compareFn?: (a: any, b: any) => number): void {
   *   if (!compareFn) return;
   *   
   *   // Apply the custom sort function
   *   this.rows.sort(compareFn);
   * }
   */
  sort(_compareFn?: (a: any, b: any) => number):void {
    // ignore
  }

  /**
   * Applies a filter function to the rows in this area.
   * This method is called when a filter is applied to the table.
   * The base implementation does nothing and should be overridden by subclasses
   * that support filtering.
   * 
   * @param {FilterFunction<T>} _predictFn - A function that takes a row and returns true if the row should be visible
   * @returns {void}
   * 
   * @example
   * // Override in a subclass to implement filtering
   * externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
   *   // Apply the filter to the rows
   *   this.filteredRows = this.rows.filter(predictFn);
   * }
   */
  externalFilterChanged<T>(_predictFn: FilterFunction<T>): void {
    // ignore
  }

  /**
   * Returns a cell renderer for the cell at the specified row and column indices.
   * A cell renderer is responsible for rendering the cell content in a custom way.
   * The base implementation returns undefined (default rendering) and should be
   * overridden by subclasses that support custom cell rendering.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {CellRendererIf | undefined} A cell renderer instance, or undefined for default rendering
   * 
   * @example
   * // Override in a subclass to provide custom cell renderers
   * getCellRenderer(rowIndex: number, columnIndex: number): CellRendererIf | undefined {
   *   // Get renderer from column definition
   *   const columnDef = this.columnDefs[columnIndex];
   *   return columnDef?.rendererMap?.[this.areaIdent];
   * }
   */
  getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined {
    return undefined;
  }

  /**
   * Returns the column span value for the cell at the specified row and column indices.
   * A colspan value of N means the cell spans N columns horizontally.
   * The base implementation returns 0 (no spanning) and should be overridden by
   * subclasses that support column spanning.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {number} The colspan value (number of columns the cell spans)
   * 
   * @example
   * // Override in a subclass to implement column spanning
   * getColspanAt(rowIndex: number, columnIndex: number): number {
   *   // Special case: first row, first column spans 3 columns
   *   if (rowIndex === 0 && columnIndex === 0) return 3;
   *   
   *   // No spanning for other cells
   *   return 1;
   * }
   */
  getColspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  /**
   * Returns an array of CSS class names to apply to the cell at the specified row and column indices.
   * This method allows for custom styling of individual cells.
   * The base implementation returns an empty array (no custom classes) and should be
   * overridden by subclasses that support custom cell styling.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {string[]} An array of CSS class names
   * 
   * @example
   * // Override in a subclass to implement custom cell classes
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
   *   return classes;
   * }
   */
  getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[] {
    return [];
  }

  /**
   * Returns an object containing CSS style properties to apply to the cell at the specified row and column indices.
   * This method allows for inline styling of individual cells.
   * The base implementation returns undefined (no custom styles) and should be
   * overridden by subclasses that support custom cell styling.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {{ [key: string]: string } | undefined} An object with CSS style properties, or undefined if no custom styles
   * 
   * @example
   * // Override in a subclass to implement custom cell styles
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
  getCustomStyleAt(_rowIndex: number, _columnIndex: number): { [p: string]: string } | undefined {
    return undefined;
  }

  /**
   * Returns the maximum colspan value that can occur in this area model.
   * This value is used to optimize rendering performance.
   * The base implementation returns 0 (no colspans) and should be overridden by
   * subclasses that support column spanning.
   * 
   * @returns {number} The maximum possible colspan value in this area
   * 
   * @example
   * // Override in a subclass to specify maximum colspan
   * getMaxColspan(): number {
   *   // If the model has colspans, return the maximum possible value
   *   return 3; // If some cells span up to 3 columns
   * }
   */
  getMaxColspan(): number {
    return 0;
  }

  /**
   * Returns the maximum rowspan value that can occur in this area model.
   * This value is used to optimize rendering performance.
   * The base implementation returns 0 (no rowspans) and should be overridden by
   * subclasses that support row spanning.
   * 
   * @returns {number} The maximum possible rowspan value in this area
   * 
   * @example
   * // Override in a subclass to specify maximum rowspan
   * getMaxRowspan(): number {
   *   // If the model has rowspans, return the maximum possible value
   *   return 2; // If some cells span up to 2 rows
   * }
   */
  getMaxRowspan(): number {
    return 0;
  }

  /**
   * Returns the row object at the specified index.
   * This method provides access to the underlying data structure.
   * The base implementation returns undefined and should be overridden by
   * subclasses that have a row-based data structure.
   * 
   * @param {number} _rowIndex - The index of the row
   * @returns {any} The row object, or undefined if the row doesn't exist
   * 
   * @example
   * // Override in a subclass to provide access to row data
   * getRowByIndex(rowIndex: number): any {
   *   if (rowIndex < 0 || rowIndex >= this.data.length) return undefined;
   *   return this.data[rowIndex];
   * }
   */
  getRowByIndex(_rowIndex: number): any {
  }

  /**
   * Returns the number of rows in this area.
   * This is a fundamental method that determines the vertical size of the area.
   * The base implementation returns 0 (no rows) and should be overridden by
   * all subclasses.
   * 
   * @returns {number} The number of rows in the area
   * 
   * @example
   * // Override in a subclass to provide the row count
   * getRowCount(): number {
   *   return this.data.length;
   * }
   */
  getRowCount(): number {
    return 0;
  }

  /**
   * Returns the height of the row at the specified index, in pixels.
   * This method allows for variable row heights in the table.
   * The base implementation returns 0 and should be overridden by
   * all subclasses.
   * 
   * @param {number} _rowIndex - The index of the row
   * @returns {number} The height of the row in pixels
   * 
   * @example
   * // Override in a subclass to provide fixed row heights
   * getRowHeight(rowIndex: number): number {
   *   return 30; // 30px for all rows
   * }
   * 
   * @example
   * // Override in a subclass to provide variable row heights
   * getRowHeight(rowIndex: number): number {
   *   // First row is taller
   *   if (rowIndex === 0) return 50;
   *   
   *   // Default height for other rows
   *   return 30;
   * }
   */
  getRowHeight(_rowIndex: number): number {
    return 0;
  }

  /**
   * Returns the row span value for the cell at the specified row and column indices.
   * A rowspan value of N means the cell spans N rows vertically.
   * The base implementation returns 0 (no spanning) and should be overridden by
   * subclasses that support row spanning.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {number} The rowspan value (number of rows the cell spans)
   * 
   * @example
   * // Override in a subclass to implement row spanning
   * getRowspanAt(rowIndex: number, columnIndex: number): number {
   *   // Special case: first column spans 2 rows at the beginning
   *   if (columnIndex === 0 && rowIndex % 2 === 0) return 2;
   *   
   *   // No spanning for other cells
   *   return 1;
   * }
   */
  getRowspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  /**
   * Returns the tooltip text for the cell at the specified row and column indices.
   * This tooltip will be displayed when the user hovers over the cell.
   * The base implementation returns undefined (no tooltip) and should be overridden by
   * subclasses that support tooltips.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {any} The tooltip content (usually a string)
   * 
   * @example
   * // Override in a subclass to provide tooltips
   * getTooltipAt(rowIndex: number, columnIndex: number): any {
   *   // Use the cell value as the tooltip
   *   return this.getValueAt(rowIndex, columnIndex);
   *   
   *   // Or provide a more detailed tooltip
   *   // const value = this.getValueAt(rowIndex, columnIndex);
   *   // return `Value: ${value}\nRow: ${rowIndex}\nColumn: ${columnIndex}`;
   * }
   */
  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    return undefined;
  }

  /**
   * Returns the value of the cell at the specified row and column indices.
   * This is one of the most important methods in the area model, as it provides
   * the actual data to be displayed in each cell.
   * The base implementation returns undefined and should be overridden by
   * all subclasses.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {any} The value at the specified cell
   * 
   * @example
   * // Override in a subclass for a 2D array model
   * getValueAt(rowIndex: number, columnIndex: number): any {
   *   if (rowIndex < 0 || rowIndex >= this.data.length) return undefined;
   *   const row = this.data[rowIndex];
   *   if (columnIndex < 0 || columnIndex >= row.length) return undefined;
   *   return row[columnIndex];
   * }
   * 
   * @example
   * // Override in a subclass for an object array model
   * getValueAt(rowIndex: number, columnIndex: number): any {
   *   const row = this.getRowByIndex(rowIndex);
   *   if (!row) return undefined;
   *   
   *   const property = this.columnDefs[columnIndex].property;
   *   return row[property];
   * }
   */
  getValueAt(_rowIndex: number, _columnIndex: number): any {
    return undefined;
  }

  /**
   * Returns a string representation of the cell value at the specified row and column indices.
   * This method is used when exporting the table data or copying to clipboard.
   * The base implementation returns an empty string and should be overridden by
   * subclasses that need custom text conversion.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {string} The text value of the specified cell
   * 
   * @example
   * // Override in a subclass to provide text representation
   * getTextValueAt(rowIndex: number, columnIndex: number): string {
   *   const value = this.getValueAt(rowIndex, columnIndex);
   *   
   *   // Handle different data types appropriately
   *   if (value === null || value === undefined) return '';
   *   if (value instanceof Date) return value.toISOString();
   *   return String(value);
   * }
   */
  getTextValueAt(_rowIndex: number, _columnIndex: number): string {
    return '';
  }

  /**
   * Returns the Y-coordinate (in pixels) of the top of the row at the specified index.
   * This method is used for scrolling and positioning rows in the viewport.
   * The base implementation returns 0 and should be overridden by
   * subclasses that support scrolling.
   * 
   * @param {number} _rowIndex - The index of the row
   * @returns {number} The Y-coordinate of the top of the row, in pixels
   * 
   * @example
   * // Override in a subclass with fixed row heights
   * getYPosByRowIndex(rowIndex: number): number {
   *   return rowIndex * this.defaultRowHeight;
   * }
   * 
   * @example
   * // Override in a subclass with variable row heights
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
  getYPosByRowIndex(_rowIndex: number): number {
    return 0;
  }

  /**
   * Initializes the area model.
   * This method is called internally by the TableModel during initialization.
   * It can be used to perform any necessary setup, such as calculating row positions.
   * The base implementation does nothing and can be overridden by
   * subclasses that need initialization.
   * 
   * @returns {void}
   * 
   * @example
   * // Override in a subclass to perform initialization
   * init(): void {
   *   // Calculate y-positions for all rows
   *   this.yPositions = [];
   *   let currentY = 0;
   *   
   *   for (let i = 0; i < this.getRowCount(); i++) {
   *     this.yPositions[i] = currentY;
   *     currentY += this.getRowHeight(i);
   *   }
   * }
   */
  init(): void {
    // ignore
  }

  /**
   * Determines whether the cell at the specified row and column indices is editable.
   * If true, the user can edit the cell content.
   * The base implementation returns false (not editable) and should be overridden by
   * subclasses that support cell editing.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {boolean} True if the cell is editable, false otherwise
   * 
   * @example
   * // Override in a subclass to implement cell editability
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
  isEditable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  /**
   * Determines whether this area supports filtering.
   * If true, the area can be filtered using the externalFilterChanged method.
   * The base implementation returns false (not filterable) and should be overridden by
   * subclasses that support filtering.
   * 
   * @returns {boolean} True if the area is filterable, false otherwise
   * 
   * @example
   * // Override in a subclass to enable filtering
   * isFilterable(): boolean {
   *   // Only the body area is filterable
   *   return this.areaIdent === 'body';
   * }
   */
  isFilterable(): boolean {
    return false;
  }

  /**
   * Determines whether the row at the specified index is checkable.
   * If true, a checkbox will be rendered at the beginning of the row.
   * The base implementation returns false (not checkable) and should be overridden by
   * subclasses that support row selection.
   * 
   * @param {number} _rowIndex - The index of the row
   * @returns {boolean} True if the row is checkable, false otherwise
   * 
   * @example
   * // Override in a subclass to implement row checkability
   * isRowCheckable(rowIndex: number): boolean {
   *   // All rows in the body are checkable
   *   if (this.areaIdent !== 'body') return false;
   *   
   *   // Except for special rows
   *   const row = this.getRowByIndex(rowIndex);
   *   return row && !row.locked;
   * }
   */
  isRowCheckable(_rowIndex: number): boolean {
    return false;
  }

  /**
   * Returns the checked state of the row at the specified index.
   * The base implementation returns undefined (not checked) and should be overridden by
   * subclasses that support row selection.
   * 
   * @param {number} _rowIndex - The index of the row
   * @returns {CheckedType | undefined} The checked state of the row (true, false, or 'indeterminate'),
   *                                   or undefined if the row is not checkable
   * 
   * @example
   * // Override in a subclass to implement row checked state
   * isRowChecked(rowIndex: number): CheckedType | undefined {
   *   if (!this.rowSelectionModel) return undefined;
   *   
   *   const row = this.getRowByIndex(rowIndex);
   *   return this.rowSelectionModel.isRowChecked(row);
   * }
   */
  isRowChecked(_rowIndex: number): CheckedType | undefined {
    return undefined;
  }

  /**
   * Determines whether the cell at the specified row and column indices is selectable.
   * If true, the user can select the cell.
   * The base implementation returns false (not selectable) and should be overridden by
   * subclasses that support cell selection.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column
   * @returns {boolean} True if the cell is selectable, false otherwise
   * 
   * @example
   * // Override in a subclass to implement cell selectability
   * isSelectable(rowIndex: number, columnIndex: number): boolean {
   *   // All cells in the body are selectable
   *   return this.areaIdent === 'body';
   * }
   */
  isSelectable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  /**
   * Sets the checked state of the row at the specified index.
   * The base implementation does nothing and should be overridden by
   * subclasses that support row selection.
   * 
   * @param {number} _rowIndex - The index of the row
   * @param {boolean} _checked - The new checked state
   * @returns {void}
   * 
   * @example
   * // Override in a subclass to implement row checking
   * setRowChecked(rowIndex: number, checked: boolean): void {
   *   if (!this.rowSelectionModel) return;
   *   
   *   const row = this.getRowByIndex(rowIndex);
   *   if (row) {
   *     this.rowSelectionModel.checkRow(row, checked);
   *   }
   * }
   */
  setRowChecked(_rowIndex: number, _checked: boolean): void {
    // ignore
  }

  /**
   * Sets the value of a cell at the specified row and column indices.
   * This method is called when a cell is edited by the user or programmatically.
   * The base implementation returns false (value not set) and should be overridden by
   * subclasses that support cell editing.
   * 
   * @param {number} _rowIndex - The index of the row containing the cell
   * @param {number} _columnIndex - The index of the column containing the cell
   * @param {any} _value - The new value to set
   * @returns {boolean} - True if the value was successfully set, false otherwise
   * 
   * @example
   * // Override in a subclass to implement cell value setting
   * setValue(rowIndex: number, columnIndex: number, value: any): boolean {
   *   // Check if the cell is editable
   *   if (!this.isEditable(rowIndex, columnIndex)) return false;
   *   
   *   // For a 2D array model
   *   if (rowIndex >= 0 && rowIndex < this.data.length) {
   *     const row = this.data[rowIndex];
   *     if (columnIndex >= 0 && columnIndex < row.length) {
   *       row[columnIndex] = value;
   *       return true;
   *     }
   *   }
   *   
   *   return false;
   * }
   */
  setValue(_rowIndex: number, _columnIndex: number, _value: any): boolean {
    return false;
  }

}
