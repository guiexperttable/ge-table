import { TreeRow } from "../../common/tree-row";
import { AbstractAreaModel } from "./abstract-area-model";
import { AreaIdent } from "../area-ident.type";
import { ColumnDefIf } from "../column/column-def.if";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
import { TreeRowIf } from "../../common/tree-row-if";
/**
 * Represents a  tree-based table model.
 * Extends the AbstractAreaModel class.
 *
 * @template S - The type of the row data.
 */
export declare class AreaModelTree<S> extends AbstractAreaModel<TreeRow<S>> {
    areaIdent: AreaIdent;
    readonly rows: TreeRowIf<S>[];
    defaultRowHeight: number;
    protected columnDefs: ColumnDefIf[];
    type: string;
    protected readonly properties: string[];
    protected sorterService: SorterService;
    private readonly service;
    private filteredFlattenRows;
    private flattenRows;
    private lastPredictFn?;
    constructor(areaIdent: AreaIdent, rows: TreeRowIf<S>[], defaultRowHeight: number, columnDefs?: ColumnDefIf[]);
    changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;
    recalcVisibleTreeRows(): void;
    getFilteredFlattenRows(): TreeRowIf<S>[];
    getRowCount(): number;
    getValueAt(rowIndex: number, columnIndex: number): any;
    getRowHeight(_rowIndex: number): number;
    getCustomClassesAt(rowIndex: number, _columnIndex: number): string[];
    getRowByIndex(idx: number): TreeRowIf<S> | undefined;
    getValueByT(t: S, property: string): any;
    externalFilterChanged<S>(predictFn: FilterFunction<S>): void;
    doSort(sortItems: SortItem[]): boolean;
    toggleExpandCollapseAll(expanded: boolean): void;
    setAllParentsOk(item: TreeRowIf<any>): boolean;
    setValue(rowIndex: number, columnIndex: number, value: any): boolean;
    protected genericTreeTableSortComparator(property: string, f: number): (a: TreeRowIf<S>, b: TreeRowIf<S>) => number;
    private expandAllRecursive;
    private doFiltering;
    private getPropertyValue;
    private treeSort;
}
