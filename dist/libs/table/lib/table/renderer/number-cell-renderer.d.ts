import { CellRendererIf } from "./cell-render.if";
import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
export declare class NumberCellRenderer implements CellRendererIf {
    protected min: number;
    protected max: number;
    constructor(min?: number, max?: number);
    render(cellDiv: HTMLDivElement, _rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
