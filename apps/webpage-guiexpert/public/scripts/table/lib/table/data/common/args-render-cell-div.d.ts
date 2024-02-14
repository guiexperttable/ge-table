import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { AreaIdent } from "../tablemodel/area-ident.type";
import { SideIdent } from "../side-ident.type";
/**
 * Represents the arguments required to render a cell div.
 *
 * @interface ArgsRenderCellDiv
 * @property {AreaModelIf} areaModel - The area model for the cell.
 * @property {AreaIdent} areaIdent - The identifier of the area.
 * @property {SideIdent} sideIdent - The identifier of the side.
 * @property {number} rowIndex - The index of the row.
 * @property {number} index - The index of the cell.
 * @property {number} left - The left position of the cell.
 * @property {number} width - The width of the cell.
 * @property {number} height - The height of the cell.
 * @property {number} top - The top position of the cell.
 * @property {HTMLDivElement} parent - The parent element of the cell.
 * @property {boolean} lastRowOfModel - Indicates if the cell is in the last row of the model.
 */
export interface ArgsRenderCellDiv {
    areaModel: AreaModelIf;
    areaIdent: AreaIdent;
    sideIdent: SideIdent;
    rowIndex: number;
    index: number;
    left: number;
    width: number;
    height: number;
    top: number;
    parent: HTMLDivElement;
    lastRowOfModel: boolean;
}
