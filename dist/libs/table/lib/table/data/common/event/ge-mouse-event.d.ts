import { AreaIdent } from "../../tablemodel/area-ident.type";
import { SideIdent } from "../../side-ident.type";
export declare class GeMouseEvent {
    rowIndex: number;
    rowTop: number;
    columnIndex: number;
    columnLeft: number;
    areaIdent?: AreaIdent | undefined;
    sideIdent?: SideIdent | undefined;
    originalEvent?: MouseEvent | undefined;
    clickCount: number;
    draggingX: number;
    draggingY: number;
    action: string | null;
    constructor(rowIndex?: number, rowTop?: number, columnIndex?: number, columnLeft?: number, areaIdent?: AreaIdent | undefined, sideIdent?: SideIdent | undefined, originalEvent?: MouseEvent | undefined, clickCount?: number, draggingX?: number, draggingY?: number, action?: string | null);
    clone(): GeMouseEvent;
}
