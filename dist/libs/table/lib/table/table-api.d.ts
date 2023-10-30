import { TableScope } from "./table-scope";
import { ColumnDefIf } from "./data/tablemodel/column/column-def.if";
import { TableCellUpdateEventIf } from "./data/common/event/input/table-cell-update-event.if";
export declare class TableApi {
    private readonly tableScope;
    constructor(tableScope: TableScope);
    updateCells(events: TableCellUpdateEventIf[]): void;
    externalFilterChanged(): void;
    scrollToPixel(_px?: number, _py?: number): void;
    scrollToIndex(_indexX?: number, _indexY?: number): void;
    setHeaderVisible(_visible?: boolean): void;
    setColumnVisible(_column: number | ColumnDefIf, _visible?: boolean): void;
    isColumnVisible(_column: number | ColumnDefIf): boolean;
    isHeaderVisible(): boolean;
    setFooterVisible(_visible?: boolean): void;
    isFooterVisible(): boolean;
    repaint(): void;
}
