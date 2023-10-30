import { EleScope } from "./ele-scope";
import { TreeRow } from "./data/common/tree-row";
import { AreaModelTree } from "./data/tablemodel/areamodel/area-model-tree";
import { GeoData } from "./data/geo-data";
import { ColAndRowspanModel } from "./data/tablemodel/areamodel/col-and-rowspan-model";
import { AreaObjectMap } from "./data/common/area-map";
export class RenderScope extends EleScope {
    storeScrollPosStateService;
    getSelectionModel;
    getFocusModel; // TODO use it!
    scrollLeft = 0;
    scrollViewportLeft = 0;
    scrollFactorY = 0;
    scrollFactorX = 0;
    cleanupFunctions = {
        header: [],
        body: [],
        footer: []
    };
    tree = false;
    // TODO delete? protected rangeEles: HTMLDivElement[] = [];
    colAndRowspanModels = new AreaObjectMap();
    firstVisibleRowIndex = -1;
    draggingTargetColumnIndex = -1;
    mouseEvent;
    debounceTimeout;
    editorRenderer;
    editorRendererColumn;
    editorRendererRow;
    removables = [];
    constructor(hostElement, tableModel, dom, tableOptions) {
        super(hostElement, tableModel, dom, tableOptions);
        if (this.tableModel.getSelectionModel) {
            this.getSelectionModel = this.tableModel.getSelectionModel;
        }
        else if (this.tableOptions?.getSelectionModel) {
            this.getSelectionModel = this.tableOptions.getSelectionModel;
        }
        if (this.tableOptions?.getFocusModel) {
            this.getFocusModel = this.tableOptions.getFocusModel;
        }
        if (tableModel.getAreaModel("body") instanceof AreaModelTree) {
            this.tree = true;
        }
        const aereaIds = ["header", "body", "footer"];
        aereaIds.forEach(areaIdent => {
            this.colAndRowspanModels[areaIdent] = new ColAndRowspanModel(tableModel, tableModel.getAreaModel(areaIdent));
            this.colAndRowspanModels[areaIdent]?.init();
        });
    }
    editing = false;
    isEditing() {
        return this.editing;
    }
    resetEditorRenderer() {
        this.editorRenderer = undefined;
        this.editorRendererRow = -1;
        this.editorRendererColumn = -1;
        this.editing = false;
    }
    clearSelection() {
        if (this.getSelectionModel) {
            const sm = this.getSelectionModel();
            sm?.clear();
        }
    }
    initRenderEditor(rowIdx, colIdx) {
        let rnFn = this.tableModel.getColumnDef(colIdx)?.getEditRenderer;
        if (!rnFn) {
            rnFn = this.tableOptions.getEditRenderer;
        }
        if (rnFn) {
            this.editorRenderer = rnFn(rowIdx, colIdx);
            if (this.editorRenderer) {
                this.editorRendererRow = rowIdx;
                this.editorRendererColumn = colIdx;
                this.editing = true;
                this.repaint();
                // request focus:
                const input = document.querySelector("input.ge-table-cell-editor-input");
                if (input) {
                    input.focus();
                }
            }
            else {
                this.resetEditorRenderer();
            }
        }
    }
    repaint() {
        this.adjustAfterScrolling();
    }
    adjustAfterScrolling() {
        for (const cleaning of this.removables) {
            cleaning.remove();
        }
        this.hideHoverRow();
        this.hideHoverColumn();
        this.scrollTop = this.scrollViewport.scrollTop;
        this.scrollLeft = this.scrollViewport.scrollLeft;
        this.debounce(this.checkForScrollPosSaving.bind(this));
        this.scrollFactorY = this.scrollTop / (this.scrollViewport.scrollHeight - this.scrollViewport.clientHeight);
        this.scrollFactorX = this.scrollLeft / (this.scrollViewport.scrollWidth - this.scrollViewport.clientWidth);
        if (isNaN(this.scrollFactorY)) {
            this.scrollFactorY = 0;
        }
        if (isNaN(this.scrollFactorX)) {
            this.scrollFactorX = 0;
        }
        this.adjustBody();
        this.adjustArea("footer");
        this.adjustArea("header");
        if (this.tableOptions.tableTopBorderVisible) {
            this.removables.push(this.dom.addHorizontalBorder(new GeoData(0, this.hostElement.clientWidth, 1, 0), this.hostElement, "ge-table-border"));
        }
        if (this.tableOptions.tableBottomBorderVisible) {
            this.removables.push(this.dom.addHorizontalBorder(new GeoData(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1), this.hostElement, "ge-table-border"));
        }
        // The border between east and center in  header/body/footer (full height):
        if (this.tableModel.getFixedLeftColumnCount() > 0) {
            this.removables.push(this.dom.addVerticalBorder(new GeoData(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0), this.hostElement, "ge-table-body-west-vertical-border"));
        }
        // The border between header and body (full width):
        if (this.tableModel.getAreaModel("header")?.getRowCount() > 0) {
            this.removables.push(this.dom.addHorizontalBorder(new GeoData(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight), this.hostElement, "ge-table-body-west-vertical-border"));
        }
    }
    checkForScrollPosSaving() {
        if (this.storeScrollPosStateService
            && this.tableOptions?.autoRestoreOptions?.autoRestoreScrollPosition) {
            this.storeScrollPosStateService.updateScrollOffset([this.scrollLeft, this.scrollTop]);
        }
    }
    updateCells(events) {
        events.forEach(evt => this.tableModel
            .getAreaModel(evt.area)
            .setValue(evt.rowIndex, evt.columnIndex, evt.value));
        this.repaint();
    }
    getAreaAndSideIdentByAttr(srcElement) {
        if (srcElement) {
            const dataArea = this.getStringByAttr(srcElement, "data-area");
            const dataSide = this.getStringByAttr(srcElement, "data-side");
            if (dataSide && dataArea) {
                return [dataArea, dataSide];
            }
        }
        return [undefined, undefined];
    }
    getArea(rowIdent, sideIdent) {
        if (rowIdent === "header") {
            if (sideIdent === "west")
                return this.areaHeaderWest;
            if (sideIdent === "center")
                return this.areaHeaderCenter;
            if (sideIdent === "east")
                return this.areaHeaderEast;
        }
        else if (rowIdent === "body") {
            if (sideIdent === "west")
                return this.areaBodyWest;
            if (sideIdent === "center")
                return this.areaBodyCenter;
            if (sideIdent === "east")
                return this.areaBodyEast;
        }
        else if (rowIdent === "footer") {
            if (sideIdent === "west")
                return this.areaFooterWest;
            if (sideIdent === "center")
                return this.areaFooterCenter;
            if (sideIdent === "east")
                return this.areaFooterEast;
        }
        throw Error(`Wrong area identifier: row:${rowIdent}, col:${sideIdent}`);
    }
    adjustBody() {
        const virtualRowDivTopF1 = this.areaBodyCenterGeo.height - this.tableModel.getContentHeightInPixel();
        const virtualRowDivTop = this.scrollFactorY * virtualRowDivTopF1;
        this.dom.setStyle(this.contentDiv, "top", `${this.scrollTop}px`);
        this.dom.setStyle(this.contentDiv, "left", `${this.scrollViewport.scrollLeft}px`);
        this.adjustArea("body", virtualRowDivTop);
    }
    getNumberByAttr(srcElement, key) {
        if (srcElement) {
            const attr = srcElement.closest("[" + key + "]")?.getAttribute(key);
            if (attr)
                return Number(attr);
        }
        return -1;
    }
    getStringByAttr(srcElement, key) {
        if (srcElement) {
            const attr = srcElement.closest("[" + key + "]")?.getAttribute(key);
            if (attr)
                return attr;
        }
        return "";
    }
    adjustArea(areaIdent, yStart = 0) {
        const westArea = this.getArea(areaIdent, "west");
        const centerArea = this.getArea(areaIdent, "center");
        const eastArea = this.getArea(areaIdent, "east");
        const divHeight = centerArea.child.clientHeight;
        westArea.child.innerText = "";
        centerArea.child.innerText = "";
        eastArea.child.innerText = "";
        const left = 0;
        const width = this.areaBodyCenterGeo.width;
        const padding = this.tableModel.getPadding();
        const areaModel = this.tableModel.getAreaModel(areaIdent);
        const rowCount = areaModel.getRowCount();
        while (this.cleanupFunctions[areaIdent].length) {
            const fn = this.cleanupFunctions[areaIdent].shift();
            if (fn) {
                fn();
            }
        }
        let y = yStart;
        const columnCount = this.tableModel.getColumnCount();
        const fixedRightColumnCount = this.tableModel.getFixedRightColumnCount();
        const fixedLeftColumnCount = this.tableModel.getFixedLeftColumnCount();
        for (let index = 0; index < rowCount; index++) {
            const top = y;
            const lastRowOfModel = index === rowCount - 1;
            const height = this.tableModel.getRowHeight(areaIdent, index);
            if (top + height > 0) {
                // It's not scrolled out on top:
                // Visible!
                this.firstVisibleRowIndex = index;
                // center -------------------------------------------
                let geo = { left, width, height, top, index };
                let rowDiv = this.dom.addRowDiv(centerArea, geo, index, areaIdent, "center");
                const centerStartCol = fixedLeftColumnCount;
                this.adjustColumnsToRowParent({
                    areaIdent,
                    sideIdent: "center",
                    areaModel,
                    geo,
                    parent: rowDiv,
                    rowIndex: index,
                    columnIndexStart: centerStartCol,
                    columnIndexEnd: columnCount - fixedRightColumnCount - 1,
                    verticalFixed: false,
                    lastRowOfModel
                });
                // west -------------------------------------------
                if (padding.left > 0) {
                    geo = { left, width: this.areaBodyWestGeo.width, height, top, index };
                    rowDiv = this.dom.addRowDiv(westArea, geo, index, areaIdent, "west");
                    this.adjustColumnsToRowParent({
                        areaIdent,
                        sideIdent: "west",
                        areaModel,
                        geo,
                        parent: rowDiv,
                        rowIndex: index,
                        columnIndexStart: 0,
                        columnIndexEnd: centerStartCol - 1,
                        verticalFixed: true,
                        lastRowOfModel
                    });
                }
                // east -------------------------------------------
                if (padding.right > 0) {
                    geo = { left, width: this.areaBodyEastGeo.width, height, top, index };
                    rowDiv = this.dom.addRowDiv(eastArea, geo, index, areaIdent, "east");
                    this.adjustColumnsToRowParent({
                        areaIdent,
                        sideIdent: "east",
                        areaModel,
                        geo,
                        parent: rowDiv,
                        rowIndex: index,
                        columnIndexStart: columnCount - fixedRightColumnCount,
                        columnIndexEnd: columnCount - 1,
                        verticalFixed: true,
                        lastRowOfModel
                    });
                }
                // "collapse / expand all" event handler action attribute:
                if (areaIdent === "header" && this.tree && index === rowCount - 1) {
                    const div = this.dom.applyStyle(this.dom.setAttribute(this.dom.addDiv(rowDiv, new GeoData(16, 20, 20, 8)), "data-ge-action", "toggleExpandCollapseAll"), { "cursor": "pointer" });
                    const treeOptionsArrow = this.tableOptions.treeOptions.arrowExpandCollapseAll;
                    if (treeOptionsArrow) {
                        const textElement = this.dom.domService.createText(treeOptionsArrow.content);
                        this.dom.domService.appendChild(div, textElement);
                        if (treeOptionsArrow.style) {
                            this.dom.applyStyleString(div, treeOptionsArrow.style);
                        }
                    }
                }
            }
            y = y + height;
            // lastVisibleRowIndex = index;
            if (y > divHeight) { // + 1000) {
                break;
            }
        } // for
        // We draw the big colspan and rowspan cells at the end.
        // This fixes the 'half cutted big cell' problem:
        if (this.colAndRowspanModels && this.colAndRowspanModels[areaIdent]) {
            // draw col/rowspan cells again:
            const ranges = this.colAndRowspanModels[areaIdent]?.getRanges() ?? [];
            if (ranges.length) {
                for (const range of ranges) {
                    let xStart = 0;
                    let child = centerArea.child;
                    let sideIdent = "center";
                    if (range.c1 < fixedLeftColumnCount) {
                        // West:
                        child = westArea.child;
                        sideIdent = "west";
                    }
                    else if (fixedRightColumnCount > 0 && range.c1 >= columnCount - fixedRightColumnCount) {
                        // East:
                        child = eastArea.child;
                        sideIdent = "east";
                    }
                    else {
                        // Center:
                        const virtualRowDivLeftF1 = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
                        xStart = (this.scrollFactorX * virtualRowDivLeftF1) - this.areaBodyWestGeo.width;
                        sideIdent = "center";
                    }
                    this.drawBigCell(range, xStart, yStart, areaModel, child, sideIdent);
                }
            }
        }
    }
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
    drawBigCell(range, xStart, yStart, areaModel, parentDiv, sideIdent) {
        const y1 = yStart + this.getRowHeights(0, range.r1 - 1, areaModel).reduce((a, b) => a + b, 0);
        const columnCount = this.tableModel.getColumnCount();
        const fixedRightColumnCount = this.tableModel.getFixedRightColumnCount();
        let firstColIdx = 0;
        if (fixedRightColumnCount > 0 && range.c1 >= columnCount - fixedRightColumnCount) {
            // We are on the (fixed) east side, so we have to fix firstColIdx:
            firstColIdx = columnCount - fixedRightColumnCount;
        }
        const x1 = xStart + this.getColumnWidths(firstColIdx, range.c1 - 1).reduce((a, b) => a + b, 0);
        const h = this.getRowHeights(range.r1, range.r2, areaModel).reduce((a, b) => a + b, 0);
        const w = this.getColumnWidths(range.c1, range.c2).reduce((a, b) => a + b, 0);
        let cellSelected = false;
        const selectionModel = this.getSelectionModel ? this.getSelectionModel() : undefined;
        if (selectionModel) {
            const count = selectionModel.getSelectionCount(range.r1, range.c1);
            cellSelected = count > 0;
        }
        if (range.gammaRange) {
            // TODO render hierarchy cell
            console.info('TODO here', range);
            this.renderCell({
                areaModel,
                areaIdent: areaModel.areaIdent,
                sideIdent,
                rowIndex: range.r1,
                columnIndex: range.c1,
                left: x1,
                top: y1,
                width: w,
                height: h,
                parent: parentDiv,
                cellSelected,
                lastRowOfModel: true,
                gammaRange: range.gammaRange
            });
        }
        else {
            this.renderCell({
                areaModel,
                areaIdent: areaModel.areaIdent,
                sideIdent,
                rowIndex: range.r1,
                columnIndex: range.c1,
                left: x1,
                top: y1,
                width: w,
                height: h,
                parent: parentDiv,
                cellSelected,
                lastRowOfModel: true,
                gammaRange: range.gammaRange
            });
        }
        if (areaModel.areaIdent === "header" && this.tableOptions.columnsResizable) {
            this.renderHeaderCellResizeHandle({
                rowIndex: range.r1,
                columnIndex: range.c1,
                cellLeft: x1,
                cellTop: y1,
                cellWidth: w,
                cellHeight: h,
                parent: parentDiv
            });
        }
    }
    findRowOfImportantRowspanCell(areaModel, rowIndex, colIndex) {
        const maxRowspan = areaModel.getMaxRowspan();
        for (let r = rowIndex - 1; r > -1; r--) {
            const rowspan = areaModel.getRowspanAt(r, colIndex);
            if (rowspan > 1 && r + rowspan + 1 >= rowIndex) {
                return r;
            }
            if (rowIndex - r > maxRowspan) {
                return -1;
            }
        }
        return -1;
    }
    adjustColumnsToRowParent({ areaIdent, sideIdent, areaModel, geo, parent, rowIndex, columnIndexStart, columnIndexEnd, verticalFixed = false, lastRowOfModel = false }) {
        this.scrollViewportLeft = this.scrollViewport.scrollLeft;
        let virtualRowDivLeft = 0;
        if (!verticalFixed) {
            const virtualRowDivLeftF1 = (this.areaBodyCenterGeo.width) - this.tableModel.getContentWidthInPixel();
            virtualRowDivLeft = this.scrollFactorX * virtualRowDivLeftF1;
        }
        const top = 0;
        const renderSelection = !!(areaIdent === "body" && sideIdent);
        let x = virtualRowDivLeft;
        for (let index = columnIndexStart; index <= columnIndexEnd; index++) {
            const left = x;
            const w = this.tableModel.getColumnWidth(index);
            if (w > 0 && left + w > 0) {
                // Visible! Render cell div:
                // calc height:
                let height = geo.height;
                const rowspan = areaModel.getRowspanAt(rowIndex, index);
                const colspan = areaModel.getColspanAt(rowIndex, index);
                // if (areaIdent==='header') {
                //   console.info(rowIndex+'/'+index, rowspan+'_'+colspan)
                // }
                if (rowspan > 1) {
                    height = this.getRowHeights(rowIndex, rowIndex + rowspan - 1, areaModel).reduce((a, b) => a + b, 0);
                }
                let width = w;
                if (colspan > 1) {
                    width = this.getColumnWidths(index, index + colspan - 1).reduce((a, b) => a + b, 0);
                }
                let skip = false;
                if (this.colAndRowspanModels && this.colAndRowspanModels[areaIdent]) {
                    if (this.colAndRowspanModels[areaIdent]?.isInRange(rowIndex, index)) {
                        skip = true; // for the body area we don't want to to render the small single cells
                    }
                }
                if (this.draggingTargetColumnIndex === index
                    && areaIdent !== "header") {
                    // For a running drag and drop action:
                    this.renderDragTargetDiv(parent, left, top, width, height);
                    const geo1 = { left, top, width, height };
                    this.dom.addColumnBorderDivs(this.tableOptions, parent, geo1, areaIdent, sideIdent);
                }
                else {
                    const cellSelected = this.renderSelectedBackgroundDiv(skip, renderSelection, sideIdent, areaModel, rowIndex, index, parent, left, top, width, height);
                    if (!skip) {
                        this.renderCell({
                            areaModel,
                            areaIdent,
                            sideIdent,
                            rowIndex,
                            columnIndex: index,
                            left,
                            top,
                            width,
                            height,
                            parent,
                            cellSelected,
                            lastRowOfModel,
                            gammaRange: true
                        });
                    }
                    if (areaIdent === "header" && this.tableOptions.columnsResizable) {
                        this.renderHeaderCellResizeHandle({
                            rowIndex: rowIndex,
                            columnIndex: index,
                            cellLeft: left,
                            cellTop: top,
                            cellWidth: width,
                            cellHeight: height,
                            parent: parent
                        });
                    }
                }
            }
            x = x + w;
            if (x > this.areaBodyCenterGeo.width) {
                break;
            }
        }
        // Right vertical border:
        if (this.tableOptions.verticalBorderVisible) {
            this.dom.addVerticalBorder(new GeoData(x - 1, 1, geo.height, 0), parent);
        }
    }
    getTreeArrowColumnIndex() {
        if (this.tableOptions.showCheckboxWihoutExtraColumn) {
            return 0;
        }
        if (this.tableModel.isRowCheckboxVisible()) {
            return 1;
        }
        return 0;
    }
    addAndRenderCellDiv({ areaModel, areaIdent, sideIdent, rowIndex, index, left, width, height, top, parent, lastRowOfModel }) {
        const editor = this.editorRenderer && this.editorRendererRow === rowIndex && this.editorRendererColumn === index;
        const cellRenderer = (editor) ? this.editorRenderer : areaModel.getCellRenderer(rowIndex, index);
        const geo = { left, width, height, top, index };
        const rowObject = areaModel.getRowByIndex(rowIndex);
        let treeArrow = "none";
        const arrowIndexOk = index === this.getTreeArrowColumnIndex();
        if (arrowIndexOk && rowObject instanceof TreeRow) {
            const tr = rowObject;
            if (tr.children?.length) {
                if (tr.expanded) {
                    treeArrow = "expanded";
                }
                else {
                    treeArrow = "collapsed";
                }
            }
            else {
                treeArrow = "hidden";
            }
        }
        let sortState = undefined;
        if (areaIdent === "header") {
            const columnDef = this.tableModel.getColumnDef(index);
            if (!columnDef?.sortIconVisible || columnDef?.sortIconVisible()) {
                sortState = columnDef?.sortState;
            }
        }
        const val = areaModel.getValueAt(rowIndex, index);
        const text = cellRenderer ? "" : `${val}`;
        const checkedType = areaModel.isRowChecked(rowIndex);
        const cell = this.dom.addColumnDiv(parent, geo, rowIndex, index, areaIdent, sideIdent, text, treeArrow, this.tableOptions, checkedType, sortState);
        const tooltip = areaModel.getTooltipAt(rowIndex, index);
        if (tooltip) {
            this.dom.setAttribute(cell, "title", tooltip);
        }
        const columnDef = this.tableModel.getColumnDef(index);
        if (columnDef && columnDef.classes[areaIdent]) {
            this.dom.addClasses(columnDef.classes[areaIdent], cell);
        }
        let fn = undefined;
        if (cellRenderer) {
            fn = cellRenderer.render(cell, rowIndex, index, areaIdent, areaModel, val, this.dom.domService);
        }
        const classes = areaModel.getCustomClassesAt(rowIndex, index);
        if (classes.length) {
            this.dom.addClasses(classes, cell);
        }
        this.dom.addColumnBorderDivs(this.tableOptions, parent, geo, areaIdent, sideIdent);
        if (lastRowOfModel) {
            this.dom.addHorizontalBorder({ left, width, height, top: top + height }, parent);
        }
        if (this.getFocusModel && areaIdent === "body") {
            const fm = this.getFocusModel();
            if (fm?.hasFocus(rowIndex, index)) {
                this.dom.addFocusBorderDivs(parent, geo, {});
            }
        }
        if (areaIdent === "header") {
            this.dom.setAttribute(cell, "data-ge-action", "drag-column");
        }
        const styles = areaModel.getCustomStyleAt(rowIndex, index);
        if (styles) {
            for (const css in styles) {
                this.dom.setStyle(cell, css, styles[css]);
            }
        }
        return [cell, fn];
    }
    getColumnWidths(startIndex, endIndex) {
        const ret = [];
        for (let i = startIndex; i <= endIndex; i++) {
            ret.push(this.tableModel.getColumnWidth(i));
        }
        return ret;
    }
    getRowHeights(startIndex, endIndex, areaModel) {
        const ret = [];
        for (let i = startIndex; i <= endIndex; i++) {
            ret.push(areaModel.getRowHeight(i));
        }
        return ret;
    }
    adjustHoverRows(mouseMoveEvent) {
        if (this.tableOptions.hoverRowVisible && mouseMoveEvent.rowIndex > -1) {
            const width = this.hostElement.clientWidth;
            const rowHeight = this.tableModel.getAreaModel("body").getRowHeight(mouseMoveEvent.rowIndex);
            const top = mouseMoveEvent.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
            this.dom.applyStyle(this.hoverRow, {
                "left": "0",
                "top": top + "px",
                "width": width + "px",
                "height": rowHeight + "px",
                "display": "block"
            });
        }
        else {
            this.hideHoverRow();
        }
    }
    hideHoverRow() {
        this.dom.applyStyle(this.hoverRow, {
            "display": "none"
        });
    }
    adjustHoverColumns(mouseMoveEvent) {
        if (this.tableOptions.hoverColumnVisible && mouseMoveEvent.rowIndex > -1) {
            const height = this.hostElement.clientHeight;
            const width = this.tableModel.getColumnWidth(mouseMoveEvent.columnIndex);
            const fixedWest = this.areaBodyWestGeo.width;
            const left = mouseMoveEvent.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - fixedWest;
            this.dom.applyStyle(this.hoverColumn, {
                "left": (left) + "px",
                "top": "0px",
                "width": width + "px",
                "height": height + "px",
                "display": "block"
            });
        }
        else {
            this.hideHoverColumn();
        }
    }
    hideHoverColumn() {
        this.dom.applyStyle(this.hoverColumn, {
            "display": "none"
        });
    }
    debounce(fn, delay = 1000) {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(fn.bind(this), delay);
    }
    renderDragTargetDiv(parent, left, top, width, height) {
        const div = this.dom.applyStylePosistionAbsolute(this.dom.createDivWithClass("ge-table-drop-zone", parent));
        this.dom.setStyle(div, "left", `${left}px`);
        this.dom.setStyle(div, "top", `${top}px`);
        this.dom.setStyle(div, "width", `${width}px`);
        this.dom.setStyle(div, "height", `${height}px`);
        return div;
    }
    renderSelectedBackgroundDiv(skip, renderSelection, sideIdent, areaModel, rowIndex, index, parent, left, top, width, height) {
        let cellSelected = false;
        if (!skip && renderSelection && areaModel.isSelectable(rowIndex, index)) {
            if (this.getSelectionModel) {
                const selectionModel = this.getSelectionModel();
                if (selectionModel) {
                    const count = selectionModel.getSelectionCount(rowIndex, index);
                    cellSelected = count > 0;
                    for (let i = 0; i < count; i++) {
                        const div = this.dom.applyStylePosistionAbsolute(
                        // ge-table-body-west-selected-range
                        this.dom.createDivWithClass(`ge-table-${areaModel.areaIdent}-${sideIdent}-selected-range`, parent));
                        this.dom.setStyle(div, "left", `${left}px`);
                        this.dom.setStyle(div, "top", `${top}px`);
                        this.dom.setStyle(div, "width", `${width}px`);
                        this.dom.setStyle(div, "height", `${height}px`);
                    }
                }
            }
        }
        return cellSelected;
    }
    renderCell({ areaModel, areaIdent, sideIdent, rowIndex, columnIndex, left, top, width, height, parent, cellSelected, lastRowOfModel, gammaRange }) {
        const [div, fn] = this.addAndRenderCellDiv({
            areaModel,
            areaIdent,
            sideIdent,
            rowIndex,
            index: columnIndex,
            left,
            width,
            height,
            top,
            parent,
            lastRowOfModel,
            gammaRange: gammaRange
        });
        if (cellSelected) {
            this.dom.addClass(`ge-table-${areaIdent}-${sideIdent}-selected-range`, div);
        }
        if (fn) {
            this.cleanupFunctions[areaIdent].push(fn);
        }
    }
    renderHeaderCellResizeHandle({ rowIndex, columnIndex, cellLeft, cellTop, cellWidth, cellHeight, parent }) {
        const domService = this.dom.domService;
        const handleWidth = this.tableOptions.columnResizeHandleWidthInPx ?? 2;
        const div = domService.createElement("div");
        domService.setAttribute(div, "data-col-index", `${columnIndex}`);
        domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        domService.setAttribute(div, "data-area", "header");
        domService.setAttribute(div, "data-ge-action", "resize-column");
        // domService.setAttribute(div, 'data-ge-action', 'column-resize');
        domService.addClass(div, `ge-table-column-resize-handle`);
        domService.setStyle(div, "display", "clip");
        domService.setStyle(div, "position", "absolute");
        domService.setStyle(div, "cursor", "col-resize");
        domService.setStyle(div, "left", `${(cellLeft + cellWidth - handleWidth)}px`);
        domService.setStyle(div, "top", `${cellTop}px`);
        domService.setStyle(div, "width", `${handleWidth}px`);
        domService.setStyle(div, "height", `${cellHeight}px`);
        domService.appendChild(parent, div);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXNjb3BlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90YWJsZS9zcmMvbGliL3RhYmxlL3JlbmRlci1zY29wZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBYXZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQThCdkQsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFRO0lBRTdCLDBCQUEwQixDQUE4QjtJQUN4RCxpQkFBaUIsQ0FBMEI7SUFDM0MsYUFBYSxDQUFzQixDQUFDLGVBQWU7SUFDbkQsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUN2QixhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFFVCxnQkFBZ0IsR0FJL0I7UUFDRixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBQ1EsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN2QiwyREFBMkQ7SUFDakQsbUJBQW1CLEdBQTBDLElBQUksYUFBYSxFQUFzQixDQUFDO0lBQ3JHLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTFCLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLFVBQVUsQ0FBZ0I7SUFDNUIsZUFBZSxDQUF3QztJQUN2RCxjQUFjLENBQWtCO0lBQ2hDLG9C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QUFZLENBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLG1FQUFtRTtRQUNuRSxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQzFELFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDdEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlU2NvcGUgfSBmcm9tIFwiLi9lbGUtc2NvcGVcIjtcbmltcG9ydCB7IFRhYmxlTW9kZWxJZiB9IGZyb20gXCIuL2RhdGEvdGFibGVtb2RlbC90YWJsZS1tb2RlbC5pZlwiO1xuaW1wb3J0IHsgQ29udmVuaWVuY2VEb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9jb252ZW5pZW5jZS1kb20uc2VydmljZVwiO1xuaW1wb3J0IHsgVGFibGVPcHRpb25zSWYgfSBmcm9tIFwiLi9kYXRhL29wdGlvbnMvdGFibGUtb3B0aW9ucy5pZlwiO1xuaW1wb3J0IHsgQ2VsbFJhbmdlIH0gZnJvbSBcIi4vZGF0YS9jb21tb24vY2VsbC1yYW5nZVwiO1xuaW1wb3J0IHsgUmVuZGVyZXJDbGVhbnVwRm5UeXBlIH0gZnJvbSBcIi4vcmVuZGVyZXIvcmVuZGVyZXItY2xlYW51cC1mbi50eXBlXCI7XG5pbXBvcnQgeyBBcmVhSWRlbnQgfSBmcm9tIFwiLi9kYXRhL3RhYmxlbW9kZWwvYXJlYS1pZGVudC50eXBlXCI7XG5pbXBvcnQgeyBTaWRlSWRlbnQgfSBmcm9tIFwiLi9kYXRhL3NpZGUtaWRlbnQudHlwZVwiO1xuaW1wb3J0IHsgRGl2U2NvcGUgfSBmcm9tIFwiLi9kYXRhL2Rpdi1zY29wZS50eXBlXCI7XG5pbXBvcnQgeyBBcmVhTW9kZWxJZiB9IGZyb20gXCIuL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC5pZlwiO1xuaW1wb3J0IHsgQXJnc0FkanVzdENvbHVtbnNUb1Jvd1BhcmVudFBhcmFtcyB9IGZyb20gXCIuL2RhdGEvY29tbW9uL2FyZ3MtYWRqdXN0LWNvbHVtbnMtdG8tcm93LXBhcmVudC1wYXJhbXNcIjtcbmltcG9ydCB7IEFyZ3NSZW5kZXJDZWxsRGl2IH0gZnJvbSBcIi4vZGF0YS9jb21tb24vYXJncy1yZW5kZXItY2VsbC1kaXZcIjtcbmltcG9ydCB7IFRyZWVBcnJvd1R5cGUgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi90cmVlLWFycm93LnR5cGVcIjtcbmltcG9ydCB7IFRyZWVSb3cgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi90cmVlLXJvd1wiO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZVNjcm9sbFBvc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL3N0b3JlLXN0YXRlLXNjcm9sbC1wb3Muc2VydmljZVwiO1xuaW1wb3J0IHsgR2VNb3VzZUV2ZW50IH0gZnJvbSBcIi4vZGF0YS9jb21tb24vZXZlbnQvZ2UtbW91c2UtZXZlbnRcIjtcbmltcG9ydCB7IEFyZWFNb2RlbFRyZWUgfSBmcm9tIFwiLi9kYXRhL3RhYmxlbW9kZWwvYXJlYW1vZGVsL2FyZWEtbW9kZWwtdHJlZVwiO1xuaW1wb3J0IHsgR2VvRGF0YSB9IGZyb20gXCIuL2RhdGEvZ2VvLWRhdGFcIjtcbmltcG9ydCB7IENlbGxSZW5kZXJlcklmIH0gZnJvbSBcIi4vcmVuZGVyZXIvY2VsbC1yZW5kZXIuaWZcIjtcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsSWYgfSBmcm9tIFwiLi9zZWxlY3Rpb24vc2VsZWN0aW9uLW1vZGVsLmlmXCI7XG5pbXBvcnQgeyBHZXRUIH0gZnJvbSBcIi4vZGF0YS9jb21tb24vZ2V0LXRcIjtcbmltcG9ydCB7IEZvY3VzTW9kZWxJZiB9IGZyb20gXCIuL2ZvY3VzL2ZvY3VzLW1vZGVsLmlmXCI7XG5pbXBvcnQgeyBDb2xBbmRSb3dzcGFuTW9kZWwgfSBmcm9tIFwiLi9kYXRhL3RhYmxlbW9kZWwvYXJlYW1vZGVsL2NvbC1hbmQtcm93c3Bhbi1tb2RlbFwiO1xuaW1wb3J0IHsgQXJlYU9iamVjdE1hcFR5cGUgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi9hcmVhLW1hcC50eXBlXCI7XG5pbXBvcnQgeyBBcmVhT2JqZWN0TWFwIH0gZnJvbSBcIi4vZGF0YS9jb21tb24vYXJlYS1tYXBcIjtcbmltcG9ydCB7IFRhYmxlQ2VsbFVwZGF0ZUV2ZW50SWYgfSBmcm9tIFwiLi9kYXRhL2NvbW1vbi9ldmVudC9pbnB1dC90YWJsZS1jZWxsLXVwZGF0ZS1ldmVudC5pZlwiO1xuXG5cbmludGVyZmFjZSBBcmdzUmVuZGVyQ2VsbCB7XG4gIGFyZWFNb2RlbDogQXJlYU1vZGVsSWY7XG4gIGFyZWFJZGVudDogQXJlYUlkZW50O1xuICBzaWRlSWRlbnQ6IFNpZGVJZGVudDtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgY29sdW1uSW5kZXg6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBhcmVudDogSFRNTERpdkVsZW1lbnQ7XG4gIGNlbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgbGFzdFJvd09mTW9kZWw6IGJvb2xlYW47XG4gIGdhbW1hUmFuZ2U6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBBcmdzUmVuZGVySGVhZGVyQ2VsbFJlc2l6ZUhhbmRsZSB7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGNvbHVtbkluZGV4OiBudW1iZXI7XG4gIGNlbGxMZWZ0OiBudW1iZXI7XG4gIGNlbGxUb3A6IG51bWJlcjtcbiAgY2VsbFdpZHRoOiBudW1iZXI7XG4gIGNlbGxIZWlnaHQ6IG51bWJlcjtcbiAgcGFyZW50OiBIVE1MRGl2RWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFJlbmRlclNjb3BlIGV4dGVuZHMgRWxlU2NvcGUge1xuXG4gIHByb3RlY3RlZCBzdG9yZVNjcm9sbFBvc1N0YXRlU2VydmljZT86IFN0b3JlU3RhdGVTY3JvbGxQb3NTZXJ2aWNlO1xuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0aW9uTW9kZWw/OiBHZXRUPFNlbGVjdGlvbk1vZGVsSWY+O1xuICBwcm90ZWN0ZWQgZ2V0Rm9jdXNNb2RlbD86IEdldFQ8Rm9jdXNNb2RlbElmPjsgLy8gVE9ETyB1c2UgaXQhXG4gIHByb3RlY3RlZCBzY3JvbGxMZWZ0ID0gMDtcbiAgcHJvdGVjdGVkIHNjcm9sbFZpZXdwb3J0TGVmdCA9IDA7XG4gIHByb3RlY3RlZCBzY3JvbGxGYWN0b3JZID0gMDtcbiAgcHJvdGVjdGVkIHNjcm9sbEZhY3RvclggPSAwO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBjbGVhbnVwRnVuY3Rpb25zOiB7XG4gICAgaGVhZGVyOiAoUmVuZGVyZXJDbGVhbnVwRm5UeXBlKVtdLFxuICAgIGJvZHk6IChSZW5kZXJlckNsZWFudXBGblR5cGUpW10sXG4gICAgZm9vdGVyOiAoUmVuZGVyZXJDbGVhbnVwRm5UeXBlKVtdLFxuICB9ID0ge1xuICAgIGhlYWRlcjogW10sXG4gICAgYm9keTogW10sXG4gICAgZm9vdGVyOiBbXVxuICB9O1xuICBwcm90ZWN0ZWQgdHJlZSA9IGZhbHNlO1xuICAvLyBUT0RPIGRlbGV0ZT8gcHJvdGVjdGVkIHJhbmdlRWxlczogSFRNTERpdkVsZW1lbnRbXSA9IFtdO1xuICBwcm90ZWN0ZWQgY29sQW5kUm93c3Bhbk1vZGVsczogQXJlYU9iamVjdE1hcFR5cGU8Q29sQW5kUm93c3Bhbk1vZGVsPiA9IG5ldyBBcmVhT2JqZWN0TWFwPENvbEFuZFJvd3NwYW5Nb2RlbD4oKTtcbiAgcHJvdGVjdGVkIGZpcnN0VmlzaWJsZVJvd0luZGV4ID0gLTE7XG5cbiAgcHJvdGVjdGVkIGRyYWdnaW5nVGFyZ2V0Q29sdW1uSW5kZXggPSAtMTtcbiAgcHJvdGVjdGVkIG1vdXNlRXZlbnQ/OiBHZU1vdXNlRXZlbnQ7XG4gIHByaXZhdGUgZGVib3VuY2VUaW1lb3V0PzogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsO1xuICBwcml2YXRlIGVkaXRvclJlbmRlcmVyPzogQ2VsbFJlbmRlcmVySWY7XG4gIHByaXZhdGUgZWRpdG9yUmVuZGVyZXJDb2x1bW4/OiBudW1iZXI7XG4gIHByaXZhdGUgZWRpdG9yUmVuZGVyZXJSb3c/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVtb3ZhYmxlczogSFRNTERpdkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGhvc3RFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICB0YWJsZU1vZGVsOiBUYWJsZU1vZGVsSWYsXG4gICAgZG9tOiBDb252ZW5pZW5jZURvbVNlcnZpY2UsXG4gICAgdGFibGVPcHRpb25zOiBUYWJsZU9wdGlvbnNJZlxuICApIHtcbiAgICBzdXBlcihob3N0RWxlbWVudCwgdGFibGVNb2RlbCwgZG9tLCB0YWJsZU9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMudGFibGVNb2RlbC5nZXRTZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgdGhpcy5nZXRTZWxlY3Rpb25Nb2RlbCA9IHRoaXMudGFibGVNb2RlbC5nZXRTZWxlY3Rpb25Nb2RlbDtcblxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZU9wdGlvbnM/LmdldFNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICB0aGlzLmdldFNlbGVjdGlvbk1vZGVsID0gdGhpcy50YWJsZU9wdGlvbnMuZ2V0U2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFibGVPcHRpb25zPy5nZXRGb2N1c01vZGVsKSB7XG4gICAgICB0aGlzLmdldEZvY3VzTW9kZWwgPSB0aGlzLnRhYmxlT3B0aW9ucy5nZXRGb2N1c01vZGVsO1xuICAgIH1cbiAgICBpZiAodGFibGVNb2RlbC5nZXRBcmVhTW9kZWwoXCJib2R5XCIpIGluc3RhbmNlb2YgQXJlYU1vZGVsVHJlZSkge1xuICAgICAgdGhpcy50cmVlID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgYWVyZWFJZHM6IEFyZWFJZGVudFtdID0gW1wiaGVhZGVyXCIsIFwiYm9keVwiLCBcImZvb3RlclwiXTtcbiAgICBhZXJlYUlkcy5mb3JFYWNoKFxuICAgICAgYXJlYUlkZW50ID0+IHtcbiAgICAgICAgdGhpcy5jb2xBbmRSb3dzcGFuTW9kZWxzW2FyZWFJZGVudF0gPSBuZXcgQ29sQW5kUm93c3Bhbk1vZGVsKHRhYmxlTW9kZWwsIHRhYmxlTW9kZWwuZ2V0QXJlYU1vZGVsKGFyZWFJZGVudCkpO1xuICAgICAgICB0aGlzLmNvbEFuZFJvd3NwYW5Nb2RlbHNbYXJlYUlkZW50XT8uaW5pdCgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZWRpdGluZyA9IGZhbHNlO1xuICBpc0VkaXRpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5lZGl0aW5nO1xuICB9XG5cbiAgcmVzZXRFZGl0b3JSZW5kZXJlcigpIHtcbiAgICB0aGlzLmVkaXRvclJlbmRlcmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWRpdG9yUmVuZGVyZXJSb3cgPSAtMTtcbiAgICB0aGlzLmVkaXRvclJlbmRlcmVyQ29sdW1uID0gLTE7XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgY29uc3Qgc20gPSB0aGlzLmdldFNlbGVjdGlvbk1vZGVsKCk7XG4gICAgICBzbT8uY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBpbml0UmVuZGVyRWRpdG9yKHJvd0lkeDogbnVtYmVyLCBjb2xJZHg6IG51bWJlcikge1xuICAgIGxldCBybkZuID0gdGhpcy50YWJsZU1vZGVsLmdldENvbHVtbkRlZihjb2xJZHgpPy5nZXRFZGl0UmVuZGVyZXI7XG4gICAgaWYgKCFybkZuKSB7XG4gICAgICBybkZuID0gdGhpcy50YWJsZU9wdGlvbnMuZ2V0RWRpdFJlbmRlcmVyO1xuICAgIH1cblxuICAgIGlmIChybkZuKSB7XG4gICAgICB0aGlzLmVkaXRvclJlbmRlcmVyID0gcm5Gbihyb3dJZHgsIGNvbElkeCk7XG5cbiAgICAgIGlmICh0aGlzLmVkaXRvclJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yUmVuZGVyZXJSb3cgPSByb3dJZHg7XG4gICAgICAgIHRoaXMuZWRpdG9yUmVuZGVyZXJDb2x1bW4gPSBjb2xJZHg7XG4gICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwYWludCgpO1xuICAgICAgICAvLyByZXF1ZXN0IGZvY3VzOlxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5nZS10YWJsZS1jZWxsLWVkaXRvci1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzZXRFZGl0b3JSZW5kZXJlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlcGFpbnQoKSB7XG4gICAgdGhpcy5hZGp1c3RBZnRlclNjcm9sbGluZygpO1xuICB9XG5cbiAgb3ZlcnJpZGUgYWRqdXN0QWZ0ZXJTY3JvbGxpbmcoKSB7XG4gICAgZm9yIChjb25zdCBjbGVhbmluZyBvZiB0aGlzLnJlbW92YWJsZXMpIHtcbiAgICAgIGNsZWFuaW5nLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVIb3ZlclJvdygpO1xuICAgIHRoaXMuaGlkZUhvdmVyQ29sdW1uKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsVmlld3BvcnQuc2Nyb2xsTGVmdDtcbiAgICB0aGlzLmRlYm91bmNlKHRoaXMuY2hlY2tGb3JTY3JvbGxQb3NTYXZpbmcuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnNjcm9sbEZhY3RvclkgPSB0aGlzLnNjcm9sbFRvcCAvICh0aGlzLnNjcm9sbFZpZXdwb3J0LnNjcm9sbEhlaWdodCAtIHRoaXMuc2Nyb2xsVmlld3BvcnQuY2xpZW50SGVpZ2h0KTtcbiAgICB0aGlzLnNjcm9sbEZhY3RvclggPSB0aGlzLnNjcm9sbExlZnQgLyAodGhpcy5zY3JvbGxWaWV3cG9ydC5zY3JvbGxXaWR0aCAtIHRoaXMuc2Nyb2xsVmlld3BvcnQuY2xpZW50V2lkdGgpO1xuXG4gICAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsRmFjdG9yWSkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRmFjdG9yWSA9IDA7XG4gICAgfVxuICAgIGlmIChpc05hTih0aGlzLnNjcm9sbEZhY3RvclgpKSB7XG4gICAgICB0aGlzLnNjcm9sbEZhY3RvclggPSAwO1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0Qm9keSgpO1xuICAgIHRoaXMuYWRqdXN0QXJlYShcImZvb3RlclwiKTtcbiAgICB0aGlzLmFkanVzdEFyZWEoXCJoZWFkZXJcIik7XG5cblxuICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy50YWJsZVRvcEJvcmRlclZpc2libGUpIHtcbiAgICAgIHRoaXMucmVtb3ZhYmxlcy5wdXNoKHRoaXMuZG9tLmFkZEhvcml6b250YWxCb3JkZXIoXG4gICAgICAgIG5ldyBHZW9EYXRhKDAsIHRoaXMuaG9zdEVsZW1lbnQuY2xpZW50V2lkdGgsIDEsIDApLFxuICAgICAgICB0aGlzLmhvc3RFbGVtZW50LFxuICAgICAgICBcImdlLXRhYmxlLWJvcmRlclwiKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy50YWJsZUJvdHRvbUJvcmRlclZpc2libGUpIHtcbiAgICAgIHRoaXMucmVtb3ZhYmxlcy5wdXNoKHRoaXMuZG9tLmFkZEhvcml6b250YWxCb3JkZXIoXG4gICAgICAgIG5ldyBHZW9EYXRhKDAsIHRoaXMuaG9zdEVsZW1lbnQuY2xpZW50V2lkdGgsIDEsIHRoaXMuaG9zdEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gMSksXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICAgIFwiZ2UtdGFibGUtYm9yZGVyXCIpKTtcbiAgICB9XG4gICAgLy8gVGhlIGJvcmRlciBiZXR3ZWVuIGVhc3QgYW5kIGNlbnRlciBpbiAgaGVhZGVyL2JvZHkvZm9vdGVyIChmdWxsIGhlaWdodCk6XG4gICAgaWYgKHRoaXMudGFibGVNb2RlbC5nZXRGaXhlZExlZnRDb2x1bW5Db3VudCgpID4gMCkge1xuICAgICAgdGhpcy5yZW1vdmFibGVzLnB1c2godGhpcy5kb20uYWRkVmVydGljYWxCb3JkZXIoXG4gICAgICAgIG5ldyBHZW9EYXRhKHRoaXMuYXJlYUJvZHlXZXN0LmNoaWxkLmNsaWVudFdpZHRoLCAxLCB0aGlzLmhvc3RFbGVtZW50LmNsaWVudEhlaWdodCwgMCksXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICAgIFwiZ2UtdGFibGUtYm9keS13ZXN0LXZlcnRpY2FsLWJvcmRlclwiKSk7XG4gICAgfVxuICAgIC8vIFRoZSBib3JkZXIgYmV0d2VlbiBoZWFkZXIgYW5kIGJvZHkgKGZ1bGwgd2lkdGgpOlxuICAgIGlmICh0aGlzLnRhYmxlTW9kZWwuZ2V0QXJlYU1vZGVsKFwiaGVhZGVyXCIpPy5nZXRSb3dDb3VudCgpID4gMCkge1xuICAgICAgdGhpcy5yZW1vdmFibGVzLnB1c2godGhpcy5kb20uYWRkSG9yaXpvbnRhbEJvcmRlcihcbiAgICAgICAgbmV3IEdlb0RhdGEoMCwgdGhpcy5ob3N0RWxlbWVudC5jbGllbnRXaWR0aCwgMSwgdGhpcy5hcmVhSGVhZGVyQ2VudGVyLmNoaWxkLmNsaWVudEhlaWdodCksXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICAgIFwiZ2UtdGFibGUtYm9keS13ZXN0LXZlcnRpY2FsLWJvcmRlclwiKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGb3JTY3JvbGxQb3NTYXZpbmcoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVTY3JvbGxQb3NTdGF0ZVNlcnZpY2VcbiAgICAgICYmIHRoaXMudGFibGVPcHRpb25zPy5hdXRvUmVzdG9yZU9wdGlvbnM/LmF1dG9SZXN0b3JlU2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RvcmVTY3JvbGxQb3NTdGF0ZVNlcnZpY2UudXBkYXRlU2Nyb2xsT2Zmc2V0KFt0aGlzLnNjcm9sbExlZnQsIHRoaXMuc2Nyb2xsVG9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2VsbHMoZXZlbnRzOiBUYWJsZUNlbGxVcGRhdGVFdmVudElmW10pIHtcbiAgICBldmVudHMuZm9yRWFjaChldnQgPT4gdGhpcy50YWJsZU1vZGVsXG4gICAgICAuZ2V0QXJlYU1vZGVsKGV2dC5hcmVhKVxuICAgICAgLnNldFZhbHVlKGV2dC5yb3dJbmRleCwgZXZ0LmNvbHVtbkluZGV4LCBldnQudmFsdWUpXG4gICAgKTtcbiAgICB0aGlzLnJlcGFpbnQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcmVhQW5kU2lkZUlkZW50QnlBdHRyKHNyY0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogW0FyZWFJZGVudCB8IHVuZGVmaW5lZCwgU2lkZUlkZW50IHwgdW5kZWZpbmVkXSB7XG4gICAgaWYgKHNyY0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRhdGFBcmVhID0gdGhpcy5nZXRTdHJpbmdCeUF0dHIoc3JjRWxlbWVudCwgXCJkYXRhLWFyZWFcIik7XG4gICAgICBjb25zdCBkYXRhU2lkZSA9IHRoaXMuZ2V0U3RyaW5nQnlBdHRyKHNyY0VsZW1lbnQsIFwiZGF0YS1zaWRlXCIpO1xuICAgICAgaWYgKGRhdGFTaWRlICYmIGRhdGFBcmVhKSB7XG4gICAgICAgIHJldHVybiBbZGF0YUFyZWEsIGRhdGFTaWRlXSBhcyBbQXJlYUlkZW50LCBTaWRlSWRlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcmVhKHJvd0lkZW50OiBBcmVhSWRlbnQsIHNpZGVJZGVudDogU2lkZUlkZW50KTogRGl2U2NvcGUge1xuICAgIGlmIChyb3dJZGVudCA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgaWYgKHNpZGVJZGVudCA9PT0gXCJ3ZXN0XCIpIHJldHVybiB0aGlzLmFyZWFIZWFkZXJXZXN0O1xuICAgICAgaWYgKHNpZGVJZGVudCA9PT0gXCJjZW50ZXJcIikgcmV0dXJuIHRoaXMuYXJlYUhlYWRlckNlbnRlcjtcbiAgICAgIGlmIChzaWRlSWRlbnQgPT09IFwiZWFzdFwiKSByZXR1cm4gdGhpcy5hcmVhSGVhZGVyRWFzdDtcbiAgICB9IGVsc2UgaWYgKHJvd0lkZW50ID09PSBcImJvZHlcIikge1xuICAgICAgaWYgKHNpZGVJZGVudCA9PT0gXCJ3ZXN0XCIpIHJldHVybiB0aGlzLmFyZWFCb2R5V2VzdDtcbiAgICAgIGlmIChzaWRlSWRlbnQgPT09IFwiY2VudGVyXCIpIHJldHVybiB0aGlzLmFyZWFCb2R5Q2VudGVyO1xuICAgICAgaWYgKHNpZGVJZGVudCA9PT0gXCJlYXN0XCIpIHJldHVybiB0aGlzLmFyZWFCb2R5RWFzdDtcbiAgICB9IGVsc2UgaWYgKHJvd0lkZW50ID09PSBcImZvb3RlclwiKSB7XG4gICAgICBpZiAoc2lkZUlkZW50ID09PSBcIndlc3RcIikgcmV0dXJuIHRoaXMuYXJlYUZvb3Rlcldlc3Q7XG4gICAgICBpZiAoc2lkZUlkZW50ID09PSBcImNlbnRlclwiKSByZXR1cm4gdGhpcy5hcmVhRm9vdGVyQ2VudGVyO1xuICAgICAgaWYgKHNpZGVJZGVudCA9PT0gXCJlYXN0XCIpIHJldHVybiB0aGlzLmFyZWFGb290ZXJFYXN0O1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcihgV3JvbmcgYXJlYSBpZGVudGlmaWVyOiByb3c6JHtyb3dJZGVudH0sIGNvbDoke3NpZGVJZGVudH1gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGp1c3RCb2R5KCkge1xuICAgIGNvbnN0IHZpcnR1YWxSb3dEaXZUb3BGMSA9IHRoaXMuYXJlYUJvZHlDZW50ZXJHZW8uaGVpZ2h0IC0gdGhpcy50YWJsZU1vZGVsLmdldENvbnRlbnRIZWlnaHRJblBpeGVsKCk7XG4gICAgY29uc3QgdmlydHVhbFJvd0RpdlRvcCA9IHRoaXMuc2Nyb2xsRmFjdG9yWSAqIHZpcnR1YWxSb3dEaXZUb3BGMTtcblxuICAgIHRoaXMuZG9tLnNldFN0eWxlKHRoaXMuY29udGVudERpdiwgXCJ0b3BcIiwgYCR7dGhpcy5zY3JvbGxUb3B9cHhgKTtcbiAgICB0aGlzLmRvbS5zZXRTdHlsZSh0aGlzLmNvbnRlbnREaXYsIFwibGVmdFwiLCBgJHt0aGlzLnNjcm9sbFZpZXdwb3J0LnNjcm9sbExlZnR9cHhgKTtcblxuICAgIHRoaXMuYWRqdXN0QXJlYShcImJvZHlcIiwgdmlydHVhbFJvd0RpdlRvcCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TnVtYmVyQnlBdHRyKHNyY0VsZW1lbnQ6IEhUTUxFbGVtZW50LCBrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKHNyY0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSBzcmNFbGVtZW50LmNsb3Nlc3QoXCJbXCIgKyBrZXkgKyBcIl1cIik/LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgaWYgKGF0dHIpIHJldHVybiBOdW1iZXIoYXR0cik7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHJpbmdCeUF0dHIoc3JjRWxlbWVudDogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoc3JjRWxlbWVudCkge1xuICAgICAgY29uc3QgYXR0ciA9IHNyY0VsZW1lbnQuY2xvc2VzdChcIltcIiArIGtleSArIFwiXVwiKT8uZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICBpZiAoYXR0cikgcmV0dXJuIGF0dHI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkanVzdEFyZWEoYXJlYUlkZW50OiBBcmVhSWRlbnQsIHlTdGFydDogbnVtYmVyID0gMCkge1xuICAgIGNvbnN0IHdlc3RBcmVhID0gdGhpcy5nZXRBcmVhKGFyZWFJZGVudCwgXCJ3ZXN0XCIpO1xuICAgIGNvbnN0IGNlbnRlckFyZWEgPSB0aGlzLmdldEFyZWEoYXJlYUlkZW50LCBcImNlbnRlclwiKTtcbiAgICBjb25zdCBlYXN0QXJlYSA9IHRoaXMuZ2V0QXJlYShhcmVhSWRlbnQsIFwiZWFzdFwiKTtcbiAgICBjb25zdCBkaXZIZWlnaHQgPSBjZW50ZXJBcmVhLmNoaWxkLmNsaWVudEhlaWdodDtcblxuICAgIHdlc3RBcmVhLmNoaWxkLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgY2VudGVyQXJlYS5jaGlsZC5pbm5lclRleHQgPSBcIlwiO1xuICAgIGVhc3RBcmVhLmNoaWxkLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgY29uc3QgbGVmdCA9IDA7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmFyZWFCb2R5Q2VudGVyR2VvLndpZHRoO1xuICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0UGFkZGluZygpO1xuICAgIGNvbnN0IGFyZWFNb2RlbCA9IHRoaXMudGFibGVNb2RlbC5nZXRBcmVhTW9kZWwoYXJlYUlkZW50KTtcbiAgICBjb25zdCByb3dDb3VudCA9IGFyZWFNb2RlbC5nZXRSb3dDb3VudCgpO1xuXG4gICAgd2hpbGUgKHRoaXMuY2xlYW51cEZ1bmN0aW9uc1thcmVhSWRlbnRdLmxlbmd0aCkge1xuICAgICAgY29uc3QgZm4gPSB0aGlzLmNsZWFudXBGdW5jdGlvbnNbYXJlYUlkZW50XS5zaGlmdCgpO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB5ID0geVN0YXJ0O1xuXG4gICAgY29uc3QgY29sdW1uQ291bnQgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Q29sdW1uQ291bnQoKTtcbiAgICBjb25zdCBmaXhlZFJpZ2h0Q29sdW1uQ291bnQgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Rml4ZWRSaWdodENvbHVtbkNvdW50KCk7XG4gICAgY29uc3QgZml4ZWRMZWZ0Q29sdW1uQ291bnQgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Rml4ZWRMZWZ0Q29sdW1uQ291bnQoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByb3dDb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdG9wID0geTtcbiAgICAgIGNvbnN0IGxhc3RSb3dPZk1vZGVsID0gaW5kZXggPT09IHJvd0NvdW50IC0gMTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudGFibGVNb2RlbC5nZXRSb3dIZWlnaHQoYXJlYUlkZW50LCBpbmRleCk7XG5cbiAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiAwKSB7XG4gICAgICAgIC8vIEl0J3Mgbm90IHNjcm9sbGVkIG91dCBvbiB0b3A6XG4gICAgICAgIC8vIFZpc2libGUhXG4gICAgICAgIHRoaXMuZmlyc3RWaXNpYmxlUm93SW5kZXggPSBpbmRleDtcblxuICAgICAgICAvLyBjZW50ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBsZXQgZ2VvID0geyBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0b3AsIGluZGV4IH07XG4gICAgICAgIGxldCByb3dEaXYgPSB0aGlzLmRvbS5hZGRSb3dEaXYoY2VudGVyQXJlYSwgZ2VvLCBpbmRleCwgYXJlYUlkZW50LCBcImNlbnRlclwiKTtcbiAgICAgICAgY29uc3QgY2VudGVyU3RhcnRDb2wgPSBmaXhlZExlZnRDb2x1bW5Db3VudDtcblxuICAgICAgICB0aGlzLmFkanVzdENvbHVtbnNUb1Jvd1BhcmVudCh7XG4gICAgICAgICAgYXJlYUlkZW50LFxuICAgICAgICAgIHNpZGVJZGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhcmVhTW9kZWwsXG4gICAgICAgICAgZ2VvLFxuICAgICAgICAgIHBhcmVudDogcm93RGl2LFxuICAgICAgICAgIHJvd0luZGV4OiBpbmRleCxcbiAgICAgICAgICBjb2x1bW5JbmRleFN0YXJ0OiBjZW50ZXJTdGFydENvbCxcbiAgICAgICAgICBjb2x1bW5JbmRleEVuZDogY29sdW1uQ291bnQgLSBmaXhlZFJpZ2h0Q29sdW1uQ291bnQgLSAxLFxuICAgICAgICAgIHZlcnRpY2FsRml4ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxhc3RSb3dPZk1vZGVsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlc3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAocGFkZGluZy5sZWZ0ID4gMCkge1xuICAgICAgICAgIGdlbyA9IHsgbGVmdCwgd2lkdGg6IHRoaXMuYXJlYUJvZHlXZXN0R2VvLndpZHRoLCBoZWlnaHQsIHRvcCwgaW5kZXggfTtcbiAgICAgICAgICByb3dEaXYgPSB0aGlzLmRvbS5hZGRSb3dEaXYod2VzdEFyZWEsIGdlbywgaW5kZXgsIGFyZWFJZGVudCwgXCJ3ZXN0XCIpO1xuICAgICAgICAgIHRoaXMuYWRqdXN0Q29sdW1uc1RvUm93UGFyZW50KHtcbiAgICAgICAgICAgIGFyZWFJZGVudCxcbiAgICAgICAgICAgIHNpZGVJZGVudDogXCJ3ZXN0XCIsXG4gICAgICAgICAgICBhcmVhTW9kZWwsXG4gICAgICAgICAgICBnZW8sXG4gICAgICAgICAgICBwYXJlbnQ6IHJvd0RpdixcbiAgICAgICAgICAgIHJvd0luZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGNvbHVtbkluZGV4U3RhcnQ6IDAsXG4gICAgICAgICAgICBjb2x1bW5JbmRleEVuZDogY2VudGVyU3RhcnRDb2wgLSAxLFxuICAgICAgICAgICAgdmVydGljYWxGaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RSb3dPZk1vZGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlYXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKHBhZGRpbmcucmlnaHQgPiAwKSB7XG4gICAgICAgICAgZ2VvID0geyBsZWZ0LCB3aWR0aDogdGhpcy5hcmVhQm9keUVhc3RHZW8ud2lkdGgsIGhlaWdodCwgdG9wLCBpbmRleCB9O1xuICAgICAgICAgIHJvd0RpdiA9IHRoaXMuZG9tLmFkZFJvd0RpdihlYXN0QXJlYSwgZ2VvLCBpbmRleCwgYXJlYUlkZW50LCBcImVhc3RcIik7XG4gICAgICAgICAgdGhpcy5hZGp1c3RDb2x1bW5zVG9Sb3dQYXJlbnQoe1xuICAgICAgICAgICAgYXJlYUlkZW50LFxuICAgICAgICAgICAgc2lkZUlkZW50OiBcImVhc3RcIixcbiAgICAgICAgICAgIGFyZWFNb2RlbCxcbiAgICAgICAgICAgIGdlbyxcbiAgICAgICAgICAgIHBhcmVudDogcm93RGl2LFxuICAgICAgICAgICAgcm93SW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgY29sdW1uSW5kZXhTdGFydDogY29sdW1uQ291bnQgLSBmaXhlZFJpZ2h0Q29sdW1uQ291bnQsXG4gICAgICAgICAgICBjb2x1bW5JbmRleEVuZDogY29sdW1uQ291bnQgLSAxLFxuICAgICAgICAgICAgdmVydGljYWxGaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RSb3dPZk1vZGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBcImNvbGxhcHNlIC8gZXhwYW5kIGFsbFwiIGV2ZW50IGhhbmRsZXIgYWN0aW9uIGF0dHJpYnV0ZTpcbiAgICAgICAgaWYgKGFyZWFJZGVudCA9PT0gXCJoZWFkZXJcIiAmJiB0aGlzLnRyZWUgJiYgaW5kZXggPT09IHJvd0NvdW50IC0gMSkge1xuICAgICAgICAgIGNvbnN0IGRpdiA9XG4gICAgICAgICAgICB0aGlzLmRvbS5hcHBseVN0eWxlKFxuICAgICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgdGhpcy5kb20uYWRkRGl2KHJvd0RpdiwgbmV3IEdlb0RhdGEoMTYsIDIwLCAyMCwgOCkpLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1nZS1hY3Rpb25cIiwgXCJ0b2dnbGVFeHBhbmRDb2xsYXBzZUFsbFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHsgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCB0cmVlT3B0aW9uc0Fycm93ID0gdGhpcy50YWJsZU9wdGlvbnMudHJlZU9wdGlvbnMuYXJyb3dFeHBhbmRDb2xsYXBzZUFsbDtcbiAgICAgICAgICBpZiAodHJlZU9wdGlvbnNBcnJvdykge1xuICAgICAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSB0aGlzLmRvbS5kb21TZXJ2aWNlLmNyZWF0ZVRleHQodHJlZU9wdGlvbnNBcnJvdy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZG9tLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQoZGl2LCB0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodHJlZU9wdGlvbnNBcnJvdy5zdHlsZSkge1xuICAgICAgICAgICAgICB0aGlzLmRvbS5hcHBseVN0eWxlU3RyaW5nKGRpdiwgdHJlZU9wdGlvbnNBcnJvdy5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHkgPSB5ICsgaGVpZ2h0O1xuICAgICAgLy8gbGFzdFZpc2libGVSb3dJbmRleCA9IGluZGV4O1xuICAgICAgaWYgKHkgPiBkaXZIZWlnaHQpIHsgLy8gKyAxMDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gZm9yXG5cbiAgICAvLyBXZSBkcmF3IHRoZSBiaWcgY29sc3BhbiBhbmQgcm93c3BhbiBjZWxscyBhdCB0aGUgZW5kLlxuICAgIC8vIFRoaXMgZml4ZXMgdGhlICdoYWxmIGN1dHRlZCBiaWcgY2VsbCcgcHJvYmxlbTpcbiAgICBpZiAodGhpcy5jb2xBbmRSb3dzcGFuTW9kZWxzICYmIHRoaXMuY29sQW5kUm93c3Bhbk1vZGVsc1thcmVhSWRlbnRdKSB7XG4gICAgICAvLyBkcmF3IGNvbC9yb3dzcGFuIGNlbGxzIGFnYWluOlxuICAgICAgY29uc3QgcmFuZ2VzID0gdGhpcy5jb2xBbmRSb3dzcGFuTW9kZWxzW2FyZWFJZGVudF0/LmdldFJhbmdlcygpID8/IFtdO1xuICAgICAgaWYgKHJhbmdlcy5sZW5ndGgpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgICAgIGxldCB4U3RhcnQgPSAwO1xuICAgICAgICAgIGxldCBjaGlsZDogSFRNTERpdkVsZW1lbnQgPSBjZW50ZXJBcmVhLmNoaWxkO1xuICAgICAgICAgIGxldCBzaWRlSWRlbnQ6IFNpZGVJZGVudCA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgaWYgKHJhbmdlLmMxIDwgZml4ZWRMZWZ0Q29sdW1uQ291bnQpIHtcbiAgICAgICAgICAgIC8vIFdlc3Q6XG4gICAgICAgICAgICBjaGlsZCA9IHdlc3RBcmVhLmNoaWxkO1xuICAgICAgICAgICAgc2lkZUlkZW50ID0gXCJ3ZXN0XCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaXhlZFJpZ2h0Q29sdW1uQ291bnQgPiAwICYmIHJhbmdlLmMxID49IGNvbHVtbkNvdW50IC0gZml4ZWRSaWdodENvbHVtbkNvdW50KSB7XG4gICAgICAgICAgICAvLyBFYXN0OlxuICAgICAgICAgICAgY2hpbGQgPSBlYXN0QXJlYS5jaGlsZDtcbiAgICAgICAgICAgIHNpZGVJZGVudCA9IFwiZWFzdFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDZW50ZXI6XG4gICAgICAgICAgICBjb25zdCB2aXJ0dWFsUm93RGl2TGVmdEYxID0gdGhpcy5hcmVhQm9keUNlbnRlckdlby53aWR0aCAtIHRoaXMudGFibGVNb2RlbC5nZXRDb250ZW50V2lkdGhJblBpeGVsKCk7XG4gICAgICAgICAgICB4U3RhcnQgPSAodGhpcy5zY3JvbGxGYWN0b3JYICogdmlydHVhbFJvd0RpdkxlZnRGMSkgLSB0aGlzLmFyZWFCb2R5V2VzdEdlby53aWR0aDtcbiAgICAgICAgICAgIHNpZGVJZGVudCA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHJhd0JpZ0NlbGwocmFuZ2UsIHhTdGFydCwgeVN0YXJ0LCBhcmVhTW9kZWwsIGNoaWxkLCBzaWRlSWRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYXdzIGJpZyBjZWxscyAocm93c3BhbiBhbmQgb3IgY29sc3BhbikgaW4gYm9keS9jZW50ZXJcbiAgICogQHBhcmFtIHJhbmdlIENlbGxSYW5nZVxuICAgKiBAcGFyYW0geFN0YXJ0IFggcG9zaXRpb24gaW4gcGl4ZWwgZm9yIHRvcCBsZWZ0IGNvcm5lclxuICAgKiBAcGFyYW0geVN0YXJ0IFkgcG9zaXRpb24gaW4gcGl4ZWwgZm9yIHRvcCBsZWZ0IGNvcm5lclxuICAgKiBAcGFyYW0gYXJlYU1vZGVsIEFyZWFNb2RlbElmXG4gICAqIEBwYXJhbSBwYXJlbnREaXYgUGFyZW50IGRpdiBhcyBIVE1MRGl2RWxlbWVudFxuICAgKiBAcGFyYW0gc2lkZUlkZW50IFNpZGVJZGVudCAod2VzdCxjZW50ZXIsZWFzdClcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGRyYXdCaWdDZWxsKFxuICAgIHJhbmdlOiBDZWxsUmFuZ2UsXG4gICAgeFN0YXJ0OiBudW1iZXIsXG4gICAgeVN0YXJ0OiBudW1iZXIsXG4gICAgYXJlYU1vZGVsOiBBcmVhTW9kZWxJZixcbiAgICBwYXJlbnREaXY6IEhUTUxEaXZFbGVtZW50LFxuICAgIHNpZGVJZGVudDogU2lkZUlkZW50KSB7XG5cbiAgICBjb25zdCB5MSA9IHlTdGFydCArIHRoaXMuZ2V0Um93SGVpZ2h0cygwLCByYW5nZS5yMSAtIDEsIGFyZWFNb2RlbCkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG5cbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IHRoaXMudGFibGVNb2RlbC5nZXRDb2x1bW5Db3VudCgpO1xuICAgIGNvbnN0IGZpeGVkUmlnaHRDb2x1bW5Db3VudCA9IHRoaXMudGFibGVNb2RlbC5nZXRGaXhlZFJpZ2h0Q29sdW1uQ291bnQoKTtcbiAgICBsZXQgZmlyc3RDb2xJZHggPSAwO1xuICAgIGlmIChmaXhlZFJpZ2h0Q29sdW1uQ291bnQgPiAwICYmIHJhbmdlLmMxID49IGNvbHVtbkNvdW50IC0gZml4ZWRSaWdodENvbHVtbkNvdW50KSB7XG4gICAgICAvLyBXZSBhcmUgb24gdGhlIChmaXhlZCkgZWFzdCBzaWRlLCBzbyB3ZSBoYXZlIHRvIGZpeCBmaXJzdENvbElkeDpcbiAgICAgIGZpcnN0Q29sSWR4ID0gY29sdW1uQ291bnQgLSBmaXhlZFJpZ2h0Q29sdW1uQ291bnQ7XG4gICAgfVxuICAgIGNvbnN0IHgxID0geFN0YXJ0ICsgdGhpcy5nZXRDb2x1bW5XaWR0aHMoZmlyc3RDb2xJZHgsIHJhbmdlLmMxIC0gMSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG5cbiAgICBjb25zdCBoID0gdGhpcy5nZXRSb3dIZWlnaHRzKHJhbmdlLnIxLCByYW5nZS5yMiwgYXJlYU1vZGVsKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBjb25zdCB3ID0gdGhpcy5nZXRDb2x1bW5XaWR0aHMocmFuZ2UuYzEsIHJhbmdlLmMyKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcblxuICAgIGxldCBjZWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBzZWxlY3Rpb25Nb2RlbCA9IHRoaXMuZ2V0U2VsZWN0aW9uTW9kZWwgPyB0aGlzLmdldFNlbGVjdGlvbk1vZGVsKCkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKHNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbkNvdW50KHJhbmdlLnIxLCByYW5nZS5jMSk7XG4gICAgICBjZWxsU2VsZWN0ZWQgPSBjb3VudCA+IDA7XG4gICAgfVxuICAgIGlmIChyYW5nZS5nYW1tYVJhbmdlKSB7XG4gICAgICAvLyBUT0RPIHJlbmRlciBoaWVyYXJjaHkgY2VsbFxuICAgICAgY29uc29sZS5pbmZvKCdUT0RPIGhlcmUnLCByYW5nZSk7XG5cbiAgICAgIHRoaXMucmVuZGVyQ2VsbCh7XG4gICAgICAgIGFyZWFNb2RlbCxcbiAgICAgICAgYXJlYUlkZW50OiBhcmVhTW9kZWwuYXJlYUlkZW50LFxuICAgICAgICBzaWRlSWRlbnQsXG4gICAgICAgIHJvd0luZGV4OiByYW5nZS5yMSxcbiAgICAgICAgY29sdW1uSW5kZXg6IHJhbmdlLmMxLFxuICAgICAgICBsZWZ0OiB4MSxcbiAgICAgICAgdG9wOiB5MSxcbiAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgcGFyZW50OiBwYXJlbnREaXYsXG4gICAgICAgIGNlbGxTZWxlY3RlZCxcbiAgICAgICAgbGFzdFJvd09mTW9kZWw6IHRydWUsXG4gICAgICAgIGdhbW1hUmFuZ2U6cmFuZ2UuZ2FtbWFSYW5nZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyQ2VsbCh7XG4gICAgICAgIGFyZWFNb2RlbCxcbiAgICAgICAgYXJlYUlkZW50OiBhcmVhTW9kZWwuYXJlYUlkZW50LFxuICAgICAgICBzaWRlSWRlbnQsXG4gICAgICAgIHJvd0luZGV4OiByYW5nZS5yMSxcbiAgICAgICAgY29sdW1uSW5kZXg6IHJhbmdlLmMxLFxuICAgICAgICBsZWZ0OiB4MSxcbiAgICAgICAgdG9wOiB5MSxcbiAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgcGFyZW50OiBwYXJlbnREaXYsXG4gICAgICAgIGNlbGxTZWxlY3RlZCxcbiAgICAgICAgbGFzdFJvd09mTW9kZWw6IHRydWUsXG4gICAgICAgIGdhbW1hUmFuZ2U6cmFuZ2UuZ2FtbWFSYW5nZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZWFNb2RlbC5hcmVhSWRlbnQgPT09IFwiaGVhZGVyXCIgJiYgdGhpcy50YWJsZU9wdGlvbnMuY29sdW1uc1Jlc2l6YWJsZSkge1xuICAgICAgdGhpcy5yZW5kZXJIZWFkZXJDZWxsUmVzaXplSGFuZGxlKHtcbiAgICAgICAgcm93SW5kZXg6IHJhbmdlLnIxLFxuICAgICAgICBjb2x1bW5JbmRleDogcmFuZ2UuYzEsXG4gICAgICAgIGNlbGxMZWZ0OiB4MSxcbiAgICAgICAgY2VsbFRvcDogeTEsXG4gICAgICAgIGNlbGxXaWR0aDogdyxcbiAgICAgICAgY2VsbEhlaWdodDogaCxcbiAgICAgICAgcGFyZW50OiBwYXJlbnREaXZcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJvdGVjdGVkIGZpbmRSb3dPZkltcG9ydGFudFJvd3NwYW5DZWxsKGFyZWFNb2RlbDogQXJlYU1vZGVsSWYsIHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG1heFJvd3NwYW4gPSBhcmVhTW9kZWwuZ2V0TWF4Um93c3BhbigpO1xuICAgIGZvciAobGV0IHIgPSByb3dJbmRleCAtIDE7IHIgPiAtMTsgci0tKSB7XG4gICAgICBjb25zdCByb3dzcGFuID0gYXJlYU1vZGVsLmdldFJvd3NwYW5BdChyLCBjb2xJbmRleCk7XG4gICAgICBpZiAocm93c3BhbiA+IDEgJiYgciArIHJvd3NwYW4gKyAxID49IHJvd0luZGV4KSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfVxuICAgICAgaWYgKHJvd0luZGV4IC0gciA+IG1heFJvd3NwYW4pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuXG4gIHByb3RlY3RlZCBhZGp1c3RDb2x1bW5zVG9Sb3dQYXJlbnQoXG4gICAge1xuICAgICAgYXJlYUlkZW50LFxuICAgICAgc2lkZUlkZW50LFxuICAgICAgYXJlYU1vZGVsLFxuICAgICAgZ2VvLFxuICAgICAgcGFyZW50LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjb2x1bW5JbmRleFN0YXJ0LFxuICAgICAgY29sdW1uSW5kZXhFbmQsXG4gICAgICB2ZXJ0aWNhbEZpeGVkID0gZmFsc2UsXG4gICAgICBsYXN0Um93T2ZNb2RlbCA9IGZhbHNlXG4gICAgfTogQXJnc0FkanVzdENvbHVtbnNUb1Jvd1BhcmVudFBhcmFtc1xuICApOiB2b2lkIHtcblxuICAgIHRoaXMuc2Nyb2xsVmlld3BvcnRMZWZ0ID0gdGhpcy5zY3JvbGxWaWV3cG9ydC5zY3JvbGxMZWZ0O1xuICAgIGxldCB2aXJ0dWFsUm93RGl2TGVmdCA9IDA7XG4gICAgaWYgKCF2ZXJ0aWNhbEZpeGVkKSB7XG4gICAgICBjb25zdCB2aXJ0dWFsUm93RGl2TGVmdEYxID0gKHRoaXMuYXJlYUJvZHlDZW50ZXJHZW8ud2lkdGgpIC0gdGhpcy50YWJsZU1vZGVsLmdldENvbnRlbnRXaWR0aEluUGl4ZWwoKTtcbiAgICAgIHZpcnR1YWxSb3dEaXZMZWZ0ID0gdGhpcy5zY3JvbGxGYWN0b3JYICogdmlydHVhbFJvd0RpdkxlZnRGMTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3AgPSAwO1xuICAgIGNvbnN0IHJlbmRlclNlbGVjdGlvbiA9ICEhKGFyZWFJZGVudCA9PT0gXCJib2R5XCIgJiYgc2lkZUlkZW50KTtcblxuICAgIGxldCB4ID0gdmlydHVhbFJvd0RpdkxlZnQ7XG4gICAgZm9yIChsZXQgaW5kZXggPSBjb2x1bW5JbmRleFN0YXJ0OyBpbmRleCA8PSBjb2x1bW5JbmRleEVuZDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgbGVmdCA9IHg7XG4gICAgICBjb25zdCB3ID0gdGhpcy50YWJsZU1vZGVsLmdldENvbHVtbldpZHRoKGluZGV4KTtcbiAgICAgIGlmICh3ID4gMCAmJiBsZWZ0ICsgdyA+IDApIHtcbiAgICAgICAgLy8gVmlzaWJsZSEgUmVuZGVyIGNlbGwgZGl2OlxuXG4gICAgICAgIC8vIGNhbGMgaGVpZ2h0OlxuICAgICAgICBsZXQgaGVpZ2h0ID0gZ2VvLmhlaWdodDtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9IGFyZWFNb2RlbC5nZXRSb3dzcGFuQXQocm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgY29uc3QgY29sc3BhbiA9IGFyZWFNb2RlbC5nZXRDb2xzcGFuQXQocm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgLy8gaWYgKGFyZWFJZGVudD09PSdoZWFkZXInKSB7XG4gICAgICAgIC8vICAgY29uc29sZS5pbmZvKHJvd0luZGV4KycvJytpbmRleCwgcm93c3BhbisnXycrY29sc3BhbilcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChyb3dzcGFuID4gMSkge1xuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0cyhyb3dJbmRleCwgcm93SW5kZXggKyByb3dzcGFuIC0gMSwgYXJlYU1vZGVsKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3aWR0aCA9IHc7XG4gICAgICAgIGlmIChjb2xzcGFuID4gMSkge1xuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRDb2x1bW5XaWR0aHMoaW5kZXgsIGluZGV4ICsgY29sc3BhbiAtIDEpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNraXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY29sQW5kUm93c3Bhbk1vZGVscyAmJiB0aGlzLmNvbEFuZFJvd3NwYW5Nb2RlbHNbYXJlYUlkZW50XSkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbEFuZFJvd3NwYW5Nb2RlbHNbYXJlYUlkZW50XT8uaXNJblJhbmdlKHJvd0luZGV4LCBpbmRleCkpIHtcbiAgICAgICAgICAgIHNraXAgPSB0cnVlOyAvLyBmb3IgdGhlIGJvZHkgYXJlYSB3ZSBkb24ndCB3YW50IHRvIHRvIHJlbmRlciB0aGUgc21hbGwgc2luZ2xlIGNlbGxzXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdUYXJnZXRDb2x1bW5JbmRleCA9PT0gaW5kZXhcbiAgICAgICAgICAmJiBhcmVhSWRlbnQgIT09IFwiaGVhZGVyXCIpIHtcbiAgICAgICAgICAvLyBGb3IgYSBydW5uaW5nIGRyYWcgYW5kIGRyb3AgYWN0aW9uOlxuICAgICAgICAgIHRoaXMucmVuZGVyRHJhZ1RhcmdldERpdihwYXJlbnQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgY29uc3QgZ2VvMSA9IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH07XG4gICAgICAgICAgdGhpcy5kb20uYWRkQ29sdW1uQm9yZGVyRGl2cyh0aGlzLnRhYmxlT3B0aW9ucywgcGFyZW50LCBnZW8xLCBhcmVhSWRlbnQsIHNpZGVJZGVudCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjZWxsU2VsZWN0ZWQgPSB0aGlzLnJlbmRlclNlbGVjdGVkQmFja2dyb3VuZERpdihza2lwLCByZW5kZXJTZWxlY3Rpb24sIHNpZGVJZGVudCwgYXJlYU1vZGVsLCByb3dJbmRleCwgaW5kZXgsIHBhcmVudCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgIGlmICghc2tpcCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDZWxsKHtcbiAgICAgICAgICAgICAgYXJlYU1vZGVsLFxuICAgICAgICAgICAgICBhcmVhSWRlbnQsXG4gICAgICAgICAgICAgIHNpZGVJZGVudCxcbiAgICAgICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgIGNlbGxTZWxlY3RlZCxcbiAgICAgICAgICAgICAgbGFzdFJvd09mTW9kZWwsXG4gICAgICAgICAgICAgIGdhbW1hUmFuZ2U6dHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcmVhSWRlbnQgPT09IFwiaGVhZGVyXCIgJiYgdGhpcy50YWJsZU9wdGlvbnMuY29sdW1uc1Jlc2l6YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXJDZWxsUmVzaXplSGFuZGxlKHtcbiAgICAgICAgICAgICAgcm93SW5kZXg6IHJvd0luZGV4LFxuICAgICAgICAgICAgICBjb2x1bW5JbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgIGNlbGxMZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgICBjZWxsVG9wOiB0b3AsXG4gICAgICAgICAgICAgIGNlbGxXaWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgIGNlbGxIZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ID0geCArIHc7XG4gICAgICBpZiAoeCA+IHRoaXMuYXJlYUJvZHlDZW50ZXJHZW8ud2lkdGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJpZ2h0IHZlcnRpY2FsIGJvcmRlcjpcbiAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMudmVydGljYWxCb3JkZXJWaXNpYmxlKSB7XG4gICAgICB0aGlzLmRvbS5hZGRWZXJ0aWNhbEJvcmRlcihuZXcgR2VvRGF0YSh4IC0gMSwgMSwgZ2VvLmhlaWdodCwgMCksIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFRyZWVBcnJvd0NvbHVtbkluZGV4KCk6IDAgfCAxIHtcbiAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc2hvd0NoZWNrYm94V2lob3V0RXh0cmFDb2x1bW4pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWJsZU1vZGVsLmlzUm93Q2hlY2tib3hWaXNpYmxlKCkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRBbmRSZW5kZXJDZWxsRGl2KFxuICAgIHtcbiAgICAgIGFyZWFNb2RlbCxcbiAgICAgIGFyZWFJZGVudCxcbiAgICAgIHNpZGVJZGVudCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgaW5kZXgsXG4gICAgICBsZWZ0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB0b3AsXG4gICAgICBwYXJlbnQsXG4gICAgICBsYXN0Um93T2ZNb2RlbFxuICAgIH06IEFyZ3NSZW5kZXJDZWxsRGl2KTogW0hUTUxEaXZFbGVtZW50LCBSZW5kZXJlckNsZWFudXBGblR5cGUgfCB1bmRlZmluZWRdIHtcblxuXG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JSZW5kZXJlciAmJiB0aGlzLmVkaXRvclJlbmRlcmVyUm93ID09PSByb3dJbmRleCAmJiB0aGlzLmVkaXRvclJlbmRlcmVyQ29sdW1uID09PSBpbmRleDtcbiAgICBjb25zdCBjZWxsUmVuZGVyZXIgPSAoZWRpdG9yKSA/IHRoaXMuZWRpdG9yUmVuZGVyZXIgOiBhcmVhTW9kZWwuZ2V0Q2VsbFJlbmRlcmVyKHJvd0luZGV4LCBpbmRleCk7XG4gICAgY29uc3QgZ2VvID0geyBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0b3AsIGluZGV4IH07XG4gICAgY29uc3Qgcm93T2JqZWN0ID0gYXJlYU1vZGVsLmdldFJvd0J5SW5kZXgocm93SW5kZXgpO1xuICAgIGxldCB0cmVlQXJyb3c6IFRyZWVBcnJvd1R5cGUgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IGFycm93SW5kZXhPayA9IGluZGV4ID09PSB0aGlzLmdldFRyZWVBcnJvd0NvbHVtbkluZGV4KCk7XG5cbiAgICBpZiAoYXJyb3dJbmRleE9rICYmIHJvd09iamVjdCBpbnN0YW5jZW9mIFRyZWVSb3cpIHtcbiAgICAgIGNvbnN0IHRyID0gcm93T2JqZWN0IGFzIFRyZWVSb3c8YW55PjtcbiAgICAgIGlmICh0ci5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0ci5leHBhbmRlZCkge1xuICAgICAgICAgIHRyZWVBcnJvdyA9IFwiZXhwYW5kZWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmVlQXJyb3cgPSBcImNvbGxhcHNlZFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlQXJyb3cgPSBcImhpZGRlblwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzb3J0U3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGFyZWFJZGVudCA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgY29uc3QgY29sdW1uRGVmID0gdGhpcy50YWJsZU1vZGVsLmdldENvbHVtbkRlZihpbmRleCk7XG4gICAgICBpZiAoIWNvbHVtbkRlZj8uc29ydEljb25WaXNpYmxlIHx8IGNvbHVtbkRlZj8uc29ydEljb25WaXNpYmxlKCkpIHtcbiAgICAgICAgc29ydFN0YXRlID0gY29sdW1uRGVmPy5zb3J0U3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gYXJlYU1vZGVsLmdldFZhbHVlQXQocm93SW5kZXgsIGluZGV4KTtcbiAgICBjb25zdCB0ZXh0ID0gY2VsbFJlbmRlcmVyID8gXCJcIiA6IGAke3ZhbH1gO1xuICAgIGNvbnN0IGNoZWNrZWRUeXBlID0gYXJlYU1vZGVsLmlzUm93Q2hlY2tlZChyb3dJbmRleCk7XG4gICAgY29uc3QgY2VsbCA9IHRoaXMuZG9tLmFkZENvbHVtbkRpdihcbiAgICAgIHBhcmVudCwgZ2VvLCByb3dJbmRleCwgaW5kZXgsIGFyZWFJZGVudCwgc2lkZUlkZW50LFxuICAgICAgdGV4dCwgdHJlZUFycm93LCB0aGlzLnRhYmxlT3B0aW9ucywgY2hlY2tlZFR5cGUsIHNvcnRTdGF0ZSk7XG5cbiAgICBjb25zdCB0b29sdGlwID0gYXJlYU1vZGVsLmdldFRvb2x0aXBBdChyb3dJbmRleCwgaW5kZXgpO1xuICAgIGlmICh0b29sdGlwKSB7XG4gICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoY2VsbCwgXCJ0aXRsZVwiLCB0b29sdGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2x1bW5EZWYgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Q29sdW1uRGVmKGluZGV4KTtcbiAgICBpZiAoY29sdW1uRGVmICYmIGNvbHVtbkRlZi5jbGFzc2VzW2FyZWFJZGVudF0pIHtcbiAgICAgIHRoaXMuZG9tLmFkZENsYXNzZXMoY29sdW1uRGVmLmNsYXNzZXNbYXJlYUlkZW50XSwgY2VsbCk7XG4gICAgfVxuXG4gICAgbGV0IGZuOiBSZW5kZXJlckNsZWFudXBGblR5cGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGNlbGxSZW5kZXJlcikge1xuICAgICAgZm4gPSBjZWxsUmVuZGVyZXIucmVuZGVyKGNlbGwsIHJvd0luZGV4LCBpbmRleCwgYXJlYUlkZW50LCBhcmVhTW9kZWwsIHZhbCwgdGhpcy5kb20uZG9tU2VydmljZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGFyZWFNb2RlbC5nZXRDdXN0b21DbGFzc2VzQXQocm93SW5kZXgsIGluZGV4KTtcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9tLmFkZENsYXNzZXMoY2xhc3NlcywgY2VsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5kb20uYWRkQ29sdW1uQm9yZGVyRGl2cyh0aGlzLnRhYmxlT3B0aW9ucywgcGFyZW50LCBnZW8sIGFyZWFJZGVudCwgc2lkZUlkZW50KTtcbiAgICBpZiAobGFzdFJvd09mTW9kZWwpIHtcbiAgICAgIHRoaXMuZG9tLmFkZEhvcml6b250YWxCb3JkZXIoeyBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0b3A6IHRvcCArIGhlaWdodCB9LCBwYXJlbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRGb2N1c01vZGVsICYmIGFyZWFJZGVudCA9PT0gXCJib2R5XCIpIHtcbiAgICAgIGNvbnN0IGZtID0gdGhpcy5nZXRGb2N1c01vZGVsKCk7XG4gICAgICBpZiAoZm0/Lmhhc0ZvY3VzKHJvd0luZGV4LCBpbmRleCkpIHtcbiAgICAgICAgdGhpcy5kb20uYWRkRm9jdXNCb3JkZXJEaXZzKHBhcmVudCwgZ2VvLCB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmVhSWRlbnQgPT09IFwiaGVhZGVyXCIpIHtcbiAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZShjZWxsLCBcImRhdGEtZ2UtYWN0aW9uXCIsIFwiZHJhZy1jb2x1bW5cIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0gYXJlYU1vZGVsLmdldEN1c3RvbVN0eWxlQXQocm93SW5kZXgsIGluZGV4KTtcbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNzcyBpbiBzdHlsZXMpIHtcbiAgICAgICAgdGhpcy5kb20uc2V0U3R5bGUoY2VsbCwgY3NzLCBzdHlsZXNbY3NzXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbY2VsbCwgZm5dO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbHVtbldpZHRocyhzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgcmV0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMudGFibGVNb2RlbC5nZXRDb2x1bW5XaWR0aChpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Um93SGVpZ2h0cyhzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIsIGFyZWFNb2RlbDogQXJlYU1vZGVsSWYpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgcmV0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIHJldC5wdXNoKGFyZWFNb2RlbC5nZXRSb3dIZWlnaHQoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkanVzdEhvdmVyUm93cyhtb3VzZU1vdmVFdmVudDogR2VNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMudGFibGVPcHRpb25zLmhvdmVyUm93VmlzaWJsZSAmJiBtb3VzZU1vdmVFdmVudC5yb3dJbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaG9zdEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCByb3dIZWlnaHQgPSB0aGlzLnRhYmxlTW9kZWwuZ2V0QXJlYU1vZGVsKFwiYm9keVwiKS5nZXRSb3dIZWlnaHQobW91c2VNb3ZlRXZlbnQucm93SW5kZXgpO1xuICAgICAgY29uc3QgdG9wID0gbW91c2VNb3ZlRXZlbnQucm93VG9wICsgdGhpcy5hcmVhSGVhZGVyQ2VudGVyLnBhcmVudC5jbGllbnRIZWlnaHQgLSB0aGlzLnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuZG9tLmFwcGx5U3R5bGUodGhpcy5ob3ZlclJvdywge1xuICAgICAgICBcImxlZnRcIjogXCIwXCIsXG4gICAgICAgIFwidG9wXCI6IHRvcCArIFwicHhcIixcbiAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCArIFwicHhcIixcbiAgICAgICAgXCJoZWlnaHRcIjogcm93SGVpZ2h0ICsgXCJweFwiLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlSG92ZXJSb3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGlkZUhvdmVyUm93KCkge1xuICAgIHRoaXMuZG9tLmFwcGx5U3R5bGUodGhpcy5ob3ZlclJvdywge1xuICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRqdXN0SG92ZXJDb2x1bW5zKG1vdXNlTW92ZUV2ZW50OiBHZU1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuaG92ZXJDb2x1bW5WaXNpYmxlICYmIG1vdXNlTW92ZUV2ZW50LnJvd0luZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaG9zdEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnRhYmxlTW9kZWwuZ2V0Q29sdW1uV2lkdGgobW91c2VNb3ZlRXZlbnQuY29sdW1uSW5kZXgpO1xuICAgICAgY29uc3QgZml4ZWRXZXN0ID0gdGhpcy5hcmVhQm9keVdlc3RHZW8ud2lkdGg7XG4gICAgICBjb25zdCBsZWZ0ID0gbW91c2VNb3ZlRXZlbnQuY29sdW1uTGVmdCArIHRoaXMudGFibGVNb2RlbC5nZXRQYWRkaW5nKCkubGVmdCAtIHRoaXMuc2Nyb2xsTGVmdCAtIGZpeGVkV2VzdDtcbiAgICAgIHRoaXMuZG9tLmFwcGx5U3R5bGUodGhpcy5ob3ZlckNvbHVtbiwge1xuICAgICAgICBcImxlZnRcIjogKGxlZnQpICsgXCJweFwiLFxuICAgICAgICBcInRvcFwiOiBcIjBweFwiLFxuICAgICAgICBcIndpZHRoXCI6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICBcImhlaWdodFwiOiBoZWlnaHQgKyBcInB4XCIsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVIb3ZlckNvbHVtbigpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoaWRlSG92ZXJDb2x1bW4oKSB7XG4gICAgdGhpcy5kb20uYXBwbHlTdHlsZSh0aGlzLmhvdmVyQ29sdW1uLCB7XG4gICAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWJvdW5jZShmbjogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIgPSAxMDAwKSB7XG4gICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoZm4uYmluZCh0aGlzKSwgZGVsYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJEcmFnVGFyZ2V0RGl2KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9tLmFwcGx5U3R5bGVQb3Npc3Rpb25BYnNvbHV0ZShcbiAgICAgIHRoaXMuZG9tLmNyZWF0ZURpdldpdGhDbGFzcyhcImdlLXRhYmxlLWRyb3Atem9uZVwiLCBwYXJlbnQpXG4gICAgKTtcbiAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtsZWZ0fXB4YCk7XG4gICAgdGhpcy5kb20uc2V0U3R5bGUoZGl2LCBcInRvcFwiLCBgJHt0b3B9cHhgKTtcbiAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgYCR7d2lkdGh9cHhgKTtcbiAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwiaGVpZ2h0XCIsIGAke2hlaWdodH1weGApO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuXG4gIHByaXZhdGUgcmVuZGVyU2VsZWN0ZWRCYWNrZ3JvdW5kRGl2KFxuICAgIHNraXA6IGJvb2xlYW4sXG4gICAgcmVuZGVyU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIHNpZGVJZGVudDogU2lkZUlkZW50LFxuICAgIGFyZWFNb2RlbDogQXJlYU1vZGVsSWYsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBsZXQgY2VsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgaWYgKCFza2lwICYmIHJlbmRlclNlbGVjdGlvbiAmJiBhcmVhTW9kZWwuaXNTZWxlY3RhYmxlKHJvd0luZGV4LCBpbmRleCkpIHtcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbk1vZGVsID0gdGhpcy5nZXRTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IHNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbkNvdW50KHJvd0luZGV4LCBpbmRleCk7XG4gICAgICAgICAgY2VsbFNlbGVjdGVkID0gY291bnQgPiAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gdGhpcy5kb20uYXBwbHlTdHlsZVBvc2lzdGlvbkFic29sdXRlKFxuICAgICAgICAgICAgICAvLyBnZS10YWJsZS1ib2R5LXdlc3Qtc2VsZWN0ZWQtcmFuZ2VcbiAgICAgICAgICAgICAgdGhpcy5kb20uY3JlYXRlRGl2V2l0aENsYXNzKGBnZS10YWJsZS0ke2FyZWFNb2RlbC5hcmVhSWRlbnR9LSR7c2lkZUlkZW50fS1zZWxlY3RlZC1yYW5nZWAsIHBhcmVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtsZWZ0fXB4YCk7XG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAke3RvcH1weGApO1xuICAgICAgICAgICAgdGhpcy5kb20uc2V0U3R5bGUoZGl2LCBcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRTdHlsZShkaXYsIFwiaGVpZ2h0XCIsIGAke2hlaWdodH1weGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2VsbFNlbGVjdGVkO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDZWxsKFxuICAgIHtcbiAgICAgIGFyZWFNb2RlbCxcbiAgICAgIGFyZWFJZGVudCxcbiAgICAgIHNpZGVJZGVudCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uSW5kZXgsXG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYXJlbnQsXG4gICAgICBjZWxsU2VsZWN0ZWQsXG4gICAgICBsYXN0Um93T2ZNb2RlbCxcbiAgICAgIGdhbW1hUmFuZ2VcbiAgICB9OiBBcmdzUmVuZGVyQ2VsbFxuICApIHtcbiAgICBjb25zdCBbZGl2LCBmbl0gPSB0aGlzLmFkZEFuZFJlbmRlckNlbGxEaXYoe1xuICAgICAgYXJlYU1vZGVsLFxuICAgICAgYXJlYUlkZW50LFxuICAgICAgc2lkZUlkZW50LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBpbmRleDogY29sdW1uSW5kZXgsXG4gICAgICBsZWZ0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB0b3AsXG4gICAgICBwYXJlbnQsXG4gICAgICBsYXN0Um93T2ZNb2RlbCxcbiAgICAgIGdhbW1hUmFuZ2U6IGdhbW1hUmFuZ2VcbiAgICB9KTtcbiAgICBpZiAoY2VsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmRvbS5hZGRDbGFzcyhgZ2UtdGFibGUtJHthcmVhSWRlbnR9LSR7c2lkZUlkZW50fS1zZWxlY3RlZC1yYW5nZWAsIGRpdik7XG4gICAgfVxuICAgIGlmIChmbikge1xuICAgICAgdGhpcy5jbGVhbnVwRnVuY3Rpb25zW2FyZWFJZGVudF0ucHVzaChmbik7XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIHJlbmRlckhlYWRlckNlbGxSZXNpemVIYW5kbGUoXG4gICAgeyByb3dJbmRleCwgY29sdW1uSW5kZXgsIGNlbGxMZWZ0LCBjZWxsVG9wLCBjZWxsV2lkdGgsIGNlbGxIZWlnaHQsIHBhcmVudCB9OiBBcmdzUmVuZGVySGVhZGVyQ2VsbFJlc2l6ZUhhbmRsZVxuICApIHtcblxuICAgIGNvbnN0IGRvbVNlcnZpY2UgPSB0aGlzLmRvbS5kb21TZXJ2aWNlO1xuICAgIGNvbnN0IGhhbmRsZVdpZHRoID0gdGhpcy50YWJsZU9wdGlvbnMuY29sdW1uUmVzaXplSGFuZGxlV2lkdGhJblB4ID8/IDI7XG5cbiAgICBjb25zdCBkaXYgPSBkb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIGRvbVNlcnZpY2Uuc2V0QXR0cmlidXRlKGRpdiwgXCJkYXRhLWNvbC1pbmRleFwiLCBgJHtjb2x1bW5JbmRleH1gKTtcbiAgICBkb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1yb3ctaW5kZXhcIiwgYCR7cm93SW5kZXh9YCk7XG4gICAgZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtYXJlYVwiLCBcImhlYWRlclwiKTtcbiAgICBkb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1nZS1hY3Rpb25cIiwgXCJyZXNpemUtY29sdW1uXCIpO1xuICAgIC8vIGRvbVNlcnZpY2Uuc2V0QXR0cmlidXRlKGRpdiwgJ2RhdGEtZ2UtYWN0aW9uJywgJ2NvbHVtbi1yZXNpemUnKTtcbiAgICBkb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgYGdlLXRhYmxlLWNvbHVtbi1yZXNpemUtaGFuZGxlYCk7XG4gICAgZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICBkb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJjdXJzb3JcIiwgXCJjb2wtcmVzaXplXCIpO1xuICAgIGRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImxlZnRcIiwgYCR7KGNlbGxMZWZ0ICsgY2VsbFdpZHRoIC0gaGFuZGxlV2lkdGgpfXB4YCk7XG4gICAgZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAke2NlbGxUb3B9cHhgKTtcbiAgICBkb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ3aWR0aFwiLCBgJHtoYW5kbGVXaWR0aH1weGApO1xuICAgIGRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImhlaWdodFwiLCBgJHtjZWxsSGVpZ2h0fXB4YCk7XG4gICAgZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG4gIH1cblxuXG59XG5cbiJdfQ==