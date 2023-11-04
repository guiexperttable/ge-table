import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
  selector: "app-get-started-angular",
  templateUrl: "./getstarted-angular.component.html",
  styleUrls: [
    "../common/getstarted.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedAngularComponent {


  text1 = `npm install --save @guiexpert/table @guiexpert/angular-table`;

  text2 =
`@NgModule({
    imports: [
      CommonModule,
      TableComponent, ...
`;

  text3 =
`<div class="content">
  <guiexpert-table
    [tableModel]="tableModel"
    [tableOptions]="tableOptions"
    class="ge-table"
  ></guiexpert-table>
</div>
  `;

  contentStyle = `.content {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
}`;

  predefinedCss1 = `<link 
    crossorigin="anonymous" media="all" rel="stylesheet" 
    href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" />`;
  predefinedCss2 = `"styles": [
  "node_modules/@guiexpert/table/css/main.css"
  ...
],`;


  text4 = `tableModel: TableModelIf;

tableOptions = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 40,
    body: 34,
    footer: 0
  }
};

constructor() {
  this.tableModel = this.generateSimpleModel(100, 10);
}

generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {

  const bodyData: string[][] =
    Array.from(Array(rowCount).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => \`Body \${r}/\${c}\`)
    );

  const headerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => \`Header \${r}/\${c}\`)
    );

  const footerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => \`Footer \${r}/\${c}\`)
    );

  return TableFactory.createTableModel({
    headerData,
    bodyData,
    footerData,
    overridingColumnWidth: 110,
    fixedLeftColumnCount: 1,
    fixedRightColumnCount: 1
  });
}`;

}
