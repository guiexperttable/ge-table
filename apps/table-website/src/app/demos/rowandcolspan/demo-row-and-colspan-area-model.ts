import { AreaIdent, AreaModelArrayOfArrays, FilterFunction } from "@guiexpert/table";

export class DemoRowAndColspanAreaModel<T>
  extends AreaModelArrayOfArrays<T> {


  constructor(
    public override areaIdent: AreaIdent,
    public override readonly filteredArr: any[][],
    public override defaultRowHeight: number = 40
  ) {
    super(areaIdent, filteredArr, defaultRowHeight);
  }

  override getRowspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex == 5 && columnIndex === 5) {
      return 5;
    }
    if (rowIndex == 11 && columnIndex === 5) {
      return 6;
    }
    return 0;
  }

  override getColspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex == 5 && columnIndex === 5) {
      return 5;
    }
    if (rowIndex == 5 && columnIndex === 11) {
      return 6;
    }
    return 0;
  }


  override getCustomClassesAt(rowIndex: number, columnIndex: number): string[] {
    if (this.getRowspanAt(rowIndex, columnIndex) === 6) {
      return ["bg-red"];
    }
    if (this.getColspanAt(rowIndex, columnIndex) === 6) {
      return ["bg-yellow"];
    }
    if (this.getColspanAt(rowIndex, columnIndex) > 3) {
      return ["bg-cyan"];
    }

    return [];
  }


  override externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // nothing
  }

  override isFilterable(): boolean {
    return false;
  }
}

