import { AbstractStoreStateService } from "./abstract-store-state.service";
import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";
export declare class StoreStateScrollPosService extends AbstractStoreStateService {
    private readonly SCROLL_STATE;
    private scrollOffset;
    constructor(fn: GetStorageKeyFn | undefined);
    getScrollOffset(): [number, number];
    updateScrollOffset(xy: [number, number]): void;
    protected load(): void;
}
