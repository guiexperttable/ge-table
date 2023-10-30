import { AbstractStoreStateService } from "./abstract-store-state.service";
import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";


export class StoreStateScrollPosService extends AbstractStoreStateService {

  private readonly SCROLL_STATE = "scrollState";
  private scrollOffset: [number, number] = [0, 0];


  constructor(fn: GetStorageKeyFn | undefined) {
    super(fn);
    this.load();
  }

  getScrollOffset(): [number, number] {
    return this.scrollOffset;
  }

  updateScrollOffset(xy: [number, number]) {
    this.scrollOffset = xy;
    this.checkAndPersistItem(this.SCROLL_STATE, this.scrollOffset);
  }


  protected override load() {
    const fn = this.getStorageKeyFn;
    if (fn) {
      const key = fn();
      if (key) {
        // A main key is given by function from options
        const subKey4 = key + this.SCROLL_STATE;
        let scrollOffset = this.loadFromLocalStorage<[number, number]>(subKey4);
        this.scrollOffset = scrollOffset ? scrollOffset : [0, 0];
      }
    }
  }


}
