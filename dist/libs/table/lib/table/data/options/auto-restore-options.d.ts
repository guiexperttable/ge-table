import { AutoRestoreOptionsIf } from "./auto-restore-options.if";
export declare class AutoRestoreOptions<T> implements AutoRestoreOptionsIf<T> {
    autoRestoreSortingState: boolean;
    autoRestoreCollapsedExpandedState: boolean;
    autoRestoreScrollPosition: boolean;
    autoRestoreCheckedState: boolean;
    autoRestoreSelectedState: boolean;
    getStorageKeyFn: undefined;
    isSame: (r1: T, r2: T, options: AutoRestoreOptionsIf<T>) => boolean;
    getRowId: (row: T) => string | number;
}
