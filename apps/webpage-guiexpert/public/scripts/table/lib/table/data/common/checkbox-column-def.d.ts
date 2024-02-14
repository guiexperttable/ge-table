import { SizeIf } from "./size.if";
import { ColumnDefIf } from "../tablemodel/column/column-def.if";
import { CellRendererIf } from "../../renderer/cell-render.if";
import { AreaObjectMapType } from "./area-map.type";
/**
 * A pre-defined column definition for a checkbox representation.
 *
 * @implements {ColumnDefIf}
 */
export declare class CheckboxColumnDef implements ColumnDefIf {
    type: string;
    property: string;
    headerLabel: string;
    width: SizeIf;
    minWidth: SizeIf;
    maxWidth: SizeIf;
    rendererMap: AreaObjectMapType<CellRendererIf>;
    classes: AreaObjectMapType<string[]>;
}
