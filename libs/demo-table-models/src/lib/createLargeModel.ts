import {
  AreaModel,
  ColumnDef,
  ColumnDefIf,
  FalseFn,
  px120,
  px200,
  SelectionModel,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions
} from '@guiexpert/table';


function createLargeColumnDefs(): ColumnDefIf[] {
  return [ColumnDef.create({
    property: 'id',
    headerLabel: 'ID',
    width: px120,
    bodyClasses: ['ge-table-text-align-left'],
    headerClasses: ['ge-table-text-align-left'],
    sortable: FalseFn
  }), ColumnDef.create({
    property: 'value',
    headerLabel: 'Value',
    width: px200,
    bodyClasses: ['ge-table-text-align-left'],
    headerClasses: ['ge-table-text-align-left'],
    sortable: FalseFn
  })];
}

function createLargeTableOptions(): TableOptions {
  const selectionModel = new SelectionModel();
  return {
    ...new TableOptions(), hoverColumnVisible: false, defaultRowHeights: {
      header: 34, body: 34, footer: 0
    }, getSelectionModel: () => selectionModel
  };
}

export function createLargeModelAndOptions(rowcount: number = 1000000): TableModelAndOptionsIf {
  const tableOptions = createLargeTableOptions();
  const columnDefs: ColumnDefIf[] = createLargeColumnDefs();
  const bodyAreaModel = new LargeBodyModel(rowcount);
  return new TableModelAndOptions(TableFactory.createTableModel({
    bodyAreaModel, columnDefs, tableOptions, fixedLeftColumnCount: 0
  }), tableOptions);
}

export class LargeBodyModel extends AreaModel {

  private readonly nf = new Intl.NumberFormat('en-Us', { })

  constructor(private rowcount: number = 1000000) {
    super();
  }

  override getRowCount(): number {
    return this.rowcount;
  }

  override getRowHeight(_rowIndex: number): number {
    return 34;
  }



  override getValueAt(rowIndex: number, columnIndex: number): number | string {
    if (columnIndex === 0) return 'id' + rowIndex;
    return this.nf.format(rowIndex);
  }

}