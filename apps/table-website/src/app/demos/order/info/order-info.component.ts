import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "order-demo-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderInfoComponent {

  tag = `<guiexpert-table
  (tableReady)="onTableReady($event)"
  *ngIf="tableModel"
  [tableModel]="tableModel"
  [tableOptions]="tableOptions"
  class="order-table-div"
></guiexpert-table>`;

  tag2 = `<div [ngClass]="{small:small}" class="filter-div">
  <mat-form-field appearance="outline">
    <mat-label>Filter</mat-label>
    <input (keyup)="onKeyup()" [(ngModel)]="filterText" matInput>
  </mat-form-field>
</div>`;

  model = `
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
      width: px200,
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
`;

  assignModel = `    const omao = createOrderModelAndOptions();
    this.tableModel = omao.tableModel;
    this.tableOptions = {
      ...omao.tableOptions,
      externalFilterFunction: this.filterFn.bind(this),
    }`;

  filter = `private filterFn(coin: OrderIf, _index: number, _array: OrderIf[]) {
    if (!this.filterText) {
      return true;
    }
    const ls = this.filterText.toLowerCase();
    return JSON.stringify(coin).toLowerCase().includes(ls);
  }`;
}
