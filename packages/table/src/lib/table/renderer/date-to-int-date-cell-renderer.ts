import { CellRendererIf } from "./cell-render.if";
import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";


export class DateToIntlDDMMYYYYCellRenderer implements CellRendererIf {

  readonly formatter = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    _areaModel: AreaModelIf,
    cellValue: any,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {
    if (cellValue) {
      let dateStr = '';
      try {
        dateStr = this.formatter.format(new Date(cellValue));
      } catch (e) {
        dateStr = cellValue;
      }
      cellDiv.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}">${dateStr}</div>
          </div>`;
    }
    return undefined;
  }

}
