import { AbstractStoreStateService } from "./abstract-store-state.service";
import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";
import { SortItem } from "../data/common/sort-item";
export declare class StoreStateSortingService extends AbstractStoreStateService {
    private readonly SORTING_STATE;
    private sortItems;
    constructor(fn: GetStorageKeyFn | undefined);
    getSortItems(): SortItem[];
    setSortItems(sortItems: SortItem[]): void;
    protected load(): void;
}
