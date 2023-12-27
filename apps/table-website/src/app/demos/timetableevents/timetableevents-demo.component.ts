import {ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, OnInit} from "@angular/core";
import {TableApi, TableCellUpdateEvent, TableModelIf, TableOptionsIf} from "@guiexpert/table";
import {COL_IDX_UPDATED_AT, createTimeTableModel, tableOptions} from "@guiexpert/demo-table-models";
import {SyncCssService} from "../../common/syncdata/sync-css.service";

@Component({
  selector: "timetable-events-demo",
  templateUrl: "./timetableevents-demo.component.html",
  styleUrls: ["./timetableevents-demo.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimetableeventsDemoComponent implements OnInit, OnDestroy {


  tableModel?: TableModelIf = createTimeTableModel();
  tableOptions: TableOptionsIf = tableOptions;
  running = true;
  @Input() freezeUi = false;
  @Input() forcedColorPickerHash = "";

  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone
  ) {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onTableReady(api: TableApi) {
    this.tableApi = api;
    this.ngZone.runOutsideAngular(() => {
      this.sendUpdateTableModelEvents();
    });
  }


  ngOnInit(): void {
    if (this.forcedColorPickerHash) {
      new SyncCssService(this.forcedColorPickerHash)
        .sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);

    } else {
      const m = location.pathname.match(/\/demo\/(.*?)\/run/);
      if (m && m[1]) {
        new SyncCssService(m[1])
          .sync(this.elementRef.nativeElement, () => this.tableApi, () => this.alive);
      }
    }
  }


  private oddTick = true;

  sendUpdateTableModelEvents() {
    if (!this.running || !this.tableApi) {
      return; // skip
    }
    if (!this.freezeUi) {
      this.oddTick = !this.oddTick;
      const bodyModel = this.tableModel?.getBodyModel();
      const footerModel = this.tableModel?.getAreaModel("footer");
      if (this.tableApi && bodyModel && footerModel) {
        const eventCount = Math.round(1 + 2 * Math.random());
        const rowMax = (bodyModel?.getRowCount() ?? 0) - 1;
        const now = new Date();

        for (let i = 0; i < eventCount; i++) {
          const val = Math.floor(999 * Math.random());
          const col = this.rndm(4, COL_IDX_UPDATED_AT - 1);
          const row = this.rndm(0, rowMax);

          const oldVal = bodyModel.getValueAt(row, col);
          const cssClasses = {
            'bg-green-0': false,
            'bg-green-1': false,
            'bg-red-0': false,
            'bg-red-1': false,
          };
          const color = val>oldVal ? 'green': 'red';
          const suffix = this.oddTick ? '-1': '-0';
          const key = ('bg-' + color + suffix) as keyof typeof cssClasses;
          cssClasses[key] = true;

          // Update value cell and timestamp cell:
          this.tableApi.updateCells([new TableCellUpdateEvent('body', row, col, val, cssClasses)]);
          this.tableApi.updateCells([new TableCellUpdateEvent('body', row, COL_IDX_UPDATED_AT, now)]);
        }
        // Calculate the column sum:
        for (let c = 4; c < COL_IDX_UPDATED_AT; c++) {
          let sum = 0;
          for (let r = 0; r < rowMax; r++) {
            sum = sum + bodyModel.getValueAt(r, c);
          }
          // Update footer:
          this.tableApi.updateCells([new TableCellUpdateEvent('footer', 0, c, sum)]);
        }
      }
    }
    setTimeout(() => {
      requestAnimationFrame(this.sendUpdateTableModelEvents.bind(this));
    }, 16);
  }

  rndm(from: number, to: number) {
    return Math.min(to, Math.round(from + (to - from) * Math.random()));
  }

}
