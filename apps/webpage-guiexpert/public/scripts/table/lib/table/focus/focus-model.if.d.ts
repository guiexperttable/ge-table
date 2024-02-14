import { EventFocusChangedListenerIf } from './event-focus-changed-listener.if';
export interface FocusModelIf {
    getEventFocusChangedListeners(): EventFocusChangedListenerIf[];
    addEventFocusChangedListener(listener: EventFocusChangedListenerIf): void;
    removeEventFocusChangedListener(listener: EventFocusChangedListenerIf): void;
    clear(): void;
    setFocus(rowIndex: number, columnIndex: number): void;
    hasFocus(rowIndex: number, columnIndex: number): boolean;
    getFocus(): [number, number];
    hasChanged(): boolean;
    clearChanged(): void;
}
