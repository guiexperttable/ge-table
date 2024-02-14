import { CellRendererIf } from "../cell-render.if";
import { AreaIdent } from "../../data/tablemodel/area-ident.type";
import { AreaModelIf } from "../../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../../service/dom-service.if";
import { RendererCleanupFnType } from "../renderer-cleanup-fn.type";
import { ValueLabelIf } from "../../data/common/value-label.if";
export declare class SelectCellRenderer implements CellRendererIf {
    protected options: ValueLabelIf[];
    constructor(options: ValueLabelIf[]);
    static create(values: string[]): SelectCellRenderer;
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
