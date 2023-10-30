import { Component } from "@angular/core";
import { AreaModelArrayOfArrays, ColumnDef, ColumnDefIf, TableFactory, Size, TableModelIf } from "@guiexpert/table";
import { DemoRowAndColspanAreaModel } from "./demo-row-and-colspan-area-model";

@Component({
  selector: "demo-row-and-colspan",
  templateUrl: "./demo-row-and-colspan.component.html",
  styleUrls: ["./demo-row-and-colspan.component.css"]
})
export class DemoRowAndColspanComponent {

  tableModel: TableModelIf;

  private rowCount = 100;
  private columnCount = 100;

  constructor() {

    const buf: string[][] = [];
    for (let r = 0; r < this.rowCount; r++) {
      const row: string[] = [];
      buf.push(row);
      for (let c = 0; c < this.columnCount; c++) {
        row.push(`${r}/${c}`);
      }
    }

    const columnDefs: ColumnDefIf[] = [];
    const labels: string[] = [];
    for (let c = 0; c < this.columnCount; c++) {
      labels.push(`col ${c}`);
      columnDefs.push(new ColumnDef("", "", new Size(60, "px")));
    }

    const footer: string[][] = [];
    for (let r = 0; r < 2; r++) {
      const row: string[] = [];
      footer.push(row);
      for (let c = 0; c < this.columnCount; c++) {
        row.push(`F${r}/${c}`);
      }
    }

    this.tableModel = TableFactory.createTableModel({
      headerAreaModel: new AreaModelArrayOfArrays("header", [labels], 34),
      bodyAreaModel: new DemoRowAndColspanAreaModel("body", buf),
      footerAreaModel: new AreaModelArrayOfArrays("footer", footer, 34),
      columnDefs
    });
  }

}
