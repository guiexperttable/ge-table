import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
import { AreaModelObjectArray } from "../data/tablemodel/areamodel/area-model-object-array";
/**
 * Works with AreaModelObjectArray only
 */
export declare class CheckboxBooleanPropertyCellRenderer<T> implements CellRendererIf {
    property: string;
    skipCheckableCheck: boolean;
    readonly: boolean;
    constructor(property: string, skipCheckableCheck?: boolean, readonly?: boolean);
    render(cellDiv: HTMLDivElement, rowIndex: number, columnIndex: number, areaIdent: AreaIdent, areaModel: AreaModelObjectArray<T>, _cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}
