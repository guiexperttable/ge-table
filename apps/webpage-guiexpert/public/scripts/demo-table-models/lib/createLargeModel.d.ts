import { AreaModel, CellRendererIf, TableModelAndOptionsIf } from '../../../table/src';
export declare function createLargeModelAndOptions(rowcount?: number): TableModelAndOptionsIf;
export declare class LargeBodyModel extends AreaModel {
    private rowcount;
    private readonly nf;
    private barRenderer;
    constructor(rowcount?: number);
    getRowCount(): number;
    getRowHeight(_rowIndex: number): number;
    getValueAt(rowIndex: number, columnIndex: number): number | string;
    getCellRenderer(_rowIndex: number, columnIndex: number): CellRendererIf | undefined;
    getYPosByRowIndex(rowIndex: number): number;
}
