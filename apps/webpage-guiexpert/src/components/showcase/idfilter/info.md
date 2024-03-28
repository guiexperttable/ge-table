---
layout: ../../../layouts/DemoCodeLayout.astro
---


Source of demo: [idfilter/run.astr](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/idfilter/run.astro).

In this example we create the TableModel by an array of `ColumnDefs` and an array of business objects (`rows`):

```ts
  const columnDefs = [
    new ColumnDef("firstName", "First Name", px120),
    new ColumnDef("lastName", "Last Name"),
    ColumnDef.create({
      property: "email",
      headerLabel: "Email",
      width: px250,
      bodyClasses: ["ge-table-text-align-left"]
    }),
    new ColumnDef("ipAddress", "IP", px150),
    new ColumnDef("id", "ID", px50)
  ];

  const tableModel = TableFactory.createTableModel({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 2
  });
```

# Filtering

We set the `externalFilterFunction` in the table options:

```ts
const tableOptions = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 34,
      footer: 0
    },
    externalFilterFunction: filterFn
};

function filterFn(row, _index, _array) {
  return row.id > filterMinimalId;
}
```

After a range selector change event, we trigger `tableApi.externalFilterChanged()`.
```ts
inputEle.addEventListener("change", (event) => {
    filterMinimalId = Number(inputEle.value);
    outEle.innerText = ''+filterMinimalId;
    tableApi.externalFilterChanged();
});
```