import { CellRange } from "../data/common/cell-range";
import { ExtendedSelectionType, SelectionMode } from './selection.type';
import { SelectionModelIf } from "./selection-model.if";


export class SelectionModel implements SelectionModelIf {

  protected ranges: CellRange[] = [];
  protected negativeRanges: CellRange[] = [];
  protected allSelected: boolean = false;

  constructor(
    public selectionType: ExtendedSelectionType = "none",
    public selectionMode: SelectionMode = "single"
  ) {
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
  }

  isAllSelected() {
    return this.allSelected;
  }

  addSelection(range: CellRange): void {
    this.addRange(range);
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
  }

}
