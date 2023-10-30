import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-vue",
  templateUrl: "./getstarted-vue.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedVueComponent {


  text1 = `
    npm install --save @guiexpert/table @guiexpert/vue3-table
  `;

  text2 = `
    <guiexpert-table
      :tableModel="tableModel"
      @tableReady="onTableReady($event)"
    ></guiexpert-table>
  `;

  text3 = `
    <script lang="ts" setup>

    import { GuiexpertTable } from "@guiexpert/vue3-table";
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
