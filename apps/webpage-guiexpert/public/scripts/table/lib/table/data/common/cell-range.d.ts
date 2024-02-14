export declare class CellRange {
    r1: number;
    c1: number;
    r2: number;
    c2: number;
    gammaRange: boolean;
    /**
     * Represents a constructor for a class.
     * @constructor
     * @param {number} r1 - The value for r1.
     * @param {number} c1 - The value for c1.
     * @param {number} r2 - The value for r2.
     * @param {number} c2 - The value for c2.
     * @param {boolean} [gammaRange=false] - The value for gammaRange. Defaults to false. gammaRange will be used for AreaModelCellGroups, but it's not implemented yet!
     */
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
