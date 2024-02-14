import {
  CheckboxBooleanPropertyCellRenderer,
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer,
  ProgressBarCellRenderer,
  px100,
  px120,
  px140,
  px60,
  px90,
  SelectionModel,
  StarRatingCellRenderer,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions,
  TrueFn
} from "@guiexpert/table";
import orderData from "../demodata/orders";
import {OrderIf} from "../model/order.if";


function createTableRows(): OrderIf[] {
  return orderData;
}

function createColumnDefs(): ColumnDefIf[] {
  return [
    ColumnDef.create({
      property: "company",
      headerLabel: "Company",
      width: px120,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "country",
      headerLabel: "Country",
      width: px140,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "product",
      headerLabel: "Name",
      width: px120,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "sellDate",
      headerLabel: "Sell date",
      width: px100,
      bodyRenderer: new DateToIntlDDMMYYYYCellRenderer(),
      bodyClasses: ["ge-table-text-align-center"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "id",
      headerLabel: "Order ID",
      width: px120,
      bodyClasses: ["ge-table-text-align-center"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "inStock",
      headerLabel: "In stock",
      width: px90,
      bodyRenderer: new CheckboxBooleanPropertyCellRenderer('inStock', true, true),
      bodyClasses: ["ge-table-text-align-center"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "quantity",
      headerLabel: "Qty",
      width: px60,
      bodyClasses: ["ge-table-text-align-right"],
      headerClasses: ["ge-table-text-align-right"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "progress",
      headerLabel: "Progress",
      width: px100,
      bodyRenderer: new ProgressBarCellRenderer('progress', 5, true),
      bodyClasses: ["ge-table-text-align-left"],
      sortable: TrueFn
    }),
    ColumnDef.create({
      property: "rating",
      headerLabel: "Rating",
      width: px100,
      bodyRenderer: new StarRatingCellRenderer('rating'),
      bodyClasses: ["ge-table-text-align-left"],
      sortable: TrueFn
    })
  ];
}

function createOrderTableOptions(): TableOptions {
  const selectionModel = new SelectionModel("row", "multi");
  return {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 24,
      body: 24,
      footer: 0
    },
    getSelectionModel: () => selectionModel
  };
}

export function createOrderModelAndOptions(): TableModelAndOptionsIf {
  const tableOptions = createOrderTableOptions();
  const rows: OrderIf[] = createTableRows();
  const columnDefs: ColumnDefIf[] = createColumnDefs();
  return new TableModelAndOptions(TableFactory.createTableModel({
      rows,
      columnDefs,
      tableOptions,
      fixedLeftColumnCount: 0
    }),
    tableOptions);
}

