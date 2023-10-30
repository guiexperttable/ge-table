import { TableScope } from "./table-scope";
import { AreaIdent, getAreaIdentByString } from "./data/tablemodel/area-ident.type";

export class InputHandler {


  constructor(
    protected tableScope: TableScope
  ) {
    this.tableScope.hostElement.addEventListener("change", this.onHostElementChanged.bind(this));
  }


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
