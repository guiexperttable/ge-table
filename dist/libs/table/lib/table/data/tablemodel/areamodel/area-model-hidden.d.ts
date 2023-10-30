import { AreaModelIf } from "./area-model.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { FilterFunction } from "../../common/filter-function";
import { SortItem } from "../../common/sort-item";
import { AreaIdent } from "../area-ident.type";
/**
 * An unvisible model, which is used internally for hiding a header.
 */
export declare class AreaModelHidden implements AreaModelIf {
    areaIdent: AreaIdent;
    rowSelectionModel: CheckboxModelIf<any> | undefined;
    constructor(areaIdent?: AreaIdent);
    getRowCount(): number;
    getValueAt(_rowIndex: number, _columnIndex: number): any;
    getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined;
    getRowHeight(_rowIndex: number): number;
    getColspanAt(_rowIndex: number, _columnIndex: number): number;
    getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[];
    getCustomStyleAt(_rowIndex: number, _columnIndex: number): {
        [key: string]: string;
    } | undefined;
    getRowspanAt(_rowIndex: number, _columnIndex: number): number;
    getRowByIndex(_idx: number): any;
    isRowCheckable(_rowIndex: number): boolean;
    isRowChecked(_rowIndex: number): CheckedType | undefined;
    setRowChecked(_rowIndex: number, _checked: boolean): void;
    getTooltipAt(_rowIndex: number, _columnIndex: number): any;
    getMaxColspan(): number;
    getMaxRowspan(): number;
    getYPosByRowIndex(_rowIndex: number): number;
    init(): void;
    externalFilterChanged(_predictFn: FilterFunction<any>): void;
    isFilterable(): boolean;
    doSort(_sortItems: SortItem[]): boolean;
    isEditable(_rowIndex: number, _columnIndex: number): boolean;
    setValue(_rowIndex: number, _columnIndex: number, _value: string): boolean;
    isSelectable(_rowIndex: number, _columnIndex: number): boolean;
    changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void;
}
