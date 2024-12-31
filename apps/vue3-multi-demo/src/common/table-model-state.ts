import { TableModelIf, TableOptionsIf } from '@guiexpert/table';

export interface TableModelState {
  tableModel: TableModelIf|undefined,
  tableOptions: TableOptionsIf|undefined;
}