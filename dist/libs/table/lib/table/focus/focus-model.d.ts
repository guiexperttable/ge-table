import { FocusType } from "./focus.type";
import { FocusModelIf } from "./focus-model.if";
export declare class FocusModel implements FocusModelIf {
    selectionType: FocusType;
    protected rowIndex: number;
    protected columnIndex: number;
    protected changed: boolean;
    constructor(selectionType?: FocusType);
    clearChanged(): void;
    hasChanged(): boolean;
    clear(): void;
    setFocus(rowIndex: number, columnIndex: number): void;
    hasFocus(rowIndex: number, columnIndex: number): boolean;
    getFocus(): [number, number];
}
