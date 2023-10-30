import { AbstractAreaModel, FilterFunction } from "@guiexpert/table";


export class DemoMouseeventAreaModel extends AbstractAreaModel<string> {


  constructor(
    private rowCount: number = 300,
    private readonly colCount = 40
  ) {
    super("body", []);
  }

  getColumnCount(): number {
    return this.colCount;
  }

  getRowCount(): number {
    return this.rowCount;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return `r${rowIndex} c${columnIndex}`;
  }

  override getRowHeight(rowIndex: number): number {
    return 36 + (rowIndex * 10) % 36;
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // nothing
  }

  override isFilterable(): boolean {
    return false;
  }


}

