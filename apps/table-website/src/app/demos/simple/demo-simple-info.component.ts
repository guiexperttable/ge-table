import { Component } from "@angular/core";


@Component({
  selector: "demo-simple-info",
  template: `
    <div class="ge-padding">
      <p>
        You will find the code here: <a target="_blank" href="https://github.com/guiexperttable/table-website/blob/main/src/app/demos/simple/demo-simple.component.ts">demo-simple.component.ts</a>
        and the model here: <a target="_blank" href="https://github.com/guiexperttable/demo-table-models/blob/main/src/lib/generateSimpleModel.ts">generateSimpleModel.ts</a>
      </p>
      <p>
        Stackblitz:: <a target="_blank" href="https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple">https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple</a>
      </p>
      <p>
        Add the table tag to your template.
        The syntax will depend on the framework you are using.
        Here is an example of the Angular syntax:
      </p>
      <source-code [language]="'language-markup'" [text]="tag"></source-code>

      <p>
        In this example we used this helper method to create a table model:
      </p>
      <source-code [text]="model"></source-code>

      <p>
        See method <b>generateSimpleModel</b>:
      </p>
      <source-code [text]="full"></source-code>

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
export class DemoSimpleInfoComponent {
  tag = `<guiexpert-table [tableModel]="tableModel"></guiexpert-table>`;
  model = `tableModel: TableModelIf = generateSimpleModel(1000, 100);`;
  full =
    `import { TableFactory, TableModelIf } from "@guiexpert/table";

const data: string[][] =
  Array.from(Array(rowCount).keys()).map((r) =>
    Array.from(Array(columnCount).keys()).map((c) => \`$\{r}/$\{c}\`)
  );

const headerData string[][] =
  Array.from(Array(2).keys()).map((r) =>
    Array.from(Array(columnCount).keys()).map((c) => \`H$\{r}/$\{c}\`)
  );

const footer: string[][] =
  Array.from(Array(2).keys()).map((r) =>
    Array.from(Array(columnCount).keys()).map((c) => \`F$\{r}/$\{c}\`)
  );

return TableFactory.createTableModel({
  columnLabels,
  data,
  footer,
  overridingColumnWidth: 100,
  fixedLeftColumnCount: 2,
  fixedRightColumnCount: 2
});  `;
}

