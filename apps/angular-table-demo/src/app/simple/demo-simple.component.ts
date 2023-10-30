import { Component } from "@angular/core";
import { TableModelIf, TableOptions } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";

@Component({
  selector: 'demo-simple',
  templateUrl: './demo-simple.component.html',
  styleUrls: ['./demo-simple.component.css'],
})
export class DemoSimpleComponent {

  tableModel: TableModelIf = generateSimpleModel(1000, 100);

  constructor() {
    console.info(this.tableModel);
  }

}

