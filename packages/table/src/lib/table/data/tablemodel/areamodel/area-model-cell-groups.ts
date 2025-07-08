import { AreaIdent } from '../area-ident.type';
import { ColumnDefIf } from '../column/column-def.if';
import { AreaModelIf } from './area-model.if';
import { CellGroupIf } from '../cellgroup/cell-group.if';
import { CheckboxModelIf } from '../../../checkbox/checkbox-model.if';
import { SortItem } from '../../common/sort-item';
import { FilterFunction } from '../../common/filter-function';
import { CellRendererIf } from '../../../renderer/cell-render.if';
import { CheckedType } from '../../common/checked-type';
import { CellgroupFactory } from '../cellgroup/cellgroup-factory';
import { CellGroupExt } from '../cellgroup/cell-group-ext';
import { CellGroupExtCellRenderer } from '../../../renderer/cell-group-ext-cell-renderer';
import { MouseTargetData } from '../../event/mouse-target-data';
import { HeaderGroupOptionsIf } from '../../options/header-group-options.if';
import { HeaderGroupOptions } from '../../options/header-group-options';

// TODO next steps:   fix this model
export class AreaModelCellGroups implements AreaModelIf {

  public gammaCells = true;

  public rowSelectionModel: CheckboxModelIf<any> | undefined;
  public arr: (CellGroupExt | null | undefined)[][] = [];

  private groupExts: CellGroupExt[] = [];
  private cellGroupExtCellRenderer;

  constructor(
    public readonly areaIdent: AreaIdent = 'header',
    readonly groups: CellGroupIf[],
    public columnDefs: ColumnDefIf[] = [],
    public readonly defaultRowHeight: number,
    private headerGroupOptions: HeaderGroupOptionsIf = new HeaderGroupOptions()
  ) {
    this.cellGroupExtCellRenderer = new CellGroupExtCellRenderer(this.headerGroupOptions);
    this.groupExts = CellgroupFactory.buildGroupExts(groups);
    this.init();
  }

  sort<T>(_compareFn?: (a: T, b: T) => number): void {
      //
  }

  init(){
    // console.info(this.groupExts);
    // console.info(this.getAllLeafs());
    // console.info(this.getMaxRowCount());
    for (const g of this.groupExts) {
      g.log(this.getMaxRowCount());
      // console.info(g.getAllRowCounts(g));
    }
    this.arr = this.buildArray();

    if (!this.columnDefs?.length && this.areaIdent === 'header') {
      this.columnDefs = CellgroupFactory.buildColumnDefs(this.groups);
      // console.info('this.columnDefs', this.columnDefs);
    }
  }

  getAllLeafs(): CellGroupExt[] {
    const flatten = CellgroupFactory.flattenGroupExts(this.groupExts);
    return flatten.filter(ge => !ge.children);
  }

  getMaxRowCount(): number {
    const allLeafs = this.getAllLeafs();
    if (allLeafs?.length) {
      return 1 + Math.max(...allLeafs.map(c => c.getParentCount(c)));
    }
    return 0;
  }

  buildArray(): (CellGroupExt | null | undefined)[][] {
    // // console.info('');
    const flatten = CellgroupFactory.flattenGroupExts(this.groupExts);
    // // console.info("flat", flatten);

    // const maxCol = flatten.length;
    const maxRow = 1 + Math.max(...flatten.map(c => c.rowIndex));
    // console.info('max  row/col:', maxRow + '/' + maxCol);

    const sb: string[] = [];
    CellgroupFactory.iterateThrowColumns(sb, this.groupExts);
    // console.info(sb);

    const arrs = Array.from(Array(maxRow).keys()).map((_r) => []);
    const ret = CellgroupFactory.buildArrayOfArrays(flatten, arrs);
    console.table(ret);

    /*

Gold                                                Hohenwarte
Gold AB              Gold CD                        HOH AB                      HOH CD
Gold A     Gold B    Gold C   Gold D    Gold Sum    HOH Loc    HOH A    HOH B   HOH C    HOH D

*/
    return ret;
  }

  changeColumnOrder(_sourceColumnIndex: number, _targetColumnIndex: number): void {
    // skip
  }

  doSort(_sortItems: SortItem[]): boolean {
    return false;
  }

  externalFilterChanged<T>(_predictFn: FilterFunction<T>): void {
    // skip
  }

  getCellRenderer(_rowIndex: number, _columnIndex: number): CellRendererIf | undefined {
    return this.cellGroupExtCellRenderer;
  }

  getColspanAt(rowIndex: number, columnIndex: number): number {
    // let ret = 1;
    //
    // if (this.getValueAt(rowIndex, columnIndex)){
    //   const maxCol = this.arr[0].length;
    //   while (ret< maxCol && this.getValueAt(rowIndex, columnIndex + ret)===null){
    //     ret++;
    //   }
    // }
    // return ret;

    const val = this.getValueAt(rowIndex, columnIndex);
    if (val) {
      return val.getColumnCount();
    }
    return 0;
  }

  getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[] {
    return [];
  }

  getCustomStyleAt(_rowIndex: number, _columnIndex: number): { [p: string]: string } | undefined {
    return undefined;
  }

  getMaxColspan(): number {
    return 12;
  }

  getMaxRowspan(): number {
    return 12;
  }

  getRowByIndex(_rowIndex: number): any {
    return undefined;
  }

  getRowCount(): number {
    if (this.arr) {
      return this.arr.length;
    }
    return 0;
  }


  getRowspanAt(rowIndex: number, columnIndex: number): number {
    // TODO
    const cge: CellGroupExt | null | undefined = this.getValueAt(rowIndex, columnIndex);
    if (cge) {
      const maxRowCount = this.getRowCount();
      return cge.getRowSpan(cge, maxRowCount);
    }
    return 0;
  }

  getTooltipAt(_rowIndex: number, _columnIndex: number): any {
    // TODO
    return '';
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return this.arr[rowIndex][columnIndex];
  }

  getTextValueAt(rowIndex: number, columnIndex: number): string {
    return '' + this.getValueAt(rowIndex, columnIndex);
  }

  getYPosByRowIndex(_rowIndex: number): number {
    // TODO
    return 0;
  }


  getRowHeight(_rowIndex: number): number {
    return this.defaultRowHeight;
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
    // skipped
  }

  setValue(_rowIndex: number, _columnIndex: number, _value: any): boolean {
    return false;
  }

  toggleHeaderGroup(mouseTargetData: MouseTargetData) {
    const cellGroup: (CellGroupExt | null | undefined) = this.arr[mouseTargetData.rowIdx][mouseTargetData.colIdx];
    if (cellGroup?.toggle && cellGroup.visibility !== 'always') {
      cellGroup.closed = !cellGroup.closed;

      this.init();
      //this.groupExts = CellgroupFactory.buildGroupExts(this.groups);

      // this.columnDefs = CellgroupFactory.buildColumnDefs(this.groups);
      // this.arr = this.buildArray();
      
      // console.info('columnDefs', this.columnDefs);
      // console.info('toggled', cellGroup);
      // console.info('columnDefs 2', CellgroupFactory.buildColumnDefs(this.groups));
    }
    return CellgroupFactory.buildColumnDefs(this.groupExts);
  }
}
