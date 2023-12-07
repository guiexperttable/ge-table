import { CellRange } from "../../common/cell-range";
import { AreaModelIf } from "./area-model.if";
import { TableModelIf } from "../table-model.if";

/**
 * Represents a model for handling colspan and rowspan in a table.
 */
export class ColAndRowspanModel {

  protected colAndRowspanRanges: CellRange[] | undefined = undefined;

  constructor(
    protected tableModel: TableModelIf,
    protected areaModel: AreaModelIf
  ) {
  }

  init() {
    if (this.areaModel.getMaxColspan() < 2 && this.areaModel.getMaxRowspan() < 2) {
      return; // sip
    }
    this.colAndRowspanRanges = [];
    const rowCount = this.areaModel.getRowCount();
    const colCount = this.tableModel.getColumnCount();
    for (let r = 0; r < rowCount; r++) {
      for (let c = 0; c < colCount; c++) {
        let cs = this.areaModel.getColspanAt(r, c);
        let rs = this.areaModel.getRowspanAt(r, c);
        if (cs > 1 || rs > 1) {
          if (cs === 0) {
            cs = 1;
          }
          if (rs === 0) {
            rs = 1;
          }

          const gammaRange = this.areaModel.hasOwnProperty('gammaCells');
          this.colAndRowspanRanges.push(
            new CellRange(r, c, r + rs - 1, c + cs - 1, gammaRange)
          );
        }
      }
    }
  }

  getRanges(): CellRange[] {
    if (this.colAndRowspanRanges) {
      return this.colAndRowspanRanges;
    }
    return [];
  }

  isInRange(rowIndex: number, columnIndex: number): boolean {
    if (this.colAndRowspanRanges) {
      for (const range of this.colAndRowspanRanges) {
        if (range.isInRange(rowIndex, columnIndex)) {
          return true;
        }
      }
    }
    return false;
  }

}
