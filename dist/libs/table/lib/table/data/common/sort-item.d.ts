import { SortState } from "./sort-state.type";
export declare class SortItem {
    columnIndex: number;
    sortState: SortState;
    constructor(columnIndex: number, sortState: SortState);
}
