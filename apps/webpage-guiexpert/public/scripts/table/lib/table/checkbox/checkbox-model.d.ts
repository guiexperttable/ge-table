import { CheckedType } from "../data/common/checked-type";
import { CheckboxModelIf } from "./checkbox-model.if";
export declare class CheckboxModel<T> implements CheckboxModelIf<T> {
    protected checkedRows: Array<T>;
    getCheckedRows(): T[];
    setCheckedRows(rows: T[]): void;
    addCheckedRows(rows: T[]): void;
    checkRow(row: T, sel: boolean): void;
    isRowChecked(row: T): CheckedType;
    checkAll(_rows: T[]): void;
    private removeSelectedRow;
}
