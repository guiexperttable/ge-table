---
layout: ../../../layouts/DemoCodeLayout.astro
---

A similar demo is here: Stackblitz: [stackblitz-guiexpert-angular-simple](https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple)

This page can be found at [arrayofarrays/run.astro](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/arrayofarrays/run.astro).

In this example, we demonstrate how to assemble a table from a given array of array.

We are using one array for the header labels and the array of arrays for the table body.
In reality, the header array is also an array of arrays since it can accommodate multi-line headers!

```ts
const headerData = [ ["Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7"] ];
const bodyData = [];
for (let i=0; i<100; i++) {
  bodyData.push(["This is a very", "A", "very,", "very", "simple", "easy", "demo."]);
}
const tableModel = TableFactory.createTableModel({
  headerData,
  bodyData,
  overridingColumnWidth: 110
});
```


