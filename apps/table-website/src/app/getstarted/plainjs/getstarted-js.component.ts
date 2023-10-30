import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-js",
  templateUrl: "./getstarted-js.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedJsComponent {


  text1 = `
    npm install --save @guiexpert/table
  `;

  text2 = `
    <div
        class="container-div"
        style="width:100%;height:100%;background:transparent;margin:0;padding:0;"
        ></div>
  `;

  text3 = `
    import {
      EventAdapter,
      SimpleDomService,
      TableModelIf,
      TableOptions,
      TableScope } from "@guiexpert/table";;
  `;

  text4 = `
    const tableModel: TableModelIf = TableModelFactory
      .createByArrayOfArraysParams<any>(param: {
        columnLabels: [
          ['Header 1', 'Header 2']
        ],
        data: [
          ['Text 1a', 'Text 2a'],
          ['Text 1b', 'Text 2b'],
        ]
      };

    const ele = document.querySelector(".container-div") as HTMLDivElement;

    const tableScope = new TableScope(
      ele, tableModel, new SimpleDomService(), new TableOptions(), new EventAdapter()
    );
    tableScope.firstInit();
  `;
}
