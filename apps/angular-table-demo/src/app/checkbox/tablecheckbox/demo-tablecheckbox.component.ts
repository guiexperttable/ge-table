import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
  CheckboxBooleanPropertyCellRenderer,
  CheckboxColumnDef,
  ColumnDef,
  ColumnDefIf,
  px120,
  px150,
  px250,
  px40,
  px50,
  TableFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { SimplePersonIf } from "../../objectarray/simple-person.if";

@Component({
  selector: "demo-tablecheckbox",
  templateUrl: "./demo-tablecheckbox.component.html",
  styleUrls: ["./demo-tablecheckbox.component.css"]
})
export class DemoTablecheckboxComponent implements OnInit {

  tableModel?: TableModelIf;

  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 50,
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

  onCheckboxChanged(evt: any[]) {
    console.info("onCheckboxChanged  evt:", evt);
  }

  private onDataLoaded(data: SimplePersonIf[]) {

    const columnDefs: ColumnDefIf[] = [
      // ColumnDef.create({
      //   property: "checked",
      //   width: px40,
      //   bodyRenderer: new CheckboxBooleanPropertyCellRenderer<SimplePersonIf>("checked", true)
      // }),
      new CheckboxColumnDef(), //  <--- short, no 'checked' property needed, bodyAreaModel.rowSelectionModel used instead.
      new ColumnDef("firstName", "First Name", px120),
      new ColumnDef("lastName", "Last Name"),
      ColumnDef.create({
        property: "email",
        width: px250,
        bodyClasses: ["ge-table-text-align-left"]
      }),
      new ColumnDef("ipAddress", "IP", px150),
      new ColumnDef("id", "ID", px50)
    ];

    this.tableModel = TableFactory.createTableModel({
      rows: data,
      columnDefs,
      tableOptions: this.tableOptions,
      fixedLeftColumnCount: 2
    });
  }
}
