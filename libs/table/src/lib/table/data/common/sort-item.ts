import { SortState } from "./sort-state.type";

export class SortItem {

  constructor(
    public columnIndex: number,
    public sortState: SortState
  ) {
  }

}
