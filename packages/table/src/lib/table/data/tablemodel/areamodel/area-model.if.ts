import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { FilterFunction } from "../../common/filter-function";
import { SortItem } from "../../common/sort-item";
import { AreaIdent } from "../area-ident.type";

/**
 * This is the model interface for an area model. A table can have three of these models, one for the header,
 * one for the body , and one for the footer.
 * An AreaModelIf gives you information about the rows and cell contents.
 * The column information is given by the TableModelIf.
 */
export interface AreaModelIf {


  /**
   * The identifier for one of the areas: header, body, footer.
   */
  areaIdent: AreaIdent;

  /**
   * A model and controller for a row checkbox selection
   */
  rowSelectionModel: CheckboxModelIf<any> | undefined;

  /**
   * Method for moving a column from position sourceColumnIndex to targetColumnIndex.
   */
  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;

  /**
   * Method for changing a cell value.
   */
  setValue(rowIndex: number, columnIndex: number, value: any): boolean;

  /**
   * Internally used by TableModel.
   */
  init(): void;

  /**
   * Returns the number of rows of the area
   */
  getRowCount(): number;

  /**
   * Returns the value of the cell at position rowIndex/columnIndex.
   */
  getValueAt(rowIndex: number, columnIndex: number): any;

  /**
   * Returns a string value of the cell at position rowIndex/columnIndex.
   * This function will be called by 'export' or 'copy to clipboard'.
   */
  getTextValueAt(rowIndex: number, columnIndex: number): string;

  /**
   * Returns the value of a colspan of the cell at position rowIndex/columnIndex.
   * A value below 2 is ignored.
   */
  getColspanAt(rowIndex: number, columnIndex: number): number;

  /**
   * This return value is internally used to optimize the render performance.
   * Set this value to the lowest possible value. If the model has no colspan,
   * a value of 0 would be good. The dafault is 32. If your model has a colspan
   * cell greater 32, don't forget to increase this value.
   */
  getMaxColspan(): number;

  /**
   * Returns the value of a rowspan of the cell at position rowIndex/columnIndex.
   * A value below 2 is ignored.
   */
  getRowspanAt(rowIndex: number, columnIndex: number): number;

  /**
   * This return value is internally used to optimize the render performance.
   * Set this value to the lowest possible value. If the model has no rowspan,
   * a value of 0 would be good. The default is 32. If your model has a rowspan
   * cell greater 32, don't forget to increase this value.
   */
  getMaxRowspan(): number;

  /**
   * This method can be used to return a list of css classes for the given cell
   * @param rowIndex row index of the cell
   * @param columnIndex column index of the cell
   */
  getCustomClassesAt(rowIndex: number, columnIndex: number): string[];

  /**
   * This method can be used to return an object with css style information for the given cell
   * @param rowIndex row index of the cell
   * @param columnIndex column index of the cell
   */
  getCustomStyleAt(rowIndex: number, columnIndex: number): { [key: string]: string } | undefined;

  /**
   * Returns the cell value of the given cell. This value will be rendered
   * directly in the cell or rendered by a cell renderer: see {@link getCellRenderer}.
   * @param rowIndex
   * @param columnIndex
   */
  getValueAt(rowIndex: number, columnIndex: number): any;

  /**
   * Returns the value of a tooltip of the given cell (rowIndex/columnIndex).
   * @param rowIndex
   * @param columnIndex
   */
  getTooltipAt(rowIndex: number, columnIndex: number): any;

  /**
   * Returns a cell renderer class for the given cell (rowIndex/columnIndex).
   * If the return value is undefined, no renderer is used and the model value will be rendered directly in the cell.
   * @param rowIndex
   * @param columnIndex
   */
  getCellRenderer(rowIndex: number, columnIndex: number): CellRendererIf | undefined;

  /**
   * Returns the row height in pixel of the given row (rowIndex).
   * @param rowIndex
   */
  getRowHeight(rowIndex: number): number;

  /**
   * Returns the row of the model, which correspond to the rowIndex.
   * @param rowIndex
   */
  getRowByIndex(rowIndex: number): any;

  /**
   * Return the y-position in pixel of the top of the row on the scrollpane.
   * For big tables it can be a big value (greate than the height of the viewport).
   * @param rowIndex
   */
  getYPosByRowIndex(rowIndex: number): number;

  /**
   * If this method returns true, the cell can be edited by the user.
   * @param rowIndex
   * @param columnIndex
   */
  isEditable(rowIndex: number, columnIndex: number): boolean;

  /**
   * If true, the cell is selectable.
   * @param rowIndex
   * @param columnIndex
   */
  isSelectable(rowIndex: number, columnIndex: number): boolean;

  /**
   * If true, the row is checkable and a checkbox is rendered at the beginning of the row.
   * @param rowIndex
   */
  isRowCheckable(rowIndex: number): boolean;

  /**
   * Returns the checked state of an row.
   * @param rowIndex
   */
  isRowChecked(rowIndex: number): CheckedType | undefined;

  /**
   * Set the checked state of the row (rowIndex) to #checked.
   * @param rowIndex
   * @param checked
   */
  setRowChecked(rowIndex: number, checked: boolean): void;

  /**
   * If true, the table is filterable. Rows can be filtered with help of {@link #externalFilterChanged()}
   */
  isFilterable(): boolean;

  /**
   * Will be called internally, when a filtering is trigger.
   * @param predictFn Defines, what row are invisible or visible after filtering.
   */
  externalFilterChanged<T>(predictFn: FilterFunction<T>): void;

  /**
   * If the 'restore sort' option is set (see), this method will be triggered automatically by the table,
   * @param sortItems
   */
  doSort(sortItems: SortItem[]): boolean;


  sort(compareFn?: (a: any, b: any) => number):void;
}

