import { Component } from "@angular/core";


@Component({
  selector: "demo-simple-info",
  template: `
    <div class="ge-padding">
      <p>
        Add the table tag to your template.
        The syntax will depend on the framework you are using.
        Here is an example of the Angular syntax:
      </p>
      <source-code [language]="'language-markup'" [text]="tag"></source-code>

      <p>
        We create a model:
      </p>
      <source-code [text]="model"></source-code>

      <p>
        In this example we used this area model class <b>SelfwrittenAreaModel</b>:
      </p>
      <source-code [text]="full"></source-code>

      <p>
        You can also create the complete table model yourself, including not only the body area model as shown in this example.
        Create a table model class which implements <b>TableModelIf</b>, or a class which extends <b>TableModel</b>.
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
export class DemoSelfwrittenInfoComponent {
  tag = `<guiexpert-table [tableModel]="tableModel"></guiexpert-table>`;
  model = `this.tableModel = TableModelFactory.createByAreaModelsParam({
  bodyAreaModel: new SelfwrittenAreaModel(),
  columnCount: 6,
  rowCheckboxVisible: false,
  overridingColumnWidth: 100
});`;
  full =
    `import { AbstractAreaModel, FilterFunction } from "@guiexpert/table";

export class SelfwrittenAreaModel extends AbstractAreaModel<number> {

  constructor() {
    super('body', [], 40);
  }

  getRowCount(): number {
    return 100;
  }

  getRowHeight(rowIndex: number): number {
    return 40;
  }

  getValueAt(rowIndex: number, columnIndex: number): any {
    return \`$\{rowIndex}/$\{columnIndex}\`; // <- just calculated
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    // do notthing
  }

}`;
}

