export type IsSameFn<T> = (r1: T, r2: T, optionsIf: AutoRestoreOptionsIf<T>) => boolean;
export type GetRowIdFn<T> = ((row: T) => string | number);
export type GetStorageKeyFn = (() => string);
/**
 * See TableOptionsIf#autoRestoreOptions()
 */
export interface AutoRestoreOptionsIf<T> {
    autoRestoreSortingState: boolean;
    autoRestoreCollapsedExpandedState?: boolean;
    autoRestoreScrollPosition?: boolean;
    autoRestoreCheckedState?: boolean;
    autoRestoreSelectedState?: boolean;
    getRowId?: undefined | GetRowIdFn<T>;
    getStorageKeyFn?: undefined | GetStorageKeyFn;
    isSame?: undefined | IsSameFn<T>;
}
