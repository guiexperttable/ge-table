import { TableModelIf } from '../data/tablemodel/table-model.if';
import { SelectionModelIf } from '../selection/selection-model.if';
import { FocusModelIf } from '../focus/focus-model.if';
import { CopyServiceIf } from './copy-service.if';
export declare class CopyService implements CopyServiceIf {
    static columnSeparatorChar: string;
    static rowSeparatorChar: string;
    /**
     * Returns the content to be copied based on the provided table model, selection model, and focus model.
     *
     * @param {TableModelIf} tableModel - The table model for data retrieval.
     * @param {SelectionModelIf} selectionModel - The selection model to determine the selected range.
     * @param {FocusModelIf} focusModel - The focus model to determine the focused cell.
     * @return {Promise<string>} A promise that resolves to the copied content as a string.
     * @throws {string} Throws an error if neither selection nor focus is defined.
     */
    createContent(tableModel: TableModelIf, selectionModel: SelectionModelIf, focusModel: FocusModelIf): Promise<string>;
    /**
     * Copy the provided content to the clipboard.
     *
     * @param {string} content - The content to be copied.
     * @return {Promise<void>} A promise that resolves when the content has been successfully copied to the clipboard.
     */
    copyContent(content: string): Promise<void>;
    /**
     * Asynchronously copies the content of a table to the clipboard.
     *
     * @param {TableModelIf} tableModel - The table model to copy from.
     * @param {SelectionModelIf} selectionModel - The selection model of the table.
     * @param {FocusModelIf} focusModel - The focus model of the table.
     * @returns {Promise<string>} A promise that resolves with the copied text if successful, or rejects if an error occurs.
     */
    copyToClipboard(tableModel: TableModelIf, selectionModel: SelectionModelIf, focusModel: FocusModelIf): Promise<string>;
    /**
     * Merges an array of CellRanges into a single merged CellRange.
     *
     * @param {CellRange[]} ranges - The array of CellRanges to be merged.
     * @return {CellRange | undefined} - The merged CellRange, or undefined if the ranges array is empty.
     */
    private mergeRanges;
}
