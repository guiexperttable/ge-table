import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';
import { CopyServiceIf } from './copy-service.if';


export class CopyService implements CopyServiceIf {

    public static columnSeparatorChar = '\t';
    public static rowSeparatorChar = '\n';

  createContent(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf,
    focusModel: FocusModelIf
  ): Promise<string> {
    //TODO hier gehts weiter
    const cs = CopyService.columnSeparatorChar;
    const rs = CopyService.rowSeparatorChar;
    console.info(cs, rs);
    console.info(selectionModel);
    console.info(selectionModel);
    console.info(tableModel);
    console.info(focusModel);
    return new Promise<string>((resolve, _reject) => {
      resolve('');
    });
  }

  copyContent(content: string): Promise<void> {
    return navigator.clipboard.writeText(content);
  }


}
