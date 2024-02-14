import { TableModelIf } from '../../../table/src';
export interface TeamIf {
    name: string;
    active: boolean;
}
export interface TeamDataIf {
    id?: number;
    city?: string;
    location?: string;
    team?: TeamIf;
    data?: [number, number, number, number, number, number, number, number, number, number, number, number];
    updatedAt?: Date;
}
export declare const data: TeamDataIf[];
export declare const COL_IDX_UPDATED_AT: number;
export declare const tableOptions: {
    hoverRowVisible: boolean;
    hoverColumnVisible: boolean;
    defaultRowHeights: {
        header: number;
        body: number;
        footer: number;
    };
    columnsDraggable: boolean;
    columnsResizable: boolean;
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
    columnResizeHandleWidthInPx: number;
    footerVerticalSeparator: boolean;
    headerToggleExpandCollapseIcons: boolean;
    headerVerticalSeparator: boolean;
    treeOptions: import('../../../table/src').TreeOptions;
    headerGroupOptions: import("packages/table/src/lib/table/data/options/header-group-options").HeaderGroupOptions;
    showCheckboxWihoutExtraColumn: boolean;
    externalFilterFunction: import('../../../table/src').FilterFunction<any> | undefined;
    sortedOptions: import('../../../table/src').SortedOptions;
    sortOrder: import('../../../table/src').SortState[];
    shortcutActionIdMapping?: import('../../../table/src').ShortcutActionIdMapping | undefined;
    getEditRenderer?: import('../../../table/src').GetEditRenderer | undefined;
    getSelectionModel?: import('../../../table/src').GetT<import('../../../table/src').SelectionModelIf> | undefined;
    getFocusModel?: import('../../../table/src').GetT<import('../../../table/src').FocusModelIf> | undefined;
};
export declare function createTimeTableModel(): TableModelIf;
