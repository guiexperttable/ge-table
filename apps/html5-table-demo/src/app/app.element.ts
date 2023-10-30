import "./app.element.css";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { EventAdapter, SimpleDomService, TableModelIf, TableOptions, TableScope } from "@guiexpert/table";

export class AppElement extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    this.innerHTML = `<div
        class="container-div"
        style="width:100%;height:100%;background:transparent;margin:0;padding:0;"
        ></div>`;

    const ele = document.querySelector(".container-div") as HTMLDivElement;
    const tableModel: TableModelIf = generateSimpleModel(1000, 100);

    const tableScope = new TableScope(
      ele, tableModel, new SimpleDomService(), new TableOptions(), new EventAdapter()
    );
    tableScope.firstInit();
  }
}

customElements.define("html5-demo-root", AppElement);
