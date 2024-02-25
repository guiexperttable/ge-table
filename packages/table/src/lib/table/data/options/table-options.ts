import { DefaultRowHeightsIf } from "./default-row-heights.if";
import { TableOptionsIf } from "./table-options.if";
import { TreeOptions } from "./tree-options";
import { FilterFunction } from "../common/filter-function";
import { SortState } from "../common/sort-state.type";
import { SortedOptions } from "./sorted-options";
import { InputCellRenderer } from "../../renderer/edit/input-cell-renderer";
import { GetEditRenderer } from "../../renderer/edit/edit-cell-renderer.type";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { SelectionModel } from "../../selection/selection-model";
import { GetT } from "../common/get-t";
import { FocusModelIf } from "../../focus/focus-model.if";
import { FocusModel } from "../../focus/focus-model";
import { ShortcutActionIdMapping } from "../../action/shortcut-actionid-mapping.type";
import { HeaderGroupOptions } from './header-group-options';

const selectionModel = new SelectionModel();
const focusModel = new FocusModel("cell");

/**
 * TableOptions class provides configuration options for the table.
 */
export class TableOptions implements TableOptionsIf {

  overflowX: "auto" | "scroll" = "auto";
  overflowY: "auto" | "scroll" = "auto";

  horizontalBorderVisible = true;
  verticalBorderVisible = true;
  footerSeparatorBorderVisible = true;
  headerSeparatorBorderVisible = true;
  fixedEastSeparatorBorderVisible = true;
  fixedWestSeparatorBorderVisible = true;

  tableTopBorderVisible = true;
  tableBottomBorderVisible = true;
  // TODO tableLeftBorderVisible = true;
  // TODO tableRightBorderVisible = true;

  hoverRowVisible = true;
  hoverColumnVisible = true;
  columnsResizable = true;
  columnsDraggable = true;
  columnResizeHandleWidthInPx = 4;

  defaultRowHeights: DefaultRowHeightsIf = {
    header: 34,
    body: 34,
    footer: 34
  };

  footerVerticalSeparator = false;

  headerToggleExpandCollapseIcons = false;
  headerVerticalSeparator = false;

  treeOptions = new TreeOptions();
  headerGroupOptions = new HeaderGroupOptions();
  showCheckboxWihoutExtraColumn = false;

  externalFilterFunction: FilterFunction<any> | undefined = undefined;
  sortedOptions = new SortedOptions();
  sortOrder: SortState[] = ["asc", "desc"];
  shortcutActionIdMapping?: ShortcutActionIdMapping;

  resizeEventDebounceDelay = 500;

  getEditRenderer?: GetEditRenderer = (_rowIndex: number, _columnIndex: number) => new InputCellRenderer();

  getSelectionModel?: GetT<SelectionModelIf> = () => selectionModel;

  getFocusModel?: GetT<FocusModelIf> = () => focusModel;
}
