import { FocusType } from "./focus.type";
import { FocusModelIf } from "./focus-model.if";
import { EventFocusChangedListenerIf } from './event-focus-changed-listener.if';
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
