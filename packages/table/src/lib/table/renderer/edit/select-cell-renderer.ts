import { CellRendererIf } from "../cell-render.if";
import { AreaIdent } from "../../data/tablemodel/area-ident.type";
import { AreaModelIf } from "../../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../../service/dom-service.if";
import { RendererCleanupFnType } from "../renderer-cleanup-fn.type";
import { ValueLabelIf } from "../../data/common/value-label.if";
import { ValueLabel } from "../../data/common/value-label";


export class SelectCellRenderer implements CellRendererIf {

  constructor(
    protected options: ValueLabelIf[]
  ) {}

  static create(values: string[]) {
    return new SelectCellRenderer(
      values.map(v => new ValueLabel(v, v))
    );
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (areaModel.isEditable(rowIndex, columnIndex)) {
      domService.addClass(cellDiv, "ge-table-row-select-div");

      const val = areaModel.getValueAt(rowIndex, columnIndex);

      let opts = [];
      for (let option of this.options) {
        const selected = (option.value === val) ? " selected " : "";
        opts.push(`<option value="${option.value}" ${selected}>${option.label}</option>`);
      }
      const o = opts.join("");

      cellDiv.innerHTML = `
            <select
                autofocus
                data-listen="change"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                data-input-type="text"
                style="width:100%;height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-select">${o}</select>`;
    }
    return undefined;
  }

}
