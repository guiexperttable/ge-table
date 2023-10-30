import { Component } from "@angular/core";


@Component({
  selector: "demo-heatmap-seattle-info",
  template: `
    <div class="ge-padding">
      <p>
        Model creation:
      </p>
      <source-code [language]="'language-markup'" [text]="model"></source-code>
      <p>
        and
      </p>
      <source-code [language]="'language-markup'" [text]="model2"></source-code>
      <p>
        You will find <i>HeatMapSeattleBodyModel</i> and <i>HeatMapSeattleFooterModel</i> here: <a target="_blank" href="https://github.com/guiexperttable/demo-table-models/blob/main/src/lib/generateHeatmapSeattle.ts">generateHeatmapSeattle.ts</a>
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
export class DemoHeatmapSeattleInfoComponent {

  model = ` tableModel?: TableModelIf = createHeatMapSeattleModel();`;
  model2 = `export function createHeatMapSeattleModel(): TableModelIf {
  const bodyAreaModel = new HeatMapSeattleBodyModel();
  const footerAreaModel = new HeatMapSeattleFooterModel();
  const columnSizes = [60, ...(new Array(days.length).fill(defaultColumnWidth))];

  return TableFactory.createTableModel({
    bodyAreaModel,
    footerAreaModel,
    columnSizes
  });
}`;



  option= `  tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    hoverRowVisible: false,
    columnsDraggable: false,
    columnsResizable: false,
    tableTopBorderVisible: false,
    tableBottomBorderVisible: false,
    footerSeparatorBorderVisible: false,
    horizontalBorderVisible: false,
    verticalBorderVisible: false
  };`;
}

