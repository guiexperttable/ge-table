---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz

You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-table-webcomponents-simple?file=README.md" target="_blank">stackblitz-guiexpert-table-webcomponents-simple</a>.


# Installation

Add the following NPM package to your existing project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table @guiexpert/webcomponent-table @guiexpert/demo-table-models
```

The third package `@guiexpert/demo-table-models` contains some predefined table models. 
It is not necessary in a real life project.

## Add global table CSS

To add the global guiexpert CSS file in your project, 
you can include the file in the header of the `index.html` file:

```html
<link href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" rel="stylesheet" />
```

You will also find the `main.css` in the downloaded node module: `node_modules/@guiexpert/table/css/main.css`.


# Create an example component

Create a component and include the guiexpert tag in the template of your component

```ts
import "./app.element.css";
import { TableModelAndOptions, TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { GuiexpertTable } from "@guiexpert/webcomponent-table"; // <-- our library


export class AppComponent extends HTMLElement {

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

customElements.define("app-root", AppComponent);
```

Be sure, that your div containers expands. Add this CSS rule to your component's style.

```css
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```

