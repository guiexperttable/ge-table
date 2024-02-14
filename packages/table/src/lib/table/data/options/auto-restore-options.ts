import { AutoRestoreOptionsIf } from "./auto-restore-options.if";


export class AutoRestoreOptions<T> implements AutoRestoreOptionsIf<T> {

  public autoRestoreSortingState = false;
  public autoRestoreCollapsedExpandedState = false;
  public autoRestoreScrollPosition = false;

  public autoRestoreCheckedState = false;
  public autoRestoreSelectedState = false;


  public getStorageKeyFn = undefined;


  public isSame = (r1: T, r2: T, options: AutoRestoreOptionsIf<T>) => {
    if (r1 && r2) {
      if (options.getRowId) {
        const id1 = options.getRowId(r1);
        const id2 = options.getRowId(r2);
        return id1 === id2;
      }
    }
    return false;
  };

  public getRowId = (row: T): string | number => {
    if (row) {
      // First try:
      for (const key of ["id", "uuid"]) {
        // @ts-ignore
        const id = row[key];
        if (id !== undefined && id !== null) {
          return id;
        }
      }

      // Second try:
      try {
        return JSON.stringify(row);
      } catch (e) {
        console.error(e);
      }
    }
    console.warn("One of following options set to true without a valid \"getRowId()\": autoRestoreExpandedState, autoRestoreCheckedState.");
    return -1;
  };

}
