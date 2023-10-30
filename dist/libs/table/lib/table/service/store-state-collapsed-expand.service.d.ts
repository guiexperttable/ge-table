import { AbstractStoreStateService } from "./abstract-store-state.service";
import { CollapsedExpandedData } from "./data/collapsed-expanded.data";
import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";
export declare class StoreStateCollapsedExpandService extends AbstractStoreStateService {
    private readonly COLLAPSED_EXPANDED_STATE;
    private collapsedExpandedState;
    constructor(fn: GetStorageKeyFn | undefined);
    collapsedExpandedStateGet(): CollapsedExpandedData;
    collapsedExpandedStateIncludes(rowId: (string | number)): boolean;
    collapsedStateIdsPush(id: (string | number)): void;
    collapsedStateIdsRemove(id: (string | number)): void;
    collapsedStateAll(expand: boolean): void;
    protected load(): void;
    private persist;
}
