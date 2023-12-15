import {CellRendererIf} from "./cell-render.if";
import {DomServiceIf} from "../service/dom-service.if";
import {AreaIdent} from "../data/tablemodel/area-ident.type";
import {RendererCleanupFnType} from "./renderer-cleanup-fn.type";
import {AreaModelObjectyArray} from "../data/tablemodel/areamodel/area-model-object-array";


export class NumberCellProgressBarCellRenderer<T> implements CellRendererIf {

  constructor(
    public maxValue: number=100,
    public labelVisible:boolean = false
  ) {
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    _areaModel: AreaModelObjectyArray<T>,
    cellValue: number,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    domService.addClass(cellDiv, "ge-progressbar-div");

    if (!isNaN(cellValue)) {
      const count: number = Number(cellValue);
      const per = count * 100 / this.maxValue;
      const label = this.labelVisible ? (Math.round(per) + '%'):'';

      cellDiv.innerHTML = `
        <div class="ge-table-label-div"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-area="${areaIdent}"
          title="${label}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${rowIndex}"
                  data-col-index="${columnIndex}"
                  data-area="${areaIdent}">
                  <div class="ge-table-progress-bar"
                      style="width:${per}%;height:100%;padding:0;margin:0;"
                      data-row-index="${rowIndex}"
                      data-col-index="${columnIndex}"
                      data-area="${areaIdent}">&nbsp;
                  </div>
              </div>
          </div>`;
    }

    return undefined;
  }

}
