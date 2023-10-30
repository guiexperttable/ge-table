import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { TableFactory, GeMouseEvent, TableApi, TreeFactory, TableModelIf } from "@guiexpert/table";
import { DemoMouseeventAreaModel } from "./demo-mouseevent-area-model";
import { SyncCssService } from "../../common/syncdata/sync-css.service";

@Component({
  selector: "demo-mouseevent",
  templateUrl: "./demo-mouseevent.component.html",
  styleUrls: ["./demo-mouseevent.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoMouseeventComponent implements OnInit, OnDestroy {

  colCount = 40;
  tableModel: TableModelIf;
  debugHtml = "";

  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) {
    const columnSizes: number[] = [];
    for (let i = 0; i < this.colCount; i++) {
      columnSizes.push(60 + (4 * i) % 60);
    }
    this.tableModel = TableFactory.createTableModel({
      headerAreaModel: new DemoMouseeventAreaModel(2, columnSizes.length),
      bodyAreaModel: new DemoMouseeventAreaModel(200, columnSizes.length),
      footerAreaModel: new DemoMouseeventAreaModel(2, columnSizes.length),
      columnCount: columnSizes.length,
      overridingColumnWidth: 100
    });
    console.info(this.tableModel);
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


  onContextmenu(evt: GeMouseEvent) {
    this.debugEvent(evt, "onContextmenu");
  }

  onMouseMoved(evt: GeMouseEvent) {
    this.debugEvent(evt);
    document.title = `${evt.rowIndex}/${evt.columnIndex} (${evt.areaIdent})`;
  }

  onMouseClick(evt: GeMouseEvent) {
    this.debugEvent(evt);
  }


  private debugEvent(evt: GeMouseEvent, text: string = "") {
    this.debugHtml = `
        row index : ${evt.rowIndex} <br>
        col index : ${evt.columnIndex} <br>
        clickCount: ${evt.clickCount} <br>
        ${text}`;
    this.cdr.detectChanges();
  }
}
