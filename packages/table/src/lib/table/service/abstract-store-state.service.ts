import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";


export abstract class AbstractStoreStateService {


  protected getStorageKeyFn?: undefined | GetStorageKeyFn;


  constructor(fn: GetStorageKeyFn | undefined) {
    this.getStorageKeyFn = fn;
  }

  autoConvertMapToObject(item: any) {
    const obj = {};
    if (item instanceof Map) {
      const map = item as Map<string, any>;

      for (const item of [...map]) {
        const [
          key,
          value
        ] = item;
        // @ts-ignore
        obj[key] = value;
      }
    }
    return obj;
  }

  // abstract getSubKey(): string;

  protected abstract load(): void;

  protected checkAndPersistItem(keySuffix: string, item: any) {
    const fn = this.getStorageKeyFn;
    if (fn) {
      const key = fn();
      if (key) {
        const subKey = key + keySuffix;
        if ((item + "").includes("Map")) {
          const obj = this.autoConvertMapToObject(item);
          this.persistItem(subKey, obj);
        } else {
          this.persistItem(subKey, item);
        }

      }
    }
  }

  protected persistItem(subKey: string, item: string | object) {
    if (item) {
      localStorage.setItem(subKey, JSON.stringify(item));
    } else {
      localStorage.removeItem(subKey);
    }
  }

  protected loadFromLocalStorage<U>(subKey: string): U | null {
    const item = localStorage.getItem(subKey);
    if (item) {
      return JSON.parse(item) as U;
    }
    return null;
  }

  // private loadItems() {
  //   const fn = this.getStorageKeyFn;
  //   if (fn) {
  //     const key = fn();
  //     if (key) {
  //       // A main key is given by function from options
  //       const subKey = key + this.CHECKED_STATE;
  //       const arr = this.loadFromLocalStorage<Array<string | number>>(subKey);
  //       if (arr) {
  //         this.checkedStateIds.length = 0;
  //         arr.forEach(a => this.checkedStateIds.push(a));
  //       }
  //
  //       const subKey2 = key + this.COLLAPSED_EXPANDED_STATE;
  //       const data = this.loadFromLocalStorage<CollapsedExpandedData>(subKey2);
  //       if (data) {
  //         this.collapsedExpandedState = data;
  //       }
  //
  //       const subKey3 = key + this.SELECTED_STATE;
  //       const arr3 = this.loadFromLocalStorage<object>(subKey3);
  //       if (arr3) {
  //         const map: Map<string | number, string[]> = new Map(Object.entries(arr3));
  //         if (map) {
  //           this.selectedStateIds.clear();
  //           map.forEach((col, k) => this.selectedStateIds.set(k, col));
  //         }
  //       }
  //
  //       const subKey4 = key + this.SCROLL_STATE;
  //       let scrollOffset = this.loadFromLocalStorage<[number, number]>(subKey4);
  //       this.scrollOffset = scrollOffset ? scrollOffset : [0, 0];
  //     }
  //   }
  // }


}
