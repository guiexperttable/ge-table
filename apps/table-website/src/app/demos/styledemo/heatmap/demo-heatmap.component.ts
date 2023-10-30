import {ChangeDetectionStrategy, Component} from "@angular/core";
import { TableModelIf } from "@guiexpert/table";
import { createHeatMapModel } from "@guiexpert/demo-table-models";


@Component({
  selector: "demo-heatmap",
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
export class DemoHeatmapComponent {

  tableModel: TableModelIf = createHeatMapModel();

  constructor() {
    console.info(this.tableModel);
  }
}

