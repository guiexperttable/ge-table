import { ComponentRendererWrapper, GuiexpertTable } from "@guiexpert/preact-table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import { ColumnDefIf, TableApi, TreeFactory } from "@guiexpert/table";
import GenderRendererComponent from "./GenderRendererComponent";

function App() {

  const tableOptions = createTableOptions();
  const rows: SimplePersonIf[] = createTableRows();
  const columnDefs: ColumnDefIf[] = createColumnDefs();
  applyBodyRenderer(columnDefs[2], new ComponentRendererWrapper(GenderRendererComponent));
  const tableModel = TableFactory.buildByTypedRowsParam({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 1
  });

  function tableReady(api: TableApi) {
    console.info("Table API:", api);
  }

  return (
    <GuiexpertTable
      tableOptions={tableOptions}
      tableModel={tableModel}
      mouseClicked={console.info}
      tableReady={tableReady}
    />
  );
}

export default App;
