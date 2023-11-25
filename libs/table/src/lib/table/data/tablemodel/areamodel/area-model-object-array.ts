import { AbstractAreaModel } from "./abstract-area-model";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
import {isTreeRow} from "../../../instanceof-workaround";

export class AreaModelObjectyArray<T> extends AbstractAreaModel<T> {

  protected readonly properties: string[];
  protected filteredRows: T[];
  protected sorterService: SorterService = new SorterService();

  constructor(
    public override areaIdent: AreaIdent,
    protected readonly rows: T[],
    public override defaultRowHeight: number,
    protected override columnDefs: ColumnDefIf[] = []
  ) {
    super(areaIdent, columnDefs, defaultRowHeight);
    this.filteredRows = [...rows];
    this.properties = columnDefs.map(def => def.property);
  }

  getRowCount(): number {
    return this.filteredRows?.length ?? 0;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    const property = this.properties[columnIndex];
    let t = this.filteredRows[rowIndex];

    if (isTreeRow(t)) {
      // @ts-ignore
      t = t.data;
    }
    if (t) {
      return this.getValueByT(t, property);
    }
    return "";
  }

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
    // @ts-ignore
    return t[property];
  }

  override changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    this.arrayMove(this.properties, sourceColumnIndex, targetColumnIndex);
    super.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
  }

  protected genericFlatTableSortComparator(property: string, f: number) {
    return (a: T, b: T) => {
      const va = this.getValueByT(a, property);
      const vb = this.getValueByT(b, property);
      return this.sorterService.genericSortComparator(va, vb, f);
    };
  }


  private getPropertyValue(o: any, props: string[]): any {
    const prop = props.shift();
    // @ts-ignore
    let o2 = o[prop];
    if (o2 && props.length) {
      return this.getPropertyValue(o2, props);
    }
    return o2;
  }
}

