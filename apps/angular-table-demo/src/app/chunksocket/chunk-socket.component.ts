import {Component, OnInit} from "@angular/core";

import {ChunkDataIf, TableApi, TableModelIf, TableOptions, TableOptionsIf} from "@guiexpert/table";
import {LoadChunkSocketService} from "./load-chunk-socket.service";


@Component({
  selector: "demo-async-large",
  templateUrl: "./chunk-socket.component.html",
  styleUrls: ["./chunk-socket.component.css"]
})
export class ChunkSocketComponent implements OnInit {

  test = '';

  tableModel?: TableModelIf;

  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 50,
      body: 34,
      footer: 0
    },
    // externalFilterFunction: this.filterFn.bind(this)
  };

  filterMaxId = 20;

  private tableApi?: TableApi;

  constructor(
    private readonly findService: LoadChunkSocketService
  ) {
  }

  ngOnInit(): void {
    // this.http
    //   .get<SimplePersonIf[]>("/assets/demodata/persons1000.json")
    //   .subscribe(this.onDataLoaded.bind(this));
    // TODO  this.findService.find()
    let requestChunk = {
      emmitDataKey: 'emmit123',
      emmitCancelKey: 'cancel123',
      queryId: 'demo',
      filter: '',
      sorting: '',
      startIndex: 0,
      endIndex: 40
    };
    this.findService.requestChunk<string>(
      requestChunk,
      (event: ChunkDataIf<string>) => {
        this.test = JSON.stringify(event);
        console.info('chunk response: ', this.test);
      }
    )
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }

  filterValueChanged(evt: number) {
    // if (this.tableApi) {
    //   this.tableApi.externalFilterChanged();
    //   this.tableApi.repaint();
    // }
  }

  // private filterFn(value: SimplePersonIf, _index: number, _array: SimplePersonIf[]) {
  //   return value.id > this.filterMaxId;
  // }
  //
  // private onDataLoaded(data: SimplePersonIf[]) {
  //   const columnDefs: ColumnDefIf[] = [
  //     new ColumnDef("firstName", "First Name", px120),
  //     new ColumnDef("lastName", "Last Name"),
  //     ColumnDef.create({
  //       property: "email",
  //       width: px250,
  //       bodyClasses: ["ge-table-text-align-left"]
  //     }),
  //     new ColumnDef("ipAddress", "IP", px150),
  //     new ColumnDef("id", "ID", px50)
  //   ];
  //
  //   this.tableModel = TableFactory.createTableModel({
  //     rows: data,
  //     columnDefs,
  //     tableOptions: this.tableOptions,
  //     fixedLeftColumnCount: 2
  //   });
  // }
}
