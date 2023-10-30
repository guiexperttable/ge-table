import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { TableFactory, GeMouseEvent, TreeFactory, TableModelIf } from "@guiexpert/table";
import { DemoMouseeventAreaModel } from "./demo-mouseevent-area-model";

@Component({
  selector: 'demo-mouseevent',
  templateUrl: './demo-mouseevent.component.html',
  styleUrls: ['./demo-mouseevent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoMouseeventComponent {

  colCount = 40;
  tableModel: TableModelIf;
  debugHtml = '';

  constructor(
    private readonly cdr: ChangeDetectorRef
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
      overridingColumnWidth: -1,
      columnSizes
    });
    console.info(this.tableModel);
  }


  onContextmenu(evt: GeMouseEvent) {
    this.debugEvent(evt, 'onContextmenu');
  }

  onMouseMoved(evt: GeMouseEvent) {
    this.debugEvent(evt);
    document.title = `${evt.rowIndex}/${evt.columnIndex} (${evt.areaIdent})`;
  }

  onMouseClick(evt: GeMouseEvent) {
    this.debugEvent(evt);
  }


  private debugEvent(evt: GeMouseEvent, text: string = '') {
    this.debugHtml = `
        row index : ${evt.rowIndex} <br>
        col index : ${evt.columnIndex} <br>
        clickCount: ${evt.clickCount} <br>
        ${text}`;
    this.cdr.detectChanges();
  }
}
