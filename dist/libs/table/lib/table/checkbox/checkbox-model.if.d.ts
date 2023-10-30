import { CheckedType } from "../data/common/checked-type";
export interface CheckboxModelIf<T> {
    getCheckedRows(): T[];
    setCheckedRows(value: T[]): void;
    addCheckedRows(value: T[]): void;
    checkRow(row: T, check: boolean): void;
    isRowChecked(row: T): CheckedType;
    checkAll(value: T[]): void;
}
