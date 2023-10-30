import { ComponentRendererWrapper, GeMouseEventFn, GuiexpertTable } from "@guiexpert/react-table";
import { ColumnDefIf, TreeFactory, TableOptions, TableFactory } from "@guiexpert/table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import GenderRendererComponent from "./GenderRendererComponent";

export function App() {


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

  return (
    <>
      <GuiexpertTable
        tableModel={tableModel}
        tableOptions={new TableOptions}
        mouseClicked={console.info as GeMouseEventFn}
      />
    </>
  );
}

export default App;
