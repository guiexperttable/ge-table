import { Padding } from "./padding";
import { AreaIdent } from "./area-ident.type";
import { ColumnDefIf } from "./column/column-def.if";
import { AreaModelIf } from "./areamodel/area-model.if";
import { FilterFunction } from "../common/filter-function";
import { SortItem } from "../common/sort-item";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { TableScope } from '../../table-scope';

/**
 * The TableModelIf is on one hand a container for the header, body, and footer models
 * (see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
 * the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).
 *
 * If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
 * header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
 * will result in the presence of an east area.
 * <pre>
 *  +----------------+-------------------+--------------+
 *  |  header/west   |  header/center    | header/east  |
 *  +----------------+-------------------+--------------+
 *  |  body/west     |  body/center      | body/east    |
 *  +----------------+-------------------+--------------+
 *  |  footer/west   |  footer/center    | footer/east  |
 *  +----------------+-------------------+--------------+</pre>
 *
 */
export interface TableModelIf {

  /**
   * Moves a column from the source column index to the target column index.
   *
   * @param {number} sourceColumnIndex - The index of the column to be moved.
   * @param {number} targetColumnIndex - The index where the column will be moved to.
   *
   * @return {void} - This method does not return anything.
   */
  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;

  /**
   * Checks if a column at the specified index is sortable.
   *
   * @param {number} colIdx - The index of the column to check.
   * @return {boolean} - true if the column is sortable, false otherwise.
   */
  isSortable(colIdx: number): boolean;


  /**
   * Triggered by TableScope.firstInit() after the table tag is attached to the dom.
   */
  init(): void;


  /**
   * Recalculates the column widths of the table.
   *
   * @param {number} [clientWidth] - The client width of the table. If not provided, the client width of the scroll viewport will be used.
   *
   * @return {undefined}
   */
  setParentWidth(widthInPixel: number): void;

  /**
   * Returns the number of columns in a dataset.
   *
   * @returns {number} The number of columns in the dataset.
   */
  getColumnCount(): number;

  /**
   * Retrieves the width (in pixels) of a specific column.
   *
   * @param {number} columnIndex - The index of the column to get the width of.
   * @return {number} The width of the specified column.
   */
  getColumnWidth(columnIndex: number): number;

  /**
   * Returns the x position corresponding to the given column index.
   *
   * @param {number} columnIndex - The index of the column.
   * @return {number} - The x position corresponding to the given column index.
   */
  getXPosByColumnIndex(columnIndex: number): number;

  /**
   * Retrieves the area model based on the given row area identifier.
   *
   * @param {AreaIdent} rowAreaIdent - The identifier of the row area.
   * @return {AreaModelIf} The area model corresponding to the provided row area identifier.
   */
  getAreaModel(rowAreaIdent: AreaIdent): AreaModelIf;

  /**
   * Retrieves the body model.
   *
   * @returns {AreaModelIf} The body model representing an area.
   */
  getBodyModel(): AreaModelIf;

  /**
   * Retrieves the number of fixed left columns.
   *
   * @returns {number} The count of fixed left columns.
   */
  getFixedLeftColumnCount(): number;

  /**
   * Retrieves the count of fixed right columns.
   *
   * @return {number} The count of fixed right columns.
   */
  getFixedRightColumnCount(): number;

  /**
   * Checks if the header is visible.
   *
   * @return {boolean} - Returns true if the header is visible, false otherwise.
   */
  isHeaderVisibe(): boolean;

  /**
   * Checks if the footer is visible.
   *
   * @returns {boolean} Returns true if the footer is visible, otherwise returns false.
   */
  isFooterVisibe(): boolean;

  /**
   * Determines if the row checkbox is visible.
   *
   * @return {boolean} True if the row checkbox is visible, false otherwise.
   */
  isRowCheckboxVisible(): boolean;

  /**
   * Retrieves the height of a specific row in the provided row area.
   *
   * @param {AreaIdent} rowAreaIdent - The identifier of the row area.
   * @param {number} rowIndex - The index of the row for which to retrieve the height.
   * @return {number} The height of the specified row in pixels.
   */
  getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number;

  /**
   * Retrieves the column definition for the specified index.
   *
   * @param {number} index - The index of the column to retrieve the definition for.
   * @return {ColumnDefIf | undefined} - The column definition for the specified index, or undefined if not found.
   */
  getColumnDef(index: number): ColumnDefIf | undefined;

  /**
   * Retrieves the column definitions for a table.
   *
   * @return {ColumnDefIf[] | undefined} An array of column definitions or undefined if there are no column definitions.
   */
  getColumnDefs(): ColumnDefIf[] | undefined;

  /**
   * Retrieves the property of a specific column.
   *
   * @param {number} columnIndex - The index of the column.
   * @return {string} The property of the column.
   */
  getColumnProperty(columnIndex: number): string;

  /**
   * Retrieves the body row at the specified index.
   *
   * @param {number} rowIndex - The index of the desired body row.
   * @returns {any} - The body row object at the specified index.
   */
  getBodyRowByIndex(rowIndex: number): any;

  /**
   * Retrieves the width of a given column in the table.
   *
   * @param {number} columnIndex - The index of the column for which to get the width.
   * @return {number} The width of the column in pixels.
   */
  getColumnWidth(columnIndex: number): number;

  /**
   * Sets the width of a column in the table.
   *
   * @param {number} columnIndex - The index of the column to set the width for.
   * @param {number} width - The width to set for the column, in pixels.
   * @return {void}
   */
  setColumnWidth(columnIndex: number, width: number): void;


  // ----------------------------------
  /**
   * Recalculates the size of the element based on the provided client width.
   *
   * @param {number} clientWidth - The current client width of the element.
   * @return {void}
   */
  recalcSize(clientWidth: number): void;

  /**
   * Recalculates the padding of the element based on its content.
   * This method updates the padding of the element to ensure that its content
   * is properly aligned and displayed.
   *
   * @returns {void}
   */
  recalcPadding(): void;

  /**
   * Recalculates the height and padding of an element.
   *
   * @returns {void}
   */
  recalcHeightAndPadding(): void;

  /**
   * Retrieves the padding value of the element.
   *
   * @returns {Padding} The padding value of the element.
   */
  getPadding(): Padding;

  /**
   * Retrieves the content height in pixels.
   *
   * @returns {number} The height of the content in pixels.
   */
  getContentHeightInPixel(): number;

  /**
   * Returns the content width in pixels.
   *
   * @returns {number} The width of the content in pixels.
   */
  getContentWidthInPixel(): number;


  // ----------------------------------
  /**
   * This is triggered when an external filter has changed.
   *
   * @param {FilterFunction<T>} predictFn - A function that takes an element of type T and returns a boolean indicating whether the element satisfies the filter conditions.
   * @template T - The type of elements being filtered.
   *
   * @return {void}
   */
  externalFilterChanged<T>(predictFn: FilterFunction<T>): void;

  /**
   * Sorts an array of SortItem objects based on a predetermined sorting algorithm.
   *
   * @param {SortItem[]} sortItems - An array of SortItem objects to be sorted.
   * @return {boolean} - Returns true if the sorting was successful, false otherwise.
   */
  doSort(sortItems: SortItem[]): boolean;

  /**
   * Retrieves the selection model associated with the component.
   *
   * @returns {SelectionModelIf|undefined} The selection model instance if available, or undefined if none is found.
   */
  getSelectionModel(): SelectionModelIf|undefined;

  setTableScope(tableScope:TableScope): void;
  getTableScope():TableScope | undefined;
}
