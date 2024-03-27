import { TableModelIf } from './data/tablemodel/table-model.if';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { GeMouseEvent } from './data/common/event/ge-mouse-event';
import { DomServiceIf } from './service/dom-service.if';
import { TableOptionsIf } from './data/options/table-options.if';
import { MouseHandler } from './mouse-handler';
import { EventListenerIf } from './event-listener.if';
import { TableApi } from './table-api';
import { StoreStateCollapsedExpandService } from './service/store-state-collapsed-expand.service';
import { StoreStateSortingService } from './service/store-state-sorting.service';
import { RenderScope } from './render-scope';
import { InputHandler } from './input-handler';
import { SelectionService } from './selection/selection-service';
import { GeKeyEvent } from './data/common/event/ge-key-event';
import { OnActionTriggeredIf } from './action/on-action-triggered.if';
import { ActionId } from './action/action-id.type';
import { ShortcutService } from './action/shortcut.service';
import { LicenseManager } from './license-manager';
import { SelectionModel } from './selection/selection-model';
import { CopyServiceIf } from './service/copy-service.if';
import { MouseTargetData } from './data/event/mouse-target-data';
import { SelectionModelIf } from './selection/selection-model.if';
import { FocusModelIf } from './focus/focus-model.if';
import { EventFocusChangedListenerIf } from './focus/event-focus-changed-listener.if';
import { EventSelectionChangedListenerIf } from './selection/event-selection-changed-listener.if';
import { ResizeHandler } from './resize-handler';
/**
 * The TableScope class extends the RenderScope class and provides functionality for rendering and interacting with a table.
 *
 * @property {LicenseManager} licenseManager - An instance of LicenseManager.
 * @property {MouseHandler} mouseHandler - An instance of MouseHandler to handle mouse events.
 * @property {InputHandler} inputHandler - An instance of InputHandler to handle keyboard inputs.
 * @property {ShortcutService} shortcutService - An instance of ShortcutService to register and handle shortcuts.
 * @property {StoreStateCollapsedExpandService | undefined} storeStateCollapsedExpandService - A service to manage and restore the collapsed or expanded state of the table's rows.
 * @property {StoreStateSortingService | undefined} storeSortingService - A service to manage and restore the sort state of the table's columns.
 * @property {SelectionService} selectionService - An instance of SelectionService to manage cell selection in the table.
 * @property {GeKeyEvent | undefined} keyEvent - An object representing the last processed keyboard event.
 * @property {TableApi} api - An instance of TableApi, providing an API for table interactions.
 *
 * Additional properties related to the dragging state of the table:
 * - mouseStartAction: The action performed at the start of a mouse drag operation.
 * - mouseStartWidth: The initial width of an element at the start of a resizing drag operation.
 * - mouseStartColumnIndex: The index of the column at the start of a resizing drag operation.
 * - dragFrom: The initial cell index of a drag operation.
 * - dragTo: The current cell index of a drag operation.
 * - lastDragFrom: The previous initial cell index of a drag operation.
 * - lastDragTo: The previous current cell index of a drag operation.
 * - firstDraggingRendering: A boolean indicating if this is the first render during the current drag operation.
 *
 * Methods: Please refer to the documentation of the superclass RenderScope for the inherited methods.
 * The TableScope class introduces additional methods not listed here. Please refer to the source code for further details.
 */
export declare class TableScope extends RenderScope implements OnActionTriggeredIf, EventFocusChangedListenerIf, EventSelectionChangedListenerIf {
    protected readonly eventListener: EventListenerIf;
    readonly copyService: CopyServiceIf;
    licenseManager: LicenseManager;
    mouseHandler: MouseHandler;
    inputHandler: InputHandler;
    resizeHandler: ResizeHandler;
    shortcutService: ShortcutService;
    storeStateCollapsedExpandService?: StoreStateCollapsedExpandService;
    storeSortingService?: StoreStateSortingService;
    protected selectionService: SelectionService;
    protected keyEvent?: GeKeyEvent;
    private api;
    private mouseStartAction;
    private mouseStartWidth;
    private mouseStartColumnIndex;
    private dragFrom;
    private dragTo;
    private lastDragFrom;
    private lastDragTo;
    private firstDraggingRendering;
    constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, domService: DomServiceIf, tableOptions: TableOptionsIf, eventListener: EventListenerIf, copyService?: CopyServiceIf);
    /**
     * Creates a TableScope instance.
     *
     * @param {HTMLDivElement} hostElement - The HTML div element that will contain the table.
     * @param {TableModelIf} tableModel - The table model object.
     * @param {TableOptionsIf} [tableOptions=new TableOptions()] - The optional table options object.
     * @param {EventListenerIf} [eventListener=new EventAdapter()] - The optional event listener object.
     * @param {DomServiceIf} [domService=new SimpleDomService()] - The optional DOM service object.
     * @param {CopyServiceIf} [copyService=new CopyService()] - The optional copy service object.
     *
     * @return {TableScope} - The newly created TableScope instance.
     */
    static create(hostElement: HTMLDivElement, tableModel: TableModelIf, tableOptions?: TableOptionsIf, eventListener?: EventListenerIf, domService?: DomServiceIf, copyService?: CopyServiceIf): TableScope;
    /**
     * Triggers an action based on the provided actionId.
     *
     * This function can be invoked manually via the table API or by keyboard shortcuts.
     *
     * @param {ActionId} actionId - The identifier of the action to be triggered.
     * @return {boolean} - Returns true if the action was triggered successfully, false otherwise.
     */
    onActionTriggered(actionId: ActionId): boolean;
    updateModelValueAfterEdit(areaIdent: AreaIdent, rowIndex: number, columnIndex: number, value: string): void;
    /**
     * Retrieves the TableApi object.
     *
     * @return {TableApi} The TableApi object.
     */
    getApi(): TableApi;
    /**
     * Initializes the table. Called by the table component.
     *
     * @function firstInit
     * @memberof TableScope
     *
     * @returns {TableScope} This instance of the table scope.
     */
    firstInit(): TableScope;
    /**
     * Creates a GeMouseEvent object based on a MouseEvent.
     *
     * @param {MouseEvent} mouseEvent - The MouseEvent object to create the GeMouseEvent from.
     * @return {GeMouseEvent} - The created GeMouseEvent object.
     */
    createGeMouseEvent(mouseEvent: MouseEvent): GeMouseEvent;
    /**
     * Handles the mouse down event.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     * @return {void}
     */
    onMouseDown(mouseEvent: GeMouseEvent): void;
    /**
     * Handles mouse dragging on the frame.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     * @param startMouseEvent
     */
    mouseDraggingOnFrame(mouseEvent: GeMouseEvent, startMouseEvent: GeMouseEvent | undefined): void;
    /**
     * Handles the end of mouse dragging event on a frame.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     *
     * @returns {void}
     */
    mouseDraggingEndOnFrame(mouseEvent: GeMouseEvent): void;
    /**
     * Handles the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
     * @return {void}
     */
    mouseMove(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Triggers the context menu event based on the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
     * @return {void}
     */
    contextmenu(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Toggles the expand or collapse state of all items in the body area model.
     *
     * @param {boolean} [expand=true] - Whether to expand or collapse all items. Default is true.
     *
     * @return {void}
     */
    toggleExpandCollapseAll(expand?: boolean): void;
    /**
     * Toggles the checkbox state of a specific row in a table.
     *
     * @param {number} rowIdx - The index of the row to toggle the checkbox state.
     * @param {number} _colIdx - The index of the column. This parameter is unused.
     * @param {AreaIdent} areaIdent - The identifier of the table area.
     *
     * @return {void} - This method does not return anything.
     */
    toggleRowCheckbox(rowIdx: number, _colIdx: number, areaIdent: AreaIdent): void;
    /**
     * Handle mouse click events.
     *
     * @param {GeMouseEvent} evt - The mouse click event.
     * @param {GeMouseEvent | undefined} previousEvt - The previous mouse click event, if any.
     * @returns {void}
     */
    onMouseClicked(evt: GeMouseEvent, previousEvt: GeMouseEvent | undefined): boolean;
    debounceRepaint(): void;
    publishGeMouseEvent(evt: GeMouseEvent): void;
    onFocusChanged(sm: FocusModelIf): void;
    onSelectionChanged(sm: SelectionModelIf): void;
    /**
     * Updates the table (repaint) when an external filter is changed.
     *
     * @param {boolean} clearSelection - Indicates whether to clear the selection model or not. Default value is true.
     * @return {void}
     */
    externalFilterChanged(clearSelection?: boolean): void;
    /**
     * Handle the double click event on the table header.
     *
     * @param {MouseEvent} event - The mouse event that triggered the double click.
     * @param {number} _rowIdx - The row index of the header.
     * @param {number} colIdx - The column index of the header.
     *
     * @return {void}
     */
    onHeaderDblClicked(event: MouseEvent, _rowIdx: number, colIdx: number): void;
    /**
     * Scrolls the viewport to the specified pixel coordinates.
     *
     * @param {number} px - The horizontal pixel coordinate to scroll to.
     * @param {number} py - The vertical pixel coordinate to scroll to.
     *
     * @return {void}
     */
    scrollToPixel(px: number, py: number): void;
    /**
     * Scrolls to the specified index in the table.
     *
     * @param {number} _indexX - The horizontal index of the table where scrolling is needed.
     * @param {number} indexY - The vertical index of the table where scrolling is needed.
     * @return {void}
     */
    scrollToIndex(_indexX: number, indexY: number): void;
    /**
     * Sets the selection model for the table.
     *
     * @param {SelectionModel} sm - The selection model to be set.
     * @param {boolean} rerender - Optional parameter indicating whether to rerender the table after setting the selection model. Default value is false.
     *
     * @return {void} - This method does not return any value.
     */
    setSelectionModel(sm: SelectionModel, rerender?: boolean): void;
    toggleHeaderGroup(mouseTargetData: MouseTargetData): void;
    /**
     * Retrieves the selection model.
     * @returns {SelectionModelIf | undefined} The selection model if available, otherwise undefined.
     */
    selectionModel(): SelectionModelIf | undefined;
    /**
     * Retrieves the focus model.
     *
     * @returns {FocusModelIf | undefined} The focus model if it exists, or undefined otherwise.
     */
    focusModel(): FocusModelIf | undefined;
    setDragging(dragging: boolean): void;
    /**
     * Changes the focus cell using the specified deltas.
     *
     * @param {number} dx - The delta for the column index.
     * @param {number} dy - The delta for the row index.
     * @return {boolean} - True if the focus cell was changed, false otherwise.
     */
    private changeFocusCell;
    /**
     * Resizes the column based on the mouse event.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event that triggered the resize.
     */
    private resizeColumn;
    /**
     * Clears the selection model, if available.
     *
     * @return {void}
     */
    private clearSelectionModel;
    private debugOnce;
    /**
     * Restores the scroll position of the table if auto restore options are enabled.
     *
     *
     * @returns {void}
     */
    private autoRestoreScrollPosition;
    /**
     * Automatically restores the sorting state of the table.
     *
     * @private
     * @function autoRestoreSortingState
     * @memberof ClassName
     *
     * @description
     * This method checks if the autoRestoreSortingState option is enabled in the tableOptions.
     * If enabled, it uses the storeSortingService to retrieve the sort items array.
     * If there are sort items present, it applies them to the table's body model using the doSort method.
     *
     * @returns {void}
     */
    private autoRestoreSortingState;
    /**
     * Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
     * specified in the tableOptions. This method is private and should not be called directly.
     *
     * @private
     */
    private autoRestoreCollapsedExpandedState;
}
