import { FocusType } from "./focus.type";
import { FocusModelIf } from "./focus-model.if";
import { EventFocusChangedListenerIf } from './event-focus-changed-listener.if';
/**
 * The `FocusModel` class is an implementation of the `FocusModelIf` interface.
 * It provides core functionality to manage focus inside a data grid or spreadsheet-like structure.
 * The focus can be set to a specific cell or to the whole row.
 * This class also maintains a list of `EventFocusChangedListenerIf` instances and notifies them
 * whenever there is a change in focus.
 *
 * ## Instance Properties:
 *  - `selectionType: FocusType` — Specifies the type of selection that is currently in focus. It could be either a specific cell or the whole row. Defaults to "none".
 *  - `rowIndex: number` — Specifies the row index of the cell that is currently in focus.
 *  - `columnIndex: number` — Specifies the column index of the cell that is currently in focus.
 *  - `listenerArr: EventFocusChangedListenerIf[]` — An array of `EventFocusChangedListenerIf` instances. These instances will be triggered when the focus changes.
 *  - `changed` — A boolean flag to check if the focus has changed since the last trigger.
 *
 * ## Instance Methods:
 *  - `getEventFocusChangedListeners` — Returns an array of `EventFocusChangedListenerIf` instances.
 *  - `addEventFocusChangedListener(listener: EventFocusChangedListenerIf): void` — Adds a listener to the listeners array, if it's not already present.
 *  - `removeEventFocusChangedListener(listener: EventFocusChangedListenerIf): void` — Removes a listener from the listeners array.
 *  - `clear`: void  — Clears the current focus.
 *  - `setFocus(rowIndex: number, columnIndex: number): void` — Sets focus on a given cell.
 *  - `hasChanged(): boolean` — Checks if the focus has changed.
 *  - `clearChanged`: void — Clears the `changed` flag.
 *  - `hasFocus(rowIndex: number, columnIndex: number): boolean` — Checks if a given cell is in focus.
 *  - `getFocus(): [number, number]` — Returns the row and column indexes of the cell that's currently in focus.
 *
 * ## Usage Example
 *  ```typescript
 *
 * class MyFocusChangeListener implements EventFocusChangedListenerIf {
 *   onFocusChanged(model: FocusModelIf): void {
 *     console.log('Focus changed: ', model.getFocus());
 *   }
 * }
 * let focusModel = new FocusModel("cell");
 * focusModel.addEventFocusChangedListener(new MyFocusChangeListener());
 * focusModel.setFocus(2, 3);
 * ```
 *
 * @see [FocusType](./FocusType.md)
 * @see [EventFocusChangedListenerIf](./EventFocusChangedListenerIf.md)
 *
 * @class
 * @implements {FocusModelIf}
 */
export declare class FocusModel implements FocusModelIf {
    selectionType: FocusType;
    protected rowIndex: number;
    protected columnIndex: number;
    protected changed: boolean;
    private listenerArr;
    constructor(selectionType?: FocusType);
    getEventFocusChangedListeners(): EventFocusChangedListenerIf[];
    addEventFocusChangedListener(listener: EventFocusChangedListenerIf): void;
    removeEventFocusChangedListener(listener: EventFocusChangedListenerIf): void;
    fireChangeEvent(): void;
    clearChanged(): void;
    hasChanged(): boolean;
    clear(): void;
    setFocus(rowIndex: number, columnIndex: number): void;
    hasFocus(rowIndex: number, columnIndex: number): boolean;
    getFocus(): [number, number];
}
