import { AreaObjectMap } from "./area-map";
import { CellRendererIf } from "../../renderer/cell-render.if";

export class AreaMapFactory {

  static body(bodyRenderer: CellRendererIf) {
    return new AreaObjectMap<CellRendererIf>(
      undefined,
      bodyRenderer,
      undefined
    );
  }

}
