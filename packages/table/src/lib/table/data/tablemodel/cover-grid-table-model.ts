import { CoverGridBodyModel } from './areamodel/cover-grid-body-model';
import { AreaModelIf } from './areamodel/area-model.if';
import { FilterFunction } from '../common/filter-function';
import { SortItem } from '../common/sort-item';
import { AreaIdent } from './area-ident.type';
import { TableModelIf } from './table-model.if';
import { TableScope } from '../../table-scope';
import { AreaModelHidden } from './areamodel/area-model-hidden';
import { ColumnDefIf } from './column/column-def.if';
import { Padding } from './padding';
import { SelectionModelIf } from '../../selection/selection-model.if';

export class CoverGridTableModel<T> implements TableModelIf {

  private headerAreaModel = new AreaModelHidden();
  private footerAreaModel = new AreaModelHidden();
  private tableScope: TableScope | undefined;


  constructor(
    public bodyModel: CoverGridBodyModel<T>,
    public paddingTop: number = 0
  ) {
  }

  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    // ignore
  }

  isSortable(_colIdx: number): boolean {
    return false;
  }

  init(): void {
    // ignore
  }

  setParentWidth(widthInPixel: number): void {
    this.bodyModel.width = widthInPixel;
  }

  getColumnCount(): number {
    return this.bodyModel.getColumnCount();
  }

  getXPosByColumnIndex(columnIndex: number): number {
    return columnIndex * this.getColumnWidth(columnIndex);
  }

  getAreaModel(rowAreaIdent: AreaIdent): AreaModelIf {
    if (rowAreaIdent === 'header') return this.headerAreaModel;
    if (rowAreaIdent === 'footer') return this.footerAreaModel;
    return this.bodyModel;
  }

  getBodyModel(): AreaModelIf {
    return this.bodyModel;
  }

  getFixedLeftColumnCount(): number {
    return 0;
  }

  getFixedRightColumnCount(): number {
    return 0;
  }

  isHeaderVisibe(): boolean {
    return false;
  }

  isFooterVisibe(): boolean {
    return false;
  }

  isRowCheckboxVisible(): boolean {
    return false;
  }

  getRowHeight(_rowAreaIdent: AreaIdent, rowIndex: number): number {
    return this.bodyModel.getRowHeight(rowIndex);
  }

  getColumnDef(_index: number): ColumnDefIf | undefined {
    return undefined;
  }

  getColumnDefs(): ColumnDefIf[] | undefined {
    return undefined;
  }

  getColumnProperty(_columnIndex: number): string {
    return '';
  }

  getBodyRowByIndex(rowIndex: number): any {
    return this.bodyModel.getRowByIndex(rowIndex);
  }

  getColumnWidth(_columnIndex: number): number {
    return this.bodyModel.coverWidth;
  }

  setColumnWidth(_columnIndex: number, width: number): void {
    this.bodyModel.coverWidth = width;
  }

  recalcSize(_clientWidth: number): void {
    // ignore
  }

  recalcPadding(): void {
    // ignore
  }

  recalcHeightAndPadding(): void {
    // ignore
  }

  getPadding(): Padding {
    return new Padding(0, 0, 0, 0);
  }

  getContentHeightInPixel(): number {
    return this.paddingTop + this.bodyModel.getRowCount() * this.bodyModel.coverHeight;
  }

  getContentWidthInPixel(): number {
    return this.bodyModel.getColumnCount() * this.bodyModel.coverWidth;
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    this.bodyModel.externalFilterChanged(predictFn);
  }

  doSort(sortItems: SortItem[]): boolean {
    return this.bodyModel.doSort(sortItems);
  }

  sort(compareFn: (a: any, b: any) => number): void {
    this.bodyModel.sort(compareFn);
  }

  getSelectionModel(): SelectionModelIf | undefined {
    return undefined;
  }

  setTableScope(tableScope: TableScope): void {
    this.tableScope = tableScope;
  }

  getTableScope(): TableScope | undefined {
    return this.tableScope;
  }
}
