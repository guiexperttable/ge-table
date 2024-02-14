import { CellRange } from "../data/common/cell-range";
import { ExtendedSelectionType, SelectionMode } from './selection.type';
import { SelectionModelIf } from "./selection-model.if";
import { EventSelectionChangedListenerIf } from './event-selection-changed-listener.if';
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
