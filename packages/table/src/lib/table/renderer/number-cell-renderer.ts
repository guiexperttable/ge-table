import { CellRendererIf } from "./cell-render.if";
import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";


export class NumberCellRenderer implements CellRendererIf {

  constructor(
    protected min: number = Number.MIN_SAFE_INTEGER,
    protected max: number = Number.MAX_SAFE_INTEGER) {
  }

  render(
    cellDiv: HTMLDivElement,
    _rowIndex: number,
    _columnIndex: number,
    _areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    if (cellValue) {
      cellDiv.innerHTML = `
<div class="ge-table-label-div">
  <div class="ge-table-label">${cellValue}</div>
</div>`;
      if (typeof cellValue === "string"
        || isNaN(cellValue)
        || cellValue < this.min
        || cellValue > this.max
      ) {
        domService.addClass(cellDiv, "ge-cell-error");
      }
    }
    return undefined;
  }

}

