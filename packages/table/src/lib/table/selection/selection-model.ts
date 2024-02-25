import { CellRange } from "../data/common/cell-range";
import { ExtendedSelectionType, SelectionMode } from './selection.type';
import { SelectionModelIf } from "./selection-model.if";
import { EventSelectionChangedListenerIf } from './event-selection-changed-listener.if';
//import { AvoidDoubleExecution } from '../../common/decorator/avoid-double-execution.decorator';


/**
 * `SelectionModel` is a class that manages the various modes and types of selections within a grid.
 * It supports basic modes like single cell, row, column, and range selections, as well as advanced mode like negative ranges.
 * Events related to selections, such as changes to a selection, are propagated to listeners through the EventSelectionChangedListener interface.
 *
 * The class extends `SelectionModelIf` interface and defines additional methods and fields specific to its functionality.
 *
 * @property {ExtendedSelectionType} selectionType - The type of selection being used. It's of type ExtendedSelectionType. Default: "none"
 * @property {SelectionMode} selectionMode - The mode of selection being used. It's of type SelectionMode. Default: "single"
 * @property {Array} ranges - This contains all the current selected cell ranges in the grid.
 * @property {Array} negativeRanges - This contains all the current negative cell ranges in the grid.
 * @property {boolean} allSelected - This is a flag to indicate whether all cells in the grid are selected or not.
 * @property {boolean} silent - This is a flag to suppress the firing of selection change events.
 * @property {Array} listenerArr - This contains all the listeners for selection change events.
 *
 * @method constructor(selectionType?: ExtendedSelectionType, selectionMode?: SelectionMode) - Constructs a new instance of the SelectionModel class.
 * @method getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[] - Returns the array of registered event selection changed listeners.
 * @method addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Adds an event selection changed listener to the array.
 * @method removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Removes a specific event selection changed listener if it exists.
 * @method fireChangeEvent(): void - Fires a change event on each registered listener when a selection change occurs. Does nothing if the silent property is true.
 * @method firstClick(rowIndex: number, columnIndex: number): void - Initiates a selection operation at the specified coordinates. The nature of the operation is determined by the current selection type and mode.
 * @method getSelectionCount(rowIndex: number, columnIndex: number): number - Returns the selection count of current ranges
 * @method isInNegativeRange(rowIndex: number, columnIndex: number): boolean - Verifies if any point (cell) is in negative range or not.
 * @method getRanges() - Returns the selection ranges
 * @method clear(): void - Clears all selections in all ranges and resets allSelected and negativeRanges arrays.
 * @method hasSelection(): boolean - Checks whether there is any selection. Returns true if yes, false if no.
 * @method hasNoSelection(): boolean - Checks whether there is no selection. Returns true if yes, false if no.
 * @method getMergedRowIndices(): number[] - Gets the array of merged row indices.
 * @method selectAll(): void - Selects all selectable entities.
 * @method isAllSelected() - Checks if all selectable entities are selected.
 * @method addSelection(range: CellRange): void - Adds a certain range to the selection.
 * @method removeSelection(range: CellRange): void - Removes a certain range from the selection.
 * @method togglePoint(row: number, col: number): void - Toggles the selection state of a point at the specified row and column in a grid.
 * @method isSelected(row: number, col: number): boolean - Checks if a specific cell in a grid is selected.
 * @method addRange(range: CellRange): void - Adds a range of cells to the selection.
 */
export class SelectionModel implements SelectionModelIf {

  protected ranges: CellRange[] = [];
  protected negativeRanges: CellRange[] = [];
  protected allSelected: boolean = false;

  protected silent = false;

  private listenerArr: EventSelectionChangedListenerIf[] = [];

  constructor(
    public selectionType: ExtendedSelectionType = "none",
    public selectionMode: SelectionMode = "single"
  ) {
  }

  getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[]{
    return this.listenerArr;
  }

  addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void {
    if (!this.listenerArr.includes(listener)) {
      this.listenerArr.push(listener);
    }
  }

  removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void {
    const index = this.listenerArr.indexOf(listener, 0);
    if (index > -1) {
      this.listenerArr.splice(index, 1);
    }
  }

  //@AvoidDoubleExecution(100)
  fireChangeEvent() {
    if (!this.silent) {
      this.listenerArr.forEach(l => l.onSelectionChanged(this));
    }
  }

  firstClick(rowIndex: number, columnIndex: number): void {
     if (this.selectionType === 'row') {
       this.addRange(CellRange.singleRow(rowIndex));
     } else if (this.selectionType === 'column') {
       this.addRange(CellRange.singleColumn(columnIndex));
     }
  }

  getSelectionCount(rowIndex: number, columnIndex: number): number {
    let count = 0;
    for (const range of this.ranges) {
      if (range.isInRange(rowIndex, columnIndex)) {
        count++;
      }
    }
    if (this.allSelected) {
      count++;
    }
    if (this.isInNegativeRange(rowIndex, columnIndex)) {
      count = 0;
    }
    return count;
  }

  isInNegativeRange(rowIndex: number, columnIndex: number): boolean {
    for (const range of this.negativeRanges) {
      if (range.isInRange(rowIndex, columnIndex)) {
        return true;
      }
    }
    return false;
  }

  getRanges() {
    return this.ranges;
  }

  clear(): void {
    this.ranges = [];
    this.negativeRanges = [];
    this.allSelected = false;
    this.fireChangeEvent();
  }

  hasSelection(): boolean {
    return this.allSelected || !!this.ranges.length;
  }

  hasNoSelection(): boolean {
    return !this.hasSelection();
  }

  /**
   * Retrieves the merged row indices from the given range selection.
   *
   * @returns {number[]} Array of merged row indices
   */
  getMergedRowIndices() : number[] {
    const mergedRowIndices = new Set<number>();
    for (const range of this.ranges) {
      for (let r = range.r1; r <= range.r2; r++) {
        if (!mergedRowIndices.has(r) && !this.isInNegativeRange(r, 0)) {
          mergedRowIndices.add(r);
        }
      }
    }
    return Array.from(mergedRowIndices);
  }

  selectAll() {
    this.allSelected = true;
    this.fireChangeEvent();
  }

  isAllSelected() {
    return this.allSelected;
  }

  addSelection(range: CellRange): void {
    this.addRange(range);
    this.fireChangeEvent();
  }

  removeSelection(range: CellRange): void {
    if (this.selectionType === "none") {
      return; // skip!
    }
    let r = range;
    if (this.selectionType === "row") {
      r = CellRange.singleRow(range.r1);
    } else if (this.selectionType === "column") {
      r = CellRange.singleColumn(range.c1);
    }
    this.negativeRanges.push(r);
    this.fireChangeEvent();
  }

  togglePoint(row: number, col: number): void {
    if (this.getSelectionCount(row, col) > 0) {
      this.removeSelection(CellRange.singleCell(row, col));
    } else {
      this.addSelection(CellRange.singleCell(row, col));
    }
  }

  isSelected(row: number, col: number): boolean {
    return  this.getSelectionCount(row, col) > 0;
  }


  protected addRange(range: CellRange) {
    if (this.selectionType === "none") {
      return; // skip!
    }
    this.allSelected = false;
    if (this.selectionMode === "single") {
      this.ranges = [];
    }
    if (this.selectionType === "row") {
      range.c1 = 0;
      range.c2 = Number.MAX_SAFE_INTEGER;
    } else if (this.selectionType === "column") {
      range.r1 = 0;
      range.r2 = Number.MAX_SAFE_INTEGER;
    } else if (this.selectionType === "cell") {
      range.r2 = range.r1;
      range.c2 = range.c1;
    } else if (this.selectionType === "range") {
      //
    }
    this.ranges.push(range);
    this.fireChangeEvent();
  }

}
