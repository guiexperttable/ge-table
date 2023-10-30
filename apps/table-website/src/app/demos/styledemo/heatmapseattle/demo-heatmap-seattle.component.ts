import {ChangeDetectionStrategy, Component} from "@angular/core";
import { TableModelIf, TableOptions, TableOptionsIf } from "@guiexpert/table";
import { createHeatMapSeattleModel } from "@guiexpert/demo-table-models";


@Component({
  selector: "demo-heatmap-seattle",
  templateUrl: "./demo-heatmap-seattle.component.html",
  styleUrls: ["./demo-heatmap-seattle.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeatmapSeattleComponent {

  tableModel?: TableModelIf = createHeatMapSeattleModel();
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    hoverRowVisible: false,
    columnsDraggable: false,
    columnsResizable: false,
    tableTopBorderVisible: false,
    tableBottomBorderVisible: false,
    footerSeparatorBorderVisible: false,
    horizontalBorderVisible: false,
    verticalBorderVisible: false
  };
}

