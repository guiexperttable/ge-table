import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
import { AreaModelObjectArray } from "../data/tablemodel/areamodel/area-model-object-array";
export declare class NumberCellProgressBarCellRenderer<T> implements CellRendererIf {
    maxValue: number;
    labelVisible: boolean;
    constructor(maxValue?: number, labelVisible?: boolean);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, _areaModel: AreaModelObjectArray<T>, cellValue: number, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
