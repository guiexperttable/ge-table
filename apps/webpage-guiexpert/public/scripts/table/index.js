function et(c = 500) {
  return function(e, t, o) {
    let i = 0;
    const s = o.value;
    return o.value = function(...r) {
      if (!(Date.now() - i < c))
        return i = Date.now(), s.apply(this, r);
    }, o;
  };
}
class L {
  // The constructor is private to prevent direct construction calls
  // with the `new` operator
  constructor() {
    this.alreadySet = !1;
  }
  static getInstance() {
    return L.instance || (L.instance = new L()), L.instance;
  }
  /**
   * Method to set the license key for the application.
   * A 'meta' element is created with content as 'guiexperttable=<license key>'
   * and appended into the head section of the document
   *
   * @param {string} key - The license key to set for the application.
   *
   * @return {void} - This method does not return anything
   */
  setLicenseKey(e) {
    if (e && !this.alreadySet) {
      const t = document.createElement("meta");
      t.content = "license=" + e, t.name = "guiexperttable", document.getElementsByTagName("head")[0].appendChild(t), this.alreadySet = !0;
    }
  }
}
function H(c) {
  return c && c.type === "TreeRow";
}
function K(c) {
  return c && c.type === "AreaModelTree";
}
function ye(c) {
  return c && c.type === "CheckboxColumnDef";
}
class Q {
  constructor(e = -1, t = -1, o = -1, i = -1, s, r, l, n = 0, d = 0, a = 0, h = "") {
    this.rowIndex = e, this.rowTop = t, this.columnIndex = o, this.columnLeft = i, this.areaIdent = s, this.sideIdent = r, this.originalEvent = l, this.clickCount = n, this.draggingX = d, this.draggingY = a, this.action = h;
  }
  clone() {
    return new Q(
      this.rowIndex,
      this.rowTop,
      this.columnIndex,
      this.columnLeft,
      this.areaIdent,
      this.sideIdent,
      this.originalEvent,
      this.clickCount,
      this.draggingX,
      this.draggingY,
      this.action
    );
  }
}
class $ {
  constructor(e = ">", t = "", o = []) {
    this.content = e, this.style = t, this.classes = o;
  }
}
class fe {
  constructor(e = new $(
    ">",
    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
    ["gt-table-tree-arrow-expanded"]
  ), t = new $(
    ">",
    "",
    ["ge-table-tree-arrow-collapsed"]
  ), o = new $(
    ">",
    "color:transparent;",
    ["gt-table-tree-arrow-hidden"]
  ), i = new $(
    "↕",
    "",
    ["gt-table-tree-arrow-expanded-all"]
  )) {
    this.arrowExpanded = e, this.arrowCollapsed = t, this.arrowPlaceholder = o, this.arrowExpandCollapseAll = i;
  }
}
class me {
  constructor(e = new $("↑", "", ["ge-header-sorted-asc"]), t = new $("↓", "", ["ge-header-sorted-desc"]), o = new $("↑", "color:transparent;", [])) {
    this.iconAsc = e, this.iconDesc = t, this.iconPlaceholder = o;
  }
}
class ve {
  constructor(e) {
    this.domService = e;
  }
  setStyle(e, t, o) {
    return this.domService.setStyle(e, t, o), e;
  }
  applyStyle(e, t) {
    for (const o in t)
      this.domService.setStyle(e, o, t[o]);
    return e;
  }
  applyDisplayNoneStyle(e) {
    return this.domService.setStyle(e, "display", "none"), e;
  }
  applyDisplayBlockStyle(e) {
    return this.domService.setStyle(e, "display", "block"), e;
  }
  applyStyleInPx(e, t) {
    return Object.entries(t).forEach(([o, i]) => this.domService.setStyle(e, o, i + "px")), e;
  }
  applyStylePosistionRelative(e) {
    return this.domService.setStyle(e, "position", "relative"), this.domService.setStyle(e, "overflow", "clip"), e;
  }
  applyStylePosistionAbsolute(e) {
    return this.domService.setStyle(e, "position", "absolute"), e;
  }
  applyStyleFullSize(e) {
    return this.domService.setStyle(e, "width", "100%"), this.domService.setStyle(e, "height", "100%"), e;
  }
  applyStyleOverflowAuto(e = "auto", t = "auto", o) {
    return this.domService.setStyle(o, "overflow-x", e), this.domService.setStyle(o, "overflow-y", t), o;
  }
  applyStyleNoPadding(e) {
    return this.domService.setStyle(e, "padding", "0"), this.domService.setStyle(e, "margin", "0"), this.domService.setStyle(e, "border", "0"), e;
  }
  appendRelativeChildDiv(e) {
    const t = this.applyStylePosistionRelative(
      this.applyStyleFullSize(
        this.applyStyleNoPadding(
          this.domService.createElement("div")
        )
      )
    );
    return this.domService.appendChild(e, t), this.applyStylePosistionAbsolute(e), { parent: e, child: t, cache: {} };
  }
  appendText(e, t) {
    const o = this.domService.createText(t);
    return this.domService.appendChild(e, o), o;
  }
  addClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((o) => this.domService.addClass(t, o)) : this.domService.addClass(t, e), t;
  }
  removeClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((o) => this.domService.removeClass(t, o)) : this.domService.removeClass(t, e), t;
  }
  addClasses(e, t) {
    if (e)
      for (const o of e)
        this.domService.addClass(t, o);
    return t;
  }
  setAttribute(e, t, o) {
    return t && o && this.domService.setAttribute(e, t, o), e;
  }
  createAreaDivWithClass(e, t, o, i) {
    const s = this.domService.createElement("div");
    return this.addClass(e, s), this.domService.setAttribute(s, "data-area", o), this.domService.setAttribute(s, "data-side", i), this.domService.appendChild(t, s), s;
  }
  createDivWithClass(e, t) {
    const o = this.domService.createElement("div");
    return this.addClass(e, o), this.domService.appendChild(t, o), o;
  }
  addRowDiv(e, t, o = -1, i, s, r = "") {
    const l = t.index ?? -1, n = this.getDivOrCreateDiv(l, e);
    if (this.domService.addClass(n, "ge-table-row-div"), this.domService.addClass(n, `ge-table-row-div-${t.index}`), i === "body" && s === "center") {
      const d = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
      this.domService.addClass(n, `ge-table-row-${d}`);
    }
    if (this.domService.setStyle(n, "display", "clip"), this.domService.setStyle(n, "position", "absolute"), this.domService.setStyle(n, "left", `${t.left}px`), this.domService.setStyle(n, "top", `${t.top}px`), this.domService.setStyle(n, "width", `${t.width}px`), this.domService.setStyle(n, "height", `${t.height}px`), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-area", `${i}`), r) {
      const d = this.domService.createText(r);
      this.domService.appendChild(n, d);
    }
    return this.domService.appendChild(e.child, n), n;
  }
  addColumnDiv(e) {
    const { parent: t, geo: o, rowIndex: i = -1, columnIndex: s = -1, areaIdent: r, sideIdent: l, text: n = "", treeArrow: d, tableOptions: a, checkedType: h = void 0, sortState: u } = e, m = a == null ? void 0 : a.treeOptions, b = a == null ? void 0 : a.showCheckboxWihoutExtraColumn, f = this.domService.createElement("div");
    this.domService.addClass(f, "ge-table-col-div"), b && this.domService.addClass(f, "ge-with-checkbox"), this.domService.addClass(f, `ge-table-col-div-${o.index}`), this.domService.setAttribute(f, "data-col-index", `${o.index}`), this.domService.setAttribute(f, "data-row-index", `${i}`), this.domService.setAttribute(f, "data-area", `${r}`);
    const g = ((o == null ? void 0 : o.index) ?? 0) % 2 === 0 ? "even" : "odd";
    if (r === "body" && l === "center" && this.domService.addClass(f, `ge-table-column-${g}`), this.domService.setStyle(f, "display", "clip"), this.domService.setStyle(f, "position", "absolute"), this.domService.setStyle(f, "left", `${o.left}px`), this.domService.setStyle(f, "top", `${o.top}px`), this.domService.setStyle(f, "width", `${o.width}px`), this.domService.setStyle(f, "height", `${o.height}px`), d && d !== "none" && (this.domService.addClass(f, "ge-table-col-tree"), this.addArrowDiv(f, d, m, i, s, r)), b && s === 0 && h && this.addCheckboxToDiv(f, h, r, i), n) {
      const p = d !== "none" && s === 0;
      this.addLabelDiv(f, n, p, i, s, r);
    }
    return u && this.addSortedIcon(f, u, a == null ? void 0 : a.sortedOptions, s), this.domService.appendChild(t, f), f;
  }
  addCheckboxToDiv(e, t, o, i) {
    const s = this.domService.createElement("div"), r = t === "full" ? "checked" : "";
    return s.innerHTML = `
            <input
                type="checkbox"
                data-area="${o}"
                data-row-index="${i}"
                data-input-type="checkbox"
                ${r}
                class="ge-table-row-checkbox"> `, this.domService.setStyle(s, "display", "inline"), this.domService.setStyle(s, "width", "inherit"), this.domService.setAttribute(s, "data-row-index", `${i}`), this.domService.appendChild(e, s), s;
  }
  addLabelDiv(e, t = "", o = !1, i = -1, s = -1, r = "body") {
    const l = this.domService.createElement("div");
    if (this.domService.addClass(l, "ge-table-label-div"), this.domService.setStyle(l, "position", "relative"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "width", "100%"), this.domService.setStyle(l, "height", "100%"), this.domService.setAttribute(l, "data-row-index", `${i}`), this.domService.setAttribute(l, "data-col-index", `${s}`), this.domService.setAttribute(l, "data-area", `${r}`), t)
      if (o) {
        const n = this.domService.createText(t);
        this.domService.appendChild(l, n);
      } else {
        const n = this.domService.createElement("div");
        this.domService.appendChild(l, n);
        const d = this.domService.createText(t);
        this.domService.addClass(n, "ge-table-label"), this.domService.appendChild(n, d), this.domService.setAttribute(n, "data-row-index", `${i}`), this.domService.setAttribute(n, "data-col-index", `${s}`), this.domService.setAttribute(n, "data-area", `${r}`);
      }
    return this.domService.appendChild(e, l), l;
  }
  addSortedIcon(e, t = "", o = new me(), i = -1) {
    const s = this.domService.createElement("div");
    this.domService.addClass(s, "ge-table-sorted-icon-div"), this.domService.setStyle(s, "position", "absolute"), this.domService.setStyle(s, "top", "0"), this.domService.setStyle(s, "right", "0"), this.domService.setStyle(s, "width", "20px"), this.domService.setStyle(s, "background", "transparent"), this.domService.setStyle(s, "cursor", "pointer"), this.domService.setAttribute(s, "data-col-index", `${i}`), this.domService.setAttribute(s, "data-area", "header");
    let r;
    t === "asc" ? r = o.iconAsc : t === "desc" ? r = o.iconDesc : r = o.iconPlaceholder;
    const l = r.content, n = this.domService.createText(l);
    this.domService.appendChild(s, n), r.style && this.applyStyleString(s, r.style);
    for (const d of r.classes)
      this.domService.addClass(s, d);
    return this.domService.appendChild(e, s), s;
  }
  addArrowDiv(e, t = "none", o = new fe(), i = -1, s = -1, r = "body") {
    const l = this.domService.createElement("div");
    this.domService.addClass(l, "ge-table-tree-arrow-div"), this.domService.setStyle(l, "display", "inline-block"), this.domService.setStyle(l, "position", ""), this.domService.setStyle(l, "width", "20px"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "cursor", "pointer"), this.domService.setAttribute(l, "data-row-index", `${i}`), this.domService.setAttribute(l, "data-col-index", `${s}`), this.domService.setAttribute(l, "data-area", `${r}`);
    let n;
    t === "expanded" ? n = o.arrowExpanded : t === "collapsed" ? n = o.arrowCollapsed : n = o.arrowPlaceholder;
    const d = n.content, a = this.domService.createText(d);
    this.domService.appendChild(l, a), n.style && this.applyStyleString(l, n.style);
    for (const h of n.classes)
      this.domService.addClass(l, h);
    return this.domService.appendChild(e, l), l;
  }
  addColumnBorderDivs(e, t, o, i, s) {
    if (e.verticalBorderVisible) {
      const r = `ge-table-${i}-${s}-vertical-border`;
      this.addVerticalBorder(o, t, r);
    }
    if (e.horizontalBorderVisible) {
      const r = `ge-table-${i}-${s}-horizontal-border`;
      this.addHorizontalBorder(o, t, r);
    }
    return t;
  }
  addHorizontalBorder(e, t, o = "ge-table-body-center-horizontal-border") {
    const i = this.domService.createElement("div");
    return this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${e.left}px`), this.domService.setStyle(i, "top", `${e.top}px`), this.domService.setStyle(i, "width", `${e.width}px`), this.domService.setStyle(i, "height", "1px"), this.domService.appendChild(t, i), i;
  }
  addFocusBorderDivs(e, t, o) {
    t = { ...t, width: t.width + 1, height: t.height + 1 };
    let i = this.domService.createElement("div");
    return this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${t.height}px`), this.domService.setStyle(i, "z-index", "9999"), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left + t.width - 1}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${t.height}px`), this.domService.setStyle(i, "z-index", "9999"), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", "1px"), this.domService.setStyle(i, "z-index", "9999"), this.applyStyle(i, o), this.domService.appendChild(e, i), i = this.domService.createElement("div"), this.domService.addClass(i, "ge-table-focus-border"), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top + t.height - 1}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", "1px"), this.domService.setStyle(i, "z-index", "9999"), this.applyStyle(i, o), this.domService.appendChild(e, i), e;
  }
  addVerticalBorder(e, t, o = "ge-table-body-center-vertical-border") {
    const i = this.domService.createElement("div");
    return this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${e.left}px`), this.domService.setStyle(i, "top", `${e.top}px`), this.domService.setStyle(i, "width", "1px"), this.domService.setStyle(i, "height", `${e.height}px`), this.domService.appendChild(t, i), i;
  }
  addDiv(e, t, o = "") {
    const i = this.domService.createElement("div");
    return o && this.domService.addClass(i, o), this.domService.setStyle(i, "display", "clip"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "left", `${t.left}px`), this.domService.setStyle(i, "top", `${t.top}px`), this.domService.setStyle(i, "width", `${t.width}px`), this.domService.setStyle(i, "height", `${t.height}px`), this.domService.appendChild(e, i), i;
  }
  applyStyleString(e, t) {
    const o = t.split(";").map((i) => i.trim()).filter((i) => i);
    for (const i of o) {
      const [s, r] = i.split(":");
      this.domService.setStyle(e, s.trim(), r.trim());
    }
  }
  getDivOrCreateDiv(e, t) {
    let o = t.cache[e];
    return o ? (o.innerText = "", o) : (o = this.domService.createElement("div"), t.cache[e] = o, o);
  }
}
const Z = (c) => c === "header" ? "header" : c === "footer" ? "footer" : "body";
class Re {
  constructor(e, t) {
    if (this.rowIdx = -1, this.colIdx = -1, this.action = null, this.inputType = null, this.className = "", e !== null && (e instanceof HTMLDivElement || e instanceof HTMLSpanElement || e instanceof HTMLInputElement)) {
      this.className = e.className, this.action = e.getAttribute("data-ge-action"), this.inputType = e.getAttribute("data-input-type"), this.rowIdx = Number(e.getAttribute("data-row-index")), this.colIdx = Number(e.getAttribute("data-col-index"));
      const o = e.getAttribute("data-area");
      if (o && (this.areaIdent = Z(o), this.areaModel = t.tableModel.getAreaModel(this.areaIdent), this.row = this.areaModel.getRowByIndex(this.rowIdx)), e instanceof HTMLInputElement) {
        const i = e;
        this.value = i.value;
      }
    }
  }
}
class Ae {
  constructor(e) {
    this.tableScope = e, this.doubleClickDelay = 500, this.expandedAll = !0, this.mouseDown = !1, this.dragging = !1, this.lastClicked = 0, this.tableScope.hostElement.addEventListener("click", this.onHostElementClicked.bind(this)), this.tableScope.hostElement.addEventListener("dblclick", this.onHostElementDblClicked.bind(this)), this.tableScope.hostElement.addEventListener("mousedown", this.onMouseDown.bind(this)), this.tableScope.hostElement.addEventListener("mousemove", this.onMouseMove.bind(this)), this.tableScope.hostElement.addEventListener("mouseup", this.onMouseUp.bind(this)), this.tableScope.hostElement.addEventListener("contextmenu", this.onContextmenu.bind(this)), this.tableScope.hostElement._MouseHandler = "true", this.tableScope.scrollViewport.addEventListener("scroll", this.tableScope.adjustAfterScrolling.bind(this.tableScope)), [window, this.tableScope.hostElement].forEach(
      (t) => t.addEventListener("resize", this.tableScope.adjustContainersAndRows.bind(this.tableScope))
    );
  }
  /**
   * Handles the "contextmenu" event.
   *
   * @private
   * @param {MouseEvent} evt - The mouse event object.
   * @return {void}
   */
  onContextmenu(e) {
    this.mouseEvent = e;
    const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
    this.tableScope.contextmenu(t);
  }
  /**
   * Handles the click event on the host element.
   *
   * @param {MouseEvent} event - The click event.
   *
   * @return {void}
   */
  onHostElementClicked(e) {
    const t = Date.now();
    if (t - this.lastClicked < this.doubleClickDelay)
      return;
    this.lastClicked = t;
    const o = new Re(e.target, this.tableScope);
    if (o.action === "toggleExpandCollapseAll")
      this.expandedAll = !this.expandedAll, this.tableScope.toggleExpandCollapseAll(this.expandedAll), e.preventDefault(), e.stopPropagation();
    else if (o.action === "toggleHeaderGroup")
      this.tableScope.toggleHeaderGroup(o), e.preventDefault(), e.stopPropagation();
    else if (o.inputType === "checkbox" && o.areaIdent)
      this.tableScope.toggleRowCheckbox(o.rowIdx, o.colIdx, o.areaIdent), e.preventDefault(), e.stopPropagation();
    else if (H(o.row) && o.areaModel) {
      const i = o.colIdx === this.getArrowColumnIndex() && e.altKey, s = o.className.includes("ge-table-tree-arrow-div");
      if (i || s) {
        e.preventDefault(), e.stopPropagation();
        const r = o.row;
        r.expanded = !r.expanded, "recalcVisibleTreeRows" in o.areaModel && o.areaModel.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(r);
      }
    }
    if (o.areaIdent === "body" && this.tableScope.tableOptions.getFocusModel) {
      const i = this.tableScope.tableOptions.getFocusModel();
      i == null || i.clear(), i == null || i.setFocus(o.rowIdx, o.colIdx);
    }
    this.publishGeMouseEvent(e, 1);
  }
  /**
   * Handles the double click event on the host element.
   * This method is private.
   *
   * @param {MouseEvent} event - The double click event.
   */
  onHostElementDblClicked(e) {
    if (this.lastClicked = Date.now(), e.target instanceof HTMLElement) {
      const t = e.target, o = t.getAttribute("data-area"), i = Z(o), s = Number(t.getAttribute("data-row-index")), r = Number(t.getAttribute("data-col-index")), l = this.tableScope.tableModel.getAreaModel(i);
      if (o && i === "header")
        this.tableScope.tableModel.isSortable(r) && (this.tableScope.clearSelection(), this.tableScope.onHeaderDblClicked(e, s, r));
      else if (t.getAttribute("data-row-index")) {
        const n = l.getRowByIndex(s);
        if (o && i === "body" && l.isEditable(s, r) && (this.tableScope.clearSelection(), this.tableScope.initRenderEditor(s, r)), H(n) && r === this.getArrowColumnIndex()) {
          e.preventDefault(), e.stopPropagation();
          const d = n;
          d.expanded = !d.expanded, "recalcVisibleTreeRows" in l && l.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(d);
        }
      }
    }
    this.publishGeMouseEvent(e, 2);
  }
  /**
   * Publishes a GeMouseEvent.
   *
   * @param {MouseEvent} event - The MouseEvent to publish.
   * @param {number} clickCount - The number of clicks for the GeMouseEvent.
   *
   * @return {void}
   */
  publishGeMouseEvent(e, t) {
    var o;
    this.mouseEvent = e, this.geMouseEventOld = (o = this.geMouseEvent) == null ? void 0 : o.clone(), this.geMouseEvent = this.tableScope.createGeMouseEvent(e), this.geMouseEvent && (this.geMouseEvent.clickCount = t), this.tableScope.onMouseClicked(this.geMouseEvent, this.geMouseEventOld), this.tableScope.publishGeMouseEvent(this.geMouseEvent), t === 1 && this.tableScope.debounceRepaint();
  }
  /**
   * Update the collapsed/expanded state of a tree row.
   *
   * @param {TreeRowIf<any>} tr - The tree row object.
   * @returns {void}
   */
  updateCollapsedExpandedState(e) {
    var o, i, s, r, l;
    const t = (i = (o = this.tableScope.tableOptions) == null ? void 0 : o.autoRestoreOptions) == null ? void 0 : i.getRowId;
    if (t) {
      const n = (s = this.tableScope.storeStateCollapsedExpandService) == null ? void 0 : s.collapsedExpandedStateGet().mode, d = n === "collapsed" && !e.expanded || n === "expanded" && e.expanded, a = n === "collapsed" && e.expanded || n === "expanded" && !e.expanded, h = t(e.data);
      d ? (r = this.tableScope.storeStateCollapsedExpandService) == null || r.collapsedStateIdsPush(h) : a && ((l = this.tableScope.storeStateCollapsedExpandService) == null || l.collapsedStateIdsRemove(h));
    }
  }
  getArrowColumnIndex() {
    return this.tableScope.tableModel.isRowCheckboxVisible() ? 1 : 0;
  }
  onMouseDown(e) {
    this.dragging || (this.mouseEvent = e, this.startMouseEvent = this.tableScope.createGeMouseEvent(this.mouseEvent), this.tableScope.onMouseDown(this.startMouseEvent), this.mouseDown = !0);
  }
  onMouseMove(e) {
    this.mouseEvent = e, this.mouseDown ? (this.dragging || (this.dragging = !0, this.tableScope.setDragging(!0)), requestAnimationFrame(this.mouseDraggingOnFrame.bind(this))) : requestAnimationFrame(this.mouseMoveOnFrame.bind(this));
  }
  onMouseUp(e) {
    this.mouseEvent = e, this.dragging && requestAnimationFrame(this.mouseDraggingEndOnFrame.bind(this)), this.mouseDown = !1, this.dragging = !1, this.tableScope.setDragging(!1);
  }
  mouseDraggingOnFrame() {
    var e;
    if (this.mouseEvent) {
      const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
      (e = this.startMouseEvent) != null && e.originalEvent && (t.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX, t.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY), this.tableScope.mouseDraggingOnFrame(t, this.startMouseEvent);
    }
  }
  mouseDraggingEndOnFrame() {
    var e;
    if (this.mouseEvent) {
      const t = this.tableScope.createGeMouseEvent(this.mouseEvent);
      (e = this.startMouseEvent) != null && e.originalEvent && (t.draggingX = this.mouseEvent.clientX - this.startMouseEvent.originalEvent.clientX, t.draggingY = this.mouseEvent.clientY - this.startMouseEvent.originalEvent.clientY), this.tableScope.mouseDraggingEndOnFrame(t);
    }
  }
  mouseMoveOnFrame() {
    if (this.mouseEvent) {
      const e = this.tableScope.createGeMouseEvent(this.mouseEvent);
      this.tableScope.mouseMove(e);
    }
  }
}
class Me {
  constructor(e) {
    this.tableScope = e;
  }
  /**
   * Updates the cells in the table based on the provided events.
   *
   * @param {TableCellUpdateEventIf[]} events - The array of events representing the updates to perform on the cells.
   * @param {boolean} [repaintAll=false] - Optional parameter indicating whether to repaint all cells or not. Default value is false. If true, the full table will be rendered. If false, the table cell will be rendered immediately.
   *
   * @return {void} - This method doesn't return anything.
   */
  updateCells(e, t = !1) {
    this.tableScope.updateCells(e, t);
  }
  /**
   * Notifies that the external filter has changed.
   *
   * @return {void}
   */
  externalFilterChanged() {
    this.tableScope.externalFilterChanged();
  }
  /**
   * Scrolls the table body to the specified pixel coordinates.
   *
   * @param {number} px - The horizontal pixel coordinate to scroll to. Defaults to 0.
   * @param {number} py - The vertical pixel coordinate to scroll to. Defaults to 0.
   * @return {void}
   */
  scrollToPixel(e = 0, t = 0) {
    this.tableScope.scrollToPixel(e, t);
  }
  /**
   * Scrolls to the specified index in both horizontal and vertical directions.
   *
   * @param {number} indexX - The index of the column to scroll to in the horizontal direction. Default is 0.
   * @param {number} indexY - The index of the row to scroll to in the vertical direction. Default is 0.
   *
   * @return undefined
   */
  scrollToIndex(e = 0, t = 0) {
    this.tableScope.scrollToIndex(e, t);
  }
  /**
   * Sets whether the header is visible or not.
   *
   * @param _visible - A boolean value indicating whether the header should be visible. Default value is true.
   *
   * @return undefined
   */
  setHeaderVisible(e = !0) {
  }
  /**
   * Sets the visibility of a column in the table.
   *
   * @param {_column} - The column index or column definition to set visibility for.
   * @param {_visible=true} - The flag to set visibility to. true for visible, false for hidden.
   *
   * @return {void} - There is no return value.
   */
  setColumnVisible(e, t = !0) {
  }
  /**
   * Returns whether a column is visible or not.
   *
   * @param {number | ColumnDefIf} _column - The column index or the column definition.
   * @return {boolean} - True if the column is visible, false otherwise.
   */
  isColumnVisible(e) {
    return !0;
  }
  /**
   * Checks if the header is visible.
   *
   * @return {boolean} - Returns true if the header is visible, otherwise returns false.
   */
  isHeaderVisible() {
    return !0;
  }
  /**
   * Sets the visibility of the footer.
   *
   * @param {boolean} _visible - Indicates whether the footer should be visible or not. Default value is true.
   *
   * @return {void} - This method does not return any value.
   */
  setFooterVisible(e = !0) {
  }
  /**
   * Determines if the footer is visible.
   *
   * @returns {boolean} True if the footer is visible, false otherwise.
   */
  isFooterVisible() {
    return !0;
  }
  /**
   * Repaints the table.
   *
   * This method calls the repaint method of the tableScope object
   * to update and redraw the table based on the latest data.
   */
  repaint() {
    this.tableScope.repaint();
  }
  /**
   * Repaints the table scope with hard repaint.
   * Repaints the UI by resetting the size of the wrapper div,
   * adjusting the containers and rows, and performing additional adjustments
   * after scrolling.
   *
   * @return {void}
   */
  repaintHard() {
    this.tableScope.repaintHard();
  }
  /**
   * Clears the current selection of the table.
   * The table will be rendered automatically.
   *
   * @returns {void}
   */
  clearSelection() {
    this.tableScope.clearSelection(!0);
  }
  /**
   * Sets the selection model for the table scope.
   *
   * @param {SelectionModel} sm - The selection model to be set.
   * @param {boolean} [repaint=true] - Indicates whether the table should be repainted after setting the selection model. Default value is true.
   *
   * @return {void}
   */
  setSelectionModel(e, t = !0) {
    this.tableScope.setSelectionModel(e, t);
  }
  /**
   * Triggers the action with the given action ID.
   * This function can be invoked programmatically.
   *
   * @param {ActionId} actionId - The ID of the action to trigger.
   * @return {void}
   */
  triggerAction(e) {
    this.tableScope.onActionTriggered(e);
  }
  /**
   * Retrieves the mapping of shortcuts to corresponding action in the current table scope.
   *
   * @return {ShortcutActionIdMapping} The mapping of shortcuts to corresponding action.
   */
  getShortcutActionMapping() {
    return this.tableScope.shortcutService.getShortcutActionMapping();
  }
  /**
   * Copies the selected data from the table to the clipboard.
   *
   * @return {Promise<string>} - A promise that resolves with the copied data as a string.
   */
  copyToClipboard() {
    return this.tableScope.copyService.copyToClipboard(
      this.tableScope.tableModel,
      this.tableScope.selectionModel(),
      this.tableScope.focusModel()
    );
  }
  /**
   * Retrieves the current scope of the table.
   *
   * @returns {TableScope} The current scope of the table.
   */
  getTableScope() {
    return this.tableScope;
  }
  /**
   * Retrieves the selection model of the table.
   *
   * @return {SelectionModelIf | undefined} The selection model of the table,
   * or undefined if no selection model is available.
   */
  getSelectionModel() {
    return this.tableScope.selectionModel();
  }
}
class ee {
  constructor(e) {
    this.getStorageKeyFn = e;
  }
  autoConvertMapToObject(e) {
    const t = {};
    if (e instanceof Map) {
      const o = e;
      for (const i of [...o]) {
        const [
          s,
          r
        ] = i;
        t[s] = r;
      }
    }
    return t;
  }
  checkAndPersistItem(e, t) {
    const o = this.getStorageKeyFn;
    if (o) {
      const i = o();
      if (i) {
        const s = i + e;
        if ((t + "").includes("Map")) {
          const r = this.autoConvertMapToObject(t);
          this.persistItem(s, r);
        } else
          this.persistItem(s, t);
      }
    }
  }
  persistItem(e, t) {
    t ? localStorage.setItem(e, JSON.stringify(t)) : localStorage.removeItem(e);
  }
  loadFromLocalStorage(e) {
    const t = localStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  }
  // private loadItems() {
  //   const fn = this.getStorageKeyFn;
  //   if (fn) {
  //     const key = fn();
  //     if (key) {
  //       // A main key is given by function from options
  //       const subKey = key + this.CHECKED_STATE;
  //       const arr = this.loadFromLocalStorage<Array<string | number>>(subKey);
  //       if (arr) {
  //         this.checkedStateIds.length = 0;
  //         arr.forEach(a => this.checkedStateIds.push(a));
  //       }
  //
  //       const subKey2 = key + this.COLLAPSED_EXPANDED_STATE;
  //       const data = this.loadFromLocalStorage<CollapsedExpandedData>(subKey2);
  //       if (data) {
  //         this.collapsedExpandedState = data;
  //       }
  //
  //       const subKey3 = key + this.SELECTED_STATE;
  //       const arr3 = this.loadFromLocalStorage<object>(subKey3);
  //       if (arr3) {
  //         const map: Map<string | number, string[]> = new Map(Object.entries(arr3));
  //         if (map) {
  //           this.selectedStateIds.clear();
  //           map.forEach((col, k) => this.selectedStateIds.set(k, col));
  //         }
  //       }
  //
  //       const subKey4 = key + this.SCROLL_STATE;
  //       let scrollOffset = this.loadFromLocalStorage<[number, number]>(subKey4);
  //       this.scrollOffset = scrollOffset ? scrollOffset : [0, 0];
  //     }
  //   }
  // }
}
class Ee extends ee {
  constructor(e) {
    super(e), this.SCROLL_STATE = "scrollState", this.scrollOffset = [0, 0], this.load();
  }
  getScrollOffset() {
    return this.scrollOffset;
  }
  updateScrollOffset(e) {
    this.scrollOffset = e, this.checkAndPersistItem(this.SCROLL_STATE, this.scrollOffset);
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.SCROLL_STATE;
        let i = this.loadFromLocalStorage(o);
        this.scrollOffset = i || [0, 0];
      }
    }
  }
}
class Ie {
  constructor(e = "collapsed", t = [], o = !1, i = !1) {
    this.mode = e, this.rowIds = t, this.allCollapsed = o, this.allExpanded = i;
  }
}
class ke extends ee {
  constructor(e) {
    super(e), this.COLLAPSED_EXPANDED_STATE = "collapsedExpandedState", this.collapsedExpandedState = new Ie(), this.load();
  }
  collapsedExpandedStateGet() {
    return this.collapsedExpandedState;
  }
  collapsedExpandedStateIncludes(e) {
    return this.collapsedExpandedState.rowIds.includes(e);
  }
  collapsedStateIdsPush(e) {
    this.collapsedExpandedState.rowIds.includes(e) || (this.collapsedExpandedState.rowIds.push(e), this.collapsedExpandedState.allCollapsed = !1, this.collapsedExpandedState.allExpanded = !1, this.persist());
  }
  collapsedStateIdsRemove(e) {
    const t = this.collapsedExpandedState.rowIds.indexOf(e);
    t !== -1 && (this.collapsedExpandedState.rowIds.splice(t, 1), this.collapsedExpandedState.allCollapsed = !1, this.collapsedExpandedState.allExpanded = !1, this.persist());
  }
  collapsedStateAll(e) {
    this.collapsedExpandedState.rowIds = [], this.collapsedExpandedState.mode = e ? "collapsed" : "expanded", this.collapsedExpandedState.allCollapsed = !e, this.collapsedExpandedState.allExpanded = e, this.persist();
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.COLLAPSED_EXPANDED_STATE, i = this.loadFromLocalStorage(o);
        i && (this.collapsedExpandedState = i);
      }
    }
  }
  persist() {
    this.checkAndPersistItem(this.COLLAPSED_EXPANDED_STATE, this.collapsedExpandedState);
  }
}
class Te extends ee {
  constructor(e) {
    super(e), this.SORTING_STATE = "sortingState", this.sortItems = [], this.load();
  }
  getSortItems() {
    return this.sortItems;
  }
  setSortItems(e) {
    this.sortItems = e, this.checkAndPersistItem(this.SORTING_STATE, this.sortItems);
  }
  load() {
    const e = this.getStorageKeyFn;
    if (e) {
      const t = e();
      if (t) {
        const o = t + this.SORTING_STATE, i = this.loadFromLocalStorage(o);
        this.sortItems = i || [];
      }
    }
  }
}
class F {
  constructor(e = 0, t = 0, o = 0, i = 0, s) {
    this.left = e, this.width = t, this.height = o, this.top = i, this.index = s;
  }
}
class De {
  constructor(e, t, o, i) {
    this.hostElement = e, this.tableModel = t, this.dom = o, this.tableOptions = i, this.scrollTop = 0, this.areaBodyWestGeo = new F(), this.areaBodyCenterGeo = new F(), this.areaBodyEastGeo = new F();
    const s = this.hostElement;
    s.innerText = "", this.dom.setAttribute(s, "tabindex", "0"), this.dom.setStyle(
      this.dom.addClass("ge-table", s),
      "position",
      "relative"
    ), this.hoverRow = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-row", s)
    ), this.hoverColumn = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-hover-column", s)
    ), this.draggingColumn = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-dragging-column", s)
    ), this.areaHeaderWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-west", s, "header", "west")
      )
    ), this.areaHeaderCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-center", s, "header", "center")
      )
    ), this.areaHeaderEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-header ge-table-header-east", s, "body", "east")
      )
    ), this.areaBodyWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-west", s, "body", "west")
      )
    ), this.areaBodyEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-body ge-table-body-east", s, "body", "east")
      )
    ), this.areaFooterWest = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-west", s, "footer", "west")
      )
    ), this.areaFooterCenter = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-center", s, "footer", "center")
      )
    ), this.areaFooterEast = o.appendRelativeChildDiv(
      o.applyStylePosistionAbsolute(
        o.createAreaDivWithClass("ge-table-footer ge-table-footer-east", s, "footer", "east")
      )
    ), this.scrollViewport = o.applyStyleOverflowAuto(
      this.tableOptions.overflowX ?? "auto",
      this.tableOptions.overflowY ?? "auto",
      o.applyStyleNoPadding(
        o.applyStylePosistionAbsolute(
          o.createAreaDivWithClass("ge-table-scroll-viewport", s, "body", "center")
        )
      )
    ), this.contentWrapperDiv = o.applyStyleNoPadding(
      o.applyStylePosistionRelative(
        o.createDivWithClass("ge-table-scroll-content-wrapper", this.scrollViewport)
      )
    ), this.contentDiv = o.applyStyleNoPadding(
      o.applyStylePosistionRelative(
        o.createDivWithClass("ge-table-scroll-content", this.contentWrapperDiv)
      )
    ), this.areaBodyCenter = o.appendRelativeChildDiv(
      o.createDivWithClass("ge-table-body-center", this.contentDiv)
    ), this.borderHeaderBottom = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-header-border", s)
    ), this.borderFixedWest = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-west-fixed-column-border", s)
    ), this.borderFixedEast = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-east-fixed-column-border", s)
    ), this.borderFooterTop = o.applyStylePosistionAbsolute(
      o.createDivWithClass("ge-table-footer-border", s)
    );
  }
  /**
   * Adjusts the containers and rows of the table based on the current state.
   *
   * @return {void}
   */
  adjustContainersAndRows() {
    const e = this.tableModel.getPadding(), t = this.hostElement.clientWidth, o = this.hostElement.clientHeight;
    this.dom.applyStyle(this.scrollViewport, {
      width: `${t - e.left}px`,
      height: `${o - e.top}px`,
      top: `${e.top}px`,
      left: `${e.left}px`
    }), this.scrollTop = this.scrollViewport.scrollTop, this.dom.applyStyle(this.contentDiv, {
      width: `${this.scrollViewport.clientWidth}px`,
      height: `${this.scrollViewport.clientHeight}px`,
      top: `${this.scrollTop}px`,
      left: `${this.scrollViewport.scrollLeft}px`
    }), this.areaBodyWestGeo.width = e.left, this.areaBodyWestGeo.height = o - e.top - e.bottom, this.areaBodyWestGeo.top = e.top, this.areaBodyWestGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyWest.parent, this.areaBodyWestGeo), this.tableOptions.fixedWestSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedWest, {
        width: "1px",
        height: `${this.areaBodyWestGeo.height}px`,
        top: `${this.areaBodyWestGeo.top}px`,
        left: `${this.areaBodyWestGeo.width}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedWest), this.areaBodyEastGeo.width = e.right, this.areaBodyEastGeo.height = o - e.top - e.bottom, this.areaBodyEastGeo.top = e.top, this.areaBodyEastGeo.left = t - e.right, this.dom.applyStyleInPx(this.areaBodyEast.parent, this.areaBodyEastGeo), this.tableOptions.fixedEastSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedEast, {
        width: "1px",
        height: `${this.areaBodyEastGeo.height}px`,
        top: `${this.areaBodyEastGeo.top}px`,
        left: `${this.areaBodyEastGeo.left}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedEast), this.areaBodyCenterGeo.width = t - e.left - e.right, this.areaBodyCenterGeo.height = o - e.top - e.bottom, this.areaBodyCenterGeo.top = 0, this.areaBodyCenterGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyCenter.parent, this.areaBodyCenterGeo), this.dom.applyStyle(this.areaHeaderCenter.parent, {
      width: `${t - e.left - e.right}px`,
      height: `${e.top}px`,
      top: "0",
      left: `${e.left}px`
    }), this.dom.applyStyle(this.areaHeaderWest.parent, {
      width: `${e.left}px`,
      height: `${e.top}px`,
      top: "0",
      left: "0"
    }), this.dom.applyStyle(this.areaHeaderEast.parent, {
      width: `${e.right}px`,
      height: `${e.top}px`,
      top: "0",
      left: `${t - e.right}px`
    }), this.tableOptions.headerSeparatorBorderVisible && this.tableModel.isHeaderVisibe() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderHeaderBottom, {
        width: `${t}px`,
        height: "1px",
        top: `${e.top}px`,
        left: "0px"
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderHeaderBottom), this.dom.applyStyle(this.areaFooterWest.parent, {
      width: `${e.left}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: "0"
    }), this.dom.applyStyle(this.areaFooterCenter.parent, {
      width: `${t - e.left - e.right}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: `${e.left}px`
    }), this.dom.applyStyle(this.areaFooterEast.parent, {
      width: `${e.right}px`,
      height: `${e.bottom}px`,
      top: `${o - e.bottom}px`,
      left: `${t - e.right}px`
    }), this.tableOptions.footerSeparatorBorderVisible && this.tableModel.isFooterVisibe() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFooterTop, {
        width: `${t}px`,
        height: "1px",
        top: `${o - e.bottom}px`,
        left: "0px"
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFooterTop), this.adjustAfterScrolling();
  }
  /**
   * Adjusts the position or appearance of elements after scrolling.
   * This method must be overwritten in child classes.
   *
   * @return {void}
   */
  adjustAfterScrolling() {
  }
  /**
   * Resets the size of the wrapper div based on the content dimensions.
   *
   * @protected
   *
   * @returns {void} Returns nothing.
   */
  resetSizeOfWrapperDiv() {
    const e = `${this.tableModel.getContentWidthInPixel()}px`, t = `${this.tableModel.getContentHeightInPixel() + 1}px`;
    this.dom.setStyle(this.contentWrapperDiv, "width", e), this.dom.setStyle(this.contentWrapperDiv, "height", t);
  }
}
class A {
  /**
   * Represents a constructor for a class.
   * @constructor
   * @param {number} r1 - The value for r1.
   * @param {number} c1 - The value for c1.
   * @param {number} r2 - The value for r2.
   * @param {number} c2 - The value for c2.
   * @param {boolean} [gammaRange=false] - The value for gammaRange. Defaults to false. gammaRange will be used for AreaModelCellGroups, but it's not implemented yet!
   */
  constructor(e, t, o, i, s = !1) {
    this.r1 = e, this.c1 = t, this.r2 = o, this.c2 = i, this.gammaRange = s;
  }
  static create(e) {
    return e.gammaRange === void 0 && (e.gammaRange = !1), new A(
      e.rowIndex1,
      e.columnIndex1,
      e.rowIndex2,
      e.columnIndex2,
      e.gammaRange
    );
  }
  static singleCell(e, t) {
    return new A(e, t, e, t);
  }
  static singleRow(e) {
    return new A(e, 0, e, Number.MAX_SAFE_INTEGER);
  }
  static singleColumn(e) {
    return new A(0, e, Number.MAX_SAFE_INTEGER, e);
  }
  isInRange(e, t) {
    return e >= this.r1 && e <= this.r2 && t >= this.c1 && t <= this.c2;
  }
}
class _e {
  constructor(e, t) {
    this.tableModel = e, this.areaModel = t, this.colAndRowspanRanges = void 0;
  }
  init() {
    if (this.areaModel.getMaxColspan() < 2 && this.areaModel.getMaxRowspan() < 2)
      return;
    this.colAndRowspanRanges = [];
    const e = this.areaModel.getRowCount(), t = this.tableModel.getColumnCount();
    for (let o = 0; o < e; o++)
      for (let i = 0; i < t; i++) {
        let s = this.areaModel.getColspanAt(o, i), r = this.areaModel.getRowspanAt(o, i);
        if (s > 1 || r > 1) {
          s === 0 && (s = 1), r === 0 && (r = 1);
          const l = "gammaCells" in this.areaModel;
          this.colAndRowspanRanges.push(
            new A(o, i, o + r - 1, i + s - 1, l)
          );
        }
      }
  }
  getRanges() {
    return this.colAndRowspanRanges ? this.colAndRowspanRanges : [];
  }
  isInRange(e, t) {
    if (this.colAndRowspanRanges) {
      for (const o of this.colAndRowspanRanges)
        if (o.isInRange(e, t))
          return !0;
    }
    return !1;
  }
}
class T {
  constructor(e, t, o) {
    this.header = e, this.body = t, this.footer = o;
  }
}
class Fe extends De {
  constructor(e, t, o, i) {
    var r, l;
    super(e, t, o, i), this.dragging = !1, this.editing = !1, this.storedColumnWidths = [], this.scrollLeft = 0, this.scrollViewportLeft = 0, this.scrollFactorY = 0, this.scrollFactorX = 0, this.cleanupFunctions = {
      header: [],
      body: [],
      footer: []
    }, this.tree = !1, this.colAndRowspanModels = new T(), this.firstVisibleRowIndex = -1, this.draggingTargetColumnIndex = -1, this.removables = [], this.tableModel.getSelectionModel ? this.getSelectionModel = this.tableModel.getSelectionModel : (r = this.tableOptions) != null && r.getSelectionModel && (this.getSelectionModel = this.tableOptions.getSelectionModel), (l = this.tableOptions) != null && l.getFocusModel && (this.getFocusModel = this.tableOptions.getFocusModel), K(t.getAreaModel("body")) && (this.tree = !0), ["header", "body", "footer"].forEach(
      (n) => {
        var d;
        this.colAndRowspanModels[n] = new _e(t, t.getAreaModel(n)), (d = this.colAndRowspanModels[n]) == null || d.init();
      }
    );
  }
  isEditing() {
    return this.editing;
  }
  /**
   * Resets the editor renderer by clearing its values and state.
   *
   * @function resetEditorRenderer
   * @memberof ClassName
   *
   * @returns {void}
   */
  resetEditorRenderer() {
    this.editorRenderer = void 0, this.editorRendererRow = -1, this.editorRendererColumn = -1, this.editing = !1;
  }
  /**
   * Clears the selection in the component.
   *
   * @param {boolean} rerender - Indicates whether to rerender the component after clearing the selection. Default value is false.
   *
   * @return {void}
   */
  clearSelection(e = !1) {
    if (this.getSelectionModel) {
      const t = this.getSelectionModel();
      t == null || t.clear(), e && this.repaint();
    }
  }
  /**
   * Initializes and renders the editor for a specified row and column index.
   *
   * @param {number} rowIdx - The index of the row.
   * @param {number} colIdx - The index of the column.
   */
  initRenderEditor(e, t) {
    var i;
    let o = (i = this.tableModel.getColumnDef(t)) == null ? void 0 : i.getEditRenderer;
    if (o || (o = this.tableOptions.getEditRenderer), o)
      if (this.editorRenderer = o(e, t), this.editorRenderer) {
        this.editorRendererRow = e, this.editorRendererColumn = t, this.editing = !0, this.repaint();
        const s = document.querySelector("input.ge-table-cell-editor-input");
        s && s.focus();
      } else
        this.resetEditorRenderer();
  }
  /**
   * Adjusts the content after scrolling and initiates a repaint of the component.
   *
   * @return {void}
   */
  repaint() {
    this.adjustAfterScrolling();
  }
  /**
   * Repaints the UI by resetting the size of the wrapper div,
   * adjusting the containers and rows, and performing additional adjustments
   * after scrolling.
   *
   * @return {void} This method does not return any value.
   */
  repaintHard() {
    this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows(), this.adjustAfterScrolling();
  }
  /**
   * Adjusts the table after scrolling. This method performs various adjustments
   * to the table's appearance and behavior after a scroll event occurs.
   */
  adjustAfterScrolling() {
    var e;
    for (const t of this.removables)
      t.remove();
    this.hideHoverRow(), this.hideHoverColumn(), this.scrollTop = this.scrollViewport.scrollTop, this.scrollLeft = this.scrollViewport.scrollLeft, this.debounce(this.checkForScrollPosSaving.bind(this)), this.scrollFactorY = this.scrollTop / (this.scrollViewport.scrollHeight - this.scrollViewport.clientHeight), this.scrollFactorX = this.scrollLeft / (this.scrollViewport.scrollWidth - this.scrollViewport.clientWidth), isNaN(this.scrollFactorY) && (this.scrollFactorY = 0), isNaN(this.scrollFactorX) && (this.scrollFactorX = 0), this.adjustBody(), this.adjustArea("footer"), this.adjustArea("header"), this.tableOptions.tableTopBorderVisible && this.removables.push(this.dom.addHorizontalBorder(
      new F(0, this.hostElement.clientWidth, 1, 0),
      this.hostElement,
      "ge-table-border"
    )), this.tableOptions.tableBottomBorderVisible && this.removables.push(this.dom.addHorizontalBorder(
      new F(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1),
      this.hostElement,
      "ge-table-border"
    )), this.tableModel.getFixedLeftColumnCount() > 0 && this.removables.push(this.dom.addVerticalBorder(
      new F(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0),
      this.hostElement,
      "ge-table-body-west-vertical-border"
    )), ((e = this.tableModel.getAreaModel("header")) == null ? void 0 : e.getRowCount()) > 0 && this.removables.push(this.dom.addHorizontalBorder(
      new F(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight),
      this.hostElement,
      "ge-table-body-west-vertical-border"
    ));
  }
  /**
   * Checks if the scroll position should be saved and saves it.
   *
   * @return {void}
   */
  checkForScrollPosSaving() {
    var e, t;
    this.storeScrollPosStateService && ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.autoRestoreScrollPosition) && this.storeScrollPosStateService.updateScrollOffset([this.scrollLeft, this.scrollTop]);
  }
  /**
   * Updates the cells in the table with the provided values and optionally repaints all cells.
   *
   * @param {TableCellUpdateEventIf[]} events - The array of events containing information about the cells to update.
   * @param {boolean} repaintAll - Optional. If true, repaints all cells after updating. Defaults to false.
   *
   * @returns {void}
   */
  updateCells(e, t = !1) {
    e.forEach(
      (o) => {
        this.tableModel.getAreaModel(o.area).setValue(o.rowIndex, o.columnIndex, o.value), t || this.rerenderCellContent(o);
      }
    ), t && this.repaint();
  }
  /**
   * Rerenders the content of a table cell based on the given parameters.
   *
   * @param {TableCellUpdateEventIf} area - The area of the table.
   * @param {number} rowIndex - The index of the row.
   * @param {number} columnIndex - The index of the column.
   * @param {any} value - The new value to be displayed in the cell.
   * @param {string[]} cssClasses - An array of CSS classes to be applied to the cell.
   */
  rerenderCellContent({ area: e, rowIndex: t, columnIndex: o, value: i, cssClasses: s }) {
    const r = this.tableModel.getAreaModel(e), l = 'div[data-col-index="' + o + '"][data-row-index="' + t + '"][data-area="' + e + '"]', n = document.querySelector(l);
    if (n) {
      let d;
      const h = this.editorRenderer && this.editorRendererRow === t && this.editorRendererColumn === o ? this.editorRenderer : r.getCellRenderer(t, o);
      if (n.innerText = "", this.applyCssClasses(n, s), h)
        d = h.render(n, t, o, e, r, i, this.dom.domService), d && this.cleanupFunctions[e].push(d);
      else {
        const b = `${i}`;
        this.dom.addLabelDiv(n, b, !1, t, o, e);
      }
      const u = r.getCustomClassesAt(t, o);
      u.length && this.dom.addClasses(u, n);
      const m = r.getCustomStyleAt(t, o);
      if (m)
        for (const b in m)
          this.dom.setStyle(n, b, m[b]);
    }
  }
  /**
   * Stores the widths of all columns in the table.
   *
   * @protected
   * @function storeColumnWidths
   * @returns {void}
   */
  storeColumnWidths() {
    const e = this.tableModel.getColumnDefs();
    e != null && e.length && (this.storedColumnWidths = e.map((t, o) => this.tableModel.getColumnWidth(o)));
  }
  getAreaAndSideIdentByAttr(e) {
    if (e) {
      const t = this.getStringByAttr(e, "data-area"), o = this.getStringByAttr(e, "data-side");
      if (o && t)
        return [t, o];
    }
    return [void 0, void 0];
  }
  /**
   * Retrieves the specified area from the grid layout.
   *
   * @param {string} areaIdent - The identifier for the area ('header', 'body', or 'footer').
   * @param {string} sideIdent - The identifier for the side of the area ('west', 'center', or 'east').
   * @protected
   * @returns {HTMLElement} - The requested area element.
   * @throws {Error} - If the area identifier or side identifier is incorrect.
   */
  getArea(e, t) {
    if (e === "header") {
      if (t === "west")
        return this.areaHeaderWest;
      if (t === "center")
        return this.areaHeaderCenter;
      if (t === "east")
        return this.areaHeaderEast;
    } else if (e === "body") {
      if (t === "west")
        return this.areaBodyWest;
      if (t === "center")
        return this.areaBodyCenter;
      if (t === "east")
        return this.areaBodyEast;
    } else if (e === "footer") {
      if (t === "west")
        return this.areaFooterWest;
      if (t === "center")
        return this.areaFooterCenter;
      if (t === "east")
        return this.areaFooterEast;
    }
    throw Error(`Wrong area identifier: row:${e}, col:${t}`);
  }
  /**
   * Adjusts the body of the table.
   *
   * @protected
   * @return {void}
   */
  adjustBody() {
    const e = this.areaBodyCenterGeo.height - this.tableModel.getContentHeightInPixel(), t = this.scrollFactorY * e;
    this.dom.setStyle(this.contentDiv, "top", `${this.scrollTop}px`), this.dom.setStyle(this.contentDiv, "left", `${this.scrollViewport.scrollLeft}px`), this.adjustArea("body", t);
  }
  /**
   * Returns a number value extracted from the specified attribute of the source element.
   *
   * @param {HTMLElement} srcElement - The source element from which to extract the attribute value.
   * @param {string} key - The attribute key to extract the value from.
   * @returns {number} - The extracted number value, or -1 if the attribute was not found or not a valid number.
   * @protected
   */
  getNumberByAttr(e, t) {
    var o;
    if (e) {
      const i = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (i)
        return Number(i);
    }
    return -1;
  }
  /**
   * Retrieves the value of the specified attribute from the nearest ancestor element that has the attribute.
   *
   * @param {HTMLElement} srcElement - The source element from which to start searching for the nearest ancestor element.
   * @param {string} key - The name of the attribute to retrieve.
   * @returns {string} The value of the specified attribute, or an empty string if the attribute is not found.
   * @protected
   */
  getStringByAttr(e, t) {
    var o;
    if (e) {
      const i = (o = e.closest("[" + t + "]")) == null ? void 0 : o.getAttribute(t);
      if (i)
        return i;
    }
    return "";
  }
  /**
   * Adjusts the layout and positioning of the specified area in the table.
   * This method is used internally and should not be called directly.
   *
   * @param {AreaIdent} areaIdent - The identifier of the area to adjust (e.g. header, body, footer).
   * @param {number} [yStart=0] - The starting y-position for the layout adjustments.
   * @protected
   */
  adjustArea(e, t = 0) {
    var g;
    const o = this.getArea(e, "west"), i = this.getArea(e, "center"), s = this.getArea(e, "east"), r = i.child.clientHeight;
    o.child.innerText = "", i.child.innerText = "", s.child.innerText = "";
    const l = 0, n = this.areaBodyCenterGeo.width, d = this.tableModel.getPadding(), a = this.tableModel.getAreaModel(e), h = a.getRowCount();
    for (; this.cleanupFunctions[e].length; ) {
      const p = this.cleanupFunctions[e].shift();
      p && p();
    }
    let u = t;
    const m = this.tableModel.getColumnCount(), b = this.tableModel.getFixedRightColumnCount(), f = this.tableModel.getFixedLeftColumnCount();
    for (let p = 0; p < h; p++) {
      const C = u, y = p === h - 1, R = this.tableModel.getRowHeight(e, p);
      if (C + R > 0) {
        this.firstVisibleRowIndex = p;
        let x = { left: l, width: n, height: R, top: C, index: p }, S = this.dom.addRowDiv(i, x, p, e, "center");
        const k = f;
        if (this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "center",
          areaModel: a,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: k,
          columnIndexEnd: m - b - 1,
          verticalFixed: !1,
          lastRowOfModel: y
        }), d.left > 0 && (x = { left: l, width: this.areaBodyWestGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(o, x, p, e, "west"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "west",
          areaModel: a,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: 0,
          columnIndexEnd: k - 1,
          verticalFixed: !0,
          lastRowOfModel: y
        })), d.right > 0 && (x = { left: l, width: this.areaBodyEastGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(s, x, p, e, "east"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "east",
          areaModel: a,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: m - b,
          columnIndexEnd: m - 1,
          verticalFixed: !0,
          lastRowOfModel: y
        })), e === "header" && this.tree && p === h - 1) {
          const M = this.dom.applyStyle(
            this.dom.setAttribute(
              this.dom.addDiv(S, new F(16, 20, 20, 8)),
              "data-ge-action",
              "toggleExpandCollapseAll"
            ),
            { cursor: "pointer" }
          ), E = this.tableOptions.treeOptions.arrowExpandCollapseAll;
          if (E) {
            const W = this.dom.domService.createText(E.content);
            this.dom.domService.appendChild(M, W), E.style && this.dom.applyStyleString(M, E.style);
          }
        }
      }
      if (u = u + R, u > r)
        break;
    }
    if (this.colAndRowspanModels && this.colAndRowspanModels[e]) {
      const p = ((g = this.colAndRowspanModels[e]) == null ? void 0 : g.getRanges()) ?? [];
      if (p.length)
        for (const C of p) {
          let y = 0, R = i.child, x = "center";
          if (C.c1 < f)
            R = o.child, x = "west";
          else if (b > 0 && C.c1 >= m - b)
            R = s.child, x = "east";
          else {
            const S = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
            y = this.scrollFactorX * S - this.areaBodyWestGeo.width, x = "center";
          }
          this.drawBigCell(C, y, t, a, R, x);
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
  drawBigCell(e, t, o, i, s, r) {
    const l = o + this.getRowHeights(0, e.r1 - 1, i).reduce((g, p) => g + p, 0), n = this.tableModel.getColumnCount(), d = this.tableModel.getFixedRightColumnCount();
    let a = 0;
    d > 0 && e.c1 >= n - d && (a = n - d);
    const h = t + this.getColumnWidths(a, e.c1 - 1).reduce((g, p) => g + p, 0), u = this.getRowHeights(e.r1, e.r2, i).reduce((g, p) => g + p, 0), m = this.getColumnWidths(e.c1, e.c2).reduce((g, p) => g + p, 0);
    let b = !1;
    const f = this.getSelectionModel ? this.getSelectionModel() : void 0;
    f && (b = f.getSelectionCount(e.r1, e.c1) > 0), e.gammaRange ? this.renderCell({
      areaModel: i,
      areaIdent: i.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: h,
      top: l,
      width: m,
      height: u,
      parent: s,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }) : this.renderCell({
      areaModel: i,
      areaIdent: i.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: h,
      top: l,
      width: m,
      height: u,
      parent: s,
      cellSelected: b,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }), i.areaIdent === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
      rowIndex: e.r1,
      columnIndex: e.c1,
      cellLeft: h,
      cellTop: l,
      cellWidth: m,
      cellHeight: u,
      parent: s
    });
  }
  /**
   * Finds the row index of an important rowspan cell in a given area model.
   *
   * @param {AreaModelIf} areaModel - The area model to search in.
   * @param {number} rowIndex - The current row index.
   * @param {number} colIndex - The current column index.
   * @returns {number} - The row index of the important rowspan cell, or -1 if not found.
   * @protected
   */
  findRowOfImportantRowspanCell(e, t, o) {
    const i = e.getMaxRowspan();
    for (let s = t - 1; s > -1; s--) {
      const r = e.getRowspanAt(s, o);
      if (r > 1 && s + r + 1 >= t)
        return s;
      if (t - s > i)
        return -1;
    }
    return -1;
  }
  /**
   * Adjusts the columns to fit the width of the row's parent element.
   *
   * @param {ArgsAdjustColumnsToRowParentParams} params - The parameters for adjusting the columns.
   * @protected
   * @return {void}
   */
  adjustColumnsToRowParent({
    areaIdent: e,
    sideIdent: t,
    areaModel: o,
    geo: i,
    parent: s,
    rowIndex: r,
    columnIndexStart: l,
    columnIndexEnd: n,
    verticalFixed: d = !1,
    lastRowOfModel: a = !1
  }) {
    var f;
    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let h = 0;
    if (!d) {
      const g = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
      h = this.scrollFactorX * g;
    }
    const u = 0, m = !!(e === "body" && t);
    let b = h;
    for (let g = l; g <= n; g++) {
      const p = b, C = this.tableModel.getColumnWidth(g);
      if (C > 0 && p + C > 0) {
        let y = i.height;
        const R = o.getRowspanAt(r, g), x = o.getColspanAt(r, g);
        R > 1 && (y = this.getRowHeights(r, r + R - 1, o).reduce((M, E) => M + E, 0));
        let S = C;
        x > 1 && (S = this.getColumnWidths(g, g + x - 1).reduce((M, E) => M + E, 0));
        let k = !1;
        if (this.colAndRowspanModels && this.colAndRowspanModels[e] && (f = this.colAndRowspanModels[e]) != null && f.isInRange(r, g) && (k = !0), this.draggingTargetColumnIndex === g && e !== "header") {
          this.renderDragTargetDiv(s, p, u, S, y);
          const M = { left: p, top: u, width: S, height: y };
          this.dom.addColumnBorderDivs(this.tableOptions, s, M, e, t);
        } else {
          const M = this.renderSelectedBackgroundDiv(k, m, t, o, r, g, s, p, u, S, y);
          "gammaCells" in o && o.getValueAt(r, g) && (k = !1), k || this.renderCell({
            areaModel: o,
            areaIdent: e,
            sideIdent: t,
            rowIndex: r,
            columnIndex: g,
            left: p,
            top: u,
            width: S,
            height: y,
            parent: s,
            cellSelected: M,
            lastRowOfModel: a,
            gammaRange: !0
          }), e === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
            rowIndex: r,
            columnIndex: g,
            cellLeft: p,
            cellTop: u,
            cellWidth: S,
            cellHeight: y,
            parent: s
          });
        }
      }
      if (b = b + C, b > this.areaBodyCenterGeo.width)
        break;
    }
    this.tableOptions.verticalBorderVisible && this.dom.addVerticalBorder(new F(b - 1, 1, i.height, 0), s);
  }
  /**
   * Retrieves the column index of the tree arrow column in the table.
   *
   * @protected
   *
   * @returns {0 | 1} The column index of the tree arrow column.
   *                Returns 0 if the checkbox is not visible,
   *                otherwise returns 1.
   */
  getTreeArrowColumnIndex() {
    return this.tableOptions.showCheckboxWihoutExtraColumn ? 0 : this.tableModel.isRowCheckboxVisible() ? 1 : 0;
  }
  addAndRenderCellDiv({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: i,
    index: s,
    left: r,
    width: l,
    height: n,
    top: d,
    parent: a,
    lastRowOfModel: h
  }) {
    var se;
    const m = this.editorRenderer && this.editorRendererRow === i && this.editorRendererColumn === s ? this.editorRenderer : e.getCellRenderer(i, s), b = { left: r, width: l, height: n, top: d, index: s }, f = e.getRowByIndex(i);
    let g = "none";
    if (s === this.getTreeArrowColumnIndex() && H(f)) {
      const v = f;
      (se = v.children) != null && se.length ? v.expanded ? g = "expanded" : g = "collapsed" : g = "hidden";
    }
    let C;
    if (t === "header") {
      const v = this.tableModel.getColumnDef(s);
      (!(v != null && v.sortIconVisible) || v != null && v.sortIconVisible()) && (C = v == null ? void 0 : v.sortState);
    }
    const y = e.getValueAt(i, s), R = m ? "" : `${y}`, x = e.isRowChecked(i), S = this.dom.addColumnDiv(
      {
        parent: a,
        geo: b,
        rowIndex: i,
        columnIndex: s,
        areaIdent: t,
        sideIdent: o,
        text: R,
        treeArrow: g,
        tableOptions: this.tableOptions,
        checkedType: x,
        sortState: C
      }
    ), k = e.getTooltipAt(i, s);
    k && this.dom.setAttribute(S, "title", k);
    const M = this.tableModel.getColumnDef(s);
    M && M.classes[t] && this.dom.addClasses(M.classes[t], S);
    let E;
    m && (E = m.render(S, i, s, t, e, y, this.dom.domService));
    const W = e.getCustomClassesAt(i, s);
    if (W.length && this.dom.addClasses(W, S), this.dom.addColumnBorderDivs(this.tableOptions, a, b, t, o), h && this.dom.addHorizontalBorder({ left: r, width: l, height: n, top: d + n }, a), this.getFocusModel && t === "body") {
      const v = this.getFocusModel();
      v != null && v.hasFocus(i, s) && this.dom.addFocusBorderDivs(a, b, {});
    }
    t === "header" && this.dom.setAttribute(S, "data-ge-action", "drag-column");
    const X = e.getCustomStyleAt(i, s);
    if (X)
      for (const v in X)
        this.dom.setStyle(S, v, X[v]);
    return [S, E];
  }
  /**
   * Applies CSS classes to an HTML element.
   *
   * @param {HTMLDivElement} ele - The HTML element to which CSS classes will be applied.
   * @param {Object.<string, boolean>} cssClasses - An object containing CSS class names as keys and boolean values indicating whether to apply or remove the class.
   * @protected
   */
  applyCssClasses(e, t = {}) {
    e && Object.entries(t).forEach(([o, i]) => {
      i ? this.dom.addClass(o, e) : this.dom.removeClass(o, e);
    });
  }
  /**
   * Retrieves the column widths of a table within a specified range.
   *
   * @param {number} startIndex - The index of the first column to retrieve the width of.
   * @param {number} endIndex - The index of the last column to retrieve the width of.
   *
   * @return {number[]} An array containing the widths of the columns within the specified range.
   */
  getColumnWidths(e, t) {
    const o = [];
    for (let i = e; i <= t; i++)
      o.push(this.tableModel.getColumnWidth(i));
    return o;
  }
  /**
   * Retrieves the heights of rows within a specified range.
   *
   * @param {number} startIndex - The index of the first row in the range.
   * @param {number} endIndex - The index of the last row in the range.
   * @param {AreaModelIf} areaModel - The area model.
   * @return {number[]} - An array containing the heights of the rows within the specified range.
   */
  getRowHeights(e, t, o) {
    const i = [];
    for (let s = e; s <= t; s++)
      i.push(o.getRowHeight(s));
    return i;
  }
  /**
   * Adjusts the position and size of the hover row based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
   *
   * @return {void}
   */
  adjustHoverRows(e) {
    if (this.tableOptions.hoverRowVisible && e.rowIndex > -1) {
      const t = this.hostElement.clientWidth, o = this.tableModel.getAreaModel("body").getRowHeight(e.rowIndex), i = e.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        left: "0",
        top: i + "px",
        width: t + "px",
        height: o + "px",
        display: "block"
      });
    } else
      this.hideHoverRow();
  }
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
  hideHoverRow() {
    this.dom.applyStyle(this.hoverRow, {
      display: "none"
    });
  }
  /**
   * Adjusts the position and size of the hover column based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   */
  adjustHoverColumns(e) {
    if (this.tableOptions.hoverColumnVisible && e.rowIndex > -1) {
      const t = this.hostElement.clientHeight, o = this.tableModel.getColumnWidth(e.columnIndex), i = this.areaBodyWestGeo.width, s = e.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - i;
      this.dom.applyStyle(this.hoverColumn, {
        left: s + "px",
        top: "0px",
        width: o + "px",
        height: t + "px",
        display: "block"
      });
    } else
      this.hideHoverColumn();
  }
  /**
   * Hide hover column.
   *
   * This method hides the hover column by applying a style of 'display: none'
   * to the element representing the hover column.
   *
   * @protected
   * @memberof ClassName
   */
  hideHoverColumn() {
    this.dom.applyStyle(this.hoverColumn, {
      display: "none"
    });
  }
  /**
   * Executes a function after a specified delay, ensuring that the function is called only once within that delay period.
   *
   * @param {() => void} fn - The function to be executed.
   * @param {number} [delay=1000] - The delay in milliseconds before executing the function.
   *
   * @return {undefined}
   */
  debounce(e, t = 1e3) {
    this.debounceTimeout && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(e.bind(this), t);
  }
  /**
   * Adjusts the dragging column during a mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event.
   * @param {number} sourceColumnIndex - The index of the source column.
   * @param {boolean} firstDraggingRendering - Indicates if it's the first rendering of the dragging column.
   */
  adjustDraggingColumn(e, t, o) {
    var i, s;
    if (this.dragging) {
      const r = this.hostElement.clientHeight, l = this.storedColumnWidths[t];
      if ((i = e.originalEvent) != null && i.clientX) {
        const a = { left: ((s = e.originalEvent) == null ? void 0 : s.clientX) - l / 2, width: l, height: r, top: 0, index: t };
        this.dom.applyStyle(this.draggingColumn, {
          background: "rgba(128,128,128,0.2)",
          display: "block",
          overfllow: "clip"
        }), this.dom.applyStyleInPx(this.draggingColumn, a), o && this.renderContentOfDraggingColumn(a);
      }
    } else
      this.hideDraggingColumn();
  }
  /**
   * Renders the content of a dragging column.
   *
   * @param {GeoData} columnGeo - The geographic data of the column.
   *
   * @returns {number} The y-coordinate of the rendered content.
   */
  renderContentOfDraggingColumn(e) {
    const t = this.renderContentOfDraggingColumnForArea(e, "header", 0);
    this.renderContentOfDraggingColumnForArea(e, "body", t);
  }
  /**
   * Renders the content of the dragging column for a specific area.
   *
   * @param {GeoData} columnGeo - The geometry data of the dragging column.
   * @param {AreaIdent} areaIdent - The identifier of the area.
   * @param {number} [y=0] - The starting y-position.
   * @return {number} The final y-position after rendering all the content.
   */
  renderContentOfDraggingColumnForArea(e, t, o = 0) {
    const i = "center", s = this.tableModel.getAreaModel(t), r = s == null ? void 0 : s.getRowCount();
    if (r) {
      const l = e.index ?? 0, n = this.draggingColumn;
      for (let d = 0; d < r; d++) {
        const a = o, h = s.getRowHeight(d), u = { left: 0, width: e.width, height: h, top: a, index: d }, m = s.getValueAt(d, l), b = s.getCellRenderer(d, l), f = b ? "" : `${m}`, g = {
          parent: n,
          geo: u,
          rowIndex: d,
          columnIndex: l,
          areaIdent: t,
          sideIdent: i,
          text: f
        }, p = this.dom.addColumnDiv(g);
        let C;
        b && (C = b.render(p, d, l, t, s, m, this.dom.domService), C && this.cleanupFunctions[t].push(C));
        const y = s.getCustomClassesAt(d, l);
        y.length && this.dom.addClasses(y, p);
        const R = this.tableModel.getColumnDef(l);
        R && R.classes[t] && this.dom.addClasses(R.classes[t], p), this.dom.addColumnBorderDivs(this.tableOptions, n, u, t, i);
        const x = s.getCustomStyleAt(d, l);
        if (x)
          for (const S in x)
            this.dom.setStyle(p, S, x[S]);
        o = o + h;
      }
    }
    return o;
  }
  /**
   * Hides the dragging column by applying a 'display: none' style to it.
   * This method is protected and can only be accessed within the class.
   *
   * @return {void}
   */
  hideDraggingColumn() {
    this.dom.applyStyle(this.draggingColumn, {
      display: "none"
    });
  }
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
  renderDragTargetDiv(e, t, o, i, s) {
    const r = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass("ge-table-drop-zone", e)
    );
    return this.dom.setStyle(r, "left", `${t}px`), this.dom.setStyle(r, "top", `${o}px`), this.dom.setStyle(r, "width", `${i}px`), this.dom.setStyle(r, "height", `${s}px`), r;
  }
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
  renderSelectedBackgroundDiv(e, t, o, i, s, r, l, n, d, a, h) {
    let u = !1;
    if (!e && t && i.isSelectable(s, r) && this.getSelectionModel) {
      const m = this.getSelectionModel();
      if (m) {
        const b = m.getSelectionCount(s, r);
        u = b > 0;
        for (let f = 0; f < b; f++) {
          const g = this.dom.applyStylePosistionAbsolute(
            // ge-table-body-west-selected-range
            this.dom.createDivWithClass(`ge-table-${i.areaIdent}-${o}-selected-range`, l)
          );
          this.dom.setStyle(g, "left", `${n}px`), this.dom.setStyle(g, "top", `${d}px`), this.dom.setStyle(g, "width", `${a}px`), this.dom.setStyle(g, "height", `${h}px`);
        }
      }
    }
    return u;
  }
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
  renderCell({
    areaModel: e,
    areaIdent: t,
    sideIdent: o,
    rowIndex: i,
    columnIndex: s,
    left: r,
    top: l,
    width: n,
    height: d,
    parent: a,
    cellSelected: h,
    lastRowOfModel: u
  }) {
    const [m, b] = this.addAndRenderCellDiv({
      areaModel: e,
      areaIdent: t,
      sideIdent: o,
      rowIndex: i,
      index: s,
      left: r,
      width: n,
      height: d,
      top: l,
      parent: a,
      lastRowOfModel: u
    });
    h && this.dom.addClass(`ge-table-${t}-${o}-selected-range`, m), b && this.cleanupFunctions[t].push(b);
  }
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
  renderHeaderCellResizeHandle({ rowIndex: e, columnIndex: t, cellLeft: o, cellTop: i, cellWidth: s, cellHeight: r, parent: l }) {
    const n = this.dom.domService, d = this.tableOptions.columnResizeHandleWidthInPx ?? 2, a = n.createElement("div");
    n.setAttribute(a, "data-col-index", `${t}`), n.setAttribute(a, "data-row-index", `${e}`), n.setAttribute(a, "data-area", "header"), n.setAttribute(a, "data-ge-action", "resize-column"), n.addClass(a, "ge-table-column-resize-handle"), n.setStyle(a, "display", "clip"), n.setStyle(a, "position", "absolute"), n.setStyle(a, "cursor", "col-resize"), n.setStyle(a, "left", `${o + s - d}px`), n.setStyle(a, "top", `${i}px`), n.setStyle(a, "width", `${d}px`), n.setStyle(a, "height", `${r}px`), n.appendChild(l, a);
  }
}
class $e {
  constructor(e, t) {
    this.columnIndex = e, this.sortState = t;
  }
}
class Oe {
  constructor(e) {
    this.tableScope = e, this.tableScope.hostElement.addEventListener("change", this.onHostElementChanged.bind(this));
  }
  /**
   * Handles the onHostElementChanged event.
   * In case that the element is an input field, the tableScope.updateModelValueAfterEdit() method is triggered.
   *
   * @param {Event} event - The event object.
   *
   * @return {void}
   */
  onHostElementChanged(e) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
      const t = e.target, o = t.getAttribute("data-area"), i = t.getAttribute("data-row-index"), s = t.getAttribute("data-col-index");
      if (o && i && s) {
        const r = Z(o), l = Number(i), n = Number(s);
        this.tableScope.updateModelValueAfterEdit(r, l, n, t.value);
      }
    }
  }
}
class Le {
  constructor(e = -1, t = -1) {
    this.rowIndex = e, this.columnIndex = t;
  }
}
class te {
  constructor(e) {
    this.cells = e;
  }
  static createSingle(e, t) {
    return new te([new Le(e, t)]);
  }
}
class Pe {
  constructor(e) {
    var t, o;
    this.tableScope = e, (t = this.tableScope.tableOptions) != null && t.getSelectionModel && (this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel), (o = this.tableScope.tableOptions) != null && o.getFocusModel && (this.getFocusModel = this.tableScope.tableOptions.getFocusModel);
  }
  onMouseClicked(e, t) {
    var s, r, l, n, d, a, h;
    let o = !1, i = !1;
    if (this.getSelectionModel && this.getFocusModel) {
      const u = this.getSelectionModel(), m = this.getFocusModel();
      u && m && (m.hasFocus(e.rowIndex, e.columnIndex) || (m.setFocus(e.rowIndex, e.columnIndex), this.tableScope.onFocusChanged(m), o = !0), (s = e.originalEvent) != null && s.shiftKey || u.hasSelection() && (u.clear(), o = !0), (r = e.originalEvent) != null && r.shiftKey && this.previousEvt ? (u.addSelection(this.createRangeByEvents(e, this.previousEvt)), i = !0, o = !0) : (l = e.originalEvent) != null && l.altKey && ((n = e.originalEvent) != null && n.ctrlKey || (d = e.originalEvent) != null && d.metaKey) ? (u.removeSelection(A.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0) : (a = e.originalEvent) != null && a.ctrlKey || (h = e.originalEvent) != null && h.metaKey ? (u.addSelection(A.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0) : (u.firstClick(e.rowIndex, e.columnIndex), o = !0), this.tableScope.onSelectionChanged(u));
    }
    return i ? this.previousEvt = void 0 : this.previousEvt = e == null ? void 0 : e.clone(), o;
  }
  onActionTriggered(e) {
    if (this.getSelectionModel && this.getFocusModel) {
      const t = this.getSelectionModel(), o = this.getFocusModel();
      if (t && o) {
        if (e === "SELECT_ALL")
          return t.selectAll(), this.tableScope.repaint(), !0;
        if (e === "DESELECT_ALL")
          return t.clear(), this.tableScope.repaint(), !0;
        if (e === "TOGGLE_SELECTION") {
          const [i, s] = o.getFocus();
          return t.togglePoint(i, s), this.tableScope.repaint(), !0;
        }
      }
    }
    return !1;
  }
  createRangeByEvents(e, t) {
    t || (t = e);
    const o = Math.min(e.rowIndex, t == null ? void 0 : t.rowIndex), i = Math.max(e.rowIndex, t == null ? void 0 : t.rowIndex), s = Math.min(e.columnIndex, t == null ? void 0 : t.columnIndex), r = Math.max(e.columnIndex, t == null ? void 0 : t.columnIndex);
    return A.create({
      rowIndex1: o,
      columnIndex1: s,
      rowIndex2: i,
      columnIndex2: r
    });
  }
}
class He {
  get() {
    return {
      f2: "START_EDITING",
      space: "TOGGLE_SELECTION",
      "ctrl+num_add": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",
      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+x": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",
      "meta -": "DESELECT_ALL",
      arrowup: "NAVIGATE_UP",
      arrowdown: "NAVIGATE_DOWN",
      arrowleft: "NAVIGATE_LEFT",
      arrowright: "NAVIGATE_RIGHT",
      "meta+c": "COPY_2_CLIPBOARD",
      "ctrl+c": "COPY_2_CLIPBOARD"
    };
  }
}
class Be {
  get() {
    return {
      f2: "START_EDITING",
      space: "TOGGLE_SELECTION",
      "ctrl+num_add": "SELECT_ALL",
      "meta+a": "SELECT_ALL",
      "ctrl+a": "SELECT_ALL",
      "meta+x": "DESELECT_ALL",
      "meta+shift+a": "DESELECT_ALL",
      "ctrl+shift+a": "DESELECT_ALL",
      "ctrl+num_subtract": "DESELECT_ALL",
      "ctrl -": "DESELECT_ALL",
      arrowup: "NAVIGATE_UP",
      arrowdown: "NAVIGATE_DOWN",
      arrowleft: "NAVIGATE_LEFT",
      arrowright: "NAVIGATE_RIGHT",
      "meta+c": "COPY_2_CLIPBOARD",
      "ctrl+c": "COPY_2_CLIPBOARD"
    };
  }
}
class Ve {
  constructor(e) {
    this.tableScope = e, this.shortcutActionIdMapping = {}, this.listener = [], this.listener.push(e), this.init();
  }
  /**
   * Adds a listener to the list of listeners.
   *
   * @param {OnActionTriggeredIf} listener - The listener to be added.
   * @returns {void}
   */
  addListener(e) {
    this.listener.includes(e) || this.listener.push(e);
  }
  /**
   * Initializes the ShortcutService by assigning shortcut action id mappings based on the current operating system.
   * Also adds key down event listener to the table host element.
   */
  init() {
    this.assignPredefinedSystemShortcutMappings(), Object.assign(this.shortcutActionIdMapping, this.tableScope.tableOptions.shortcutActionIdMapping), this.isDebug() && console.debug("ShortcutService", this.shortcutActionIdMapping), this.tableScope.hostElement.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  assignPredefinedSystemShortcutMappings() {
    this.isMacintosh() ? Object.assign(this.shortcutActionIdMapping, new Be().get()) : Object.assign(this.shortcutActionIdMapping, new He().get());
  }
  isMacintosh() {
    return navigator.platform.indexOf("Mac") > -1;
  }
  isDebug() {
    return this.isLocalhost();
  }
  isLocalhost() {
    return location.hostname === "localhost" || location.hostname === "127.0.0.1";
  }
  onKeyDown(e) {
    const t = this.findEntity(e);
    t && this.emit(t) && (e.preventDefault(), e.stopPropagation());
  }
  emit(e) {
    this.isDebug() && console.debug("ShortcutService emit      :", e);
    let t = !1;
    for (const o of this.listener)
      o.onActionTriggered(e) && (t = !0);
    return t;
  }
  findEntity(e) {
    const t = this.getTokenByEvent(e);
    this.isDebug() && console.debug("ShortcutService tokens    :", t);
    for (const o in this.shortcutActionIdMapping) {
      const i = o.replace(/opt/g, "alt").replace(/cmd/g, "meta").split(/[+ ]/g).sort();
      if (this.areTokensEquals(t, i))
        return this.shortcutActionIdMapping[o];
    }
  }
  areTokensEquals(e, t) {
    if (e.length !== t.length || e.length === 0)
      return !1;
    for (let o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  getTokenByEvent(e) {
    const t = [];
    return e.altKey && t.push("alt"), e.shiftKey && t.push("shift"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), e.code && t.push(e.code.toLowerCase().replace(/key/g, "")), t.sort();
  }
  /**
   * Retrieves the shortcut action mapping object.
   *
   * @returns {ShortcutActionIdMapping} - The shortcut action mapping object.
   */
  getShortcutActionMapping() {
    return this.shortcutActionIdMapping;
  }
}
class re {
  onCheckboxChanged(e) {
  }
  onContextmenu(e) {
  }
  onModelChanged(e) {
  }
  onMouseClicked(e) {
  }
  onMouseDragging(e) {
  }
  onMouseDraggingEnd(e) {
  }
  onMouseMoved(e) {
  }
  onSelectionChanged(e) {
  }
  onFocusChanged(e) {
  }
}
class We {
  setStyle(e, t, o) {
    return e.style[t] = o, e;
  }
  appendText(e, t) {
    const o = this.createText(t);
    return this.appendChild(e, o), o;
  }
  addClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((o) => e.classList.add(o)) : e.classList.add(t), e;
  }
  removeClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((o) => e.classList.remove(o)) : e.classList.remove(t), e;
  }
  appendChild(e, t) {
    e.appendChild(t);
  }
  createElement(e) {
    return document.createElement(e);
  }
  createText(e) {
    return document.createTextNode(e);
  }
  setAttribute(e, t, o) {
    e.setAttribute(t, o);
  }
}
class Ge {
  render(e, t, o, i, s, r, l) {
    if (s.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-input-div");
      const n = s.getValueAt(t, o);
      e.innerHTML = `
            <input
                type="text"
                value="${n}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${i}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
    }
  }
}
class we {
  constructor(e = "none", t = "single") {
    this.selectionType = e, this.selectionMode = t, this.ranges = [], this.negativeRanges = [], this.allSelected = !1, this.silent = !1, this.listenerArr = [];
  }
  getEventSelectionChangedListeners() {
    return this.listenerArr;
  }
  addEventSelectionChangedListener(e) {
    this.listenerArr.includes(e) || this.listenerArr.push(e);
  }
  removeEventSelectionChangedListener(e) {
    const t = this.listenerArr.indexOf(e, 0);
    t > -1 && this.listenerArr.splice(t, 1);
  }
  //@AvoidDoubleExecution(100)
  fireChangeEvent() {
    this.silent || this.listenerArr.forEach((e) => e.onSelectionChanged(this));
  }
  firstClick(e, t) {
    this.selectionType === "row" ? this.addRange(A.singleRow(e)) : this.selectionType === "column" && this.addRange(A.singleColumn(t));
  }
  getSelectionCount(e, t) {
    let o = 0;
    for (const i of this.ranges)
      i.isInRange(e, t) && o++;
    return this.allSelected && o++, this.isInNegativeRange(e, t) && (o = 0), o;
  }
  isInNegativeRange(e, t) {
    for (const o of this.negativeRanges)
      if (o.isInRange(e, t))
        return !0;
    return !1;
  }
  getRanges() {
    return this.ranges;
  }
  clear() {
    this.ranges = [], this.negativeRanges = [], this.allSelected = !1, this.fireChangeEvent();
  }
  hasSelection() {
    return this.allSelected || !!this.ranges.length;
  }
  hasNoSelection() {
    return !this.hasSelection();
  }
  /**
   * Retrieves the merged row indices from the given range selection.
   *
   * @returns {number[]} Array of merged row indices
   */
  getMergedRowIndices() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.ranges)
      for (let o = t.r1; o <= t.r2; o++)
        !e.has(o) && !this.isInNegativeRange(o, 0) && e.add(o);
    return Array.from(e);
  }
  selectAll() {
    this.allSelected = !0, this.fireChangeEvent();
  }
  isAllSelected() {
    return this.allSelected;
  }
  addSelection(e) {
    this.addRange(e), this.fireChangeEvent();
  }
  removeSelection(e) {
    if (this.selectionType === "none")
      return;
    let t = e;
    this.selectionType === "row" ? t = A.singleRow(e.r1) : this.selectionType === "column" && (t = A.singleColumn(e.c1)), this.negativeRanges.push(t), this.fireChangeEvent();
  }
  togglePoint(e, t) {
    this.getSelectionCount(e, t) > 0 ? this.removeSelection(A.singleCell(e, t)) : this.addSelection(A.singleCell(e, t));
  }
  isSelected(e, t) {
    return this.getSelectionCount(e, t) > 0;
  }
  addRange(e) {
    this.selectionType !== "none" && (this.allSelected = !1, this.selectionMode === "single" && (this.ranges = []), this.selectionType === "row" ? (e.c1 = 0, e.c2 = Number.MAX_SAFE_INTEGER) : this.selectionType === "column" ? (e.r1 = 0, e.r2 = Number.MAX_SAFE_INTEGER) : this.selectionType === "cell" ? (e.r2 = e.r1, e.c2 = e.c1) : this.selectionType, this.ranges.push(e), this.fireChangeEvent());
  }
}
class Ne {
  constructor(e = "none") {
    this.selectionType = e, this.rowIndex = -1, this.columnIndex = -1, this.changed = !1, this.listenerArr = [];
  }
  getEventFocusChangedListeners() {
    return this.listenerArr;
  }
  addEventFocusChangedListener(e) {
    this.listenerArr.includes(e) || this.listenerArr.push(e);
  }
  removeEventFocusChangedListener(e) {
    const t = this.listenerArr.indexOf(e, 0);
    t > -1 && this.listenerArr.splice(t, 1);
  }
  //@AvoidDoubleExecution(100)
  fireChangeEvent() {
    this.listenerArr.forEach((e) => e.onFocusChanged(this));
  }
  clearChanged() {
    this.changed = !1;
  }
  hasChanged() {
    return this.changed;
  }
  clear() {
    this.rowIndex = -1, this.columnIndex = -1, this.fireChangeEvent();
  }
  setFocus(e, t) {
    (this.rowIndex !== e || this.columnIndex !== t) && (this.rowIndex = e, this.columnIndex = t, this.changed = !0, this.fireChangeEvent());
  }
  hasFocus(e, t) {
    return this.rowIndex === e && this.columnIndex === t;
  }
  getFocus() {
    return [this.rowIndex, this.columnIndex];
  }
}
class oe {
  constructor(e = new $(
    "❯",
    "",
    ["gt-table-icon-expanded"]
  ), t = new $(
    "❯",
    "transform: rotate(180deg) translate(-100%, -100%); transform-origin: 0 0;",
    ["ge-table-icon-collapsed"]
  )) {
    this.iconExpanded = e, this.iconCollapsed = t;
  }
  // `⊖ `,  `⊕ `;
}
const ze = new we(), je = new Ne("cell");
class U {
  constructor() {
    this.overflowX = "auto", this.overflowY = "auto", this.horizontalBorderVisible = !0, this.verticalBorderVisible = !0, this.footerSeparatorBorderVisible = !0, this.headerSeparatorBorderVisible = !0, this.fixedEastSeparatorBorderVisible = !0, this.fixedWestSeparatorBorderVisible = !0, this.tableTopBorderVisible = !0, this.tableBottomBorderVisible = !0, this.hoverRowVisible = !0, this.hoverColumnVisible = !0, this.columnsResizable = !0, this.columnsDraggable = !0, this.columnResizeHandleWidthInPx = 4, this.defaultRowHeights = {
      header: 34,
      body: 34,
      footer: 34
    }, this.footerVerticalSeparator = !1, this.headerToggleExpandCollapseIcons = !1, this.headerVerticalSeparator = !1, this.treeOptions = new fe(), this.headerGroupOptions = new oe(), this.showCheckboxWihoutExtraColumn = !1, this.externalFilterFunction = void 0, this.sortedOptions = new me(), this.sortOrder = ["asc", "desc"], this.getEditRenderer = (e, t) => new Ge(), this.getSelectionModel = () => ze, this.getFocusModel = () => je;
  }
}
const P = class P {
  /**
   * Returns the content to be copied based on the provided table model, selection model, and focus model.
   *
   * @param {TableModelIf} tableModel - The table model for data retrieval.
   * @param {SelectionModelIf} selectionModel - The selection model to determine the selected range.
   * @param {FocusModelIf} focusModel - The focus model to determine the focused cell.
   * @return {Promise<string>} A promise that resolves to the copied content as a string.
   * @throws {string} Throws an error if neither selection nor focus is defined.
   */
  createContent(e, t, o) {
    return new Promise((i, s) => {
      if (t != null && t.hasSelection()) {
        const r = this.mergeRanges(t.getRanges());
        if (r) {
          r.c2 = Math.min(r.c2, e.getColumnCount() - 1), r.r2 = Math.min(r.r2, e.getBodyModel().getRowCount() - 1);
          const l = [];
          for (let n = r.r1; n <= r.r2; n++) {
            const d = [];
            for (let a = r.c1; a <= r.c2; a++) {
              const h = t.isSelected(n, a) ? e.getBodyModel().getTextValueAt(n, a) : "";
              d.push(h);
            }
            l.push(d.join(P.columnSeparatorChar));
          }
          return i(l.join(P.rowSeparatorChar));
        }
      }
      if (o) {
        const [r, l] = o.getFocus(), n = e.getBodyModel().getTextValueAt(r, l);
        return i(n);
      }
      s("Cannot copy, neither selection nor focus defined.");
    });
  }
  /**
   * Copy the provided content to the clipboard.
   *
   * @param {string} content - The content to be copied.
   * @return {Promise<void>} A promise that resolves when the content has been successfully copied to the clipboard.
   */
  copyContent(e) {
    return navigator.clipboard.writeText(e);
  }
  /**
   * Asynchronously copies the content of a table to the clipboard.
   *
   * @param {TableModelIf} tableModel - The table model to copy from.
   * @param {SelectionModelIf} selectionModel - The selection model of the table.
   * @param {FocusModelIf} focusModel - The focus model of the table.
   * @returns {Promise<string>} A promise that resolves with the copied text if successful, or rejects if an error occurs.
   */
  copyToClipboard(e, t, o) {
    return new Promise((i, s) => {
      this.createContent(
        e,
        t,
        o
      ).then((r) => {
        r && this.copyContent(r).then((l) => {
          i(r);
        }).catch((l) => {
          s();
        });
      }).catch((r) => {
        s();
      });
    });
  }
  /**
   * Merges an array of CellRanges into a single merged CellRange.
   *
   * @param {CellRange[]} ranges - The array of CellRanges to be merged.
   * @return {CellRange | undefined} - The merged CellRange, or undefined if the ranges array is empty.
   */
  mergeRanges(e) {
    let t;
    for (const o of e)
      t ? (t.r1 = Math.min(t.r1, o.r1), t.c1 = Math.min(t.c1, o.c1), t.r2 = Math.max(t.r2, o.r2), t.c2 = Math.max(t.c2, o.c2)) : t = new A(o.r1, o.c1, o.r2, o.c2);
    return t;
  }
};
P.columnSeparatorChar = "	", P.rowSeparatorChar = `
`;
let N = P;
class Se extends Fe {
  constructor(e, t, o, i, s, r = new N()) {
    var d;
    if (super(e, t, new ve(o), i), this.eventListener = s, this.copyService = r, this.licenseManager = L.getInstance(), this.selectionService = new Pe(this), this.api = new Me(this), this.mouseStartAction = "", this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, this.lastDragFrom = -1, this.lastDragTo = -1, this.firstDraggingRendering = !0, s || (this.eventListener = new re()), (d = this.tableOptions) != null && d.autoRestoreOptions) {
      const a = this.tableOptions.autoRestoreOptions, h = a.getStorageKeyFn;
      h && (a.autoRestoreScrollPosition && (this.storeScrollPosStateService = new Ee(h)), a.autoRestoreCollapsedExpandedState && (this.storeStateCollapsedExpandService = new ke(h)), a.autoRestoreSortingState && (this.storeSortingService = new Te(h)));
    }
    this.mouseHandler = new Ae(this), this.inputHandler = new Oe(this), this.shortcutService = new Ve(this), this.shortcutService.addListener(this.selectionService);
    const l = this.getSelectionModel ? this.getSelectionModel() : void 0;
    l && l.addEventSelectionChangedListener(this);
    const n = this.getFocusModel ? this.getFocusModel() : void 0;
    n && n.addEventFocusChangedListener(this);
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
  static create(e, t, o = new U(), i = new re(), s = new We(), r = new N()) {
    return new Se(e, t, s, o, i, r);
  }
  /**
   * Triggers an action based on the provided actionId.
   *
   * This function can be invoked manually via the table API or by keyboard shortcuts.
   *
   * @param {ActionId} actionId - The identifier of the action to be triggered.
   * @return {boolean} - Returns true if the action was triggered successfully, false otherwise.
   */
  onActionTriggered(e) {
    if (e === "NAVIGATE_DOWN" && this.changeFocusCell(0, 1) || e === "NAVIGATE_UP" && this.changeFocusCell(0, -1) || e === "NAVIGATE_LEFT" && this.changeFocusCell(-1, 0) || e === "NAVIGATE_RIGHT" && this.changeFocusCell(1, 0))
      return !0;
    if (e === "START_EDITING" && this.getFocusModel) {
      const t = this.getFocusModel();
      if (t) {
        const [o, i] = t.getFocus();
        this.tableModel.getBodyModel().isEditable(o, i) && (this.clearSelection(), this.initRenderEditor(o, i));
      }
      return !0;
    }
    if (e === "COPY_2_CLIPBOARD") {
      const t = this.getSelectionModel ? this.getSelectionModel() : void 0, o = this.getFocusModel ? this.getFocusModel() : void 0;
      this.copyService.createContent(this.tableModel, t, o).then((i) => this.copyService.copyContent(i));
    }
    return !1;
  }
  updateModelValueAfterEdit(e, t, o, i) {
    e === "body" && this.tableModel.getAreaModel(e).setValue(t, o, i) && (this.resetEditorRenderer(), this.repaint(), this.eventListener.onModelChanged(te.createSingle(t, o)), this.hostElement.focus());
  }
  /**
   * Retrieves the TableApi object.
   *
   * @return {TableApi} The TableApi object.
   */
  getApi() {
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
  firstInit() {
    var e;
    return this.tableModel.init(), (e = this.tableOptions) != null && e.externalFilterFunction && this.externalFilterChanged(!1), this.autoRestoreCollapsedExpandedState(), this.autoRestoreSortingState(), this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows(), this.autoRestoreScrollPosition(), this;
  }
  /**
   * Creates a GeMouseEvent object based on a MouseEvent.
   *
   * @param {MouseEvent} mouseEvent - The MouseEvent object to create the GeMouseEvent from.
   * @return {GeMouseEvent} - The created GeMouseEvent object.
   */
  createGeMouseEvent(e) {
    const t = new Q();
    if (t.originalEvent = e, e) {
      const o = e.target;
      if ([t.areaIdent, t.sideIdent] = this.getAreaAndSideIdentByAttr(o), t.rowIndex = this.getNumberByAttr(o, "data-row-index"), t.columnIndex = this.getNumberByAttr(o, "data-col-index"), t.action = this.getStringByAttr(o, "data-ge-action"), t.areaIdent) {
        const i = this.tableModel.getAreaModel(t.areaIdent);
        t.rowTop = i.getYPosByRowIndex(t.rowIndex);
      }
      if (t.columnLeft = this.tableModel.getXPosByColumnIndex(t.columnIndex), e.ctrlKey && e.altKey) {
        const i = e.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight, s = e.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;
        this.debugOnce(s, i);
      }
    }
    return t;
  }
  /**
   * Handles the mouse down event.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   * @return {void}
   */
  onMouseDown(e) {
    e.columnIndex > -1 && e.action && ["resize-column", "drag-column"].includes(e.action) && (this.mouseStartWidth = this.tableModel.getColumnWidth(e.columnIndex), this.mouseStartAction = e.action, this.mouseStartColumnIndex = e.columnIndex, this.mouseStartAction === "drag-column" && (this.firstDraggingRendering = !0, this.dragFrom = this.mouseStartColumnIndex));
  }
  /**
   * Handles mouse dragging on the frame.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   * @param startMouseEvent
   */
  mouseDraggingOnFrame(e, t) {
    this.eventListener.onMouseDragging(e), this.mouseEvent = e, this.mouseStartColumnIndex > -1 && this.mouseStartAction === "resize-column" && this.tableOptions.columnsResizable ? this.resizeColumn(e) : this.mouseStartAction === "drag-column" && e.columnIndex > -1 && this.tableOptions.columnsDraggable && (this.draggingTargetColumnIndex = e.columnIndex, this.dragTo = this.draggingTargetColumnIndex, this.dragFrom > -1 && this.dragTo > -1 && this.dragFrom !== this.dragTo && (this.lastDragFrom === this.dragTo && this.lastDragTo === this.dragFrom || (this.tableModel.changeColumnOrder(this.dragFrom, this.dragTo), this.lastDragFrom = this.dragFrom, this.lastDragTo = this.dragTo, this.dragFrom = this.dragTo, this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows())), t && (this.adjustDraggingColumn(e, t.columnIndex, this.firstDraggingRendering), this.firstDraggingRendering = !1), this.repaint());
  }
  /**
   * Handles the end of mouse dragging event on a frame.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event object.
   *
   * @returns {void}
   */
  mouseDraggingEndOnFrame(e) {
    this.eventListener.onMouseDraggingEnd(e), this.draggingTargetColumnIndex = -1, this.mouseStartAction === "resize-column" ? this.resizeColumn(e) : this.mouseStartAction === "drag-column" && (this.hideDraggingColumn(), this.repaint()), this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, this.firstDraggingRendering = !0, this.mouseStartAction = "";
  }
  /**
   * Handles the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   * @return {void}
   */
  mouseMove(e) {
    this.eventListener.onMouseMoved(e), this.adjustHoverRows(e), this.adjustHoverColumns(e);
  }
  /**
   * Triggers the context menu event based on the mouse move event.
   *
   * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
   * @return {void}
   */
  contextmenu(e) {
    this.eventListener.onContextmenu(e);
  }
  /**
   * Toggles the expand or collapse state of all items in the body area model.
   *
   * @param {boolean} [expand=true] - Whether to expand or collapse all items. Default is true.
   *
   * @return {void}
   */
  toggleExpandCollapseAll(e = !0) {
    var o;
    const t = this.tableModel.getBodyModel();
    K(t) && (t.toggleExpandCollapseAll(e), this.repaint(), (o = this.storeStateCollapsedExpandService) == null || o.collapsedStateAll(e));
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
  toggleRowCheckbox(e, t, o) {
    var n;
    const i = this.tableModel.getAreaModel(o), s = i.isRowChecked(e), r = s === void 0 || s === "semi" || s === "none";
    i.setRowChecked(e, r), this.repaint();
    const l = (n = i.rowSelectionModel) == null ? void 0 : n.getCheckedRows();
    this.eventListener.onCheckboxChanged(l || []);
  }
  /**
   * Handle mouse click events.
   *
   * @param {GeMouseEvent} evt - The mouse click event.
   * @param {GeMouseEvent | undefined} previousEvt - The previous mouse click event, if any.
   * @returns {void}
   */
  onMouseClicked(e, t) {
    let o = this.selectionService.onMouseClicked(e, t);
    if (!o && this.getFocusModel) {
      this.resetEditorRenderer();
      const i = this.getFocusModel();
      i && (o = i.hasChanged(), i.clearChanged());
    }
    return o;
  }
  debounceRepaint() {
    this.debounce(this.repaint.bind(this), 1);
  }
  publishGeMouseEvent(e) {
    this.eventListener.onMouseClicked(e);
  }
  onFocusChanged(e) {
    this.eventListener.onFocusChanged(e);
  }
  onSelectionChanged(e) {
    this.eventListener.onSelectionChanged(e);
  }
  /**
   * Updates the table (repaint) when an external filter is changed.
   *
   * @param {boolean} clearSelection - Indicates whether to clear the selection model or not. Default value is true.
   * @return {void}
   */
  externalFilterChanged(e = !0) {
    const t = this.tableOptions.externalFilterFunction;
    t && (e && this.clearSelectionModel(), this.tableModel.externalFilterChanged(t), this.scrollViewport.scrollTo(0, 0), this.tableModel.recalcHeightAndPadding(), this.resetSizeOfWrapperDiv(), this.repaint());
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
  onHeaderDblClicked(e, t, o) {
    var s, r;
    const i = this.tableModel.getColumnDef(o);
    if (i != null && i.sortable && i.sortable()) {
      e.preventDefault(), e.stopPropagation();
      const l = i.sortStatesOrder ? i.sortStatesOrder : this.tableOptions.sortOrder, n = i.sortState ?? "", d = l[(l.indexOf(n) + 1) % l.length], a = new $e(o, d);
      this.tableModel.doSort([a]) && ((s = this.tableModel.getColumnDefs()) == null || s.forEach((u) => u.sortState = ""), i.sortState = d), this.repaint(), (r = this.storeSortingService) == null || r.setSortItems([a]);
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
  scrollToPixel(e, t) {
    this.scrollViewport.scrollTo(e, t);
  }
  /**
   * Scrolls to the specified index in the table.
   *
   * @param {number} _indexX - The horizontal index of the table where scrolling is needed.
   * @param {number} indexY - The vertical index of the table where scrolling is needed.
   * @return {void}
   */
  scrollToIndex(e, t) {
    const i = this.tableModel.getAreaModel("body").getYPosByRowIndex(t);
    this.scrollToPixel(0, i);
  }
  /**
   * Sets the selection model for the table.
   *
   * @param {SelectionModel} sm - The selection model to be set.
   * @param {boolean} rerender - Optional parameter indicating whether to rerender the table after setting the selection model. Default value is false.
   *
   * @return {void} - This method does not return any value.
   */
  setSelectionModel(e, t = !1) {
    const o = () => e;
    this.tableOptions.getSelectionModel = o, this.getSelectionModel = o, this.selectionService.getSelectionModel = o, t && this.repaint();
  }
  toggleHeaderGroup(e) {
    const t = this.tableModel.getAreaModel("header");
    "columnDefs" in this.tableModel && (this.tableModel.columnDefs = t.toggleHeaderGroup(e), console.info("####### !!!!!! *******, this.tableModel.columnDefs")), this.firstInit();
  }
  /**
   * Retrieves the selection model.
   * @returns {SelectionModelIf | undefined} The selection model if available, otherwise undefined.
   */
  selectionModel() {
    if (this != null && this.getSelectionModel)
      return this.getSelectionModel();
  }
  /**
   * Retrieves the focus model.
   *
   * @returns {FocusModelIf | undefined} The focus model if it exists, or undefined otherwise.
   */
  focusModel() {
    if (this != null && this.getFocusModel)
      return this.getFocusModel();
  }
  setDragging(e) {
    this.dragging = e, this.dragging ? (this.storeColumnWidths(), this.lastDragFrom = -1, this.lastDragTo = -1) : this.storedColumnWidths = [];
  }
  /**
   * Changes the focus cell using the specified deltas.
   *
   * @param {number} dx - The delta for the column index.
   * @param {number} dy - The delta for the row index.
   * @return {boolean} - True if the focus cell was changed, false otherwise.
   */
  changeFocusCell(e, t) {
    if (!this.isEditing() && this.getFocusModel) {
      const o = this.getFocusModel();
      if (o) {
        const [i, s] = o.getFocus();
        return o.setFocus(i + t, s + e), this.repaint(), !0;
      }
    }
    return !1;
  }
  /**
   * Resizes the column based on the mouse event.
   *
   * @param {GeMouseEvent} mouseEvent - The mouse event that triggered the resize.
   */
  resizeColumn(e) {
    this.tableModel.setColumnWidth(this.mouseStartColumnIndex, this.mouseStartWidth + e.draggingX), this.tableModel.recalcPadding(), this.resetSizeOfWrapperDiv(), this.adjustContainersAndRows();
  }
  /**
   * Clears the selection model, if available.
   *
   * @return {void}
   */
  clearSelectionModel() {
    var e;
    this.getSelectionModel && ((e = this.getSelectionModel()) == null || e.clear());
  }
  debugOnce(e, t) {
    var o;
    console.clear(), console.info("this.hostElement.offsetTop", this.hostElement.offsetTop), console.info("this.hostElement.scrollHeight", this.hostElement.scrollHeight), console.info("this.scrollViewportTop", this.scrollTop), console.info("this.areaHeaderCenter.parent.clientHeight", this.areaHeaderCenter.parent.clientHeight), console.info("bodyY", t), console.info("bodyX", e), console.info("rows", this.firstVisibleRowIndex), console.info(""), console.info("this.tableModel", this.tableModel), console.info(""), console.info("this.mouseMoveEvent.clientX", (o = this.mouseHandler.mouseEvent) == null ? void 0 : o.clientX), console.info("this.hostElement.offsetLeft", this.hostElement.offsetLeft), console.info("this.areaBodyWestGeo.width", this.areaBodyWestGeo.width);
  }
  /**
   * Restores the scroll position of the table if auto restore options are enabled.
   *
   *
   * @returns {void}
   */
  autoRestoreScrollPosition() {
    var e;
    if ((e = this.tableOptions) != null && e.autoRestoreOptions && this.storeScrollPosStateService && this.tableOptions.autoRestoreOptions.autoRestoreScrollPosition) {
      const o = this.storeScrollPosStateService.getScrollOffset();
      o && this.scrollViewport.scrollTo(...o);
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
  autoRestoreSortingState() {
    var e, t;
    if ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.autoRestoreSortingState && this.storeSortingService) {
      const o = this.storeSortingService.getSortItems();
      o != null && o.length && this.tableModel.getBodyModel().doSort(o);
    }
  }
  /**
   * Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
   * specified in the tableOptions. This method is private and should not be called directly.
   *
   * @private
   */
  autoRestoreCollapsedExpandedState() {
    var e, t;
    if ((t = (e = this.tableOptions) == null ? void 0 : e.autoRestoreOptions) != null && t.getRowId && this.storeStateCollapsedExpandService) {
      const o = this.tableOptions.autoRestoreOptions, i = o.getRowId;
      if (o.autoRestoreCollapsedExpandedState && i) {
        const s = this.storeStateCollapsedExpandService.collapsedExpandedStateGet(), r = this.tableModel.getAreaModel("body");
        if (K(r)) {
          const l = r, n = r.getRowCount();
          for (let d = 0; d < n; d++) {
            const a = r.getRowByIndex(d);
            if (a)
              if (s.allExpanded)
                a.expanded = !0;
              else if (s.allCollapsed)
                a.expanded = !1;
              else {
                const h = i(a.data);
                s.mode === "expanded" ? a.expanded = this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h) : s.mode === "collapsed" && (a.expanded = !this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h));
              }
          }
          l.recalcVisibleTreeRows();
        }
      }
    }
  }
}
const z = class z {
};
z.themes = ["light", "combat", "paper", "blackboard"], z.vars = {
  light: `html[data-theme="light"] {
  --ge-table-bg: rgba(255,255,255, 0.5);
  --ge-table-header-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-center-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-header-west-text: #000;
  --ge-table-header-center-text: #000;
  --ge-table-header-east-text: #000;
  --ge-table-header-west-horizontal-border: #ddd;
  --ge-table-header-west-vertical-border: #ccc;
  --ge-table-header-center-horizontal-border: #ddd;
  --ge-table-header-center-vertical-border: #ccc;
  --ge-table-header-east-horizontal-border: #ddd;
  --ge-table-header-east-vertical-border: #ccc;
  --ge-table-body-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-body-center-bg: rgba(255,255,255, 0.5);
  --ge-table-body-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-body-west-text: #000;
  --ge-table-body-center-text: #000;
  --ge-table-body-east-text: #000;
  --ge-table-body-west-horizontal-border: #ddd;
  --ge-table-body-west-vertical-border: #ccc;
  --ge-table-body-center-horizontal-border: #bbb;
  --ge-table-body-center-vertical-border: #ddd;
  --ge-table-body-east-horizontal-border: #ddd;
  --ge-table-body-east-vertical-border: #ccc;
  --ge-table-body-west-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-center-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-east-selected-range-bg: rgba(0, 152, 219, 0.4);
  --ge-table-body-west-selected-range-text: #000;
  --ge-table-body-center-selected-range-text: #000;
  --ge-table-body-east-selected-range-text: #000;
  --ge-table-footer-west-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-center-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-east-bg: rgba(233, 233, 233, 0.5);
  --ge-table-footer-west-text: #000;
  --ge-table-footer-center-text: #000;
  --ge-table-footer-east-text: #000;
  --ge-table-footer-west-horizontal-border: #ddd;
  --ge-table-footer-west-vertical-border: #ccc;
  --ge-table-footer-center-horizontal-border: #ddd;
  --ge-table-footer-center-vertical-border: #ccc;
  --ge-table-footer-east-horizontal-border: #ddd;
  --ge-table-footer-east-vertical-border: #ccc;
  --ge-table-border: #ccc;
  --ge-table-row-odd-bg: transparent;
  --ge-table-row-even-bg: transparent;
  --ge-table-column-odd-bg: transparent;
  --ge-table-column-even-bg: transparent;
  --ge-table-hover-column-bg: rgba(0, 224, 255, 0.27);
  --ge-table-hover-row-bg: rgba(0, 224, 255, 0.27);
  --ge-table-focus-border: rgb(0, 255, 255);
  --ge-table-color-error-text: #e00034;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: rgb(0, 255, 255);
  --ge-table-dragged-col-div-bg: lightcyan;
  --ge-table-drop-zone-bg: rgba(244, 255, 242, 0.6);
}`,
  combat: `html[data-theme="combat"] {
  --ge-table-bg: #101010;
  --ge-table-header-west-bg: #101010;
  --ge-table-header-center-bg: #101010;
  --ge-table-header-east-bg: #101010;
  --ge-table-header-west-text: oklch(100% 0 0);
  --ge-table-header-center-text: oklch(100% 0 0);
  --ge-table-header-east-text: oklch(100% 0 0);
  --ge-table-header-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-bg: #101010;
  --ge-table-body-center-bg: #101010;
  --ge-table-body-east-bg: #101010;
  --ge-table-body-west-text: #b6b4b4;
  --ge-table-body-center-text: #b6b4b4;
  --ge-table-body-east-text: #b6b4b4;
  --ge-table-body-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-center-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-east-selected-range-bg: oklch(20% 0.2 39.6 / 37%);
  --ge-table-body-west-selected-range-text: #f00032;
  --ge-table-body-center-selected-range-text: #f00032;
  --ge-table-body-east-selected-range-text: #f00032;
  --ge-table-footer-west-bg: #101010;
  --ge-table-footer-center-bg: #101010;
  --ge-table-footer-east-bg: #101010;
  --ge-table-footer-west-text: oklch(100% 0 0);
  --ge-table-footer-center-text: oklch(100% 0 0);
  --ge-table-footer-east-text: oklch(100% 0 0);
  --ge-table-footer-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-border: oklch(100% 0 0 / 0%);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: oklch(34% 0.25 3.6 / 27%);
  --ge-table-hover-row-bg: oklch(34% 0.25 3.6 / 27%);
  --ge-table-focus-border: oklch(40% 0.25 3.6);
  --ge-table-color-error-text: oklch(65% 0.31 43.2);
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(63% 0.31 43.2);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #101010;
}`,
  paper: `html[data-theme="paper"] {
  --ge-table-bg: #e7e5df;
  --ge-table-header-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-center-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-header-west-text: #111;
  --ge-table-header-center-text: #111;
  --ge-table-header-east-text: #111;
  --ge-table-header-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-header-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-body-center-bg: #e7e5df;
  --ge-table-body-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-body-west-text: #000;
  --ge-table-body-center-text: #000;
  --ge-table-body-east-text: #000;
  --ge-table-body-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-body-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-body-west-selected-range-bg: #cfcdc2;
  --ge-table-body-center-selected-range-bg: #cfcdc2;
  --ge-table-body-east-selected-range-bg: #cfcdc2;
  --ge-table-body-west-selected-range-text: #000;
  --ge-table-body-center-selected-range-text: #000;
  --ge-table-body-east-selected-range-text: #000;
  --ge-table-footer-west-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-center-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-east-bg: oklch(80% 0.02 99 / 48%);
  --ge-table-footer-west-text: #111;
  --ge-table-footer-center-text: #111;
  --ge-table-footer-east-text: #111;
  --ge-table-footer-west-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-west-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-center-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-horizontal-border: oklch(100% 0 0 / 0%);
  --ge-table-footer-east-vertical-border: oklch(100% 0 0 / 0%);
  --ge-table-border: oklch(100% 0 0 / 0%);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: oklch(5% 0.2 266.40000000000003 / 9%);
  --ge-table-hover-row-bg: oklch(5% 0.2 266.40000000000003 / 9%);
  --ge-table-focus-border: oklch(100% 0.19 205.20000000000002);
  --ge-table-color-error-text: oklch(45% 0.25 43.2);
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(100% 0.19 205.20000000000002 / 71%);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #e7e5df;
}`,
  blackboard: `html[data-theme="dark"] {
  --ge-table-bg: #0c1021;
  --ge-table-header-west-bg: #0c1021;
  --ge-table-header-center-bg: #0c1021;
  --ge-table-header-east-bg: #0c1021;
  --ge-table-header-west-text: #e0df85;
  --ge-table-header-center-text: #e0df85;
  --ge-table-header-east-text: #e0df85;
  --ge-table-header-west-horizontal-border: transparent;
  --ge-table-header-west-vertical-border: transparent;
  --ge-table-header-center-horizontal-border: transparent;
  --ge-table-header-center-vertical-border: transparent;
  --ge-table-header-east-horizontal-border: transparent;
  --ge-table-header-east-vertical-border: transparent;
  --ge-table-body-west-bg: #0c1021;
  --ge-table-body-center-bg: #0c1021;
  --ge-table-body-east-bg: #0c1021;
  --ge-table-body-west-text: #a7a7a7;
  --ge-table-body-center-text: #a7a7a7;
  --ge-table-body-east-text: #a7a7a7;
  --ge-table-body-west-horizontal-border: transparent;
  --ge-table-body-west-vertical-border: transparent;
  --ge-table-body-center-horizontal-border: transparent;
  --ge-table-body-center-vertical-border: transparent;
  --ge-table-body-east-horizontal-border: transparent;
  --ge-table-body-east-vertical-border: transparent;
  --ge-table-body-west-selected-range-bg: #758129;
  --ge-table-body-center-selected-range-bg: #758129;
  --ge-table-body-east-selected-range-bg: #758129;
  --ge-table-body-west-selected-range-text: oklch(100% 0 0);
  --ge-table-body-center-selected-range-text: oklch(100% 0 0);
  --ge-table-body-east-selected-range-text: oklch(100% 0 0);
  --ge-table-footer-west-bg: #0c1021;
  --ge-table-footer-center-bg: #0c1021;
  --ge-table-footer-east-bg: #0c1021;
  --ge-table-footer-west-text: #e0df85;
  --ge-table-footer-center-text: #e0df85;
  --ge-table-footer-east-text: #e0df85;
  --ge-table-footer-west-horizontal-border: transparent;
  --ge-table-footer-west-vertical-border: transparent;
  --ge-table-footer-center-horizontal-border: transparent;
  --ge-table-footer-center-vertical-border: otransparent;
  --ge-table-footer-east-horizontal-border: transparent;
  --ge-table-footer-east-vertical-border: transparent;
  --ge-table-border: oklch(0% 0 0);
  --ge-table-row-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-row-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-odd-bg: oklch(100% 0 0 / 0%);
  --ge-table-column-even-bg: oklch(100% 0 0 / 0%);
  --ge-table-hover-column-bg: #a9a9a9;
  --ge-table-hover-row-bg: #a9a9a9;
  --ge-table-focus-border: #e1ff00;
  --ge-table-color-error-text: #ff0040;
  --ge-table-tree-arrow-collapsed-color: #e00034;
  --ge-table-column-resize-handle-border: oklch(0% 0 0);
  --ge-table-dragged-col-div-bg: #2c2e33;
  --ge-table-drop-zone-bg: #758129;
}`
};
let ne = z;
class le {
  constructor(e, t = !0, o, i, s = 0, r = !1, l = !1) {
    this.data = e, this.expanded = t, this.children = o, this.parent = i, this.deep = s, this.checked = r, this.keep = l, this.type = "TreeRow";
  }
}
class q {
  static buildTreeRows(e, t = "children", o = 12) {
    const i = [];
    for (const s of e)
      i.push(q.buildTreeRow(s, t, void 0, 0, o));
    return i;
  }
  static buildTreeRow(e, t = "children", o = new le(e, !0, [], void 0, 0), i = 0, s = 12) {
    var l;
    if (i > s)
      return console.warn("Max deep limit reached: ", i), o;
    const r = e[t];
    if (r)
      for (const n of r) {
        const d = new le(n, !0, [], o, i + 1);
        if ((l = o.children) == null || l.push(d), q.buildTreeRow(
          n,
          t,
          d,
          i + 1
        ), i > s)
          return console.warn("Max deep limit reached: ", i), o;
      }
    return o;
  }
}
class B {
  constructor(e = 34, t = 34, o = 34) {
    this.header = e, this.body = t, this.footer = o;
  }
}
class w {
  constructor(e = 100, t = "px") {
    this.value = e, this.unit = t;
  }
}
const Xe = () => !0, ae = () => !1;
class V {
  constructor(e, t, o = new w(100, "px"), i = new T(), s = new T(), r = new w(100, "px"), l = new w(100, "px"), n, d, a, h, u, m, b, f, g = () => this.visible) {
    this.property = e, this.headerLabel = t, this.width = o, this.classes = i, this.rendererMap = s, this.minWidth = r, this.maxWidth = l, this.sortable = n, this.sortComparator = d, this.sortState = a, this.sortStatesOrder = h, this.sortIconVisible = u, this.editable = m, this.getEditRenderer = b, this.editInputPipe = f, this.isVisible = g, this.visible = !0;
  }
  static bodyRenderer(e) {
    return new T(
      void 0,
      e,
      void 0
    );
  }
  static create(e) {
    const t = new T(
      e.headerRenderer,
      e.bodyRenderer,
      e.footerRenderer
    ), o = new T(
      e.headerClasses,
      e.bodyClasses,
      e.footerClasses
    ), i = e.sortIconVisible ?? e.sortable ?? ae, s = e.editable ?? e.editable ?? ae, r = e.isVisible ?? e.isVisible ?? Xe;
    return new V(
      e.property ?? "",
      e.headerLabel ?? "",
      e.width ?? new w(100, "px"),
      o,
      t,
      e.minWidth ?? new w(100, "px"),
      e.maxWidth ?? new w(100, "px"),
      e.sortable,
      e.sortComparator,
      e.sortState,
      e.sortStatesOrder,
      i,
      s,
      e.getEditRenderer,
      e.editInputPipe,
      r
    );
  }
}
const tt = new w(300, "px"), ot = new w(290, "px"), it = new w(280, "px"), st = new w(270, "px"), rt = new w(260, "px"), nt = new w(250, "px"), lt = new w(240, "px"), at = new w(230, "px"), dt = new w(220, "px"), ht = new w(210, "px"), de = new w(200, "px"), ct = new w(190, "px"), ut = new w(180, "px"), gt = new w(170, "px"), pt = new w(160, "px"), bt = new w(150, "px"), ft = new w(140, "px"), mt = new w(130, "px"), wt = new w(120, "px"), St = new w(110, "px"), xt = new w(100, "px"), Ct = new w(90, "px"), yt = new w(80, "px"), vt = new w(70, "px"), Rt = new w(60, "px"), At = new w(50, "px"), Mt = new w(40, "px"), Et = new w(30, "px"), It = new w(20, "px"), kt = new w(10, "px"), Tt = new w(0, "px");
class ie {
  constructor(e, t = [], o = -1) {
    this.areaIdent = e, this.columnDefs = t, this.defaultRowHeight = o, this.rowSelectionModel = void 0, this.yPositions = [], this.cellRenderers = t.map((i) => i.rendererMap[e]);
  }
  getTextValueAt(e, t) {
    return "" + this.getValueAt(e, t);
  }
  getTooltipAt(e, t) {
    return "";
  }
  getCellRenderer(e, t) {
    if (t < this.cellRenderers.length)
      return this.cellRenderers[t];
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getRowByIndex(e) {
  }
  isRowCheckable(e) {
    return !0;
  }
  isRowChecked(e) {
    var o;
    const t = this.getRowByIndex(e);
    return (o = this.rowSelectionModel) == null ? void 0 : o.isRowChecked(t);
  }
  setRowChecked(e, t) {
    if (this.rowSelectionModel) {
      const o = this.getRowByIndex(e);
      this.rowSelectionModel.checkRow(o, t);
    }
  }
  getMaxColspan() {
    return 31;
  }
  getMaxRowspan() {
    return 31;
  }
  getYPosByRowIndex(e) {
    return this.defaultRowHeight > 0 ? this.defaultRowHeight * e : this.yPositions[e];
  }
  init() {
    !this.yPositions.length && this.getRowCount() !== void 0 && this.defaultRowHeight === -1 && this.calcYPositions();
  }
  isFilterable() {
    return this.areaIdent === "body";
  }
  doSort(e) {
    return !1;
  }
  isEditable(e, t) {
    var i, s;
    const o = (i = this.columnDefs) == null ? void 0 : i[t];
    return ((s = o == null ? void 0 : o.editable) == null ? void 0 : s.call(o)) ?? !1;
  }
  setValue(e, t, o) {
    var l;
    const i = (l = this.columnDefs[t]) == null ? void 0 : l.editInputPipe;
    i && (o = i(o, e, t));
    const s = this.getRowByIndex(e), r = this.columnDefs[t].property;
    return r.includes(".") ? this.setPropertyValue(s, r.split("."), o) : (s[r] = o, !0);
  }
  isSelectable(e, t) {
    return !0;
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.cellRenderers, e, t);
  }
  setPropertyValue(e, t, o) {
    const i = t.shift();
    if (i) {
      const s = e[i];
      return s && t.length ? this.setPropertyValue(s, t, o) : (e[i] = o, !0);
    }
    return !1;
  }
  arrayMove(e, t, o) {
    const i = e.splice(t, 1)[0];
    return e.splice(o, 0, i), e;
  }
  calcYPositions() {
    const e = this.getRowCount();
    this.yPositions = new Array(e + 1), this.yPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.yPositions[t + 1] = this.getRowHeight(t) + this.yPositions[t];
  }
}
class D extends ie {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.arr = t, this.defaultRowHeight = o, this.columnDefs = i, this.filteredArr = [...t];
  }
  externalFilterChanged(e) {
    this.filteredArr = this.arr ? this.arr.filter(e) : [];
  }
  getRowCount() {
    return this.filteredArr ? this.filteredArr.length : 0;
  }
  getValueAt(e, t) {
    return this.filteredArr[e][t];
  }
  setValue(e, t, o) {
    var s;
    const i = (s = this.columnDefs[t]) == null ? void 0 : s.editInputPipe;
    return i && (o = i(o, e, t)), this.arr[e][t] = o, !0;
  }
  getRowByIndex(e) {
    return this.filteredArr[e];
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  changeColumnOrder(e, t) {
    this.filteredArr.forEach((o) => this.arrayMove(o, e, t)), super.changeColumnOrder(e, t);
  }
}
class _ {
  constructor(e = "body") {
    this.areaIdent = e, this.rowSelectionModel = void 0;
  }
  getRowCount() {
    return 0;
  }
  getValueAt(e, t) {
    return "";
  }
  getTextValueAt(e, t) {
    return "";
  }
  getCellRenderer(e, t) {
  }
  getRowHeight(e) {
    return 0;
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getRowByIndex(e) {
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  setRowChecked(e, t) {
  }
  getTooltipAt(e, t) {
    return "";
  }
  getMaxColspan() {
    return 0;
  }
  getMaxRowspan() {
    return 0;
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  init() {
  }
  externalFilterChanged(e) {
  }
  isFilterable() {
    return !1;
  }
  doSort(e) {
    return !1;
  }
  isEditable(e, t) {
    return !1;
  }
  setValue(e, t, o) {
    return !1;
  }
  isSelectable(e, t) {
    return !1;
  }
  changeColumnOrder(e, t) {
  }
}
class Ye {
  flattenTree(e, t = []) {
    var o;
    for (const i of e)
      this.isVisible(i) && t.push(i), (o = i.children) != null && o.length && this.flattenTree(i.children, t);
    return t;
  }
  isVisible(e) {
    return e.parent ? e.parent.expanded ? this.isVisible(e.parent) : !1 : !0;
  }
}
class xe {
  genericSortComparator(e, t, o) {
    if (typeof e == "number" && typeof t == "number")
      return o * (e - t);
    if (typeof e == "string" && typeof t == "string")
      return o * e.localeCompare(t);
    if (typeof e == "boolean" && typeof t == "boolean")
      return o * ((e ? -1 : 1) - (t ? -1 : 1));
    if (e instanceof Date && t instanceof Date)
      return o * (e.getTime() - t.getTime());
    if (e instanceof Array && t instanceof Array) {
      const i = e, s = t;
      if (i.length && s.length)
        return this.genericSortComparator(i[0], s[0], o);
    }
    return o * ("" + e).localeCompare("" + t);
  }
}
class he extends ie {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = i, this.type = "AreaModelTree", this.sorterService = new xe(), this.service = new Ye(), this.properties = i.map((s) => s.property), this.flattenRows = this.service.flattenTree(t), this.filteredFlattenRows = [...this.flattenRows];
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.properties, e, t), super.changeColumnOrder(e, t);
  }
  recalcVisibleTreeRows() {
    this.filteredFlattenRows = this.service.flattenTree(this.rows);
  }
  getFilteredFlattenRows() {
    return this.filteredFlattenRows;
  }
  getRowCount() {
    let e = 0;
    for (const t of this.filteredFlattenRows)
      this.service.isVisible(t) && e++;
    return e;
  }
  getValueAt(e, t) {
    const o = this.getRowByIndex(e);
    if (o) {
      const i = this.properties[t];
      if (i)
        return i.includes(".") ? this.getPropertyValue(o.data, i.split(".")) : o.data[i];
    }
    return "";
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  getCustomClassesAt(e, t) {
    return ["ge-table-tree-cell", "ge-table-tree-deep-" + this.filteredFlattenRows[e].deep];
  }
  getRowByIndex(e) {
    return this.filteredFlattenRows[e];
  }
  getValueByT(e, t) {
    return t.includes(".") ? this.getPropertyValue(e, t.split(".")) : e[t];
  }
  externalFilterChanged(e) {
    this.lastPredictFn = e, this.doFiltering();
  }
  doSort(e) {
    const { columnIndex: t, sortState: o } = e[e.length - 1], i = o === "asc" ? 1 : o === "desc" ? -1 : 0, s = this.properties[t];
    return this.treeSort(this.rows, s, i), this.flattenRows = this.service.flattenTree(this.rows), this.filteredFlattenRows = [...this.flattenRows], !0;
  }
  toggleExpandCollapseAll(e) {
    this.expandAllRecursive(this.rows, e), this.flattenRows = this.service.flattenTree(this.rows), this.doFiltering();
  }
  setAllParentsOk(e) {
    return e.parent && (e.parent.keep = !0, this.setAllParentsOk(e.parent)), !1;
  }
  setValue(e, t, o) {
    var r;
    const i = (r = this.columnDefs[t]) == null ? void 0 : r.editInputPipe;
    i && (o = i(o, e, t));
    const s = this.getRowByIndex(e);
    if (s) {
      const l = s.data, n = this.columnDefs[t].property;
      return n.includes(".") ? this.setPropertyValue(l, n.split("."), o) : (l[n] = o, !0);
    }
    return !1;
  }
  genericTreeTableSortComparator(e, t) {
    return (o, i) => {
      const s = this.getValueByT(o.data, e), r = this.getValueByT(i.data, e);
      return this.sorterService.genericSortComparator(s, r, t);
    };
  }
  expandAllRecursive(e, t) {
    for (const o of e)
      o.expanded = t, o.children && this.expandAllRecursive(o.children, t);
  }
  doFiltering() {
    if (!this.lastPredictFn)
      this.filteredFlattenRows = [...this.flattenRows ? this.flattenRows : []];
    else {
      this.flattenRows || (this.flattenRows = []);
      let e = 0;
      this.flattenRows.forEach((o) => {
        e = Math.max(e, o.deep);
      });
      const t = this.flattenRows.filter(
        (o, i, s) => this.lastPredictFn(o, i, s)
      );
      this.flattenRows.forEach((o) => o.keep = !1), this.flattenRows.forEach((o) => {
        t.includes(o) && (o.keep = !0, this.setAllParentsOk(o));
      }), this.filteredFlattenRows = this.flattenRows.filter(
        (o, i, s) => o.keep
      );
    }
  }
  getPropertyValue(e, t) {
    const o = t.shift();
    let i = e[o];
    return i && t.length ? this.getPropertyValue(i, t) : i;
  }
  treeSort(e, t, o) {
    e.sort(this.genericTreeTableSortComparator(t, o));
    for (const i of e)
      i.children && this.treeSort(i.children, t, o);
  }
}
class ce {
  constructor(e = []) {
    this.allRootNodes = e;
  }
  checkRow(e, t) {
    if (e.checked = t, e.children)
      for (const o of e.children)
        this.checkRow(o, t);
    this.autoCheckParent(e.parent);
  }
  checkAll(e) {
    for (const t of this.allRootNodes)
      t.checked = !1, t.children && this.checkAll(t.children);
  }
  getCheckedRows() {
    const e = [];
    return this.addSelectedRecursive(this.allRootNodes, e), e;
  }
  isRowChecked(e) {
    if (e.checked)
      return "full";
    const t = this.areAllChildrenChecked(e), o = this.areAllChildrenUnchecked(e);
    return !t && !o ? "semi" : "none";
  }
  setCheckedRows(e) {
    this.addCheckedRows(e);
  }
  addCheckedRows(e) {
    for (const t of e)
      t.checked = !0;
  }
  autoCheckParent(e) {
    if (e) {
      const t = this.areAllChildrenChecked(e), o = this.areAllChildrenUnchecked(e);
      t ? e.checked = !0 : e.checked = !1, this.autoCheckParent(e.parent);
    }
  }
  areAllChildrenChecked(e) {
    var t, o;
    if ((t = e.children) != null && t.length) {
      for (const i of e.children)
        if (!i.checked || (o = i.children) != null && o.length && !this.areAllChildrenChecked(i))
          return !1;
    }
    return !0;
  }
  areAllChildrenUnchecked(e) {
    var t, o;
    if ((t = e.children) != null && t.length) {
      for (const i of e.children)
        if (i.checked || (o = i.children) != null && o.length && !this.areAllChildrenUnchecked(i))
          return !1;
    }
    return !0;
  }
  addSelectedRecursive(e, t) {
    for (const o of e)
      o.checked && t.push(o), o.children && this.addSelectedRecursive(o.children, t);
  }
}
class ue {
  constructor(e = 0, t = 0, o = 0, i = 0) {
    this.top = e, this.right = t, this.bottom = o, this.left = i;
  }
}
class Ke {
  constructor() {
    this.checkedRows = [];
  }
  getCheckedRows() {
    return this.checkedRows;
  }
  setCheckedRows(e) {
    this.checkedRows = e;
  }
  addCheckedRows(e) {
    this.checkedRows || (this.checkedRows = []);
    for (const t of e)
      this.checkedRows.includes(t) || this.checkedRows.push(t);
  }
  checkRow(e, t) {
    this.checkedRows || (this.checkedRows = []), t ? this.checkedRows.includes(e) || this.checkedRows.push(e) : this.removeSelectedRow(e);
  }
  isRowChecked(e) {
    return this.checkedRows && this.checkedRows.includes(e) ? "full" : "none";
  }
  checkAll(e) {
    this.checkedRows = [];
  }
  removeSelectedRow(e) {
    if (this.checkedRows) {
      const t = this.checkedRows.indexOf(e);
      t > -1 && this.checkedRows.splice(t, 1);
    }
  }
}
class Y {
  constructor(e, t, o, i = 0, s = 0, r = !1, l = new B(), n = [], d = [], a = -1, h = 0, u = 400, m = () => {
  }) {
    var b, f, g, p;
    this.headerAreaModel = e, this.bodyAreaModel = t, this.footerAreaModel = o, this.fixedLeftColumnCount = i, this.fixedRightColumnCount = s, this.rowCheckboxVisible = r, this.defaultRowHeights = l, this.columnDefs = n, this.columnSizes = d, this.overridingColumnWidth = a, this.columnCount = h, this.parentSize = u, this.getSelectionModel = m, this.rowCount = 0, this.contentHeightInPx = 0, this.contentWidthInPx = 0, this.padding = new ue(0, 0, 0, 0), this.xPositions = [], e.areaIdent = "header", t.areaIdent = "body", o.areaIdent = "footer", this.columnCount || ((b = this.columnDefs) != null && b.length ? this.columnCount = this.columnDefs.length : (f = this.columnSizes) != null && f.length && (this.columnCount = (g = this.columnSizes) == null ? void 0 : g.length)), (p = this.columnDefs) != null && p.length && ye(this.columnDefs[0]) && !t.rowSelectionModel && (t.rowSelectionModel = new Ke());
  }
  init() {
    this.recalcSize(this.parentSize), this.overridingColumnWidth === -1 && this.calcXPositions(), this.headerAreaModel && this.headerAreaModel.init(), this.bodyAreaModel && this.bodyAreaModel.init(), this.footerAreaModel && this.footerAreaModel.init();
  }
  /**
   * Retrieves the count of columns in the current instance.
   *
   * @return {number} The count of columns.
   */
  getColumnCount() {
    return this.columnCount;
  }
  /**
   * Sets the width in pixel of a column (by columnIndex) in a table.
   *
   * @param {number} columnIndex - The index of the column.
   * @param {number} width - The desired width of the column.
   * @return {void}
   */
  setColumnWidth(e, t) {
    var o;
    t = Math.max(0, t), this.overridingColumnWidth !== -1 && (this.overridingColumnWidth = t), e > -1 && e < ((o = this.columnSizes) == null ? void 0 : o.length) && (this.columnSizes[e] = t), this.recalcContentWidthInPx();
  }
  /**
   * Retrieves the width of a column specified by its index.
   *
   * @param {number} columnIndex - The index of the desired column.
   * @return {number} - The width of the specified column.
   */
  getColumnWidth(e) {
    var o;
    const t = this.getColumnDef(e);
    return t && t.isVisible && !t.isVisible() ? 0 : this.overridingColumnWidth !== -1 ? this.overridingColumnWidth : e > -1 && e < ((o = this.columnSizes) == null ? void 0 : o.length) ? this.columnSizes[e] : 0;
  }
  /**
   * Retrieves the x position for a given column index.
   *
   * @param {number} columnIndex - The index of the column.
   * @return {number} - The x position of the column.
   */
  getXPosByColumnIndex(e) {
    return e === 0 ? 0 : this.overridingColumnWidth > -1 ? this.overridingColumnWidth * e : this.xPositions[e];
  }
  /**
   * Recalculates the size (width, height, padding)  of the elements based on the client width.
   *
   * @param {number} clientWidth - The width of the client area.
   *
   * @return {void} - This method does not return a value.
   */
  recalcSize(e) {
    this.recalcColumnWidthes(e), this.recalcHeightAndPadding();
  }
  /**
   * Recalculates the height and padding for the body area.
   *
   * This method retrieves the area model for the "body" area,
   * and updates the rowCount property with the row count of the model.
   *
   * The contentHeightInPx property is then updated with the height of the "body" area.
   *
   * The method calls the recalcContentWidthInPx() method to recalculate the content width.
   *
   * Finally, the method calls the recalcPadding() method to recalculate the padding.
   *
   * @return {void}
   */
  recalcHeightAndPadding() {
    const e = this.getAreaModel("body");
    this.rowCount = e.getRowCount(), this.contentHeightInPx = this.getAreaHeight("body"), this.recalcContentWidthInPx(), this.recalcPadding();
  }
  /**
   * Recalculates the padding of an element based on the width and height of its surrounding areas.
   *
   * @method recalcPadding
   *
   * @returns {void}
   */
  recalcPadding() {
    const e = this.getSideAreaWidth("west"), t = this.getSideAreaWidth("east"), o = this.getAreaHeight("header"), i = this.getAreaHeight("footer");
    this.padding = new ue(
      o,
      t,
      i,
      e
    );
  }
  /**
   * Retrieves the padding value.
   *
   * @returns {Padding} The padding value.
   */
  getPadding() {
    return this.padding;
  }
  /**
   * Returns the height of the content in pixels.
   *
   * @returns {number} The height of the content in pixels.
   */
  getContentHeightInPixel() {
    return this.contentHeightInPx;
  }
  /**
   * Returns the width of the content in pixels.
   *
   * @returns {number} The width of the content in pixels.
   */
  getContentWidthInPixel() {
    return this.contentWidthInPx;
  }
  /**
   * Returns the height of the specified row in the given row area identifier.
   *
   * @param {AreaIdent} rowAreaIdent - The row area identifier.
   * @param {number} rowIndex - The index of the row.
   * @return {number} - The height of the specified row.
   */
  getRowHeight(e, t) {
    return this.getAreaModel(e).getRowHeight(t);
  }
  /**
   * Retrieves the model for the given row area identifier.
   *
   * @param {AreaIdent} rowAreaIdent - The identifier of the row area.
   * @return {AreaModelIf} - The model of the specified row area.
   */
  getModel(e) {
    return this.getAreaModel(e);
  }
  /**
   * Calculates the height of the area identified by the given area identifier.
   *
   * @param {AreaIdent} areaIdent - The identifier of the area.
   * @return {number} - The height of the area.
   */
  getAreaHeight(e) {
    const t = this.getModel(e), o = t.getRowCount();
    if (this.defaultRowHeights[e])
      return o * this.defaultRowHeights[e];
    let i = 0;
    for (let s = 0; s < o; s++)
      i = i + t.getRowHeight(s);
    return i;
  }
  /**
   * Returns the total width of the side area identified by sideIdent.
   *
   * @param {SideIdent} sideIdent - The identifier of the side area ("west" | "center" | "east").
   * @return {number} - The total width in pixels of the side area.
   */
  getSideAreaWidth(e) {
    const [t, o] = this.getSideStartAndEndColumnIndex(e);
    let i = 0;
    for (let s = t; s <= o; s++)
      i = i + this.getColumnWidth(s);
    return i;
  }
  /**
   * Retrieves the start and end column indices based on the given side identifier.
   *
   * @param {SideIdent} sideIdent - The side identifier, which can be "west", "east", or "center".
   * @return {[number, number]} - An array containing the start and end column indices.
   */
  getSideStartAndEndColumnIndex(e) {
    const t = this.getFixedLeftColumnCount(), o = this.getFixedRightColumnCount();
    let i = 0, s = this.columnCount - 1;
    return e === "west" ? s = t - 1 : e === "east" ? i = this.columnCount - o : (i = t, s = this.columnCount - o - 1), [i, s];
  }
  /**
   * Returns the column definition at the specified index.
   *
   * @param {number} index - The index of the column definition to retrieve.
   * @returns {ColumnDefIf | undefined} - The column definition at the specified index, or undefined if no ColumnDef is specified for the given column
   */
  getColumnDef(e) {
    if (e < this.columnDefs.length)
      return this.columnDefs[e];
  }
  /**
   * Retrieves the count of fixed left columns.
   *
   * @returns {number} The count of fixed left columns.
   */
  getFixedLeftColumnCount() {
    return this.fixedLeftColumnCount;
  }
  /**
   * Returns the number of fixed right columns.
   *
   * @returns {number} The number of fixed right columns.
   */
  getFixedRightColumnCount() {
    return this.fixedRightColumnCount;
  }
  /**
   * Retrieves the area model (header, body or footer) based on the area identification.
   *
   * @param {AreaIdent} area - The identifier of the area.
   * @return {AreaModelIf} The area model corresponding to the given area identification.
   * @throws {Error} If the area identification is invalid.
   */
  getAreaModel(e) {
    if (e === "header")
      return this.headerAreaModel;
    if (e === "body")
      return this.bodyAreaModel;
    if (e === "footer")
      return this.footerAreaModel;
    throw new Error("Wrong ident.");
  }
  /**
   * Returns the body area model.
   *
   * @returns {AreaModelIf} The body area model.
   */
  getBodyModel() {
    return this.bodyAreaModel;
  }
  /**
   * Checks if the footer is visible.
   *
   * @returns {boolean} True if the footer is visible, false otherwise.
   */
  isFooterVisibe() {
    var e;
    return (((e = this.footerAreaModel) == null ? void 0 : e.getRowCount()) ?? 0) > 0;
  }
  /**
   * Checks if the header area is visible.
   * @return {boolean} Returns true if the header area is visible, otherwise false.
   */
  isHeaderVisibe() {
    var e;
    return (((e = this.headerAreaModel) == null ? void 0 : e.getRowCount()) ?? 0) > 0;
  }
  /**
   * Checks whether the row checkbox is visible.
   *
   * @returns {boolean} True if the row checkbox is visible, otherwise false.
   */
  isRowCheckboxVisible() {
    return this.rowCheckboxVisible;
  }
  /**
   * This method is called when an external filter is changed.
   *
   * @param {FilterFunction<T>} predictFn - The function used to predict whether an element should be filtered or not.
   * @return {void}
   */
  externalFilterChanged(e) {
    this.getAreaModel("body").externalFilterChanged(e);
  }
  /**
   * Sorts the items using the given sortItems array.
   *
   * @param {SortItem[]} sortItems - An array of sort items to sort the items.
   * @return {boolean} - Returns true if the sorting is successful, otherwise false.
   */
  doSort(e) {
    return this.getAreaModel("body").doSort(e);
  }
  /**
   * Returns an array of ColumnDefIf objects or undefined.
   *
   * @return {ColumnDefIf[] | undefined} An array of ColumnDefIf objects or undefined.
   */
  getColumnDefs() {
    return this.columnDefs;
  }
  /**
   * Retrieves the property key of the table row business object associated with the specified column index.
   * It's only available when columnDefs are specified.
   *
   * @param {number} columnIndex - The index of the column to retrieve the property from.
   * @return {string} The property associated with the specified column index.
   */
  getColumnProperty(e) {
    return this.columnDefs ? this.columnDefs[e].property : "";
  }
  /**
   * Retrieves the row object from the body model at the specified index.
   *
   * @param {number} rowIndex - The index of the row to retrieve.
   *
   * @return {any} The row object at the specified index.
   */
  getBodyRowByIndex(e) {
    return this.getBodyModel().getRowByIndex(e);
  }
  /**
   * Checks if a column at the given index is sortable.
   *
   * @param {number} columnIndex - The index of the column to check.
   *
   * @returns {boolean} - `true` if the column is sortable, `false` otherwise.
   */
  isSortable(e) {
    var t;
    if (this.columnDefs && e < this.columnDefs.length) {
      const o = (t = this.columnDefs[e]) == null ? void 0 : t.sortable;
      if (typeof o == "function")
        return o();
    }
    return !1;
  }
  /**
   * Moves a column in the column order.
   *
   * @param {number} sourceColumnIndex - The index of the column to be moved.
   * @param {number} targetColumnIndex - The index where the column should be moved to.
   *
   * @returns {void}
   */
  changeColumnOrder(e, t) {
    var o, i, s;
    this.arrayMove(this.columnDefs, e, t), this.arrayMove(this.columnSizes, e, t), (o = this.headerAreaModel) == null || o.changeColumnOrder(e, t), (i = this.bodyAreaModel) == null || i.changeColumnOrder(e, t), (s = this.footerAreaModel) == null || s.changeColumnOrder(e, t), this.calcXPositions();
  }
  recalcColumnWidthes(e) {
    var t, o, i;
    !((t = this.columnDefs) != null && t.length) && !((o = this.columnSizes) != null && o.length) && (this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth)), (i = this.columnDefs) != null && i.length && (this.columnSizes = this.columnDefs.map((s) => {
      if (s.width.unit === "%" && e) {
        let r = Math.floor(s.width.value * e / 100);
        if (s.minWidth) {
          const l = s.minWidth.unit === "px" ? s.minWidth.value : Math.floor(s.minWidth.value * e / 100);
          r = Math.max(l, r);
        }
        if (s.maxWidth) {
          const l = s.maxWidth.unit === "px" ? s.maxWidth.value : Math.floor(s.maxWidth.value * e / 100);
          r = Math.min(l, r);
        }
        return r;
      }
      return s.width.value;
    }));
  }
  arrayMove(e, t, o) {
    const i = e.splice(t, 1)[0];
    return e.splice(o, 0, i), e;
  }
  recalcContentWidthInPx() {
    this.contentWidthInPx = this.getSideAreaWidth("center");
  }
  calcXPositions() {
    const e = this.getColumnCount();
    this.xPositions = new Array(e + 1), this.xPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.xPositions[t + 1] = this.getColumnWidth(t) + this.xPositions[t];
  }
}
class Ue extends ie {
  constructor(e, t, o, i = []) {
    super(e, i, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = i, this.sorterService = new xe(), this.filteredRows = [...t], this.properties = i.map((s) => s.property);
  }
  setRows(e) {
    this.rows = e, this.filteredRows = [...e];
  }
  getRowCount() {
    var e;
    return ((e = this.filteredRows) == null ? void 0 : e.length) ?? 0;
  }
  getValueAt(e, t) {
    const o = this.properties[t];
    let i = this.filteredRows[e];
    return H(i) && (i = i.data), i ? this.getValueByT(i, o) : "";
  }
  getFilteredRows() {
    return this.filteredRows;
  }
  getAllRows() {
    return this.rows;
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  getRowByIndex(e) {
    return this.filteredRows[e];
  }
  externalFilterChanged(e) {
    this.filteredRows = this.rows ? this.rows.filter(e) : [];
  }
  doSort(e) {
    for (const t of e) {
      const { columnIndex: o, sortState: i } = t, s = i === "asc" ? 1 : i === "desc" ? -1 : 0, r = this.properties[o];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(r, s));
    }
    return !0;
  }
  getValueByT(e, t) {
    return t.includes(".") ? this.getPropertyValue(e, t.split(".")) : e[t];
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.properties, e, t), super.changeColumnOrder(e, t);
  }
  genericFlatTableSortComparator(e, t) {
    return (o, i) => {
      const s = this.getValueByT(o, e), r = this.getValueByT(i, e);
      return this.sorterService.genericSortComparator(s, r, t);
    };
  }
  getPropertyValue(e, t) {
    const o = t.shift(), i = e[o];
    return i && t.length ? this.getPropertyValue(i, t) : i;
  }
}
class ge extends Ue {
  constructor(e, t, o, i) {
    super(
      e,
      t,
      i,
      o
    ), this.areaIdent = e, this.rows = t, this.columnDefs = o, this.defaultRowHeight = i;
  }
}
class O {
  static createTableModel(e) {
    var t, o, i, s, r, l, n, d, a, h, u, m, b, f;
    if (e.defaultRowHeights === void 0)
      if ((t = e.tableOptions) != null && t.defaultRowHeights)
        e.defaultRowHeights = e.tableOptions.defaultRowHeights;
      else {
        if (e.defaultRowHeights = new B(), e.headerAreaModel && "defaultRowHeight" in e.headerAreaModel) {
          const g = e.headerAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.header = g);
        }
        if (e.bodyAreaModel && "defaultRowHeight" in e.bodyAreaModel) {
          const g = e.bodyAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.body = g);
        }
        if (e.footerAreaModel && "defaultRowHeight" in e.footerAreaModel) {
          const g = e.footerAreaModel.defaultRowHeight;
          g > -1 && (e.defaultRowHeights.footer = g);
        }
      }
    if (e.columnDefs === void 0 && ((o = e.properties) != null && o.length ? e.columnDefs = e.properties.map((g) => new V(g, g.toUpperCase(), de)) : (i = e.rows) != null && i.length ? e.columnDefs = Object.keys(e.rows[0]).map((g) => new V(g, g.toUpperCase(), de)) : e.columnDefs = []), e.columnCount === void 0 && ((s = e.columnDefs) != null && s.length ? e.columnCount = e.columnDefs.length : (r = e.headerData) != null && r.length ? e.columnCount = e.headerData[0].length : (l = e.columnSizes) != null && l.length ? e.columnCount = (n = e.columnSizes) == null ? void 0 : n.length : console.warn('Property "columnCount" is missing and cannot be derived from other properties.')), e.headerAreaModel || ((d = e.headerData) != null && d.length ? e.headerAreaModel = new D(
      "header",
      e.headerData,
      e.defaultRowHeights.header,
      e.columnDefs
    ) : (a = e.columnDefs) != null && a.length ? e.headerAreaModel = new D(
      "header",
      [e.columnDefs.map((g) => g.headerLabel)],
      e.defaultRowHeights.header,
      e.columnDefs
    ) : e.headerAreaModel = new _("header")), e.footerAreaModel || ((h = e.footerData) != null && h.length ? e.footerAreaModel = new D(
      "footer",
      e.footerData,
      e.defaultRowHeights.footer,
      e.columnDefs
    ) : e.footerAreaModel = new _("footer")), !e.bodyAreaModel)
      if (e.rows)
        if ((u = e.rows) != null && u.length && H(e.rows[0])) {
          const g = e.rows;
          e.bodyAreaModel = new he(
            "body",
            g,
            e.defaultRowHeights.body,
            e.columnDefs
          ), (e.columnDefs[0].property === "CheckboxColumn" || (m = e.tableOptions) != null && m.showCheckboxWihoutExtraColumn) && (e.bodyAreaModel.rowSelectionModel = new ce(g));
        } else
          e.bodyAreaModel = new ge(
            "body",
            e.rows,
            e.columnDefs,
            e.defaultRowHeights.body
          );
      else
        e.bodyData ? e.bodyAreaModel = new D(
          "body",
          e.bodyData,
          e.defaultRowHeights.body
        ) : e.bodyAreaModel = new _("body");
    return e.fixedLeftColumnCount === void 0 && (e.fixedLeftColumnCount = 0), e.fixedRightColumnCount === void 0 && (e.fixedRightColumnCount = 0), e.rowCheckboxVisible === void 0 && (e.rowCheckboxVisible = !1), e.overridingColumnWidth === void 0 && (e.overridingColumnWidth = -1), !e.getSelectionModel && ((b = e.tableOptions) != null && b.getSelectionModel) && (e.getSelectionModel = (f = e.tableOptions) == null ? void 0 : f.getSelectionModel), new Y(
      e.headerAreaModel,
      e.bodyAreaModel,
      e.footerAreaModel,
      e.fixedLeftColumnCount,
      e.fixedRightColumnCount,
      e.rowCheckboxVisible,
      e.defaultRowHeights,
      e.columnDefs,
      e.columnSizes,
      e.overridingColumnWidth,
      e.columnCount,
      e.parentSize,
      e.getSelectionModel
    );
  }
  static buildByTypedRowsParam(e) {
    return O.buildByTypedRows(
      e.rows ?? [],
      e.columnDefs,
      e.tableOptions ?? new U(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0
    );
  }
  static buildByTypedRows(e, t, o = new U(), i = 0, s = 0) {
    const r = o.defaultRowHeights, l = t[0].property === "CheckboxColumn";
    if (e != null && e.length && H(e[0])) {
      const n = e, d = new he(
        "body",
        n,
        r.body,
        t
      );
      return (l || o.showCheckboxWihoutExtraColumn) && (d.rowSelectionModel = new ce(n)), O.createByAreaModelsParam({
        headerAreaModel: new D("header", [t.map((a) => a.headerLabel)], r.header),
        bodyAreaModel: d,
        footerAreaModel: new D("footer", [], r.footer),
        columnDefs: t,
        fixedLeftColumnCount: i,
        fixedRightColumnCount: s,
        defaultRowHeights: o.defaultRowHeights,
        rowCheckboxVisible: !1,
        columnSizes: [],
        columnCount: t.length,
        overridingColumnWidth: -1
      });
    }
    return O.createByObjectArrayParam({
      rows: e,
      columnDefs: t,
      fixedLeftColumnCount: i,
      fixedRightColumnCount: s,
      defaultRowHeights: o.defaultRowHeights
    });
  }
  static createByObjectArrayParam(e) {
    const t = e.rowCheckboxVisible !== void 0 ? e.rowCheckboxVisible : !1;
    return O.createByObjectArray(
      e.rows,
      e.header ?? [],
      e.footer ?? [],
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0,
      t,
      e.defaultRowHeights ?? new B(),
      e.columnDefs ?? [],
      e.columnSizes ?? []
    );
  }
  static createByAreaModels(e = new _(), t, o = new _(), i = 0, s = 0, r = !1, l = new B(), n, d = [], a = -1, h) {
    return new Y(
      e,
      t,
      o,
      i,
      s,
      r,
      l,
      n,
      d,
      a,
      h
    );
  }
  static createByAreaModelsParam(e) {
    return O.createByAreaModels(
      e.headerAreaModel ?? new _(),
      e.bodyAreaModel,
      e.footerAreaModel ?? new _(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0,
      e.rowCheckboxVisible === void 0 ? !1 : e.rowCheckboxVisible,
      e.defaultRowHeights,
      e.columnDefs ?? [],
      e.columnSizes ?? [],
      e.overridingColumnWidth ?? -1,
      e.columnCount ?? 0
    );
  }
  static createByObjectArray(e, t = [], o = [], i = 0, s = 0, r = !1, l = new B(), n, d = []) {
    let a;
    t != null && t.length ? a = new D("header", t, l.header, n) : n != null && n.length ? a = new D("header", [n.map((m) => m.headerLabel)], l.header, n) : a = new _();
    const h = o ? new D("footer", o, l.footer, n) : new _(), u = new ge("body", e, n, l.body);
    return new Y(
      a,
      u,
      h,
      i,
      s,
      r,
      l,
      n,
      d
    );
  }
}
const Dt = [
  "COPY_2_CLIPBOARD",
  "START_EDITING",
  "TOGGLE_SELECTION",
  "SELECT_ALL",
  "DESELECT_ALL",
  "NAVIGATE_LEFT",
  "NAVIGATE_RIGHT",
  "NAVIGATE_UP",
  "NAVIGATE_DOWN"
  //
  // "ENTER_PRESSED",
  // "HOME_PRESSED",
  // "SPACE_PRESSED",
  // "END_PRESSED",
  // "PAGEUP_PRESSED",
  // "PAGEDOWN_PRESSED"
];
class _t {
  constructor(e, t) {
    this.tableModel = e, this.tableOptions = t;
  }
}
class qe {
  constructor(e, t, o, i, s, r, l) {
    this.emmitDataKey = e, this.emmitCancelKey = t, this.queryId = o, this.filter = i, this.sorting = s, this.startIndex = r, this.endIndex = l;
  }
}
class Ft extends qe {
  constructor(e, t, o, i, s, r, l, n) {
    super(
      e,
      t,
      o,
      i,
      s,
      r,
      l
    ), this.rows = n;
  }
}
class Je {
  constructor(e, t) {
    this.value = e, this.label = t;
  }
}
class $t {
  constructor(e, t) {
    this.index = e, this.px = t;
  }
}
const Ot = { body: ["ge-table-text-align-left"] }, Lt = { body: ["ge-table-text-align-center"] }, Pt = { body: ["ge-table-text-align-right"] }, Ht = {
  header: ["ge-table-text-align-left"],
  body: ["ge-table-text-align-left"],
  footer: ["ge-table-text-align-left"]
}, Bt = {
  header: ["ge-table-text-align-center"],
  body: ["ge-table-text-align-center"],
  footer: ["ge-table-text-align-center"]
}, Vt = {
  header: ["ge-table-text-align-right"],
  body: ["ge-table-text-align-right"],
  footer: ["ge-table-text-align-right"]
};
class pe {
  render(e, t, o, i, s, r, l) {
    if (s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.isRowChecked(t), d = n === "full" ? "checked" : "", a = n === "semi" ? '<span style="opacity: 0.4;">✓<span>' : "";
      e.innerHTML = `
        <input
            type="checkbox"
            data-area="${i}"
            data-row-index="${t}"
            data-col-index="${o}"
            data-input-type="checkbox"
            ${d}
            class="ge-table-row-checkbox">
        ${a}  `;
    }
  }
}
class Wt {
  constructor() {
    this.type = "CheckboxColumnDef", this.property = "CheckboxColumn", this.headerLabel = "", this.width = new w(50, "px"), this.minWidth = new w(50, "px"), this.maxWidth = new w(100, "px"), this.rendererMap = new T(new pe(), new pe(), void 0), this.classes = new T(
      [],
      ["ge-table-text-align-left"],
      []
    );
  }
}
class Gt {
  /**
   * A factory that creates a new AreaObjectMap with the given body renderer.
   *
   * @param {CellRendererIf} bodyRenderer - The renderer for the body of the map.
   * @returns {AreaObjectMap<CellRendererIf>} The newly created AreaObjectMap.
   */
  static body(e) {
    return new T(
      void 0,
      e,
      void 0
    );
  }
}
class Nt {
  constructor(e = "down", t) {
    this.status = e, this.originalEvent = t;
  }
}
class zt {
  constructor(e, t, o, i, s = {}) {
    this.area = e, this.rowIndex = t, this.columnIndex = o, this.value = i, this.cssClasses = s;
  }
}
class jt {
  constructor() {
    this.autoRestoreSortingState = !1, this.autoRestoreCollapsedExpandedState = !1, this.autoRestoreScrollPosition = !1, this.autoRestoreCheckedState = !1, this.autoRestoreSelectedState = !1, this.getStorageKeyFn = void 0, this.isSame = (e, t, o) => {
      if (e && t && o.getRowId) {
        const i = o.getRowId(e), s = o.getRowId(t);
        return i === s;
      }
      return !1;
    }, this.getRowId = (e) => {
      if (e) {
        for (const t of ["id", "uuid"]) {
          const o = e[t];
          if (o != null)
            return o;
        }
        try {
          return JSON.stringify(e);
        } catch (t) {
          console.error(t);
        }
      }
      return console.warn('One of following options set to true without a valid "getRowId()": autoRestoreExpandedState, autoRestoreCheckedState.'), -1;
    };
  }
}
class Qe {
  constructor(e, t, o, i = !1, s = "normal", r = void 0) {
    this.data = e, this.property = t, this.toggle = o, this.closed = i, this.visibility = s, this.children = r, this.impl = "CellGroup";
  }
}
class Ze extends Qe {
  constructor(e, t = 0, o = 0, i) {
    super(
      e.data,
      e.property,
      e.toggle,
      e.closed,
      e.visibility,
      e.children
    ), this.rowIndex = t, this.childIndex = o, this.parent = i, this.impl = "CellGroupExt", this.children = void 0, this.leftNeighbour = void 0, this.rightNeighbour = void 0;
  }
  ownColumn() {
    return !!this.property;
  }
  toString() {
    return this.data + "";
  }
  // TODO hier gehts weiter!!!!!!!!!!!
  getColumnIndex() {
    return this.parent ? this.parent.getColumnIndex() + this.childIndex : (this.leftNeighbour, 0);
  }
  //
  // getLeftClaimedSpaces(): number{
  //   if (this.leftNeighbour) {
  //
  //   }
  //   return 0;
  // }
  // getSumOfLeafs(cg: CellGroupExt, sum: number = 0): number {
  //   if (cg.children?.length) {
  //     for (let i = 0; i < cg.children.length; i++) {
  //       const child = cg.children[i];
  //       if (child.children?.length) {
  //         sum = this.getSumOfLeafs(child, sum);
  //       } else {
  //         sum++;
  //       }
  //     }
  //   }
  //   if (this.ownColumn()) {
  //     sum++;
  //   }
  //   //console.info(cg.data, sum)
  //   return sum;
  // }
  //
  // getBiggestChildColumnIndex(): number {
  //   if (this.children?.length) {
  //     return Math.max(...this.children.map(c => c.getBiggestChildColumnIndex()));
  //   }
  //   return this.childIndex;
  // }
  isVisible() {
    return this.parent ? this.visibility === "always" ? this.parent.isVisible() : this.visibility === "normal" || !this.visibility ? this.parent.isVisible() && !this.parent.closed : this.visibility === "inverted" ? this.parent.isVisible() && this.parent.closed : !0 : !0;
  }
  // should be rendered
  claimsSpace() {
    return this.isVisible() && (this.ownColumn() || this.closed);
  }
  getColumnCount(e = this, t = 0) {
    var o;
    if (e != null && e.claimsSpace() && t++, (o = e == null ? void 0 : e.children) != null && o.length)
      for (const i of e.children)
        t = this.getColumnCount(i, t);
    return t;
  }
  getRowSpan(e = this, t) {
    return e != null && e.claimsSpace() ? t - this.getParentCount(e, 0) : 1;
  }
  getParentCount(e = this, t = 0) {
    return e.parent && (t = t + 1 + this.getParentCount(e.parent, t)), t;
  }
  log(e = 10) {
    const t = "													".substring(0, 2 * this.rowIndex), o = `${this.getColumnIndex()}`, i = `${this.getColumnCount(this)}`, s = `${this.getRowSpan(this, e)}`, r = `${this.getParentCount(this)}`, l = `${t + this.data}
      childIndex:${this.childIndex}
      row:${this.rowIndex}
      col:${o}
      vis:${this.visibility}
      toggle:${this.toggle}
      closed:${this.closed}
      isVisible:${this.isVisible()}
      ownColumn:${this.ownColumn()}
      claimsSpace:${this.claimsSpace()}
      colCount:${i}
      rowSpan:${s}
      pc:${r}`.replace(/[ \n]+/g, " ");
    if (this.children)
      for (const n of this.children)
        n.log(e);
    return l;
  }
}
class I {
  static buildColumnDefs(e, t = []) {
    for (const o of e)
      o.property && t.push(
        V.create({
          property: o.property,
          headerLabel: o.data ? o.data : o.property,
          isVisible: () => typeof o.isVisible == "function" ? o.isVisible() : !0
        })
      ), o.children && I.buildColumnDefs(o.children, t);
    return t;
  }
  /*
    static buildDeepMap(
      cellGroups: CellGroupIf[],
      ret: { [key: string]: number } = {},
      deep = 0
    ): { [key: string]: number } {
  
      for (const cellGroup of cellGroups) {
        //if (cellGroup.property) {
        ret[cellGroup.data] = deep;
        //}
        if (cellGroup.children) {
          CellgroupFactory.buildDeepMap(cellGroup.children, ret, deep + 1);
        }
      }
      return ret;
    }
  */
  static buildGroupExts(e, t = [], o = 0, i) {
    let s;
    for (let r = 0; r < e.length; r++) {
      const l = e[r], n = new Ze(l, o, r, i);
      s && (n.leftNeighbour = s, s.rightNeighbour = n), t.push(n), l.children && (n.children = I.buildGroupExts(l.children, [], o + 1, n)), s = n;
    }
    return t;
  }
  static flattenGroupExts(e, t = []) {
    for (const o of e)
      t.push(o), o.children && I.flattenGroupExts(o.children, t);
    return t;
  }
  /*
  
    Gold                                                           Hohenwarte
    Gold AB                         Gold CD                        HOH AB                                  HOH CD
    .          Gold A     Gold B    Gold C   Gold D    Gold Sum    .           HOH Loc    HOH A    HOH B   HOH C    HOH D
  
    */
  static buildArrayOfArrays(e, t) {
    var s;
    let o = -1, i = 99999;
    for (const r of e) {
      if (r.rowIndex <= i) {
        o++;
        for (let l = 0; l < t.length; l++)
          t[l][o] = null;
      }
      if (t[r.rowIndex][o] = r, i = r.rowIndex, r.ownColumn() && ((s = r.children) != null && s.length)) {
        for (let l = r.rowIndex + 1; l < t.length; l++)
          t[l][o] = void 0;
        o++;
        for (let l = 0; l < t.length; l++)
          t[l][o] = null;
      }
    }
    return t;
  }
  static iterateThrowColumns(e = [], t) {
    var o;
    for (const i of t)
      e.push(i.data + "    rowIndex:" + i.rowIndex), (o = i.children) != null && o.length && I.iterateThrowColumns(e, i.children);
  }
}
class Xt {
  constructor() {
    this.areaIdent = "body", this.rowSelectionModel = void 0;
  }
  changeColumnOrder(e, t) {
  }
  doSort(e) {
    return !1;
  }
  externalFilterChanged(e) {
  }
  getCellRenderer(e, t) {
  }
  getColspanAt(e, t) {
    return 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getMaxColspan() {
    return 0;
  }
  getMaxRowspan() {
    return 0;
  }
  getRowByIndex(e) {
  }
  getRowCount() {
    return 0;
  }
  getRowHeight(e) {
    return 0;
  }
  getRowspanAt(e, t) {
    return 0;
  }
  getTooltipAt(e, t) {
  }
  getValueAt(e, t) {
  }
  getTextValueAt(e, t) {
    return "";
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  init() {
  }
  isEditable(e, t) {
    return !1;
  }
  isFilterable() {
    return !1;
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  isSelectable(e, t) {
    return !1;
  }
  setRowChecked(e, t) {
  }
  setValue(e, t, o) {
    return !1;
  }
}
const j = class j {
  constructor(e = new oe()) {
    this.headerGroupOptions = e;
  }
  render(e, t, o, i, s, r, l) {
    const n = r != null && r.data ? r.data : "";
    if (r) {
      const { toggle: d, visibility: a, closed: h } = r, u = d ? j.toggleHeaderGroup : "";
      this.addText(e, i, t, o, n, u), d && a !== "always" && this.addArrowDiv(l, e, !h, t, o, i, u);
    } else
      this.addText(e, i, t, o, n, "");
  }
  addText(e, t, o, i, s, r) {
    e.innerHTML = `<span 
                data-ge-action="${r}"
                data-area="${t}"
                data-row-index="${o}"
                data-col-index="${i}"
                >${s}</span>`;
  }
  addArrowDiv(e, t, o = !0, i = -1, s = -1, r = "header", l) {
    const n = e.createElement("div");
    e.addClass(n, "ge-table-toggle-icon-div"), e.setStyle(n, "display", "inline-block"), e.setStyle(n, "position", ""), e.setStyle(n, "width", "20px"), e.setStyle(n, "background", "transparent"), e.setStyle(n, "cursor", "pointer"), e.setAttribute(n, "data-row-index", `${i}`), e.setAttribute(n, "data-col-index", `${s}`), e.setAttribute(n, "data-area", `${r}`), e.setAttribute(n, "data-ge-action", `${l}`);
    let d;
    o ? d = this.headerGroupOptions.iconExpanded : d = this.headerGroupOptions.iconCollapsed;
    const a = d.content, h = e.createText(a);
    e.appendChild(n, h), d.style && this.applyStyleString(e, n, d.style);
    for (const u of d.classes)
      e.addClass(n, u);
    return e.appendChild(t, n), n;
  }
  applyStyleString(e, t, o) {
    const i = o.split(";").map((s) => s.trim()).filter((s) => s);
    for (const s of i) {
      const [r, l] = s.split(":");
      e.setStyle(t, r.trim(), l.trim());
    }
  }
};
j.toggleHeaderGroup = "toggleHeaderGroup";
let J = j;
class Yt {
  constructor(e = "header", t, o = [], i, s = new oe()) {
    this.areaIdent = e, this.groups = t, this.columnDefs = o, this.defaultRowHeight = i, this.headerGroupOptions = s, this.gammaCells = !0, this.arr = [], this.groupExts = [], this.cellGroupExtCellRenderer = new J(this.headerGroupOptions), this.groupExts = I.buildGroupExts(t), this.init();
  }
  init() {
    var e;
    for (const t of this.groupExts)
      t.log(this.getMaxRowCount());
    this.arr = this.buildArray(), !((e = this.columnDefs) != null && e.length) && this.areaIdent === "header" && (this.columnDefs = I.buildColumnDefs(this.groups));
  }
  getAllLeafs() {
    return I.flattenGroupExts(this.groupExts).filter((t) => !t.children);
  }
  getMaxRowCount() {
    const e = this.getAllLeafs();
    return e != null && e.length ? 1 + Math.max(...e.map((t) => t.getParentCount(t))) : 0;
  }
  buildArray() {
    const e = I.flattenGroupExts(this.groupExts), t = 1 + Math.max(...e.map((r) => r.rowIndex)), o = [];
    I.iterateThrowColumns(o, this.groupExts);
    const i = Array.from(Array(t).keys()).map((r) => []), s = I.buildArrayOfArrays(e, i);
    return console.table(s), s;
  }
  changeColumnOrder(e, t) {
  }
  doSort(e) {
    return !1;
  }
  externalFilterChanged(e) {
  }
  getCellRenderer(e, t) {
    return this.cellGroupExtCellRenderer;
  }
  getColspanAt(e, t) {
    const o = this.getValueAt(e, t);
    return o ? o.getColumnCount() : 0;
  }
  getCustomClassesAt(e, t) {
    return [];
  }
  getCustomStyleAt(e, t) {
  }
  getMaxColspan() {
    return 12;
  }
  getMaxRowspan() {
    return 12;
  }
  getRowByIndex(e) {
  }
  getRowCount() {
    return this.arr ? this.arr.length : 0;
  }
  getRowspanAt(e, t) {
    const o = this.getValueAt(e, t);
    if (o) {
      const i = this.getRowCount();
      return o.getRowSpan(o, i);
    }
    return 0;
  }
  getTooltipAt(e, t) {
    return "";
  }
  getValueAt(e, t) {
    return this.arr[e][t];
  }
  getTextValueAt(e, t) {
    return "" + this.getValueAt(e, t);
  }
  getYPosByRowIndex(e) {
    return 0;
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  isEditable(e, t) {
    return !1;
  }
  isFilterable() {
    return !1;
  }
  isRowCheckable(e) {
    return !1;
  }
  isRowChecked(e) {
  }
  isSelectable(e, t) {
    return !1;
  }
  setRowChecked(e, t) {
  }
  setValue(e, t, o) {
    return !1;
  }
  toggleHeaderGroup(e) {
    const t = this.arr[e.rowIdx][e.colIdx];
    return t != null && t.toggle && t.visibility !== "always" && (t.closed = !t.closed, this.init()), I.buildColumnDefs(this.groupExts);
  }
}
class Kt {
  filterPredict(e, t, o = this.objectToString.bind(this)) {
    if (!e)
      return !1;
    if (!t)
      return !0;
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((h) => h !== i && h !== s && h !== ""), l = r.filter((h) => !h.startsWith(i) && !h.startsWith(s)), n = r.filter((h) => h.startsWith(i)).map((h) => h.replace(/\+/g, "")), d = r.filter((h) => h.startsWith(s)).map((h) => h.replace(/-/g, ""));
    let a = !l.length;
    for (let h = 0; h < l.length; h++)
      (a || o(e).includes(l[h])) && (a = !0);
    if (!a)
      return !1;
    for (let h = 0; h < n.length; h++)
      if (!o(e).includes(n[h]))
        return !1;
    for (let h = 0; h < d.length; h++)
      if (o(e).includes(d[h]))
        return !1;
    return !0;
  }
  filterRows(e, t, o = (i) => JSON.stringify(i).toLowerCase()) {
    if (!e)
      return [];
    if (!t)
      return [...e];
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((a) => a !== i && a !== s && a !== ""), l = r.filter((a) => !a.startsWith(i) && !a.startsWith(s)), n = r.filter((a) => a.startsWith(i)).map((a) => a.replace(/\+/g, "")), d = r.filter((a) => a.startsWith(s)).map((a) => a.replace(/-/g, ""));
    return e == null ? void 0 : e.filter((a) => {
      let h = !l.length;
      for (let u = 0; u < l.length; u++)
        (h || o(a).includes(l[u])) && (h = !0);
      if (!h)
        return !1;
      for (let u = 0; u < n.length; u++)
        if (!o(a).includes(n[u]))
          return !1;
      for (let u = 0; u < d.length; u++)
        if (o(a).includes(d[u]))
          return !1;
      return !0;
    });
  }
  objectToString(e) {
    if (!e)
      return "";
    const t = [], o = Object.keys(e);
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      t.push(e[s]);
    }
    return t.join(" ").toLowerCase();
  }
}
class Ut {
  static bodyRenderer(e) {
    return new T(void 0, e, void 0);
  }
}
class qt {
  constructor(e, t = !0, o = !1) {
    this.property = e, this.skipCheckableCheck = t, this.readonly = o;
  }
  render(e, t, o, i, s, r, l) {
    if (this.readonly || this.skipCheckableCheck || s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.getRowByIndex(t), a = s.getValueByT(n, this.property) === !0 ? "checked" : "", h = this.readonly ? " readonly " : "";
      if (l.addClass(e, "ge-padding-property-checkbox"), e.innerHTML = `
        <input
          type="checkbox"
          data-area="${i}"
          data-row-index="${t}"
          data-col-index="${o}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${a}
          ${h}
          class="ge-input-checkbox">`, !this.readonly) {
        const u = e.querySelector(".ge-input-checkbox");
        u && u.addEventListener("click", (m, b) => (n[this.property] = !n[this.property], !0));
      }
    }
  }
}
class Jt {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString());
  }
}
class Qt {
  constructor() {
    this.formatter = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  render(e, t, o, i, s, r, l) {
    if (r) {
      let n = "";
      try {
        n = this.formatter.format(new Date(r));
      } catch {
        n = r;
      }
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${i}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${i}">${n}</div>
          </div>`;
    }
  }
}
class Zt {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toLocaleDateString());
  }
}
class eo {
  render(e, t, o, i, s, r, l) {
    r === "male" || r === "m" ? e.innerText = "♂" : (r === "female" || r === "f") && (e.innerText = "♀");
  }
}
class to {
  constructor(e = 100, t = !1) {
    this.maxValue = e, this.labelVisible = t;
  }
  render(e, t, o, i, s, r, l) {
    if (l.addClass(e, "ge-progressbar-div"), !isNaN(r)) {
      const d = Number(r) * 100 / this.maxValue, a = this.labelVisible ? Math.round(d) + "%" : "";
      e.innerHTML = `
        <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${o}"
          data-area="${i}"
          title="${a}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${o}"
                  data-area="${i}">
                  <div class="ge-table-progress-bar"
                      style="width:${d}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${o}"
                      data-area="${i}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
class oo {
  render(e, t, o, i, s, r, l) {
    r === "true" || r === !0 ? e.innerHTML = '<span class="ge-true-text-color">✅</span>' : r === "false" || r === !1 ? e.innerHTML = '<span class="ge-false-text-color">❌</span>' : e.innerText = "";
  }
}
class io {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString().replace(/T/g, " ").replace(/\..*/g, ""));
  }
}
class so {
  constructor(e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    this.min = e, this.max = t;
  }
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = r, (typeof r == "string" || isNaN(r) || r < this.min || r > this.max) && l.addClass(e, "ge-cell-error"));
  }
}
class ro {
  constructor(e) {
    this.property = e;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), d = +("" + s.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = [];
      for (let u = 0; u < d; u++)
        a.push("★");
      const h = a.join(" ");
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${i}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${i}">${h}</div>
          </div>`;
    }
  }
}
class no {
  constructor(e, t = 100, o = !1) {
    this.property = e, this.maxValue = t, this.labelVisible = o;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), d = +("" + s.getValueByT(n, this.property));
    if (!isNaN(d)) {
      const a = d * 100 / this.maxValue, h = this.labelVisible ? Math.round(a) + "%" : "";
      e.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${o}"
          data-area="${i}"
          title="${h}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${o}"
                  data-area="${i}">
                  <div class="ge-table-progress-bar"
                      style="width:${a}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${o}"
                      data-area="${i}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
class lo {
  render(e, t, o, i, s, r, l) {
    if (r) {
      e.innerHTML = `
          <div 
            class="ge-table-label-div" 
            data-row-index=${t}" 
            data-col-index="${o}" 
            data-area="${i}" 
            style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div 
              class="ge-table-label"  
              data-row-index="${t}" 
              data-col-index="${o}" 
              data-area="${i}">${r}</div></div>`;
      const n = Number(r);
      n > 0 ? l.addClass(e, "ge-positive-text-color") : n < 0 && l.addClass(e, "ge-negative-text-color");
    }
  }
}
const ao = function(c, e, t) {
  return c ? Number(c) : "";
};
class Ce {
  constructor(e) {
    this.options = e;
  }
  static create(e) {
    return new Ce(
      e.map((t) => new Je(t, t))
    );
  }
  render(e, t, o, i, s, r, l) {
    if (s.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-select-div");
      const n = s.getValueAt(t, o);
      let d = [];
      for (let h of this.options) {
        const u = h.value === n ? " selected " : "";
        d.push(`<option value="${h.value}" ${u}>${h.label}</option>`);
      }
      const a = d.join("");
      e.innerHTML = `
            <select
                type="text"
                value="${n}"
                autofocus
                data-listen="change"
                data-area="${i}"
                data-row-index="${t}"
                data-col-index="${o}"
                data-input-type="text"
                style="width:100%;height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-select">${a}</select>`;
    }
  }
}
class ho extends we {
  constructor(e) {
    super("row", "multi"), this.model = e;
  }
  /**
   * Retrieves the selected rows from an array of all table rows.
   *
   * @param {T[]} allrows - The array of all rows from the table model.
   * @returns {T[]} - The selected rows from the given array.
   */
  getSelectedRowItems(e) {
    const t = this.getMergedRowIndices();
    return this.isAllSelected() ? e : e.filter((o, i) => t.includes(i));
  }
  /**
   * Selects the specified row.
   *
   * @param {number} rowIndex - The index of the row to be selected.
   */
  selectRow(e) {
    this.addRange(A.singleRow(e));
  }
  /**
   * Unselects the specified row.
   *
   * @param {number} rowIndex - The index of the row to be unselected.
   * @return {void}
   */
  unselectRow(e) {
    this.removeSelection(A.singleRow(e));
  }
  /**
   * Toggles the selection of items based on current selection state.
   */
  toggleSelection() {
    if (this.isAllSelected())
      this.clear();
    else if (this.hasNoSelection())
      this.selectAll();
    else {
      const e = this.model.getAllRows();
      this.silent = !0;
      for (let t = 0; t < e.length; t++)
        this.toggleRow(t);
      this.silent = !1, this.fireChangeEvent();
    }
  }
  /**
   * Toggles the selection of filtered rows.
   * If all rows are currently selected, clears the selection.
   * If no rows are currently selected, selects all filtered rows.
   * Otherwise, toggles the selection of all filtered rows.
   *
   * @return {void}
   */
  toggleFilteredRowsSelection() {
    if (this.isAllSelected())
      this.clear();
    else if (this.hasNoSelection()) {
      const e = this.model.getFilteredRows();
      this.silent = !0;
      for (let t = 0; t < e.length; t++)
        this.selectRow(t);
      this.silent = !1, this.fireChangeEvent();
    } else {
      const e = this.model.getFilteredRows();
      this.silent = !0;
      for (let t = 0; t < e.length; t++)
        this.toggleRow(t);
      this.silent = !1, this.fireChangeEvent();
    }
  }
  /**
   * Toggles the selection state of a row.
   *
   * @param {number} rowIndex - The index of the row to toggle.
   *
   * @return {void}
   */
  toggleRow(e) {
    this.isSelected(e, 0) ? this.unselectRow(e) : this.selectRow(e);
  }
}
class co {
  constructor(e, t, o) {
    this.r = e, this.g = t, this.b = o;
  }
}
class be {
  constructor(e, t, o, i) {
    this.minValue = e, this.minColor = t, this.maxValue = o, this.maxColor = i;
  }
}
class G {
  static normalize(e, t, o, i = 0, s = 1) {
    return (e - t) / (o - t) * (s - i) + i;
  }
  static getTwoColorGradientRGB(e, t) {
    const o = G.normalize(e, t.minValue, t.maxValue, 0, 1), i = t.maxColor.r - t.minColor.r, s = t.maxColor.g - t.minColor.g, r = t.maxColor.b - t.minColor.b, l = i * o + t.minColor.r, n = s * o + t.minColor.g, d = r * o + t.minColor.b;
    return `rgb(${Math.round(l)}, ${Math.round(n)}, ${Math.round(d)})`;
  }
  static getThreeColorGradientRGB(e, t) {
    return e < t.middleValue ? G.getTwoColorGradientRGB(e, new be(t.minValue, t.minColor, t.middleValue, t.middleColor)) : e > t.middleValue ? G.getTwoColorGradientRGB(e, new be(t.middleValue, t.middleColor, t.maxValue, t.maxColor)) : `rgb(${t.middleColor.r}, ${t.middleColor.g}, ${t.middleColor.b})`;
  }
}
class uo {
  constructor(e, t, o, i, s, r) {
    this.minValue = e, this.minColor = t, this.middleValue = o, this.middleColor = i, this.maxValue = s, this.maxColor = r;
  }
}
export {
  ie as AbstractAreaModel,
  Gt as AreaMapFactory,
  Xt as AreaModel,
  D as AreaModelArrayOfArrays,
  Yt as AreaModelCellGroups,
  _ as AreaModelHidden,
  Ue as AreaModelObjectArray,
  ge as AreaModelObjectArrayWithColumndefs,
  he as AreaModelTree,
  T as AreaObjectMap,
  jt as AutoRestoreOptions,
  et as AvoidDoubleExecution,
  Qe as CellGroup,
  Ze as CellGroupExt,
  J as CellGroupExtCellRenderer,
  A as CellRange,
  I as CellgroupFactory,
  qt as CheckboxBooleanPropertyCellRenderer,
  pe as CheckboxCellRenderer,
  Wt as CheckboxColumnDef,
  Ke as CheckboxModel,
  Ft as ChunkData,
  _e as ColAndRowspanModel,
  Ie as CollapsedExpandedData,
  co as ColorRgb,
  V as ColumnDef,
  ve as ConvenienceDomService,
  N as CopyService,
  ne as CssVars,
  Qt as DateToIntlDDMMYYYYCellRenderer,
  Jt as DateToIsoCellRenderer,
  Zt as DateToLocaleDateCellRenderer,
  io as DateToTecCellRenderer,
  B as DefaultRowHeights,
  De as EleScope,
  re as EventAdapter,
  ae as FalseFn,
  Ne as FocusModel,
  Le as GeCellIndices,
  G as GeCssColorUtil,
  Kt as GeFilterService,
  Nt as GeKeyEvent,
  te as GeModelChangeEvent,
  Q as GeMouseEvent,
  F as GeoData,
  $ as Icon,
  $t as IndexAndPx,
  Ge as InputCellRenderer,
  Oe as InputHandler,
  L as LicenseManager,
  eo as MaleFemaleToIconCellRenderer,
  Ae as MouseHandler,
  Re as MouseTargetData,
  ho as MultiRowsSelectionModel,
  to as NumberCellProgressBarCellRenderer,
  so as NumberCellRenderer,
  Be as OsxShortcutActionIdMapping,
  ue as Padding,
  lo as PositiveAndNegativeNumberRenderer,
  no as ProgressBarCellRenderer,
  Fe as RenderScope,
  Ut as Renderer,
  qe as RequestChunk,
  Ce as SelectCellRenderer,
  we as SelectionModel,
  Pe as SelectionService,
  Ve as ShortcutService,
  We as SimpleDomService,
  w as Size,
  $e as SortItem,
  me as SortedOptions,
  ro as StarRatingCellRenderer,
  ke as StoreStateCollapsedExpandService,
  Ee as StoreStateScrollPosService,
  Te as StoreStateSortingService,
  Me as TableApi,
  zt as TableCellUpdateEvent,
  O as TableFactory,
  Y as TableModel,
  _t as TableModelAndOptions,
  U as TableOptions,
  Se as TableScope,
  uo as ThreeColorGradientArg,
  ce as TreeCheckboxModel,
  q as TreeFactory,
  fe as TreeOptions,
  le as TreeRow,
  Ye as TreeRowService,
  oo as TrueFalseCellRenderer,
  Xe as TrueFn,
  be as TwoColorGradientArg,
  Je as ValueLabel,
  He as WindowsShortcutActionIdMapping,
  Dt as actionIds,
  Bt as allCenter,
  Ht as allLeft,
  Vt as allRight,
  Lt as bodyCenter,
  Ot as bodyLeft,
  Pt as bodyRight,
  ao as editInputPipeForNumber,
  Z as getAreaIdentByString,
  K as isAreaModelTree,
  ye as isCheckboxColumnDef,
  H as isTreeRow,
  Tt as px0,
  kt as px10,
  xt as px100,
  St as px110,
  wt as px120,
  mt as px130,
  ft as px140,
  bt as px150,
  pt as px160,
  gt as px170,
  ut as px180,
  ct as px190,
  It as px20,
  de as px200,
  ht as px210,
  dt as px220,
  at as px230,
  lt as px240,
  nt as px250,
  rt as px260,
  st as px270,
  it as px280,
  ot as px290,
  Et as px30,
  tt as px300,
  Mt as px40,
  At as px50,
  Rt as px60,
  vt as px70,
  yt as px80,
  Ct as px90
};
