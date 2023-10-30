import { ChangeDetectionStrategy, Component } from "@angular/core";
import { onMount } from "solid-js";
import { GeMouseEvent } from "@guiexpert/table";

@Component({
  selector: "app-get-started-solid",
  templateUrl: "./getstarted-solid.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedSolidComponent {


  text1 = `
    npm install --save @guiexpert/table @guiexpert/solid-table
  `;

  text2 = `
    <guiexpert-table
      :tableModel="tableModel"
      @tableReady="onTableReady($event)"
    ></guiexpert-table>
  `;

  text3 = `
    import { SolidTable } from "@guiexpert/solid-table";
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
    function App() {
      let ref: any;

      onMount(() => {
        ref.addEventListener("mouseClicked", (e: CustomEvent<GeMouseEvent>) => console.info(e));
        ref.addEventListener("mouseMoved", (e: CustomEvent<GeMouseEvent>) => document.title = e.detail.rowIndex + "/" + e.detail.columnIndex);
        ref.addEventListener("tableReady", handleTableReady);
      });

      return (
        <div ref={ref}>
          <SolidTable
            tableModel={tableModel}
            tableOptions={tableOptions} />
        </div>
      );
    }
    function handleTableReady(api: any) {
      console.info("Table API:", api.detail);
    }
  `;
}
