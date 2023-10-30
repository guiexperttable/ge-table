import { DomServiceIf } from "./dom-service.if";
import { DivScope } from "./../data/div-scope.type";
import { GeoData } from "./../data/geo-data";
import { TreeArrowType } from "../data/common/tree-arrow.type";
import { TreeOptionsIf } from "../data/options/tree-options.if";
import { TreeOptions } from "../data/options/tree-options";
import { AreaIdent } from "../data/tablemodel/area-ident.type";
import { IconIf } from "../data/options/icon.if";
import { TableOptionsIf } from "../data/options/table-options.if";
import { CheckedType } from "../data/common/checked-type";
import { SideIdent } from "../data/side-ident.type";
import { SortState } from "../data/common/sort-state.type";
import { SortedOptions } from "../data/options/sorted-options";
import { SortedOptionsIf } from "../data/options/sorted-options.if";
import { HtmlStyle } from "./data/html-style.type";


export class ConvenienceDomService {

  constructor(
    public readonly domService: DomServiceIf
  ) {
  }


  setStyle(el: any, style: string, value: any): any {
    this.domService.setStyle(el, style, value);
    return el;
  };


  applyStyle(ele: HTMLDivElement, style: HtmlStyle): HTMLDivElement {
    for (const key in style) {
      this.domService.setStyle(ele, key, style[key]);
    }
    return ele;
  }

  applyDisplayNoneStyle(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "display", "none");
    return ele;
  }

  applyDisplayBlockStyle(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "display", "block");
    return ele;
  }

  applyStyleInPx(ele: HTMLDivElement, geoData: GeoData): HTMLDivElement {
    Object.entries(geoData)
      .forEach(([key, value]) => this.domService.setStyle(ele, key, value + "px"));
    return ele;
  }

  applyStylePosistionRelative(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "position", "relative");
    this.domService.setStyle(ele, "overflow", "clip");
    return ele;
  }

  applyStylePosistionAbsolute(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "position", "absolute");
    return ele;
  }

  applyStyleFullSize(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "width", "100%");
    this.domService.setStyle(ele, "height", "100%");
    return ele;
  }

  applyStyleOverflowAuto(
    overflowX: "scroll" | "auto" = "auto",
    overflowY: "scroll" | "auto" = "auto",
    ele: HTMLDivElement
  ): HTMLDivElement {
    this.domService.setStyle(ele, "overflow-x", overflowX);
    this.domService.setStyle(ele, "overflow-y", overflowY);
    return ele;
  }

  applyStyleNoPadding(ele: HTMLDivElement): HTMLDivElement {
    this.domService.setStyle(ele, "padding", "0");
    this.domService.setStyle(ele, "margin", "0");
    this.domService.setStyle(ele, "border", "0");
    return ele;
  }

  appendRelativeChildDiv(parent: HTMLDivElement): DivScope {
    const child =
      this.applyStylePosistionRelative(
        this.applyStyleFullSize(
          this.applyStyleNoPadding(
            this.domService.createElement<HTMLDivElement>("div")
          )
        )
      );
    this.domService.appendChild(parent, child);
    this.applyStylePosistionAbsolute(parent);
    const cache = {};
    return { parent, child, cache };
  }

  appendText(parent: HTMLDivElement, text: string): HTMLElement {
    const div = this.domService.createText(text);
    this.domService.appendChild(parent, div);
    return div;
  }


  addClass(clazz: string, div: HTMLDivElement) {
    if (clazz.includes(" ")) {
      clazz.split(" ").forEach(c => this.domService.addClass(div, c));
    } else {
      this.domService.addClass(div, clazz);
    }
    return div;
  }

  addClasses(classes: string[] | undefined, div: HTMLDivElement) {
    if (classes) {
      for (const c of classes) {
        this.domService.addClass(div, c);
      }
    }
    return div;
  }

  setAttribute(div: HTMLDivElement, key: string, value: string) {
    if (key && value) {
      this.domService.setAttribute(div, key, value);
    }
    return div;
  }


  createAreaDivWithClass(clazz: string, parent: HTMLDivElement, areaIdent: AreaIdent, sideIdent: SideIdent): HTMLDivElement {
    const div = this.domService.createElement<HTMLDivElement>("div");
    this.addClass(clazz, div);
    this.domService.setAttribute(div, "data-area", areaIdent);
    this.domService.setAttribute(div, "data-side", sideIdent);
    this.domService.appendChild(parent, div);
    return div;
  }

  createDivWithClass(clazz: string, parent: HTMLDivElement): HTMLDivElement {
    const div = this.domService.createElement<HTMLDivElement>("div");
    this.addClass(clazz, div);
    this.domService.appendChild(parent, div);
    return div;
  }


  addRowDiv(
    divScope: DivScope,
    geo: GeoData,
    rowIndex: number = -1,
    areaIdent: AreaIdent,
    sideIdent: SideIdent,
    text: string = ""
  ): HTMLDivElement {

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


  addColumnDiv(
    parent: HTMLDivElement,
    geo: GeoData,
    rowIndex: number = -1,
    columnIndex: number = -1,
    areaIdent: AreaIdent,
    sideIdent: SideIdent,
    text: string = "",
    treeArrow?: TreeArrowType,
    tableOptions?: TableOptionsIf,
    checkedType: CheckedType | undefined = undefined,
    sortState?: SortState
  ): HTMLDivElement {

    const treeOptions = tableOptions?.treeOptions;
    const checkboxWithoutExtraColumn = tableOptions?.showCheckboxWihoutExtraColumn;

    const div = this.domService.createElement<HTMLDivElement>("div");
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


  addCheckboxToDiv(
    parent: HTMLDivElement,
    checkedType: CheckedType,
    areaIdent: AreaIdent,
    rowIndex: number): HTMLDivElement {

    const div = this.domService.createElement<HTMLDivElement>("div");
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


  addLabelDiv(
    parent: HTMLDivElement,
    text: string = "",
    firstTreeColumn: boolean = false,
    rowIndex: number = -1,
    columnIndex: number = -1,
    areaIdent: AreaIdent = "body"): HTMLDivElement {

    const div = this.domService.createElement<HTMLDivElement>("div");
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
      } else {
        // normal cell:
        const div2 = this.domService.createElement<HTMLDivElement>("div");
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

  addSortedIcon(
    parent: HTMLDivElement,
    sorted: SortState = "",
    sortedOptions: SortedOptionsIf = new SortedOptions(),
    columnIndex: number = -1
  ): HTMLDivElement {

    const div = this.domService.createElement<HTMLDivElement>("div");
    this.domService.addClass(div, "ge-table-sorted-icon-div");
    this.domService.setStyle(div, "position", "absolute");
    this.domService.setStyle(div, "top", "0");
    this.domService.setStyle(div, "right", "0");
    this.domService.setStyle(div, "width", "20px");
    this.domService.setStyle(div, "background", "transparent");
    this.domService.setStyle(div, "cursor", "pointer");
    this.domService.setAttribute(div, "data-col-index", `${columnIndex}`);
    this.domService.setAttribute(div, "data-area", "header");

    let treeOptionsArrow: IconIf;
    if (sorted === "asc") {
      treeOptionsArrow = sortedOptions.iconAsc;
    } else if (sorted === "desc") {
      treeOptionsArrow = sortedOptions.iconDesc;
    } else {
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


  addArrowDiv(
    parent: HTMLDivElement,
    arrow: TreeArrowType = "none",
    treeOptions: TreeOptionsIf = new TreeOptions(),
    rowIndex: number = -1,
    columnIndex: number = -1,
    areaIdent: AreaIdent = "body"
  ): HTMLDivElement {
    const div = this.domService.createElement<HTMLDivElement>("div");
    this.domService.addClass(div, "ge-table-tree-arrow-div");
    this.domService.setStyle(div, "display", "inline-block");
    this.domService.setStyle(div, "position", "");
    this.domService.setStyle(div, "width", "20px");
    this.domService.setStyle(div, "background", "transparent");
    this.domService.setStyle(div, "cursor", "pointer");
    this.domService.setAttribute(div, "data-row-index", `${rowIndex}`);
    this.domService.setAttribute(div, "data-col-index", `${columnIndex}`);
    this.domService.setAttribute(div, "data-area", `${areaIdent}`);

    let treeOptionsArrow: IconIf;
    if (arrow === "expanded") {
      treeOptionsArrow = treeOptions.arrowExpanded;
    } else if (arrow === "collapsed") {
      treeOptionsArrow = treeOptions.arrowCollapsed;
    } else {
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

  addColumnBorderDivs(
    tableOptions: TableOptionsIf,
    parent: HTMLDivElement,
    geo: GeoData,
    areaIdent: AreaIdent,
    sideIdent: SideIdent
  ): HTMLDivElement {
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


  addHorizontalBorder(
    geo: GeoData,
    parent: HTMLDivElement,
    clazz: string = "ge-table-body-center-horizontal-border"): HTMLDivElement {
    // Border south:
    const div = this.domService.createElement<HTMLDivElement>("div");
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

  addFocusBorderDivs(parent: HTMLDivElement, geo: GeoData, style: HtmlStyle): HTMLDivElement {
    // Border west:
    let div = this.domService.createElement<HTMLDivElement>("div");
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
    div = this.domService.createElement<HTMLDivElement>("div");
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
    div = this.domService.createElement<HTMLDivElement>("div");
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
    div = this.domService.createElement<HTMLDivElement>("div");
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

  addVerticalBorder(
    geo: GeoData,
    parent: HTMLDivElement,
    clazz: string = "ge-table-body-center-vertical-border"
  ): HTMLDivElement {
    // Border east:
    const div = this.domService.createElement<HTMLDivElement>("div");
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

  addDiv(parent: HTMLDivElement, geo: GeoData, clazz: string = ""): HTMLDivElement {
    const div = this.domService.createElement<HTMLDivElement>("div");
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

  applyStyleString(div: HTMLDivElement, style: string) {
    // transform: rotate(-90deg) translate(-100%, 0); transform-origin: left top; font-size: 1.5em;
    const cmds = style.split(";").map(s => s.trim()).filter(s => s);
    for (const cmd of cmds) {
      const [key, value] = cmd.split(":");
      this.domService.setStyle(div, key.trim(), value.trim());
    }
  }

  private getDivOrCreateDiv(cacheKey: number, divScope: DivScope): HTMLDivElement {
    let div = divScope.cache[cacheKey];
    if (div) {
      div.innerText = ""; // erst mal leer machen, später col-cache nutzen
      return div;
    }
    div = this.domService.createElement<HTMLDivElement>("div");
    divScope.cache[cacheKey] = div;
    return div;
  }
}
