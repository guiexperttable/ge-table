import { CellRendererIf } from "./cell-render.if";
import { DomServiceIf } from "../service/dom-service.if";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { RendererCleanupFnType } from "./renderer-cleanup-fn.type";
import { AreaModelObjectArray } from "../data/tablemodel/areamodel/area-model-object-array";

/**
 * Works with AreaModelObjectArray only
 */
export class CheckboxBooleanPropertyCellRenderer<T> implements CellRendererIf {

  constructor(
    public property: string,
    public skipCheckableCheck: boolean = true,
    public readonly: boolean = false
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

    if (this.readonly || this.skipCheckableCheck || areaModel.isRowCheckable(rowIndex)) {
      domService.addClass(cellDiv, "ge-table-row-checkbox-div");
      const row = areaModel.getRowByIndex(rowIndex);
      const boxChecked = areaModel.getValueByT(row, this.property) === true;
      const checked = boxChecked ? "checked" : "";
      const readonly = this.readonly ? " readonly " : "";

      domService.addClass(cellDiv, "ge-padding-property-checkbox");
      cellDiv.innerHTML = `
        <input
          type="checkbox"
          data-area="${areaIdent}"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${checked}
          ${readonly}
          class="ge-input-checkbox">`;

      if (!this.readonly) {
        const inputEle = cellDiv.querySelector<HTMLInputElement>(".ge-input-checkbox");
        if (inputEle) {
          // @ts-ignore
          inputEle.addEventListener("click", (_ele: HTMLInputElement, _evt: MouseEvent) => {
            // @ts-ignore
            row[this.property] = !row[this.property];
            return true;
          });
        }
      }
    }
    return undefined;
  }

}
