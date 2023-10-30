import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
  ColumnDef,
  ColumnDefIf,
  TableFactory,
  px120,
  px150,
  px250,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { SimplePersonIf } from "../objectarray/simple-person.if";
import { EmailRendererComponent } from "./email-renderer.component";
import { RenderWrapperFactory } from "@guiexpert/angular-table";
import { ActionButtonRendererComponent } from "./action-button-renderer.component";
import { takeWhile } from "rxjs";


@Component({
  selector: "demo-componentrenderer",
  templateUrl: "./demo-componentrenderer.component.html",
  styleUrls: ["./demo-componentrenderer.component.css"]
})
export class DemoComponentrendererComponent implements OnInit, OnDestroy {

  tableModel?: TableModelIf;

  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 40,
      body: 34,
      footer: 0
    }
  };

  alive = true;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
    private readonly rwf: RenderWrapperFactory
  ) {
  }

  ngOnInit(): void {
    this.http
      .get<SimplePersonIf[]>("/assets/demodata/persons1000.json")
      .subscribe(this.onDataLoaded.bind(this));
  }

  ngOnDestroy(): void {
    this.alive = false;
  }


  private onDataLoaded(data: SimplePersonIf[]) {
    for (let i = 0; i < data.length; i++) {
      data[i].lastName = data[i].lastName + "_" + i;
    }

    const actionRenderer = this.rwf.create(ActionButtonRendererComponent, this.cdr);
    actionRenderer.event$
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(evt => console.info("> ", evt)); // events from the renderer component


    const columnDefs: ColumnDefIf[] = [
      new ColumnDef("firstName", "First Name", px120),
      new ColumnDef("lastName", "Last Name"),
      new ColumnDef("gender", "Gender"),

      ColumnDef.create({
        property: "email",
        headerLabel: "Email",
        width: px250,
        bodyRenderer: this.rwf.create(EmailRendererComponent, this.cdr),
        bodyClasses: ["ge-table-text-align-left"]
      }),

      new ColumnDef("ipAddress", "IP", px150),

      ColumnDef.create({
        property: "id",
        headerLabel: "ID",
        width: px250,
        bodyRenderer: actionRenderer,
        bodyClasses: ["ge-table-text-align-left"]
      })
    ];

    this.tableModel = TableFactory.createTableModel({
      rows: data,
      columnDefs,
      tableOptions: this.tableOptions,
      fixedLeftColumnCount: 1
    });
  }
}
