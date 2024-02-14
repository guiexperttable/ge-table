import { AbstractAreaModel } from "./abstract-area-model";
import { ColumnDefIf } from "../column/column-def.if";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
export declare class AsyncBodyAreaModelObjectArray<T> extends AbstractAreaModel<T> {
    protected readonly maxRowCount: number;
    defaultRowHeight: number;
    protected columnDefs: ColumnDefIf[];
    protected readonly properties: string[];
    protected sorterService: SorterService;
    protected cachedStartIndex: number;
    protected cachedRows: T[];
    constructor(maxRowCount: number, defaultRowHeight: number, columnDefs?: ColumnDefIf[]);
    setChunk(startIndex: number, chunk: T[]): void;
    getRowCount(): number;
    getValueAt(rowIndex: number, columnIndex: number): any;
    getFilteredRows(): T[];
    getAllRows(): T[];
    getRowHeight(_rowIndex: number): number;
    getRowByIndex(rowIndex: number): any;
    externalFilterChanged(predictFn: FilterFunction<any>): void;
    doSort(sortItems: SortItem[]): boolean;
    getValueByT(t: T, property: string): any;
    changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;
    protected genericFlatTableSortComparator(property: string, f: number): (a: T, b: T) => number;
    private getPropertyValue;
}
