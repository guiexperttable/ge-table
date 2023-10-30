import { Component } from "@angular/core";


@Component({
  selector: "demo-heatmap-info",
  template: `
    <div class="ge-padding">
      <p>
        The model is built with following function:
      </p>
      <source-code [language]="'language-markup'" [text]="model"></source-code>

      <p>
        For more details see: <a target="_blank" href="https://github.com/guiexperttable/guiexpert/blob/main/libs/table/src/lib/table/factory/table-factory.ts">TableFactory.createTableModel</a>
      </p>

    </div>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-rows: 1fr;
    }

    :host > * {
      margin: 0;
      width: calc(100% - 32px);
      height: 100%;
    }

    source-code {
      margin-bottom: 16px;
    }
  `]
})
export class DemoHeatmapInfoComponent {


  model = 'export function createHeatMapModel(): TableModelIf {\n' +
    '  const bodyAreaModel = new AreaModelArrayOfArrays("body", data, defaultRowHeights.body);\n' +
    '  const columnSizes = new Array(headerLabel.length).fill(50);\n' +
    '  const headerAreaModel = new AreaModelArrayOfArrays("header", [headerLabel], defaultRowHeights.header);\n' +
    '\n' +
    '  bodyAreaModel.getCustomStyleAt = (rowIndex: number, columnIndex: number) => {\n' +
    '    let ret: { [key: string]: string } = {};\n' +
    '    if (columnIndex > 0) {\n' +
    '      const n = bodyAreaModel.getValueAt(rowIndex, columnIndex) as number;\n' +
    '      ret = {\n' +
    '        "background": getTwoColorGradientRGB(MIN, MAX, n),\n' +
    '        "color": "#fff"\n' +
    '      };\n' +
    '    }\n' +
    '    ret["paddingTop"] = "10px";\n' +
    '    return ret;\n' +
    '  };\n' +
    '\n' +
    '  return TableFactory.createTableModel({\n' +
    '    headerAreaModel,\n' +
    '    bodyAreaModel,\n' +
    '    columnSizes\n' +
    '  });\n' +
    '}';

}

