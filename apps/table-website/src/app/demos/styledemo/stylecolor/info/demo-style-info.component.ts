import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-style-info",
  templateUrl: "./demo-style-info.component.html",
  styleUrls: ["./demo-style-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoStyleInfoComponent {

  tag = `<guiexpert-table
    *ngIf="tableModel"
    [tableModel]="tableModel"
    class="table-div"></guiexpert-table>`;

  model = `  tableModel = TableFactory.createTableModel({
    bodyAreaModel: new DemoStyleAreaModel(1024, 1024, 40, new DemoStyleColorCellRenderer()),
    defaultRowHeights: new DefaultRowHeights(0, 40, 0),
    columnSizes: new Array(1024).fill(40)
  });`;

}
