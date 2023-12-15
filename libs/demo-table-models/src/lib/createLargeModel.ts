import {
  AreaModel, CellRendererIf,
  ColumnDef,
  ColumnDefIf,
  FalseFn, NumberCellProgressBarCellRenderer,
  px120,
  px200,
  SelectionModel,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions
} from '@guiexpert/table';


function createLargeColumnDefs(): ColumnDefIf[] {

  return [
    ColumnDef.create({
      headerLabel: 'ID',
      width: px120,
      bodyClasses: ['ge-table-text-align-left'],
      headerClasses: ['ge-table-text-align-left'],
      sortable: FalseFn
    }),
    ColumnDef.create({
      headerLabel: 'Value',
      width: px200,
      bodyClasses: ['ge-table-text-align-left'],
      headerClasses: ['ge-table-text-align-left'],
      sortable: FalseFn
    }),
    ColumnDef.create({
      headerLabel: " ",
      width: px200,
      bodyClasses: ["ge-table-text-align-right"],
      headerClasses: ["ge-table-text-align-right"]
    }),
  ];
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

  private readonly nf = new Intl.NumberFormat('en-Us', { });

  private barRenderer:CellRendererIf;

  constructor(private rowcount: number = 1000000) {
    super();
    this.barRenderer = new NumberCellProgressBarCellRenderer(rowcount, false);
  }

  override getRowCount(): number {
    return this.rowcount;
  }

  override getRowHeight(_rowIndex: number): number {
    return 34;
  }

  override getValueAt(rowIndex: number, columnIndex: number): number | string {
    if (columnIndex === 0) return 'id' + rowIndex;
    if (columnIndex === 1) return this.nf.format(rowIndex);
    return rowIndex;
  }

  override getCellRenderer(_rowIndex: number, columnIndex: number): CellRendererIf | undefined {
    if (columnIndex==2) return this.barRenderer;
    return undefined;
  }

  override getYPosByRowIndex(rowIndex: number): number {
    return rowIndex * this.getRowHeight(0);
  }

}