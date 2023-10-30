import { AbstractAreaModel, AreaIdent } from "@guiexpert/table";
import { FilterFunction } from "../../../../../libs/table/src/lib/table/data/common/filter-function";


export class DemoMultisizeAreaModel extends AbstractAreaModel<number> {


  private arr: number[][] = [];

  constructor(
    public override areaIdent: AreaIdent,
    private rowCount: number = 30,
    private readonly colCount = 10
  ) {
    super(areaIdent, [], -1);
    for (let i = 0; i < this.rowCount; i++) {
      const rowHeight = Math.floor(40 + 100 * Math.random());
      const row: number[] = [];
      this.arr.push(row);
      for (let c = 0; c < this.colCount; c++) {
        row.push(rowHeight + c);
      }
    }
  }

  getRowCount(): number {
    return this.rowCount;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return this.arr[rowIndex][columnIndex];
  }

  override getTooltipAt(rowIndex: number, columnIndex: number): any {
    return `${rowIndex}/${columnIndex}`;
  }

  override getRowHeight(rowIndex: number): number {
    if (!this.arr?.length || !this.arr[rowIndex]?.length) {
      return 0;
    }
    // we take the second cell value as row height:
    return this.arr[rowIndex][1];
  }


  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // nothing
  }

  override isFilterable(): boolean {
    return false;
  }

}

