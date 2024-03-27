import { DefaultRowHeightsIf } from "./default-row-heights.if";
import { TableOptionsIf } from "./table-options.if";
import { TreeOptions } from "./tree-options";
import { FilterFunction } from "../common/filter-function";
import { SortState } from "../common/sort-state.type";
import { SortedOptions } from "./sorted-options";
import { GetEditRenderer } from "../../renderer/edit/edit-cell-renderer.type";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { GetT } from "../common/get-t";
import { FocusModelIf } from "../../focus/focus-model.if";
import { ShortcutActionIdMapping } from "../../action/shortcut-actionid-mapping.type";
import { HeaderGroupOptions } from './header-group-options';
/**
 * TableOptions class provides configuration options for the table.
 */
export declare class TableOptions implements TableOptionsIf {
    overflowX: "auto" | "scroll";
    overflowY: "auto" | "scroll";
    horizontalBorderVisible: boolean;
    verticalBorderVisible: boolean;
    footerSeparatorBorderVisible: boolean;
    headerSeparatorBorderVisible: boolean;
    fixedEastSeparatorBorderVisible: boolean;
    fixedWestSeparatorBorderVisible: boolean;
    tableTopBorderVisible: boolean;
    tableBottomBorderVisible: boolean;
    hoverRowVisible: boolean;
    hoverColumnVisible: boolean;
    columnsResizable: boolean;
    columnsDraggable: boolean;
    columnResizeHandleWidthInPx: number;
    defaultRowHeights: DefaultRowHeightsIf;
    footerVerticalSeparator: boolean;
    headerToggleExpandCollapseIcons: boolean;
    headerVerticalSeparator: boolean;
    treeOptions: TreeOptions;
    headerGroupOptions: HeaderGroupOptions;
    showCheckboxWihoutExtraColumn: boolean;
    externalFilterFunction: FilterFunction<any> | undefined;
    sortedOptions: SortedOptions;
    sortOrder: SortState[];
    shortcutActionIdMapping?: ShortcutActionIdMapping;
    resizeEventDebounceDelay: number;
    getEditRenderer?: GetEditRenderer;
    getSelectionModel?: GetT<SelectionModelIf>;
    getFocusModel?: GetT<FocusModelIf>;
}
