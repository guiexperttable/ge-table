import {AbstractAreaModel} from "./abstract-area-model";
import {TreeRow} from "../../common/tree-row";
import {ColumnDefIf} from "../column/column-def.if";
import {FilterFunction} from "../../common/filter-function";
import {SorterService} from "../../../service/sorter.service";
import {SortItem} from "../../common/sort-item";
import {isTreeRow, TreeFactory} from "@guiexpert/table";


export class AsyncBodyAreaModelObjectArray<T> extends AbstractAreaModel<T> {

  protected readonly properties: string[];
  protected sorterService: SorterService = new SorterService();

  protected cachedStartIndex: number = 0;
  protected cachedRows: T[] = [];

  constructor(
    protected readonly maxRowCount: number,
    public override defaultRowHeight: number,
    protected override columnDefs: ColumnDefIf[] = []
  ) {
    super('body', columnDefs, defaultRowHeight);
    this.cachedRows = [];
    this.properties = columnDefs.map(def => def.property);
  }

  setChunk(startIndex: number, chunk: T[]) {
    this.cachedStartIndex = startIndex;
    this.cachedRows = chunk;
  }

  getRowCount(): number {
    return this.maxRowCount ?? 0;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    if (rowIndex < this.cachedStartIndex || rowIndex > (this.cachedStartIndex + this.maxRowCount - 1)) {
      // TODO send -> server
      return '';
    }
    const property = this.properties[columnIndex];
    let t = this.cachedRows[rowIndex];
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
    return this.cachedRows;
  }

  getAllRows(): T[] {
    return this.cachedRows;
  }

  getRowHeight(_rowIndex: number): number {
    return this.defaultRowHeight;
  }

  override getRowByIndex(rowIndex: number): any {
    return this.cachedRows[rowIndex];
  }

  externalFilterChanged(predictFn: FilterFunction<any>): void {
    // TODO send -> server
  }

  override doSort(sortItems: SortItem[]): boolean {
    // TODO send -> server
    return false;
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

