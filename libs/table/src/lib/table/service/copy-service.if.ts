import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';


export interface CopyServiceIf {

  createContent(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf | undefined,
    focusModel: FocusModelIf | undefined
  ): Promise<string>;

  copyContent(content: string): Promise<void>;
}