/* eslint @typescript-eslint/no-explicit-any: "off" */

import { TableModelIf } from './data/tablemodel/table-model.if';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { GeMouseEvent } from './data/common/event/ge-mouse-event';
import { DomServiceIf } from './service/dom-service.if';
import { ConvenienceDomService } from './service/convenience-dom.service';
import { TableOptionsIf } from './data/options/table-options.if';
import { MouseHandler } from './mouse-handler';
import { EventListenerIf } from './event-listener.if';
import { TableApi } from './table-api';
import { SortState } from './data/common/sort-state.type';
import { AreaModelTree } from './data/tablemodel/areamodel/area-model-tree';
import { StoreStateScrollPosService } from './service/store-state-scroll-pos.service';
import { StoreStateCollapsedExpandService } from './service/store-state-collapsed-expand.service';
import { StoreStateSortingService } from './service/store-state-sorting.service';
import { RenderScope } from './render-scope';
import { SortItem } from './data/common/sort-item';
import { InputHandler } from './input-handler';
import { GeModelChangeEvent } from './data/common/event/ge-model-change-event';
import { SelectionService } from './selection/selection-service';
import { GeKeyEvent } from './data/common/event/ge-key-event';
import { OnActionTriggeredIf } from './action/on-action-triggered.if';
import { ActionId } from './action/action-id.type';
import { ShortcutService } from './action/shortcut.service';
import { EventAdapter } from './event-adapter';
import { SimpleDomService } from './service/simple-dom-service';
import { TableOptions } from './data/options/table-options';
import { TreeRowIf } from './data/common/tree-row-if';
import { isAreaModelTree } from './instanceof-workaround';
import { LicenseManager } from './license-manager';
import { SelectionModel } from './selection/selection-model';
import { CopyService } from './service/copy-service';
import { CopyServiceIf } from './service/copy-service.if';
import { MouseTargetData } from './data/event/mouse-target-data';
import { AreaModelCellGroups } from './data/tablemodel/areamodel/area-model-cell-groups';
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
export class TableScope extends RenderScope implements OnActionTriggeredIf, EventFocusChangedListenerIf, EventSelectionChangedListenerIf {

  public licenseManager = LicenseManager.getInstance();
  public mouseHandler: MouseHandler;
  public inputHandler: InputHandler;
  public resizeHandler: ResizeHandler;
  public shortcutService: ShortcutService;

  public storeStateCollapsedExpandService?: StoreStateCollapsedExpandService;
  public storeSortingService?: StoreStateSortingService;

  protected selectionService: SelectionService = new SelectionService(this);
  protected keyEvent?: GeKeyEvent;
  private api = new TableApi(this);

  private mouseStartAction = '';
  private mouseStartWidth = -1;
  private mouseStartColumnIndex = -1;

  private dragFrom = -1;
  private dragTo = -1;
  private lastDragFrom = -1;
  private lastDragTo = -1;
  private firstDraggingRendering = true;

  constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, domService: DomServiceIf, tableOptions: TableOptionsIf, protected readonly eventListener: EventListenerIf, public readonly copyService: CopyServiceIf = new CopyService()) {
    super(hostElement, tableModel, new ConvenienceDomService(domService), tableOptions);
    if (!eventListener) {
      this.eventListener = new EventAdapter();
    }
    if (this.tableOptions?.autoRestoreOptions) {
      const autoRestoreOptions = this.tableOptions.autoRestoreOptions;
      const keyFn = autoRestoreOptions.getStorageKeyFn;
      if (keyFn) {
        if (autoRestoreOptions.autoRestoreScrollPosition) {
          this.storeScrollPosStateService = new StoreStateScrollPosService(keyFn);
        }
        if (autoRestoreOptions.autoRestoreCollapsedExpandedState) {
          this.storeStateCollapsedExpandService = new StoreStateCollapsedExpandService(keyFn);
        }
        if (autoRestoreOptions.autoRestoreSortingState) {
          this.storeSortingService = new StoreStateSortingService(keyFn);
        }
      }
    }
    this.mouseHandler = new MouseHandler(this);
    this.inputHandler = new InputHandler(this);
    this.resizeHandler = new ResizeHandler(this, tableOptions.resizeEventDebounceDelay);

    this.shortcutService = new ShortcutService(this);
    this.shortcutService.addListener(this.selectionService);

    const sm = this.getSelectionModel ? this.getSelectionModel() : undefined;
    if (sm) {
      sm.addEventSelectionChangedListener(this);
    }
    const fm = this.getFocusModel ? this.getFocusModel() : undefined;
    if (fm) {
      fm.addEventFocusChangedListener(this);
    }
  }

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
  static create(hostElement: HTMLDivElement, tableModel: TableModelIf, tableOptions: TableOptionsIf = new TableOptions(), eventListener: EventListenerIf = new EventAdapter(), domService: DomServiceIf = new SimpleDomService(), copyService: CopyServiceIf = new CopyService()): TableScope {
    return new TableScope(hostElement, tableModel, domService, tableOptions, eventListener, copyService);
  }

  /**
   * Triggers an action based on the provided actionId.
   *
   * This function can be invoked manually via the table API or by keyboard shortcuts.
   *
   * @param {ActionId} actionId - The identifier of the action to be triggered.
   * @return {boolean} - Returns true if the action was triggered successfully, false otherwise.
   */
  onActionTriggered(actionId: ActionId): boolean {
    if (actionId === 'NAVIGATE_DOWN') {
      if (this.changeFocusCell(0, 1)) {
        return true;
      }
    }
    if (actionId === 'NAVIGATE_UP') {
      if (this.changeFocusCell(0, -1)) {
        return true;
      }
    }
    if (actionId === 'NAVIGATE_LEFT') {
      if (this.changeFocusCell(-1, 0)) {
        return true;
      }
    }
    if (actionId === 'NAVIGATE_RIGHT') {
      if (this.changeFocusCell(1, 0)) {
        return true;
      }
    }
    if (actionId === 'START_EDITING') {
      if (this.getFocusModel) {
        const fm = this.getFocusModel();
        if (fm) {
          const [rowIdx, colIdx] = fm.getFocus();
          if (this.tableModel.getBodyModel().isEditable(rowIdx, colIdx)) {
            this.clearSelection();
            this.initRenderEditor(rowIdx, colIdx);
          }
        }
        return true;
      }
    }
    if (actionId === 'COPY_2_CLIPBOARD') {
      const sm = this.getSelectionModel ? this.getSelectionModel() : undefined;
      const fm = this.getFocusModel ? this.getFocusModel() : undefined;
      this.copyService
        .createContent(this.tableModel, sm, fm)
        .then(txt => this.copyService.copyContent(txt));
    }
    return false;
  }

  updateModelValueAfterEdit(areaIdent: AreaIdent, rowIndex: number, columnIndex: number, value: string) {
    if (areaIdent === 'body') {
      const bodyAreaModel = this.tableModel.getAreaModel(areaIdent);
      const ok: boolean = bodyAreaModel.setValue(rowIndex, columnIndex, value);
      if (ok) {
        this.resetEditorRenderer();
        this.repaint();
        this.eventListener.onModelChanged(GeModelChangeEvent.createSingle(rowIndex, columnIndex));
        this.hostElement.focus();
      }
    }
  }

  /**
   * Retrieves the TableApi object.
   *
   * @return {TableApi} The TableApi object.
   */
  getApi(): TableApi {
    return this.api;
  }


  /**
   * Initializes the table. Called by the table component.
   *
   * @function firstInit
   * @memberof TableScope
   *
   * @returns {TableScope} This instance of the table scope.
   */
  firstInit(): TableScope {
    this.tableModel.init();
    if (this.tableOptions?.externalFilterFunction) {
      this.externalFilterChanged(false);
    }
    this.autoRestoreCollapsedExpandedState();
    this.autoRestoreSortingState();
    this.resetSizeOfWrapperDiv();
    this.adjustContainersAndRows();
    this.autoRestoreScrollPosition();

    return this;
  }

  /**
   * Creates a GeMouseEvent object based on a MouseEvent.
   *
   * @param {MouseEvent} mouseEvent - The MouseEvent object to create the GeMouseEvent from.
   * @return {GeMouseEvent} - The created GeMouseEvent object.
   */
  createGeMouseEvent(mouseEvent: MouseEvent): GeMouseEvent {
    const ret: GeMouseEvent = new GeMouseEvent();
    ret.originalEvent = mouseEvent;

    if (mouseEvent) {
      const target = mouseEvent.target as HTMLElement;
      [ret.areaIdent, ret.sideIdent] = this.getAreaAndSideIdentByAttr(target);
      ret.rowIndex = this.getNumberByAttr(target, 'data-row-index');
      ret.columnIndex = this.getNumberByAttr(target, 'data-col-index');
      ret.action = this.getStringByAttr(target, 'data-ge-action');

      // const bodyY = mouseEvent.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight;
      // const bodyX = mouseEvent.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;

      if (ret.areaIdent) {
        const am = this.tableModel.getAreaModel(ret.areaIdent);
        ret.rowTop = am.getYPosByRowIndex(ret.rowIndex);
      }
      ret.columnLeft = this.tableModel.getXPosByColumnIndex(ret.columnIndex);

      if (mouseEvent.ctrlKey && mouseEvent.altKey) {
        const bodyY = mouseEvent.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight;
        const bodyX = mouseEvent.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;
        this.debugOnce(bodyX, bodyY);
      }
    }
    return ret;
  }

  /**
   * Handles the mouse down event.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   * @return {void}
   */
  onMouseDown(mouseEvent: GeMouseEvent) {
    if (mouseEvent.columnIndex > -1 && mouseEvent.action && ['resize-column', 'drag-column'].includes(mouseEvent.action)) {

      this.mouseStartWidth = this.tableModel.getColumnWidth(mouseEvent.columnIndex);
      this.mouseStartAction = mouseEvent.action;
      this.mouseStartColumnIndex = mouseEvent.columnIndex;

      if (this.mouseStartAction === 'drag-column') {
        this.firstDraggingRendering = true;
        this.dragFrom = this.mouseStartColumnIndex;
      }
    }
  }

  /**
   * Handles mouse dragging on the frame.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   * @param startMouseEvent
   */
  mouseDraggingOnFrame(mouseEvent: GeMouseEvent, startMouseEvent: GeMouseEvent | undefined) {
    this.eventListener.onMouseDragging(mouseEvent);
    this.mouseEvent = mouseEvent;

    if (this.mouseStartColumnIndex > -1 && this.mouseStartAction === 'resize-column' && this.tableOptions.columnsResizable) {
      this.resizeColumn(mouseEvent);

    } else if (this.mouseStartAction === 'drag-column' && mouseEvent.columnIndex > -1 && this.tableOptions.columnsDraggable) {

      this.draggingTargetColumnIndex = mouseEvent.columnIndex;
      this.dragTo = this.draggingTargetColumnIndex;

      if (this.dragFrom > -1 && this.dragTo > -1 && this.dragFrom !== this.dragTo) {
        if (!(this.lastDragFrom === this.dragTo && this.lastDragTo === this.dragFrom)) {
          this.tableModel.changeColumnOrder(this.dragFrom, this.dragTo);
          this.lastDragFrom = this.dragFrom;
          this.lastDragTo = this.dragTo;
          this.dragFrom = this.dragTo;
          this.resetSizeOfWrapperDiv();
          this.adjustContainersAndRows();
        }
      }
      if (startMouseEvent) {
        this.adjustDraggingColumn(mouseEvent, startMouseEvent.columnIndex, this.firstDraggingRendering);
        this.firstDraggingRendering = false;
      }
      this.repaint();
    }
  }

  /**
   * Handles the end of mouse dragging event on a frame.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   *
   * @returns {void}
   */
  mouseDraggingEndOnFrame(mouseEvent: GeMouseEvent) {
    this.eventListener.onMouseDraggingEnd(mouseEvent);
    this.draggingTargetColumnIndex = -1;

    if (this.mouseStartAction === 'resize-column') {
      this.resizeColumn(mouseEvent);

    } else if (this.mouseStartAction === 'drag-column') {
      this.hideDraggingColumn();
      this.repaint();
    }
    this.mouseStartWidth = -1;
    this.mouseStartColumnIndex = -1;
    this.dragFrom = -1;
    this.dragTo = -1;
    this.firstDraggingRendering = true;
    this.mouseStartAction = '';
  }

  /**
   * Handles the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   * @return {void}
   */
  mouseMove(mouseMoveEvent: GeMouseEvent) {
    this.eventListener.onMouseMoved(mouseMoveEvent);
    this.adjustHoverRows(mouseMoveEvent);
    this.adjustHoverColumns(mouseMoveEvent);
  }

  /**
   * Triggers the context menu event based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   * @return {void}
   */
  contextmenu(mouseMoveEvent: GeMouseEvent) {
    this.eventListener.onContextmenu(mouseMoveEvent);
  }

  /**
   * Toggles the expand or collapse state of all items in the body area model.
   *
   * @param {boolean} [expand=true] - Whether to expand or collapse all items. Default is true.
   *
   * @return {void}
   */
  toggleExpandCollapseAll(expand: boolean = true) {
    const bodyAreaModel = this.tableModel.getBodyModel();
    if (isAreaModelTree(bodyAreaModel)) {
      const amt: AreaModelTree<any> = bodyAreaModel as AreaModelTree<any>;
      amt.toggleExpandCollapseAll(expand);
      this.repaint();
      this.storeStateCollapsedExpandService?.collapsedStateAll(expand);
    }
  }

  /**
   * Toggles the checkbox state of a specific row in a table.
   *
   * @param {number} rowIdx - The index of the row to toggle the checkbox state.
   * @param {number} _colIdx - The index of the column. This parameter is unused.
   * @param {AreaIdent} areaIdent - The identifier of the table area.
   *
   * @return {void} - This method does not return anything.
   */
  toggleRowCheckbox(rowIdx: number, _colIdx: number, areaIdent: AreaIdent) {
    const areaModel = this.tableModel.getAreaModel(areaIdent);
    const state = areaModel.isRowChecked(rowIdx);
    const unsel = (state === undefined || state === 'semi' || state === 'none');
    areaModel.setRowChecked(rowIdx, unsel);
    this.repaint(); // TODO repaint cell only
    const selectedRows = areaModel.rowSelectionModel?.getCheckedRows();
    this.eventListener.onCheckboxChanged(selectedRows ? selectedRows : []);
  }

  /**
   * Handle mouse click events.
   *
   * @param {GeMouseEvent} evt - The mouse click event.
   * @param {GeMouseEvent | undefined} previousEvt - The previous mouse click event, if any.
   * @returns {void}
   */
  onMouseClicked(evt: GeMouseEvent, previousEvt: GeMouseEvent | undefined): boolean {
    let dirty = this.selectionService.onMouseClicked(evt, previousEvt);
    if (!dirty) {
      if (this.getFocusModel) {
        this.resetEditorRenderer();
        const fm = this.getFocusModel();
        if (fm) {
          dirty = fm.hasChanged();
          fm.clearChanged();
        }
      }
    }
    return dirty;
  }

  debounceRepaint() {
    this.debounce(this.repaint.bind(this), 1);
  }

  publishGeMouseEvent(evt: GeMouseEvent) {
    this.eventListener.onMouseClicked(evt);
  }

  onFocusChanged(sm: FocusModelIf) {
    this.eventListener.onFocusChanged(sm);
  }

  onSelectionChanged(sm: SelectionModelIf) {
    this.eventListener.onSelectionChanged(sm);
  }



  /**
   * Updates the table (repaint) when an external filter is changed.
   *
   * @param {boolean} clearSelection - Indicates whether to clear the selection model or not. Default value is true.
   * @return {void}
   */
  externalFilterChanged(clearSelection: boolean = true) {
    const predictFn = this.tableOptions.externalFilterFunction;
    if (predictFn) {
      if (clearSelection) {
        this.clearSelectionModel();
      }
      this.tableModel.externalFilterChanged(predictFn);
      this.scrollViewport.scrollTo(0, 0);
      this.tableModel.recalcHeightAndPadding();
      this.resetSizeOfWrapperDiv();
      this.repaint();
    }
  }

  /**
   * Handle the double click event on the table header.
   *
   * @param {MouseEvent} event - The mouse event that triggered the double click.
   * @param {number} _rowIdx - The row index of the header.
   * @param {number} colIdx - The column index of the header.
   *
   * @return {void}
   */
  onHeaderDblClicked(event: MouseEvent, _rowIdx: number, colIdx: number) {
    const colDef = this.tableModel.getColumnDef(colIdx);
    if (colDef?.sortable && colDef.sortable()) {
      event.preventDefault();
      event.stopPropagation();
      const states: SortState[] = colDef.sortStatesOrder ? colDef.sortStatesOrder : this.tableOptions.sortOrder;
      const currentState: SortState = colDef.sortState ?? '';
      const newState = states[(states.indexOf(currentState) + 1) % states.length];

      const sortItem = new SortItem(colIdx, newState);
      const done = this.tableModel.doSort([sortItem]);
      if (done) {
        this.tableModel.getColumnDefs()?.forEach(cd => cd.sortState = '');
        colDef.sortState = newState;
      }
      this.repaint();
      this.storeSortingService?.setSortItems([sortItem]);
    }
  }

  /**
   * Scrolls the viewport to the specified pixel coordinates.
   *
   * @param {number} px - The horizontal pixel coordinate to scroll to.
   * @param {number} py - The vertical pixel coordinate to scroll to.
   *
   * @return {void}
   */
  scrollToPixel(px: number, py: number) {
    this.scrollViewport.scrollTo(px, py);
  }

  /**
   * Scrolls to the specified index in the table.
   *
   * @param {number} _indexX - The horizontal index of the table where scrolling is needed.
   * @param {number} indexY - The vertical index of the table where scrolling is needed.
   * @return {void}
   */
  scrollToIndex(_indexX: number, indexY: number) {
    const bodyAreaModel = this.tableModel.getAreaModel('body');
    const py = bodyAreaModel.getYPosByRowIndex(indexY);
    this.scrollToPixel(0, py); // TODO calc indexX -> px
  }

  /**
   * Sets the selection model for the table.
   *
   * @param {SelectionModel} sm - The selection model to be set.
   * @param {boolean} rerender - Optional parameter indicating whether to rerender the table after setting the selection model. Default value is false.
   *
   * @return {void} - This method does not return any value.
   */
  setSelectionModel(sm: SelectionModel, rerender: boolean = false) {
    const getSm = () => sm;
    this.tableOptions.getSelectionModel = getSm;
    this.getSelectionModel = getSm;
    this.selectionService.getSelectionModel = getSm;
    if (rerender) {
      this.repaint();
    }
  }

  toggleHeaderGroup(mouseTargetData: MouseTargetData) {
    const headerAreaModel = this.tableModel.getAreaModel('header') as AreaModelCellGroups;

    if ('columnDefs' in this.tableModel) {
      this.tableModel.columnDefs = headerAreaModel.toggleHeaderGroup(mouseTargetData);
      console.info('####### !!!!!! *******, this.tableModel.columnDefs');
    }
    // this.repaint();
    this.firstInit();

    // this.tableModel.recalcPadding();
    // this.resetSizeOfWrapperDiv();
    // this.adjustContainersAndRows();
    //
    // console.info('this.tableModel.getColumnCount()', this.tableModel.getColumnCount());
    // const columnDefs = this.tableModel.getColumnDefs();
    // if (columnDefs) {
    //   console.info('this.tableModel.getColumnDefs()', columnDefs);
    //   for (const cd of columnDefs) {
    //     if (cd?.isVisible) console.info(cd.isVisible(), cd);
    //   }
    // }

    // this.adjustColumnsToRowParent({
    //   areaIdent: 'header',
    //   sideIdent: 'left',
    //   areaModel: headerAreaModel,
    //   geo: this.tableModel.getAreaGeo('header', 'left'),
    //   parent: this.tableModel.getAreaParent('header', 'left'),
    //   rowIndex: mouseTargetData.rowIndex,
    //   columnIndexStart: mouseTargetData.columnIndex,
    //   columnIndexEnd: mouseTargetData.columnIndex,
    //   verticalFixed: true,
    //   lastRowOfModel: false
    // });
    // console.info('_______-headerAreaModel', headerAreaModel);
    // console.info('_______-mouseTargetData', mouseTargetData);
  }

  /**
   * Retrieves the selection model.
   * @returns {SelectionModelIf | undefined} The selection model if available, otherwise undefined.
   */
  selectionModel(): SelectionModelIf | undefined {
    if (this?.getSelectionModel) {
      return this.getSelectionModel();
    }
    return undefined;
  }

  /**
   * Retrieves the focus model.
   *
   * @returns {FocusModelIf | undefined} The focus model if it exists, or undefined otherwise.
   */
  focusModel(): FocusModelIf | undefined {
    if (this?.getFocusModel) {
      return this.getFocusModel();
    }
    return undefined;
  }

  setDragging(dragging: boolean) {
    this.dragging = dragging;
    if (this.dragging) {
      this.storeColumnWidths();
      this.lastDragFrom = -1;
      this.lastDragTo = -1;
    } else {
      this.storedColumnWidths = [];
    }
  }

  /**
   * Changes the focus cell using the specified deltas.
   *
   * @param {number} dx - The delta for the column index.
   * @param {number} dy - The delta for the row index.
   * @return {boolean} - True if the focus cell was changed, false otherwise.
   */
  private changeFocusCell(dx: number, dy: number): boolean {
    if (!this.isEditing() && this.getFocusModel) {
      const fm = this.getFocusModel();
      if (fm) {
        const [rowIdx, colIdx] = fm.getFocus();
        fm.setFocus(rowIdx + dy, colIdx + dx);
        this.repaint();
        return true;
      }
    }
    return false;
  }

  /**
   * Resizes the column based on the mouse event.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event that triggered the resize.
   */
  private resizeColumn(mouseEvent: GeMouseEvent) {
    this.tableModel.setColumnWidth(this.mouseStartColumnIndex, this.mouseStartWidth + mouseEvent.draggingX);
    this.tableModel.recalcPadding();
    this.resetSizeOfWrapperDiv();
    this.adjustContainersAndRows();
  }

  /**
   * Clears the selection model, if available.
   *
   * @return {void}
   */
  private clearSelectionModel() {
    if (this.getSelectionModel) {
      this.getSelectionModel()?.clear();
    }
  }

  private debugOnce(bodyX: number, bodyY: number) {
    console.clear();
    console.info('this.hostElement.offsetTop', this.hostElement.offsetTop); // pageY of table tag
    console.info('this.hostElement.scrollHeight', this.hostElement.scrollHeight); // height of visible scroll area
    console.info('this.scrollViewportTop', this.scrollTop); // amount of px scrolled to top (initial : 0)
    console.info('this.areaHeaderCenter.parent.clientHeight', this.areaHeaderCenter.parent.clientHeight);
    console.info('bodyY', bodyY);
    console.info('bodyX', bodyX);
    console.info('rows', this.firstVisibleRowIndex);
    console.info('');
    console.info('this.tableModel', this.tableModel);
    console.info('');
    console.info('this.mouseMoveEvent.clientX', this.mouseHandler.mouseEvent?.clientX);
    console.info('this.hostElement.offsetLeft', this.hostElement.offsetLeft);
    console.info('this.areaBodyWestGeo.width', this.areaBodyWestGeo.width);
  }

  /**
   * Restores the scroll position of the table if auto restore options are enabled.
   *
   *
   * @returns {void}
   */
  private autoRestoreScrollPosition() {
    if (this.tableOptions?.autoRestoreOptions && this.storeScrollPosStateService) {
      const autoRestoreOptions = this.tableOptions.autoRestoreOptions;
      if (autoRestoreOptions.autoRestoreScrollPosition) {
        const scrollOffset = this.storeScrollPosStateService.getScrollOffset();
        if (scrollOffset) {
          this.scrollViewport.scrollTo(...scrollOffset);
        }
      }
    }
  }

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
  private autoRestoreSortingState() {
    if (this.tableOptions?.autoRestoreOptions?.autoRestoreSortingState && this.storeSortingService) {
      const sortItems = this.storeSortingService.getSortItems();
      if (sortItems?.length) {
        const areaModel = this.tableModel.getBodyModel();
        areaModel.doSort(sortItems);
      }
    }
  }

  /**
   * Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
   * specified in the tableOptions. This method is private and should not be called directly.
   *
   * @private
   */
  private autoRestoreCollapsedExpandedState() {
    if (this.tableOptions?.autoRestoreOptions?.getRowId && this.storeStateCollapsedExpandService) {
      const autoRestoreOptions = this.tableOptions.autoRestoreOptions;
      const getRowId = autoRestoreOptions.getRowId;
      if (autoRestoreOptions.autoRestoreCollapsedExpandedState && getRowId) {
        const state = this.storeStateCollapsedExpandService.collapsedExpandedStateGet();
        const areaModel = this.tableModel.getAreaModel('body');
        if (isAreaModelTree(areaModel)) {
          const amtr: AreaModelTree<any> = areaModel as AreaModelTree<any>;
          const rowCount = areaModel.getRowCount();


          for (let i = 0; i < rowCount; i++) {
            const row: TreeRowIf<any> | undefined = areaModel.getRowByIndex(i);
            if (row) {
              if (state.allExpanded) {
                row.expanded = true;

              } else if (state.allCollapsed) {
                row.expanded = false;

              } else {
                const rowId = getRowId(row.data);
                if (state.mode === 'expanded') {
                  row.expanded = (this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(rowId));

                } else if (state.mode === 'collapsed') {
                  row.expanded = (!this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(rowId));
                }
              }
            }
          }
          amtr.recalcVisibleTreeRows();
        }
      }
    }
  }


}


