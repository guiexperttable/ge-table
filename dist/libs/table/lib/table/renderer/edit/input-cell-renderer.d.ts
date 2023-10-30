import { CellRendererIf } from "../cell-render.if";
import { AreaIdent } from "../../data/tablemodel/area-ident.type";
import { AreaModelIf } from "../../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../../service/dom-service.if";
import { RendererCleanupFnType } from "../renderer-cleanup-fn.type";
export declare class InputCellRenderer implements CellRendererIf {
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
