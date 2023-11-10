
import { ComponentRendererWrapper, GuiexpertTable } from "@guiexpert/preact-table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import {ColumnDefIf, GeMouseEvent, TableApi, TableFactory, TableOptionsIf} from "@guiexpert/table";
import GenderRendererComponent from "./GenderRendererComponent";
import {GeMouseEventFn, GeTableReadyEventFn} from "@guiexpert/react-table";

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

  const tableReady  = ((api: TableApi) => {
    console.info("Table API:", api);
  }) as GeTableReadyEventFn;

  const onMouseClicked  = ((evt: GeMouseEvent) => {
    console.info("Mouse:", evt);
  }) as GeMouseEventFn;


  return (
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={tableOptions}
      mouseClicked={onMouseClicked}
      tableReady={tableReady}
    />
  );
}

export default App;
