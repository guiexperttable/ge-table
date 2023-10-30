import { CellRendererIf } from "./cell-render.if";
import { AreaObjectMap } from "../data/common/area-map";
export declare class Renderer {
    static bodyRenderer(bodyCellRenderer: CellRendererIf): AreaObjectMap<CellRendererIf>;
}
