import "./app.element.css";
import {generateSimpleModel} from "@guiexpert/demo-table-models";
import {TableModelAndOptions, TableOptions} from "@guiexpert/table";
import {GuiexpertTable} from "@guiexpert/webcomponent-table";

export class AppElement extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    customElements.define('ge-table', GuiexpertTable);
    this.innerHTML = `<ge-table class="container-div" ></ge-table>`;

    const ele = document.querySelector(".container-div") as GuiexpertTable;
    ele.data = new TableModelAndOptions(
      generateSimpleModel(1000, 100), new TableOptions()
    );
  }
}

customElements.define("demo-root", AppElement);
