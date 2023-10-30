import { AbstractAreaModel } from "./abstract-area-model";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
export declare class AreaModelObjectyArray<T> extends AbstractAreaModel<T> {
    areaIdent: AreaIdent;
    protected readonly rows: T[];
    defaultRowHeight: number;
    protected columnDefs: ColumnDefIf[];
    protected readonly properties: string[];
    protected filteredRows: T[];
    protected sorterService: SorterService;
    constructor(areaIdent: AreaIdent, rows: T[], defaultRowHeight: number, columnDefs?: ColumnDefIf[]);
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
