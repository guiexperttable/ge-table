import { CrudTableModelFactory, TableModelIf, TableOptionsIf } from '@guiexpert/table';

export interface CrudTableModelState {
  tableModel: TableModelIf|undefined,
  tableOptions: TableOptionsIf|undefined;
  crudTableModelFactory: CrudTableModelFactory|undefined,
}