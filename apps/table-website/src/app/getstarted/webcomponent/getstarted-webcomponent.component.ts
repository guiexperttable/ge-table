import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-webcomponent",
  templateUrl: "./getstarted-webcomponent.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedWebcomponentComponent {


  text1 = `
    npm install --save @guiexpert/table @guiexpert/webcomponent-table
  `;

  text2 = `
    this.innerHTML = \`
      <guiexpert-table
        style="width:100%;height:100%;background:transparent;margin:0;padding:0;"></guiexpert-table>\`;
  `;

  text3 = `
    import { TableComponent } from "@guiexpert/webcomponent-table";
    import {
      GeMouseEvent,
      TableApi
      TableModelFactory,
      TableModelIf,
      TableOptions,
      TableOptionsIf
    } from "@guiexpert/table";
  `;

  text4 = `
    const tableModel: TableModelIf = TableModelFactory
      .createByArrayOfArraysParams<any>(param: {
        columnLabels: [
          ['Header 1', 'Header 2']
        ],
        data: [
          ['Text 1a', 'Text 2a'],
          ['Text 1b', 'Text 2b'],
        ]
      };

    function onTableReady(api: TableApi) {
      console.info("onTableReady API:", api);
    }

    const table = this.querySelector("guiexpert-table") as TableComponent;
    table.addEventListener("tableReady", (e) => console.info("table api:", (e as CustomEvent).detail));
    const tableOptions = new TableOptions();

    table.setData(tableModel, tableOptions);
  `;
}
