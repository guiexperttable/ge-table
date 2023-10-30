import { GeCellIndices } from "./ge-cell-indices";
export declare class GeModelChangeEvent {
    cells: GeCellIndices[];
    constructor(cells: GeCellIndices[]);
    static createSingle(rowIndex: number, columnIndex: number): GeModelChangeEvent;
}
