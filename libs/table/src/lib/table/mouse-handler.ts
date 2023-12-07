import { TableScope } from "./table-scope";
import { TreeRow } from "./data/common/tree-row";
import { AreaIdent, getAreaIdentByString } from "./data/tablemodel/area-ident.type";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { MouseTargetData } from "./data/event/mouse-target-data";
import {TreeRowIf} from "./data/common/tree-row-if";
import {isTreeRow} from "./instanceof-workaround";

/**
 * Class representing a MouseHandler.
 * @class
 */
export class MouseHandler {

  mouseEvent?: MouseEvent;
  startMouseEvent?: GeMouseEvent;
  geMouseEvent?: GeMouseEvent;
  geMouseEventOld?: GeMouseEvent;

  private expandedAll = true;
  private mouseDown = false;
  private dragging = false;

  constructor(
    protected tableScope: TableScope
  ) {
    this.tableScope.hostElement.addEventListener("click", this.onHostElementClicked.bind(this));
    this.tableScope.hostElement.addEventListener("dblclick", this.onHostElementDblClicked.bind(this));
    this.tableScope.hostElement.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.tableScope.hostElement.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.tableScope.hostElement.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.tableScope.hostElement.addEventListener("contextmenu", this.onContextmenu.bind(this));
    // @ts-ignore
    this.tableScope.hostElement['_MouseHandler'] = 'true';

    this.tableScope.scrollViewport.addEventListener("scroll", this.tableScope.adjustAfterScrolling.bind(this.tableScope));

    [window, this.tableScope.hostElement].forEach(
      ele => ele.addEventListener("resize", this.tableScope.adjustContainersAndRows.bind(this.tableScope))
    );
  }


  /**
   * Handles the "contextmenu" event.
   *
   * @private
   * @param {MouseEvent} evt - The mouse event object.
   * @return {void}
   */
  private onContextmenu(evt: MouseEvent) {
    this.mouseEvent = evt;
    const mouseMoveEvent = this.tableScope.createGeMouseEvent(this.mouseEvent);
    this.tableScope.contextmenu(mouseMoveEvent);
  };


  /**
   * Handles the click event on the host element.
   *
   * @param {MouseEvent} event - The click event.
   *
   * @return {void}
   */
  private onHostElementClicked(event: MouseEvent) {
    const mouseTargetData: MouseTargetData = new MouseTargetData(event.target, this.tableScope);
    if (mouseTargetData.action === 'toggleExpandCollapseAll'){
      this.expandedAll = !this.expandedAll;
      this.tableScope.toggleExpandCollapseAll(this.expandedAll);
      event.preventDefault();
      event.stopPropagation();

    } else if (mouseTargetData.inputType === 'checkbox' && mouseTargetData.areaIdent){
      this.tableScope.toggleRowCheckbox(mouseTargetData.rowIdx, mouseTargetData.colIdx, mouseTargetData.areaIdent);
      //this.tableScope.repaint();
      event.preventDefault();
      event.stopPropagation();

    } else if (isTreeRow(mouseTargetData.row) && mouseTargetData.areaModel) {
      const altClickOnFirstCol = mouseTargetData.colIdx === this.getArrowColumnIndex() && event.altKey;
      const clickOnArrow = mouseTargetData.className.includes("ge-table-tree-arrow-div");
      console.info(clickOnArrow, altClickOnFirstCol);

      if (altClickOnFirstCol || clickOnArrow) {
        // toggle collapsed/expanded:
        event.preventDefault();
        event.stopPropagation();
        const tr: TreeRowIf<any> = mouseTargetData.row as TreeRow<any>;
        tr.expanded = !tr.expanded;

        if ("recalcVisibleTreeRows" in mouseTargetData.areaModel) {
          // @ts-ignore
          mouseTargetData.areaModel.recalcVisibleTreeRows();
        }
        this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth);
        this.tableScope.adjustContainersAndRows();
        this.updateCollapsedExpandedState(tr);
      }
    }

    if (mouseTargetData.areaIdent === "body" && this.tableScope.tableOptions.getFocusModel) {
      const fm = this.tableScope.tableOptions.getFocusModel();
      fm?.clear();
      fm?.setFocus(mouseTargetData.rowIdx, mouseTargetData.colIdx);
    }

    this.publishGeMouseEvent(event, 1);
  };


  /**
   * Handles the double click event on the host element.
   * This method is private.
   *
   * @param {MouseEvent} event - The double click event.
   */
  private onHostElementDblClicked(event: MouseEvent) {

    if (event.target instanceof HTMLElement) {
      const target = event.target as HTMLElement;
      const area = target.getAttribute("data-area");
      const areaIdent: AreaIdent = getAreaIdentByString(area);
      const rowIdx = Number(target.getAttribute("data-row-index"));
      const colIdx = Number(target.getAttribute("data-col-index"));
      const areaModel = this.tableScope.tableModel.getAreaModel(areaIdent);

      if (area && areaIdent === "header") {
        if (this.tableScope.tableModel.isSortable(colIdx)) {
          this.tableScope.clearSelection();
          this.tableScope.onHeaderDblClicked(event, rowIdx, colIdx);
        }

      } else if (target.getAttribute("data-row-index")) {
        const row = areaModel.getRowByIndex(rowIdx);

        if (area && areaIdent === "body") {
          if (areaModel.isEditable(rowIdx, colIdx)) {
            this.tableScope.clearSelection();
            this.tableScope.initRenderEditor(rowIdx, colIdx);
          }
        }

        if (isTreeRow(row)) {
          if (colIdx === this.getArrowColumnIndex()) {
            // toggle collapsed/expanded:
            event.preventDefault();
            event.stopPropagation();
            const tr: TreeRowIf<any> = row as TreeRow<any>;
            tr.expanded = !tr.expanded;

            if ("recalcVisibleTreeRows" in areaModel) {
              // @ts-ignore
              areaModel.recalcVisibleTreeRows();
            }
            this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth);
            this.tableScope.adjustContainersAndRows();

            this.updateCollapsedExpandedState(tr);
          }
        }
      }
    }

    this.publishGeMouseEvent(event, 2);
  };


  /**
   * Publishes a GeMouseEvent.
   *
   * @param {MouseEvent} event - The MouseEvent to publish.
   * @param {number} clickCount - The number of clicks for the GeMouseEvent.
   *
   * @return {void}
   */
  private publishGeMouseEvent(event: MouseEvent, clickCount: number) {
    this.mouseEvent = event;
    this.geMouseEventOld = this.geMouseEvent?.clone();
    this.geMouseEvent = this.tableScope.createGeMouseEvent(event);
    if (this.geMouseEvent) {
      this.geMouseEvent.clickCount = clickCount;
    }
    this.tableScope.onMouseClicked(this.geMouseEvent, this.geMouseEventOld);
  }


  /**
   * Update the collapsed/expanded state of a tree row.
   *
   * @param {TreeRowIf<any>} tr - The tree row object.
   * @returns {void}
   */
  private updateCollapsedExpandedState(tr: TreeRowIf<any>) {
    // store expanded/collapsed:
    const getRowId = this.tableScope.tableOptions?.autoRestoreOptions?.getRowId;
    if (getRowId) {
      const mode = this.tableScope.storeStateCollapsedExpandService?.collapsedExpandedStateGet().mode;
      const push = (mode === "collapsed" && !tr.expanded) || (mode === "expanded" && tr.expanded);
      const remove = (mode === "collapsed" && tr.expanded) || (mode === "expanded" && !tr.expanded);
      const rowId = getRowId(tr.data);
      if (push) {
        this.tableScope.storeStateCollapsedExpandService?.collapsedStateIdsPush(rowId);
      } else if (remove) {
        this.tableScope.storeStateCollapsedExpandService?.collapsedStateIdsRemove(rowId);
      }
    }
  }


  private getArrowColumnIndex(): number {
    const rowCheckboxVisible = this.tableScope.tableModel.isRowCheckboxVisible();
    return rowCheckboxVisible ? 1 : 0;
  }


  private onMouseDown(evt: MouseEvent) {
    this.mouseEvent = evt;
    this.startMouseEvent = this.tableScope.createGeMouseEvent(this.mouseEvent);
    this.tableScope.onMouseDown(this.startMouseEvent);
    this.mouseDown = true;
  }


  private onMouseMove(evt: MouseEvent) {
    this.mouseEvent = evt;
    if (this.mouseDown) {
      this.dragging = true;
      requestAnimationFrame(this.mouseDraggingOnFrame.bind(this));
    } else {
      requestAnimationFrame(this.mouseMoveOnFrame.bind(this));
    }
  }


  private onMouseUp(evt: MouseEvent) {
    this.mouseEvent = evt;
    if (this.dragging) {
      requestAnimationFrame(this.mouseDraggingEndOnFrame.bind(this));
    }
    this.mouseDown = false;
    this.dragging = false;
  }


  private mouseDraggingOnFrame() {
    if (this.mouseEvent) {
      const mouseEvent = this.tableScope.createGeMouseEvent(this.mouseEvent);
      if (this.startMouseEvent?.originalEvent) {
        mouseEvent.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX;
        mouseEvent.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY;
      }
      this.tableScope.mouseDraggingOnFrame(mouseEvent);
    }
  }

  private mouseDraggingEndOnFrame() {
    if (this.mouseEvent) {
      const mouseEvent = this.tableScope.createGeMouseEvent(this.mouseEvent);
      if (this.startMouseEvent?.originalEvent) {
        mouseEvent.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX;
        mouseEvent.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY;
      }
      this.tableScope.mouseDraggingEndOnFrame(mouseEvent);
    }
  }


  private mouseMoveOnFrame() {
    if (this.mouseEvent) {
      const mouseMoveEvent = this.tableScope.createGeMouseEvent(this.mouseEvent);
      this.tableScope.mouseMove(mouseMoveEvent);
    }
  }


}
