import { TableModelIf } from "@guiexpert/table";
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
    treeOptions: import("@guiexpert/table").TreeOptions;
    showCheckboxWihoutExtraColumn: boolean;
    externalFilterFunction: import("@guiexpert/table").FilterFunction<any> | undefined;
    sortedOptions: import("@guiexpert/table").SortedOptions;
    sortOrder: import("@guiexpert/table").SortState[];
    shortcutActionIdMapping?: import("@guiexpert/table").ShortcutActionIdMapping | undefined;
    getEditRenderer?: import("@guiexpert/table").GetEditRenderer | undefined;
    getSelectionModel?: import("@guiexpert/table").GetT<import("@guiexpert/table").SelectionModelIf> | undefined;
    getFocusModel?: import("@guiexpert/table").GetT<import("@guiexpert/table").FocusModelIf> | undefined;
};
export declare function createTimeTableModel(): TableModelIf;
