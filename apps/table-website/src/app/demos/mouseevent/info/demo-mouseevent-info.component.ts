import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-mouseevent-info",
  templateUrl: "./demo-mouseevent-info.component.html",
  styleUrls: ["./demo-mouseevent-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoMouseeventInfoComponent {

  tag = `<guiexpert-table
  (contextmenu)="onContextmenu($event)"
  (mouseClicked)="onMouseClick($event)"
  (mouseMoved)="onMouseMoved($event)"
  (tableReady)="onTableReady($event)"
  [debounceMouseClickDelay]="166"
  *ngIf="tableModel"
  [tableModel]="tableModel"
  class="table-div"></guiexpert-table>`;

}
