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
import { HeaderGroupOptionsIf } from './header-group-options.if';
/**
 * Represents the options for configuring a table.
 *
 * | Class Property                   | Description                                                                                   |
 * |----------------------------------|-----------------------------------------------------------------------------------------------|
 * | headerSeparatorBorderVisible     | Indicates whether the header separator border is visible.                                      |
 * | footerSeparatorBorderVisible     | Indicates whether the footer separator border is visible or not.                                |
 * | fixedEastSeparatorBorderVisible  | Determines whether the fixed east separator border is visible.                                  |
 * | fixedWestSeparatorBorderVisible  | Indicates whether the fixed west separator border should be visible.                            |
 * | verticalBorderVisible            | Indicates whether the vertical border is visible.                                               |
 * | horizontalBorderVisible          | Represents the visibility of the horizontal border.                                             |
 * | overflowX                        | Determines the behavior of horizontal overflow for the table body (scroll port).               |
 * | overflowY                        | Determines the behavior of vertical overflow for the table body (scroll port).                 |
 * | tableTopBorderVisible            | Indicates whether the top border of a table is visible or hidden.                                |
 * | tableBottomBorderVisible         | Specifies whether the bottom border of a table is visible.                                       |
 * | hoverRowVisible                  | Flag indicating whether the hover color of a row is visible or not in general.                  |
 * | hoverColumnVisible               | Flag indicating whether the hover color of a column is visible or not in general.               |
 * | columnsResizable                 | Represents whether the columns are resizable.                                                    |
 * | columnsDraggable                 | Flag indicating whether the columns are draggable.                                               |
 * | columnResizeHandleWidthInPx      | The width of the column resize handle in pixels.                                                 |
 * | headerVerticalSeparator          | Represents whether a vertical separator should be displayed in a header.                        |
 * | footerVerticalSeparator          | Indicates whether a vertical separator should be displayed in the footer.                       |
 * | defaultRowHeights                | Represents the default row heights for a given table.                                            |
 * | headerToggleExpandCollapseIcons  | Indicates whether to show toggle icons in the header.                                            |
 * | treeOptions                      | Represents the options for configuring a tree.                                                   |
 * | headerGroupOptions               | Represents the options for expnded/collapsed icons of the header groups.                                                   |
 * | showCheckboxWihoutExtraColumn    | Indicates whether to show checkbox without an extra column.                                       |
 * | externalFilterFunction           | Represents the external filter function used to filter table rows.                                |
 * | sortedOptions                    | Represents a sorted options object.                                                              |
 * | sortOrder                        | Represents the sort order of the columns.                                                        |
 * | autoRestoreOptions               | Represents auto restoration options.                                                             |
 * | getEditRenderer                  | Retrieves the edit renderer for a specific action.                                                |
 * | getSelectionModel                | Retrieves the selection model for a specific object.                                              |
 * | getFocusModel                    | Retrieves the focus model of the component.                                                       |
 * | shortcutActionIdMapping          | Represents a mapping of shortcut action IDs.                                                     |
 */
export interface TableOptionsIf {
    /**
     * The delay in milliseconds used for debouncing the resize event.
     *
     * @type {number}
     */
    resizeEventDebounceDelay: number;
    /**
     * Indicates whether the header separator border is visible.
     *
     * @type {boolean}
     */
    headerSeparatorBorderVisible: boolean;
    /**
     * Indicates whether the footer separator border is visible or not.
     *
     * @type {boolean}
     */
    footerSeparatorBorderVisible: boolean;
    /**
     * Determines whether the fixed east separator border is visible.
     *
     * @type {boolean}
     */
    fixedEastSeparatorBorderVisible: boolean;
    /**
     * Indicates whether the fixed west separator border should be visible.
     *
     * @type {boolean}
     */
    fixedWestSeparatorBorderVisible: boolean;
    /**
     * Indicates whether the vertical border is visible.
     *
     * @type {boolean}
     */
    verticalBorderVisible: boolean;
    /**
     * Represents the visibility of the horizontal border.
     *
     * @type {boolean}
     */
    horizontalBorderVisible: boolean;
    /**
     * The value of the css `overflowX` determines the behavior of horizontal overflow for the table body (scroll port).
     *
     * @typedef {'auto' | 'scroll'} OverflowX
     */
    overflowX: "auto" | "scroll";
    /**
     * The value of the css `overflowX` determines the behavior of vertical overflow for the table body (scroll port).
     *
     * @typedef {'auto' | 'scroll'} OverflowX
     */
    overflowY: "auto" | "scroll";
    /**
     * Indicates whether the top border of a table is visible or hidden.
     *
     * @type {boolean}
     */
    tableTopBorderVisible: boolean;
    /**
     * Specifies whether the bottom border of a table is visible.
     *
     * @type {boolean}
     */
    tableBottomBorderVisible: boolean;
    /**
     * Flag indicating whether the hover color of a row is visible or not in general.
     * If true, the row get the hover background color while the mouse is over the row.
     *
     * @type {boolean}
     */
    hoverRowVisible: boolean;
    /**
     * Flag indicating whether the hover color of a column is visible or not in general.
     * If true, the column get the hover background color while the mouse is over the column.
     *
     * @typedef {boolean} hoverColumnVisible
     */
    hoverColumnVisible: boolean;
    /**
     * Represents whether the columns are resizable.
     *
     * @type {boolean}
     */
    columnsResizable: boolean;
    /**
     * Flag indicating whether the columns are draggable.
     *
     * @type {boolean}
     */
    columnsDraggable: boolean;
    /**
     * The width of the column resize handle in pixels.
     *
     * @type {number}
     */
    columnResizeHandleWidthInPx: number;
    /**
     * Represents whether a vertical separator should be displayed in a header.
     *
     * @type {boolean}
     * @since 1.0.0
     */
    headerVerticalSeparator: boolean;
    /**
     * Indicates whether a vertical separator should be displayed in the footer.
     *
     * @type {boolean}
     */
    footerVerticalSeparator: boolean;
    /**
     * Represents the default row heights (for header, body and footer) for a given table.
     *
     * @typedef {number[]} DefaultRowHeightsIf
     * @description An array of numbers representing the default height for each row in a table.
     */
    defaultRowHeights: DefaultRowHeightsIf;
    headerToggleExpandCollapseIcons: boolean;
    treeOptions: TreeOptionsIf;
    headerGroupOptions: HeaderGroupOptionsIf;
    /**
     * Indicates whether to show checkbox without an extra column.
     * If true and the row is checkable, a checkbox is rendered in the first column.
     * If false and the row is checkable, a checkbox is rendered in an extra column left to the first column.
     *
     * @type {boolean}
     */
    showCheckboxWihoutExtraColumn: boolean;
    /**
     * Represents the external filter function that will be used to filter the table rows.
     *
     * @typedef {FilterFunction<any> | undefined} externalFilterFunction
     */
    externalFilterFunction: FilterFunction<any> | undefined;
    /**
     * Represents a sorted options object.
     *
     * @class
     * @classdesc The SortedOptions represents a class that defines sorted icons, which will displayed in the header (if column is sortable).
     */
    sortedOptions: SortedOptionsIf;
    /**
     * Represents the sort order of the columns.
     *
     * @typedef {SortState[]} sortOrder
     */
    sortOrder: SortState[];
    autoRestoreOptions?: AutoRestoreOptionsIf<any>;
    /**
     * Retrieves the edit renderer for a specific action.
     *
     * @function
     * @name getEditRenderer
     * @param {string} action - The action for which to retrieve the edit renderer.
     * @returns {GetEditRenderer} - The edit renderer for the specified action.
     */
    getEditRenderer?: GetEditRenderer;
    /**
     * Retrieves the selection model for a specific object.
     *
     * @param {SelectionModelIf} targetObj - The target object to retrieve the selection model from.
     * @return {GetT<SelectionModelIf>} - The selection model for the given object.
     */
    getSelectionModel?: GetT<SelectionModelIf>;
    /**
     * Retrieves the focus model of the component.
     *
     * @returns {GetT<FocusModelIf>} The focus model of the component.
     */
    getFocusModel?: GetT<FocusModelIf>;
    /**
     * Represents a mapping of shortcut action IDs.
     *
     * @typedef {Object} ShortcutActionIdMapping
     * @property {string} [shortcutId] - The ID of the shortcut.
     * @property {string} [actionId] - The ID of the action associated with the shortcut.
     */
    shortcutActionIdMapping?: ShortcutActionIdMapping;
}
