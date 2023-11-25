import {
  ColumnDef,
  ColumnDefIf,
  px100,
  px120,
  px140,
  px160,
  px200,
  px60,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import {CryptoTopIf} from "./crypto-top.if";
import {ChangePercentageRenderer} from "./renderer/change-percentage-renderer";
import {UsdRenderer} from "./renderer/usd-renderer";
import {NameAndSymbolRenderer} from "./renderer/name-and-symbol-renderer";
import {Volumn24hRenderer} from "./renderer/volumn-24h-renderer";
import {CirculatingSupplyRenderer} from "./renderer/circulating-supply-renderer";
import {CoinIconRenderer} from "./renderer/coin-icon-renderer";
import {cryptoData} from "./crypto-data";


export function createCryptoModelAndOptions(): TableModelAndOptionsIf {

  const rows: CryptoTopIf[] = cryptoData;
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
    }), // new ColumnDef("symbol", "Symbol", px60),
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

  const tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    verticalBorderVisible: false,
    defaultRowHeights: {
      header: 34, body: 50, footer: 0
    },
  };

  return new TableModelAndOptions(
    TableFactory.createTableModel({
      rows, columnDefs, tableOptions
    }),
    tableOptions
  );
}
