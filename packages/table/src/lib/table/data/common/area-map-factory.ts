import { AreaObjectMap } from "./area-map";
import { CellRendererIf } from "../../renderer/cell-render.if";

export class AreaMapFactory {

  /**
   * A factory that creates a new AreaObjectMap with the given body renderer.
   *
   * @param {CellRendererIf} bodyRenderer - The renderer for the body of the map.
   * @returns {AreaObjectMap<CellRendererIf>} The newly created AreaObjectMap.
   */
  static body(bodyRenderer: CellRendererIf) {
    return new AreaObjectMap<CellRendererIf>(
      undefined,
      bodyRenderer,
      undefined
    );
  }

}
