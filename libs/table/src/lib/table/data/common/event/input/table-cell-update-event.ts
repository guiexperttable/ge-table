import { TableCellUpdateEventIf } from "./table-cell-update-event.if";
import { AreaIdent } from "../../../tablemodel/area-ident.type";

/**
 * Represents an event that occurs when a table cell is updated.
 *
 * @class
 * @implements TableCellUpdateEventIf
 *
 * @param {AreaIdent} area - The identification of the area where the cell belongs.
 * @param {number} rowIndex - The index of the row where the cell is located.
 * @param {number} columnIndex - The index of the column where the cell is located.
 * @param {any} value - The new value for the cell.
 * @param {Object.<string, boolean>} cssClasses - An object containing CSS classes to be applied to the cell.
 */
export class TableCellUpdateEvent implements TableCellUpdateEventIf {

  constructor(
    public area: AreaIdent,
    public rowIndex: number,
    public columnIndex: number,
    public value: any,
    public cssClasses: {[key:string]: boolean} = {},
  ) {
  }

}
