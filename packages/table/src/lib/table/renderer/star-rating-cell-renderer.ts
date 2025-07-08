import {CellRendererIf} from "./cell-render.if";
import {DomServiceIf} from "../service/dom-service.if";
import {AreaIdent} from "../data/tablemodel/area-ident.type";
import {RendererCleanupFnType} from "./renderer-cleanup-fn.type";
import {AreaModelObjectArray} from "../data/tablemodel/areamodel/area-model-object-array";

/**
 * Works with AreaModelObjectArray only
 */
export class StarRatingCellRenderer<T> implements CellRendererIf {

  constructor(
    public property: string
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
      const sb: string[] = [];
      for (let i = 0; i < count; i++) {
        sb.push('★');
      }
      const text = sb.join(' ');
      cellDiv.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}">${text}</div>
          </div>`;
    }

    return undefined;
  }

}
