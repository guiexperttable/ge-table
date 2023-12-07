import { TreeRow } from "../../common/tree-row";
import { TreeRowService } from "../../../service/tree-row.service";
import { AbstractAreaModel } from "./abstract-area-model";
import { AreaIdent } from "../area-ident.type";
import { ColumnDefIf } from "../column/column-def.if";
import { FilterFunction } from "../../common/filter-function";
import { SorterService } from "../../../service/sorter.service";
import { SortItem } from "../../common/sort-item";
import {TreeRowIf} from "../../common/tree-row-if";

/**
 * Represents a  tree-based table model.
 * Extends the AbstractAreaModel class.
 *
 * @template S - The type of the row data.
 */
export class AreaModelTree<S> extends AbstractAreaModel<TreeRow<S>> {

  public type = 'AreaModelTree';

  protected readonly properties: string[];
  protected sorterService: SorterService = new SorterService();

  private readonly service = new TreeRowService();
  private filteredFlattenRows: TreeRowIf<S>[];
  private flattenRows: TreeRowIf<S>[];
  private lastPredictFn?: FilterFunction<any>;

  constructor(
    public override areaIdent: AreaIdent,
    public readonly rows: TreeRowIf<S>[],
    public override  defaultRowHeight: number,
    protected override columnDefs: ColumnDefIf[] = []
  ) {
    super(areaIdent, columnDefs, defaultRowHeight);
    this.properties = columnDefs.map(def => def.property);
    this.flattenRows = this.service.flattenTree(rows);
    this.filteredFlattenRows = [...this.flattenRows];
  }

  override changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    //  not this! this.arrayMove(this.columnDefs...)
    this.arrayMove(this.properties, sourceColumnIndex, targetColumnIndex);
    super.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
  }

  recalcVisibleTreeRows() {
    this.filteredFlattenRows = this.service.flattenTree(this.rows);
  }

  getFilteredFlattenRows(): TreeRowIf<S>[] {
    return this.filteredFlattenRows;
  }

  getRowCount(): number {
    let n = 0;
    for (const r of this.filteredFlattenRows) {
      if (this.service.isVisible(r)) {
        n++;
      }
    }
    return n;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    const row = this.getRowByIndex(rowIndex);
    if (row) {
      const prop = this.properties[columnIndex];
      if (prop) {
        if (prop.includes(".")) {
          return this.getPropertyValue(row.data, prop.split("."));
        }
        // @ts-ignore
        return row.data[prop];
      }
    }
    return "";
  }

  getRowHeight(_rowIndex: number): number {
    return this.defaultRowHeight;
  }

  override getCustomClassesAt(rowIndex: number, _columnIndex: number): string[] {
    const row = this.filteredFlattenRows[rowIndex];
    return ["ge-table-tree-cell", "ge-table-tree-deep-" + row.deep];
  }

  override getRowByIndex(idx: number): TreeRowIf<S> | undefined {
    return this.filteredFlattenRows[idx];
  }

  getValueByT(t: S, property: string) {
    if (property.includes(".")) {
      return this.getPropertyValue(t, property.split("."));
    }
    // @ts-ignore
    return t[property];
  }

  externalFilterChanged<S>(predictFn: FilterFunction<S>): void {
    this.lastPredictFn = predictFn;
    this.doFiltering();
  }

  override doSort(sortItems: SortItem[]): boolean {
    const { columnIndex, sortState } = sortItems[sortItems.length - 1];
    const f = sortState === "asc" ? 1 :
      sortState === "desc" ? -1 : 0;

    const property = this.properties[columnIndex];
    this.treeSort(this.rows, property, f);

    this.flattenRows = this.service.flattenTree(this.rows);
    this.filteredFlattenRows = [...this.flattenRows];
    return true;
  }

  toggleExpandCollapseAll(expanded: boolean) {
    this.expandAllRecursive(this.rows, expanded);

    this.flattenRows = this.service.flattenTree(this.rows);
    this.doFiltering();
  }

  setAllParentsOk(item: TreeRowIf<any>) {
    if (item.parent) {
      item.parent.keep = true;
      this.setAllParentsOk(item.parent);
    }
    return false;
  }

  override setValue(rowIndex: number, columnIndex: number, value: any): boolean {
    const editInputPipe = this.columnDefs[columnIndex]?.editInputPipe;
    if (editInputPipe) {
      value = editInputPipe(value, rowIndex, columnIndex);
    }
    const treeRow: TreeRowIf<S> | undefined = this.getRowByIndex(rowIndex);
    if (treeRow) {
      const row: S = treeRow.data;
      const property = this.columnDefs[columnIndex].property;
      if (property.includes(".")) {
        return this.setPropertyValue(row, property.split("."), value);
      }
      // @ts-ignore
      row[property] = value;
      return true;
    }
    return false;
  }

  protected genericTreeTableSortComparator(property: string, f: number) {
    return (a: TreeRowIf<S>, b: TreeRowIf<S>) => {
      const va = this.getValueByT(a.data, property);
      const vb = this.getValueByT(b.data, property);
      return this.sorterService.genericSortComparator(va, vb, f);
    };
  }

  private expandAllRecursive(arr: TreeRowIf<S>[], expanded: boolean) {
    for (const row of arr) {
      row.expanded = expanded;
      if (row.children) {
        this.expandAllRecursive(row.children, expanded);
      }
    }
  }

  private doFiltering() {
    if (!this.lastPredictFn) {
      this.filteredFlattenRows = [...(this.flattenRows ? this.flattenRows : [])];
    } else {

      if (!this.flattenRows) {
        this.flattenRows = [];
      }

      let maxDeep = 0;
      this.flattenRows.forEach(v => {
        maxDeep = Math.max(maxDeep, v.deep);
      });

      const okRows = this.flattenRows.filter(
        (value, index, array) => {
          // @ts-ignore
          return this.lastPredictFn(value, index, array);
        }
      );
      this.flattenRows.forEach(v => v.keep = false);
      this.flattenRows.forEach(v => {
        if (okRows.includes(v)) {
          v.keep = true;
          this.setAllParentsOk(v);
        }
      });

      this.filteredFlattenRows = this.flattenRows.filter(
        (value, _index, _array) => {
          return value.keep;
        }
      );
    }
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

  private treeSort(rows: TreeRowIf<S>[], property: string, f: number) {
    rows.sort(this.genericTreeTableSortComparator(property, f));
    for (const row of rows) {
      if (row.children) {
        this.treeSort(row.children, property, f);
      }
    }
  }
}
