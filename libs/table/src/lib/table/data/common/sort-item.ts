import { SortState } from "./sort-state.type";

/**
 * Represents a sortable column with its sort order..
 */
export class SortItem {

  constructor(
    public columnIndex: number,
    public sortState: SortState
  ) {
  }

}
