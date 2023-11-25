
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { AreaIdent } from "./data/tablemodel/area-ident.type";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { DomServiceIf } from "./service/dom-service.if";
import { ConvenienceDomService } from "./service/convenience-dom.service";
import { TableOptionsIf } from "./data/options/table-options.if";
import { TreeRow } from "./data/common/tree-row";
import { MouseHandler } from "./mouse-handler";
import { EventListenerIf } from "./event-listener.if";
import { TableApi } from "./table-api";
import { SortState } from "./data/common/sort-state.type";
import { AreaModelTree } from "./data/tablemodel/areamodel/area-model-tree";
import { StoreStateScrollPosService } from "./service/store-state-scroll-pos.service";
import { StoreStateCollapsedExpandService } from "./service/store-state-collapsed-expand.service";
import { StoreStateSortingService } from "./service/store-state-sorting.service";
import { RenderScope } from "./render-scope";
import { SortItem } from "./data/common/sort-item";
import { InputHandler } from "./input-handler";
import { GeModelChangeEvent } from "./data/common/event/ge-model-change-event";
import { SelectionService } from "./selection/selection-service";
import { GeKeyEvent } from "./data/common/event/ge-key-event";
import { OnActionTriggeredIf } from "./action/on-action-triggered.if";
import { ActionId } from "./action/action-id.type";
import { ShortcutService } from "./action/shortcut.service";
import { EventAdapter } from "./event-adapter";
import {SimpleDomService} from "./service/simple-dom-service";
import {TableOptions} from "./data/options/table-options";


export class TableScope extends RenderScope implements OnActionTriggeredIf {

  public mouseHandler: MouseHandler;
  public inputHandler: InputHandler;
  public shortcutService: ShortcutService;

  public storeStateCollapsedExpandService?: StoreStateCollapsedExpandService;
  public storeSortingService?: StoreStateSortingService;

  protected selectionService: SelectionService = new SelectionService(this);
  protected keyEvent?: GeKeyEvent;
  private api = new TableApi(this);

  private mouseStartAction = "";
  private mouseStartWidth = -1;
  private mouseStartColumnIndex = -1;
  private dragFrom = -1;
  private dragTo = -1;

  static create(
    hostElement: HTMLDivElement,
    tableModel: TableModelIf,
    tableOptions: TableOptionsIf = new TableOptions(),
    eventListener: EventListenerIf = new EventAdapter(),
    domService: DomServiceIf = new SimpleDomService(),
    ): TableScope {
    return new TableScope(
      hostElement,
      tableModel,
      domService,
      tableOptions,
      eventListener
    );
  }

  constructor(
    hostElement: HTMLDivElement,
    tableModel: TableModelIf,
    domService: DomServiceIf,
    tableOptions: TableOptionsIf,
    protected readonly eventListener: EventListenerIf
  ) {
    super(
      hostElement,
      tableModel,
      new ConvenienceDomService(domService),
      tableOptions
    );
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

    this.shortcutService = new ShortcutService(this);
    this.shortcutService.addListener(this.selectionService);
  }

  onActionTriggered(actionId: ActionId): boolean {
    if (actionId === "NAVIGATE_DOWN") {
      if (this.changeFocusCell(0, 1)) {
        return true;
      }
    }
    if (actionId === "NAVIGATE_UP") {
      if (this.changeFocusCell(0, -1)){
        return true;
      }
    }
    if (actionId === "NAVIGATE_LEFT") {
      if (this.changeFocusCell(-1, 0)){
        return true;
      }
    }
    if (actionId === "NAVIGATE_RIGHT") {
      if (this.changeFocusCell(1, 0)){
        return true;
      }
    }
    if (actionId === "START_EDITING") {
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
    return false;
  }

  updateModelValueAfterEdit(areaIdent: AreaIdent, rowIndex: number, columnIndex: number, value: string) {
    if (areaIdent === "body") {
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

  getApi(): TableApi {
    return this.api;
  }

  /*
   * Called by the table component
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

  createGeMouseEvent(mouseEvent: MouseEvent): GeMouseEvent {
    const ret: GeMouseEvent = new GeMouseEvent();
    ret.originalEvent = mouseEvent;

    if (mouseEvent) {
      const target = mouseEvent.target as HTMLElement;
      [ret.areaIdent, ret.sideIdent] = this.getAreaAndSideIdentByAttr(target);
      ret.rowIndex = this.getNumberByAttr(target, "data-row-index");
      ret.columnIndex = this.getNumberByAttr(target, "data-col-index");
      ret.action = this.getStringByAttr(target, "data-ge-action");

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

  onMouseDown(mouseEvent: GeMouseEvent) {
    if (mouseEvent.columnIndex > -1
      && mouseEvent.action
      && ["resize-column", "drag-column"].includes(mouseEvent.action)) {

      this.mouseStartWidth = this.tableModel.getColumnWidth(mouseEvent.columnIndex);
      this.mouseStartAction = mouseEvent.action;
      this.mouseStartColumnIndex = mouseEvent.columnIndex;

      if (this.mouseStartAction === "drag-column") {
        this.dragFrom = this.mouseStartColumnIndex;
      }
    }
  }

  mouseDraggingOnFrame(mouseEvent: GeMouseEvent) {
    this.eventListener.onMouseDragging(mouseEvent);
    this.mouseEvent = mouseEvent;

    if (
      this.mouseStartColumnIndex > -1
      && this.mouseStartAction === "resize-column"
      && this.tableOptions.columnsResizable) {
      this.resizeColumn(mouseEvent);

    } else if (
      this.mouseStartAction === "drag-column"
      && mouseEvent.columnIndex > -1
      && this.tableOptions.columnsDraggable) {

      this.draggingTargetColumnIndex = mouseEvent.columnIndex;
      this.dragTo = this.draggingTargetColumnIndex;

      if (this.dragFrom > -1 && this.dragTo > -1 && this.dragFrom !== this.dragTo) {
        this.tableModel.changeColumnOrder(this.dragFrom, this.dragTo);
        this.dragFrom = this.dragTo;
        this.resetSizeOfWrapperDiv();
        this.adjustContainersAndRows();
      }
      this.repaint();
    }
  }

  mouseDraggingEndOnFrame(mouseEvent: GeMouseEvent) {
    this.eventListener.onMouseDraggingEnd(mouseEvent);
    this.draggingTargetColumnIndex = -1;

    if (this.mouseStartAction === "resize-column") {
      this.resizeColumn(mouseEvent);

    } else if (this.mouseStartAction === "drag-column") {
      this.repaint();
    }
    this.mouseStartWidth = -1;
    this.mouseStartColumnIndex = -1;
    this.dragFrom = -1;
    this.dragTo = -1;
    this.mouseStartAction = "";
  }

  mouseMove(mouseMoveEvent: GeMouseEvent) {
    this.eventListener.onMouseMoved(mouseMoveEvent);
    this.adjustHoverRows(mouseMoveEvent);
    this.adjustHoverColumns(mouseMoveEvent);
  }

  contextmenu(mouseMoveEvent: GeMouseEvent) {
    this.eventListener.onContextmenu(mouseMoveEvent);
  }

  toggleExpandCollapseAll(expand: boolean = true) {
    const bodyAreaModel = this.tableModel.getBodyModel();
    if (bodyAreaModel instanceof AreaModelTree) {
      const amt: AreaModelTree<any> = bodyAreaModel;
      amt.toggleExpandCollapseAll(expand);
      this.repaint();
      this.storeStateCollapsedExpandService?.collapsedStateAll(expand);
    }
  }

  toggleRowCheckbox(rowIdx: number, _colIdx: number, areaIdent: AreaIdent) {
    const areaModel = this.tableModel.getAreaModel(areaIdent);
    const state = areaModel.isRowChecked(rowIdx);
    const unsel = (state === undefined || state === "semi" || state === "none");
    areaModel.setRowChecked(rowIdx, unsel);
    this.repaint(); // TODO repaint cell only
    const selectedRows = areaModel.rowSelectionModel?.getCheckedRows();
    this.eventListener.onCheckboxChanged(selectedRows ? selectedRows : []);
  }

  onMouseClicked(evt: GeMouseEvent, previousEvt: GeMouseEvent | undefined) {
    let dirty = this.selectionService.onMouseClicked(evt, previousEvt);
    if (!dirty && this.getFocusModel) {
      const fm = this.getFocusModel();
      if (fm) {
        dirty = fm.hasChanged();
        fm.clearChanged();
        if (dirty) {
          this.resetEditorRenderer();
        }
      }
    }
    this.eventListener.onMouseClicked(evt);
    if (dirty) {
      this.debounce(this.repaint.bind(this), 10);
    }
  }

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

  onHeaderDblClicked(event: MouseEvent, _rowIdx: number, colIdx: number) {
    const colDef = this.tableModel.getColumnDef(colIdx);
    if (colDef?.sortable && colDef.sortable()) {
      event.preventDefault();
      event.stopPropagation();
      const states: SortState[] = colDef.sortStatesOrder ? colDef.sortStatesOrder : this.tableOptions.sortOrder;
      const currentState: SortState = colDef.sortState ?? "";
      const newState = states[(states.indexOf(currentState) + 1) % states.length];

      const sortItem = new SortItem(colIdx, newState);
      const done = this.tableModel.doSort([sortItem]);
      if (done) {
        this.tableModel.getColumnDefs()?.forEach(cd => cd.sortState = "");
        colDef.sortState = newState;
      }
      this.repaint();
      this.storeSortingService?.setSortItems([sortItem]);
    }
  }


  private changeFocusCell(dx: number, dy: number) : boolean{
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

  private resizeColumn(mouseEvent: GeMouseEvent) {
    this.tableModel.setColumnWidth(this.mouseStartColumnIndex, this.mouseStartWidth + mouseEvent.draggingX);
    this.tableModel.recalcPadding();
    this.resetSizeOfWrapperDiv();
    this.adjustContainersAndRows();
  }

  private clearSelectionModel() {
    if (this.getSelectionModel) {
      this.getSelectionModel()?.clear();
    }
  }

  private debugOnce(
    bodyX: number,
    bodyY: number
  ) {
    console.clear();
    console.info("this.hostElement.offsetTop", this.hostElement.offsetTop); // pageY of table tag
    console.info("this.hostElement.scrollHeight", this.hostElement.scrollHeight); // height of visible scroll area
    console.info("this.scrollViewportTop", this.scrollTop); // amount of px scrolled to top (initial : 0)
    console.info("this.areaHeaderCenter.parent.clientHeight", this.areaHeaderCenter.parent.clientHeight);
    console.info("bodyY", bodyY);
    console.info("bodyX", bodyX);
    console.info("rows", this.firstVisibleRowIndex);
    console.info("");
    console.info("this.tableModel", this.tableModel);
    console.info("");
    console.info("this.mouseMoveEvent.clientX", this.mouseHandler.mouseEvent?.clientX);
    console.info("this.hostElement.offsetLeft", this.hostElement.offsetLeft);
    console.info("this.areaBodyWestGeo.width", this.areaBodyWestGeo.width);
  }

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

  private autoRestoreSortingState() {
    if (this.tableOptions?.autoRestoreOptions?.autoRestoreSortingState && this.storeSortingService) {
      const sortItems = this.storeSortingService.getSortItems();
      if (sortItems?.length) {
        const areaModel = this.tableModel.getBodyModel();
        areaModel.doSort(sortItems);
      }
    }
  }

  private autoRestoreCollapsedExpandedState() {
    if (this.tableOptions?.autoRestoreOptions?.getRowId && this.storeStateCollapsedExpandService) {
      const autoRestoreOptions = this.tableOptions.autoRestoreOptions;
      const getRowId = autoRestoreOptions.getRowId;
      if (autoRestoreOptions.autoRestoreCollapsedExpandedState && getRowId) {
        const state = this.storeStateCollapsedExpandService.collapsedExpandedStateGet();
        const areaModel = this.tableModel.getAreaModel("body");
        if (areaModel instanceof AreaModelTree) {
          const amtr: AreaModelTree<any> = areaModel;
          const rowCount = areaModel.getRowCount();


          for (let i = 0; i < rowCount; i++) {
            const row: TreeRow<any> | undefined = areaModel.getRowByIndex(i);
            if (row) {
              if (state.allExpanded) {
                row.expanded = true;

              } else if (state.allCollapsed) {
                row.expanded = false;

              } else {
                const rowId = getRowId(row.data);
                if (state.mode === "expanded") {
                  row.expanded = (this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(rowId));

                } else if (state.mode === "collapsed") {
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


