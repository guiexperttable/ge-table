import {
  AreaModelObjectArrayWithColumndefs,
  CheckboxBooleanPropertyCellRenderer,
  CheckedType,
  ColumnDef,
  ColumnDefIf, TableFactory,
  px50,
  px60,
  Size,
  TreeFactory,
  TableModelIf,
  TableOptions
} from "@guiexpert/table";
import { ThemeRowIf } from "./theme-row.If";
import { ThemeRow } from "./theme-row";
import { CssColorCellRenderer } from "../table/css-color-cell-renderer";


export const COLOR_VARS_DARK = `
:root [data-theme="dark"] {
  --ge-table-bg: #000;
  --ge-table-header-west-bg: #252528;
  --ge-table-header-center-bg: #252528;
  --ge-table-header-east-bg: #252528;
  --ge-table-header-west-text: oklch(92% 0.2 266 / 94%);
  --ge-table-header-center-text: oklch(92% 0.2 266 / 94%);
  --ge-table-header-east-text: oklch(92% 0.2 266 / 94%);
  --ge-table-header-west-horizontal-border: oklch(0% 0 0);
  --ge-table-header-west-vertical-border: oklch(0% 0 0);
  --ge-table-header-center-horizontal-border: oklch(0% 0 0);
  --ge-table-header-center-vertical-border: oklch(0% 0 0);
  --ge-table-header-east-horizontal-border: oklch(0% 0 0);
  --ge-table-header-east-vertical-border: oklch(0% 0 0);
  --ge-table-body-west-bg: #2c2e33;
  --ge-table-body-center-bg: #2c2e33;
  --ge-table-body-east-bg: #2c2e33;
  --ge-table-body-west-text: #dde1e9;
  --ge-table-body-center-text: #dde1e9;
  --ge-table-body-east-text: #dde1e9;
  --ge-table-body-west-horizontal-border: oklch(0% 0 0);
  --ge-table-body-west-vertical-border: oklch(0% 0 0);
  --ge-table-body-center-horizontal-border: oklch(0% 0 0);
  --ge-table-body-center-vertical-border: oklch(0% 0 0);
  --ge-table-body-east-horizontal-border: oklch(0% 0 0);
  --ge-table-body-east-vertical-border: oklch(0% 0 0);
  --ge-table-body-west-selected-range-bg: oklch(2% 0.26 237.6 / 55%);
  --ge-table-body-center-selected-range-bg: oklch(2% 0.26 237.6 / 55%);
  --ge-table-body-east-selected-range-bg: oklch(2% 0.26 237.6 / 55%);
  --ge-table-body-west-selected-range-text: oklch(100% 0 0);
  --ge-table-body-center-selected-range-text: oklch(100% 0 0);
  --ge-table-body-east-selected-range-text: oklch(100% 0 0);
  --ge-table-footer-west-bg: #2c2e33;
  --ge-table-footer-center-bg: #2c2e33;
  --ge-table-footer-east-bg: #2c2e33;
  --ge-table-footer-west-text: #dde1e9;
  --ge-table-footer-center-text: #dde1e9;
  --ge-table-footer-east-text: #dde1e9;
  --ge-table-footer-west-horizontal-border: oklch(0% 0 0);
  --ge-table-footer-west-vertical-border: oklch(0% 0 0);
  --ge-table-footer-center-horizontal-border: oklch(0% 0 0);
  --ge-table-footer-center-vertical-border: oklch(0% 0 0);
  --ge-table-footer-east-horizontal-border: oklch(0% 0 0);
  --ge-table-footer-east-vertical-border: oklch(0% 0 0);
  --ge-table-border: oklch(0% 0 0);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: #2c2e33;
  --ge-table-hover-row-bg: #2c2e33;
  --ge-table-focus-border: oklch(0% 0 0);
  --ge-table-color-error-text: #dde1e9;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(0% 0 0);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #2c2e33;
}
`;


export const COLOR_VARS_LIGHT = `
:root [data-theme="light"] {
  --ge-table-bg: #fff;
  --ge-table-header-west-bg: var(--ge-table-header-center-bg);
  --ge-table-header-center-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-east-bg: var(--ge-table-header-center-bg);
  --ge-table-header-west-text: var(--ge-table-header-center-text);
  --ge-table-header-center-text: #000;
  --ge-table-header-east-text: var(--ge-table-header-center-text);

  --ge-table-header-west-horizontal-border: var(--ge-table-header-center-horizontal-border);
  --ge-table-header-west-vertical-border: var(--ge-table-header-center-vertical-border);
  --ge-table-header-center-horizontal-border: #ddd;
  --ge-table-header-center-vertical-border: #ccc;
  --ge-table-header-east-horizontal-border: var(--ge-table-header-center-horizontal-border);
  --ge-table-header-east-vertical-border: var(--ge-table-header-center-vertical-border);


  --ge-table-body-west-bg: var(--ge-table-header-center-bg);
  --ge-table-body-center-bg: rgba(255,255,255, 0.5);
  --ge-table-body-east-bg: var(--ge-table-header-center-bg);

  --ge-table-body-west-text: var(--ge-table-header-center-text);
  --ge-table-body-center-text: var(--ge-table-header-center-text);
  --ge-table-body-east-text: var(--ge-table-header-center-text);

  --ge-table-body-west-horizontal-border: var(--ge-table-header-west-horizontal-border);
  --ge-table-body-west-vertical-border: var(--ge-table-header-west-vertical-border);
  --ge-table-body-center-horizontal-border: #bbb;
  --ge-table-body-center-vertical-border: #ddd;
  --ge-table-body-east-horizontal-border: var(--ge-table-header-east-horizontal-border);
  --ge-table-body-east-vertical-border: var(--ge-table-header-east-vertical-border);;

  --ge-table-body-west-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-center-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-east-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-west-selected-range-text: #000;
  --ge-table-body-center-selected-range-text: #000;
  --ge-table-body-east-selected-range-text: #000;




  --ge-table-footer-west-bg: var(--ge-table-header-center-bg);
  --ge-table-footer-center-bg: var(--ge-table-header-center-bg);
  --ge-table-footer-east-bg: var(--ge-table-header-center-bg);

  --ge-table-footer-west-text: var(--ge-table-header-center-text);
  --ge-table-footer-center-text: var(--ge-table-header-center-text);
  --ge-table-footer-east-text: var(--ge-table-header-center-text);

  --ge-table-footer-west-horizontal-border: var(--ge-table-header-west-horizontal-border);
  --ge-table-footer-west-vertical-border: var(--ge-table-header-west-vertical-border);
  --ge-table-footer-center-horizontal-border: var(--ge-table-header-center-horizontal-border);
  --ge-table-footer-center-vertical-border: var(--ge-table-header-center-vertical-border);
  --ge-table-footer-east-horizontal-border: var(--ge-table-header-east-horizontal-border);
  --ge-table-footer-east-vertical-border: var(--ge-table-header-east-vertical-border);


  --ge-table-border : #ccc;

  --ge-table-row-odd-bg: transparent;
  --ge-table-row-even-bg: transparent;
  --ge-table-column-odd-bg: transparent;
  --ge-table-column-even-bg: transparent;

  --ge-table-hover-column-bg: rgba(0, 224, 255, 0.27);
  --ge-table-hover-row-bg: rgba(0, 224, 255, 0.27);
  --ge-table-focus-border: rgb(0, 255, 255);

  --ge-table-color-error-text: #e00034;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: rgb(0, 255, 255);

  --ge-table-dragged-col-div-bg: lightcyan;
  --ge-table-drop-zone-bg: rgba(244, 255, 242, 0.6);
}
`;


export function createColumnDefs(
  bigScreen: boolean = true
): ColumnDefIf[] {


  const defs = bigScreen ? [
      ColumnDef.create({
        property: "selected",
        headerLabel: " ",
        width: px50,
        bodyRenderer: new CheckboxBooleanPropertyCellRenderer<ThemeRowIf>("selected")
      }),
      ColumnDef.create({
        property: "id",
        headerLabel: "CSS var",
        width: new Size(340, "px"),
        bodyClasses: ["ge-table-text-align-left"],
        headerClasses: ["ge-table-text-align-left"]
      }),
      new ColumnDef("area", "Area", px60),
      new ColumnDef("side", "Side", px60),
      new ColumnDef("type", "Type", px60),
      ColumnDef.create({
        property: "value",
        headerLabel: "CSS Value",
        width: new Size(340, "px"),
        bodyClasses: ["ge-table-text-align-left"],
        headerClasses: ["ge-table-text-align-left"]
      }),
      ColumnDef.create({
        property: "value",
        headerLabel: " ",
        width: new Size(34, "px"),
        bodyRenderer: new CssColorCellRenderer()
      })
    ]
    :
    [
      ColumnDef.create({
        property: "selected",
        headerLabel: " ",
        width: px50,
        bodyRenderer: new CheckboxBooleanPropertyCellRenderer<ThemeRowIf>("selected")
      }),
      ColumnDef.create({
        property: "id",
        headerLabel: "CSS var",
        width: new Size(300, "px"),
        bodyClasses: ["ge-table-text-align-left"],
        headerClasses: ["ge-table-text-align-left"]
      })
    ];
  for (const def of defs) {
    def.sortable = () => true;
  }
  return defs;
}

function createTableRows(
  dark: boolean = true
): ThemeRowIf[] {
  const css = dark ? COLOR_VARS_DARK : COLOR_VARS_LIGHT;
  return css
    .split("\n")
    .map(r => r.trim())
    .filter(r => r.includes("--ge-table"))
    .map(r => {
      const [l, v] = r.split(": ");

      return new ThemeRow(
        false,
        l.trim(),
        l.includes("header") ? "header" : l.includes("footer") ? "footer" : l.includes("body") ? "body" : "",
        l.includes("west") ? "west" : l.includes("east") ? "east" : l.includes("center") ? "center" : "",
        l.includes("bg") ? "bg" : l.includes("text") ? "text" : l.includes("border") ? "border" : "",
        undefined,
        v
      );
    });
}


export function createThemeTableModel(
  tableOptions: TableOptions = new TableOptions(),
  dark: boolean = true,
  bigScreen: boolean = true
): TableModelIf {
  const rows: ThemeRowIf[] = createTableRows(dark);
  const columnDefs: ColumnDefIf[] = createColumnDefs(bigScreen);

  if (!bigScreen) {
    tableOptions.defaultRowHeights.header = 0;
  }
  let tableModel = TableFactory.createTableModel({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: bigScreen ? 1 : 0
  });
  let bodyModel = tableModel.getBodyModel() as AreaModelObjectArrayWithColumndefs<ThemeRowIf>;
  bodyModel.isRowChecked = (rowIndex: number): CheckedType | undefined => {
    const sel = bodyModel.getValueAt(rowIndex, 0);
    return sel ? "full" : "none";
  };
  return tableModel;
}


