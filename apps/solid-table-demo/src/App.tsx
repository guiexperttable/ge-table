import { ComponentRendererWrapper, GuiexpertSolidTable } from "@guiexpert/solid-table";
import { onMount } from "solid-js";

import { ColumnDefIf, GeMouseEvent, TableFactory } from "@guiexpert/table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import { default as GenderRendererComponent } from "./GenderRendererComponent";

const tableOptions = createTableOptions();
const rows: SimplePersonIf[] = createTableRows();
const columnDefs: ColumnDefIf[] = createColumnDefs();
applyBodyRenderer(columnDefs[2], new ComponentRendererWrapper(GenderRendererComponent));
const tableModel = TableFactory.buildByTypedRowsParam({
  rows,
  columnDefs,
  tableOptions,
  fixedLeftColumnCount: 0
});


function handleTableReady(api: any) {
  console.info("Table API:", api.detail);
}


function App() {
  let ref: any;

  onMount(() => {
    ref.addEventListener("mouseClicked", (e: CustomEvent<GeMouseEvent>) => console.info(e));
    ref.addEventListener("mouseMoved", (e: CustomEvent<GeMouseEvent>) => document.title = e.detail.rowIndex + "/" + e.detail.columnIndex);
    ref.addEventListener("tableReady", handleTableReady);
  });

  return (
    <div ref={ref}>
      <GuiexpertSolidTable
        tableModel={tableModel}
        tableOptions={tableOptions} />
    </div>
  );
}

export default App;
