import { CheckedType } from "../data/common/checked-type";
import { CheckboxModelIf } from "./checkbox-model.if";
import { TreeRowIf } from "../data/common/tree-row-if";
export declare class TreeCheckboxModel<T extends TreeRowIf<any>> implements CheckboxModelIf<T> {
    protected allRootNodes: T[];
    constructor(allRootNodes?: T[]);
    checkRow(row: T, sel: boolean): void;
    checkAll(_arr: T[]): void;
    getCheckedRows(): T[];
    isRowChecked(row: T): CheckedType;
    setCheckedRows(rows: T[]): void;
    addCheckedRows(rows: T[]): void;
    private autoCheckParent;
    private areAllChildrenChecked;
    private areAllChildrenUnchecked;
    private addSelectedRecursive;
}
