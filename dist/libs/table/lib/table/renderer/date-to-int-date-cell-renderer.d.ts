import { CellRendererIf } from "./cell-render.if";
import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
export declare class DateToIntlDDMMYYYYCellRenderer implements CellRendererIf {
    readonly formatter: Intl.DateTimeFormat;
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: any, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}
