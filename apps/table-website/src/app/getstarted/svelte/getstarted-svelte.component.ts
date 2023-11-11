import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-svelte",
  templateUrl: "./getstarted-svelte.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedSvelteComponent {


  text1 = `npm install --save @guiexpert/table @guiexpert/svelte-table`;

  text2 = `
<GuiexpertTable
  on:mouseClicked={handleMouseClicked}
  on:tableReady={handleTableReady}
  tableModel={tableModel}
  tableOptions={tableOptions}
></GuiexpertTable>
`;

text3 = `
  <script lang="ts">

  import { GuiexpertTable } from "@guiexpert/svelte-table";
  import {
    GeMouseEvent,
    TableApi
    TableFactory,
    TableModelIf,
    TableOptions,
    TableOptionsIf
  } from "@guiexpert/table";
`;

text4 = `
  const tableModel: TableModelIf = TableFactory
    .createTableModel<any>(param: {
      headerData [
        ['Header 1', 'Header 2']
      ],
      bodyData: [
        ['Text 1a', 'Text 2a'],
        ['Text 1b', 'Text 2b'],
      ]
    };

  function onTableReady(api: TableApi) {
    console.info("onTableReady API:", api);
  }
`;
}
