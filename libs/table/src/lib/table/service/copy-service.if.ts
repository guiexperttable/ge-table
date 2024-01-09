import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';


export interface CopyServiceIf {

  /**
   * Copies the selected data from the table to the clipboard.
   *
   * @param {TableModelIf} tableModel - The table model containing the data.
   * @param {SelectionModelIf | undefined} selectionModel - The selection model containing the selected rows/columns.
   * @param {FocusModelIf | undefined} focusModel - The focus model containing the focused cell.
   *
   * @return {Promise<string>} - A promise that resolves with the copied data as a string.
   */
  copyToClipboard(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf | undefined,
    focusModel: FocusModelIf | undefined
  ): Promise<string>;

  /**
   * Creates content based on the provided table model, selection model, and focus model.
   *
   * @param {TableModelIf} tableModel - The table model representing the data.
   * @param {SelectionModelIf | undefined} selectionModel - The selection model for the table.
   * @param {FocusModelIf | undefined} focusModel - The focus model for the table.
   *
   * @return {Promise<string>} - A promise that resolves to the generated content as a string.
   */
  createContent(
    tableModel: TableModelIf,
    selectionModel: SelectionModelIf | undefined,
    focusModel: FocusModelIf | undefined
  ): Promise<string>;

  /**
   * Copies the content to a specified location.
   *
   * @param {string} content - The content to be copied.
   * @return {Promise<void>} - A Promise that resolves when the content is successfully copied.
   */
  copyContent(content: string): Promise<void>;
}