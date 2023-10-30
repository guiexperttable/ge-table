import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { ConvenienceDomService } from "./service/convenience-dom.service";
import { MouseHandler } from "./mouse-handler";
import { TableApi } from "./table-api";
import { AreaModelTree } from "./data/tablemodel/areamodel/area-model-tree";
import { StoreStateScrollPosService } from "./service/store-state-scroll-pos.service";
import { StoreStateCollapsedExpandService } from "./service/store-state-collapsed-expand.service";
import { StoreStateSortingService } from "./service/store-state-sorting.service";
import { RenderScope } from "./render-scope";
import { SortItem } from "./data/common/sort-item";
import { InputHandler } from "./input-handler";
import { GeModelChangeEvent } from "./data/common/event/ge-model-change-event";
import { SelectionService } from "./selection/selection-service";
import { ShortcutService } from "./action/shortcut.service";
import { EventAdapter } from "./event-adapter";
export class TableScope extends RenderScope {
    eventListener;
    mouseHandler;
    inputHandler;
    shortcutService;
    storeStateCollapsedExpandService;
    storeSortingService;
    selectionService = new SelectionService(this);
    keyEvent;
    api = new TableApi(this);
    mouseStartAction = "";
    mouseStartWidth = -1;
    mouseStartColumnIndex = -1;
    dragFrom = -1;
    dragTo = -1;
    constructor(hostElement, tableModel, domService, tableOptions, eventListener) {
        super(hostElement, tableModel, new ConvenienceDomService(domService), tableOptions);
        this.eventListener = eventListener;
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
    onActionTriggered(actionId) {
        if (actionId === "NAVIGATE_DOWN") {
            if (this.changeFocusCell(0, 1)) {
                return true;
            }
        }
        if (actionId === "NAVIGATE_UP") {
            if (this.changeFocusCell(0, -1)) {
                return true;
            }
        }
        if (actionId === "NAVIGATE_LEFT") {
            if (this.changeFocusCell(-1, 0)) {
                return true;
            }
        }
        if (actionId === "NAVIGATE_RIGHT") {
            if (this.changeFocusCell(1, 0)) {
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
    updateModelValueAfterEdit(areaIdent, rowIndex, columnIndex, value) {
        if (areaIdent === "body") {
            const bodyAreaModel = this.tableModel.getAreaModel(areaIdent);
            const ok = bodyAreaModel.setValue(rowIndex, columnIndex, value);
            if (ok) {
                this.resetEditorRenderer();
                this.repaint();
                this.eventListener.onModelChanged(GeModelChangeEvent.createSingle(rowIndex, columnIndex));
                this.hostElement.focus();
            }
        }
    }
    getApi() {
        return this.api;
    }
    /*
     * Called by the table component
     */
    firstInit() {
        this.tableModel.init();
        if (this.tableOptions?.externalFilterFunction) {
            this.externalFilterChanged(false);
        }
        this.autoRestoreCollapsedExpandedState();
        this.autoRestoreSortingState();
        this.resetSizeOfWrapperDiv();
        this.adjustContainersAndRows();
        this.autoRestoreScrollPosition();
    }
    createGeMouseEvent(mouseEvent) {
        const ret = new GeMouseEvent();
        ret.originalEvent = mouseEvent;
        if (mouseEvent) {
            const target = mouseEvent.target;
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
    onMouseDown(mouseEvent) {
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
    mouseDraggingOnFrame(mouseEvent) {
        this.eventListener.onMouseDragging(mouseEvent);
        this.mouseEvent = mouseEvent;
        if (this.mouseStartColumnIndex > -1
            && this.mouseStartAction === "resize-column"
            && this.tableOptions.columnsResizable) {
            this.resizeColumn(mouseEvent);
        }
        else if (this.mouseStartAction === "drag-column"
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
    mouseDraggingEndOnFrame(mouseEvent) {
        this.eventListener.onMouseDraggingEnd(mouseEvent);
        this.draggingTargetColumnIndex = -1;
        if (this.mouseStartAction === "resize-column") {
            this.resizeColumn(mouseEvent);
        }
        else if (this.mouseStartAction === "drag-column") {
            this.repaint();
        }
        this.mouseStartWidth = -1;
        this.mouseStartColumnIndex = -1;
        this.dragFrom = -1;
        this.dragTo = -1;
        this.mouseStartAction = "";
    }
    mouseMove(mouseMoveEvent) {
        this.eventListener.onMouseMoved(mouseMoveEvent);
        this.adjustHoverRows(mouseMoveEvent);
        this.adjustHoverColumns(mouseMoveEvent);
    }
    contextmenu(mouseMoveEvent) {
        this.eventListener.onContextmenu(mouseMoveEvent);
    }
    toggleExpandCollapseAll(expand = true) {
        const bodyAreaModel = this.tableModel.getBodyModel();
        if (bodyAreaModel instanceof AreaModelTree) {
            const amt = bodyAreaModel;
            amt.toggleExpandCollapseAll(expand);
            this.repaint();
            this.storeStateCollapsedExpandService?.collapsedStateAll(expand);
        }
    }
    toggleRowCheckbox(rowIdx, _colIdx, areaIdent) {
        const areaModel = this.tableModel.getAreaModel(areaIdent);
        const state = areaModel.isRowChecked(rowIdx);
        const unsel = (state === undefined || state === "semi" || state === "none");
        areaModel.setRowChecked(rowIdx, unsel);
        this.repaint(); // TODO repaint cell only
        const selectedRows = areaModel.rowSelectionModel?.getCheckedRows();
        this.eventListener.onCheckboxChanged(selectedRows ? selectedRows : []);
    }
    onMouseClicked(evt, previousEvt) {
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
    externalFilterChanged(clearSelection = true) {
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
    onHeaderDblClicked(event, _rowIdx, colIdx) {
        const colDef = this.tableModel.getColumnDef(colIdx);
        if (colDef?.sortable && colDef.sortable()) {
            event.preventDefault();
            event.stopPropagation();
            const states = colDef.sortStatesOrder ? colDef.sortStatesOrder : this.tableOptions.sortOrder;
            const currentState = colDef.sortState ?? "";
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
    changeFocusCell(dx, dy) {
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
    resizeColumn(mouseEvent) {
        this.tableModel.setColumnWidth(this.mouseStartColumnIndex, this.mouseStartWidth + mouseEvent.draggingX);
        this.tableModel.recalcPadding();
        this.resetSizeOfWrapperDiv();
        this.adjustContainersAndRows();
    }
    clearSelectionModel() {
        if (this.getSelectionModel) {
            this.getSelectionModel()?.clear();
        }
    }
    debugOnce(bodyX, bodyY) {
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
    autoRestoreScrollPosition() {
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
    autoRestoreSortingState() {
        if (this.tableOptions?.autoRestoreOptions?.autoRestoreSortingState && this.storeSortingService) {
            const sortItems = this.storeSortingService.getSortItems();
            if (sortItems?.length) {
                const areaModel = this.tableModel.getBodyModel();
                areaModel.doSort(sortItems);
            }
        }
    }
    autoRestoreCollapsedExpandedState() {
        if (this.tableOptions?.autoRestoreOptions?.getRowId && this.storeStateCollapsedExpandService) {
            const autoRestoreOptions = this.tableOptions.autoRestoreOptions;
            const getRowId = autoRestoreOptions.getRowId;
            if (autoRestoreOptions.autoRestoreCollapsedExpandedState && getRowId) {
                const state = this.storeStateCollapsedExpandService.collapsedExpandedStateGet();
                const areaModel = this.tableModel.getAreaModel("body");
                if (areaModel instanceof AreaModelTree) {
                    const amtr = areaModel;
                    const rowCount = areaModel.getRowCount();
                    for (let i = 0; i < rowCount; i++) {
                        const row = areaModel.getRowByIndex(i);
                        if (row) {
                            if (state.allExpanded) {
                                row.expanded = true;
                            }
                            else if (state.allCollapsed) {
                                row.expanded = false;
                            }
                            else {
                                const rowId = getRowId(row.data);
                                if (state.mode === "expanded") {
                                    row.expanded = (this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(rowId));
                                }
                                else if (state.mode === "collapsed") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2NvcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvdGFibGUtc2NvcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsV0FBVztJQXdCcEI7SUF0QmQsWUFBWSxDQUFlO0lBQzNCLFlBQVksQ0FBZTtJQUMzQixlQUFlLENBQWtCO0lBRWpDLGdDQUFnQyxDQUFvQztJQUNwRSxtQkFBbUIsQ0FBNEI7SUFFNUMsZ0JBQWdCLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsUUFBUSxDQUFjO0lBQ3hCLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QixnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDdEIsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNkLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVwQixZQUNFLFdBQTJCLEVBQzNCLFVBQXdCLEVBQ3hCLFVBQXdCLEVBQ3hCLFlBQTRCLEVBQ1QsYUFBOEI7UUFFakQsS0FBSyxDQUNILFdBQVcsRUFDWCxVQUFVLEVBQ1YsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFDckMsWUFBWSxDQUNiLENBQUM7UUFQaUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBUWpELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFO1lBQ3pDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRSxNQUFNLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7WUFDakQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxrQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pFO2dCQUNELElBQUksa0JBQWtCLENBQUMsaUNBQWlDLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyRjtnQkFDRCxJQUFJLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFO29CQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEU7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFFBQWtCO1FBQ2xDLElBQUksUUFBUSxLQUFLLGVBQWUsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsS0FBSyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsS0FBSyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksRUFBRSxFQUFFO29CQUNOLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN2QztpQkFDRjtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxTQUFvQixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxLQUFhO1FBQ2xHLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN4QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxNQUFNLEVBQUUsR0FBWSxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekUsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsVUFBc0I7UUFDdkMsTUFBTSxHQUFHLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7UUFFL0IsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBcUIsQ0FBQztZQUNoRCxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDOUQsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUU1RCw2R0FBNkc7WUFDN0csK0ZBQStGO1lBRS9GLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQ7WUFDRCxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXZFLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUMxRyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO2dCQUM1RixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQXdCO1FBQ2xDLElBQUksVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7ZUFDMUIsVUFBVSxDQUFDLE1BQU07ZUFDakIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUVqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUVwRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxhQUFhLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzVDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsVUFBd0I7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsSUFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO2VBQzVCLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxlQUFlO2VBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUUvQjthQUFNLElBQ0wsSUFBSSxDQUFDLGdCQUFnQixLQUFLLGFBQWE7ZUFDcEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7ZUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV2QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUU3QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDNUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUFDLFVBQXdCO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBRS9CO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssYUFBYSxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsY0FBNEI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxjQUE0QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsdUJBQXVCLENBQUMsU0FBa0IsSUFBSTtRQUM1QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksYUFBYSxZQUFZLGFBQWEsRUFBRTtZQUMxQyxNQUFNLEdBQUcsR0FBdUIsYUFBYSxDQUFDO1lBQzlDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsZ0NBQWdDLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxTQUFvQjtRQUNyRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQztRQUM1RSxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7UUFDekMsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBaUIsRUFBRSxXQUFxQztRQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLElBQUksRUFBRSxFQUFFO2dCQUNOLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxpQkFBMEIsSUFBSTtRQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDO1FBQzNELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFpQixFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksTUFBTSxFQUFFLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDekMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixNQUFNLE1BQU0sR0FBZ0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDMUcsTUFBTSxZQUFZLEdBQWMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDdkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBR08sZUFBZSxDQUFDLEVBQVUsRUFBRSxFQUFVO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMzQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxZQUFZLENBQUMsVUFBd0I7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTyxTQUFTLENBQ2YsS0FBYSxFQUNiLEtBQWE7UUFFYixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBQzdGLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUM5RyxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDZDQUE2QztRQUNyRyxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8seUJBQXlCO1FBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDNUUsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDO1lBQ2hFLElBQUksa0JBQWtCLENBQUMseUJBQXlCLEVBQUU7Z0JBQ2hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkUsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM5RixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUQsSUFBSSxTQUFTLEVBQUUsTUFBTSxFQUFFO2dCQUNyQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNqRCxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRU8saUNBQWlDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQzVGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRSxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7WUFDN0MsSUFBSSxrQkFBa0IsQ0FBQyxpQ0FBaUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3BFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNoRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxTQUFTLFlBQVksYUFBYSxFQUFFO29CQUN0QyxNQUFNLElBQUksR0FBdUIsU0FBUyxDQUFDO29CQUMzQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBR3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2pDLE1BQU0sR0FBRyxHQUE2QixTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLEdBQUcsRUFBRTs0QkFDUCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0NBQ3JCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzZCQUVyQjtpQ0FBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0NBQzdCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzZCQUV0QjtpQ0FBTTtnQ0FDTCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO29DQUM3QixHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUNBRTlGO3FDQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0NBQ3JDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lDQUMvRjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDOUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGVNb2RlbElmIH0gZnJvbSBcIi4vZGF0YS90YWJsZW1vZGVsL3RhYmxlLW1vZGVsLmlmXCI7XG5pbXBvcnQgeyBBcmVhSWRlbnQgfSBmcm9tIFwiLi9kYXRhL3RhYmxlbW9kZWwvYXJlYS1pZGVudC50eXBlXCI7XG5pbXBvcnQgeyBHZU1vdXNlRXZlbnQgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi9ldmVudC9nZS1tb3VzZS1ldmVudFwiO1xuaW1wb3J0IHsgRG9tU2VydmljZUlmIH0gZnJvbSBcIi4vc2VydmljZS9kb20tc2VydmljZS5pZlwiO1xuaW1wb3J0IHsgQ29udmVuaWVuY2VEb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9jb252ZW5pZW5jZS1kb20uc2VydmljZVwiO1xuaW1wb3J0IHsgVGFibGVPcHRpb25zSWYgfSBmcm9tIFwiLi9kYXRhL29wdGlvbnMvdGFibGUtb3B0aW9ucy5pZlwiO1xuaW1wb3J0IHsgVHJlZVJvdyB9IGZyb20gXCIuL2RhdGEvY29tbW9uL3RyZWUtcm93XCI7XG5pbXBvcnQgeyBNb3VzZUhhbmRsZXIgfSBmcm9tIFwiLi9tb3VzZS1oYW5kbGVyXCI7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVySWYgfSBmcm9tIFwiLi9ldmVudC1saXN0ZW5lci5pZlwiO1xuaW1wb3J0IHsgVGFibGVBcGkgfSBmcm9tIFwiLi90YWJsZS1hcGlcIjtcbmltcG9ydCB7IFNvcnRTdGF0ZSB9IGZyb20gXCIuL2RhdGEvY29tbW9uL3NvcnQtc3RhdGUudHlwZVwiO1xuaW1wb3J0IHsgQXJlYU1vZGVsVHJlZSB9IGZyb20gXCIuL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC10cmVlXCI7XG5pbXBvcnQgeyBTdG9yZVN0YXRlU2Nyb2xsUG9zU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2Uvc3RvcmUtc3RhdGUtc2Nyb2xsLXBvcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yZVN0YXRlQ29sbGFwc2VkRXhwYW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2Uvc3RvcmUtc3RhdGUtY29sbGFwc2VkLWV4cGFuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yZVN0YXRlU29ydGluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL3N0b3JlLXN0YXRlLXNvcnRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgUmVuZGVyU2NvcGUgfSBmcm9tIFwiLi9yZW5kZXItc2NvcGVcIjtcbmltcG9ydCB7IFNvcnRJdGVtIH0gZnJvbSBcIi4vZGF0YS9jb21tb24vc29ydC1pdGVtXCI7XG5pbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tIFwiLi9pbnB1dC1oYW5kbGVyXCI7XG5pbXBvcnQgeyBHZU1vZGVsQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi9ldmVudC9nZS1tb2RlbC1jaGFuZ2UtZXZlbnRcIjtcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZWxlY3Rpb24vc2VsZWN0aW9uLXNlcnZpY2VcIjtcbmltcG9ydCB7IEdlS2V5RXZlbnQgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi9ldmVudC9nZS1rZXktZXZlbnRcIjtcbmltcG9ydCB7IE9uQWN0aW9uVHJpZ2dlcmVkSWYgfSBmcm9tIFwiLi9hY3Rpb24vb24tYWN0aW9uLXRyaWdnZXJlZC5pZlwiO1xuaW1wb3J0IHsgQWN0aW9uSWQgfSBmcm9tIFwiLi9hY3Rpb24vYWN0aW9uLWlkLnR5cGVcIjtcbmltcG9ydCB7IFNob3J0Y3V0U2VydmljZSB9IGZyb20gXCIuL2FjdGlvbi9zaG9ydGN1dC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFdmVudEFkYXB0ZXIgfSBmcm9tIFwiLi9ldmVudC1hZGFwdGVyXCI7XG5cblxuZXhwb3J0IGNsYXNzIFRhYmxlU2NvcGUgZXh0ZW5kcyBSZW5kZXJTY29wZSBpbXBsZW1lbnRzIE9uQWN0aW9uVHJpZ2dlcmVkSWYge1xuXG4gIHB1YmxpYyBtb3VzZUhhbmRsZXI6IE1vdXNlSGFuZGxlcjtcbiAgcHVibGljIGlucHV0SGFuZGxlcjogSW5wdXRIYW5kbGVyO1xuICBwdWJsaWMgc2hvcnRjdXRTZXJ2aWNlOiBTaG9ydGN1dFNlcnZpY2U7XG5cbiAgcHVibGljIHN0b3JlU3RhdGVDb2xsYXBzZWRFeHBhbmRTZXJ2aWNlPzogU3RvcmVTdGF0ZUNvbGxhcHNlZEV4cGFuZFNlcnZpY2U7XG4gIHB1YmxpYyBzdG9yZVNvcnRpbmdTZXJ2aWNlPzogU3RvcmVTdGF0ZVNvcnRpbmdTZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCBzZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlID0gbmV3IFNlbGVjdGlvblNlcnZpY2UodGhpcyk7XG4gIHByb3RlY3RlZCBrZXlFdmVudD86IEdlS2V5RXZlbnQ7XG4gIHByaXZhdGUgYXBpID0gbmV3IFRhYmxlQXBpKHRoaXMpO1xuXG4gIHByaXZhdGUgbW91c2VTdGFydEFjdGlvbiA9IFwiXCI7XG4gIHByaXZhdGUgbW91c2VTdGFydFdpZHRoID0gLTE7XG4gIHByaXZhdGUgbW91c2VTdGFydENvbHVtbkluZGV4ID0gLTE7XG4gIHByaXZhdGUgZHJhZ0Zyb20gPSAtMTtcbiAgcHJpdmF0ZSBkcmFnVG8gPSAtMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgdGFibGVNb2RlbDogVGFibGVNb2RlbElmLFxuICAgIGRvbVNlcnZpY2U6IERvbVNlcnZpY2VJZixcbiAgICB0YWJsZU9wdGlvbnM6IFRhYmxlT3B0aW9uc0lmLFxuICAgIHByb3RlY3RlZCByZWFkb25seSBldmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVySWZcbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBob3N0RWxlbWVudCxcbiAgICAgIHRhYmxlTW9kZWwsXG4gICAgICBuZXcgQ29udmVuaWVuY2VEb21TZXJ2aWNlKGRvbVNlcnZpY2UpLFxuICAgICAgdGFibGVPcHRpb25zXG4gICAgKTtcbiAgICBpZiAoIWV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudEFkYXB0ZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFibGVPcHRpb25zPy5hdXRvUmVzdG9yZU9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGF1dG9SZXN0b3JlT3B0aW9ucyA9IHRoaXMudGFibGVPcHRpb25zLmF1dG9SZXN0b3JlT3B0aW9ucztcbiAgICAgIGNvbnN0IGtleUZuID0gYXV0b1Jlc3RvcmVPcHRpb25zLmdldFN0b3JhZ2VLZXlGbjtcbiAgICAgIGlmIChrZXlGbikge1xuICAgICAgICBpZiAoYXV0b1Jlc3RvcmVPcHRpb25zLmF1dG9SZXN0b3JlU2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgICB0aGlzLnN0b3JlU2Nyb2xsUG9zU3RhdGVTZXJ2aWNlID0gbmV3IFN0b3JlU3RhdGVTY3JvbGxQb3NTZXJ2aWNlKGtleUZuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0b1Jlc3RvcmVPcHRpb25zLmF1dG9SZXN0b3JlQ29sbGFwc2VkRXhwYW5kZWRTdGF0ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmVTdGF0ZUNvbGxhcHNlZEV4cGFuZFNlcnZpY2UgPSBuZXcgU3RvcmVTdGF0ZUNvbGxhcHNlZEV4cGFuZFNlcnZpY2Uoa2V5Rm4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvUmVzdG9yZU9wdGlvbnMuYXV0b1Jlc3RvcmVTb3J0aW5nU3RhdGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlU29ydGluZ1NlcnZpY2UgPSBuZXcgU3RvcmVTdGF0ZVNvcnRpbmdTZXJ2aWNlKGtleUZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1vdXNlSGFuZGxlciA9IG5ldyBNb3VzZUhhbmRsZXIodGhpcyk7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuXG4gICAgdGhpcy5zaG9ydGN1dFNlcnZpY2UgPSBuZXcgU2hvcnRjdXRTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMuc2hvcnRjdXRTZXJ2aWNlLmFkZExpc3RlbmVyKHRoaXMuc2VsZWN0aW9uU2VydmljZSk7XG4gIH1cblxuICBvbkFjdGlvblRyaWdnZXJlZChhY3Rpb25JZDogQWN0aW9uSWQpOiBib29sZWFuIHtcbiAgICBpZiAoYWN0aW9uSWQgPT09IFwiTkFWSUdBVEVfRE9XTlwiKSB7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VGb2N1c0NlbGwoMCwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY3Rpb25JZCA9PT0gXCJOQVZJR0FURV9VUFwiKSB7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VGb2N1c0NlbGwoMCwgLTEpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY3Rpb25JZCA9PT0gXCJOQVZJR0FURV9MRUZUXCIpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZUZvY3VzQ2VsbCgtMSwgMCkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFjdGlvbklkID09PSBcIk5BVklHQVRFX1JJR0hUXCIpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZUZvY3VzQ2VsbCgxLCAwKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWN0aW9uSWQgPT09IFwiU1RBUlRfRURJVElOR1wiKSB7XG4gICAgICBpZiAodGhpcy5nZXRGb2N1c01vZGVsKSB7XG4gICAgICAgIGNvbnN0IGZtID0gdGhpcy5nZXRGb2N1c01vZGVsKCk7XG4gICAgICAgIGlmIChmbSkge1xuICAgICAgICAgIGNvbnN0IFtyb3dJZHgsIGNvbElkeF0gPSBmbS5nZXRGb2N1cygpO1xuICAgICAgICAgIGlmICh0aGlzLnRhYmxlTW9kZWwuZ2V0Qm9keU1vZGVsKCkuaXNFZGl0YWJsZShyb3dJZHgsIGNvbElkeCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlbmRlckVkaXRvcihyb3dJZHgsIGNvbElkeCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVNb2RlbFZhbHVlQWZ0ZXJFZGl0KGFyZWFJZGVudDogQXJlYUlkZW50LCByb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZWFJZGVudCA9PT0gXCJib2R5XCIpIHtcbiAgICAgIGNvbnN0IGJvZHlBcmVhTW9kZWwgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0QXJlYU1vZGVsKGFyZWFJZGVudCk7XG4gICAgICBjb25zdCBvazogYm9vbGVhbiA9IGJvZHlBcmVhTW9kZWwuc2V0VmFsdWUocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgdGhpcy5yZXNldEVkaXRvclJlbmRlcmVyKCk7XG4gICAgICAgIHRoaXMucmVwYWludCgpO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIub25Nb2RlbENoYW5nZWQoR2VNb2RlbENoYW5nZUV2ZW50LmNyZWF0ZVNpbmdsZShyb3dJbmRleCwgY29sdW1uSW5kZXgpKTtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFwaSgpOiBUYWJsZUFwaSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpO1xuICB9XG5cbiAgLypcbiAgICogQ2FsbGVkIGJ5IHRoZSB0YWJsZSBjb21wb25lbnRcbiAgICovXG4gIGZpcnN0SW5pdCgpIHtcbiAgICB0aGlzLnRhYmxlTW9kZWwuaW5pdCgpO1xuICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucz8uZXh0ZXJuYWxGaWx0ZXJGdW5jdGlvbikge1xuICAgICAgdGhpcy5leHRlcm5hbEZpbHRlckNoYW5nZWQoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLmF1dG9SZXN0b3JlQ29sbGFwc2VkRXhwYW5kZWRTdGF0ZSgpO1xuICAgIHRoaXMuYXV0b1Jlc3RvcmVTb3J0aW5nU3RhdGUoKTtcbiAgICB0aGlzLnJlc2V0U2l6ZU9mV3JhcHBlckRpdigpO1xuICAgIHRoaXMuYWRqdXN0Q29udGFpbmVyc0FuZFJvd3MoKTtcbiAgICB0aGlzLmF1dG9SZXN0b3JlU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIGNyZWF0ZUdlTW91c2VFdmVudChtb3VzZUV2ZW50OiBNb3VzZUV2ZW50KTogR2VNb3VzZUV2ZW50IHtcbiAgICBjb25zdCByZXQ6IEdlTW91c2VFdmVudCA9IG5ldyBHZU1vdXNlRXZlbnQoKTtcbiAgICByZXQub3JpZ2luYWxFdmVudCA9IG1vdXNlRXZlbnQ7XG5cbiAgICBpZiAobW91c2VFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gbW91c2VFdmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBbcmV0LmFyZWFJZGVudCwgcmV0LnNpZGVJZGVudF0gPSB0aGlzLmdldEFyZWFBbmRTaWRlSWRlbnRCeUF0dHIodGFyZ2V0KTtcbiAgICAgIHJldC5yb3dJbmRleCA9IHRoaXMuZ2V0TnVtYmVyQnlBdHRyKHRhcmdldCwgXCJkYXRhLXJvdy1pbmRleFwiKTtcbiAgICAgIHJldC5jb2x1bW5JbmRleCA9IHRoaXMuZ2V0TnVtYmVyQnlBdHRyKHRhcmdldCwgXCJkYXRhLWNvbC1pbmRleFwiKTtcbiAgICAgIHJldC5hY3Rpb24gPSB0aGlzLmdldFN0cmluZ0J5QXR0cih0YXJnZXQsIFwiZGF0YS1nZS1hY3Rpb25cIik7XG5cbiAgICAgIC8vIGNvbnN0IGJvZHlZID0gbW91c2VFdmVudC5jbGllbnRZIC0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLmFyZWFIZWFkZXJDZW50ZXIucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgIC8vIGNvbnN0IGJvZHlYID0gbW91c2VFdmVudC5jbGllbnRYIC0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRMZWZ0IC0gdGhpcy5hcmVhQm9keVdlc3RHZW8ud2lkdGg7XG5cbiAgICAgIGlmIChyZXQuYXJlYUlkZW50KSB7XG4gICAgICAgIGNvbnN0IGFtID0gdGhpcy50YWJsZU1vZGVsLmdldEFyZWFNb2RlbChyZXQuYXJlYUlkZW50KTtcbiAgICAgICAgcmV0LnJvd1RvcCA9IGFtLmdldFlQb3NCeVJvd0luZGV4KHJldC5yb3dJbmRleCk7XG4gICAgICB9XG4gICAgICByZXQuY29sdW1uTGVmdCA9IHRoaXMudGFibGVNb2RlbC5nZXRYUG9zQnlDb2x1bW5JbmRleChyZXQuY29sdW1uSW5kZXgpO1xuXG4gICAgICBpZiAobW91c2VFdmVudC5jdHJsS2V5ICYmIG1vdXNlRXZlbnQuYWx0S2V5KSB7XG4gICAgICAgIGNvbnN0IGJvZHlZID0gbW91c2VFdmVudC5jbGllbnRZIC0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLmFyZWFIZWFkZXJDZW50ZXIucGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgYm9keVggPSBtb3VzZUV2ZW50LmNsaWVudFggLSB0aGlzLmhvc3RFbGVtZW50Lm9mZnNldExlZnQgLSB0aGlzLmFyZWFCb2R5V2VzdEdlby53aWR0aDtcbiAgICAgICAgdGhpcy5kZWJ1Z09uY2UoYm9keVgsIGJvZHlZKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG9uTW91c2VEb3duKG1vdXNlRXZlbnQ6IEdlTW91c2VFdmVudCkge1xuICAgIGlmIChtb3VzZUV2ZW50LmNvbHVtbkluZGV4ID4gLTFcbiAgICAgICYmIG1vdXNlRXZlbnQuYWN0aW9uXG4gICAgICAmJiBbXCJyZXNpemUtY29sdW1uXCIsIFwiZHJhZy1jb2x1bW5cIl0uaW5jbHVkZXMobW91c2VFdmVudC5hY3Rpb24pKSB7XG5cbiAgICAgIHRoaXMubW91c2VTdGFydFdpZHRoID0gdGhpcy50YWJsZU1vZGVsLmdldENvbHVtbldpZHRoKG1vdXNlRXZlbnQuY29sdW1uSW5kZXgpO1xuICAgICAgdGhpcy5tb3VzZVN0YXJ0QWN0aW9uID0gbW91c2VFdmVudC5hY3Rpb247XG4gICAgICB0aGlzLm1vdXNlU3RhcnRDb2x1bW5JbmRleCA9IG1vdXNlRXZlbnQuY29sdW1uSW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLm1vdXNlU3RhcnRBY3Rpb24gPT09IFwiZHJhZy1jb2x1bW5cIikge1xuICAgICAgICB0aGlzLmRyYWdGcm9tID0gdGhpcy5tb3VzZVN0YXJ0Q29sdW1uSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEcmFnZ2luZ09uRnJhbWUobW91c2VFdmVudDogR2VNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVyLm9uTW91c2VEcmFnZ2luZyhtb3VzZUV2ZW50KTtcbiAgICB0aGlzLm1vdXNlRXZlbnQgPSBtb3VzZUV2ZW50O1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5tb3VzZVN0YXJ0Q29sdW1uSW5kZXggPiAtMVxuICAgICAgJiYgdGhpcy5tb3VzZVN0YXJ0QWN0aW9uID09PSBcInJlc2l6ZS1jb2x1bW5cIlxuICAgICAgJiYgdGhpcy50YWJsZU9wdGlvbnMuY29sdW1uc1Jlc2l6YWJsZSkge1xuICAgICAgdGhpcy5yZXNpemVDb2x1bW4obW91c2VFdmVudCk7XG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5tb3VzZVN0YXJ0QWN0aW9uID09PSBcImRyYWctY29sdW1uXCJcbiAgICAgICYmIG1vdXNlRXZlbnQuY29sdW1uSW5kZXggPiAtMVxuICAgICAgJiYgdGhpcy50YWJsZU9wdGlvbnMuY29sdW1uc0RyYWdnYWJsZSkge1xuXG4gICAgICB0aGlzLmRyYWdnaW5nVGFyZ2V0Q29sdW1uSW5kZXggPSBtb3VzZUV2ZW50LmNvbHVtbkluZGV4O1xuICAgICAgdGhpcy5kcmFnVG8gPSB0aGlzLmRyYWdnaW5nVGFyZ2V0Q29sdW1uSW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdGcm9tID4gLTEgJiYgdGhpcy5kcmFnVG8gPiAtMSAmJiB0aGlzLmRyYWdGcm9tICE9PSB0aGlzLmRyYWdUbykge1xuICAgICAgICB0aGlzLnRhYmxlTW9kZWwuY2hhbmdlQ29sdW1uT3JkZXIodGhpcy5kcmFnRnJvbSwgdGhpcy5kcmFnVG8pO1xuICAgICAgICB0aGlzLmRyYWdGcm9tID0gdGhpcy5kcmFnVG87XG4gICAgICAgIHRoaXMucmVzZXRTaXplT2ZXcmFwcGVyRGl2KCk7XG4gICAgICAgIHRoaXMuYWRqdXN0Q29udGFpbmVyc0FuZFJvd3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRHJhZ2dpbmdFbmRPbkZyYW1lKG1vdXNlRXZlbnQ6IEdlTW91c2VFdmVudCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5vbk1vdXNlRHJhZ2dpbmdFbmQobW91c2VFdmVudCk7XG4gICAgdGhpcy5kcmFnZ2luZ1RhcmdldENvbHVtbkluZGV4ID0gLTE7XG5cbiAgICBpZiAodGhpcy5tb3VzZVN0YXJ0QWN0aW9uID09PSBcInJlc2l6ZS1jb2x1bW5cIikge1xuICAgICAgdGhpcy5yZXNpemVDb2x1bW4obW91c2VFdmVudCk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMubW91c2VTdGFydEFjdGlvbiA9PT0gXCJkcmFnLWNvbHVtblwiKSB7XG4gICAgICB0aGlzLnJlcGFpbnQoKTtcbiAgICB9XG4gICAgdGhpcy5tb3VzZVN0YXJ0V2lkdGggPSAtMTtcbiAgICB0aGlzLm1vdXNlU3RhcnRDb2x1bW5JbmRleCA9IC0xO1xuICAgIHRoaXMuZHJhZ0Zyb20gPSAtMTtcbiAgICB0aGlzLmRyYWdUbyA9IC0xO1xuICAgIHRoaXMubW91c2VTdGFydEFjdGlvbiA9IFwiXCI7XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VNb3ZlRXZlbnQ6IEdlTW91c2VFdmVudCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5vbk1vdXNlTW92ZWQobW91c2VNb3ZlRXZlbnQpO1xuICAgIHRoaXMuYWRqdXN0SG92ZXJSb3dzKG1vdXNlTW92ZUV2ZW50KTtcbiAgICB0aGlzLmFkanVzdEhvdmVyQ29sdW1ucyhtb3VzZU1vdmVFdmVudCk7XG4gIH1cblxuICBjb250ZXh0bWVudShtb3VzZU1vdmVFdmVudDogR2VNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVyLm9uQ29udGV4dG1lbnUobW91c2VNb3ZlRXZlbnQpO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kQ29sbGFwc2VBbGwoZXhwYW5kOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvZHlBcmVhTW9kZWwgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Qm9keU1vZGVsKCk7XG4gICAgaWYgKGJvZHlBcmVhTW9kZWwgaW5zdGFuY2VvZiBBcmVhTW9kZWxUcmVlKSB7XG4gICAgICBjb25zdCBhbXQ6IEFyZWFNb2RlbFRyZWU8YW55PiA9IGJvZHlBcmVhTW9kZWw7XG4gICAgICBhbXQudG9nZ2xlRXhwYW5kQ29sbGFwc2VBbGwoZXhwYW5kKTtcbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgICAgdGhpcy5zdG9yZVN0YXRlQ29sbGFwc2VkRXhwYW5kU2VydmljZT8uY29sbGFwc2VkU3RhdGVBbGwoZXhwYW5kKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVSb3dDaGVja2JveChyb3dJZHg6IG51bWJlciwgX2NvbElkeDogbnVtYmVyLCBhcmVhSWRlbnQ6IEFyZWFJZGVudCkge1xuICAgIGNvbnN0IGFyZWFNb2RlbCA9IHRoaXMudGFibGVNb2RlbC5nZXRBcmVhTW9kZWwoYXJlYUlkZW50KTtcbiAgICBjb25zdCBzdGF0ZSA9IGFyZWFNb2RlbC5pc1Jvd0NoZWNrZWQocm93SWR4KTtcbiAgICBjb25zdCB1bnNlbCA9IChzdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHN0YXRlID09PSBcInNlbWlcIiB8fCBzdGF0ZSA9PT0gXCJub25lXCIpO1xuICAgIGFyZWFNb2RlbC5zZXRSb3dDaGVja2VkKHJvd0lkeCwgdW5zZWwpO1xuICAgIHRoaXMucmVwYWludCgpOyAvLyBUT0RPIHJlcGFpbnQgY2VsbCBvbmx5XG4gICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gYXJlYU1vZGVsLnJvd1NlbGVjdGlvbk1vZGVsPy5nZXRDaGVja2VkUm93cygpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5vbkNoZWNrYm94Q2hhbmdlZChzZWxlY3RlZFJvd3MgPyBzZWxlY3RlZFJvd3MgOiBbXSk7XG4gIH1cblxuICBvbk1vdXNlQ2xpY2tlZChldnQ6IEdlTW91c2VFdmVudCwgcHJldmlvdXNFdnQ6IEdlTW91c2VFdmVudCB8IHVuZGVmaW5lZCkge1xuICAgIGxldCBkaXJ0eSA9IHRoaXMuc2VsZWN0aW9uU2VydmljZS5vbk1vdXNlQ2xpY2tlZChldnQsIHByZXZpb3VzRXZ0KTtcbiAgICBpZiAoIWRpcnR5ICYmIHRoaXMuZ2V0Rm9jdXNNb2RlbCkge1xuICAgICAgY29uc3QgZm0gPSB0aGlzLmdldEZvY3VzTW9kZWwoKTtcbiAgICAgIGlmIChmbSkge1xuICAgICAgICBkaXJ0eSA9IGZtLmhhc0NoYW5nZWQoKTtcbiAgICAgICAgZm0uY2xlYXJDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgIHRoaXMucmVzZXRFZGl0b3JSZW5kZXJlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5vbk1vdXNlQ2xpY2tlZChldnQpO1xuICAgIGlmIChkaXJ0eSkge1xuICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLnJlcGFpbnQuYmluZCh0aGlzKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGV4dGVybmFsRmlsdGVyQ2hhbmdlZChjbGVhclNlbGVjdGlvbjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zdCBwcmVkaWN0Rm4gPSB0aGlzLnRhYmxlT3B0aW9ucy5leHRlcm5hbEZpbHRlckZ1bmN0aW9uO1xuICAgIGlmIChwcmVkaWN0Rm4pIHtcbiAgICAgIGlmIChjbGVhclNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFibGVNb2RlbC5leHRlcm5hbEZpbHRlckNoYW5nZWQocHJlZGljdEZuKTtcbiAgICAgIHRoaXMuc2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB0aGlzLnRhYmxlTW9kZWwucmVjYWxjSGVpZ2h0QW5kUGFkZGluZygpO1xuICAgICAgdGhpcy5yZXNldFNpemVPZldyYXBwZXJEaXYoKTtcbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uSGVhZGVyRGJsQ2xpY2tlZChldmVudDogTW91c2VFdmVudCwgX3Jvd0lkeDogbnVtYmVyLCBjb2xJZHg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbERlZiA9IHRoaXMudGFibGVNb2RlbC5nZXRDb2x1bW5EZWYoY29sSWR4KTtcbiAgICBpZiAoY29sRGVmPy5zb3J0YWJsZSAmJiBjb2xEZWYuc29ydGFibGUoKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qgc3RhdGVzOiBTb3J0U3RhdGVbXSA9IGNvbERlZi5zb3J0U3RhdGVzT3JkZXIgPyBjb2xEZWYuc29ydFN0YXRlc09yZGVyIDogdGhpcy50YWJsZU9wdGlvbnMuc29ydE9yZGVyO1xuICAgICAgY29uc3QgY3VycmVudFN0YXRlOiBTb3J0U3RhdGUgPSBjb2xEZWYuc29ydFN0YXRlID8/IFwiXCI7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlc1soc3RhdGVzLmluZGV4T2YoY3VycmVudFN0YXRlKSArIDEpICUgc3RhdGVzLmxlbmd0aF07XG5cbiAgICAgIGNvbnN0IHNvcnRJdGVtID0gbmV3IFNvcnRJdGVtKGNvbElkeCwgbmV3U3RhdGUpO1xuICAgICAgY29uc3QgZG9uZSA9IHRoaXMudGFibGVNb2RlbC5kb1NvcnQoW3NvcnRJdGVtXSk7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICB0aGlzLnRhYmxlTW9kZWwuZ2V0Q29sdW1uRGVmcygpPy5mb3JFYWNoKGNkID0+IGNkLnNvcnRTdGF0ZSA9IFwiXCIpO1xuICAgICAgICBjb2xEZWYuc29ydFN0YXRlID0gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLnJlcGFpbnQoKTtcbiAgICAgIHRoaXMuc3RvcmVTb3J0aW5nU2VydmljZT8uc2V0U29ydEl0ZW1zKFtzb3J0SXRlbV0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBjaGFuZ2VGb2N1c0NlbGwoZHg6IG51bWJlciwgZHk6IG51bWJlcikgOiBib29sZWFue1xuICAgIGlmICghdGhpcy5pc0VkaXRpbmcoKSAmJiB0aGlzLmdldEZvY3VzTW9kZWwpIHtcbiAgICAgIGNvbnN0IGZtID0gdGhpcy5nZXRGb2N1c01vZGVsKCk7XG4gICAgICBpZiAoZm0pIHtcbiAgICAgICAgY29uc3QgW3Jvd0lkeCwgY29sSWR4XSA9IGZtLmdldEZvY3VzKCk7XG4gICAgICAgIGZtLnNldEZvY3VzKHJvd0lkeCArIGR5LCBjb2xJZHggKyBkeCk7XG4gICAgICAgIHRoaXMucmVwYWludCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVDb2x1bW4obW91c2VFdmVudDogR2VNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy50YWJsZU1vZGVsLnNldENvbHVtbldpZHRoKHRoaXMubW91c2VTdGFydENvbHVtbkluZGV4LCB0aGlzLm1vdXNlU3RhcnRXaWR0aCArIG1vdXNlRXZlbnQuZHJhZ2dpbmdYKTtcbiAgICB0aGlzLnRhYmxlTW9kZWwucmVjYWxjUGFkZGluZygpO1xuICAgIHRoaXMucmVzZXRTaXplT2ZXcmFwcGVyRGl2KCk7XG4gICAgdGhpcy5hZGp1c3RDb250YWluZXJzQW5kUm93cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbk1vZGVsKCkge1xuICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICB0aGlzLmdldFNlbGVjdGlvbk1vZGVsKCk/LmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWJ1Z09uY2UoXG4gICAgYm9keVg6IG51bWJlcixcbiAgICBib2R5WTogbnVtYmVyXG4gICkge1xuICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICBjb25zb2xlLmluZm8oXCJ0aGlzLmhvc3RFbGVtZW50Lm9mZnNldFRvcFwiLCB0aGlzLmhvc3RFbGVtZW50Lm9mZnNldFRvcCk7IC8vIHBhZ2VZIG9mIHRhYmxlIHRhZ1xuICAgIGNvbnNvbGUuaW5mbyhcInRoaXMuaG9zdEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XCIsIHRoaXMuaG9zdEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTsgLy8gaGVpZ2h0IG9mIHZpc2libGUgc2Nyb2xsIGFyZWFcbiAgICBjb25zb2xlLmluZm8oXCJ0aGlzLnNjcm9sbFZpZXdwb3J0VG9wXCIsIHRoaXMuc2Nyb2xsVG9wKTsgLy8gYW1vdW50IG9mIHB4IHNjcm9sbGVkIHRvIHRvcCAoaW5pdGlhbCA6IDApXG4gICAgY29uc29sZS5pbmZvKFwidGhpcy5hcmVhSGVhZGVyQ2VudGVyLnBhcmVudC5jbGllbnRIZWlnaHRcIiwgdGhpcy5hcmVhSGVhZGVyQ2VudGVyLnBhcmVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnNvbGUuaW5mbyhcImJvZHlZXCIsIGJvZHlZKTtcbiAgICBjb25zb2xlLmluZm8oXCJib2R5WFwiLCBib2R5WCk7XG4gICAgY29uc29sZS5pbmZvKFwicm93c1wiLCB0aGlzLmZpcnN0VmlzaWJsZVJvd0luZGV4KTtcbiAgICBjb25zb2xlLmluZm8oXCJcIik7XG4gICAgY29uc29sZS5pbmZvKFwidGhpcy50YWJsZU1vZGVsXCIsIHRoaXMudGFibGVNb2RlbCk7XG4gICAgY29uc29sZS5pbmZvKFwiXCIpO1xuICAgIGNvbnNvbGUuaW5mbyhcInRoaXMubW91c2VNb3ZlRXZlbnQuY2xpZW50WFwiLCB0aGlzLm1vdXNlSGFuZGxlci5tb3VzZUV2ZW50Py5jbGllbnRYKTtcbiAgICBjb25zb2xlLmluZm8oXCJ0aGlzLmhvc3RFbGVtZW50Lm9mZnNldExlZnRcIiwgdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRMZWZ0KTtcbiAgICBjb25zb2xlLmluZm8oXCJ0aGlzLmFyZWFCb2R5V2VzdEdlby53aWR0aFwiLCB0aGlzLmFyZWFCb2R5V2VzdEdlby53aWR0aCk7XG4gIH1cblxuICBwcml2YXRlIGF1dG9SZXN0b3JlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMudGFibGVPcHRpb25zPy5hdXRvUmVzdG9yZU9wdGlvbnMgJiYgdGhpcy5zdG9yZVNjcm9sbFBvc1N0YXRlU2VydmljZSkge1xuICAgICAgY29uc3QgYXV0b1Jlc3RvcmVPcHRpb25zID0gdGhpcy50YWJsZU9wdGlvbnMuYXV0b1Jlc3RvcmVPcHRpb25zO1xuICAgICAgaWYgKGF1dG9SZXN0b3JlT3B0aW9ucy5hdXRvUmVzdG9yZVNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMuc3RvcmVTY3JvbGxQb3NTdGF0ZVNlcnZpY2UuZ2V0U2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgIGlmIChzY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpZXdwb3J0LnNjcm9sbFRvKC4uLnNjcm9sbE9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF1dG9SZXN0b3JlU29ydGluZ1N0YXRlKCkge1xuICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucz8uYXV0b1Jlc3RvcmVPcHRpb25zPy5hdXRvUmVzdG9yZVNvcnRpbmdTdGF0ZSAmJiB0aGlzLnN0b3JlU29ydGluZ1NlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHNvcnRJdGVtcyA9IHRoaXMuc3RvcmVTb3J0aW5nU2VydmljZS5nZXRTb3J0SXRlbXMoKTtcbiAgICAgIGlmIChzb3J0SXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBhcmVhTW9kZWwgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Qm9keU1vZGVsKCk7XG4gICAgICAgIGFyZWFNb2RlbC5kb1NvcnQoc29ydEl0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF1dG9SZXN0b3JlQ29sbGFwc2VkRXhwYW5kZWRTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy50YWJsZU9wdGlvbnM/LmF1dG9SZXN0b3JlT3B0aW9ucz8uZ2V0Um93SWQgJiYgdGhpcy5zdG9yZVN0YXRlQ29sbGFwc2VkRXhwYW5kU2VydmljZSkge1xuICAgICAgY29uc3QgYXV0b1Jlc3RvcmVPcHRpb25zID0gdGhpcy50YWJsZU9wdGlvbnMuYXV0b1Jlc3RvcmVPcHRpb25zO1xuICAgICAgY29uc3QgZ2V0Um93SWQgPSBhdXRvUmVzdG9yZU9wdGlvbnMuZ2V0Um93SWQ7XG4gICAgICBpZiAoYXV0b1Jlc3RvcmVPcHRpb25zLmF1dG9SZXN0b3JlQ29sbGFwc2VkRXhwYW5kZWRTdGF0ZSAmJiBnZXRSb3dJZCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RvcmVTdGF0ZUNvbGxhcHNlZEV4cGFuZFNlcnZpY2UuY29sbGFwc2VkRXhwYW5kZWRTdGF0ZUdldCgpO1xuICAgICAgICBjb25zdCBhcmVhTW9kZWwgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0QXJlYU1vZGVsKFwiYm9keVwiKTtcbiAgICAgICAgaWYgKGFyZWFNb2RlbCBpbnN0YW5jZW9mIEFyZWFNb2RlbFRyZWUpIHtcbiAgICAgICAgICBjb25zdCBhbXRyOiBBcmVhTW9kZWxUcmVlPGFueT4gPSBhcmVhTW9kZWw7XG4gICAgICAgICAgY29uc3Qgcm93Q291bnQgPSBhcmVhTW9kZWwuZ2V0Um93Q291bnQoKTtcblxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3c6IFRyZWVSb3c8YW55PiB8IHVuZGVmaW5lZCA9IGFyZWFNb2RlbC5nZXRSb3dCeUluZGV4KGkpO1xuICAgICAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuYWxsRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICByb3cuZXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuYWxsQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcm93LmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dJZCA9IGdldFJvd0lkKHJvdy5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubW9kZSA9PT0gXCJleHBhbmRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICByb3cuZXhwYW5kZWQgPSAodGhpcy5zdG9yZVN0YXRlQ29sbGFwc2VkRXhwYW5kU2VydmljZS5jb2xsYXBzZWRFeHBhbmRlZFN0YXRlSW5jbHVkZXMocm93SWQpKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubW9kZSA9PT0gXCJjb2xsYXBzZWRcIikge1xuICAgICAgICAgICAgICAgICAgcm93LmV4cGFuZGVkID0gKCF0aGlzLnN0b3JlU3RhdGVDb2xsYXBzZWRFeHBhbmRTZXJ2aWNlLmNvbGxhcHNlZEV4cGFuZGVkU3RhdGVJbmNsdWRlcyhyb3dJZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbXRyLnJlY2FsY1Zpc2libGVUcmVlUm93cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuIl19