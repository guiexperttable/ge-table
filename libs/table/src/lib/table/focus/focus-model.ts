import { FocusType } from "./focus.type";
import { FocusModelIf } from "./focus-model.if";

export class FocusModel implements FocusModelIf {

  protected rowIndex: number = -1;
  protected columnIndex: number = -1;
  protected changed = false;

  constructor(
    public selectionType: FocusType = "none"
  ) {
  }

  clearChanged(): void {
    this.changed = false;
  }

  hasChanged(): boolean {
    return this.changed;
  }

  clear(): void {
    this.rowIndex = -1;
    this.columnIndex = -1;
  }


  setFocus(
    rowIndex: number,
    columnIndex: number
  ): void {
    if (this.rowIndex !== rowIndex || this.columnIndex !== columnIndex) {
      this.rowIndex = rowIndex;
      this.columnIndex = columnIndex;
      this.changed = true;
    }
  }

  hasFocus(rowIndex: number, columnIndex: number): boolean {
    return this.rowIndex === rowIndex && this.columnIndex === columnIndex;
  }

  getFocus(): [number, number] {
    return [this.rowIndex, this.columnIndex];
  }

}
