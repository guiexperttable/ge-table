import { AreaIdent, getAreaIdentByString } from "../tablemodel/area-ident.type";
import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { TableScope } from "../../table-scope";

/**
 * Represents data about a mouse target. It's a helper class to extract all information from the target HTMLElement.
 */
export class MouseTargetData {

  rowIdx: number = -1;
  colIdx: number = -1;
  areaIdent?: AreaIdent;
  areaModel?: AreaModelIf;
  row?: any;
  value?: any;
  action: string | null = null;
  inputType: string | null = null;
  className: string = "";


  constructor(
    eventTarget: EventTarget | null,
    tableScope: TableScope) {

    if (eventTarget === null) return; // skip

    if (eventTarget instanceof HTMLDivElement
      || eventTarget instanceof HTMLSpanElement
      || eventTarget instanceof HTMLInputElement) {

      this.className = eventTarget.className;
      this.action = eventTarget.getAttribute("data-ge-action");
      this.inputType = eventTarget.getAttribute("data-input-type");
      this.rowIdx = Number(eventTarget.getAttribute("data-row-index"));
      this.colIdx = Number(eventTarget.getAttribute("data-col-index"));
      const area = eventTarget.getAttribute("data-area");
      if (area) {
        this.areaIdent = getAreaIdentByString(area);
        this.areaModel = tableScope.tableModel.getAreaModel(this.areaIdent);
        this.row = this.areaModel.getRowByIndex(this.rowIdx);
      }
      if (eventTarget instanceof HTMLInputElement) {
        const target = eventTarget as HTMLInputElement;
        this.value = target.value;
      }
    }
  }
}
