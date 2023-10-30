import { CellRendererIf } from "../../../renderer/cell-render.if";
import { AreaModelIf } from "./area-model.if";
import { CheckedType } from "../../common/checked-type";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";
import { CheckboxModelIf } from "../../../checkbox/checkbox-model.if";
import { FilterFunction } from "../../common/filter-function";
import { SortItem } from "../../common/sort-item";
import { HasDefaultRowHeightIf } from "./has-default-row-height-if";


export abstract class AbstractAreaModel<T> implements AreaModelIf, HasDefaultRowHeightIf {

  public rowSelectionModel: CheckboxModelIf<any> | undefined = undefined;
  protected cellRenderers: (CellRendererIf | undefined)[];
  protected yPositions: number[] = [];

  constructor(
    public areaIdent: AreaIdent,
    protected columnDefs: ColumnDefIf[] = [],
    public defaultRowHeight: number = -1
  ) {
    this.cellRenderers = columnDefs.map(def => def.rendererMap[areaIdent]);
  }


  abstract getRowCount(): number;

  abstract getValueAt(rowIndex: number, columnIndex: number): any;

  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    return "";
  };

  abstract getRowHeight(rowIndex: number): number;

  getCellRenderer(_rowIndex: number, columnIndex: number): CellRendererIf | undefined {
    if (columnIndex < this.cellRenderers.length) {
      return this.cellRenderers[columnIndex];
    }
    return undefined;
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

  getRowByIndex(_rowIndex: number): any {
    return undefined;
  }

  isRowCheckable(_rowIndex: number): boolean {
    return true;
  }

  isRowChecked(rowIndex: number): CheckedType | undefined {
    const row = this.getRowByIndex(rowIndex);
    return this.rowSelectionModel?.isRowChecked(row);
  }

  setRowChecked(rowIndex: number, checked: boolean): void {
    if (this.rowSelectionModel) {
      const row = this.getRowByIndex(rowIndex);
      this.rowSelectionModel.checkRow(row, checked);
    }
  }

  getMaxColspan(): number {
    return 31;
  }

  getMaxRowspan(): number {
    return 31;
  }


  getYPosByRowIndex(rowIndex: number): number {
    if (this.defaultRowHeight > 0) {
      return this.defaultRowHeight * rowIndex;
    }
    return this.yPositions[rowIndex];
  }


  init() {
    if (!this.yPositions.length && this.getRowCount() !== undefined) {
      if (this.defaultRowHeight === -1) {
        this.calcYPositions();
      }
    }
  }

  abstract externalFilterChanged<T>(predictFn: FilterFunction<T>): void ;

  isFilterable(): boolean {
    return this.areaIdent === "body";
  }

  doSort(_sortItems: SortItem[]): boolean {
    // do nothing
    return false;
  }

  isEditable(_rowIndex: number, columnIndex: number): boolean {
    if (this.columnDefs
      && columnIndex < this.columnDefs.length
      && this.columnDefs[columnIndex].editable) {
      // @ts-ignore
      return this.columnDefs[columnIndex].editable();
    }
    return false;
  }

  setValue(rowIndex: number, columnIndex: number, value: any): boolean {
    const editInputPipe = this.columnDefs[columnIndex]?.editInputPipe;
    if (editInputPipe) {
      value = editInputPipe(value, rowIndex, columnIndex);
    }
    const row: T = this.getRowByIndex(rowIndex);
    const property = this.columnDefs[columnIndex].property;
    if (property.includes(".")) {
      return this.setPropertyValue(row, property.split("."), value);
    }
    // @ts-ignore
    row[property] = value;
    return true;
  }

  isSelectable(_rowIndex: number, _columnIndex: number): boolean {
    return true;
  }

  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    //  not this! this.arrayMove(this.columnDefs...)
    this.arrayMove(this.cellRenderers, sourceColumnIndex, targetColumnIndex);
  }

  protected setPropertyValue(o: any, props: string[], value: any): boolean {
    const prop = props.shift();
    if (prop) {
      // @ts-ignore
      let o2 = o[prop];
      if (o2 && props.length) {
        return this.setPropertyValue(o2, props, value);

      } else {
        o[prop] = value;
        return true;
      }
    }
    return false;
  }

  protected arrayMove(arr: any[], fromIndex: number, toIndex: number) {
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
  }

  private calcYPositions() {
    const rowCount = this.getRowCount();
    this.yPositions = new Array(rowCount + 1);
    this.yPositions[0] = 0;
    for (let i = 0; i < rowCount; i++) {
      this.yPositions[i + 1] = this.getRowHeight(i) + this.yPositions[i];
    }
  }

}


