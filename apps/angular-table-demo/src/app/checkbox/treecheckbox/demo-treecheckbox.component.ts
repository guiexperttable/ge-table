import { Component, OnInit } from "@angular/core";
import { TableModelIf, TableOptions, TableOptionsIf } from "@guiexpert/table";
import { generateTreeCheckboxModel } from "@guiexpert/demo-table-models";

@Component({
  selector: "demo-treecheckbox",
  templateUrl: "./demo-treecheckbox.component.html",
  styleUrls: ["./demo-treecheckbox.component.css"]
})
export class DemoTreecheckboxComponent implements OnInit {

  initialized = false;

  tableModel?: TableModelIf = generateTreeCheckboxModel();

  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 50,
      body: 34,
      footer: 0
    },
    showCheckboxWihoutExtraColumn: true // <-- true: we will see the checkbox IN the first column after the arrow
  };

  onCheckboxChanged(evt: any[]) {
    console.info("onCheckboxChanged  evt:", evt);
  }

  ngOnInit(): void {
    Promise.resolve().then(() => {
      this.initialized = true;
    });
  }

}
