import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";


export class TrueFalseCellRenderer implements CellRendererIf {

  render(
    cellDiv: HTMLDivElement,
    _rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {
    if (cellValue === "true" || cellValue === true) {
      cellDiv.innerHTML = "<span class=\"ge-true-text-color\">✅</span>";
    } else if (cellValue === "false" || cellValue === false) {
      cellDiv.innerHTML = "<span class=\"ge-false-text-color\">❌</span>";
    } else {
      cellDiv.innerText = "";
    }
    return undefined;
  }

}
