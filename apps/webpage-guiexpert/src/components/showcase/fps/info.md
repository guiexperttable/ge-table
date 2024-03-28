---
layout: ../../../layouts/DemoCodeLayout.astro
---

Source of demo: [fps/run.astro](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/fps/run.astro).
 


```js title="TableModel"
const rowCount = 10;
const columnCount = 10;
const bodyData =
  Array.from(Array(rowCount).keys()).map((r) =>
    Array.from(Array(columnCount).keys()).map((c) => 0)
  );
const headerData = [Array.from(Array(columnCount).keys()).map((c) => String.fromCharCode(97 + c))];
const footerData = [Array.from(Array(columnCount).keys()).map((c) => String.fromCharCode(97 + c))];
const tableOptions = new TableOptions();

const tableModel = TableFactory.createTableModel({
  headerData,
  bodyData,
  footerData,
  overridingColumnWidth: cellWidth
});
```

**Updating table cells**


```js
function sendUpdateTableModelEvents() {
  count++;
  x = x + 1;
  if (x === columnCount) {
    x = 0;
    y = y + 1;
    if (y === rowCount) {
      y = 0;
      val = val===1 ? -1 : 1;
      oddTick = !oddTick;
    }
  }

  if (count > 120) {
    const now = Date.now();
    const deltaTime = now - lastTick;
    eleOut.innerText = `${Math.round(10*count / deltaTime * 1000)/10} fps`;
    lastTick = now;
    count = 0;
  }

  const cssClasses = {
    'bg-green-0': val === 1 && !oddTick,
    'bg-green-1': val === 1 && oddTick,
    'bg-red-0': val === -1 && !oddTick,
    'bg-red-1': val === -1 && oddTick,
  };
  tableApi.updateCells([new TableCellUpdateEvent('body', y, x, val, cssClasses)]); // <- sending update event

  requestAnimationFrame(() => sendUpdateTableModelEvents());
}
```
