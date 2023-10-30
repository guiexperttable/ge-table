import { CellRendererIf } from "../cell-render.if";
import { AreaIdent } from "../../data/tablemodel/area-ident.type";
import { AreaModelIf } from "../../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../../service/dom-service.if";
import { RendererCleanupFnType } from "../renderer-cleanup-fn.type";


export class InputCellRenderer implements CellRendererIf {


  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (areaModel.isEditable(rowIndex, columnIndex)) {
      domService.addClass(cellDiv, "ge-table-row-input-div");

      const val = areaModel.getValueAt(rowIndex, columnIndex);
      cellDiv.innerHTML = `
            <input
                type="text"
                value="${val}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
    }
    return undefined;
  }

}
