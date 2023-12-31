import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-get-started-react",
  templateUrl: "./getstarted-react.component.html",
  styleUrls: ["../common/getstarted.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetstartedReactComponent {


  text1 = `npm install --save @guiexpert/table @guiexpert/react-table`;

  text2 = `return (
  <>
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={new TableOptions}
    />
  </>
);
  `;

  text3 = `import { GuiexpertTable } from "@guiexpert/react-table";
import {
  GeMouseEvent,
  TableApi
  TableFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
`;

  text4 = `const tableModel: TableModelIf = TableFactory
  .createTableModel<any>({
    headerData [
      ['Header 1', 'Header 2']
    ],
    bodyData: [
      ['Text 1a', 'Text 2a'],
      ['Text 1b', 'Text 2b'],
    ]
  };

function onTableReady(api: TableApi) {
  console.info("onTableReady API:", api);
}
`;
}
