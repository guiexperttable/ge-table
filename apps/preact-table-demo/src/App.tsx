import { ComponentRendererWrapper, GuiexpertTable } from "@guiexpert/preact-table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import {ColumnDefIf, TableApi, TableFactory, TableOptionsIf} from "@guiexpert/table";
import GenderRendererComponent from "./GenderRendererComponent";

function App() {

  const tableOptions: TableOptionsIf = createTableOptions();
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

  const tableProps = {
    tableModel,
    tableOptions,
    mouseClicked:console.info,
    tableReady
  };

  return (
    <GuiexpertTable
      {...tableProps}
    />
  );
}

export default App;
