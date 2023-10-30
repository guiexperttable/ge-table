import { Component } from "@angular/core";
import { DefaultRowHeights, TableFactory, TableModelIf } from "@guiexpert/table";
import { DemoMultisizeAreaModel } from "./demo-multisize-area-model";

@Component({
  selector: "demo-multisize",
  templateUrl: "./demo-multisize.component.html",
  styleUrls: ["./demo-multisize.component.css"]
})
export class DemoMultisizeComponent {

  tableModel: TableModelIf;

  constructor() {
    const rowCount = 50;
    const colCount = 50;
    const columnSizes: number[] = [colCount];
    for (let i = 0; i < colCount; i++) {
      columnSizes[i] = 50 + Math.floor(300 * Math.random());
    }

    this.tableModel = TableFactory.createTableModel({
      headerAreaModel: new DemoMultisizeAreaModel("header", 2, colCount),
      bodyAreaModel: new DemoMultisizeAreaModel("body", rowCount, colCount),
      footerAreaModel: new DemoMultisizeAreaModel("footer", 2, colCount),
      fixedLeftColumnCount: 2,
      fixedRightColumnCount: 1,
      defaultRowHeights: new DefaultRowHeights(0, 0, 0),
      columnSizes
    });
    console.info(this.tableModel);
  }
}

