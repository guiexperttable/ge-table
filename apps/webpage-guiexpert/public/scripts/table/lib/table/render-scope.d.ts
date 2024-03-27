import { EleScope } from './ele-scope';
import { TableModelIf } from './data/tablemodel/table-model.if';
import { ConvenienceDomService } from './service/convenience-dom.service';
import { TableOptionsIf } from './data/options/table-options.if';
import { CellRange } from './data/common/cell-range';
import { RendererCleanupFnType } from './renderer/renderer-cleanup-fn.type';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { SideIdent } from './data/side-ident.type';
import { DivScope } from './data/div-scope.type';
import { AreaModelIf } from './data/tablemodel/areamodel/area-model.if';
import { ArgsAdjustColumnsToRowParentParams } from './data/common/args-adjust-columns-to-row-parent-params';
import { ArgsRenderCellDiv } from './data/common/args-render-cell-div';
import { StoreStateScrollPosService } from './service/store-state-scroll-pos.service';
import { GeMouseEvent } from './data/common/event/ge-mouse-event';
import { GeoData } from './data/geo-data';
import { SelectionModelIf } from './selection/selection-model.if';
import { GetT } from './data/common/get-t';
import { FocusModelIf } from './focus/focus-model.if';
import { ColAndRowspanModel } from './data/tablemodel/areamodel/col-and-rowspan-model';
import { AreaObjectMapType } from './data/common/area-map.type';
import { TableCellUpdateEventIf } from './data/common/event/input/table-cell-update-event.if';
export declare class RenderScope extends EleScope {
    protected dragging: boolean;
    protected editing: boolean;
    protected storedColumnWidths: number[];
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
    isEditing(): boolean;
    /**
     * Resets the editor renderer by clearing its values and state.
     *
     * @function resetEditorRenderer
     * @memberof ClassName
     *
     * @returns {void}
     */
    resetEditorRenderer(): void;
    /**
     * Clears the selection in the component.
     *
     * @param {boolean} rerender - Indicates whether to rerender the component after clearing the selection. Default value is false.
     *
     * @return {void}
     */
    clearSelection(rerender?: boolean): void;
    /**
     * Initializes and renders the editor for a specified row and column index.
     *
     * @param {number} rowIdx - The index of the row.
     * @param {number} colIdx - The index of the column.
     */
    initRenderEditor(rowIdx: number, colIdx: number): void;
    /**
     * Adjusts the content after scrolling and initiates a repaint of the component.
     *
     * @return {void}
     */
    repaint(): void;
    /**
     * Repaints the UI by resetting the size of the wrapper div,
     * adjusting the containers and rows, and performing additional adjustments
     * after scrolling.
     *
     * @return {void} This method does not return any value.
     */
    repaintHard(): void;
    /**
     * Recalculates the column widths of the table.
     *
     * @param {number} [clientWidth] - The client width of the table. If not provided, the client width of the scroll viewport will be used.
     *
     * @return {undefined}
     */
    recalcColumnWidths(clientWidth?: number): void;
    /**
     * Adjusts the table after scrolling. This method performs various adjustments
     * to the table's appearance and behavior after a scroll event occurs.
     */
    adjustAfterScrolling(): void;
    /**
     * Checks if the scroll position should be saved and saves it.
     *
     * @return {void}
     */
    checkForScrollPosSaving(): void;
    /**
     * Updates the cells in the table with the provided values and optionally repaints all cells.
     *
     * @param {TableCellUpdateEventIf[]} events - The array of events containing information about the cells to update.
     * @param {boolean} repaintAll - Optional. If true, repaints all cells after updating. Defaults to false.
     *
     * @returns {void}
     */
    updateCells(events: TableCellUpdateEventIf[], repaintAll?: boolean): void;
    /**
     * Rerenders the content of a table cell based on the given parameters.
     *
     * @param {TableCellUpdateEventIf} area - The area of the table.
     * @param {number} rowIndex - The index of the row.
     * @param {number} columnIndex - The index of the column.
     * @param {any} value - The new value to be displayed in the cell.
     * @param {string[]} cssClasses - An array of CSS classes to be applied to the cell.
     */
    rerenderCellContent({ area, rowIndex, columnIndex, value, cssClasses }: TableCellUpdateEventIf): void;
    /**
     * Stores the widths of all columns in the table.
     *
     * @protected
     * @function storeColumnWidths
     * @returns {void}
     */
    protected storeColumnWidths(): void;
    protected getAreaAndSideIdentByAttr(srcElement: HTMLElement): [AreaIdent | undefined, SideIdent | undefined];
    /**
     * Retrieves the specified area from the grid layout.
     *
     * @param {string} areaIdent - The identifier for the area ('header', 'body', or 'footer').
     * @param {string} sideIdent - The identifier for the side of the area ('west', 'center', or 'east').
     * @protected
     * @returns {HTMLElement} - The requested area element.
     * @throws {Error} - If the area identifier or side identifier is incorrect.
     */
    protected getArea(areaIdent: AreaIdent, sideIdent: SideIdent): DivScope;
    /**
     * Adjusts the body of the table.
     *
     * @protected
     * @return {void}
     */
    protected adjustBody(): void;
    /**
     * Returns a number value extracted from the specified attribute of the source element.
     *
     * @param {HTMLElement} srcElement - The source element from which to extract the attribute value.
     * @param {string} key - The attribute key to extract the value from.
     * @returns {number} - The extracted number value, or -1 if the attribute was not found or not a valid number.
     * @protected
     */
    protected getNumberByAttr(srcElement: HTMLElement, key: string): number;
    /**
     * Retrieves the value of the specified attribute from the nearest ancestor element that has the attribute.
     *
     * @param {HTMLElement} srcElement - The source element from which to start searching for the nearest ancestor element.
     * @param {string} key - The name of the attribute to retrieve.
     * @returns {string} The value of the specified attribute, or an empty string if the attribute is not found.
     * @protected
     */
    protected getStringByAttr(srcElement: HTMLElement, key: string): string;
    /**
     * Adjusts the layout and positioning of the specified area in the table.
     * This method is used internally and should not be called directly.
     *
     * @param {AreaIdent} areaIdent - The identifier of the area to adjust (e.g. header, body, footer).
     * @param {number} [yStart=0] - The starting y-position for the layout adjustments.
     * @protected
     */
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
    /**
     * Finds the row index of an important rowspan cell in a given area model.
     *
     * @param {AreaModelIf} areaModel - The area model to search in.
     * @param {number} rowIndex - The current row index.
     * @param {number} colIndex - The current column index.
     * @returns {number} - The row index of the important rowspan cell, or -1 if not found.
     * @protected
     */
    protected findRowOfImportantRowspanCell(areaModel: AreaModelIf, rowIndex: number, colIndex: number): number;
    /**
     * Adjusts the columns to fit the width of the row's parent element.
     *
     * @param {ArgsAdjustColumnsToRowParentParams} params - The parameters for adjusting the columns.
     * @protected
     * @return {void}
     */
    protected adjustColumnsToRowParent({ areaIdent, sideIdent, areaModel, geo, parent, rowIndex, columnIndexStart, columnIndexEnd, verticalFixed, lastRowOfModel }: ArgsAdjustColumnsToRowParentParams): void;
    /**
     * Retrieves the column index of the tree arrow column in the table.
     *
     * @protected
     *
     * @returns {0 | 1} The column index of the tree arrow column.
     *                Returns 0 if the checkbox is not visible,
     *                otherwise returns 1.
     */
    protected getTreeArrowColumnIndex(): 0 | 1;
    protected addAndRenderCellDiv({ areaModel, areaIdent, sideIdent, rowIndex, index, left, width, height, top, parent, lastRowOfModel }: ArgsRenderCellDiv): [HTMLDivElement, RendererCleanupFnType | undefined];
    /**
     * Applies CSS classes to an HTML element.
     *
     * @param {HTMLDivElement} ele - The HTML element to which CSS classes will be applied.
     * @param {Object.<string, boolean>} cssClasses - An object containing CSS class names as keys and boolean values indicating whether to apply or remove the class.
     * @protected
     */
    protected applyCssClasses(ele: HTMLDivElement, cssClasses?: {
        [key: string]: boolean;
    }): void;
    /**
     * Retrieves the column widths of a table within a specified range.
     *
     * @param {number} startIndex - The index of the first column to retrieve the width of.
     * @param {number} endIndex - The index of the last column to retrieve the width of.
     *
     * @return {number[]} An array containing the widths of the columns within the specified range.
     */
    protected getColumnWidths(startIndex: number, endIndex: number): number[];
    /**
     * Retrieves the heights of rows within a specified range.
     *
     * @param {number} startIndex - The index of the first row in the range.
     * @param {number} endIndex - The index of the last row in the range.
     * @param {AreaModelIf} areaModel - The area model.
     * @return {number[]} - An array containing the heights of the rows within the specified range.
     */
    protected getRowHeights(startIndex: number, endIndex: number, areaModel: AreaModelIf): number[];
    /**
     * Adjusts the position and size of the hover row based on the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
     *
     * @return {void}
     */
    protected adjustHoverRows(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Hides the hover row by applying 'display: none' style to it.
     *
     * @protected
     * @function
     * @name hideHoverRow
     * @memberof ClassName
     *
     * @returns {void}
     */
    protected hideHoverRow(): void;
    /**
     * Adjusts the position and size of the hover column based on the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
     */
    protected adjustHoverColumns(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Hide hover column.
     *
     * This method hides the hover column by applying a style of 'display: none'
     * to the element representing the hover column.
     *
     * @protected
     * @memberof ClassName
     */
    protected hideHoverColumn(): void;
    /**
     * Executes a function after a specified delay, ensuring that the function is called only once within that delay period.
     *
     * @param {() => void} fn - The function to be executed.
     * @param {number} [delay=1000] - The delay in milliseconds before executing the function.
     *
     * @return {undefined}
     */
    protected debounce(fn: () => void, delay?: number): void;
    /**
     * Adjusts the dragging column during a mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
     * @param {number} sourceColumnIndex - The index of the source column.
     * @param {boolean} firstDraggingRendering - Indicates if it's the first rendering of the dragging column.
     */
    protected adjustDraggingColumn(mouseMoveEvent: GeMouseEvent, sourceColumnIndex: number, firstDraggingRendering: boolean): void;
    /**
     * Renders the content of a dragging column.
     *
     * @param {GeoData} columnGeo - The geographic data of the column.
     *
     * @returns {number} The y-coordinate of the rendered content.
     */
    protected renderContentOfDraggingColumn(columnGeo: GeoData): void;
    /**
     * Renders the content of the dragging column for a specific area.
     *
     * @param {GeoData} columnGeo - The geometry data of the dragging column.
     * @param {AreaIdent} areaIdent - The identifier of the area.
     * @param {number} [y=0] - The starting y-position.
     * @return {number} The final y-position after rendering all the content.
     */
    protected renderContentOfDraggingColumnForArea(columnGeo: GeoData, areaIdent: AreaIdent, y?: number): number;
    /**
     * Hides the dragging column by applying a 'display: none' style to it.
     * This method is protected and can only be accessed within the class.
     *
     * @return {void}
     */
    protected hideDraggingColumn(): void;
    /**
     * Renders a draggable target div element.
     *
     * @param {HTMLDivElement} parent - The parent element where the target div will be appended to.
     * @param {number} left - The left position of the target div in pixels.
     * @param {number} top - The top position of the target div in pixels.
     * @param {number} width - The width of the target div in pixels.
     * @param {number} height - The height of the target div in pixels.
     * @return {HTMLDivElement} - The rendered draggable target div element.
     */
    private renderDragTargetDiv;
    /**
     * Render selected background div.
     *
     * @private
     * @param {boolean} skip - Whether to skip rendering.
     * @param {boolean} renderSelection - Whether to render the selection.
     * @param {SideIdent} sideIdent - The side identifier.
     * @param {AreaModelIf} areaModel - The area model.
     * @param {number} rowIndex - The row index.
     * @param {number} index - The index.
     * @param {HTMLDivElement} parent - The parent div element.
     * @param {number} left - The left position.
     * @param {number} top - The top position.
     * @param {number} width - The width of the div.
     * @param {number} height - The height of the div.
     * @returns {boolean} - Whether the cell is selected.
     */
    private renderSelectedBackgroundDiv;
    /**
     * Renders a cell in the grid.
     *
     * @param {ArgsRenderCell} args - The arguments for rendering the cell.
     * @param {AreaModel} args.areaModel - The area model of the grid.
     * @param {string} args.areaIdent - The identifier of the area.
     * @param {string} args.sideIdent - The identifier of the side.
     * @param {number} args.rowIndex - The index of the row.
     * @param {number} args.columnIndex - The index of the column.
     * @param {number} args.left - The left position of the cell.
     * @param {number} args.top - The top position of the cell.
     * @param {number} args.width - The width of the cell.
     * @param {number} args.height - The height of the cell.
     * @param {HTMLElement} args.parent - The parent element of the cell.
     * @param {boolean} args.cellSelected - Indicates if the cell is selected.
     * @param {boolean} args.lastRowOfModel - Indicates if the cell is in the last row of the model.
     *
     * @returns {void}
     */
    private renderCell;
    /**
     * Render the header cell resize handle.
     *
     * @param {ArgsRenderHeaderCellResizeHandle} args - The arguments for rendering the handle.
     * @param {number} args.rowIndex - The index of the row.
     * @param {number} args.columnIndex - The index of the column.
     * @param {number} args.cellLeft - The left position of the cell.
     * @param {number} args.cellTop - The top position of the cell.
     * @param {number} args.cellWidth - The width of the cell.
     * @param {number} args.cellHeight - The height of the cell.
     * @param {HTMLElement} args.parent - The parent element to append the handle to.
     *
     * @return {void}
     */
    private renderHeaderCellResizeHandle;
}
