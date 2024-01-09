import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';
import { CopyServiceIf } from './copy-service.if';
import { CellRange } from '../data/common/cell-range';


export class CopyService implements CopyServiceIf {

  public static columnSeparatorChar = '\t';
  public static rowSeparatorChar = '\n';

  /**
   * Returns the content to be copied based on the provided table model, selection model, and focus model.
   *
   * @param {TableModelIf} tableModel - The table model for data retrieval.
   * @param {SelectionModelIf} selectionModel - The selection model to determine the selected range.
   * @param {FocusModelIf} focusModel - The focus model to determine the focused cell.
   * @return {Promise<string>} A promise that resolves to the copied content as a string.
   * @throws {string} Throws an error if neither selection nor focus is defined.
   */
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
              const cellValue = selectionModel.isSelected(rowIndex, columnIndex) ? tableModel.getBodyModel().getTextValueAt(rowIndex, columnIndex) : '';
              rowData.push(cellValue);
            }
            content.push(rowData.join(CopyService.columnSeparatorChar));
          }
          return resolve(content.join(CopyService.rowSeparatorChar));
        }
      }

      if (focusModel) {
        const [r, c] = focusModel.getFocus();
        const content = tableModel.getBodyModel().getTextValueAt(r, c);
        return resolve(content);
      }

      reject('Cannot copy, neither selection nor focus defined.');
    });
  }

  /**
   * Copy the provided content to the clipboard.
   *
   * @param {string} content - The content to be copied.
   * @return {Promise<void>} A promise that resolves when the content has been successfully copied to the clipboard.
   */
  copyContent(content: string): Promise<void> {
    return navigator.clipboard.writeText(content);
  }

  /**
   * Asynchronously copies the content of a table to the clipboard.
   *
   * @param {TableModelIf} tableModel - The table model to copy from.
   * @param {SelectionModelIf} selectionModel - The selection model of the table.
   * @param {FocusModelIf} focusModel - The focus model of the table.
   * @returns {Promise<string>} A promise that resolves with the copied text if successful, or rejects if an error occurs.
   */
  copyToClipboard(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf,
    focusModel: FocusModelIf
  ) {
    return new Promise<string>((resolve, reject) => {
      this
        .createContent(
          tableModel,
          selectionModel,
          focusModel
        )
        .then(text => {
          if (text) {
            this
              .copyContent(text)
              .then(_ => {
                resolve(text);
              })
              .catch(_ => {
                reject();
              });
          }
        })
        .catch(_ => {
          reject();
        });
    });
  }

  /**
   * Merges an array of CellRanges into a single merged CellRange.
   *
   * @param {CellRange[]} ranges - The array of CellRanges to be merged.
   * @return {CellRange | undefined} - The merged CellRange, or undefined if the ranges array is empty.
   */
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
