export declare class CellRange {
    r1: number;
    c1: number;
    r2: number;
    c2: number;
    gammaRange: boolean;
    constructor(r1: number, c1: number, r2: number, c2: number, gammaRange?: boolean);
    static create(params: {
        rowIndex1: number;
        columnIndex1: number;
        rowIndex2: number;
        columnIndex2: number;
        gammaRange?: boolean;
    }): CellRange;
    static singleCell(rowIndex: number, columnIndex: number): CellRange;
    static singleRow(rowIndex: number): CellRange;
    static singleColumn(columnIndex: number): CellRange;
    isInRange(rowIndex: number, columnIndex: number): boolean;
}
