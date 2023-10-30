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


  text1 = `
    npm install --save @guiexpert/table @guiexpert/angular-table
  `;

  text2 = `
    @NgModule({
        imports: [
          CommonModule,
          TableComponent, ...
  `;

  text3 = `
    <guiexpert-table
      [tableModel]="tableModel"
      [tableOptions]="tableOptions"
      class="table-div"
    ></guiexpert-table>
  `;

  text4 = `
  import {
    TableModelFactory,
    TableModelIf,
    TableOptions,
    TableOptionsIf
  } from "@guiexpert/table";

  tableModel = TableModelFactory
    .createByArrayOfArraysParams<any>(param: {
      columnLabels: [
        ['Header 1', 'Header 2']
      ],
      data: [
        ['Text 1a', 'Text 2a'],
        ['Text 1b', 'Text 2b'],
      ]
    };

  tableOptions = {
      ...new TableOptions(),
      hoverColumnVisible: false,
      defaultRowHeights: {
        header: 40,
          body: 34,
          footer: 0
        }
      };
  `;

}
