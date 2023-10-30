import { AreaModelIf } from "./area-model.if";
import { AreaIdent } from "../area-ident.type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { SortItem } from "../../common/sort-item";
import { FilterFunction } from "../../common/filter-function";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";
export declare class AreaModel implements AreaModelIf {
    areaIdent: AreaIdent;
    rowSelectionModel: CheckboxModelIf<any> | undefined;
    changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void;
    doSort(_sortItems: SortItem[]): boolean;
    externalFilterChanged<T>(_predictFn: FilterFunction<T>): void;
    getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined;
    getColspanAt(_rowIndex: number, _columnIndex: number): number;
    getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[];
    getCustomStyleAt(_rowIndex: number, _columnIndex: number): {
        [p: string]: string;
    } | undefined;
    getMaxColspan(): number;
    getMaxRowspan(): number;
    getRowByIndex(_rowIndex: number): any;
    getRowCount(): number;
    getRowHeight(_rowIndex: number): number;
    getRowspanAt(_rowIndex: number, _columnIndex: number): number;
    getTooltipAt(_rowIndex: number, _columnIndex: number): any;
    getValueAt(_rowIndex: number, _columnIndex: number): any;
    getYPosByRowIndex(_rowIndex: number): number;
    init(): void;
    isEditable(_rowIndex: number, _columnIndex: number): boolean;
    isFilterable(): boolean;
    isRowCheckable(_rowIndex: number): boolean;
    isRowChecked(_rowIndex: number): CheckedType | undefined;
    isSelectable(_rowIndex: number, _columnIndex: number): boolean;
    setRowChecked(_rowIndex: number, _checked: boolean): void;
    setValue(_rowIndex: number, _columnIndex: number, _value: any): boolean;
}
