import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import { TableApi, TableModelIf } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";
import { SyncCssService } from "../../common/syncdata/sync-css.service";


@Component({
  selector: "demo-simple",
  template: `
    <guiexpert-table
      *ngIf="tableModel"
      [tableModel]="tableModel"
      (tableReady)="onTableReady($event)"></guiexpert-table>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-rows: 1fr;
    }

    :host > * {
      margin: 0;
      width: 100%;
      height: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSimpleComponent implements OnInit, OnDestroy {

  tableModel: TableModelIf = generateSimpleModel(1000, 100);

  private tableApi?: TableApi;
  private alive = true;


  constructor(
    private readonly elementRef: ElementRef
  ) {
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

