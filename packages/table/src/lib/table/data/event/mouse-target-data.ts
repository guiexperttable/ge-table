import { AreaIdent, getAreaIdentByString } from "../tablemodel/area-ident.type";
import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { TableScope } from "../../table-scope";

/**
 * The MouseTargetData class is used to process and provide information about user interaction, especially mouse events, with specific areas and elements of a table built using HTML Div elements, Span elements, and Input elements.
 *
 * The class encapsulates different types of data related to the element on which an event was targeted.
 * Data such as the targeted row and column indices, the area on the table identified (header, body, or footer),
 * the model of the table area the user interacted with, attributes of the HTML Input Element
 * (value and type), associated action, content row, and CSS class applied to the element.
 *
 * The constructor expects an `EventTarget` and `TableScope` objects as parameters -
 * data encapsulated in the `EventTarget` object will be used to populate the properties of the `MouseTargetData` object.
 *
 * @property {number} rowIdx - The index of the targeted row on an interaction event. Default value is -1.
 * @property {number} colIdx - The index of the targeted column on an interaction event. Default value is -1.
 * @property {AreaIdent} [areaIdent] - The identification of the targeted area on an interaction event. Possible value can be 'header', 'body', 'footer'.
 * @property {AreaModelIf} [areaModel] - The model of the table area the user interacted with.
 * @property {any} [row] - The specific row the user interacted with.
 * @property {any} [value] - The value(s) associated with the HTML Input Element the user interacted with.
 * @property {string | null} action - The associated action with the HTML Element (retrieved through "data-ge-action" data attribute). Default is `null`.
 * @property {string | null} inputType - The type of the HTML Input Element (retrieved through "data-input-type" data attribute). Default is `null`.
 * @property {string} className - The CSS class name applied to the target element. Default is an empty string.
 *
 * @example
 * const mouseTarget = new MouseTargetData(eventTarget, tableScope);
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
