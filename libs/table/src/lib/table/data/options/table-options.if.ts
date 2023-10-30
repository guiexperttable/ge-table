import { DefaultRowHeightsIf } from "./default-row-heights.if";
import { TreeOptionsIf } from "./tree-options.if";
import { FilterFunction } from "../common/filter-function";
import { SortState } from "../common/sort-state.type";
import { SortedOptionsIf } from "./sorted-options.if";
import { AutoRestoreOptionsIf } from "./auto-restore-options.if";
import { GetEditRenderer } from "../../renderer/edit/edit-cell-renderer.type";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { GetT } from "../common/get-t";
import { FocusModelIf } from "../../focus/focus-model.if";
import { ShortcutActionIdMapping } from "../../action/shortcut-actionid-mapping.type";

export interface TableOptionsIf {
  headerSeparatorBorderVisible: boolean;
  footerSeparatorBorderVisible: boolean;
  fixedEastSeparatorBorderVisible: boolean;
  fixedWestSeparatorBorderVisible: boolean;
  verticalBorderVisible: boolean;
  horizontalBorderVisible: boolean;

  overflowX: "auto" | "scroll";
  overflowY: "auto" | "scroll";

  tableTopBorderVisible: boolean;
  tableBottomBorderVisible: boolean;
  hoverRowVisible: boolean;
  hoverColumnVisible: boolean;
  columnsResizable: boolean;
  columnsDraggable: boolean;
  columnResizeHandleWidthInPx: number;

  headerVerticalSeparator: boolean;
  footerVerticalSeparator: boolean;

  defaultRowHeights: DefaultRowHeightsIf;

  headerToggleExpandCollapseIcons: boolean;

  treeOptions: TreeOptionsIf;
  showCheckboxWihoutExtraColumn: boolean;

  externalFilterFunction: FilterFunction<any> | undefined;

  sortedOptions: SortedOptionsIf;
  sortOrder: SortState[],

  autoRestoreOptions?: AutoRestoreOptionsIf<any>;

  getEditRenderer?: GetEditRenderer;
  getSelectionModel?: GetT<SelectionModelIf>;
  getFocusModel?: GetT<FocusModelIf>;

  shortcutActionIdMapping?: ShortcutActionIdMapping;
}
