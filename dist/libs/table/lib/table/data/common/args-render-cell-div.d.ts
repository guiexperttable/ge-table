import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { AreaIdent } from "../tablemodel/area-ident.type";
import { SideIdent } from "../side-ident.type";
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
    gammaRange: boolean;
}
