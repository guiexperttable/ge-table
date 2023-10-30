import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
  allLeft,
  allRight,
  bodyLeft,
  ColumnDef,
  ColumnDefIf,
  TableFactory,
  FalseFn,
  MaleFemaleToIconCellRenderer,
  px100,
  px120,
  px160,
  px200,
  px300,
  px40,
  px60,
  px80,
  Renderer,
  Size,
  TableApi,
  TableModelIf,
  TableOptions,
  TableOptionsIf,
  TrueFn
} from "@guiexpert/table";
import { RenderWrapperFactory } from "@guiexpert/angular-table";
import { FriendRendererComponent } from "./renderer/friend-renderer.component";
import { DummyDataIf } from "./data/dummy-data.if";

@Component({
  selector: "demo-headerdblclick",
  templateUrl: "./demo-headerdblclick.component.html",
  styleUrls: ["./demo-headerdblclick.component.css"]
})
export class DemoHeaderdblclickComponent implements OnInit {

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


  private tableApi?: TableApi;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
    private readonly rwf: RenderWrapperFactory
  ) {
  }

  ngOnInit(): void {
    this.http
      .get<DummyDataIf[]>("/assets/demo/dummy-10000.json")
      .subscribe(this.onDataLoaded.bind(this));
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }


  private onDataLoaded(data: DummyDataIf[]) {

    const columnDefs: ColumnDefIf[] = [
      new ColumnDef("name", "Name", px200),
      new ColumnDef("gender", "Gender", px60, undefined, Renderer.bodyRenderer(new MaleFemaleToIconCellRenderer())),
      new ColumnDef("company", "Company", px120),
      new ColumnDef("email", "Email", px300, bodyLeft),
      new ColumnDef("phone", "Phone", px160, allLeft),
      new ColumnDef("address", "Address", new Size(500, "px"), bodyLeft),
      new ColumnDef("about", "About", px300, bodyLeft),
      new ColumnDef("isActive", "Active", px80),
      new ColumnDef("balance", "Balance", px120),
      new ColumnDef("picture", "Picture", px200),

      ColumnDef.create({
        property: "age",
        headerLabel: "Age",
        width: px40,
        sortIconVisible: FalseFn
      }),

      new ColumnDef("eyeColor", "Eye Color", px100),
      new ColumnDef("registered", "Registered", px200),
      new ColumnDef("latitude", "Latitude", px120, allRight),
      new ColumnDef("longitude", "Longitude", px120, allRight),
      new ColumnDef("tags", "Tags", px300),

      ColumnDef.create({
        property: "friends",
        headerLabel: "Friends",
        width: px300,
        bodyRenderer: this.rwf.create(FriendRendererComponent, this.cdr),
        bodyClasses: ["ge-table-text-align-left"],
        sortable: FalseFn
      }),
      new ColumnDef("greeting", "Greeting", px200),
      new ColumnDef("favoriteFruit", "Favorite Fruit", px120)
    ];

    for (const columnDef of columnDefs) {
      if (columnDef.sortable === undefined) {
        columnDef.sortable = TrueFn;
      }
    }

    this.tableModel = TableFactory.createTableModel({
      rows: data,
      columnDefs,
      tableOptions: this.tableOptions,
      fixedLeftColumnCount: 1,
      fixedRightColumnCount: 1
    });
    this.cdr.detectChanges();
  }
}
