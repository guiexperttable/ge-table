import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
import { AreaModelObjectyArray } from "../data/tablemodel/areamodel/area-model-object-array";
/**
 * Works with AreaModelObjectArray only
 */
export declare class ProgressBarCellRenderer<T> implements CellRendererIf {
    property: string;
    maxValue: number;
    labelVisible: boolean;
    constructor(property: string, maxValue?: number, labelVisible?: boolean);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelObjectyArray<T>, _cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
