import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
  selector: "prizes-demo-info",
  templateUrl: "./prizes-info.component.html",
  styleUrls: ["./prizes-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizesInfoComponent {

  tag = `<guiexpert-table
  [tableModel]="tableModel"
  [tableOptions]="tableOptions"
></guiexpert-table>`;

  fetch=`
  ngOnInit(): void {
    this.prizesDemoService
      .getSimplePrizes()
      .subscribe(this.onDataLoaded.bind(this));
  }

  private onDataLoaded(data: SimplePrize[]) {
    this.data = data;
    ...
  `;

  json=`[
    {
      "year": "2022",
      "category": "economics",
      "laureates": [
        {
          "id": "1021",
          "firstname": "Ben",
          "surname": "Bernanke",
          "motivation": "\\"for research on banks and financial crises\\"",
          "share": "3"
        },
        {
          "id": "1022",
          "firstname": "Douglas",
          "surname": "Diamond",
          "motivation": "\\"for research on banks and financial crises\\"",
          "share": "3"
        },
        {
          "id": "1023",
          "firstname": "Philip",
          "surname": "Dybvig",
          "motivation": "\\"for research on banks and financial crises\\"",
          "share": "3"
        }
      ]
    },
    ...]`;

  coldef=`    const columnDefs: ColumnDefIf[] = [
      ColumnDef.create({
        property: "year",
        headerLabel: "Year"
      }),
      ColumnDef.create({
        property: "category",
        headerLabel: "Category"
      }),
      ColumnDef.create({
        property: "laureate.firstname",
        headerLabel: "Firstname",
        bodyClasses: ["ge-table-text-align-left"]
      }),
      ColumnDef.create({
        property: "laureate.surname",
        headerLabel: "Surname",
        bodyClasses: ["ge-table-text-align-left"]
      })
    ];`;

  tm = `
    this.tableModel = TableModelFactory.createByObjectArrayParam<SimplePrize>({
      columnDefs: columnDefs,
      header: [
        ["Year", "Category", "Laureate", "", "Motivation"],
        ["", "", "Firstname", "Surname", ""]
      ],
      rows: data,
      defaultRowHeights: this.tableOptions.defaultRowHeights
    });`;

  colspan=`
    const headerModel = this.tableModel.getAreaModel("header");
    headerModel.getRowspanAt = this.getHeaderRowspanAt.bind(this);
    headerModel.getColspanAt = this.getHeaderColspanAt.bind(this);

    const bodyModel = this.tableModel.getBodyModel();
    bodyModel.getRowspanAt = this.getRowspanAt.bind(this);
    bodyModel.getColspanAt = this.getColspanAt.bind(this);`;


}
