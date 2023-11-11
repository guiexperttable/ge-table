import { ChangeDetectionStrategy, Component } from "@angular/core";
import { onMount } from "solid-js";
import {GeMouseEvent, TableFactory, TableOptions} from "@guiexpert/table";
import {createTableOptions} from "@guiexpert/demo-table-models";

@Component({
  selector: "app-get-started-solid",
  templateUrl: "./getstarted-solid.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedSolidComponent {


  text1 = `npm install --save @guiexpert/table @guiexpert/solid-table`;

  text2 = `<guiexpert-table
  :tableModel="tableModel"
  @tableReady="onTableReady($event)"
></guiexpert-table>
`;

  text3 = `import { GuiexpertTable } from "@guiexpert/solid-table";
import {
  GeMouseEvent,
  TableApi
  TableFactory,
  TableModelIf,
  TableFactory,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
`;

  text4 = `function App() {
  let ref: any;
  
  const tableOptions = new TableOptions();
  const tableModel = TableFactory.buildByTypedRowsParam({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 0
  });

  onMount(() => {
    ref.addEventListener("mouseClicked", (e: CustomEvent<GeMouseEvent>) => console.info(e));
    ref.addEventListener("mouseMoved", (e: CustomEvent<GeMouseEvent>) => document.title = e.detail.rowIndex + "/" + e.detail.columnIndex);
    ref.addEventListener("tableReady", handleTableReady);
  });

  return (
    <div ref={ref}>
      <GuiexpertTable
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
