import { AreaModelIf } from './area-model.if';
import { CellRendererIf } from '../../../renderer/cell-render.if';
import { CheckedType } from '../../common/checked-type';
import { CheckboxModelIf } from '../../../checkbox/checkbox-model.if';
import { FilterFunction } from '../../common/filter-function';
import { SortItem } from '../../common/sort-item';
import { AreaIdent } from '../area-ident.type';
import { SorterService } from '../../../service/sorter.service';

export class CoverGridBodyModel<T> implements AreaModelIf {

  public rowSelectionModel: CheckboxModelIf<any> | undefined = undefined;
  public areaIdent: AreaIdent = 'body';

  public filteredItems: T[] = [];


  protected sorterService: SorterService = new SorterService();


  constructor(
    public items: T[],
    public cellRenderer: CellRendererIf,
    public coverWidth: number = 200,
    public coverHeight: number = 300,
    public width = 0,
    public firstRowPaddingTop: number = 0
  ) {
    this.filteredItems = items;
  }


  getRowCount(): number {
    if (!this.filteredItems?.length) return 0;
    return Math.floor(this.filteredItems.length / this.getColumnCount()) + 1;
  }

  getColumnCount(): number {
    return !this.width ? 1 : Math.floor(this.width / this.coverWidth);
  }

  getValueAt(rowIndex: number, columnIndex: number): T | undefined {
    return this.filteredItems?.[rowIndex * this.getColumnCount() + columnIndex];
  }

  getTextValueAt(_rowIndex: number, _columnIndex: number): string {
    return '';
  }

  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    return '';
  }

  getRowHeight(rowIndex: number): number {
    if (rowIndex === 0 && this.firstRowPaddingTop > 0) return this.firstRowPaddingTop + this.coverHeight;
    return this.coverHeight;
  }


  getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined {
    return this.cellRenderer;
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

  isRowChecked(_rowIndex: number): CheckedType | undefined {
    return undefined;
  }

  setRowChecked(_rowIndex: number, _checked: boolean): void {
    // ignore
  }

  getMaxColspan(): number {
    return 31;
  }

  getMaxRowspan(): number {
    return 31;
  }


  getYPosByRowIndex(rowIndex: number): number {
    const pad = this.firstRowPaddingTop > 0 ? this.firstRowPaddingTop : 0;
    return this.coverHeight * rowIndex + pad;
  }


  init() {
    // ignore
  }

  externalFilterChanged<_T>(predict: FilterFunction<any>): void {
    this.filteredItems = this.items.filter(predict);
  }

  isFilterable(): boolean {
    return false;
  }

  doSort(sortItems: SortItem[]): boolean {
    if (!this.filteredItems) return false;

    for (const sortItem of sortItems) {
      const { sortState } = sortItem;
      const f = sortState === 'asc' ? 1 :
        sortState === 'desc' ? -1 : 0;
      this.filteredItems = this.filteredItems.sort((a, b) => this.sorterService.genericSortComparator(a, b, f));
    }
    return true;
  }

  sort(compareFn?: (a: any, b: any) => number): void {
    this.filteredItems = this.filteredItems.sort(compareFn);
  }


  isEditable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  setValue(_rowIndex: number, _columnIndex: number, _value: any): boolean {
    return true;
  }


  isSelectable(_rowIndex: number, _columnIndex: number): boolean {
    return false;
  }

  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    //  ignore
  }

  protected setPropertyValue(_o: any, _props: string[], _value: any): boolean {
    return false;
  }

  protected arrayMove(_arr: any[], _fromIndex: number, _toIndex: number) {
    // ignore
  }


}

