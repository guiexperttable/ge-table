import { SizeIf } from "../../common/size.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { AreaObjectMapType } from "../../common/area-map.type";
import { BooleanFunction } from "../../common/boolean-function";
import { SortState } from "../../common/sort-state.type";
import { GetEditRenderer } from "../../../renderer/edit/edit-cell-renderer.type";
import { editInputPipe } from "../../../renderer/edit/edit-input-pipe.if";
export interface ColumnDefIf {
    property: string;
    headerLabel: string;
    width: SizeIf;
    minWidth: SizeIf;
    maxWidth: SizeIf;
    rendererMap: AreaObjectMapType<CellRendererIf>;
    classes: AreaObjectMapType<string[]>;
    sortable?: BooleanFunction;
    sortIconVisible?: BooleanFunction;
    sortComparator?: <T>(a: T, b: T) => number;
    sortState?: SortState;
    sortStatesOrder?: SortState[];
    editable?: BooleanFunction;
    isVisible?: BooleanFunction;
    getEditRenderer?: GetEditRenderer;
    editInputPipe?: editInputPipe;
}
