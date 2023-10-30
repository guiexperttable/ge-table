import { TreeOptions } from "../data/options/tree-options";
import { SortedOptions } from "../data/options/sorted-options";
export class ConvenienceDomService {
    domService;
    constructor(domService) {
        this.domService = domService;
    }
    setStyle(el, style, value) {
        this.domService.setStyle(el, style, value);
        return el;
    }
    ;
    applyStyle(ele, style) {
        for (const key in style) {
            this.domService.setStyle(ele, key, style[key]);
        }
        return ele;
    }
    applyDisplayNoneStyle(ele) {
        this.domService.setStyle(ele, "display", "none");
        return ele;
    }
    applyDisplayBlockStyle(ele) {
        this.domService.setStyle(ele, "display", "block");
        return ele;
    }
    applyStyleInPx(ele, geoData) {
        Object.entries(geoData)
            .forEach(([key, value]) => this.domService.setStyle(ele, key, value + "px"));
        return ele;
    }
    applyStylePosistionRelative(ele) {
        this.domService.setStyle(ele, "position", "relative");
        this.domService.setStyle(ele, "overflow", "clip");
        return ele;
    }
    applyStylePosistionAbsolute(ele) {
        this.domService.setStyle(ele, "position", "absolute");
        return ele;
    }
    applyStyleFullSize(ele) {
        this.domService.setStyle(ele, "width", "100%");
        this.domService.setStyle(ele, "height", "100%");
        return ele;
    }
    applyStyleOverflowAuto(overflowX = "auto", overflowY = "auto", ele) {
        this.domService.setStyle(ele, "overflow-x", overflowX);
        this.domService.setStyle(ele, "overflow-y", overflowY);
        return ele;
    }
    applyStyleNoPadding(ele) {
        this.domService.setStyle(ele, "padding", "0");
        this.domService.setStyle(ele, "margin", "0");
        this.domService.setStyle(ele, "border", "0");
        return ele;
    }
    appendRelativeChildDiv(parent) {
        const child = this.applyStylePosistionRelative(this.applyStyleFullSize(this.applyStyleNoPadding(this.domService.createElement("div"))));
        this.domService.appendChild(parent, child);
        this.applyStylePosistionAbsolute(parent);
        const cache = {};
        return { parent, child, cache };
    }
    appendText(parent, text) {
        const div = this.domService.createText(text);
        this.domService.appendChild(parent, div);
        return div;
    }
    addClass(clazz, div) {
        if (clazz.includes(" ")) {
            clazz.split(" ").forEach(c => this.domService.addClass(div, c));
        }
        else {
            this.domService.addClass(div, clazz);
        }
        return div;
    }
    addClasses(classes, div) {
        if (classes) {
            for (const c of classes) {
                this.domService.addClass(div, c);
            }
        }
        return div;
    }
    setAttribute(div, key, value) {
        if (key && value) {
            this.domService.setAttribute(div, key, value);
        }
        return div;
    }
    createAreaDivWithClass(clazz, parent, areaIdent, sideIdent) {
        const div = this.domService.createElement("div");
        this.addClass(clazz, div);
        this.domService.setAttribute(div, "data-area", areaIdent);
        this.domService.setAttribute(div, "data-side", sideIdent);
        this.domService.appendChild(parent, div);
        return div;
    }
    createDivWithClass(clazz, parent) {
        const div = this.domService.createElement("div");
        this.addClass(clazz, div);
        this.domService.appendChild(parent, div);
        return div;
    }
    addRowDiv(divScope, geo, rowIndex = -1, areaIdent, sideIdent, text = "") {
        const cacheKey = geo.index ?? -1;
        const div = this.getDivOrCreateDiv(cacheKey, divScope);
        this.domService.addClass(div, "ge-table-row-div");
        this.domService.addClass(div, `ge-table-row-div-${geo.index}`);
        if (areaIdent === "body" && sideIdent === "center") {
            const oddEven = (geo?.index ?? 0) % 2 === 0 ? "even" : "odd";
            this.domService.addClass(div, `ge-table-row-${oddEven}`);
        }
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        this.domService.setAttribute(div, "data-area", `${areaIdent}`);
        // debugging:
        if (text) {
            const textElement = this.domService.createText(text);
            this.domService.appendChild(div, textElement);
        }
        // -------------
        this.domService.appendChild(divScope.child, div);
        return div;
    }
    addColumnDiv(parent, geo, rowIndex = -1, columnIndex = -1, areaIdent, sideIdent, text = "", treeArrow, tableOptions, checkedType = undefined, sortState) {
        const treeOptions = tableOptions?.treeOptions;
        const checkboxWithoutExtraColumn = tableOptions?.showCheckboxWihoutExtraColumn;
        const div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-col-div");
        this.domService.addClass(div, `ge-table-col-div-${geo.index}`);
        this.domService.setAttribute(div, "data-col-index", `${geo.index}`);
        this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        this.domService.setAttribute(div, "data-area", `${areaIdent}`);
        const oddEven = (geo?.index ?? 0) % 2 === 0 ? "even" : "odd";
        if (areaIdent === "body" && sideIdent === "center") {
            this.domService.addClass(div, `ge-table-column-${oddEven}`);
        }
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        if (treeArrow && treeArrow !== "none") {
            this.domService.addClass(div, "ge-table-col-tree");
            this.addArrowDiv(div, treeArrow, treeOptions, rowIndex, columnIndex, areaIdent);
        }
        if (checkboxWithoutExtraColumn && columnIndex === 0 && checkedType) {
            this.addCheckboxToDiv(div, checkedType, areaIdent, rowIndex);
        }
        if (text) {
            const firstTreeColumn = (treeArrow !== "none" && columnIndex === 0);
            this.addLabelDiv(div, text, firstTreeColumn, rowIndex, columnIndex, areaIdent);
        }
        if (sortState) {
            this.addSortedIcon(div, sortState, tableOptions?.sortedOptions, columnIndex);
        }
        this.domService.appendChild(parent, div);
        return div;
    }
    addCheckboxToDiv(parent, checkedType, areaIdent, rowIndex) {
        const div = this.domService.createElement("div");
        const checked = (checkedType === "full") ? "checked" : "";
        div.innerHTML = `
            <input
                type="checkbox"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-input-type="checkbox"
                ${checked}
                class="ge-table-row-checkbox"> `;
        this.domService.setStyle(div, "display", "inline");
        this.domService.setStyle(div, "width", "inherit");
        this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        this.domService.appendChild(parent, div);
        return div;
    }
    addLabelDiv(parent, text = "", firstTreeColumn = false, rowIndex = -1, columnIndex = -1, areaIdent = "body") {
        const div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-label-div");
        // this.domService.setStyle(div, 'display', 'inline');
        this.domService.setStyle(div, "position", "relative");
        this.domService.setStyle(div, "background", "transparent");
        this.domService.setStyle(div, "width", "100%");
        this.domService.setStyle(div, "height", "100%");
        this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        this.domService.setAttribute(div, "data-col-index", `${columnIndex}`);
        this.domService.setAttribute(div, "data-area", `${areaIdent}`);
        if (text) {
            if (firstTreeColumn) {
                const textElement = this.domService.createText(text);
                this.domService.appendChild(div, textElement);
            }
            else {
                // normal cell:
                const div2 = this.domService.createElement("div");
                this.domService.appendChild(div, div2);
                const textElement = this.domService.createText(text);
                this.domService.addClass(div2, "ge-table-label");
                this.domService.appendChild(div2, textElement);
                this.domService.setAttribute(div2, "data-row-index", `${rowIndex}`);
                this.domService.setAttribute(div2, "data-col-index", `${columnIndex}`);
                this.domService.setAttribute(div2, "data-area", `${areaIdent}`);
            }
        }
        this.domService.appendChild(parent, div);
        return div;
    }
    addSortedIcon(parent, sorted = "", sortedOptions = new SortedOptions(), columnIndex = -1) {
        const div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-sorted-icon-div");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "top", "0");
        this.domService.setStyle(div, "right", "0");
        this.domService.setStyle(div, "width", "20px");
        this.domService.setStyle(div, "background", "transparent");
        this.domService.setStyle(div, "cursor", "pointer");
        this.domService.setAttribute(div, "data-col-index", `${columnIndex}`);
        this.domService.setAttribute(div, "data-area", "header");
        let treeOptionsArrow;
        if (sorted === "asc") {
            treeOptionsArrow = sortedOptions.iconAsc;
        }
        else if (sorted === "desc") {
            treeOptionsArrow = sortedOptions.iconDesc;
        }
        else {
            treeOptionsArrow = sortedOptions.iconPlaceholder;
        }
        // Text:
        const content = treeOptionsArrow.content;
        const textElement = this.domService.createText(content);
        this.domService.appendChild(div, textElement);
        // Style:
        if (treeOptionsArrow.style) {
            this.applyStyleString(div, treeOptionsArrow.style);
        }
        // Classes:
        for (const clazz of treeOptionsArrow.classes) {
            this.domService.addClass(div, clazz);
        }
        this.domService.appendChild(parent, div);
        return div;
    }
    addArrowDiv(parent, arrow = "none", treeOptions = new TreeOptions(), rowIndex = -1, columnIndex = -1, areaIdent = "body") {
        const div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-tree-arrow-div");
        this.domService.setStyle(div, "display", "inline-block");
        this.domService.setStyle(div, "position", "");
        this.domService.setStyle(div, "width", "20px");
        this.domService.setStyle(div, "background", "transparent");
        this.domService.setStyle(div, "cursor", "pointer");
        this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
        this.domService.setAttribute(div, "data-col-index", `${columnIndex}`);
        this.domService.setAttribute(div, "data-area", `${areaIdent}`);
        let treeOptionsArrow;
        if (arrow === "expanded") {
            treeOptionsArrow = treeOptions.arrowExpanded;
        }
        else if (arrow === "collapsed") {
            treeOptionsArrow = treeOptions.arrowCollapsed;
        }
        else {
            treeOptionsArrow = treeOptions.arrowPlaceholder;
        }
        // Text:
        const content = treeOptionsArrow.content;
        const textElement = this.domService.createText(content);
        this.domService.appendChild(div, textElement);
        // Style:
        if (treeOptionsArrow.style) {
            this.applyStyleString(div, treeOptionsArrow.style);
        }
        // Classes:
        for (const clazz of treeOptionsArrow.classes) {
            this.domService.addClass(div, clazz);
        }
        this.domService.appendChild(parent, div);
        return div;
    }
    addColumnBorderDivs(tableOptions, parent, geo, areaIdent, sideIdent) {
        if (tableOptions.verticalBorderVisible) {
            const clazz = `ge-table-${areaIdent}-${sideIdent}-vertical-border`;
            this.addVerticalBorder(geo, parent, clazz);
        }
        if (tableOptions.horizontalBorderVisible) {
            const clazz = `ge-table-${areaIdent}-${sideIdent}-horizontal-border`;
            this.addHorizontalBorder(geo, parent, clazz);
        }
        return parent;
    }
    addHorizontalBorder(geo, parent, clazz = "ge-table-body-center-horizontal-border") {
        // Border south:
        const div = this.domService.createElement("div");
        this.domService.addClass(div, clazz);
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${(geo.top)}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `1px`);
        this.domService.appendChild(parent, div);
        return div;
    }
    addFocusBorderDivs(parent, geo, style) {
        // Border west:
        let div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-focus-border");
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `1px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        this.applyStyle(div, style);
        this.domService.appendChild(parent, div);
        // Border east:
        div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-focus-border");
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left + geo.width - 1}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `1px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        this.applyStyle(div, style);
        this.domService.appendChild(parent, div);
        // Border north:
        div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-focus-border");
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${(geo.top)}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `1px`);
        this.applyStyle(div, style);
        this.domService.appendChild(parent, div);
        // Border south:
        div = this.domService.createElement("div");
        this.domService.addClass(div, "ge-table-focus-border");
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${(geo.top + geo.height - 1)}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `1px`);
        this.applyStyle(div, style);
        this.domService.appendChild(parent, div);
        return parent;
    }
    addVerticalBorder(geo, parent, clazz = "ge-table-body-center-vertical-border") {
        // Border east:
        const div = this.domService.createElement("div");
        this.domService.addClass(div, clazz);
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `1px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        this.domService.appendChild(parent, div);
        return div;
    }
    addDiv(parent, geo, clazz = "") {
        const div = this.domService.createElement("div");
        if (clazz) {
            this.domService.addClass(div, clazz);
        }
        this.domService.setStyle(div, "display", "clip");
        this.domService.setStyle(div, "position", "absolute");
        this.domService.setStyle(div, "left", `${geo.left}px`);
        this.domService.setStyle(div, "top", `${geo.top}px`);
        this.domService.setStyle(div, "width", `${geo.width}px`);
        this.domService.setStyle(div, "height", `${geo.height}px`);
        this.domService.appendChild(parent, div);
        return div;
    }
    applyStyleString(div, style) {
        // transform: rotate(-90deg) translate(-100%, 0); transform-origin: left top; font-size: 1.5em;
        const cmds = style.split(";").map(s => s.trim()).filter(s => s);
        for (const cmd of cmds) {
            const [key, value] = cmd.split(":");
            this.domService.setStyle(div, key.trim(), value.trim());
        }
    }
    getDivOrCreateDiv(cacheKey, divScope) {
        let div = divScope.cache[cacheKey];
        if (div) {
            div.innerText = ""; // erst mal leer machen, später col-cache nutzen
            return div;
        }
        div = this.domService.createElement("div");
        divScope.cache[cacheKey] = div;
        return div;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVuaWVuY2UtZG9tLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvc2VydmljZS9jb252ZW5pZW5jZS1kb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSy9ELE1BQU0sT0FBTyxxQkFBcUI7SUFHZDtJQURsQixZQUNrQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBRTFDLENBQUM7SUFHRCxRQUFRLENBQUMsRUFBTyxFQUFFLEtBQWEsRUFBRSxLQUFVO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQUEsQ0FBQztJQUdGLFVBQVUsQ0FBQyxHQUFtQixFQUFFLEtBQWdCO1FBQzlDLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxHQUFtQjtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHNCQUFzQixDQUFDLEdBQW1CO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FB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QUMsR0FBRyxHQUFHLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TZXJ2aWNlSWYgfSBmcm9tIFwiLi9kb20tc2VydmljZS5pZlwiO1xuaW1wb3J0IHsgRGl2U2NvcGUgfSBmcm9tIFwiLi8uLi9kYXRhL2Rpdi1zY29wZS50eXBlXCI7XG5pbXBvcnQgeyBHZW9EYXRhIH0gZnJvbSBcIi4vLi4vZGF0YS9nZW8tZGF0YVwiO1xuaW1wb3J0IHsgVHJlZUFycm93VHlwZSB9IGZyb20gXCIuLi9kYXRhL2NvbW1vbi90cmVlLWFycm93LnR5cGVcIjtcbmltcG9ydCB7IFRyZWVPcHRpb25zSWYgfSBmcm9tIFwiLi4vZGF0YS9vcHRpb25zL3RyZWUtb3B0aW9ucy5pZlwiO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tIFwiLi4vZGF0YS9vcHRpb25zL3RyZWUtb3B0aW9uc1wiO1xuaW1wb3J0IHsgQXJlYUlkZW50IH0gZnJvbSBcIi4uL2RhdGEvdGFibGVtb2RlbC9hcmVhLWlkZW50LnR5cGVcIjtcbmltcG9ydCB7IEljb25JZiB9IGZyb20gXCIuLi9kYXRhL29wdGlvbnMvaWNvbi5pZlwiO1xuaW1wb3J0IHsgVGFibGVPcHRpb25zSWYgfSBmcm9tIFwiLi4vZGF0YS9vcHRpb25zL3RhYmxlLW9wdGlvbnMuaWZcIjtcbmltcG9ydCB7IENoZWNrZWRUeXBlIH0gZnJvbSBcIi4uL2RhdGEvY29tbW9uL2NoZWNrZWQtdHlwZVwiO1xuaW1wb3J0IHsgU2lkZUlkZW50IH0gZnJvbSBcIi4uL2RhdGEvc2lkZS1pZGVudC50eXBlXCI7XG5pbXBvcnQgeyBTb3J0U3RhdGUgfSBmcm9tIFwiLi4vZGF0YS9jb21tb24vc29ydC1zdGF0ZS50eXBlXCI7XG5pbXBvcnQgeyBTb3J0ZWRPcHRpb25zIH0gZnJvbSBcIi4uL2RhdGEvb3B0aW9ucy9zb3J0ZWQtb3B0aW9uc1wiO1xuaW1wb3J0IHsgU29ydGVkT3B0aW9uc0lmIH0gZnJvbSBcIi4uL2RhdGEvb3B0aW9ucy9zb3J0ZWQtb3B0aW9ucy5pZlwiO1xuaW1wb3J0IHsgSHRtbFN0eWxlIH0gZnJvbSBcIi4vZGF0YS9odG1sLXN0eWxlLnR5cGVcIjtcblxuXG5leHBvcnQgY2xhc3MgQ29udmVuaWVuY2VEb21TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgZG9tU2VydmljZTogRG9tU2VydmljZUlmXG4gICkge1xuICB9XG5cblxuICBzZXRTdHlsZShlbDogYW55LCBzdHlsZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWwsIHN0eWxlLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGVsO1xuICB9O1xuXG5cbiAgYXBwbHlTdHlsZShlbGU6IEhUTUxEaXZFbGVtZW50LCBzdHlsZTogSHRtbFN0eWxlKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBrZXksIHN0eWxlW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlO1xuICB9XG5cbiAgYXBwbHlEaXNwbGF5Tm9uZVN0eWxlKGVsZTogSFRNTERpdkVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGVsZSwgXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICByZXR1cm4gZWxlO1xuICB9XG5cbiAgYXBwbHlEaXNwbGF5QmxvY2tTdHlsZShlbGU6IEhUTUxEaXZFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShlbGUsIFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIHJldHVybiBlbGU7XG4gIH1cblxuICBhcHBseVN0eWxlSW5QeChlbGU6IEhUTUxEaXZFbGVtZW50LCBnZW9EYXRhOiBHZW9EYXRhKTogSFRNTERpdkVsZW1lbnQge1xuICAgIE9iamVjdC5lbnRyaWVzKGdlb0RhdGEpXG4gICAgICAuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBrZXksIHZhbHVlICsgXCJweFwiKSk7XG4gICAgcmV0dXJuIGVsZTtcbiAgfVxuXG4gIGFwcGx5U3R5bGVQb3Npc3Rpb25SZWxhdGl2ZShlbGU6IEhUTUxEaXZFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShlbGUsIFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBcIm92ZXJmbG93XCIsIFwiY2xpcFwiKTtcbiAgICByZXR1cm4gZWxlO1xuICB9XG5cbiAgYXBwbHlTdHlsZVBvc2lzdGlvbkFic29sdXRlKGVsZTogSFRNTERpdkVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGVsZSwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHJldHVybiBlbGU7XG4gIH1cblxuICBhcHBseVN0eWxlRnVsbFNpemUoZWxlOiBIVE1MRGl2RWxlbWVudCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBcImhlaWdodFwiLCBcIjEwMCVcIik7XG4gICAgcmV0dXJuIGVsZTtcbiAgfVxuXG4gIGFwcGx5U3R5bGVPdmVyZmxvd0F1dG8oXG4gICAgb3ZlcmZsb3dYOiBcInNjcm9sbFwiIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIGVsZTogSFRNTERpdkVsZW1lbnRcbiAgKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShlbGUsIFwib3ZlcmZsb3cteFwiLCBvdmVyZmxvd1gpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShlbGUsIFwib3ZlcmZsb3cteVwiLCBvdmVyZmxvd1kpO1xuICAgIHJldHVybiBlbGU7XG4gIH1cblxuICBhcHBseVN0eWxlTm9QYWRkaW5nKGVsZTogSFRNTERpdkVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGVsZSwgXCJwYWRkaW5nXCIsIFwiMFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZWxlLCBcIm1hcmdpblwiLCBcIjBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGVsZSwgXCJib3JkZXJcIiwgXCIwXCIpO1xuICAgIHJldHVybiBlbGU7XG4gIH1cblxuICBhcHBlbmRSZWxhdGl2ZUNoaWxkRGl2KHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiBEaXZTY29wZSB7XG4gICAgY29uc3QgY2hpbGQgPVxuICAgICAgdGhpcy5hcHBseVN0eWxlUG9zaXN0aW9uUmVsYXRpdmUoXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZUZ1bGxTaXplKFxuICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZU5vUGFkZGluZyhcbiAgICAgICAgICAgIHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCk7XG4gICAgdGhpcy5hcHBseVN0eWxlUG9zaXN0aW9uQWJzb2x1dGUocGFyZW50KTtcbiAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgIHJldHVybiB7IHBhcmVudCwgY2hpbGQsIGNhY2hlIH07XG4gIH1cblxuICBhcHBlbmRUZXh0KHBhcmVudDogSFRNTERpdkVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvbVNlcnZpY2UuY3JlYXRlVGV4dCh0ZXh0KTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuXG4gIGFkZENsYXNzKGNsYXp6OiBzdHJpbmcsIGRpdjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBpZiAoY2xhenouaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgICBjbGF6ei5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIGMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgY2xhenopO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCwgZGl2OiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgY2xhc3Nlcykge1xuICAgICAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShkaXY6IEhUTUxEaXZFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGlmIChrZXkgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG5cbiAgY3JlYXRlQXJlYURpdldpdGhDbGFzcyhjbGF6ejogc3RyaW5nLCBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBhcmVhSWRlbnQ6IEFyZWFJZGVudCwgc2lkZUlkZW50OiBTaWRlSWRlbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuYWRkQ2xhc3MoY2xhenosIGRpdik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1hcmVhXCIsIGFyZWFJZGVudCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1zaWRlXCIsIHNpZGVJZGVudCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKHBhcmVudCwgZGl2KTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgY3JlYXRlRGl2V2l0aENsYXNzKGNsYXp6OiBzdHJpbmcsIHBhcmVudDogSFRNTERpdkVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuYWRkQ2xhc3MoY2xhenosIGRpdik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKHBhcmVudCwgZGl2KTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cblxuICBhZGRSb3dEaXYoXG4gICAgZGl2U2NvcGU6IERpdlNjb3BlLFxuICAgIGdlbzogR2VvRGF0YSxcbiAgICByb3dJbmRleDogbnVtYmVyID0gLTEsXG4gICAgYXJlYUlkZW50OiBBcmVhSWRlbnQsXG4gICAgc2lkZUlkZW50OiBTaWRlSWRlbnQsXG4gICAgdGV4dDogc3RyaW5nID0gXCJcIlxuICApOiBIVE1MRGl2RWxlbWVudCB7XG5cbiAgICBjb25zdCBjYWNoZUtleSA9IGdlby5pbmRleCA/PyAtMTtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmdldERpdk9yQ3JlYXRlRGl2KGNhY2hlS2V5LCBkaXZTY29wZSk7XG5cbiAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBcImdlLXRhYmxlLXJvdy1kaXZcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgYGdlLXRhYmxlLXJvdy1kaXYtJHtnZW8uaW5kZXh9YCk7XG4gICAgaWYgKGFyZWFJZGVudCA9PT0gXCJib2R5XCIgJiYgc2lkZUlkZW50ID09PSBcImNlbnRlclwiKSB7XG4gICAgICBjb25zdCBvZGRFdmVuID0gKGdlbz8uaW5kZXggPz8gMCkgJSAyID09PSAwID8gXCJldmVuXCIgOiBcIm9kZFwiO1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgYGdlLXRhYmxlLXJvdy0ke29kZEV2ZW59YCk7XG4gICAgfVxuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuXG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJsZWZ0XCIsIGAke2dlby5sZWZ0fXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ0b3BcIiwgYCR7Z2VvLnRvcH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgYCR7Z2VvLndpZHRofXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJoZWlnaHRcIiwgYCR7Z2VvLmhlaWdodH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtcm93LWluZGV4XCIsIGAke3Jvd0luZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtYXJlYVwiLCBgJHthcmVhSWRlbnR9YCk7XG5cbiAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZVRleHQodGV4dCk7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQoZGl2LCB0ZXh0RWxlbWVudCk7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS1cblxuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChkaXZTY29wZS5jaGlsZCwgZGl2KTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cblxuICBhZGRDb2x1bW5EaXYoXG4gICAgcGFyZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICBnZW86IEdlb0RhdGEsXG4gICAgcm93SW5kZXg6IG51bWJlciA9IC0xLFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIgPSAtMSxcbiAgICBhcmVhSWRlbnQ6IEFyZWFJZGVudCxcbiAgICBzaWRlSWRlbnQ6IFNpZGVJZGVudCxcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIlwiLFxuICAgIHRyZWVBcnJvdz86IFRyZWVBcnJvd1R5cGUsXG4gICAgdGFibGVPcHRpb25zPzogVGFibGVPcHRpb25zSWYsXG4gICAgY2hlY2tlZFR5cGU6IENoZWNrZWRUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLFxuICAgIHNvcnRTdGF0ZT86IFNvcnRTdGF0ZVxuICApOiBIVE1MRGl2RWxlbWVudCB7XG5cbiAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHRhYmxlT3B0aW9ucz8udHJlZU9wdGlvbnM7XG4gICAgY29uc3QgY2hlY2tib3hXaXRob3V0RXh0cmFDb2x1bW4gPSB0YWJsZU9wdGlvbnM/LnNob3dDaGVja2JveFdpaG91dEV4dHJhQ29sdW1uO1xuXG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIFwiZ2UtdGFibGUtY29sLWRpdlwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBgZ2UtdGFibGUtY29sLWRpdi0ke2dlby5pbmRleH1gKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0QXR0cmlidXRlKGRpdiwgXCJkYXRhLWNvbC1pbmRleFwiLCBgJHtnZW8uaW5kZXh9YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1yb3ctaW5kZXhcIiwgYCR7cm93SW5kZXh9YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1hcmVhXCIsIGAke2FyZWFJZGVudH1gKTtcbiAgICBjb25zdCBvZGRFdmVuID0gKGdlbz8uaW5kZXggPz8gMCkgJSAyID09PSAwID8gXCJldmVuXCIgOiBcIm9kZFwiO1xuICAgIGlmIChhcmVhSWRlbnQgPT09IFwiYm9keVwiICYmIHNpZGVJZGVudCA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgYGdlLXRhYmxlLWNvbHVtbi0ke29kZEV2ZW59YCk7XG4gICAgfVxuXG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiY2xpcFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJsZWZ0XCIsIGAke2dlby5sZWZ0fXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ0b3BcIiwgYCR7Z2VvLnRvcH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgYCR7Z2VvLndpZHRofXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJoZWlnaHRcIiwgYCR7Z2VvLmhlaWdodH1weGApO1xuXG4gICAgaWYgKHRyZWVBcnJvdyAmJiB0cmVlQXJyb3cgIT09IFwibm9uZVwiKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBcImdlLXRhYmxlLWNvbC10cmVlXCIpO1xuICAgICAgdGhpcy5hZGRBcnJvd0RpdihkaXYsIHRyZWVBcnJvdywgdHJlZU9wdGlvbnMsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgYXJlYUlkZW50KTtcbiAgICB9XG4gICAgaWYgKGNoZWNrYm94V2l0aG91dEV4dHJhQ29sdW1uICYmIGNvbHVtbkluZGV4ID09PSAwICYmIGNoZWNrZWRUeXBlKSB7XG4gICAgICB0aGlzLmFkZENoZWNrYm94VG9EaXYoZGl2LCBjaGVja2VkVHlwZSwgYXJlYUlkZW50LCByb3dJbmRleCk7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICBjb25zdCBmaXJzdFRyZWVDb2x1bW4gPSAodHJlZUFycm93ICE9PSBcIm5vbmVcIiAmJiBjb2x1bW5JbmRleCA9PT0gMCk7XG4gICAgICB0aGlzLmFkZExhYmVsRGl2KGRpdiwgdGV4dCwgZmlyc3RUcmVlQ29sdW1uLCByb3dJbmRleCwgY29sdW1uSW5kZXgsIGFyZWFJZGVudCk7XG4gICAgfVxuICAgIGlmIChzb3J0U3RhdGUpIHtcbiAgICAgIHRoaXMuYWRkU29ydGVkSWNvbihkaXYsIHNvcnRTdGF0ZSwgdGFibGVPcHRpb25zPy5zb3J0ZWRPcHRpb25zLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuXG4gIGFkZENoZWNrYm94VG9EaXYoXG4gICAgcGFyZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICBjaGVja2VkVHlwZTogQ2hlY2tlZFR5cGUsXG4gICAgYXJlYUlkZW50OiBBcmVhSWRlbnQsXG4gICAgcm93SW5kZXg6IG51bWJlcik6IEhUTUxEaXZFbGVtZW50IHtcblxuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja2VkID0gKGNoZWNrZWRUeXBlID09PSBcImZ1bGxcIikgPyBcImNoZWNrZWRcIiA6IFwiXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hcmVhPVwiJHthcmVhSWRlbnR9XCJcbiAgICAgICAgICAgICAgICBkYXRhLXJvdy1pbmRleD1cIiR7cm93SW5kZXh9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWlucHV0LXR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgJHtjaGVja2VkfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2UtdGFibGUtcm93LWNoZWNrYm94XCI+IGA7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiaW5saW5lXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgXCJpbmhlcml0XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtcm93LWluZGV4XCIsIGAke3Jvd0luZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG5cbiAgYWRkTGFiZWxEaXYoXG4gICAgcGFyZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIlwiLFxuICAgIGZpcnN0VHJlZUNvbHVtbjogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHJvd0luZGV4OiBudW1iZXIgPSAtMSxcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyID0gLTEsXG4gICAgYXJlYUlkZW50OiBBcmVhSWRlbnQgPSBcImJvZHlcIik6IEhUTUxEaXZFbGVtZW50IHtcblxuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBcImdlLXRhYmxlLWxhYmVsLWRpdlwiKTtcbiAgICAvLyB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCAnZGlzcGxheScsICdpbmxpbmUnKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJoZWlnaHRcIiwgXCIxMDAlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtcm93LWluZGV4XCIsIGAke3Jvd0luZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtY29sLWluZGV4XCIsIGAke2NvbHVtbkluZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtYXJlYVwiLCBgJHthcmVhSWRlbnR9YCk7XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgaWYgKGZpcnN0VHJlZUNvbHVtbikge1xuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVUZXh0KHRleHQpO1xuICAgICAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQoZGl2LCB0ZXh0RWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3JtYWwgY2VsbDpcbiAgICAgICAgY29uc3QgZGl2MiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICAgICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKGRpdiwgZGl2Mik7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZVRleHQodGV4dCk7XG4gICAgICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYyLCBcImdlLXRhYmxlLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQoZGl2MiwgdGV4dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0QXR0cmlidXRlKGRpdjIsIFwiZGF0YS1yb3ctaW5kZXhcIiwgYCR7cm93SW5kZXh9YCk7XG4gICAgICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2MiwgXCJkYXRhLWNvbC1pbmRleFwiLCBgJHtjb2x1bW5JbmRleH1gKTtcbiAgICAgICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYyLCBcImRhdGEtYXJlYVwiLCBgJHthcmVhSWRlbnR9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKHBhcmVudCwgZGl2KTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgYWRkU29ydGVkSWNvbihcbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LFxuICAgIHNvcnRlZDogU29ydFN0YXRlID0gXCJcIixcbiAgICBzb3J0ZWRPcHRpb25zOiBTb3J0ZWRPcHRpb25zSWYgPSBuZXcgU29ydGVkT3B0aW9ucygpLFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIgPSAtMVxuICApOiBIVE1MRGl2RWxlbWVudCB7XG5cbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvbVNlcnZpY2UuY3JlYXRlRWxlbWVudDxIVE1MRGl2RWxlbWVudD4oXCJkaXZcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgXCJnZS10YWJsZS1zb3J0ZWQtaWNvbi1kaXZcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIFwiMFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInJpZ2h0XCIsIFwiMFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcIndpZHRoXCIsIFwiMjBweFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImJhY2tncm91bmRcIiwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1jb2wtaW5kZXhcIiwgYCR7Y29sdW1uSW5kZXh9YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldEF0dHJpYnV0ZShkaXYsIFwiZGF0YS1hcmVhXCIsIFwiaGVhZGVyXCIpO1xuXG4gICAgbGV0IHRyZWVPcHRpb25zQXJyb3c6IEljb25JZjtcbiAgICBpZiAoc29ydGVkID09PSBcImFzY1wiKSB7XG4gICAgICB0cmVlT3B0aW9uc0Fycm93ID0gc29ydGVkT3B0aW9ucy5pY29uQXNjO1xuICAgIH0gZWxzZSBpZiAoc29ydGVkID09PSBcImRlc2NcIikge1xuICAgICAgdHJlZU9wdGlvbnNBcnJvdyA9IHNvcnRlZE9wdGlvbnMuaWNvbkRlc2M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWVPcHRpb25zQXJyb3cgPSBzb3J0ZWRPcHRpb25zLmljb25QbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLy8gVGV4dDpcbiAgICBjb25zdCBjb250ZW50ID0gdHJlZU9wdGlvbnNBcnJvdy5jb250ZW50O1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZVRleHQoY29udGVudCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKGRpdiwgdGV4dEVsZW1lbnQpO1xuXG4gICAgLy8gU3R5bGU6XG4gICAgaWYgKHRyZWVPcHRpb25zQXJyb3cuc3R5bGUpIHtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZVN0cmluZyhkaXYsIHRyZWVPcHRpb25zQXJyb3cuc3R5bGUpO1xuICAgIH1cblxuICAgIC8vIENsYXNzZXM6XG4gICAgZm9yIChjb25zdCBjbGF6eiBvZiB0cmVlT3B0aW9uc0Fycm93LmNsYXNzZXMpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIGNsYXp6KTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuXG4gIGFkZEFycm93RGl2KFxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgYXJyb3c6IFRyZWVBcnJvd1R5cGUgPSBcIm5vbmVcIixcbiAgICB0cmVlT3B0aW9uczogVHJlZU9wdGlvbnNJZiA9IG5ldyBUcmVlT3B0aW9ucygpLFxuICAgIHJvd0luZGV4OiBudW1iZXIgPSAtMSxcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyID0gLTEsXG4gICAgYXJlYUlkZW50OiBBcmVhSWRlbnQgPSBcImJvZHlcIlxuICApOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIFwiZ2UtdGFibGUtdHJlZS1hcnJvdy1kaXZcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwicG9zaXRpb25cIiwgXCJcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ3aWR0aFwiLCBcIjIwcHhcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtcm93LWluZGV4XCIsIGAke3Jvd0luZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtY29sLWluZGV4XCIsIGAke2NvbHVtbkluZGV4fWApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRBdHRyaWJ1dGUoZGl2LCBcImRhdGEtYXJlYVwiLCBgJHthcmVhSWRlbnR9YCk7XG5cbiAgICBsZXQgdHJlZU9wdGlvbnNBcnJvdzogSWNvbklmO1xuICAgIGlmIChhcnJvdyA9PT0gXCJleHBhbmRlZFwiKSB7XG4gICAgICB0cmVlT3B0aW9uc0Fycm93ID0gdHJlZU9wdGlvbnMuYXJyb3dFeHBhbmRlZDtcbiAgICB9IGVsc2UgaWYgKGFycm93ID09PSBcImNvbGxhcHNlZFwiKSB7XG4gICAgICB0cmVlT3B0aW9uc0Fycm93ID0gdHJlZU9wdGlvbnMuYXJyb3dDb2xsYXBzZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWVPcHRpb25zQXJyb3cgPSB0cmVlT3B0aW9ucy5hcnJvd1BsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvLyBUZXh0OlxuICAgIGNvbnN0IGNvbnRlbnQgPSB0cmVlT3B0aW9uc0Fycm93LmNvbnRlbnQ7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSB0aGlzLmRvbVNlcnZpY2UuY3JlYXRlVGV4dChjb250ZW50KTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQoZGl2LCB0ZXh0RWxlbWVudCk7XG5cbiAgICAvLyBTdHlsZTpcbiAgICBpZiAodHJlZU9wdGlvbnNBcnJvdy5zdHlsZSkge1xuICAgICAgdGhpcy5hcHBseVN0eWxlU3RyaW5nKGRpdiwgdHJlZU9wdGlvbnNBcnJvdy5zdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3NlczpcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIHRyZWVPcHRpb25zQXJyb3cuY2xhc3Nlcykge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgY2xhenopO1xuICAgIH1cblxuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGFkZENvbHVtbkJvcmRlckRpdnMoXG4gICAgdGFibGVPcHRpb25zOiBUYWJsZU9wdGlvbnNJZixcbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LFxuICAgIGdlbzogR2VvRGF0YSxcbiAgICBhcmVhSWRlbnQ6IEFyZWFJZGVudCxcbiAgICBzaWRlSWRlbnQ6IFNpZGVJZGVudFxuICApOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgaWYgKHRhYmxlT3B0aW9ucy52ZXJ0aWNhbEJvcmRlclZpc2libGUpIHtcbiAgICAgIGNvbnN0IGNsYXp6ID0gYGdlLXRhYmxlLSR7YXJlYUlkZW50fS0ke3NpZGVJZGVudH0tdmVydGljYWwtYm9yZGVyYDtcbiAgICAgIHRoaXMuYWRkVmVydGljYWxCb3JkZXIoZ2VvLCBwYXJlbnQsIGNsYXp6KTtcbiAgICB9XG4gICAgaWYgKHRhYmxlT3B0aW9ucy5ob3Jpem9udGFsQm9yZGVyVmlzaWJsZSkge1xuICAgICAgY29uc3QgY2xhenogPSBgZ2UtdGFibGUtJHthcmVhSWRlbnR9LSR7c2lkZUlkZW50fS1ob3Jpem9udGFsLWJvcmRlcmA7XG4gICAgICB0aGlzLmFkZEhvcml6b250YWxCb3JkZXIoZ2VvLCBwYXJlbnQsIGNsYXp6KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG5cblxuICBhZGRIb3Jpem9udGFsQm9yZGVyKFxuICAgIGdlbzogR2VvRGF0YSxcbiAgICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LFxuICAgIGNsYXp6OiBzdHJpbmcgPSBcImdlLXRhYmxlLWJvZHktY2VudGVyLWhvcml6b250YWwtYm9yZGVyXCIpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgLy8gQm9yZGVyIHNvdXRoOlxuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBjbGF6eik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiY2xpcFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJsZWZ0XCIsIGAke2dlby5sZWZ0fXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ0b3BcIiwgYCR7KGdlby50b3ApfXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ3aWR0aFwiLCBgJHtnZW8ud2lkdGh9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImhlaWdodFwiLCBgMXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZENoaWxkKHBhcmVudCwgZGl2KTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgYWRkRm9jdXNCb3JkZXJEaXZzKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGdlbzogR2VvRGF0YSwgc3R5bGU6IEh0bWxTdHlsZSk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAvLyBCb3JkZXIgd2VzdDpcbiAgICBsZXQgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIFwiZ2UtdGFibGUtZm9jdXMtYm9yZGVyXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtnZW8ubGVmdH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAke2dlby50b3B9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcIndpZHRoXCIsIGAxcHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImhlaWdodFwiLCBgJHtnZW8uaGVpZ2h0fXB4YCk7XG4gICAgdGhpcy5hcHBseVN0eWxlKGRpdiwgc3R5bGUpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG5cbiAgICAvLyBCb3JkZXIgZWFzdDpcbiAgICBkaXYgPSB0aGlzLmRvbVNlcnZpY2UuY3JlYXRlRWxlbWVudDxIVE1MRGl2RWxlbWVudD4oXCJkaXZcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLmFkZENsYXNzKGRpdiwgXCJnZS10YWJsZS1mb2N1cy1ib3JkZXJcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiY2xpcFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJsZWZ0XCIsIGAke2dlby5sZWZ0ICsgZ2VvLndpZHRoIC0gMX1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAke2dlby50b3B9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcIndpZHRoXCIsIGAxcHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImhlaWdodFwiLCBgJHtnZW8uaGVpZ2h0fXB4YCk7XG4gICAgdGhpcy5hcHBseVN0eWxlKGRpdiwgc3R5bGUpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG5cbiAgICAvLyBCb3JkZXIgbm9ydGg6XG4gICAgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIFwiZ2UtdGFibGUtZm9jdXMtYm9yZGVyXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtnZW8ubGVmdH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAkeyhnZW8udG9wKX1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgYCR7Z2VvLndpZHRofXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJoZWlnaHRcIiwgYDFweGApO1xuICAgIHRoaXMuYXBwbHlTdHlsZShkaXYsIHN0eWxlKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuXG5cbiAgICAvLyBCb3JkZXIgc291dGg6XG4gICAgZGl2ID0gdGhpcy5kb21TZXJ2aWNlLmNyZWF0ZUVsZW1lbnQ8SFRNTERpdkVsZW1lbnQ+KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hZGRDbGFzcyhkaXYsIFwiZ2UtdGFibGUtZm9jdXMtYm9yZGVyXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtnZW8ubGVmdH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAkeyhnZW8udG9wICsgZ2VvLmhlaWdodCAtIDEpfXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ3aWR0aFwiLCBgJHtnZW8ud2lkdGh9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcImhlaWdodFwiLCBgMXB4YCk7XG4gICAgdGhpcy5hcHBseVN0eWxlKGRpdiwgc3R5bGUpO1xuICAgIHRoaXMuZG9tU2VydmljZS5hcHBlbmRDaGlsZChwYXJlbnQsIGRpdik7XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG5cbiAgYWRkVmVydGljYWxCb3JkZXIoXG4gICAgZ2VvOiBHZW9EYXRhLFxuICAgIHBhcmVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgY2xheno6IHN0cmluZyA9IFwiZ2UtdGFibGUtYm9keS1jZW50ZXItdmVydGljYWwtYm9yZGVyXCJcbiAgKTogSFRNTERpdkVsZW1lbnQge1xuICAgIC8vIEJvcmRlciBlYXN0OlxuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBjbGF6eik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJkaXNwbGF5XCIsIFwiY2xpcFwiKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJsZWZ0XCIsIGAke2dlby5sZWZ0fXB4YCk7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJ0b3BcIiwgYCR7Z2VvLnRvcH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwid2lkdGhcIiwgYDFweGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiaGVpZ2h0XCIsIGAke2dlby5oZWlnaHR9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBhZGREaXYocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgZ2VvOiBHZW9EYXRhLCBjbGF6ejogc3RyaW5nID0gXCJcIik6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvbVNlcnZpY2UuY3JlYXRlRWxlbWVudDxIVE1MRGl2RWxlbWVudD4oXCJkaXZcIik7XG4gICAgaWYgKGNsYXp6KSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuYWRkQ2xhc3MoZGl2LCBjbGF6eik7XG4gICAgfVxuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiZGlzcGxheVwiLCBcImNsaXBcIik7XG4gICAgdGhpcy5kb21TZXJ2aWNlLnNldFN0eWxlKGRpdiwgXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwibGVmdFwiLCBgJHtnZW8ubGVmdH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwidG9wXCIsIGAke2dlby50b3B9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBcIndpZHRoXCIsIGAke2dlby53aWR0aH1weGApO1xuICAgIHRoaXMuZG9tU2VydmljZS5zZXRTdHlsZShkaXYsIFwiaGVpZ2h0XCIsIGAke2dlby5oZWlnaHR9cHhgKTtcbiAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ2hpbGQocGFyZW50LCBkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBhcHBseVN0eWxlU3RyaW5nKGRpdjogSFRNTERpdkVsZW1lbnQsIHN0eWxlOiBzdHJpbmcpIHtcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSgtMTAwJSwgMCk7IHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wOyBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbnN0IGNtZHMgPSBzdHlsZS5zcGxpdChcIjtcIikubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihzID0+IHMpO1xuICAgIGZvciAoY29uc3QgY21kIG9mIGNtZHMpIHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGNtZC5zcGxpdChcIjpcIik7XG4gICAgICB0aGlzLmRvbVNlcnZpY2Uuc2V0U3R5bGUoZGl2LCBrZXkudHJpbSgpLCB2YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGl2T3JDcmVhdGVEaXYoY2FjaGVLZXk6IG51bWJlciwgZGl2U2NvcGU6IERpdlNjb3BlKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGxldCBkaXYgPSBkaXZTY29wZS5jYWNoZVtjYWNoZUtleV07XG4gICAgaWYgKGRpdikge1xuICAgICAgZGl2LmlubmVyVGV4dCA9IFwiXCI7IC8vIGVyc3QgbWFsIGxlZXIgbWFjaGVuLCBzcMOkdGVyIGNvbC1jYWNoZSBudXR6ZW5cbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGRpdiA9IHRoaXMuZG9tU2VydmljZS5jcmVhdGVFbGVtZW50PEhUTUxEaXZFbGVtZW50PihcImRpdlwiKTtcbiAgICBkaXZTY29wZS5jYWNoZVtjYWNoZUtleV0gPSBkaXY7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxufVxuIl19