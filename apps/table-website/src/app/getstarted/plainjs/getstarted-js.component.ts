import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-js",
  templateUrl: "./getstarted-js.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedJsComponent {


  text1 = `npm install --save @guiexpert/table`;

  text2 = `<div
    class="container-div"
    style="width:100%;height:100%;margin:0;padding:0;"
    ></div>
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

  text3 = `import {
  EventAdapter,
  SimpleDomService,
  TableFactory,
  TableModelIf,
  TableOptions,
      TableScope } from "@guiexpert/table";
  `;

  text4 = `
const headerData = [ ["Column 1", "Column 2", "Column 3"] ]; // array of array!

const bodyData = [];
for (let i=0; i<100; i++) {
  bodyData.push(["This is a very", "simple", "demo."]);
}

const tableModel: TableModelIf = TableFactory.createTableModel({
  headerData,
  bodyData,
  overridingColumnWidth: 110
});

const ele = document.querySelector(".container-div") as HTMLDivElement;

const tableScope = new TableScope(
  ele, tableModel, new SimpleDomService(), new TableOptions(), new EventAdapter()
);
tableScope.firstInit();
  `;
}
