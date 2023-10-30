import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-svelte",
  templateUrl: "./getstarted-svelte.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedSvelteComponent {


  text1 = `
    npm install --save @guiexpert/table @guiexpert/svelte-table
  `;

  text2 = `
  <SvelteTable
    on:mouseClicked={handleMouseClicked}
    on:tableReady={handleTableReady}
    tableModel={tableModel}
    tableOptions={tableOptions}
  ></SvelteTable>
  `;

  text3 = `
    <script lang="ts">

    import { SvelteTable } from "@guiexpert/svelte-table";
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
  `;
}
