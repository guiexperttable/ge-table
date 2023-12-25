import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';
import { CopyServiceIf } from './copy-service.if';
import { CellRange } from '../data/common/cell-range';


export class CopyService implements CopyServiceIf {

  public static columnSeparatorChar = '\t';
  public static rowSeparatorChar = '\n';

  createContent(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf,
    focusModel: FocusModelIf
  ): Promise<string> {

    return new Promise<string>((resolve, reject) => {

      if (selectionModel?.hasSelection()) {
        const range: CellRange | undefined = this.mergeRanges(selectionModel.getRanges());

        if (range) {
          range.c2 = Math.min(range.c2, tableModel.getColumnCount() - 1);
          range.r2 = Math.min(range.r2, tableModel.getBodyModel().getRowCount() - 1);
          const content: Array<string> = [];

          for (let rowIndex = range.r1; rowIndex <= range.r2; rowIndex++) {
            const rowData: string[] = [];
            for (let columnIndex = range.c1; columnIndex <= range.c2; columnIndex++) {
              const cellValue = selectionModel.isSelected(rowIndex, columnIndex) ? tableModel.getBodyModel().getValueAt(rowIndex, columnIndex) : '';
              rowData.push(cellValue);
            }
            content.push(rowData.join(CopyService.columnSeparatorChar));
          }
          return resolve(content.join(CopyService.rowSeparatorChar));
        }
      }

      if (focusModel) {
        const [r, c] = focusModel.getFocus();
        const content = String(tableModel.getBodyModel().getValueAt(r, c));
        return resolve(content);
      }

      reject('Cannot copy, neither selection nor focus defined.');
    });
  }

  copyContent(content: string): Promise<void> {
    return navigator.clipboard.writeText(content);
  }

  private mergeRanges(ranges: CellRange[]): CellRange | undefined {
    let mergedRange: CellRange | undefined;
    for (const range of ranges) {
      if (!mergedRange) {
        mergedRange = new CellRange(range.r1, range.c1, range.r2, range.c2);
      } else {
        mergedRange.r1 = Math.min(mergedRange.r1, range.r1);
        mergedRange.c1 = Math.min(mergedRange.c1, range.c1);
        mergedRange.r2 = Math.max(mergedRange.r2, range.r2);
        mergedRange.c2 = Math.max(mergedRange.c2, range.c2);
      }
    }
    return mergedRange;
  }


}
