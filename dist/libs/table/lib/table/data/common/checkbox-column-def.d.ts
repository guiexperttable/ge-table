import { SizeIf } from "./size.if";
import { ColumnDefIf } from "../tablemodel/column/column-def.if";
import { CellRendererIf } from "../../renderer/cell-render.if";
import { AreaObjectMapType } from "./area-map.type";
export declare class CheckboxColumnDef implements ColumnDefIf {
    property: string;
    headerLabel: string;
    width: SizeIf;
    minWidth: SizeIf;
    maxWidth: SizeIf;
    rendererMap: AreaObjectMapType<CellRendererIf>;
    classes: AreaObjectMapType<string[]>;
}
