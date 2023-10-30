import "./app.element.css";
import { TableModelAndOptions, TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { GuiexpertTable } from "@guiexpert/webcomponent-table"; // <-- our library


export class AppElement extends HTMLElement {

  public static observedAttributes = ["data"];


  constructor() {
    super();
    customElements.whenDefined('webcomponent-table-demo-root').then(() => {
      console.info('webcomponent-table-demo-root defined');
    });
    customElements.whenDefined('guiexpert-table').then(() => {
      console.info('guiexpert-table definded');
    });
  }

  connectedCallback() {
    this.innerHTML = `
      <guiexpert-table
        style="width:100%;height:100%;display:block;background:yellow;margin:0;padding:0;"
        ></guiexpert-table>`;

    customElements.define("guiexpert-table", GuiexpertTable);
    const table = this.querySelector("guiexpert-table") as GuiexpertTable;
    table.addEventListener("tableReady", (e) => console.info("table api:", (e as CustomEvent).detail));

    console.info('table', table);
    const tableModel: TableModelIf = generateSimpleModel(1000, 100);
    const tableOptions = new TableOptions();
    table.data = (new TableModelAndOptions(tableModel, tableOptions));
  }

}

customElements.define("webcomponent-table-demo-root", AppElement);


