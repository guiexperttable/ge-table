import { SelectionModel } from './selection-model';
import { ObjectArrayHolderIf } from '../data/tablemodel/areamodel/object-array-holder.if';
/**
 * Class representing a multi-row selection model.
 * @extends SelectionModel
 */
export declare class MultiRowsSelectionModel<T> extends SelectionModel {
    model: ObjectArrayHolderIf<T>;
    constructor(model: ObjectArrayHolderIf<T>);
    /**
     * Retrieves the selected rows from an array of all table rows.
     *
     * @param {T[]} allrows - The array of all rows from the table model.
     * @returns {T[]} - The selected rows from the given array.
     */
    getSelectedRowItems(allrows: T[]): T[];
    /**
     * Selects the specified row.
     *
     * @param {number} rowIndex - The index of the row to be selected.
     */
    selectRow(rowIndex: number): void;
    /**
     * Unselects the specified row.
     *
     * @param {number} rowIndex - The index of the row to be unselected.
     * @return {void}
     */
    unselectRow(rowIndex: number): void;
    /**
     * Toggles the selection of items based on current selection state.
     */
    toggleSelection(): void;
    /**
     * Toggles the selection of filtered rows.
     * If all rows are currently selected, clears the selection.
     * If no rows are currently selected, selects all filtered rows.
     * Otherwise, toggles the selection of all filtered rows.
     *
     * @return {void}
     */
    toggleFilteredRowsSelection(): void;
    /**
     * Toggles the selection state of a row.
     *
     * @param {number} rowIndex - The index of the row to toggle.
     *
     * @return {void}
     */
    toggleRow(rowIndex: number): void;
}
