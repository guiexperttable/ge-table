import { AreaModelIf } from "./area-model.if";
import { AreaIdent } from "../area-ident.type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { SortItem } from "../../common/sort-item";
import { FilterFunction } from "../../common/filter-function";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { CheckedType } from "../../common/checked-type";


/**
 * Represents the area model (header, body or footer) for the table.
 */
export class AreaModel implements AreaModelIf {

  areaIdent: AreaIdent = "body";
  rowSelectionModel: CheckboxModelIf<any> | undefined = undefined;

  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    // ignore
  }

  doSort(_sortItems: SortItem[]): boolean {
    return false;
  }

  sort(_compareFn?: (a: any, b: any) => number):void {
    // ignore
  }

  externalFilterChanged<T>(_predictFn: FilterFunction<T>): void {
    // ignore
  }

  getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined {
    return undefined;
  }

  getColspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[] {
    return [];
  }

  getCustomStyleAt(_rowIndex: number, _columnIndex: number): { [p: string]: string } | undefined {
    return undefined;
  }

  getMaxColspan(): number {
    return 0;
  }

  getMaxRowspan(): number {
    return 0;
  }

  getRowByIndex(_rowIndex: number): any {
  }

  getRowCount(): number {
    return 0;
  }

  getRowHeight(_rowIndex: number): number {
    return 0;
  }

  getRowspanAt(_rowIndex: number, _columnIndex: number): number {
    return 0;
  }

  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    return undefined;
  }

  getValueAt(_rowIndex: number, _columnIndex: number): any {
    return undefined;
  }

  getTextValueAt(_rowIndex: number, _columnIndex: number): string {
    return '';
  }

  getYPosByRowIndex(_rowIndex: number): number {
    return 0;
  }

  init(): void {
    // ignore
  }

  isEditable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  isFilterable(): boolean {
    return false;
  }

  isRowCheckable(_rowIndex: number): boolean {
    return false;
  }

  isRowChecked(_rowIndex: number): CheckedType | undefined {
    return undefined;
  }

  isSelectable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  setRowChecked(_rowIndex: number, _checked: boolean): void {
    // ignore
  }

  setValue(_rowIndex: number, _columnIndex: number, _value: any): boolean {
    return false;
  }

}
