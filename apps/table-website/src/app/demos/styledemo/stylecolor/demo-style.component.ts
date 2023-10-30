import {ChangeDetectionStrategy, Component} from "@angular/core";
import { DemoStyleColorCellRenderer } from "./demo-style-color-cell-renderer";
import { DefaultRowHeights, TableFactory } from "@guiexpert/table";
import { DemoStyleAreaModel } from "./demo-style-area-model";

@Component({
  selector: "demo-style",
  templateUrl: "./demo-style.component.html",
  styleUrls: ["./demo-style.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoStyleComponent {

  tableModel = TableFactory.createTableModel({
    bodyAreaModel: new DemoStyleAreaModel(1024, 1024, 40, new DemoStyleColorCellRenderer()),
    defaultRowHeights: new DefaultRowHeights(0, 40, 0),
    columnSizes: new Array(1024).fill(40)
  });

}
