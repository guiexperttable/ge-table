/* eslint @typescript-eslint/no-explicit-any: "off" */
import { AbstractAreaModel } from './abstract-area-model';
import { ColumnDefIf } from '../column/column-def.if';
import { AreaIdent } from '../area-ident.type';
import { FilterFunction } from '../../common/filter-function';
import { SorterService } from '../../../service/sorter.service';
import { SortItem } from '../../common/sort-item';
import { isTreeRow } from '../../../instanceof-workaround';
import { ObjectArrayHolderIf } from './object-array-holder.if';

/**
 * @class AreaModelObjectArray
 * @description
 * The `AreaModelObjectArray` class is a fundamental component of the GuiExpert Table library that 
 * represents a data model for a specific area of a table (header, body, or footer) where the data 
 * is stored as an array of objects.
 * 
 * This class extends {@link AbstractAreaModel} and implements {@link ObjectArrayHolderIf}, providing 
 * a robust implementation for handling tabular data where each row is represented as an object in an array.
 * 
 * The class provides functionality for:
 * - Managing row data (setting, filtering, sorting)
 * - Retrieving values from specific cells
 * - Handling row selection and focus
 * - Supporting custom sorting and filtering
 * - Accessing nested properties within objects
 * - Managing column order changes
 * - Applying custom CSS classes to rows
 * 
 * @template T - The type of objects in the array. Each object represents a row in the table.
 * 
 * @example
 * // Basic usage with an array of simple objects
 * const rows = [
 *   { id: 1, name: 'John', age: 30 },
 *   { id: 2, name: 'Jane', age: 25 },
 *   { id: 3, name: 'Bob', age: 40 }
 * ];
 * 
 * const columnDefs = [
 *   { property: 'id', headerLabel: 'ID', width: 50 },
 *   { property: 'name', headerLabel: 'Name', width: 150 },
 *   { property: 'age', headerLabel: 'Age', width: 100 }
 * ];
 * 
 * const bodyAreaModel = new AreaModelObjectArray<any>(
 *   'body',
 *   rows,
 *   30, // default row height
 *   columnDefs
 * );
 * 
 * @example
 * // Using with TableFactory to create a complete table model
 * import { TableFactory } from '../../../factory/table-factory';
 * 
 * const rows = [
 *   { id: 1, name: 'John', age: 30 },
 *   { id: 2, name: 'Jane', age: 25 },
 *   { id: 3, name: 'Bob', age: 40 }
 * ];
 * 
 * const columnDefs = [
 *   { property: 'id', headerLabel: 'ID', width: 50 },
 *   { property: 'name', headerLabel: 'Name', width: 150 },
 *   { property: 'age', headerLabel: 'Age', width: 100 }
 * ];
 * 
 * const tableModel = TableFactory.createByObjectArray(
 *   rows,
 *   [['ID', 'Name', 'Age']], // header
 *   [], // footer
 *   0, // fixedLeftColumnCount
 *   0, // fixedRightColumnCount
 *   false, // rowCheckboxVisible
 *   undefined, // defaultRowHeights
 *   columnDefs
 * );
 * 
 * @example
 * // Working with nested properties
 * const rows = [
 *   { id: 1, person: { name: 'John', contact: { email: 'john@example.com', phone: '123-456-7890' } } },
 *   { id: 2, person: { name: 'Jane', contact: { email: 'jane@example.com', phone: '098-765-4321' } } }
 * ];
 * 
 * const columnDefs = [
 *   { property: 'id', headerLabel: 'ID', width: 50 },
 *   { property: 'person.name', headerLabel: 'Name', width: 150 },
 *   { property: 'person.contact.email', headerLabel: 'Email', width: 200 },
 *   { property: 'person.contact.phone', headerLabel: 'Phone', width: 150 }
 * ];
 * 
 * const bodyAreaModel = new AreaModelObjectArray<any>(
 *   'body',
 *   rows,
 *   30, // default row height
 *   columnDefs
 * );
 * 
 * @example
 * // Filtering rows
 * const bodyAreaModel = new AreaModelObjectArray<any>('body', rows, 30, columnDefs);
 * 
 * // Filter rows where age > 30
 * bodyAreaModel.externalFilterChanged(row => row.age > 30);
 * 
 * // Get the filtered rows
 * const filteredRows = bodyAreaModel.getFilteredRows();
 * 
 * @example
 * // Sorting rows
 * const bodyAreaModel = new AreaModelObjectArray<any>('body', rows, 30, columnDefs);
 * 
 * // Sort by age in ascending order
 * bodyAreaModel.doSort([{ columnIndex: 2, sortState: 'asc' }]);
 * 
 * // Sort by name in descending order
 * bodyAreaModel.doSort([{ columnIndex: 1, sortState: 'desc' }]);
 * 
 * @example
 * // Custom sorting with a comparator function
 * const bodyAreaModel = new AreaModelObjectArray<any>('body', rows, 30, columnDefs);
 * 
 * // Sort by name length
 * bodyAreaModel.sort((a, b) => a.name.length - b.name.length);
 * 
 * @example
 * // Working with row selection and focus
 * const bodyAreaModel = new AreaModelObjectArray<any>('body', rows, 30, columnDefs);
 * 
 * // Set focus on the second row
 * bodyAreaModel.setFocusedRowIndex(1);
 * 
 * // Get the focused row index
 * const focusedRowIndex = bodyAreaModel.getFocusedRowIndex();
 * 
 * // Get custom classes for a cell (includes selection and focus classes)
 * const classes = bodyAreaModel.getCustomClassesAt(1, 0);
 * 
 * @see {@link AbstractAreaModel} - The parent class that provides the base implementation
 * @see {@link ObjectArrayHolderIf} - The interface that defines methods for accessing rows
 * @see {@link AreaModelObjectArrayWithColumndefs} - A subclass that changes the constructor parameter order
 */
export class AreaModelObjectArray<T>
  extends AbstractAreaModel<T>
  implements ObjectArrayHolderIf<T> {


  /**
   * An array of property names extracted from the column definitions.
   * These properties are used to access values from the row objects.
   * @protected
   * @readonly
   * @type {string[]}
   */
  protected readonly properties: string[];

  /**
   * A copy of the rows array that can be filtered and sorted without affecting the original data.
   * This array is used for rendering the table and is updated when filtering or sorting is applied.
   * @protected
   * @type {T[]}
   */
  protected filteredRows: T[];

  /**
   * Service for handling sorting operations.
   * @protected
   * @type {SorterService}
   */
  protected sorterService: SorterService = new SorterService();

  /**
   * Creates an instance of AreaModelObjectArray.
   * 
   * @param {AreaIdent} areaIdent - Identifies which area of the table this model represents ('header', 'body', or 'footer')
   * @param {T[]} rows - The array of objects that represent the rows in this area
   * @param {number} defaultRowHeight - The default height for rows in this area (in pixels)
   * @param {ColumnDefIf[]} [columnDefs=[]] - Definitions for the columns in this area
   * @param {string} [selectedRowClass='ge-selected-row'] - CSS class to apply to selected rows
   * @param {string} [focusedRowClass='ge-focused-row'] - CSS class to apply to the focused row
   * 
   * @example
   * const rows = [
   *   { id: 1, name: 'John', age: 30 },
   *   { id: 2, name: 'Jane', age: 25 }
   * ];
   * 
   * const columnDefs = [
   *   { property: 'id', headerLabel: 'ID', width: 50 },
   *   { property: 'name', headerLabel: 'Name', width: 150 },
   *   { property: 'age', headerLabel: 'Age', width: 100 }
   * ];
   * 
   * const bodyAreaModel = new AreaModelObjectArray(
   *   'body',
   *   rows,
   *   30,
   *   columnDefs
   * );
   */
  constructor(
    public override areaIdent: AreaIdent,
    protected rows: T[],
    public override defaultRowHeight: number,
    protected override columnDefs: ColumnDefIf[] = [],
    public selectedRowClass: string = 'ge-selected-row',
    public focusedRowClass: string = 'ge-focused-row'
  ) {
    super(areaIdent, columnDefs, defaultRowHeight);
    this.filteredRows = [...rows];
    this.properties = columnDefs.map(def => def.property);
  }

  /**
   * The index of the currently focused row.
   * This is used to apply the focused row styling.
   * @public
   * @type {number}
   * @default 0
   */
  public _focusedRowIndex: number = 0;

  /**
   * Gets the index of the currently focused row.
   * 
   * @returns {number} The index of the focused row
   * 
   * @example
   * const focusedRowIndex = bodyAreaModel.getFocusedRowIndex();
   * console.log(`The focused row is at index ${focusedRowIndex}`);
   */
  getFocusedRowIndex(): number {
    return this._focusedRowIndex;
  }

  /**
   * Sets the index of the focused row.
   * This will apply the focused row styling to the specified row.
   * 
   * @param {number} value - The index of the row to focus
   * 
   * @example
   * // Focus the second row (index 1)
   * bodyAreaModel.setFocusedRowIndex(1);
   */
  setFocusedRowIndex(value: number) {
    this._focusedRowIndex = value;
  }

  /**
   * Replaces the current rows array with a new one.
   * This also resets the filtered rows to match the new rows array.
   * 
   * @param {T[]} rows - The new array of row objects
   * 
   * @example
   * // Replace the current rows with new data
   * const newRows = [
   *   { id: 4, name: 'Alice', age: 35 },
   *   { id: 5, name: 'Charlie', age: 45 }
   * ];
   * bodyAreaModel.setRows(newRows);
   */
  setRows(rows: T[]) {
    this.rows = rows;
    this.filteredRows = [...rows];
  }

  /**
   * Filters both the original rows and filtered rows arrays using the provided predicate function.
   * Unlike `externalFilterChanged`, this method permanently modifies the original rows array.
   * 
   * @param {(row: T) => boolean} predict - A function that returns true for rows to keep and false for rows to filter out
   * 
   * @example
   * // Remove all rows where age is less than 30
   * bodyAreaModel.filterRowsByPredict(row => row.age >= 30);
   */
  filterRowsByPredict(predict: (row: T) => boolean) {
    this.rows = this.rows.filter(predict);
    this.filteredRows = this.filteredRows.filter(predict);
  }

  /**
   * Returns the number of rows in the filtered rows array.
   * This is used to determine how many rows should be rendered in the table.
   * 
   * @returns {number} The number of rows in the filtered rows array
   * 
   * @example
   * const rowCount = bodyAreaModel.getRowCount();
   * console.log(`The table has ${rowCount} rows`);
   */
  getRowCount(): number {
    return this.filteredRows?.length ?? 0;
  }

  /**
   * Gets the value at the specified row and column indices.
   * This method handles tree rows and nested properties.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} columnIndex - The index of the column
   * @returns {any} The value at the specified cell, or an empty string if not found
   * 
   * @example
   * // Get the value in the first row, second column
   * const value = bodyAreaModel.getValueAt(0, 1);
   * console.log(`The value is: ${value}`);
   * 
   * @example
   * // Iterate through all cells in a row
   * const rowIndex = 0;
   * for (let colIndex = 0; colIndex < columnDefs.length; colIndex++) {
   *   const value = bodyAreaModel.getValueAt(rowIndex, colIndex);
   *   console.log(`Cell (${rowIndex}, ${colIndex}): ${value}`);
   * }
   */
  getValueAt(rowIndex: number, columnIndex: number): any {
    const property = this.properties[columnIndex];
    let t = this.filteredRows[rowIndex];

    if (isTreeRow(t)) {
      // @ts-expect-error: we access an unknown property name:
      t = t.data;
    }
    if (t) {
      return this.getValueByT(t, property);
    }
    return '';
  }

  /**
   * Retrieves the filtered and sorted rows from the dataset.
   * These rows are used for rendering the table.
   * Unlike `getAllRows()`, this method returns only the rows that match any applied filters.
   *
   * @returns {T[]} An array containing the filtered (and sorted) rows
   * 
   * @example
   * // Get all filtered rows
   * const filteredRows = bodyAreaModel.getFilteredRows();
   * 
   * // Count rows that match a certain condition
   * const adultsCount = filteredRows.filter(row => row.age >= 18).length;
   */
  getFilteredRows(): T[] {
    return this.filteredRows;
  }

  /**
   * Returns the original, unfiltered array of rows.
   * This can be useful when you need to access all data regardless of any applied filters.
   * 
   * @returns {T[]} The original array of row objects
   * 
   * @example
   * // Get all rows, including those filtered out
   * const allRows = bodyAreaModel.getAllRows();
   * 
   * // Calculate average age across all rows
   * const totalAge = allRows.reduce((sum, row) => sum + row.age, 0);
   * const averageAge = totalAge / allRows.length;
   */
  getAllRows(): T[] {
    return this.rows;
  }

  /**
   * Returns the first row from the filtered rows that matches the given criteria based on the provided predicate function.
   * This method only searches within the filtered rows, not the original rows array.
   *
   * @param {Partial<T>} criteria - A partial object containing the search criteria
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that takes the search criteria and a row,
   *        and returns true if the row matches the criteria
   * @returns {T | undefined} The first matching row, or undefined if no match is found
   * 
   * @example
   * // Find a user by name in the filtered rows
   * const criteria = { name: 'John' };
   * const user = bodyAreaModel.findRowFromFilteredRowsByAllCriteria(
   *   criteria,
   *   (criteria, row) => row.name === criteria.name
   * );
   * 
   * @example
   * // Find a user by age range in the filtered rows
   * const criteria = { minAge: 25, maxAge: 35 };
   * const user = bodyAreaModel.findRowFromFilteredRowsByAllCriteria(
   *   criteria,
   *   (criteria, row) => row.age >= criteria.minAge && row.age <= criteria.maxAge
   * );
   */
  findRowFromFilteredRowsByAllCriteria(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
    return this.getFilteredRows().find(row => predicate(criteria, row));
  }

  /**
   * Searches through all rows to find a row that matches the given criteria based on the predicate function.
   * This method searches within the original rows array, including rows that may have been filtered out.
   *
   * @param {Partial<T>} criteria - A partial object containing the search criteria
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that takes the search criteria and a row,
   *        and returns true if the row matches the criteria
   * @returns {T | undefined} The first matching row from all rows, or undefined if no match is found
   * 
   * @example
   * // Find a user by ID in all rows
   * const criteria = { id: 42 };
   * const user = bodyAreaModel.findRowFromAllRowsByAllCriteria(
   *   criteria,
   *   (criteria, row) => row.id === criteria.id
   * );
   * 
   * @example
   * // Find a user with a specific property value in all rows
   * const criteria = { department: 'Engineering', role: 'Manager' };
   * const user = bodyAreaModel.findRowFromAllRowsByAllCriteria(
   *   criteria,
   *   (criteria, row) => row.department === criteria.department && row.role === criteria.role
   * );
   */
  findRowFromAllRowsByAllCriteria(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
    return this.getAllRows().find(row => predicate(criteria, row));
  }

  /**
   * Returns the height of the row at the specified index.
   * This implementation always returns the default row height.
   * Override this method in subclasses to support variable row heights.
   * 
   * @param {number} _rowIndex - The index of the row (unused in this implementation)
   * @returns {number} The height of the row in pixels
   * 
   * @example
   * const rowHeight = bodyAreaModel.getRowHeight(0);
   * console.log(`The first row has a height of ${rowHeight}px`);
   */
  getRowHeight(_rowIndex: number): number {
    return this.defaultRowHeight;
  }

  /**
   * Returns the row object at the specified index from the filtered rows array.
   * This method overrides the parent class implementation.
   * 
   * @param {number} rowIndex - The index of the row to retrieve
   * @returns {any} The row object at the specified index, or undefined if the index is out of bounds
   * 
   * @example
   * // Get the first row object
   * const row = bodyAreaModel.getRowByIndex(0);
   * console.log('First row:', row);
   * 
   * @example
   * // Iterate through all rows
   * for (let i = 0; i < bodyAreaModel.getRowCount(); i++) {
   *   const row = bodyAreaModel.getRowByIndex(i);
   *   console.log(`Row ${i}:`, row);
   * }
   */
  override getRowByIndex(rowIndex: number): any {
    return this.filteredRows[rowIndex];
  }

  /**
   * Applies an external filter function to the rows array.
   * This method updates the filtered rows array without modifying the original rows array.
   * 
   * @param {FilterFunction<any>} predictFn - A function that returns true for rows to keep and false for rows to filter out
   * 
   * @example
   * // Filter rows where age is greater than 30
   * bodyAreaModel.externalFilterChanged(row => row.age > 30);
   * 
   * @example
   * // Filter rows based on a search term
   * const searchTerm = 'john';
   * bodyAreaModel.externalFilterChanged(row => 
   *   row.name.toLowerCase().includes(searchTerm.toLowerCase())
   * );
   * 
   * @example
   * // Clear all filters
   * bodyAreaModel.externalFilterChanged(() => true);
   */
  externalFilterChanged(predictFn: FilterFunction<any>): void {
    this.filteredRows = (this.rows ? this.rows.filter(predictFn) : []);
  }

  /**
   * Sorts the filtered rows based on the provided sort items.
   * This method supports sorting by multiple columns with different sort directions.
   * 
   * @param {SortItem[]} sortItems - An array of sort items, each containing a column index and sort state
   * @returns {boolean} Always returns true to indicate sorting was performed
   * 
   * @example
   * // Sort by age in ascending order
   * bodyAreaModel.doSort([{ columnIndex: 2, sortState: 'asc' }]);
   * 
   * @example
   * // Sort by name in descending order, then by age in ascending order
   * bodyAreaModel.doSort([
   *   { columnIndex: 1, sortState: 'desc' },
   *   { columnIndex: 2, sortState: 'asc' }
   * ]);
   * 
   * @example
   * // Clear sorting
   * bodyAreaModel.doSort([{ columnIndex: 0, sortState: 'none' }]);
   */
  override doSort(sortItems: SortItem[]): boolean {
    for (const sortItem of sortItems) {
      const { columnIndex, sortState } = sortItem;
      const f = sortState === 'asc' ? 1 :
        sortState === 'desc' ? -1 : 0;
      const property = this.properties[columnIndex];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(property, f));
    }
    return true;
  }

  /**
   * Sorts the filtered rows using a custom comparator function.
   * This method provides more flexibility than `doSort()` for complex sorting logic.
   * 
   * @param {(a: T, b: T) => number} compareFn - A function that compares two rows and returns a number:
   *   - Negative if a should come before b
   *   - Positive if a should come after b
   *   - Zero if they are equivalent for sorting purposes
   * 
   * @example
   * // Sort by name length
   * bodyAreaModel.sort((a, b) => a.name.length - b.name.length);
   * 
   * @example
   * // Sort by a computed value
   * bodyAreaModel.sort((a, b) => {
   *   const scoreA = a.wins * 3 + a.draws;
   *   const scoreB = b.wins * 3 + b.draws;
   *   return scoreB - scoreA; // Descending order
   * });
   */
  override sort(compareFn: (a: T, b: T) => number): void {
    this.filteredRows = this.filteredRows.sort(compareFn);
  }

  /**
   * Gets a value from an object using a property path.
   * This method supports accessing nested properties using dot notation (e.g., 'person.name').
   * 
   * @param {T} t - The object to get the value from
   * @param {string} property - The property path to access (e.g., 'name' or 'person.contact.email')
   * @returns {any} The value at the specified property path, or undefined if not found
   * 
   * @example
   * const user = { id: 1, name: 'John', contact: { email: 'john@example.com' } };
   * 
   * // Access simple property
   * const name = bodyAreaModel.getValueByT(user, 'name');
   * console.log(name); // 'John'
   * 
   * // Access nested property
   * const email = bodyAreaModel.getValueByT(user, 'contact.email');
   * console.log(email); // 'john@example.com'
   */
  getValueByT(t: T, property: string): any {
    if (!t) return undefined;
    if (!property) return undefined;

    if (property.includes('.')) {
      return this.getPropertyValue(t, property.split('.'));
    }
    // @ts-expect-error: we access an unknown property name:
    return t[property];
  }

  /**
   * Changes the order of columns by moving a column from one position to another.
   * This method updates both the properties array and calls the parent class implementation.
   * 
   * @param {number} sourceColumnIndex - The index of the column to move
   * @param {number} targetColumnIndex - The index where the column should be moved to
   * 
   * @example
   * // Move the second column (index 1) to the fourth position (index 3)
   * bodyAreaModel.changeColumnOrder(1, 3);
   * 
   * @example
   * // Move the last column to the first position
   * const lastIndex = bodyAreaModel.columnDefs.length - 1;
   * bodyAreaModel.changeColumnOrder(lastIndex, 0);
   */
  override changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    this.arrayMove(this.properties, sourceColumnIndex, targetColumnIndex);
    super.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
  }

  /**
   * Gets the custom CSS classes that should be applied to a cell.
   * This method extends the parent class implementation to add selection and focus classes.
   * 
   * @param {number} rowIndex - The index of the row
   * @param {number} _columnIndex - The index of the column (unused in this implementation)
   * @returns {string[]} An array of CSS class names to apply to the cell
   * 
   * @example
   * // Get the CSS classes for a cell
   * const classes = bodyAreaModel.getCustomClassesAt(1, 2);
   * console.log('CSS classes:', classes);
   * 
   * @example
   * // Apply the classes to a cell element
   * const cellElement = document.createElement('div');
   * const classes = bodyAreaModel.getCustomClassesAt(rowIndex, columnIndex);
   * cellElement.classList.add(...classes);
   */
  override getCustomClassesAt(rowIndex: number, _columnIndex: number): string[] {
    const ret: string[] = super.getCustomClassesAt(rowIndex, _columnIndex);

    const row = this.getRowByIndex(rowIndex);
    if (row.selected) {
      ret.push(this.selectedRowClass);
    }
    if (this._focusedRowIndex === rowIndex) {
      ret.push(this.focusedRowClass);
    }
    return ret;
  }

  /**
   * Creates a comparator function for sorting rows based on a property and sort direction.
   * This method supports custom sort comparators defined in column definitions.
   * 
   * @param {string} property - The property to sort by
   * @param {number} f - The sort direction factor: 1 for ascending, -1 for descending, 0 for no sorting
   * @returns {(a: T, b: T) => number} A comparator function that compares two rows
   * 
   * @example
   * // Create a comparator for sorting by name in ascending order
   * const comparator = bodyAreaModel.genericFlatTableSortComparator('name', 1);
   * 
   * // Sort the rows using the comparator
   * const sortedRows = [...bodyAreaModel.getFilteredRows()].sort(comparator);
   */
  protected genericFlatTableSortComparator(property: string, f: number): (a: T, b: T) => number {
    // Find the column definition for the property
    const columnDef = this.columnDefs.find(def => def.property === property);

    return (a: T, b: T) => {
      const va = this.getValueByT(a, property);
      const vb = this.getValueByT(b, property);

      // If the column has a custom sortComparator, use it
      if (columnDef?.sortComparator) {
        return f * columnDef.sortComparator(va, vb, a, b, f);
      }

      // Otherwise, use the default generic comparator
      return this.sorterService.genericSortComparator(va, vb, f);
    };
  }

  /**
   * Recursively gets a value from an object using an array of property names.
   * This is a helper method used by `getValueByT` to access nested properties.
   * 
   * @param {any} o - The object to get the value from
   * @param {string[]} props - An array of property names representing the path to the value
   * @returns {any} The value at the specified property path, or undefined if not found
   * 
   * @private
   */
  private getPropertyValue(o: any, props: string[]): any {
    const prop = props.shift();
    // @ts-expect-error: we access an unknown property name:
    const o2 = o[prop];
    if (o2 && props.length) {
      return this.getPropertyValue(o2, props);
    }
    return o2;
  }
}
