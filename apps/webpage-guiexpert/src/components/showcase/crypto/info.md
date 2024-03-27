---
layout: ../../../layouts/DemoCodeLayout.astro
---

In this example, we demonstrate how to assemble a table from a list of business objects (T[]) and a few column definitions (ColumnDefIf[]).

The creation of the demo TableModel code can be found at [createCryptoModelAndOptions()](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/crypto/generateCryptoModel.ts).
 
The TableModel is created by an array of objects 
(see [crypto-data.ts](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/crypto/crypto-data.ts)), 
and an array of ColumnDefs and this helper function:

```ts
TableFactory.createTableModel({
  rows, columnDefs, tableOptions
})
```

Each column is defined by this array:

```ts
const changePercentageRenderer = new ChangePercentageRenderer();
const usdRenderer = new UsdRenderer();
const nameAndSymbolRenderer = new NameAndSymbolRenderer();
const volumn24hRenderer = new Volumn24hRenderer();
const circulatingSupplyRenderer = new CirculatingSupplyRenderer(120);
const coinIconRenderer = new CoinIconRenderer();

const columnDefs: ColumnDefIf[] = [
  ColumnDef.create({
    property: "symbol",
    headerLabel: "",
    width: px60,
    bodyClasses: ["ge-table-text-align-left"],
    bodyRenderer: coinIconRenderer
  }),
  ColumnDef.create({
    property: "symbol",
    headerLabel: "Name",
    width: px120,
    bodyClasses: ["ge-table-text-align-left"],
    headerClasses: ["ge-table-text-align-left"],
    bodyRenderer: nameAndSymbolRenderer
  }),
  ColumnDef.create({
    property: "priceInUsd",
    headerLabel: "Price $",
    width: px100,
    bodyClasses: ["ge-table-text-align-right"],
    headerClasses: ["ge-table-text-align-right"]
  }),
  new ColumnDef("change1h", "1h %", px100, undefined, ColumnDef.bodyRenderer(changePercentageRenderer)),
  new ColumnDef("change24h", "24h %", px100, undefined, ColumnDef.bodyRenderer(changePercentageRenderer)),
  new ColumnDef("change7d", "7d %", px100, undefined, ColumnDef.bodyRenderer(changePercentageRenderer)),
  ColumnDef.create({
    property: "marketCapUsd",
    headerLabel: "Market Cap",
    width: px160,
    bodyClasses: ["ge-table-text-align-right"],
    headerClasses: ["ge-table-text-align-right"],
    bodyRenderer: usdRenderer
  }),
  ColumnDef.create({
    headerLabel: "Volumne (24h)",
    width: px200,
    bodyClasses: ["ge-table-text-align-right"],
    headerClasses: ["ge-table-text-align-right"],
    bodyRenderer: volumn24hRenderer
  }),
  ColumnDef.create({
    property: "circulatingSupply",
    headerLabel: "Circulating Supply",
    width: px140,
    bodyRenderer: circulatingSupplyRenderer,
    bodyClasses: ["ge-table-text-align-right"],
    headerClasses: ["ge-table-text-align-right"]
  })];

columnDefs.forEach(cd => cd.sortable = () => true);
```

The renderers can be found in this package: [renderer](https://github.com/guiexperttable/ge-table/tree/main/libs/demo-table-models/src/lib/crypto/renderer).