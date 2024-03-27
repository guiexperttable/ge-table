import { CellRange } from "../data/common/cell-range";
import { ExtendedSelectionType, SelectionMode } from './selection.type';
import { SelectionModelIf } from "./selection-model.if";
import { EventSelectionChangedListenerIf } from './event-selection-changed-listener.if';
/**
 * `SelectionModel` is a class that manages the various modes and types of selections within a grid.
 * It supports basic modes like single cell, row, column, and range selections, as well as advanced mode like negative ranges.
 * Events related to selections, such as changes to a selection, are propagated to listeners through the EventSelectionChangedListener interface.
 *
 * The class extends `SelectionModelIf` interface and defines additional methods and fields specific to its functionality.
 *
 * @property {ExtendedSelectionType} selectionType - The type of selection being used. It's of type ExtendedSelectionType. Default: "none"
 * @property {SelectionMode} selectionMode - The mode of selection being used. It's of type SelectionMode. Default: "single"
 * @property {Array} ranges - This contains all the current selected cell ranges in the grid.
 * @property {Array} negativeRanges - This contains all the current negative cell ranges in the grid.
 * @property {boolean} allSelected - This is a flag to indicate whether all cells in the grid are selected or not.
 * @property {boolean} silent - This is a flag to suppress the firing of selection change events.
 * @property {Array} listenerArr - This contains all the listeners for selection change events.
 *
 * @method constructor(selectionType?: ExtendedSelectionType, selectionMode?: SelectionMode) - Constructs a new instance of the SelectionModel class.
 * @method getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[] - Returns the array of registered event selection changed listeners.
 * @method addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Adds an event selection changed listener to the array.
 * @method removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Removes a specific event selection changed listener if it exists.
 * @method fireChangeEvent(): void - Fires a change event on each registered listener when a selection change occurs. Does nothing if the silent property is true.
 * @method firstClick(rowIndex: number, columnIndex: number): void - Initiates a selection operation at the specified coordinates. The nature of the operation is determined by the current selection type and mode.
 * @method getSelectionCount(rowIndex: number, columnIndex: number): number - Returns the selection count of current ranges
 * @method isInNegativeRange(rowIndex: number, columnIndex: number): boolean - Verifies if any point (cell) is in negative range or not.
 * @method getRanges() - Returns the selection ranges
 * @method clear(): void - Clears all selections in all ranges and resets allSelected and negativeRanges arrays.
 * @method hasSelection(): boolean - Checks whether there is any selection. Returns true if yes, false if no.
 * @method hasNoSelection(): boolean - Checks whether there is no selection. Returns true if yes, false if no.
 * @method getMergedRowIndices(): number[] - Gets the array of merged row indices.
 * @method selectAll(): void - Selects all selectable entities.
 * @method isAllSelected() - Checks if all selectable entities are selected.
 * @method addSelection(range: CellRange): void - Adds a certain range to the selection.
 * @method removeSelection(range: CellRange): void - Removes a certain range from the selection.
 * @method togglePoint(row: number, col: number): void - Toggles the selection state of a point at the specified row and column in a grid.
 * @method isSelected(row: number, col: number): boolean - Checks if a specific cell in a grid is selected.
 * @method addRange(range: CellRange): void - Adds a range of cells to the selection.
 */
export declare class SelectionModel implements SelectionModelIf {
    selectionType: ExtendedSelectionType;
    selectionMode: SelectionMode;
    protected ranges: CellRange[];
    protected negativeRanges: CellRange[];
    protected allSelected: boolean;
    protected silent: boolean;
    private listenerArr;
    constructor(selectionType?: ExtendedSelectionType, selectionMode?: SelectionMode);
    getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[];
    addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void;
    removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void;
    fireChangeEvent(): void;
    firstClick(rowIndex: number, columnIndex: number): void;
    getSelectionCount(rowIndex: number, columnIndex: number): number;
    isInNegativeRange(rowIndex: number, columnIndex: number): boolean;
    getRanges(): CellRange[];
    clear(): void;
    hasSelection(): boolean;
    hasNoSelection(): boolean;
    /**
     * Retrieves the merged row indices from the given range selection.
     *
     * @returns {number[]} Array of merged row indices
     */
    getMergedRowIndices(): number[];
    selectAll(): void;
    isAllSelected(): boolean;
    addSelection(range: CellRange): void;
    removeSelection(range: CellRange): void;
    togglePoint(row: number, col: number): void;
    isSelected(row: number, col: number): boolean;
    protected addRange(range: CellRange): void;
}
