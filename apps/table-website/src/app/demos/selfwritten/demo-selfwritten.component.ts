import {ChangeDetectionStrategy, Component} from "@angular/core";
import { TableFactory, TableModelIf } from "@guiexpert/table";
import { SelfwrittenAreaModel } from "./selfwritten-area-model";


@Component({
  selector: "demo-self-written",
  template: `
    <guiexpert-table
      *ngIf="tableModel"
      [tableModel]="tableModel"></guiexpert-table>`,

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
export class DemoSelfwrittenComponent {

  tableModel: TableModelIf;

  constructor() {
    this.tableModel = TableFactory.createTableModel({
      bodyAreaModel: new SelfwrittenAreaModel(),
      columnCount: 6,
      rowCheckboxVisible: false,
      overridingColumnWidth: 100
    });
  }


}

