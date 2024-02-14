import { CheckedType } from "../data/common/checked-type";
import { CheckboxModelIf } from "./checkbox-model.if";

export class CheckboxModel<T> implements CheckboxModelIf<T> {

  protected checkedRows: Array<T> = [];

  getCheckedRows(): T[] {
    return this.checkedRows;
  }

  setCheckedRows(rows: T[]) {
    this.checkedRows = rows;
  }


  addCheckedRows(rows: T[]) {
    if (!this.checkedRows) {
      this.checkedRows = [];
    }
    for (const row of rows) {
      if (!this.checkedRows.includes(row)) {
        this.checkedRows.push(row);
      }
    }
  }

  checkRow(row: T, sel: boolean) {
    if (!this.checkedRows) {
      this.checkedRows = [];
    }
    if (sel) {
      if (!this.checkedRows.includes(row)) {
        this.checkedRows.push(row);
      }
    } else {
      this.removeSelectedRow(row);
    }
  }


  isRowChecked(row: T): CheckedType {
    if (this.checkedRows) {
      return this.checkedRows.includes(row) ? "full" : "none";
    }
    return "none";
  }

  checkAll(_rows: T[]) {
    this.checkedRows = [];
  }

  private removeSelectedRow(row: T) {
    if (this.checkedRows) {
      const idx = this.checkedRows.indexOf(row);
      if (idx > -1) {
        this.checkedRows.splice(idx, 1);
      }
    }
  }

}
