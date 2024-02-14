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
export declare class TableCellUpdateEvent implements TableCellUpdateEventIf {
    area: AreaIdent;
    rowIndex: number;
    columnIndex: number;
    value: any;
    cssClasses: {
        [key: string]: boolean;
    };
    constructor(area: AreaIdent, rowIndex: number, columnIndex: number, value: any, cssClasses?: {
        [key: string]: boolean;
    });
}
