import { Component, OnInit } from "@angular/core";
import { TableApi, TableModelIf, TableOptions, TableOptionsIf } from "@guiexpert/table";
import { createHeadergroupModel, createTeamHeadergroupModel } from '@guiexpert/demo-table-models';

@Component({
  selector: "demo-cellgroup",
  templateUrl: "./demo-cellgroup.component.html",
  styleUrls: ["./demo-cellgroup.component.css"]
})
export class DemoCellgroupComponent implements OnInit {

  // tableModel: TableModelIf = createHeadergroupModel();
  tableModel: TableModelIf = createTeamHeadergroupModel();
  tableOptions: TableOptionsIf = new TableOptions();


  private tableApi?: TableApi;

  constructor(
    // private readonly http: HttpClient,
    // private readonly cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }

}
