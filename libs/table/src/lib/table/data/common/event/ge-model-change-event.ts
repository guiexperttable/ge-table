import { GeCellIndices } from "./ge-cell-indices";

/**
 * Indicates that changes have occurred in the given cells.
 */
export class GeModelChangeEvent {

  constructor(
    public cells: GeCellIndices[]
  ) {
  }

  static createSingle(rowIndex: number, columnIndex: number) {
    return new GeModelChangeEvent([new GeCellIndices(rowIndex, columnIndex)]);
  }
}
