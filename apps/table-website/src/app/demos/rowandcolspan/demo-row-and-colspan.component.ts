import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {
  AreaModelArrayOfArrays,
  ColumnDef,
  ColumnDefIf,
  TableFactory,
  Size,
  TableApi,
  TableModelIf
} from "@guiexpert/table";
import { DemoRowAndColspanAreaModel } from "./demo-row-and-colspan-area-model";
import { SyncCssService } from "../../common/syncdata/sync-css.service";

@Component({
  selector: "demo-row-and-colspan",
  templateUrl: "./demo-row-and-colspan.component.html",
  styleUrls: ["./demo-row-and-colspan.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoRowAndColspanComponent implements OnInit, OnDestroy {

  tableModel: TableModelIf;

  private rowCount = 100;
  private columnCount = 100;

  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly elementRef: ElementRef
  ) {
    const buf: string[][] = [];
    for (let r = 0; r < this.rowCount; r++) {
      const row: string[] = [];
      buf.push(row);
      for (let c = 0; c < this.columnCount; c++) {
        row.push(`${r}/${c}`);
      }
    }

    const columnDefs: ColumnDefIf[] = [];
    const labels: string[] = [];
    for (let c = 0; c < this.columnCount; c++) {
      labels.push(`col ${c}`);
      columnDefs.push(new ColumnDef("", "", new Size(60, "px")));
    }

    const footer: string[][] = [];
    for (let r = 0; r < 2; r++) {
      const row: string[] = [];
      footer.push(row);
      for (let c = 0; c < this.columnCount; c++) {
        row.push(`F${r}/${c}`);
      }
    }

    this.tableModel = TableFactory.createTableModel({
      headerAreaModel: new AreaModelArrayOfArrays("header", [labels], 34),
      bodyAreaModel: new DemoRowAndColspanAreaModel("body", buf, 34),
      footerAreaModel: new AreaModelArrayOfArrays("footer", footer, 34),
      columnDefs
    });
  }

  ngOnInit(): void {
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


}
