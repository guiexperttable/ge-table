import { TableScope } from "./table-scope";
import { AreaIdent, getAreaIdentByString } from "./data/tablemodel/area-ident.type";

/**
 * Class representing an input handler for table input fields (HTMLSelectElement, HTMLTextAreaElement, HTMLInputElement).
 *
 * @class
 * @memberOf module:input
 */
export class InputHandler {


  constructor(
    protected tableScope: TableScope
  ) {
    this.tableScope.hostElement.addEventListener("change", this.onHostElementChanged.bind(this));
  }


  /**
   * Handles the onHostElementChanged event.
   * In case that the element is an input field, the tableScope.updateModelValueAfterEdit() method is triggered.
   *
   * @param {Event} event - The event object.
   *
   * @return {void}
   */
  private onHostElementChanged(event: Event) {
    if (event.target instanceof HTMLInputElement
      || event.target instanceof HTMLSelectElement
      || event.target instanceof HTMLTextAreaElement
    ) {
      const htmpInputEle = event.target;
      const areaIdentStr = htmpInputEle.getAttribute("data-area");
      const rowIndexStr = htmpInputEle.getAttribute("data-row-index");
      const columnIndexStr = htmpInputEle.getAttribute("data-col-index");

      if (areaIdentStr && rowIndexStr && columnIndexStr) {
        const area: AreaIdent = getAreaIdentByString(areaIdentStr);
        const rowIndex = Number(rowIndexStr);
        const columnIndex = Number(columnIndexStr);
        this.tableScope.updateModelValueAfterEdit(area, rowIndex, columnIndex, htmpInputEle.value);
      }
    }
  }


}
