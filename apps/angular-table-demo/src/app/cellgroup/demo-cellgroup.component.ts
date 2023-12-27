import { Component } from "@angular/core";
import { TableApi, TableModelIf, TableOptions, TableOptionsIf } from "@guiexpert/table";
import { createHeadergroupModel, createTeamHeadergroupModel, teamHeaderGroups } from '@guiexpert/demo-table-models';

@Component({
  selector: "demo-cellgroup",
  templateUrl: "./demo-cellgroup.component.html",
  styleUrls: ["./demo-cellgroup.component.css"]
})
export class DemoCellgroupComponent {

  tableModel: TableModelIf = createHeadergroupModel();

  tableModel1: TableModelIf = createTeamHeadergroupModel();
  tableModel2: TableModelIf;
  tableModel3: TableModelIf = createTeamHeadergroupModel();
  tableOptions: TableOptionsIf = new TableOptions();


  private tableApi?: TableApi;
  private tableApi1?: TableApi;
  private tableApi2?: TableApi;
  private tableApi3?: TableApi;

  constructor() {
    const hg2 = this.clone(teamHeaderGroups);
    hg2[0].closed = true;
    this.tableModel2 = createTeamHeadergroupModel(hg2);

    const hg3 = this.clone(teamHeaderGroups);
    hg3[0].closed = true;
    if (hg3[0].children?.length) hg3[0].children[0].visibility = 'inverted';
    this.tableModel3 = createTeamHeadergroupModel(hg3);
  }



  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }
  onTable1Ready($event: TableApi) {
    this.tableApi1 = $event;
  }
  onTable2Ready($event: TableApi) {
    this.tableApi2 = $event;
  }
  onTable3Ready($event: TableApi) {
    this.tableApi3 = $event;
  }


  private clone<T>(o:T): T {
    return JSON.parse(JSON.stringify(o));
  }

}
