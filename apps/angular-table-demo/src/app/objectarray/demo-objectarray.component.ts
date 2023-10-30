import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SimplePersonIf } from "./simple-person.if";
import { TableModelIf, TableOptions, TableOptionsIf } from "@guiexpert/table";
import { TableFactory } from "@guiexpert/table";

@Component({
  selector: "demo-objectarray",
  templateUrl: "./demo-objectarray.component.html",
  styleUrls: ["./demo-objectarray.component.css"]
})
export class DemoObjectarrayComponent implements OnInit {

  tableModel?: TableModelIf;
  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 34,
      body: 34,
      footer: 0
    }
  };

  constructor(
    private readonly http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http
      .get<SimplePersonIf[]>("/assets/demodata/persons1000.json")
      .subscribe(this.onDataLoaded.bind(this));
  }

  private onDataLoaded(rows: SimplePersonIf[]) {
    const properties = ["id", "firstName", "lastName", "email", "gender", "ipAddress"];
    this.tableModel = TableFactory.createTableModel({
      properties,
      rows,
      defaultRowHeights: this.tableOptions.defaultRowHeights
    });
  }

}
