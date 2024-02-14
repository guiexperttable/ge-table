import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";


export class CheckboxCellRenderer implements CellRendererIf {

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (areaModel.isRowCheckable(rowIndex)) {
      domService.addClass(cellDiv, "ge-table-row-checkbox-div");
      const rowChecked = areaModel.isRowChecked(rowIndex);
      const checked = (rowChecked === "full") ? "checked" : "";
      const semi = (rowChecked === "semi") ? "<span style=\"opacity: 0.4;\">✓<span>" : "";
      cellDiv.innerHTML = `
        <input
            type="checkbox"
            data-area="${areaIdent}"
            data-row-index="${rowIndex}"
            data-col-index="${columnIndex}"
            data-input-type="checkbox"
            ${checked}
            class="ge-table-row-checkbox">
        ${semi}  `;
    }
    return undefined;
  }


}
