import { AbstractAreaModel } from "./abstract-area-model";
import { AreaIdent } from "../area-ident.type";
import { ColumnDefIf } from "../column/column-def.if";
import { FilterFunction } from "../../common/filter-function";
export declare class AreaModelArrayOfArrays<T> extends AbstractAreaModel<T[][]> {
    areaIdent: AreaIdent;
    readonly arr: T[][];
    defaultRowHeight: number;
    protected columnDefs: ColumnDefIf[];
    filteredArr: T[][];
    constructor(areaIdent: AreaIdent, arr: T[][], defaultRowHeight: number, columnDefs?: ColumnDefIf[]);
    externalFilterChanged(predictFn: FilterFunction<any>): void;
    getRowCount(): number;
    getValueAt(rowIndex: number, columnIndex: number): any;
    setValue(rowIndex: number, columnIndex: number, value: any): boolean;
    getRowByIndex(rowIndex: number): any;
    getRowHeight(_rowIndex: number): number;
    changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;
}
