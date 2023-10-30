import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-preact",
  templateUrl: "./getstarted-preact.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedPreactComponent {


  text1 = `
    npm install --save @guiexpert/table @guiexpert/preact-table
  `;

  text2 = `
  return (
    <PreactTable
      tableOptions={tableOptions}
      tableModel={tableModel}
      mouseClicked={console.info}
      tableReady={tableReady}
    />
  );
  `;

  text3 = `
    import { PreactTable } from "@guiexpert/preact-table";
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
    const tableOptions = new TableOptions();

    function onTableReady(api: TableApi) {
      console.info("onTableReady API:", api);
    }
  `;
}
