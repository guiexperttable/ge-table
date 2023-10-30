import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import {
  ColumnDef,
  ColumnDefIf, TableFactory, TableApi,
  TreeFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { PrizesDemoService } from "./prizes-demo.service";
import { SimplePrize } from "./prizes.model";
import { SyncCssService } from "../../common/syncdata/sync-css.service";

@Component({
  selector: "prizes-demo",
  templateUrl: "./prizes-demo.component.html",
  styleUrls: ["./prizes-demo.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizesDemoComponent implements OnInit, OnDestroy {

  tableModel?: TableModelIf;
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 34,
      footer: 0
    },
    columnsDraggable: false,
    columnsResizable: true
  };

  private data: SimplePrize[] = [];
  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly prizesDemoService: PrizesDemoService,
    private readonly elementRef: ElementRef,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.prizesDemoService
      .getSimplePrizes()
      .subscribe(this.onDataLoaded.bind(this));
    const m = location.pathname.match(/\/demo\/(.*?)\/run/);
    if (m && m[1]) {
      new SyncCssService(m[1]).sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onTableReady(api: TableApi) {
    this.tableApi = api;
  }


  private onDataLoaded(data: SimplePrize[]) {
    this.data = data;
    const columnDefs: ColumnDefIf[] = [
      ColumnDef.create({
        property: "year",
        headerLabel: "Year"
      }),
      ColumnDef.create({
        property: "category",
        headerLabel: "Category"
      }),
      ColumnDef.create({
        property: "laureate.firstname",
        headerLabel: "Firstname",
        bodyClasses: ["ge-table-text-align-left"]
      }),
      ColumnDef.create({
        property: "laureate.surname",
        headerLabel: "Surname",
        bodyClasses: ["ge-table-text-align-left"]
      })
    ];

    this.tableModel = TableFactory.createTableModel({
      columnDefs: columnDefs,
      headerData: [
        ["Year", "Category", "Laureate", "", "Motivation"],
        ["", "", "Firstname", "Surname", ""]
      ],
      rows: data,
      defaultRowHeights: this.tableOptions.defaultRowHeights
    });

    const headerModel = this.tableModel.getAreaModel("header");
    headerModel.getRowspanAt = this.getHeaderRowspanAt.bind(this);
    headerModel.getColspanAt = this.getHeaderColspanAt.bind(this);

    const bodyModel = this.tableModel.getBodyModel();
    bodyModel.getRowspanAt = this.getRowspanAt.bind(this);
    bodyModel.getColspanAt = this.getColspanAt.bind(this);
    this.cdr.detectChanges();
  }


  private getRowspanAt(rowIndex: number, columnIndex: number): number {
    if (columnIndex === 2 || columnIndex === 3) {
      return 1;
    }
    let simplePrize = this.data[rowIndex];
    return simplePrize.rowspan;
  }

  private getColspanAt(rowIndex: number, columnIndex: number): number {
    if (columnIndex === 2 || columnIndex === 3) {
      let simplePrize = this.data[rowIndex];
      if (!simplePrize.laureate.surname) return 2;
    }
    return 1;
  }

  private getHeaderRowspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex === 0 && (columnIndex === 0 || columnIndex === 1 || columnIndex === 4)) {
      return 2;
    }
    return 1;
  }

  private getHeaderColspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex === 0 && (columnIndex === 2)) {
      return 2;
    }
    return 1;
  }
}
