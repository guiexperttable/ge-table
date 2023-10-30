import { AbstractStoreStateService } from "./abstract-store-state.service";
import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";
import { SortItem } from "../data/common/sort-item";


export class StoreStateSortingService extends AbstractStoreStateService {

  private readonly SORTING_STATE = "sortingState";
  private sortItems: SortItem[] = [];


  constructor(fn: GetStorageKeyFn | undefined) {
    super(fn);
    this.load();
  }

  getSortItems(): SortItem[] {
    return this.sortItems;
  }

  setSortItems(sortItems: SortItem[]): void {
    this.sortItems = sortItems;
    this.checkAndPersistItem(this.SORTING_STATE, this.sortItems);
  }


  protected override load() {
    const fn = this.getStorageKeyFn;
    if (fn) {
      const key = fn();
      if (key) {
        // A main key is given by function from options
        const subKey = key + this.SORTING_STATE;
        let sortItems = this.loadFromLocalStorage<SortItem[]>(subKey);
        this.sortItems = sortItems ? sortItems : [];
      }
    }
  }


}
