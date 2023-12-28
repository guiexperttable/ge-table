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
  tableModel3: TableModelIf;
  tableModel4: TableModelIf;
  tableOptions: TableOptionsIf = new TableOptions();


  constructor() {
    const hg2 = this.clone(teamHeaderGroups);
    hg2[0].closed = true;
    this.tableModel2 = createTeamHeadergroupModel(hg2);

    const hg3 = this.clone(teamHeaderGroups);
    if (hg3[0].children?.length) hg3[0].children[0].visibility = 'inverted';
    this.tableModel3 = createTeamHeadergroupModel(hg3);

    const hg4 = this.clone(teamHeaderGroups);
    hg4[0].closed = true;
    if (hg4[0].children?.length) hg4[0].children[0].visibility = 'inverted';
    this.tableModel4 = createTeamHeadergroupModel(hg4);
  }




  private clone<T>(o:T): T {
    return JSON.parse(JSON.stringify(o));
  }

}
