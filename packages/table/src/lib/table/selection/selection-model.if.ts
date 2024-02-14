import { CellRange } from "../data/common/cell-range";
import { EventSelectionChangedListenerIf } from './event-selection-changed-listener.if';

export interface SelectionModelIf {

  getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[];
  addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void;
  removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void;



  /**
   * Toggles the selection state of a point at the specified row and column in a grid.
   *
   * @param {number} row - The row index of the point to toggle.
   * @param {number} col - The column index of the point to toggle.
   * @return {void}
   */
  togglePoint(row: number, col: number): void;

  /**
   * Checks if a specific cell in a grid is selected.
   *
   * @param {number} row - The row index of the cell to check.
   * @param {number} col - The column index of the cell to check.
   * @returns {boolean} - Returns true if the cell is selected, otherwise false.
   */
  isSelected(row: number, col: number): boolean;

  /**
   * Returns an array of CellRange objects representing the selections.
   *
   * @return {CellRange[]} Array of CellRange objects representing the ranges.
   */
  getRanges(): CellRange[];

  getMergedRowIndices() : number[];

  clear(): void;

  hasSelection(): boolean;

  hasNoSelection(): boolean;

  addSelection(range: CellRange): void;

  removeSelection(range: CellRange): void;

  getSelectionCount(rowIndex: number, columnIndex: number): number;

  selectAll(): void;

  isAllSelected(): boolean;

  firstClick(rowIndex: number, columnIndex: number): void;
}
