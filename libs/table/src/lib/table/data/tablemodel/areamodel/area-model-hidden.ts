import { AreaModelIf } from "./area-model.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { FilterFunction } from "../../common/filter-function";
import { SortItem } from "../../common/sort-item";
import { AreaIdent } from "../area-ident.type";

/**
 * An invisible model, which is used internally for hiding a header.
 */
export class AreaModelHidden implements AreaModelIf {

  rowSelectionModel: CheckboxModelIf<any> | undefined = undefined;

  constructor(
    public areaIdent: AreaIdent = "body"
  ) {
  }

  getRowCount(): number {
    return 0;
  }

  getValueAt(_rowIndex: number, _columnIndex: number): any {
    return "";
  }


  getTextValueAt(_rowIndex: number, _columnIndex: number): string {
    return "";
  }


  getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined {
    return undefined;
  }

  getRowHeight(_rowIndex: number): number {
    return 0;
  }

  getColspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[] {
    return [];
  }

  getCustomStyleAt(_rowIndex: number, _columnIndex: number): { [key: string]: string } | undefined {
    return undefined;
  }

  getRowspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  getRowByIndex(_idx: number): any {
    return undefined;
  }

  isRowCheckable(_rowIndex: number): boolean {
    return false;
  }

  isRowChecked(_rowIndex: number): CheckedType | undefined {
    return undefined;
  }

  setRowChecked(_rowIndex: number, _checked: boolean): void {
    // nothing
  }

  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    return "";
  }

  getMaxColspan(): number {
    return 0;
  }

  getMaxRowspan(): number {
    return 0;
  }


  getYPosByRowIndex(_rowIndex: number): number {
    return 0;
  }

  init(): void {
    // nothing
  }

  externalFilterChanged(_predictFn: FilterFunction<any>): void {
    // nothing
  }

  isFilterable(): boolean {
    return false;
  }

  doSort(_sortItems: SortItem[]): boolean {
    // do nothing
    return false;
  }

  isEditable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  setValue(_rowIndex: number, _columnIndex: number, _value: string): boolean {
    return false;
  }

  isSelectable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    // skip
  }

}

