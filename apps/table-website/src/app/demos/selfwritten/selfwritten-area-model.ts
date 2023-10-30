import { AbstractAreaModel, FilterFunction } from "@guiexpert/table";

export class SelfwrittenAreaModel extends AbstractAreaModel<number> {

  constructor() {
    super('body', [], 40);
  }

  getRowCount(): number {
    return 100;
  }

  getRowHeight(rowIndex: number): number {
    return 40;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return `${rowIndex}/${columnIndex}`; // <- just calculated
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // do notthing
  }

}
