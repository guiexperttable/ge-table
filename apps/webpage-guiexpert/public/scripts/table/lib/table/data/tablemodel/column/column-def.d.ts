import { SizeIf } from "../../common/size.if";
import { ColumnDefIf } from "./column-def.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { AreaObjectMapType } from "../../common/area-map.type";
import { AreaObjectMap } from "../../common/area-map";
import { BooleanFunction } from "../../common/boolean-function";
import { SortState } from "../../common/sort-state.type";
import { GetEditRenderer } from "../../../renderer/edit/edit-cell-renderer.type";
import { editInputPipe } from "../../../renderer/edit/edit-input-pipe.if";
/**
 * Represents a column definition for one column of the table.
 */
export declare class ColumnDef implements ColumnDefIf {
    property: string;
    headerLabel: string;
    width: SizeIf;
    classes: AreaObjectMapType<string[]>;
    rendererMap: AreaObjectMapType<CellRendererIf>;
    minWidth: SizeIf;
    maxWidth: SizeIf;
    sortable?: BooleanFunction | undefined;
    sortComparator?: (<T>(a: T, b: T) => number) | undefined;
    sortState?: SortState | undefined;
    sortStatesOrder?: SortState[] | undefined;
    sortIconVisible?: BooleanFunction | undefined;
    editable?: BooleanFunction | undefined;
    getEditRenderer?: GetEditRenderer | undefined;
    editInputPipe?: editInputPipe | undefined;
    isVisible: BooleanFunction;
    visible: boolean;
    constructor(property: string, headerLabel: string, width?: SizeIf, classes?: AreaObjectMapType<string[]>, rendererMap?: AreaObjectMapType<CellRendererIf>, minWidth?: SizeIf, maxWidth?: SizeIf, sortable?: BooleanFunction | undefined, sortComparator?: (<T>(a: T, b: T) => number) | undefined, sortState?: SortState | undefined, sortStatesOrder?: SortState[] | undefined, sortIconVisible?: BooleanFunction | undefined, editable?: BooleanFunction | undefined, getEditRenderer?: GetEditRenderer | undefined, editInputPipe?: editInputPipe | undefined, isVisible?: BooleanFunction);
    static bodyRenderer(bodyRenderer: CellRendererIf): AreaObjectMap<CellRendererIf>;
    static create(param: {
        property?: string;
        headerLabel?: string;
        width?: SizeIf;
        minWidth?: SizeIf;
        maxWidth?: SizeIf;
        headerRenderer?: CellRendererIf;
        bodyRenderer?: CellRendererIf;
        footerRenderer?: CellRendererIf;
        headerClasses?: string[];
        bodyClasses?: string[];
        footerClasses?: string[];
        sortable?: BooleanFunction;
        sortIconVisible?: BooleanFunction;
        sortComparator?: <T>(a: T, b: T) => number;
        sortState?: SortState;
        sortStatesOrder?: SortState[];
        editable?: BooleanFunction;
        isVisible?: BooleanFunction;
        getEditRenderer?: GetEditRenderer;
        editInputPipe?: editInputPipe;
    }): ColumnDefIf;
}
