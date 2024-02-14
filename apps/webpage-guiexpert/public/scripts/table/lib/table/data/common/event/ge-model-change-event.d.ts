import { GeCellIndices } from "./ge-cell-indices";
/**
 * Indicates that changes have occurred in the given cells.
 */
export declare class GeModelChangeEvent {
    cells: GeCellIndices[];
    constructor(cells: GeCellIndices[]);
    static createSingle(rowIndex: number, columnIndex: number): GeModelChangeEvent;
}
