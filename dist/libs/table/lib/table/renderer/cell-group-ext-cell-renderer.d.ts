import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
import { CellGroupExt } from "../data/tablemodel/cellgroup/cell-group-ext";
export declare class CellGroupExtCellRenderer implements CellRendererIf {
    render(cellDiv: HTMLDivElement, _rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: CellGroupExt | undefined | null, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}
