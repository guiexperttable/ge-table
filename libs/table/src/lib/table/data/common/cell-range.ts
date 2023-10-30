export class CellRange {


  constructor(
    public r1: number,
    public c1: number,
    public r2: number,
    public c2: number,
    public gammaRange: boolean = false) {
  }

  static create(params: {
    rowIndex1: number,
    columnIndex1: number,
    rowIndex2: number,
    columnIndex2: number,
    gammaRange?: boolean
  }): CellRange {
    if (params.gammaRange === undefined) {
      params.gammaRange = false;
    }
    return new CellRange(
      params.rowIndex1,
      params.columnIndex1,
      params.rowIndex2,
      params.columnIndex2,
      params.gammaRange
    );
  }

  static singleCell(
    rowIndex: number,
    columnIndex: number
  ): CellRange {
    return new CellRange(rowIndex, columnIndex, rowIndex, columnIndex);
  }

  static singleRow(
    rowIndex: number
  ): CellRange {
    return new CellRange(rowIndex, 0, rowIndex, Number.MAX_SAFE_INTEGER);
  }

  static singleColumn(
    columnIndex: number
  ): CellRange {
    return new CellRange(0, columnIndex, Number.MAX_SAFE_INTEGER, columnIndex);
  }

  isInRange(rowIndex: number, columnIndex: number): boolean {
    return rowIndex >= this.r1
      && rowIndex <= this.r2
      && columnIndex >= this.c1
      && columnIndex <= this.c2;
  }

}
