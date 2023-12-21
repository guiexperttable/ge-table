import { Component } from '@angular/core';
import { TableApi, TableModelIf, TableOptionsIf } from '@guiexpert/table';
import { createManyTypesModelAndOptions } from '@guiexpert/demo-table-models';


@Component({
  selector: 'demo-cellselection',
  templateUrl: './demo-cellselection.component.html',
  styleUrls: ['./demo-cellselection.component.css']
})
export class DemoCellselectionComponent {


  tableOptions: TableOptionsIf;
  tableModel?: TableModelIf;
  tableApi: TableApi | undefined;


  constructor() {
    const { tableModel, tableOptions } = createManyTypesModelAndOptions();
    this.tableModel = tableModel;
    this.tableOptions = tableOptions;
  }


  onTableReady($event: TableApi) {
    this.tableApi = $event;
  }

}

