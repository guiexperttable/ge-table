import { SortState } from "./sort-state.type";
/**
 * Represents a sortable column with its sort order..
 */
export declare class SortItem {
    columnIndex: number;
    sortState: SortState;
    constructor(columnIndex: number, sortState: SortState);
}
