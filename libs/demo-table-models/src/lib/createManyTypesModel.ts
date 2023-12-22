import {
  CheckboxBooleanPropertyCellRenderer,
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer, PositiveAndNegativeNumberRenderer,
  ProgressBarCellRenderer,
  px100,
  px120,
  px140, px200, px220,
  px60, px80,
  px90,
  SelectionModel,
  SelectionModelIf,
  StarRatingCellRenderer,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions, TrueFalseCellRenderer,
  TrueFn
} from '@guiexpert/table';
import manyTypesData from '../demodata/many-types';
import { ManyTypesIf } from '../model/many-types.if';


function createTableRows(rowCount: number = 75): ManyTypesIf[] {
  return manyTypesData.slice(0, rowCount - 1);
}

function createColumnDefs(editable: boolean): ColumnDefIf[] {
  return [
      ColumnDef.create({
      property: 'company',
      headerLabel: 'Company',
      width: px100,
      bodyClasses: ['ge-table-text-align-left'],
      headerClasses: ['ge-table-text-align-left'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'country',
      headerLabel: 'Country',
      width: px140,
      bodyClasses: ['ge-table-text-align-left'],
      headerClasses: ['ge-table-text-align-left'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'product',
      headerLabel: 'Name',
      width: px100,
      bodyClasses: ['ge-table-text-align-left'],
      headerClasses: ['ge-table-text-align-left'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'birthday',
      headerLabel: 'Birth Date',
      width: px100,
      bodyClasses: ['ge-table-text-align-center'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'sellDate',
      headerLabel: 'Sell date',
      width: px100,
      bodyRenderer: new DateToIntlDDMMYYYYCellRenderer(),
      bodyClasses: ['ge-table-text-align-center'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'lastVisit',
      headerLabel: 'Last Visit',
      width: px220,
      bodyClasses: ['ge-table-text-align-center'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'time',
      headerLabel: 'Time',
      width: px100,
      bodyClasses: ['ge-table-text-align-center'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'id', headerLabel: 'Order ID', width: px120, bodyClasses: ['ge-table-text-align-center'], sortable: TrueFn
    }),
    ColumnDef.create({
      property: 'inStock',
      headerLabel: 'In stock',
      width: px90,
      bodyRenderer: new CheckboxBooleanPropertyCellRenderer('inStock', true, true),
      bodyClasses: ['ge-table-text-align-center'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'quantity',
      headerLabel: 'Qty',
      width: px60,
      bodyClasses: ['ge-table-text-align-right'],
      headerClasses: ['ge-table-text-align-right'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'progress',
      headerLabel: 'Progress',
      width: px100,
      bodyRenderer: new ProgressBarCellRenderer('progress', 5, true),
      bodyClasses: ['ge-table-text-align-left'],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: 'rating',
      headerLabel: 'Rating',
      width: px100,
      bodyRenderer: new StarRatingCellRenderer('rating'),
      bodyClasses: ['ge-table-text-align-left'],
      sortable: TrueFn
    }),

    ColumnDef.create({
      property: 'price',
      headerLabel: 'Price',
      width: px60,
      bodyClasses: ['ge-table-text-align-right'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'active',
      headerLabel: 'Active',
      width: px60,
      bodyRenderer: new TrueFalseCellRenderer(),
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'currency',
      headerLabel: 'CCY',
      width: px60,
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'average',
      headerLabel: 'Average',
      width: px100,
      bodyClasses: ['ge-table-text-align-right'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'f1',
      headerLabel: 'F1',
      width: px80,
      bodyClasses: ['ge-table-text-align-right'],
      bodyRenderer: new PositiveAndNegativeNumberRenderer(),
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'f2',
      headerLabel: 'F2',
      width: px120,
      bodyClasses: ['ge-table-text-align-right'],
      sortable: TrueFn,
      editable: ()=> editable
    }),
    ColumnDef.create({
      property: 'lorem',
      headerLabel: 'Lorem',
      width: px200,
      bodyClasses: ['ge-table-text-align-left'],
      sortable: TrueFn,
      editable: ()=> editable
    })

  ];
}

function createManyTypesTableOptions(selectionModel: SelectionModelIf): TableOptions {
  return {
    ...new TableOptions(), hoverColumnVisible: false, defaultRowHeights: {
      header: 32, body: 32, footer: 0
    }, getSelectionModel: () => selectionModel
  };
}

export function createManyTypesModelAndOptions(
  selectionModel: SelectionModelIf = new SelectionModel('row', 'multi'),
  rowCount: number = 75,
  editable: boolean = false
): TableModelAndOptionsIf {
  const tableOptions = createManyTypesTableOptions(selectionModel);
  rowCount = Math.max(10, Math.min(75, rowCount));
  const rows: ManyTypesIf[] = createTableRows(rowCount);
  const columnDefs: ColumnDefIf[] = createColumnDefs(editable);
  return new TableModelAndOptions(TableFactory.createTableModel({
    rows, columnDefs, tableOptions
  }), tableOptions);
}

