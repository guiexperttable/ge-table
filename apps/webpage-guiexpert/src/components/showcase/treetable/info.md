---
layout: ../../../layouts/DemoCodeLayout.astro
---


Source of demo: [treetable/run.astro](https://github.com/guiexperttable/website-astro/blob/main/src/components/showcase/treetable/run.astro).

Model: [generateTreePeopleModel.ts](https://github.com/guiexperttable/ge-table/blob/main/libs/demo-table-models/src/lib/treepeople/generateTreePeopleModel.ts).

Data: [treePeopleData.ts](https://github.com/guiexperttable/ge-table/blob/main/libs/demo-table-models/src/lib/treepeople/treePeopleData.ts).

This example demonstrates a Tree-Table.
In a Tree-Table, objects are in a hierarchical relationship to each other and typically belong to the same type, 
making a tabulated representation alongside a tree structure in the first column meaningful.

Additionally, in this example, we showcase how to set up a multi-range selection using JavaScript.

```ts
const selectionModel = new SelectionModel("range", "multi");

selectionModel.addSelection(new CellRange(0, 0, 0, 2));
selectionModel.addSelection(new CellRange(2, 1, 2, 2));
selectionModel.addSelection(new CellRange(1, 5, 6, 7));
selectionModel.addSelection(new CellRange(0, 8, 0, 8));
selectionModel.addSelection(new CellRange(5, 6, 10, 10));

const tableOptions = {
  ...new TableOptions(),
  getSelectionModel: () => selectionModel
};
```


The data is in JSON format and represents an array of person objects. 
Some individuals are associated with friends through the '_friends_' property. 
It constitutes a hierarchical object structure.

```json title="Short JSON snippet"
[
  {
    "id": 0,
    "preName": "Prename0",
    "lastName": "Lastname0",
    "birth": "1995-01-19T20:04:30.982Z",
    "age": 8,
    "gender": "male",
    "address": {
      "street": "Street0",
      "number": "73a",
      "zip": "45169",
      "city": "City0",
      "country": "Germany"
    },
    "friends": [
      {
        "id": 205,
        "preName": "Prename205",
        "lastName": "Lastname205",
        "birth": "1998-06-18T01:49:11.679Z",
        "age": 24,
        "gender": "male",
        "address": {
          "street": "Street205",
          "number": "21a",
          "zip": "80116",
          "city": "City205",
          "country": "Germany"
        },
        "friends": [
          {
            "id": 685, ...
```

Firstly, this model is converted into an array of [TreeRowIf<T>](). 
Subsequently, a TableModel is created using `TableFactory.createTableModel()`. 
The `ColumnDefIf[]` defines the columns in this process.

```ts title="Creation of the table model"
const tree = TreeFactory.buildTreeRows<PersonIf>(TREE_PEOPLE_DATA, "friends");
const tableModel = TableFactory.createTableModel({
  rows: tree,
  columnDefs,
  tableOptions,
  fixedLeftColumnCount: 1,
  fixedRightColumnCount: 1
});

```

The column definition looks like this:

```ts title="Definition of the Column Definitions"
function createTreePeopleColumnDefs(): ColumnDefIf[] {
  return [
    new ColumnDef("lastName", "Last Name", px220),
    new ColumnDef("preName", "Pre Name", px120),
    ColumnDef.create({
      property: "age",
      headerLabel: "Age",
      width: px80,
      bodyRenderer: new NumberCellRenderer(),
      editable: TrueFn,
      editInputPipe: editInputPipeForNumber
    }),
    new ColumnDef("birth", "Birthday", px100,
      undefined,
      Renderer.bodyRenderer(new DateToIntlDDMMYYYYCellRenderer())),

    ColumnDef.create({
      property: "gender",
      headerLabel: " ",
      width: px50,
      bodyRenderer: new MaleFemaleToIconCellRenderer(),
      editable: TrueFn,
      getEditRenderer: () => new SelectCellRenderer([
        new ValueLabel("female", "♀"),
        new ValueLabel("male", "♂")
      ])
    }),

    new ColumnDef("address.street", "Strasse", px150),
    new ColumnDef("address.number", "Nr", px70),
    new ColumnDef("address.zip", "Zip", px60),
    new ColumnDef("address.city", "City", px120),
    new ColumnDef("address.country", "Country", px120),
    new ColumnDef("id", "ID", px60)
  ];
}
```