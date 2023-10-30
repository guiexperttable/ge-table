import { AreaObjectMap } from "./area-map";
import { CellRendererIf } from "../../renderer/cell-render.if";
export declare class AreaMapFactory {
    static body(bodyRenderer: CellRendererIf): AreaObjectMap<CellRendererIf>;
}
