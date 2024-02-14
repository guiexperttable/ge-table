import {CellRendererIf} from "./cell-render.if";
import {DomServiceIf} from "../service/dom-service.if";
import {AreaIdent} from "../data/tablemodel/area-ident.type";
import {RendererCleanupFnType} from "./renderer-cleanup-fn.type";
import {AreaModelObjectArray} from "../data/tablemodel/areamodel/area-model-object-array";

/**
 * Works with AreaModelObjectArray only
 */
export class ProgressBarCellRenderer<T> implements CellRendererIf {

  constructor(
    public property: string,
    public maxValue: number=100,
    public labelVisible = false
  ) {
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelObjectArray<T>,
    _cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    domService.addClass(cellDiv, "ge-star-rating-div");
    const row = areaModel.getRowByIndex(rowIndex);
    const count: number = Number('' + areaModel.getValueByT(row, this.property));

    if (!isNaN(count)) {
      const per = count * 100 / this.maxValue;
      const label = this.labelVisible? (Math.round(per) + '%'):'';
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
