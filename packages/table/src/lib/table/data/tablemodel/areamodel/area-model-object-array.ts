/* eslint @typescript-eslint/no-explicit-any: "off" */
import { AbstractAreaModel } from "./abstract-area-model";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
import {isTreeRow} from "../../../instanceof-workaround";
import { ObjectArrayHolderIf } from './object-array-holder.if';

/**
 * Represents an area model defined by an object array.
 * @template T - The type of objects in the array
 */
export class AreaModelObjectArray<T>
  extends AbstractAreaModel<T>
  implements ObjectArrayHolderIf<T> {

  public focusedRowIndex: number = 0;

  protected readonly properties: string[];
  protected filteredRows: T[];
  protected sorterService: SorterService = new SorterService();

  constructor(
    public override areaIdent: AreaIdent,
    protected rows: T[],
    public override defaultRowHeight: number,
    protected override columnDefs: ColumnDefIf[] = []
  ) {
    super(areaIdent, columnDefs, defaultRowHeight);
    this.filteredRows = [...rows];
    this.properties = columnDefs.map(def => def.property);
  }

  setRows(rows: T[]) {
    this.rows = rows;
    this.filteredRows = [...rows];
  }

  filterRowsByPredict(predict:(row: T)=>boolean) {
    this.rows = this.rows.filter(predict);
    this.filteredRows = this.filteredRows.filter(predict);
  }

  getRowCount(): number {
    return this.filteredRows?.length ?? 0;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    const property = this.properties[columnIndex];
    let t = this.filteredRows[rowIndex];

    if (isTreeRow(t)) {
      // @ts-expect-error: we access an unknown property name:
      t = t.data;
    }
    if (t) {
      return this.getValueByT(t, property);
    }
    return "";
  }


  /**
   * Retrieves the filtered and sorted rows from the dataset.
   * These rows are used for rendering the table.
   *
   * @return {T[]} An array containing the filtered (and sorted) rows.
   */
  getFilteredRows(): T[] {
    return this.filteredRows;
  }

  getAllRows(): T[] {
    return this.rows;
  }

  getRowHeight(_rowIndex: number): number {
    return this.defaultRowHeight;
  }

  override getRowByIndex(rowIndex: number): any {
    return this.filteredRows[rowIndex];
  }

  externalFilterChanged(predictFn: FilterFunction<any>): void {
    this.filteredRows = (this.rows ? this.rows.filter(predictFn) : []);
  }

  override doSort(sortItems: SortItem[]): boolean {
    for (const sortItem of sortItems) {
      const { columnIndex, sortState } = sortItem;
      const f = sortState === "asc" ? 1 :
        sortState === "desc" ? -1 : 0;
      const property = this.properties[columnIndex];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(property, f));
    }
    return true;
  }

  getValueByT(t: T, property: string) {
    if (property.includes(".")) {
      return this.getPropertyValue(t, property.split("."));
    }
    // @ts-expect-error: we access an unknown property name:
    return t[property];
  }

  override changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    this.arrayMove(this.properties, sourceColumnIndex, targetColumnIndex);
    super.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
  }

  override getCustomClassesAt(rowIndex: number, _columnIndex: number): string[] {
    const ret: string[] = super.getCustomClassesAt(rowIndex, _columnIndex);

    const row = this.getRowByIndex(rowIndex);
    if (row.selected) {
      ret.push('ge-selected-row');
    }
    if (this.focusedRowIndex === rowIndex) {
      ret.push('ge-focused-row');
    }
    return ret;
  }

  protected genericFlatTableSortComparator(property: string, f: number): (a:T,b:T)=>number {
    // Find the column definition for the property
    const columnDef = this.columnDefs.find(def => def.property === property);

    return (a: T, b: T) => {
      const va = this.getValueByT(a, property);
      const vb = this.getValueByT(b, property);

      // If the column has a custom sortComparator, use it
      if (columnDef?.sortComparator) {
        return f * columnDef.sortComparator(va, vb, a, b, f);
      }

      // Otherwise, use the default generic comparator
      return this.sorterService.genericSortComparator(va, vb, f);
    };
  }


  private getPropertyValue(o: any, props: string[]): any {
    const prop = props.shift();
    // @ts-expect-error: we access an unknown property name:
    const o2 = o[prop];
    if (o2 && props.length) {
      return this.getPropertyValue(o2, props);
    }
    return o2;
  }
}
