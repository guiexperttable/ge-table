import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
export declare class TrueFalseCellRenderer implements CellRendererIf {
    render(cellDiv: HTMLDivElement, _rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: any, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}
