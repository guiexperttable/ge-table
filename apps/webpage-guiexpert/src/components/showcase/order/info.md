---
layout: ../../../layouts/DemoCodeLayout.astro
---

In this example, we demonstrate how to assemble a table from a list of business objects (T[]) and a few column definitions (ColumnDefIf[]).

The row height of header and body is set to 24px. 
The table can be filtered in realtime by an input field.
The user can change the column widths by dragging a column separator, which will be visible by a mouse over (in the table header).
A double click on a header will trigger a quick table sort.
In this demo we also configured a multi table row selection. 

The creation of the demo TableModel code can be found at [createOrderModelAndOptions()](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/createOrderModel.ts).

The TableModel is created by an array of objects
(see [orders.ts](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/demodata/orders.ts)),
and an array of ColumnDefs and the helper function `TableFactory.createTableModel()`:

```ts
function createOrderTableOptions(): TableOptions {
  const selectionModel = new SelectionModel("row", "multi");
  return {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 24,
      body: 24,
      footer: 0
    },
    getSelectionModel: () => selectionModel
  };
}

export function createOrderModelAndOptions(): TableModelAndOptionsIf {
  const tableOptions = createOrderTableOptions();
  const rows: OrderIf[] = createTableRows();
  const columnDefs: ColumnDefIf[] = createColumnDefs();
  return new TableModelAndOptions(TableFactory.createTableModel({
      rows,
      columnDefs,
      tableOptions,
      fixedLeftColumnCount: 0
    }),
    tableOptions);
}
```

Each column is defined by this array:

```ts
[
  ColumnDef.create({
    property: "company",
    headerLabel: "Company",
    width: px120,
    bodyClasses: ["ge-table-text-align-left"],
    headerClasses: ["ge-table-text-align-left"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "country",
    headerLabel: "Country",
    width: px140,
    bodyClasses: ["ge-table-text-align-left"],
    headerClasses: ["ge-table-text-align-left"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "product",
    headerLabel: "Name",
    width: px120,
    bodyClasses: ["ge-table-text-align-left"],
    headerClasses: ["ge-table-text-align-left"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "sellDate",
    headerLabel: "Sell date",
    width: px100,
    bodyRenderer: new DateToIntlDDMMYYYYCellRenderer(),
    bodyClasses: ["ge-table-text-align-center"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "id",
    headerLabel: "Order ID",
    width: px120,
    bodyClasses: ["ge-table-text-align-center"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "inStock",
    headerLabel: "In stock",
    width: px90,
    bodyRenderer: new CheckboxBooleanPropertyCellRenderer('inStock', true, true),
    bodyClasses: ["ge-table-text-align-center"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "quantity",
    headerLabel: "Qty",
    width: px60,
    bodyClasses: ["ge-table-text-align-right"],
    headerClasses: ["ge-table-text-align-right"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "progress",
    headerLabel: "Progress",
    width: px100,
    bodyRenderer: new ProgressBarCellRenderer('progress', 5, true),
    bodyClasses: ["ge-table-text-align-left"],
    sortable: TrueFn
  }),
  ColumnDef.create({
    property: "rating",
    headerLabel: "Rating",
    width: px100,
    bodyRenderer: new StarRatingCellRenderer('rating'),
    bodyClasses: ["ge-table-text-align-left"],
    sortable: TrueFn
  })
];
```

Some of the pre-defined renderers can be found in the core table library in this package: [renderer](https://github.com/guiexperttable/ge-table/tree/main/libs/table/src/lib/table/renderer).

The used css classes (starting with 'ge-table-') are available at [main.css](https://github.com/guiexperttable/ge-table/blob/main/packages/table/css/main.css).