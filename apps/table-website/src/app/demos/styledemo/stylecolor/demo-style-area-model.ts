import { AbstractAreaModel, CellRendererIf, FilterFunction } from "@guiexpert/table";

export class DemoStyleAreaModel extends AbstractAreaModel<string[]> {

  private arr: string[][] = [];

  constructor(
    private rowCount = 200,
    private columnCount = 200,
    public override defaultRowHeight: number = 40,
    private cellRenderer: CellRendererIf
  ) {
    super("body", [], defaultRowHeight);
    for (let r = 0; r < this.rowCount; r++) {
      const row: string[] = [];
      this.arr.push(row);
      for (let c = 0; c < this.columnCount; c++) {
        row.push("");
      }
    }
  }

  getColumnCount(): number {
    if (this.arr?.length) {
      return this.arr[0].length;
    }
    return 0;
  }

  getRowCount(): number {
    if (this.arr) {
      return this.arr.length;
    }
    return 0;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return this.arr[rowIndex][columnIndex];
  }

  getRowHeight(rowIndex: number): number {
    return this.defaultRowHeight;
  }


  override getCellRenderer(rowIndex: number, columnIndex: number): CellRendererIf | undefined {
    return this.cellRenderer;
  }


  override getCustomClassesAt(rowIndex: number, columnIndex: number): string[] {
    const ret = [];
    if (rowIndex === columnIndex) {
      ret.push("text-color-red");
    }
    if ((rowIndex + columnIndex) % 5 === 0) {
      ret.push("text-color-yellow");
    }
    return ret;
  }


  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // nothing
  }

  override isFilterable(): boolean {
    return false;
  }
}

