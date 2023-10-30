import { EleScope } from "./ele-scope";
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { ConvenienceDomService } from "./service/convenience-dom.service";
import { TableOptionsIf } from "./data/options/table-options.if";
import { CellRange } from "./data/common/cell-range";
import { RendererCleanupFnType } from "./renderer/renderer-cleanup-fn.type";
import { AreaIdent } from "./data/tablemodel/area-ident.type";
import { SideIdent } from "./data/side-ident.type";
import { DivScope } from "./data/div-scope.type";
import { AreaModelIf } from "./data/tablemodel/areamodel/area-model.if";
import { ArgsAdjustColumnsToRowParentParams } from "./data/common/args-adjust-columns-to-row-parent-params";
import { ArgsRenderCellDiv } from "./data/common/args-render-cell-div";
import { StoreStateScrollPosService } from "./service/store-state-scroll-pos.service";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { SelectionModelIf } from "./selection/selection-model.if";
import { GetT } from "./data/common/get-t";
import { FocusModelIf } from "./focus/focus-model.if";
import { ColAndRowspanModel } from "./data/tablemodel/areamodel/col-and-rowspan-model";
import { AreaObjectMapType } from "./data/common/area-map.type";
import { TableCellUpdateEventIf } from "./data/common/event/input/table-cell-update-event.if";
export declare class RenderScope extends EleScope {
    protected storeScrollPosStateService?: StoreStateScrollPosService;
    protected getSelectionModel?: GetT<SelectionModelIf>;
    protected getFocusModel?: GetT<FocusModelIf>;
    protected scrollLeft: number;
    protected scrollViewportLeft: number;
    protected scrollFactorY: number;
    protected scrollFactorX: number;
    protected readonly cleanupFunctions: {
        header: (RendererCleanupFnType)[];
        body: (RendererCleanupFnType)[];
        footer: (RendererCleanupFnType)[];
    };
    protected tree: boolean;
    protected colAndRowspanModels: AreaObjectMapType<ColAndRowspanModel>;
    protected firstVisibleRowIndex: number;
    protected draggingTargetColumnIndex: number;
    protected mouseEvent?: GeMouseEvent;
    private debounceTimeout?;
    private editorRenderer?;
    private editorRendererColumn?;
    private editorRendererRow?;
    private removables;
    constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, dom: ConvenienceDomService, tableOptions: TableOptionsIf);
    protected editing: boolean;
    isEditing(): boolean;
    resetEditorRenderer(): void;
    clearSelection(): void;
    initRenderEditor(rowIdx: number, colIdx: number): void;
    repaint(): void;
    adjustAfterScrolling(): void;
    checkForScrollPosSaving(): void;
    updateCells(events: TableCellUpdateEventIf[]): void;
    protected getAreaAndSideIdentByAttr(srcElement: HTMLElement): [AreaIdent | undefined, SideIdent | undefined];
    protected getArea(rowIdent: AreaIdent, sideIdent: SideIdent): DivScope;
    protected adjustBody(): void;
    protected getNumberByAttr(srcElement: HTMLElement, key: string): number;
    protected getStringByAttr(srcElement: HTMLElement, key: string): string;
    protected adjustArea(areaIdent: AreaIdent, yStart?: number): void;
    /**
     * Draws big cells (rowspan and or colspan) in body/center
     * @param range CellRange
     * @param xStart X position in pixel for top left corner
     * @param yStart Y position in pixel for top left corner
     * @param areaModel AreaModelIf
     * @param parentDiv Parent div as HTMLDivElement
     * @param sideIdent SideIdent (west,center,east)
     * @protected
     */
    protected drawBigCell(range: CellRange, xStart: number, yStart: number, areaModel: AreaModelIf, parentDiv: HTMLDivElement, sideIdent: SideIdent): void;
    protected findRowOfImportantRowspanCell(areaModel: AreaModelIf, rowIndex: number, colIndex: number): number;
    protected adjustColumnsToRowParent({ areaIdent, sideIdent, areaModel, geo, parent, rowIndex, columnIndexStart, columnIndexEnd, verticalFixed, lastRowOfModel }: ArgsAdjustColumnsToRowParentParams): void;
    protected getTreeArrowColumnIndex(): 0 | 1;
    protected addAndRenderCellDiv({ areaModel, areaIdent, sideIdent, rowIndex, index, left, width, height, top, parent, lastRowOfModel }: ArgsRenderCellDiv): [HTMLDivElement, RendererCleanupFnType | undefined];
    protected getColumnWidths(startIndex: number, endIndex: number): number[];
    protected getRowHeights(startIndex: number, endIndex: number, areaModel: AreaModelIf): number[];
    protected adjustHoverRows(mouseMoveEvent: GeMouseEvent): void;
    protected hideHoverRow(): void;
    protected adjustHoverColumns(mouseMoveEvent: GeMouseEvent): void;
    protected hideHoverColumn(): void;
    protected debounce(fn: Function, delay?: number): void;
    private renderDragTargetDiv;
    private renderSelectedBackgroundDiv;
    private renderCell;
    private renderHeaderCellResizeHandle;
}
