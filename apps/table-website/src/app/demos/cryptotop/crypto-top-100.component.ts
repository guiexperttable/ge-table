import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ColumnDef,
  ColumnDefIf,
  TableFactory,
  GeFilterService,
  px100,
  px120,
  px140,
  px160,
  px200,
  px60,
  SelectionModel,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";

import { debounceTime, takeWhile } from "rxjs";
import { CryptoTopIf } from "./crypto-top.if";
import { ChangePercentageRenderer } from "./renderer/change-percentage-renderer";
import { UsdRenderer } from "./renderer/usd-renderer";
import { NameAndSymbolRenderer } from "./renderer/name-and-symbol-renderer";
import { Volumn24hRenderer } from "./renderer/volumn-24h-renderer";
import { CirculatingSupplyRenderer } from "./renderer/circulating-supply-renderer";
import { CoinIconRenderer } from "./renderer/coin-icon-renderer";


// TODO updates analog TimetableDemoComponent
@Component({
  selector: "crypto-top-100-demo",
  templateUrl: "./crypto-top-100.component.html",
  styleUrls: ["./crypto-top-100.component.css"]
})
export class CryptoTop100Component implements OnInit, OnDestroy {

  @Input()
  small = false;

  selectionModel = new SelectionModel("row", "multi");

  // Table options:
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    verticalBorderVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 50,
      footer: 0
    },
    externalFilterFunction: this.filterFn.bind(this),
    getSelectionModel: () => this.selectionModel
  };
  // Table model:
  tableModel?: TableModelIf;
  filterText = "";

  private filterService = new GeFilterService();

  private tableApi?: TableApi;
  private filter$ = new EventEmitter<number>();
  private alive = true;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.http
      .get<CryptoTopIf[]>("/assets/demo/crypto-top-100.json")
      .subscribe(this.onDataLoaded.bind(this));

    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(400)
      )
      .subscribe(() => {
        console.info(this.filterText);
        this.tableApi?.externalFilterChanged();
      });
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

  onKeyup() {
    this.filter$.next(Date.now());
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
    if (this.filterText) {
      this.tableApi?.externalFilterChanged();
    }
  }


  private filterFn(coin: CryptoTopIf, _index: number, _array: CryptoTopIf[]) {
    if (!this.filterText) {
      return true;
    }
    const ls = this.filterText.toLowerCase();
    return coin.name?.toLowerCase().includes(ls)
      || coin.symbol?.toLowerCase().includes(ls)
      || coin.tags?.join("")?.toLowerCase().includes(ls)
      || ("" + coin.id).includes(ls);
  }


  private onDataLoaded(rows: CryptoTopIf[]) {
    // Column model:
    const changePercentageRenderer = new ChangePercentageRenderer();
    const usdRenderer = new UsdRenderer();
    const nameAndSymbolRenderer = new NameAndSymbolRenderer();
    const volumn24hRenderer = new Volumn24hRenderer();
    const circulatingSupplyRenderer = new CirculatingSupplyRenderer(120);
    const coinIconRenderer = new CoinIconRenderer(120);

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
      // new ColumnDef("symbol", "Symbol", px60),
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
      })
    ];
    columnDefs.forEach(cd => cd.sortable = () => true);

    this.tableModel = TableFactory.createTableModel({
      rows,
      columnDefs,
      tableOptions: this.tableOptions
    });
    this.cdr.detectChanges();
  }

}

