---
layout: ../../../layouts/DemoCodeLayout.astro
---


Source of demo: [timetable/run.astro](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/timetable/run.astro).
 
Model: [createTimeTableModel.ts](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/createTimeTableModel.ts).

**Column- and rowspan**

Merging table cells can be achieved by overriding the 
[getRowspanAt()](/api/interfaces/AreaModelIf.html#getRowspanAt) method of the 
respective [AreaModels](/api/interfaces/AreaModelIf.html):


```ts title="TimeTableBodyModel"
class TimeTableBodyModel extends AreaModelObjectArrayWithColumndefs<TeamDataIf> {
  
  constructor(rowHeight: number) {
    super("body", data, columnDefs, rowHeight);
  }

  override getRowspanAt(rowIndex: number, columnIndex: number): number {
    if (columnIndex === 0 || columnIndex == 1) {
      const v = this.getValueAt(rowIndex, columnIndex);
      if (rowIndex === 0 || v !== this.getValueAt(rowIndex - 1, columnIndex)) {
        return this.countNextWithValue(rowIndex, columnIndex, v);
      }
    }
    return 1;
  }

  private countNextWithValue(rowIndex: number, columnIndex: number, value: any): number {
    let ret = 1;
    while (value === this.getValueAt(rowIndex + ret, columnIndex)) {
      ret++;
    }
    return ret;
  }
}
```

**Updating table cells**

Table cells (in both the header, body, and footer) can be updated by utilizing the method 
[setValue()](/api/interfaces/AreaModelIf.html#setValue).


With numerous updates, it might be more efficient to pass the changes 
as an array of 
[TableCellUpdateEvent](/api/interfaces/TableCellUpdateEventIf.html) to the method 
[updateCells()](/api/classes/TableApi.html#updateCells).

```ts
this.tableApi?.updateCells([new TableCellUpdateEvent("body", row, col, val, cssClasses)]);
```
