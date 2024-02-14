---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz

You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple" target="_blank">stackblitz-guiexpert-angular-simple</a>.


# Installation

Add the following NPM package to your existing angular project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table @guiexpert/angular-table
```

## Import standalone component

Import the (standalone) table component in your angular module (or in your angular standalone component, if you don't work with modules):

```ts
@NgModule({
    imports: [
      CommonModule,
      TableComponent, ... 

```

## Add global table CSS

To add the global guiexpert CSS file in your Angular project, 
you can include the file in the styles array within the angular.json file.

- Open the `angular.json` file of your project.

- Look for the styles section within the configuration object for your project. It typically looks like this:

```json
"styles": [
  "src/styles.css",
  "node_modules/@guiexpert/table/css/main.css"
  ...
],
```


# Create an example component

Create a component and include the guiexpert tag in the template of your component

```html
  <div class="content">
    <guiexpert-table
      [tableModel]="tableModel"
      [tableOptions]="tableOptions"
      class="ge-table"
    ></guiexpert-table>
  </div>

```

Be sure, that your div container expands. Add this CSS rule to your component's style.

```css
.content {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
}
```

## Create a table model

Add two properties (`tableModel` and `tableOptions`) to the component. Generate a simple table model by the helper 
function `TableFactory.createTableModel`. The properties headerData, bodyData, and footerData are simple arrays of arrays.

```ts
tableModel: TableModelIf;

tableOptions = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 40,
    body: 34,
    footer: 0
  }
};

constructor() {
  this.tableModel = this.generateSimpleModel(100, 10);
}

generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {

  const bodyData: string[][] =
    Array.from(Array(rowCount).keys())
      .map((r) =>
        Array.from(Array(columnCount).keys())
          .map((c) => `Body ${r}/${c}`)
    );

  const headerData: string[][] =
    Array.from(Array(2).keys())
      .map((r) =>
        Array.from(Array(columnCount).keys())
          .map((c) => `Header ${r}/${c}`)
    );

  const footerData: string[][] =
    Array.from(Array(2).keys())
      .map((r) =>
        Array.from(Array(columnCount).keys())
          .map((c) => `Footer ${r}/${c}`)
    );

  return TableFactory.createTableModel({
    headerData,
    bodyData,
    footerData,
    overridingColumnWidth: 110,
    fixedLeftColumnCount: 1,
    fixedRightColumnCount: 1
  });
}

```



Here you can see an alternate simple table model creation:

```ts
TableFactory.createTableModel({
  headerData: [
    ["Column1", "Column2", "Column3"]
  ],
  bodyData: [
    ["This", "is", "a"],
    ["very", "simple", "demo"]
  ],
  overridingColumnWidth: 110
});
```