import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ColumnDef,
  ColumnDefIf,
  TableFactory,
  GeFilterService,
  px100,
  px200,
  px60,
  px80,
  SelectionModel,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { OlympicIf } from "./olympic.if";
import { debounceTime, takeWhile } from "rxjs";
import { SyncCssService } from "../../common/syncdata/sync-css.service";


@Component({
  selector: "demo-olympic",
  templateUrl: "./demo-olympic.component.html",
  styleUrls: ["./demo-olympic.component.css"]
})
export class DemoOlympicComponent implements OnInit, OnDestroy {

  selectionModel = new SelectionModel("row", "multi");

  // Table options:
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 34,
      footer: 0
    },
    externalFilterFunction: this.filterFn.bind(this),
    getSelectionModel: () => this.selectionModel
  };
  // Table model:
  tableModel?: TableModelIf;
  filterText = "xx +sh -35"; // try: 'xxx lamu'

  private filterService = new GeFilterService();

  private tableApi?: TableApi;
  private filter$ = new EventEmitter<number>();
  private alive = true;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.http
      .get<OlympicIf[]>("/assets/demo/olympics.json")
      .subscribe(this.onDataLoaded.bind(this));

    this.filter$
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(400)
      )
      .subscribe(() => {
        console.info("this.filterText", this.filterText);
        this.tableApi?.externalFilterChanged();
      });

    const m = location.pathname.match(/\/demo\/(.*?)\/run/);
    if (m && m[1]) {
      new SyncCssService(m[1]).sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);
    }
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


  private filterFn(olympic: OlympicIf, _index: number, _array: OlympicIf[]) {
    return this.filterService.filterPredict<OlympicIf>(olympic, this.filterText);
    /*
    Alternate function:

    if (!this.filterText) {
      return true;
    }
    const ls = this.filterText.toLowerCase();
    return olympic.NOC.toLowerCase().includes(ls)
      || olympic.Name.toLowerCase().includes(ls)
      || olympic.Medal.toLowerCase().includes(ls)
      || olympic.Season.toLowerCase().includes(ls)
      || olympic.Sex.toLowerCase().includes(ls)
      || ('' + olympic.ID).includes(ls)
      || ('' + olympic.Year).includes(ls)
      || ('' + olympic.Age).includes(ls);
     */
  }

  private onDataLoaded(rows: OlympicIf[]) {
    let rid = 0;
    rows.forEach(o => o.rid = rid++);

    // Column model:
    const columnDefs: ColumnDefIf[] = [
      new ColumnDef("rid", "ID", px80),
      new ColumnDef("ID", "User ID", px80),
      new ColumnDef("Name", "Name", px200),
      new ColumnDef("Sex", "Sex", px60),
      new ColumnDef("Age", "Age", px60),
      new ColumnDef("NOC", "NOC", px60),
      new ColumnDef("Year", "Year", px80),
      new ColumnDef("Season", "Season", px100),
      new ColumnDef("Medal", "Medal", px100)
    ];

    this.tableModel = TableFactory.createTableModel({
      rows,
      columnDefs,
      tableOptions: this.tableOptions
    });
    this.cdr.detectChanges();
  }

}

