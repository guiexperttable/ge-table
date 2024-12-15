---
layout: ../../../layouts/DemoCodeLayout.astro
---


Source of demo: [idfilter/run.astr](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/downloadexcel/run.astro).

In this example we demonstrate the excel export:


```ts
const tableModel = TableFactory.createTableModel({
  rows,
  columnDefs,
  tableOptions
});

const tableScope = new TableScope(
  divEle,
  tableModel,
  new SimpleDomService(),
  tableOptions,
  new EventAdapter()
);

tableScope.firstInit();
const tableApi = tableScope.getApi();

downloadExcelBtn.addEventListener("click", (event) => {
  tableApi.downloadExcel();
});
```