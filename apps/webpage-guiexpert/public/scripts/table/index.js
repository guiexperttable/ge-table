function ot(h, e = 500) {
  let t = null, s = 0;
  return function(...o) {
    const i = Date.now(), r = e - (i - s);
    r <= 0 ? (h.apply(this, o), s = i) : t || (t = window.setTimeout(() => {
      h.apply(this, o), s = Date.now(), t = null;
    }, r));
  };
}
function Ce(h, e = 500) {
  let t = null;
  return function(...s) {
    t && window.clearTimeout(t), t = window.setTimeout(() => {
      h.apply(this, s), t = null;
    }, e);
  };
}
function it(h = 500) {
  return function(e, t, s) {
    let o = 0;
    const i = s.value;
    return s.value = function(...r) {
      if (!(Date.now() - o < h))
        return o = Date.now(), i.apply(this, r);
    }, s;
  };
}
class O {
  // The constructor is private to prevent direct construction calls
  // with the `new` operator
  constructor() {
    this.alreadySet = !1;
  }
  static getInstance() {
    return O.instance || (O.instance = new O()), O.instance;
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
function $(h) {
  return h && h.type === "TreeRow";
}
function Y(h) {
  return h && h.type === "AreaModelTree";
}
function ve(h) {
  return h && h.type === "CheckboxColumnDef";
}
class Z {
  constructor(e = -1, t = -1, s = -1, o = -1, i, r, n, l = 0, a = 0, c = 0, d = "") {
    this.rowIndex = e, this.rowTop = t, this.columnIndex = s, this.columnLeft = o, this.areaIdent = i, this.sideIdent = r, this.originalEvent = n, this.clickCount = l, this.draggingX = a, this.draggingY = c, this.action = d;
  }
  clone() {
    return new Z(
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
class P {
  constructor(e = ">", t = "", s = []) {
    this.content = e, this.style = t, this.classes = s;
  }
}
class me {
  constructor(e = new P(
    ">",
    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
    ["gt-table-tree-arrow-expanded"]
  ), t = new P(
    ">",
    "",
    ["ge-table-tree-arrow-collapsed"]
  ), s = new P(
    ">",
    "color:transparent;",
    ["gt-table-tree-arrow-hidden"]
  ), o = new P(
    "↕",
    "",
    ["gt-table-tree-arrow-expanded-all"]
  )) {
    this.arrowExpanded = e, this.arrowCollapsed = t, this.arrowPlaceholder = s, this.arrowExpandCollapseAll = o;
  }
}
class be {
  constructor(e = new P("↑", "", ["ge-header-sorted-asc"]), t = new P("↓", "", ["ge-header-sorted-desc"]), s = new P("↑", "color:transparent;", [])) {
    this.iconAsc = e, this.iconDesc = t, this.iconPlaceholder = s;
  }
}
class Re {
  constructor(e) {
    this.domService = e;
  }
  setStyle(e, t, s) {
    return this.domService.setStyle(e, t, s), e;
  }
  applyStyle(e, t) {
    for (const s in t)
      this.domService.setStyle(e, s, t[s]);
    return e;
  }
  applyDisplayNoneStyle(e) {
    return this.domService.setStyle(e, "display", "none"), e;
  }
  applyDisplayBlockStyle(e) {
    return this.domService.setStyle(e, "display", "block"), e;
  }
  applyStyleInPx(e, t) {
    return Object.entries(t).forEach(([s, o]) => this.domService.setStyle(e, s, o + "px")), e;
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
  applyStyleOverflowAuto(e = "auto", t = "auto", s) {
    return this.domService.setStyle(s, "overflow-x", e), this.domService.setStyle(s, "overflow-y", t), s;
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
    const s = this.domService.createText(t);
    return this.domService.appendChild(e, s), s;
  }
  addClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((s) => this.domService.addClass(t, s)) : this.domService.addClass(t, e), t;
  }
  removeClass(e, t) {
    return e.includes(" ") ? e.split(" ").forEach((s) => this.domService.removeClass(t, s)) : this.domService.removeClass(t, e), t;
  }
  addClasses(e, t) {
    if (e)
      for (const s of e)
        this.domService.addClass(t, s);
    return t;
  }
  setAttribute(e, t, s) {
    return t && s && this.domService.setAttribute(e, t, s), e;
  }
  createAreaDivWithClass(e, t, s, o) {
    const i = this.domService.createElement("div");
    return this.addClass(e, i), this.domService.setAttribute(i, "data-area", s), this.domService.setAttribute(i, "data-side", o), this.domService.appendChild(t, i), i;
  }
  createDivWithClass(e, t) {
    const s = this.domService.createElement("div");
    return this.addClass(e, s), this.domService.appendChild(t, s), s;
  }
  addRowDiv(e, t, s = -1, o, i, r = "") {
    const n = t.index ?? -1, l = this.getDivOrCreateDiv(n, e);
    if (this.domService.addClass(l, "ge-table-row-div"), this.domService.addClass(l, `ge-table-row-div-${t.index}`), o === "body" && i === "center") {
      const a = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
      this.domService.addClass(l, `ge-table-row-${a}`);
    }
    if (this.domService.setStyle(l, "display", "clip"), this.domService.setStyle(l, "position", "absolute"), this.domService.setStyle(l, "left", `${t.left}px`), this.domService.setStyle(l, "top", `${t.top}px`), this.domService.setStyle(l, "width", `${t.width}px`), this.domService.setStyle(l, "height", `${t.height}px`), this.domService.setAttribute(l, "data-row-index", `${s}`), this.domService.setAttribute(l, "data-area", `${o}`), r) {
      const a = this.domService.createText(r);
      this.domService.appendChild(l, a);
    }
    return this.domService.appendChild(e.child, l), l;
  }
  addColumnDiv(e) {
    const { parent: t, geo: s, rowIndex: o = -1, columnIndex: i = -1, areaIdent: r, sideIdent: n, text: l = "", treeArrow: a, tableOptions: c, checkedType: d = void 0, sortState: u } = e, f = c == null ? void 0 : c.treeOptions, p = c == null ? void 0 : c.showCheckboxWihoutExtraColumn, m = this.domService.createElement("div");
    this.domService.addClass(m, "ge-table-col-div"), p && this.domService.addClass(m, "ge-with-checkbox"), this.domService.addClass(m, `ge-table-col-div-${s.index}`), this.domService.setAttribute(m, "data-col-index", `${s.index}`), this.domService.setAttribute(m, "data-row-index", `${o}`), this.domService.setAttribute(m, "data-area", `${r}`);
    const g = ((s == null ? void 0 : s.index) ?? 0) % 2 === 0 ? "even" : "odd";
    if (r === "body" && n === "center" && this.domService.addClass(m, `ge-table-column-${g}`), this.domService.setStyle(m, "display", "clip"), this.domService.setStyle(m, "position", "absolute"), this.domService.setStyle(m, "left", `${s.left}px`), this.domService.setStyle(m, "top", `${s.top}px`), this.domService.setStyle(m, "width", `${s.width}px`), this.domService.setStyle(m, "height", `${s.height}px`), a && a !== "none" && (this.domService.addClass(m, "ge-table-col-tree"), this.addArrowDiv(m, a, f, o, i, r)), p && i === 0 && d && this.addCheckboxToDiv(m, d, r, o), l) {
      const b = a !== "none" && i === 0;
      this.addLabelDiv(m, l, b, o, i, r);
    }
    return u && this.addSortedIcon(m, u, c == null ? void 0 : c.sortedOptions, i), this.domService.appendChild(t, m), m;
  }
  addCheckboxToDiv(e, t, s, o) {
    const i = this.domService.createElement("div"), r = t === "full" ? "checked" : "";
    return i.innerHTML = `
            <input
                type="checkbox"
                data-area="${s}"
                data-row-index="${o}"
                data-input-type="checkbox"
                ${r}
                class="ge-table-row-checkbox"> `, this.domService.setStyle(i, "display", "inline"), this.domService.setStyle(i, "width", "inherit"), this.domService.setAttribute(i, "data-row-index", `${o}`), this.domService.appendChild(e, i), i;
  }
  addLabelDiv(e, t = "", s = !1, o = -1, i = -1, r = "body") {
    const n = this.domService.createElement("div");
    if (this.domService.addClass(n, "ge-table-label-div"), this.domService.setStyle(n, "position", "relative"), this.domService.setStyle(n, "background", "transparent"), this.domService.setStyle(n, "width", "100%"), this.domService.setStyle(n, "height", "100%"), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-col-index", `${i}`), this.domService.setAttribute(n, "data-area", `${r}`), t)
      if (s) {
        const l = this.domService.createText(t);
        this.domService.appendChild(n, l);
      } else {
        const l = this.domService.createElement("div");
        this.domService.appendChild(n, l);
        const a = this.domService.createText(t);
        this.domService.addClass(l, "ge-table-label"), this.domService.appendChild(l, a), this.domService.setAttribute(l, "data-row-index", `${o}`), this.domService.setAttribute(l, "data-col-index", `${i}`), this.domService.setAttribute(l, "data-area", `${r}`);
      }
    return this.domService.appendChild(e, n), n;
  }
  addSortedIcon(e, t = "", s = new be(), o = -1) {
    const i = this.domService.createElement("div");
    this.domService.addClass(i, "ge-table-sorted-icon-div"), this.domService.setStyle(i, "position", "absolute"), this.domService.setStyle(i, "top", "0"), this.domService.setStyle(i, "right", "0"), this.domService.setStyle(i, "width", "20px"), this.domService.setStyle(i, "background", "transparent"), this.domService.setStyle(i, "cursor", "pointer"), this.domService.setAttribute(i, "data-col-index", `${o}`), this.domService.setAttribute(i, "data-area", "header");
    let r;
    t === "asc" ? r = s.iconAsc : t === "desc" ? r = s.iconDesc : r = s.iconPlaceholder;
    const n = r.content, l = this.domService.createText(n);
    this.domService.appendChild(i, l), r.style && this.applyStyleString(i, r.style);
    for (const a of r.classes)
      this.domService.addClass(i, a);
    return this.domService.appendChild(e, i), i;
  }
  addArrowDiv(e, t = "none", s = new me(), o = -1, i = -1, r = "body") {
    const n = this.domService.createElement("div");
    this.domService.addClass(n, "ge-table-tree-arrow-div"), this.domService.setStyle(n, "display", "inline-block"), this.domService.setStyle(n, "position", ""), this.domService.setStyle(n, "width", "20px"), this.domService.setStyle(n, "background", "transparent"), this.domService.setStyle(n, "cursor", "pointer"), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-col-index", `${i}`), this.domService.setAttribute(n, "data-area", `${r}`);
    let l;
    t === "expanded" ? l = s.arrowExpanded : t === "collapsed" ? l = s.arrowCollapsed : l = s.arrowPlaceholder;
    const a = l.content, c = this.domService.createText(a);
    this.domService.appendChild(n, c), l.style && this.applyStyleString(n, l.style);
    for (const d of l.classes)
      this.domService.addClass(n, d);
    return this.domService.appendChild(e, n), n;
  }
  addColumnBorderDivs(e, t, s, o, i) {
    if (e.verticalBorderVisible) {
      const r = `ge-table-${o}-${i}-vertical-border`;
      this.addVerticalBorder(s, t, r);
    }
    if (e.horizontalBorderVisible) {
      const r = `ge-table-${o}-${i}-horizontal-border`;
      this.addHorizontalBorder(s, t, r);
    }
    return t;
  }
  addHorizontalBorder(e, t, s = "ge-table-body-center-horizontal-border") {
    const o = this.domService.createElement("div");
    return this.domService.addClass(o, s), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${e.left}px`), this.domService.setStyle(o, "top", `${e.top}px`), this.domService.setStyle(o, "width", `${e.width}px`), this.domService.setStyle(o, "height", "1px"), this.domService.appendChild(t, o), o;
  }
  addFocusBorderDivs(e, t, s) {
    t = { ...t, width: t.width + 1, height: t.height + 1 };
    let o = this.domService.createElement("div");
    return this.domService.addClass(o, "ge-table-focus-border"), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${t.left}px`), this.domService.setStyle(o, "top", `${t.top}px`), this.domService.setStyle(o, "width", "1px"), this.domService.setStyle(o, "height", `${t.height}px`), this.domService.setStyle(o, "z-index", "9999"), this.applyStyle(o, s), this.domService.appendChild(e, o), o = this.domService.createElement("div"), this.domService.addClass(o, "ge-table-focus-border"), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${t.left + t.width - 1}px`), this.domService.setStyle(o, "top", `${t.top}px`), this.domService.setStyle(o, "width", "1px"), this.domService.setStyle(o, "height", `${t.height}px`), this.domService.setStyle(o, "z-index", "9999"), this.applyStyle(o, s), this.domService.appendChild(e, o), o = this.domService.createElement("div"), this.domService.addClass(o, "ge-table-focus-border"), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${t.left}px`), this.domService.setStyle(o, "top", `${t.top}px`), this.domService.setStyle(o, "width", `${t.width}px`), this.domService.setStyle(o, "height", "1px"), this.domService.setStyle(o, "z-index", "9999"), this.applyStyle(o, s), this.domService.appendChild(e, o), o = this.domService.createElement("div"), this.domService.addClass(o, "ge-table-focus-border"), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${t.left}px`), this.domService.setStyle(o, "top", `${t.top + t.height - 1}px`), this.domService.setStyle(o, "width", `${t.width}px`), this.domService.setStyle(o, "height", "1px"), this.domService.setStyle(o, "z-index", "9999"), this.applyStyle(o, s), this.domService.appendChild(e, o), e;
  }
  addVerticalBorder(e, t, s = "ge-table-body-center-vertical-border") {
    const o = this.domService.createElement("div");
    return this.domService.addClass(o, s), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${e.left}px`), this.domService.setStyle(o, "top", `${e.top}px`), this.domService.setStyle(o, "width", "1px"), this.domService.setStyle(o, "height", `${e.height}px`), this.domService.appendChild(t, o), o;
  }
  addDiv(e, t, s = "") {
    const o = this.domService.createElement("div");
    return s && this.domService.addClass(o, s), this.domService.setStyle(o, "display", "clip"), this.domService.setStyle(o, "position", "absolute"), this.domService.setStyle(o, "left", `${t.left}px`), this.domService.setStyle(o, "top", `${t.top}px`), this.domService.setStyle(o, "width", `${t.width}px`), this.domService.setStyle(o, "height", `${t.height}px`), this.domService.appendChild(e, o), o;
  }
  applyStyleString(e, t) {
    const s = t.split(";").map((o) => o.trim()).filter((o) => o);
    for (const o of s) {
      const [i, r] = o.split(":");
      this.domService.setStyle(e, i.trim(), r.trim());
    }
  }
  getDivOrCreateDiv(e, t) {
    let s = t.cache[e];
    return s ? (s.innerText = "", s) : (s = this.domService.createElement("div"), t.cache[e] = s, s);
  }
}
const Q = (h) => h === "header" ? "header" : h === "footer" ? "footer" : "body";
class Ae {
  constructor(e, t) {
    if (this.rowIdx = -1, this.colIdx = -1, this.action = null, this.inputType = null, this.className = "", e !== null && (e instanceof HTMLDivElement || e instanceof HTMLSpanElement || e instanceof HTMLInputElement)) {
      this.className = e.className, this.action = e.getAttribute("data-ge-action"), this.inputType = e.getAttribute("data-input-type"), this.rowIdx = Number(e.getAttribute("data-row-index")), this.colIdx = Number(e.getAttribute("data-col-index"));
      const s = e.getAttribute("data-area");
      if (s && (this.areaIdent = Q(s), this.areaModel = t.tableModel.getAreaModel(this.areaIdent), this.row = this.areaModel.getRowByIndex(this.rowIdx)), e instanceof HTMLInputElement) {
        const o = e;
        this.value = o.value;
      }
    }
  }
}
class Ee {
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
    const s = new Ae(e.target, this.tableScope);
    if (s.action === "toggleExpandCollapseAll")
      this.expandedAll = !this.expandedAll, this.tableScope.toggleExpandCollapseAll(this.expandedAll), e.preventDefault(), e.stopPropagation();
    else if (s.action === "toggleHeaderGroup")
      this.tableScope.toggleHeaderGroup(s), e.preventDefault(), e.stopPropagation();
    else if (s.inputType === "checkbox" && s.areaIdent)
      this.tableScope.toggleRowCheckbox(s.rowIdx, s.colIdx, s.areaIdent), e.preventDefault(), e.stopPropagation();
    else if ($(s.row) && s.areaModel) {
      const o = s.colIdx === this.getArrowColumnIndex() && e.altKey, i = s.className.includes("ge-table-tree-arrow-div");
      if (o || i) {
        e.preventDefault(), e.stopPropagation();
        const r = s.row;
        r.expanded = !r.expanded, "recalcVisibleTreeRows" in s.areaModel && s.areaModel.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(r);
      }
    }
    if (s.areaIdent === "body" && this.tableScope.tableOptions.getFocusModel) {
      const o = this.tableScope.tableOptions.getFocusModel();
      o == null || o.clear(), o == null || o.setFocus(s.rowIdx, s.colIdx);
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
      const t = e.target, s = t.getAttribute("data-area"), o = Q(s), i = Number(t.getAttribute("data-row-index")), r = Number(t.getAttribute("data-col-index")), n = this.tableScope.tableModel.getAreaModel(o);
      if (s && o === "header")
        this.tableScope.tableModel.isSortable(r) && (this.tableScope.clearSelection(), this.tableScope.onHeaderDblClicked(e, i, r));
      else if (t.getAttribute("data-row-index")) {
        const l = n.getRowByIndex(i);
        if (s && o === "body" && n.isEditable(i, r) && (this.tableScope.clearSelection(), this.tableScope.initRenderEditor(i, r)), $(l) && r === this.getArrowColumnIndex()) {
          e.preventDefault(), e.stopPropagation();
          const a = l;
          a.expanded = !a.expanded, "recalcVisibleTreeRows" in n && n.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(a);
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
    var s;
    this.mouseEvent = e, this.geMouseEventOld = (s = this.geMouseEvent) == null ? void 0 : s.clone(), this.geMouseEvent = this.tableScope.createGeMouseEvent(e), this.geMouseEvent && (this.geMouseEvent.clickCount = t), this.tableScope.onMouseClicked(this.geMouseEvent, this.geMouseEventOld), this.tableScope.publishGeMouseEvent(this.geMouseEvent), t === 1 && this.tableScope.debounceRepaint();
  }
  /**
   * Update the collapsed/expanded state of a tree row.
   *
   * @param {TreeRowIf<any>} tr - The tree row object.
   * @returns {void}
   */
  updateCollapsedExpandedState(e) {
    var s, o, i, r, n;
    const t = (o = (s = this.tableScope.tableOptions) == null ? void 0 : s.autoRestoreOptions) == null ? void 0 : o.getRowId;
    if (t) {
      const l = (i = this.tableScope.storeStateCollapsedExpandService) == null ? void 0 : i.collapsedExpandedStateGet().mode, a = l === "collapsed" && !e.expanded || l === "expanded" && e.expanded, c = l === "collapsed" && e.expanded || l === "expanded" && !e.expanded, d = t(e.data);
      a ? (r = this.tableScope.storeStateCollapsedExpandService) == null || r.collapsedStateIdsPush(d) : c && ((n = this.tableScope.storeStateCollapsedExpandService) == null || n.collapsedStateIdsRemove(d));
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
   * Recalculates the column widths of the table.
   *
   * @param {number} clientWidth - The width of the client area.
   *
   * @return {void}
   */
  recalcColumnWidths(e) {
    this.tableScope.recalcColumnWidths(e);
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
   * Downloads an Excel file containing data from the table's header, body, and footer areas.
   * Extracts the table data into a 2D matrix and uses the Excel service to generate and download the file.
   *
   * @return {void} No return value, downloads the Excel file directly.
   */
  downloadExcel() {
    const e = [], t = this.tableScope.tableModel.getColumnCount(), s = ["header", "body", "footer"];
    for (const o of s) {
      const i = this.tableScope.tableModel.getAreaModel(o), r = (i == null ? void 0 : i.getRowCount()) ?? 0;
      for (let n = 0; n < r; n++) {
        const l = [];
        e.push(l);
        for (let a = 0; a < t; a++)
          l.push(i.getValueAt(n, a));
      }
    }
    return this.tableScope.excelService.downloadExcel(e, "table.xlsx");
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
      const s = e;
      for (const o of [...s]) {
        const [
          i,
          r
        ] = o;
        t[i] = r;
      }
    }
    return t;
  }
  checkAndPersistItem(e, t) {
    const s = this.getStorageKeyFn;
    if (s) {
      const o = s();
      if (o) {
        const i = o + e;
        if ((t + "").includes("Map")) {
          const r = this.autoConvertMapToObject(t);
          this.persistItem(i, r);
        } else
          this.persistItem(i, t);
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
class Te extends ee {
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
        const s = t + this.SCROLL_STATE;
        let o = this.loadFromLocalStorage(s);
        this.scrollOffset = o || [0, 0];
      }
    }
  }
}
class ke {
  constructor(e = "collapsed", t = [], s = !1, o = !1) {
    this.mode = e, this.rowIds = t, this.allCollapsed = s, this.allExpanded = o;
  }
}
class Ie extends ee {
  constructor(e) {
    super(e), this.COLLAPSED_EXPANDED_STATE = "collapsedExpandedState", this.collapsedExpandedState = new ke(), this.load();
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
        const s = t + this.COLLAPSED_EXPANDED_STATE, o = this.loadFromLocalStorage(s);
        o && (this.collapsedExpandedState = o);
      }
    }
  }
  persist() {
    this.checkAndPersistItem(this.COLLAPSED_EXPANDED_STATE, this.collapsedExpandedState);
  }
}
class De extends ee {
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
        const s = t + this.SORTING_STATE, o = this.loadFromLocalStorage(s);
        this.sortItems = o || [];
      }
    }
  }
}
class L {
  constructor(e = 0, t = 0, s = 0, o = 0, i) {
    this.left = e, this.width = t, this.height = s, this.top = o, this.index = i;
  }
}
class Fe {
  constructor(e, t, s, o) {
    this.hostElement = e, this.tableModel = t, this.dom = s, this.tableOptions = o, this.scrollTop = 0, this.areaBodyWestGeo = new L(), this.areaBodyCenterGeo = new L(), this.areaBodyEastGeo = new L();
    const i = this.hostElement;
    i.innerText = "", this.dom.setAttribute(i, "tabindex", "0"), this.dom.setStyle(
      this.dom.addClass("ge-table", i),
      "position",
      "relative"
    ), this.hoverRow = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-hover-row", i)
    ), this.hoverColumn = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-hover-column", i)
    ), this.draggingColumn = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-dragging-column", i)
    ), this.areaHeaderWest = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-header ge-table-header-west", i, "header", "west")
      )
    ), this.areaHeaderCenter = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-header ge-table-header-center", i, "header", "center")
      )
    ), this.areaHeaderEast = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-header ge-table-header-east", i, "body", "east")
      )
    ), this.areaBodyWest = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-body ge-table-body-west", i, "body", "west")
      )
    ), this.areaBodyEast = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-body ge-table-body-east", i, "body", "east")
      )
    ), this.areaFooterWest = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-footer ge-table-footer-west", i, "footer", "west")
      )
    ), this.areaFooterCenter = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-footer ge-table-footer-center", i, "footer", "center")
      )
    ), this.areaFooterEast = s.appendRelativeChildDiv(
      s.applyStylePosistionAbsolute(
        s.createAreaDivWithClass("ge-table-footer ge-table-footer-east", i, "footer", "east")
      )
    ), this.scrollViewport = s.applyStyleOverflowAuto(
      this.tableOptions.overflowX ?? "auto",
      this.tableOptions.overflowY ?? "auto",
      s.applyStyleNoPadding(
        s.applyStylePosistionAbsolute(
          s.createAreaDivWithClass("ge-table-scroll-viewport", i, "body", "center")
        )
      )
    ), this.contentWrapperDiv = s.applyStyleNoPadding(
      s.applyStylePosistionRelative(
        s.createDivWithClass("ge-table-scroll-content-wrapper", this.scrollViewport)
      )
    ), this.contentDiv = s.applyStyleNoPadding(
      s.applyStylePosistionRelative(
        s.createDivWithClass("ge-table-scroll-content", this.contentWrapperDiv)
      )
    ), this.areaBodyCenter = s.appendRelativeChildDiv(
      s.createDivWithClass("ge-table-body-center", this.contentDiv)
    ), this.borderHeaderBottom = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-header-border", i)
    ), this.borderFixedWest = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-west-fixed-column-border", i)
    ), this.borderFixedEast = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-east-fixed-column-border", i)
    ), this.borderFooterTop = s.applyStylePosistionAbsolute(
      s.createDivWithClass("ge-table-footer-border", i)
    );
  }
  /**
   * Adjusts the containers and rows of the table based on the current state.
   *
   * @return {void}
   */
  adjustContainersAndRows() {
    const e = this.tableModel.getPadding(), t = this.hostElement.clientWidth, s = this.hostElement.clientHeight;
    this.dom.applyStyle(this.scrollViewport, {
      width: `${t - e.left}px`,
      height: `${s - e.top}px`,
      top: `${e.top}px`,
      left: `${e.left}px`
    }), this.scrollTop = this.scrollViewport.scrollTop, this.dom.applyStyle(this.contentDiv, {
      width: `${this.scrollViewport.clientWidth}px`,
      height: `${this.scrollViewport.clientHeight}px`,
      top: `${this.scrollTop}px`,
      left: `${this.scrollViewport.scrollLeft}px`
    }), this.areaBodyWestGeo.width = e.left, this.areaBodyWestGeo.height = s - e.top - e.bottom, this.areaBodyWestGeo.top = e.top, this.areaBodyWestGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyWest.parent, this.areaBodyWestGeo), this.tableOptions.fixedWestSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedWest, {
        width: "1px",
        height: `${this.areaBodyWestGeo.height}px`,
        top: `${this.areaBodyWestGeo.top}px`,
        left: `${this.areaBodyWestGeo.width}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedWest), this.areaBodyEastGeo.width = e.right, this.areaBodyEastGeo.height = s - e.top - e.bottom, this.areaBodyEastGeo.top = e.top, this.areaBodyEastGeo.left = t - e.right, this.dom.applyStyleInPx(this.areaBodyEast.parent, this.areaBodyEastGeo), this.tableOptions.fixedEastSeparatorBorderVisible && this.tableModel.getFixedLeftColumnCount() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFixedEast, {
        width: "1px",
        height: `${this.areaBodyEastGeo.height}px`,
        top: `${this.areaBodyEastGeo.top}px`,
        left: `${this.areaBodyEastGeo.left}px`
      })
    ) : this.dom.applyDisplayNoneStyle(this.borderFixedEast), this.areaBodyCenterGeo.width = t - e.left - e.right, this.areaBodyCenterGeo.height = s - e.top - e.bottom, this.areaBodyCenterGeo.top = 0, this.areaBodyCenterGeo.left = 0, this.dom.applyStyleInPx(this.areaBodyCenter.parent, this.areaBodyCenterGeo), this.dom.applyStyle(this.areaHeaderCenter.parent, {
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
      top: `${s - e.bottom}px`,
      left: "0"
    }), this.dom.applyStyle(this.areaFooterCenter.parent, {
      width: `${t - e.left - e.right}px`,
      height: `${e.bottom}px`,
      top: `${s - e.bottom}px`,
      left: `${e.left}px`
    }), this.dom.applyStyle(this.areaFooterEast.parent, {
      width: `${e.right}px`,
      height: `${e.bottom}px`,
      top: `${s - e.bottom}px`,
      left: `${t - e.right}px`
    }), this.tableOptions.footerSeparatorBorderVisible && this.tableModel.isFooterVisibe() ? this.dom.applyDisplayBlockStyle(
      this.dom.applyStyle(this.borderFooterTop, {
        width: `${t}px`,
        height: "1px",
        top: `${s - e.bottom}px`,
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
  constructor(e, t, s, o, i = !1) {
    this.r1 = e, this.c1 = t, this.r2 = s, this.c2 = o, this.gammaRange = i;
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
class Le {
  constructor(e, t) {
    this.tableModel = e, this.areaModel = t, this.colAndRowspanRanges = void 0;
  }
  init() {
    if (this.areaModel.getMaxColspan() < 2 && this.areaModel.getMaxRowspan() < 2)
      return;
    this.colAndRowspanRanges = [];
    const e = this.areaModel.getRowCount(), t = this.tableModel.getColumnCount();
    for (let s = 0; s < e; s++)
      for (let o = 0; o < t; o++) {
        let i = this.areaModel.getColspanAt(s, o), r = this.areaModel.getRowspanAt(s, o);
        if (i > 1 || r > 1) {
          i === 0 && (i = 1), r === 0 && (r = 1);
          const n = "gammaCells" in this.areaModel;
          this.colAndRowspanRanges.push(
            new A(s, o, s + r - 1, o + i - 1, n)
          );
        }
      }
  }
  getRanges() {
    return this.colAndRowspanRanges ? this.colAndRowspanRanges : [];
  }
  isInRange(e, t) {
    if (this.colAndRowspanRanges) {
      for (const s of this.colAndRowspanRanges)
        if (s.isInRange(e, t))
          return !0;
    }
    return !1;
  }
}
class I {
  constructor(e, t, s) {
    this.header = e, this.body = t, this.footer = s;
  }
}
class Pe extends Fe {
  constructor(e, t, s, o) {
    var r, n;
    super(e, t, s, o), this.dragging = !1, this.editing = !1, this.storedColumnWidths = [], this.scrollLeft = 0, this.scrollViewportLeft = 0, this.scrollFactorY = 0, this.scrollFactorX = 0, this.cleanupFunctions = {
      header: [],
      body: [],
      footer: []
    }, this.tree = !1, this.colAndRowspanModels = new I(), this.firstVisibleRowIndex = -1, this.draggingTargetColumnIndex = -1, this.removables = [], this.tableModel.getSelectionModel ? this.getSelectionModel = this.tableModel.getSelectionModel : (r = this.tableOptions) != null && r.getSelectionModel && (this.getSelectionModel = this.tableOptions.getSelectionModel), (n = this.tableOptions) != null && n.getFocusModel && (this.getFocusModel = this.tableOptions.getFocusModel), Y(t.getAreaModel("body")) && (this.tree = !0), ["header", "body", "footer"].forEach(
      (l) => {
        var a;
        this.colAndRowspanModels[l] = new Le(t, t.getAreaModel(l)), (a = this.colAndRowspanModels[l]) == null || a.init();
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
    var o;
    let s = (o = this.tableModel.getColumnDef(t)) == null ? void 0 : o.getEditRenderer;
    if (s || (s = this.tableOptions.getEditRenderer), s)
      if (this.editorRenderer = s(e, t), this.editorRenderer) {
        this.editorRendererRow = e, this.editorRendererColumn = t, this.editing = !0, this.repaint();
        const i = document.querySelector("input.ge-table-cell-editor-input");
        i && i.focus();
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
   * Recalculates the column widths of the table.
   *
   * @param {number} [clientWidth] - The client width of the table. If not provided, the client width of the scroll viewport will be used.
   *
   * @return {undefined}
   */
  recalcColumnWidths(e) {
    let t = e || this.scrollViewport.clientWidth;
    this.tableModel.setParentWidth(t), this.tableModel.init(), this.repaintHard();
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
      new L(0, this.hostElement.clientWidth, 1, 0),
      this.hostElement,
      "ge-table-border"
    )), this.tableOptions.tableBottomBorderVisible && this.removables.push(this.dom.addHorizontalBorder(
      new L(0, this.hostElement.clientWidth, 1, this.hostElement.clientHeight - 1),
      this.hostElement,
      "ge-table-border"
    )), this.tableModel.getFixedLeftColumnCount() > 0 && this.removables.push(this.dom.addVerticalBorder(
      new L(this.areaBodyWest.child.clientWidth, 1, this.hostElement.clientHeight, 0),
      this.hostElement,
      "ge-table-body-west-vertical-border"
    )), ((e = this.tableModel.getAreaModel("header")) == null ? void 0 : e.getRowCount()) > 0 && this.removables.push(this.dom.addHorizontalBorder(
      new L(0, this.hostElement.clientWidth, 1, this.areaHeaderCenter.child.clientHeight),
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
      (s) => {
        this.tableModel.getAreaModel(s.area).setValue(s.rowIndex, s.columnIndex, s.value), t || this.rerenderCellContent(s);
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
  rerenderCellContent({ area: e, rowIndex: t, columnIndex: s, value: o, cssClasses: i }) {
    const r = this.tableModel.getAreaModel(e), n = 'div[data-col-index="' + s + '"][data-row-index="' + t + '"][data-area="' + e + '"]', l = document.querySelector(n);
    if (l) {
      let a;
      const c = this.editorRenderer && this.editorRendererRow === t && this.editorRendererColumn === s;
      let d;
      if (c ? d = this.editorRenderer : d = r.getCellRenderer(t, s), l.innerText = "", this.applyCssClasses(l, i), d)
        a = d.render(l, t, s, e, r, o, this.dom.domService), a && this.cleanupFunctions[e].push(a);
      else {
        const p = `${o}`;
        this.dom.addLabelDiv(l, p, !1, t, s, e);
      }
      const u = r.getCustomClassesAt(t, s);
      u.length && this.dom.addClasses(u, l);
      const f = r.getCustomStyleAt(t, s);
      if (f)
        for (const p in f)
          this.dom.setStyle(l, p, f[p]);
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
    e != null && e.length && (this.storedColumnWidths = e.map((t, s) => this.tableModel.getColumnWidth(s)));
  }
  getAreaAndSideIdentByAttr(e) {
    if (e) {
      const t = this.getStringByAttr(e, "data-area"), s = this.getStringByAttr(e, "data-side");
      if (s && t)
        return [t, s];
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
    var s;
    if (e) {
      const o = (s = e.closest("[" + t + "]")) == null ? void 0 : s.getAttribute(t);
      if (o)
        return Number(o);
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
    var s;
    if (e) {
      const o = (s = e.closest("[" + t + "]")) == null ? void 0 : s.getAttribute(t);
      if (o)
        return o;
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
    const s = this.getArea(e, "west"), o = this.getArea(e, "center"), i = this.getArea(e, "east"), r = o.child.clientHeight;
    s.child.innerText = "", o.child.innerText = "", i.child.innerText = "";
    const n = 0, l = this.areaBodyCenterGeo.width, a = this.tableModel.getPadding(), c = this.tableModel.getAreaModel(e), d = c.getRowCount();
    for (; this.cleanupFunctions[e].length; ) {
      const b = this.cleanupFunctions[e].shift();
      b && b();
    }
    let u = t;
    const f = this.tableModel.getColumnCount(), p = this.tableModel.getFixedRightColumnCount(), m = this.tableModel.getFixedLeftColumnCount();
    for (let b = 0; b < d; b++) {
      const y = u, C = b === d - 1, R = this.tableModel.getRowHeight(e, b);
      if (y + R > 0) {
        this.firstVisibleRowIndex = b;
        let S = { left: n, width: l, height: R, top: y, index: b }, w = this.dom.addRowDiv(o, S, b, e, "center");
        const k = m;
        if (this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "center",
          areaModel: c,
          geo: S,
          parent: w,
          rowIndex: b,
          columnIndexStart: k,
          columnIndexEnd: f - p - 1,
          verticalFixed: !1,
          lastRowOfModel: C
        }), a.left > 0 && (S = { left: n, width: this.areaBodyWestGeo.width, height: R, top: y, index: b }, w = this.dom.addRowDiv(s, S, b, e, "west"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "west",
          areaModel: c,
          geo: S,
          parent: w,
          rowIndex: b,
          columnIndexStart: 0,
          columnIndexEnd: k - 1,
          verticalFixed: !0,
          lastRowOfModel: C
        })), a.right > 0 && (S = { left: n, width: this.areaBodyEastGeo.width, height: R, top: y, index: b }, w = this.dom.addRowDiv(i, S, b, e, "east"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "east",
          areaModel: c,
          geo: S,
          parent: w,
          rowIndex: b,
          columnIndexStart: f - p,
          columnIndexEnd: f - 1,
          verticalFixed: !0,
          lastRowOfModel: C
        })), e === "header" && this.tree && b === d - 1) {
          const E = this.dom.applyStyle(
            this.dom.setAttribute(
              this.dom.addDiv(w, new L(16, 20, 20, 8)),
              "data-ge-action",
              "toggleExpandCollapseAll"
            ),
            { cursor: "pointer" }
          ), M = this.tableOptions.treeOptions.arrowExpandCollapseAll;
          if (M) {
            const W = this.dom.domService.createText(M.content);
            this.dom.domService.appendChild(E, W), M.style && this.dom.applyStyleString(E, M.style);
          }
        }
      }
      if (u = u + R, u > r)
        break;
    }
    if (this.colAndRowspanModels && this.colAndRowspanModels[e]) {
      const b = ((g = this.colAndRowspanModels[e]) == null ? void 0 : g.getRanges()) ?? [];
      if (b.length)
        for (const y of b) {
          let C = 0, R = o.child, S = "center";
          if (y.c1 < m)
            R = s.child, S = "west";
          else if (p > 0 && y.c1 >= f - p)
            R = i.child, S = "east";
          else {
            const w = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
            C = this.scrollFactorX * w - this.areaBodyWestGeo.width, S = "center";
          }
          this.drawBigCell(y, C, t, c, R, S);
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
  drawBigCell(e, t, s, o, i, r) {
    const n = s + this.getRowHeights(0, e.r1 - 1, o).reduce((g, b) => g + b, 0), l = this.tableModel.getColumnCount(), a = this.tableModel.getFixedRightColumnCount();
    let c = 0;
    a > 0 && e.c1 >= l - a && (c = l - a);
    const d = t + this.getColumnWidths(c, e.c1 - 1).reduce((g, b) => g + b, 0), u = this.getRowHeights(e.r1, e.r2, o).reduce((g, b) => g + b, 0), f = this.getColumnWidths(e.c1, e.c2).reduce((g, b) => g + b, 0);
    let p = !1;
    const m = this.getSelectionModel ? this.getSelectionModel() : void 0;
    m && (p = m.getSelectionCount(e.r1, e.c1) > 0), e.gammaRange ? this.renderCell({
      areaModel: o,
      areaIdent: o.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: d,
      top: n,
      width: f,
      height: u,
      parent: i,
      cellSelected: p,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }) : this.renderCell({
      areaModel: o,
      areaIdent: o.areaIdent,
      sideIdent: r,
      rowIndex: e.r1,
      columnIndex: e.c1,
      left: d,
      top: n,
      width: f,
      height: u,
      parent: i,
      cellSelected: p,
      lastRowOfModel: !0,
      gammaRange: e.gammaRange
    }), o.areaIdent === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
      rowIndex: e.r1,
      columnIndex: e.c1,
      cellLeft: d,
      cellTop: n,
      cellWidth: f,
      cellHeight: u,
      parent: i
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
  findRowOfImportantRowspanCell(e, t, s) {
    const o = e.getMaxRowspan();
    for (let i = t - 1; i > -1; i--) {
      const r = e.getRowspanAt(i, s);
      if (r > 1 && i + r + 1 >= t)
        return i;
      if (t - i > o)
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
    areaModel: s,
    geo: o,
    parent: i,
    rowIndex: r,
    columnIndexStart: n,
    columnIndexEnd: l,
    verticalFixed: a = !1,
    lastRowOfModel: c = !1
  }) {
    var m;
    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let d = 0;
    if (!a) {
      const g = this.areaBodyCenterGeo.width - this.tableModel.getContentWidthInPixel();
      d = this.scrollFactorX * g;
    }
    const u = 0, f = !!(e === "body" && t);
    let p = d;
    for (let g = n; g <= l; g++) {
      const b = p, y = this.tableModel.getColumnWidth(g);
      if (y > 0 && b + y > 0) {
        let C = o.height;
        const R = s.getRowspanAt(r, g), S = s.getColspanAt(r, g);
        R > 1 && (C = this.getRowHeights(r, r + R - 1, s).reduce((E, M) => E + M, 0));
        let w = y;
        S > 1 && (w = this.getColumnWidths(g, g + S - 1).reduce((E, M) => E + M, 0));
        let k = !1;
        if (this.colAndRowspanModels && this.colAndRowspanModels[e] && (m = this.colAndRowspanModels[e]) != null && m.isInRange(r, g) && (k = !0), this.draggingTargetColumnIndex === g && e !== "header") {
          this.renderDragTargetDiv(i, b, u, w, C);
          const E = { left: b, top: u, width: w, height: C };
          this.dom.addColumnBorderDivs(this.tableOptions, i, E, e, t);
        } else {
          const E = this.renderSelectedBackgroundDiv(k, f, t, s, r, g, i, b, u, w, C);
          "gammaCells" in s && s.getValueAt(r, g) && (k = !1), k || this.renderCell({
            areaModel: s,
            areaIdent: e,
            sideIdent: t,
            rowIndex: r,
            columnIndex: g,
            left: b,
            top: u,
            width: w,
            height: C,
            parent: i,
            cellSelected: E,
            lastRowOfModel: c,
            gammaRange: !0
          }), e === "header" && this.tableOptions.columnsResizable && this.renderHeaderCellResizeHandle({
            rowIndex: r,
            columnIndex: g,
            cellLeft: b,
            cellTop: u,
            cellWidth: w,
            cellHeight: C,
            parent: i
          });
        }
      }
      if (p = p + y, p > this.areaBodyCenterGeo.width)
        break;
    }
    this.tableOptions.verticalBorderVisible && this.dom.addVerticalBorder(new L(p - 1, 1, o.height, 0), i);
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
    sideIdent: s,
    rowIndex: o,
    index: i,
    left: r,
    width: n,
    height: l,
    top: a,
    parent: c,
    lastRowOfModel: d
  }) {
    var ie;
    const f = this.editorRenderer && this.editorRendererRow === o && this.editorRendererColumn === i ? this.editorRenderer : e.getCellRenderer(o, i), p = { left: r, width: n, height: l, top: a, index: i }, m = e.getRowByIndex(o);
    let g = "none";
    if (i === this.getTreeArrowColumnIndex() && $(m)) {
      const v = m;
      (ie = v.children) != null && ie.length ? v.expanded ? g = "expanded" : g = "collapsed" : g = "hidden";
    }
    let y;
    if (t === "header") {
      const v = this.tableModel.getColumnDef(i);
      (!(v != null && v.sortIconVisible) || v != null && v.sortIconVisible()) && (y = v == null ? void 0 : v.sortState);
    }
    const C = e.getValueAt(o, i), R = f ? "" : `${C}`, S = e.isRowChecked(o), w = this.dom.addColumnDiv(
      {
        parent: c,
        geo: p,
        rowIndex: o,
        columnIndex: i,
        areaIdent: t,
        sideIdent: s,
        text: R,
        treeArrow: g,
        tableOptions: this.tableOptions,
        checkedType: S,
        sortState: y
      }
    ), k = e.getTooltipAt(o, i);
    k && this.dom.setAttribute(w, "title", k);
    const E = this.tableModel.getColumnDef(i);
    E && E.classes[t] && this.dom.addClasses(E.classes[t], w);
    let M;
    f && (M = f.render(w, o, i, t, e, C, this.dom.domService));
    const W = e.getCustomClassesAt(o, i);
    if (W.length && this.dom.addClasses(W, w), this.dom.addColumnBorderDivs(this.tableOptions, c, p, t, s), d && this.dom.addHorizontalBorder({ left: r, width: n, height: l, top: a + l }, c), this.getFocusModel && t === "body") {
      const v = this.getFocusModel();
      v != null && v.hasFocus(o, i) && this.dom.addFocusBorderDivs(c, p, {});
    }
    t === "header" && this.dom.setAttribute(w, "data-ge-action", "drag-column");
    const j = e.getCustomStyleAt(o, i);
    if (j)
      for (const v in j)
        this.dom.setStyle(w, v, j[v]);
    return [w, M];
  }
  /**
   * Applies CSS classes to an HTML element.
   *
   * @param {HTMLDivElement} ele - The HTML element to which CSS classes will be applied.
   * @param {Object.<string, boolean>} cssClasses - An object containing CSS class names as keys and boolean values indicating whether to apply or remove the class.
   * @protected
   */
  applyCssClasses(e, t = {}) {
    e && Object.entries(t).forEach(([s, o]) => {
      o ? this.dom.addClass(s, e) : this.dom.removeClass(s, e);
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
    const s = [];
    for (let o = e; o <= t; o++)
      s.push(this.tableModel.getColumnWidth(o));
    return s;
  }
  /**
   * Retrieves the heights of rows within a specified range.
   *
   * @param {number} startIndex - The index of the first row in the range.
   * @param {number} endIndex - The index of the last row in the range.
   * @param {AreaModelIf} areaModel - The area model.
   * @return {number[]} - An array containing the heights of the rows within the specified range.
   */
  getRowHeights(e, t, s) {
    const o = [];
    for (let i = e; i <= t; i++)
      o.push(s.getRowHeight(i));
    return o;
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
      const t = this.hostElement.clientWidth, s = this.tableModel.getAreaModel("body").getRowHeight(e.rowIndex), o = e.rowTop + this.areaHeaderCenter.parent.clientHeight - this.scrollTop;
      this.dom.applyStyle(this.hoverRow, {
        left: "0",
        top: o + "px",
        width: t + "px",
        height: s + "px",
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
      const t = this.hostElement.clientHeight, s = this.tableModel.getColumnWidth(e.columnIndex), o = this.areaBodyWestGeo.width, i = e.columnLeft + this.tableModel.getPadding().left - this.scrollLeft - o;
      this.dom.applyStyle(this.hoverColumn, {
        left: i + "px",
        top: "0px",
        width: s + "px",
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
  adjustDraggingColumn(e, t, s) {
    var o, i;
    if (this.dragging) {
      const r = this.hostElement.clientHeight, n = this.storedColumnWidths[t];
      if ((o = e.originalEvent) != null && o.clientX) {
        const c = { left: ((i = e.originalEvent) == null ? void 0 : i.clientX) - n / 2, width: n, height: r, top: 0, index: t };
        this.dom.applyStyle(this.draggingColumn, {
          background: "rgba(128,128,128,0.2)",
          display: "block",
          overfllow: "clip"
        }), this.dom.applyStyleInPx(this.draggingColumn, c), s && this.renderContentOfDraggingColumn(c);
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
  renderContentOfDraggingColumnForArea(e, t, s = 0) {
    const o = "center", i = this.tableModel.getAreaModel(t), r = i == null ? void 0 : i.getRowCount();
    if (r) {
      const n = e.index ?? 0, l = this.draggingColumn;
      for (let a = 0; a < r; a++) {
        const c = s, d = i.getRowHeight(a), u = { left: 0, width: e.width, height: d, top: c, index: a }, f = i.getValueAt(a, n), p = i.getCellRenderer(a, n), m = p ? "" : `${f}`, g = {
          parent: l,
          geo: u,
          rowIndex: a,
          columnIndex: n,
          areaIdent: t,
          sideIdent: o,
          text: m
        }, b = this.dom.addColumnDiv(g);
        let y;
        p && (y = p.render(b, a, n, t, i, f, this.dom.domService), y && this.cleanupFunctions[t].push(y));
        const C = i.getCustomClassesAt(a, n);
        C.length && this.dom.addClasses(C, b);
        const R = this.tableModel.getColumnDef(n);
        R && R.classes[t] && this.dom.addClasses(R.classes[t], b), this.dom.addColumnBorderDivs(this.tableOptions, l, u, t, o);
        const S = i.getCustomStyleAt(a, n);
        if (S)
          for (const w in S)
            this.dom.setStyle(b, w, S[w]);
        s = s + d;
      }
    }
    return s;
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
  renderDragTargetDiv(e, t, s, o, i) {
    const r = this.dom.applyStylePosistionAbsolute(
      this.dom.createDivWithClass("ge-table-drop-zone", e)
    );
    return this.dom.setStyle(r, "left", `${t}px`), this.dom.setStyle(r, "top", `${s}px`), this.dom.setStyle(r, "width", `${o}px`), this.dom.setStyle(r, "height", `${i}px`), r;
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
  renderSelectedBackgroundDiv(e, t, s, o, i, r, n, l, a, c, d) {
    let u = !1;
    if (!e && t && o.isSelectable(i, r) && this.getSelectionModel) {
      const f = this.getSelectionModel();
      if (f) {
        const p = f.getSelectionCount(i, r);
        u = p > 0;
        for (let m = 0; m < p; m++) {
          const g = this.dom.applyStylePosistionAbsolute(
            // ge-table-body-west-selected-range
            this.dom.createDivWithClass(`ge-table-${o.areaIdent}-${s}-selected-range`, n)
          );
          this.dom.setStyle(g, "left", `${l}px`), this.dom.setStyle(g, "top", `${a}px`), this.dom.setStyle(g, "width", `${c}px`), this.dom.setStyle(g, "height", `${d}px`);
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
    sideIdent: s,
    rowIndex: o,
    columnIndex: i,
    left: r,
    top: n,
    width: l,
    height: a,
    parent: c,
    cellSelected: d,
    lastRowOfModel: u
  }) {
    const [f, p] = this.addAndRenderCellDiv({
      areaModel: e,
      areaIdent: t,
      sideIdent: s,
      rowIndex: o,
      index: i,
      left: r,
      width: l,
      height: a,
      top: n,
      parent: c,
      lastRowOfModel: u
    });
    d && this.dom.addClass(`ge-table-${t}-${s}-selected-range`, f), p && this.cleanupFunctions[t].push(p);
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
  renderHeaderCellResizeHandle({ rowIndex: e, columnIndex: t, cellLeft: s, cellTop: o, cellWidth: i, cellHeight: r, parent: n }) {
    const l = this.dom.domService, a = this.tableOptions.columnResizeHandleWidthInPx ?? 2, c = l.createElement("div");
    l.setAttribute(c, "data-col-index", `${t}`), l.setAttribute(c, "data-row-index", `${e}`), l.setAttribute(c, "data-area", "header"), l.setAttribute(c, "data-ge-action", "resize-column"), l.addClass(c, "ge-table-column-resize-handle"), l.setStyle(c, "display", "clip"), l.setStyle(c, "position", "absolute"), l.setStyle(c, "cursor", "col-resize"), l.setStyle(c, "left", `${s + i - a}px`), l.setStyle(c, "top", `${o}px`), l.setStyle(c, "width", `${a}px`), l.setStyle(c, "height", `${r}px`), l.appendChild(n, c);
  }
}
class _e {
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
      const t = e.target, s = t.getAttribute("data-area"), o = t.getAttribute("data-row-index"), i = t.getAttribute("data-col-index");
      if (s && o && i) {
        const r = Q(s), n = Number(o), l = Number(i);
        this.tableScope.updateModelValueAfterEdit(r, n, l, t.value);
      }
    }
  }
}
class Be {
  constructor(e = -1, t = -1) {
    this.rowIndex = e, this.columnIndex = t;
  }
}
class te {
  constructor(e) {
    this.cells = e;
  }
  static createSingle(e, t) {
    return new te([new Be(e, t)]);
  }
}
class $e {
  constructor(e) {
    var t, s;
    this.tableScope = e, (t = this.tableScope.tableOptions) != null && t.getSelectionModel && (this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel), (s = this.tableScope.tableOptions) != null && s.getFocusModel && (this.getFocusModel = this.tableScope.tableOptions.getFocusModel);
  }
  onMouseClicked(e, t) {
    var i, r, n, l, a, c, d;
    let s = !1, o = !1;
    if (this.getSelectionModel && this.getFocusModel) {
      const u = this.getSelectionModel(), f = this.getFocusModel();
      u && f && (f.hasFocus(e.rowIndex, e.columnIndex) || (f.setFocus(e.rowIndex, e.columnIndex), this.tableScope.onFocusChanged(f), s = !0), (i = e.originalEvent) != null && i.shiftKey || u.hasSelection() && (u.clear(), s = !0), (r = e.originalEvent) != null && r.shiftKey && this.previousEvt ? (u.addSelection(this.createRangeByEvents(e, this.previousEvt)), o = !0, s = !0) : (n = e.originalEvent) != null && n.altKey && ((l = e.originalEvent) != null && l.ctrlKey || (a = e.originalEvent) != null && a.metaKey) ? (u.removeSelection(A.singleCell(e.rowIndex, e.columnIndex)), o = !0, s = !0) : (c = e.originalEvent) != null && c.ctrlKey || (d = e.originalEvent) != null && d.metaKey ? (u.addSelection(A.singleCell(e.rowIndex, e.columnIndex)), o = !0, s = !0) : (u.firstClick(e.rowIndex, e.columnIndex), s = !0), this.tableScope.onSelectionChanged(u));
    }
    return o ? this.previousEvt = void 0 : this.previousEvt = e == null ? void 0 : e.clone(), s;
  }
  onActionTriggered(e) {
    if (this.getSelectionModel && this.getFocusModel) {
      const t = this.getSelectionModel(), s = this.getFocusModel();
      if (t && s) {
        if (e === "SELECT_ALL")
          return t.selectAll(), this.tableScope.repaint(), !0;
        if (e === "DESELECT_ALL")
          return t.clear(), this.tableScope.repaint(), !0;
        if (e === "TOGGLE_SELECTION") {
          const [o, i] = s.getFocus();
          return t.togglePoint(o, i), this.tableScope.repaint(), !0;
        }
      }
    }
    return !1;
  }
  createRangeByEvents(e, t) {
    t || (t = e);
    const s = Math.min(e.rowIndex, t == null ? void 0 : t.rowIndex), o = Math.max(e.rowIndex, t == null ? void 0 : t.rowIndex), i = Math.min(e.columnIndex, t == null ? void 0 : t.columnIndex), r = Math.max(e.columnIndex, t == null ? void 0 : t.columnIndex);
    return A.create({
      rowIndex1: s,
      columnIndex1: i,
      rowIndex2: o,
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
class Ve {
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
class We {
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
    this.isMacintosh() ? Object.assign(this.shortcutActionIdMapping, new Ve().get()) : Object.assign(this.shortcutActionIdMapping, new He().get());
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
    for (const s of this.listener)
      s.onActionTriggered(e) && (t = !0);
    return t;
  }
  findEntity(e) {
    const t = this.getTokenByEvent(e);
    this.isDebug() && console.debug("ShortcutService tokens    :", t);
    for (const s in this.shortcutActionIdMapping) {
      const o = s.replace(/opt/g, "alt").replace(/cmd/g, "meta").split(/[+ ]/g).sort();
      if (this.areTokensEquals(t, o))
        return this.shortcutActionIdMapping[s];
    }
  }
  areTokensEquals(e, t) {
    if (e.length !== t.length || e.length === 0)
      return !1;
    for (let s = 0; s < e.length; s++)
      if (e[s] !== t[s])
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
class Ne {
  setStyle(e, t, s) {
    return e.style[t] = s, e;
  }
  appendText(e, t) {
    const s = this.createText(t);
    return this.appendChild(e, s), s;
  }
  addClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((s) => e.classList.add(s)) : e.classList.add(t), e;
  }
  removeClass(e, t) {
    return t.includes(" ") ? t.split(" ").forEach((s) => e.classList.remove(s)) : e.classList.remove(t), e;
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
  setAttribute(e, t, s) {
    e.setAttribute(t, s);
  }
}
class Ge {
  render(e, t, s, o, i, r, n) {
    if (i.isEditable(t, s)) {
      n.addClass(e, "ge-table-row-input-div");
      const l = i.getValueAt(t, s);
      e.innerHTML = `
            <input
                type="text"
                value="${l}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${o}"
                data-row-index="${t}"
                data-col-index="${s}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
    }
  }
}
class xe {
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
    let s = 0;
    for (const o of this.ranges)
      o.isInRange(e, t) && s++;
    return this.allSelected && s++, this.isInNegativeRange(e, t) && (s = 0), s;
  }
  isInNegativeRange(e, t) {
    for (const s of this.negativeRanges)
      if (s.isInRange(e, t))
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
      for (let s = t.r1; s <= t.r2; s++)
        !e.has(s) && !this.isInNegativeRange(s, 0) && e.add(s);
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
class ze {
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
class se {
  constructor(e = new P(
    "❯",
    "",
    ["gt-table-icon-expanded"]
  ), t = new P(
    "❯",
    "transform: rotate(180deg) translate(-100%, -100%); transform-origin: 0 0;",
    ["ge-table-icon-collapsed"]
  )) {
    this.iconExpanded = e, this.iconCollapsed = t;
  }
  // `⊖ `,  `⊕ `;
}
const Ue = new xe(), je = new ze("cell");
class K {
  constructor() {
    this.overflowX = "auto", this.overflowY = "auto", this.horizontalBorderVisible = !0, this.verticalBorderVisible = !0, this.footerSeparatorBorderVisible = !0, this.headerSeparatorBorderVisible = !0, this.fixedEastSeparatorBorderVisible = !0, this.fixedWestSeparatorBorderVisible = !0, this.tableTopBorderVisible = !0, this.tableBottomBorderVisible = !0, this.hoverRowVisible = !0, this.hoverColumnVisible = !0, this.columnsResizable = !0, this.columnsDraggable = !0, this.columnResizeHandleWidthInPx = 4, this.defaultRowHeights = {
      header: 34,
      body: 34,
      footer: 34
    }, this.footerVerticalSeparator = !1, this.headerToggleExpandCollapseIcons = !1, this.headerVerticalSeparator = !1, this.treeOptions = new me(), this.headerGroupOptions = new se(), this.showCheckboxWihoutExtraColumn = !1, this.externalFilterFunction = void 0, this.sortedOptions = new be(), this.sortOrder = ["asc", "desc"], this.resizeEventDebounceDelay = 500, this.getEditRenderer = (e, t) => new Ge(), this.getSelectionModel = () => Ue, this.getFocusModel = () => je;
  }
}
const B = class B {
  /**
   * Returns the content to be copied based on the provided table model, selection model, and focus model.
   *
   * @param {TableModelIf} tableModel - The table model for data retrieval.
   * @param {SelectionModelIf} selectionModel - The selection model to determine the selected range.
   * @param {FocusModelIf} focusModel - The focus model to determine the focused cell.
   * @return {Promise<string>} A promise that resolves to the copied content as a string.
   * @throws {string} Throws an error if neither selection nor focus is defined.
   */
  createContent(e, t, s) {
    return new Promise((o, i) => {
      if (t != null && t.hasSelection()) {
        const r = this.mergeRanges(t.getRanges());
        if (r) {
          r.c2 = Math.min(r.c2, e.getColumnCount() - 1), r.r2 = Math.min(r.r2, e.getBodyModel().getRowCount() - 1);
          const n = [];
          for (let l = r.r1; l <= r.r2; l++) {
            const a = [];
            for (let c = r.c1; c <= r.c2; c++) {
              const d = t.isSelected(l, c) ? e.getBodyModel().getTextValueAt(l, c) : "";
              a.push(d);
            }
            n.push(a.join(B.columnSeparatorChar));
          }
          return o(n.join(B.rowSeparatorChar));
        }
      }
      if (s) {
        const [r, n] = s.getFocus(), l = e.getBodyModel().getTextValueAt(r, n);
        return o(l);
      }
      i("Cannot copy, neither selection nor focus defined.");
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
  copyToClipboard(e, t, s) {
    return new Promise((o, i) => {
      this.createContent(
        e,
        t,
        s
      ).then((r) => {
        r && this.copyContent(r).then((n) => {
          o(r);
        }).catch((n) => {
          i();
        });
      }).catch((r) => {
        i();
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
    for (const s of e)
      t ? (t.r1 = Math.min(t.r1, s.r1), t.c1 = Math.min(t.c1, s.c1), t.r2 = Math.max(t.r2, s.r2), t.c2 = Math.max(t.c2, s.c2)) : t = new A(s.r1, s.c1, s.r2, s.c2);
    return t;
  }
};
B.columnSeparatorChar = "	", B.rowSeparatorChar = `
`;
let G = B;
class Xe {
  constructor(e, t = 500) {
    this.tableScope = e, this.debounceDelay = t, new ResizeObserver(Ce(this.handleResize.bind(this), t)).observe(this.tableScope.hostElement);
  }
  handleResize(e) {
    const t = e[0], { width: s } = t.contentRect;
    this.tableScope.recalcColumnWidths(s);
  }
}
class Ye {
  /**
   * Downloads a matrix data as an Excel file.
   *
   * @param {Array<Array<any>>} matrix - A 2D array representing the data to be included in the Excel file. Each inner array corresponds to a row in the sheet.
   * @param {string} [filename='file.xlsx'] - The name of the Excel file to be downloaded. Defaults to 'file.xlsx'.
   * @param {string} [author=''] - The author's name to include as metadata in the Excel file. Optional parameter.
   * @return {void} Does not return a value.
   * @throws {Error} Throws an error if the input matrix is not a valid 2D array or if the filename is an empty string.
   */
  downloadExcel(e, t = "file.xlsx", s = "") {
    if (!Array.isArray(e) || e.some((o) => !Array.isArray(o)))
      throw new Error("Invalid matrix format. Expected a 2D array.");
    if ((t == null ? void 0 : t.trim()) === "")
      throw new Error("Invalid filename. Filename must be a non-empty string.");
    try {
      const o = this.generateBuffer(e, s), i = new Blob([o], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }), r = document.createElement("a");
      r.href = URL.createObjectURL(i), r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
    } catch (o) {
      throw console.error("Error generating Excel file:", o), new Error("Failed to download Excel file.");
    }
  }
  generateMap(e, t = "") {
    const s = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`, o = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Macintosh Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Sheet1</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>`, i = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>${t}</dc:creator><cp:lastModifiedBy>${t}</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2024-12-13T19:45:08Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2024-12-13T19:45:35Z</dcterms:modified></cp:coreProperties>`, r = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/></Relationships>`, n = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="0E2841"/></a:dk2><a:lt2><a:srgbClr val="E8E8E8"/></a:lt2><a:accent1><a:srgbClr val="156082"/></a:accent1><a:accent2><a:srgbClr val="E97132"/></a:accent2><a:accent3><a:srgbClr val="196B24"/></a:accent3><a:accent4><a:srgbClr val="0F9ED5"/></a:accent4><a:accent5><a:srgbClr val="A02B93"/></a:accent5><a:accent6><a:srgbClr val="4EA72E"/></a:accent6><a:hlink><a:srgbClr val="467886"/></a:hlink><a:folHlink><a:srgbClr val="96607D"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Aptos Display" panose="02110004020202020204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:majorFont><a:minorFont><a:latin typeface="Aptos Narrow" panose="02110004020202020204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults><a:lnDef><a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style></a:lnDef></a:objectDefaults><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{2E142A2C-CD16-42D6-873A-C26D2A0506FA}" vid="{1BDDFF52-6CD6-40A5-AB3C-68EB2F1E4D0A}"/></a:ext></a:extLst></a:theme>`, l = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="3" uniqueCount="3"><si><t>a</t></si><si><t>b</t></si><si><t>c</t></si></sst>`, a = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac x16r2 xr" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"><fonts count="1" x14ac:knownFonts="1"><font><sz val="12"/><color theme="1"/><name val="Aptos Narrow"/><family val="2"/><scheme val="minor"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/><extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"><x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/></ext><ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1"/></ext></extLst></styleSheet>`, c = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15 xr xr6 xr10 xr2" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr6="http://schemas.microsoft.com/office/spreadsheetml/2016/revision6" xmlns:xr10="http://schemas.microsoft.com/office/spreadsheetml/2016/revision10" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2"><fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="11207"/><workbookPr defaultThemeVersion="202300"/><mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x15"><x15ac:absPath url="/" xmlns:x15ac="http://schemas.microsoft.com/office/spreadsheetml/2010/11/ac"/></mc:Choice></mc:AlternateContent><xr:revisionPtr revIDLastSave="0" documentId="8_{292BF245-1F37-B045-B1A5-26C42FB62779}" xr6:coauthVersionLast="47" xr6:coauthVersionMax="47" xr10:uidLastSave="{00000000-0000-0000-0000-000000000000}"/><bookViews><workbookView xWindow="11340" yWindow="5060" windowWidth="28040" windowHeight="17440" xr2:uid="{858B8D3F-6246-774D-8903-6D38687B7BC6}"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="181029"/><extLst><ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:workbookPr chartTrackingRefBase="1"/></ext><ext uri="{B58B0392-4F1F-4190-BB64-5DF3571DCE5F}" xmlns:xcalcf="http://schemas.microsoft.com/office/spreadsheetml/2018/calcfeatures"><xcalcf:calcFeatures><xcalcf:feature name="microsoft.com:RD"/><xcalcf:feature name="microsoft.com:Single"/><xcalcf:feature name="microsoft.com:FV"/><xcalcf:feature name="microsoft.com:CNMTM"/><xcalcf:feature name="microsoft.com:LET_WF"/><xcalcf:feature name="microsoft.com:LAMBDA_WF"/><xcalcf:feature name="microsoft.com:ARRAYTEXT_WF"/></xcalcf:calcFeatures></ext></extLst></workbook>`, d = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`, u = /* @__PURE__ */ new Map();
    return u.set("_rels/.rels", s), u.set("docProps/app.xml", o), u.set("docProps/core.xml", i), u.set("xl/_rels/workbook.xml.rels", r), u.set("xl/theme/theme1.xml", n), u.set("xl/worksheets/sheet1.xml", this.getX1WorksheetsSheet1Xml(e)), u.set("xl/sharedStrings.xml", l), u.set("xl/styles.xml", a), u.set("xl/workbook.xml", c), u.set("[Content_Types].xml", d), u;
  }
  getX1WorksheetsSheet1Xml(e) {
    const t = [];
    t.push(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac xr xr2 xr3" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xr:uid="{E15F8FC4-4D40-434C-921A-3D9CFAAA2865}">
  <dimension ref="A1:B3"/>
  <sheetViews>
  <sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr baseColWidth="10" defaultRowHeight="16" x14ac:dyDescent="0.2"/>
  <sheetData>`);
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      t.push('<row r="${r + 1}" spans="1:2" x14ac:dyDescent="0.2">');
      for (let i = 0; i < o.length; i++) {
        const r = o[i], n = this.getCellAddress(s, i);
        if (typeof r == "number")
          t.push(`<c r="${n}"><v>${r}</v></c>`);
        else if (r instanceof Date) {
          const l = r;
          t.push(`<c r="${n}" t="inlineStr"><is><t>${l.toISOString()}</t></is></c>`);
        } else {
          const l = r != null ? this.escapeXml(String(r)) : "";
          t.push(`<c r="${n}" t="inlineStr"><is><t>${l}</t></is></c>`);
        }
      }
      t.push("</row>");
    }
    return t.push(""), t.push(""), t.push('</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'), t.push("</worksheet>"), t.join(`
`);
  }
  escapeXml(e) {
    return e == null ? "" : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  getCellAddress(e, t) {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let o = "";
    for (; t >= 0; )
      o = s[t % 26] + o, t = Math.floor(t / 26) - 1;
    return `${o}${e + 1}`;
  }
  createZip(e) {
    const t = [];
    let s = 0;
    const o = [];
    e.forEach((d, u) => {
      const f = new TextEncoder().encode(u), p = new TextEncoder().encode(d), m = new Uint8Array(30 + f.length), g = new DataView(m.buffer);
      m.set([80, 75, 3, 4], 0), g.setUint16(4, 20, !0), g.setUint16(6, 0, !0), g.setUint16(8, 0, !0), g.setUint16(10, 0, !0), g.setUint16(12, 0, !0), g.setUint32(14, 0, !0), g.setUint32(18, p.length, !0), g.setUint32(22, p.length, !0), g.setUint16(26, f.length, !0), g.setUint16(28, 0, !0), m.set(f, 30), t.push(m, p), o.push({
        path: u,
        offset: s,
        contentSize: p.length
      }), s += m.length + p.length;
    });
    const i = s;
    o.forEach((d) => {
      const u = new TextEncoder().encode(d.path), f = new Uint8Array(46 + u.length), p = new DataView(f.buffer);
      f.set([80, 75, 1, 2], 0), p.setUint16(4, 20, !0), p.setUint16(6, 20, !0), p.setUint16(8, 0, !0), p.setUint16(10, 0, !0), p.setUint16(12, 0, !0), p.setUint16(14, 0, !0), p.setUint32(16, 0, !0), p.setUint32(20, d.contentSize, !0), p.setUint32(24, d.contentSize, !0), p.setUint16(28, u.length, !0), p.setUint16(30, 0, !0), p.setUint16(32, 0, !0), p.setUint16(34, 0, !0), p.setUint16(36, 0, !0), p.setUint32(38, 0, !0), p.setUint32(42, d.offset, !0), f.set(u, 46), t.push(f), s += f.length;
    });
    const r = new Uint8Array(22), n = new DataView(r.buffer);
    r.set([80, 75, 5, 6], 0), n.setUint16(4, 0, !0), n.setUint16(6, 0, !0), n.setUint16(8, o.length, !0), n.setUint16(10, o.length, !0), n.setUint32(12, s - i, !0), n.setUint32(16, i, !0), n.setUint16(20, 0, !0), t.push(r);
    const l = t.reduce((d, u) => d + u.length, 0), a = new Uint8Array(l);
    let c = 0;
    for (const d of t)
      a.set(d, c), c += d.length;
    return a;
  }
  generateBuffer(e, t = "") {
    const s = this.generateMap(e, t);
    return this.createZip(s);
  }
}
class we extends Pe {
  constructor(e, t, s, o, i, r = new G(), n = new Ye()) {
    var c;
    if (super(e, t, new Re(s), o), this.eventListener = i, this.copyService = r, this.excelService = n, this.licenseManager = O.getInstance(), this.selectionService = new $e(this), this.api = new Me(this), this.mouseStartAction = "", this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, this.lastDragFrom = -1, this.lastDragTo = -1, this.firstDraggingRendering = !0, i || (this.eventListener = new re()), (c = this.tableOptions) != null && c.autoRestoreOptions) {
      const d = this.tableOptions.autoRestoreOptions, u = d.getStorageKeyFn;
      u && (d.autoRestoreScrollPosition && (this.storeScrollPosStateService = new Te(u)), d.autoRestoreCollapsedExpandedState && (this.storeStateCollapsedExpandService = new Ie(u)), d.autoRestoreSortingState && (this.storeSortingService = new De(u)));
    }
    this.mouseHandler = new Ee(this), this.inputHandler = new Oe(this), this.resizeHandler = new Xe(this, o.resizeEventDebounceDelay), this.shortcutService = new We(this), this.shortcutService.addListener(this.selectionService);
    const l = this.getSelectionModel ? this.getSelectionModel() : void 0;
    l && l.addEventSelectionChangedListener(this);
    const a = this.getFocusModel ? this.getFocusModel() : void 0;
    a && a.addEventFocusChangedListener(this);
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
  static create(e, t, s = new K(), o = new re(), i = new Ne(), r = new G()) {
    return new we(e, t, i, s, o, r);
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
        const [s, o] = t.getFocus();
        this.tableModel.getBodyModel().isEditable(s, o) && (this.clearSelection(), this.initRenderEditor(s, o));
      }
      return !0;
    }
    if (e === "COPY_2_CLIPBOARD") {
      const t = this.getSelectionModel ? this.getSelectionModel() : void 0, s = this.getFocusModel ? this.getFocusModel() : void 0;
      this.copyService.createContent(this.tableModel, t, s).then((o) => this.copyService.copyContent(o));
    }
    return !1;
  }
  updateModelValueAfterEdit(e, t, s, o) {
    e === "body" && this.tableModel.getAreaModel(e).setValue(t, s, o) && (this.resetEditorRenderer(), this.repaint(), this.eventListener.onModelChanged(te.createSingle(t, s)), this.hostElement.focus());
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
    const t = new Z();
    if (t.originalEvent = e, e) {
      const s = e.target;
      if ([t.areaIdent, t.sideIdent] = this.getAreaAndSideIdentByAttr(s), t.rowIndex = this.getNumberByAttr(s, "data-row-index"), t.columnIndex = this.getNumberByAttr(s, "data-col-index"), t.action = this.getStringByAttr(s, "data-ge-action"), t.areaIdent) {
        const o = this.tableModel.getAreaModel(t.areaIdent);
        t.rowTop = o.getYPosByRowIndex(t.rowIndex);
      }
      if (t.columnLeft = this.tableModel.getXPosByColumnIndex(t.columnIndex), e.ctrlKey && e.altKey) {
        const o = e.clientY - this.hostElement.offsetTop - this.areaHeaderCenter.parent.clientHeight, i = e.clientX - this.hostElement.offsetLeft - this.areaBodyWestGeo.width;
        this.debugOnce(i, o);
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
    var s;
    const t = this.tableModel.getBodyModel();
    Y(t) && (t.toggleExpandCollapseAll(e), this.repaint(), (s = this.storeStateCollapsedExpandService) == null || s.collapsedStateAll(e));
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
  toggleRowCheckbox(e, t, s) {
    var l;
    const o = this.tableModel.getAreaModel(s), i = o.isRowChecked(e), r = i === void 0 || i === "semi" || i === "none";
    o.setRowChecked(e, r), this.repaint();
    const n = (l = o.rowSelectionModel) == null ? void 0 : l.getCheckedRows();
    this.eventListener.onCheckboxChanged(n || []);
  }
  /**
   * Handle mouse click events.
   *
   * @param {GeMouseEvent} evt - The mouse click event.
   * @param {GeMouseEvent | undefined} previousEvt - The previous mouse click event, if any.
   * @returns {void}
   */
  onMouseClicked(e, t) {
    let s = this.selectionService.onMouseClicked(e, t);
    if (!s && this.getFocusModel) {
      this.resetEditorRenderer();
      const o = this.getFocusModel();
      o && (s = o.hasChanged(), o.clearChanged());
    }
    return s;
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
  onHeaderDblClicked(e, t, s) {
    var i, r;
    const o = this.tableModel.getColumnDef(s);
    if (o != null && o.sortable && o.sortable()) {
      e.preventDefault(), e.stopPropagation();
      const n = o.sortStatesOrder ? o.sortStatesOrder : this.tableOptions.sortOrder, l = o.sortState ?? "", a = n[(n.indexOf(l) + 1) % n.length], c = new _e(s, a);
      this.tableModel.doSort([c]) && ((i = this.tableModel.getColumnDefs()) == null || i.forEach((u) => u.sortState = ""), o.sortState = a), this.repaint(), (r = this.storeSortingService) == null || r.setSortItems([c]);
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
    const o = this.tableModel.getAreaModel("body").getYPosByRowIndex(t);
    this.scrollToPixel(0, o);
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
    const s = () => e;
    this.tableOptions.getSelectionModel = s, this.getSelectionModel = s, this.selectionService.getSelectionModel = s, t && this.repaint();
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
      const s = this.getFocusModel();
      if (s) {
        const [o, i] = s.getFocus();
        return s.setFocus(o + t, i + e), this.repaint(), !0;
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
    var s;
    console.clear(), console.info("this.hostElement.offsetTop", this.hostElement.offsetTop), console.info("this.hostElement.scrollHeight", this.hostElement.scrollHeight), console.info("this.scrollViewportTop", this.scrollTop), console.info("this.areaHeaderCenter.parent.clientHeight", this.areaHeaderCenter.parent.clientHeight), console.info("bodyY", t), console.info("bodyX", e), console.info("rows", this.firstVisibleRowIndex), console.info(""), console.info("this.tableModel", this.tableModel), console.info(""), console.info("this.mouseMoveEvent.clientX", (s = this.mouseHandler.mouseEvent) == null ? void 0 : s.clientX), console.info("this.hostElement.offsetLeft", this.hostElement.offsetLeft), console.info("this.areaBodyWestGeo.width", this.areaBodyWestGeo.width);
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
      const s = this.storeScrollPosStateService.getScrollOffset();
      s && this.scrollViewport.scrollTo(...s);
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
      const s = this.storeSortingService.getSortItems();
      s != null && s.length && this.tableModel.getBodyModel().doSort(s);
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
      const s = this.tableOptions.autoRestoreOptions, o = s.getRowId;
      if (s.autoRestoreCollapsedExpandedState && o) {
        const i = this.storeStateCollapsedExpandService.collapsedExpandedStateGet(), r = this.tableModel.getAreaModel("body");
        if (Y(r)) {
          const n = r, l = r.getRowCount();
          for (let a = 0; a < l; a++) {
            const c = r.getRowByIndex(a);
            if (c)
              if (i.allExpanded)
                c.expanded = !0;
              else if (i.allCollapsed)
                c.expanded = !1;
              else {
                const d = o(c.data);
                i.mode === "expanded" ? c.expanded = this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(d) : i.mode === "collapsed" && (c.expanded = !this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(d));
              }
          }
          n.recalcVisibleTreeRows();
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
let le = z;
class ne {
  constructor(e, t = !0, s, o, i = 0, r = !1, n = !1) {
    this.data = e, this.expanded = t, this.children = s, this.parent = o, this.deep = i, this.checked = r, this.keep = n, this.type = "TreeRow";
  }
}
class q {
  static buildTreeRows(e, t = "children", s = 12) {
    const o = [];
    for (const i of e)
      o.push(q.buildTreeRow(i, t, void 0, 0, s));
    return o;
  }
  static buildTreeRow(e, t = "children", s = new ne(e, !0, [], void 0, 0), o = 0, i = 12) {
    var n;
    if (o > i)
      return console.warn("Max deep limit reached: ", o), s;
    const r = e[t];
    if (r)
      for (const l of r) {
        const a = new ne(l, !0, [], s, o + 1);
        if ((n = s.children) == null || n.push(a), q.buildTreeRow(
          l,
          t,
          a,
          o + 1
        ), o > i)
          return console.warn("Max deep limit reached: ", o), s;
      }
    return s;
  }
}
class H {
  constructor(e = 34, t = 34, s = 34) {
    this.header = e, this.body = t, this.footer = s;
  }
}
class x {
  constructor(e = 100, t = "px") {
    this.value = e, this.unit = t;
  }
}
const Ke = () => !0, ae = () => !1;
class V {
  constructor(e, t, s = new x(100, "px"), o = new I(), i = new I(), r = new x(100, "px"), n = new x(100, "px"), l, a, c, d, u, f, p, m, g = () => this.visible) {
    this.property = e, this.headerLabel = t, this.width = s, this.classes = o, this.rendererMap = i, this.minWidth = r, this.maxWidth = n, this.sortable = l, this.sortComparator = a, this.sortState = c, this.sortStatesOrder = d, this.sortIconVisible = u, this.editable = f, this.getEditRenderer = p, this.editInputPipe = m, this.isVisible = g, this.visible = !0, s.unit !== "px" && (this.minWidth = new x(0, "px"), this.maxWidth = new x(1e5, "px"));
  }
  static bodyRenderer(e) {
    return new I(
      void 0,
      e,
      void 0
    );
  }
  static create(e) {
    const t = new I(
      e.headerRenderer,
      e.bodyRenderer,
      e.footerRenderer
    ), s = new I(
      e.headerClasses,
      e.bodyClasses,
      e.footerClasses
    ), o = e.sortIconVisible ?? e.sortable ?? ae, i = e.editable ?? e.editable ?? ae, r = e.isVisible ?? e.isVisible ?? Ke;
    return new V(
      e.property ?? "",
      e.headerLabel ?? "",
      e.width ?? new x(100, "px"),
      s,
      t,
      e.minWidth ?? new x(100, "px"),
      e.maxWidth ?? new x(100, "px"),
      e.sortable,
      e.sortComparator,
      e.sortState,
      e.sortStatesOrder,
      o,
      i,
      e.getEditRenderer,
      e.editInputPipe,
      r
    );
  }
}
const rt = new x(300, "px"), lt = new x(290, "px"), nt = new x(280, "px"), at = new x(270, "px"), ct = new x(260, "px"), dt = new x(250, "px"), ht = new x(240, "px"), ut = new x(230, "px"), gt = new x(220, "px"), pt = new x(210, "px"), ce = new x(200, "px"), ft = new x(190, "px"), mt = new x(180, "px"), bt = new x(170, "px"), xt = new x(160, "px"), wt = new x(150, "px"), St = new x(140, "px"), yt = new x(130, "px"), Ct = new x(120, "px"), vt = new x(110, "px"), Rt = new x(100, "px"), At = new x(90, "px"), Et = new x(80, "px"), Mt = new x(70, "px"), Tt = new x(60, "px"), kt = new x(50, "px"), It = new x(40, "px"), Dt = new x(30, "px"), Ft = new x(20, "px"), Lt = new x(10, "px"), Pt = new x(0, "px");
class oe {
  constructor(e, t = [], s = -1) {
    this.areaIdent = e, this.columnDefs = t, this.defaultRowHeight = s, this.rowSelectionModel = void 0, this.yPositions = [], this.cellRenderers = t.map((o) => o.rendererMap[e]);
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
    var s;
    const t = this.getRowByIndex(e);
    return (s = this.rowSelectionModel) == null ? void 0 : s.isRowChecked(t);
  }
  setRowChecked(e, t) {
    if (this.rowSelectionModel) {
      const s = this.getRowByIndex(e);
      this.rowSelectionModel.checkRow(s, t);
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
    var o, i;
    const s = (o = this.columnDefs) == null ? void 0 : o[t];
    return ((i = s == null ? void 0 : s.editable) == null ? void 0 : i.call(s)) ?? !1;
  }
  setValue(e, t, s) {
    var n;
    const o = (n = this.columnDefs[t]) == null ? void 0 : n.editInputPipe;
    o && (s = o(s, e, t));
    const i = this.getRowByIndex(e), r = this.columnDefs[t].property;
    return r.includes(".") ? this.setPropertyValue(i, r.split("."), s) : (i[r] = s, !0);
  }
  isSelectable(e, t) {
    return !0;
  }
  changeColumnOrder(e, t) {
    this.arrayMove(this.cellRenderers, e, t);
  }
  setPropertyValue(e, t, s) {
    const o = t.shift();
    if (o) {
      const i = e[o];
      return i && t.length ? this.setPropertyValue(i, t, s) : (e[o] = s, !0);
    }
    return !1;
  }
  arrayMove(e, t, s) {
    const o = e.splice(t, 1)[0];
    return e.splice(s, 0, o), e;
  }
  calcYPositions() {
    const e = this.getRowCount();
    this.yPositions = new Array(e + 1), this.yPositions[0] = 0;
    for (let t = 0; t < e; t++)
      this.yPositions[t + 1] = this.getRowHeight(t) + this.yPositions[t];
  }
}
class D extends oe {
  constructor(e, t, s, o = []) {
    super(e, o, s), this.areaIdent = e, this.arr = t, this.defaultRowHeight = s, this.columnDefs = o, this.filteredArr = [...t];
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
  setValue(e, t, s) {
    var i;
    const o = (i = this.columnDefs[t]) == null ? void 0 : i.editInputPipe;
    return o && (s = o(s, e, t)), this.arr[e][t] = s, !0;
  }
  getRowByIndex(e) {
    return this.filteredArr[e];
  }
  getRowHeight(e) {
    return this.defaultRowHeight;
  }
  changeColumnOrder(e, t) {
    this.filteredArr.forEach((s) => this.arrayMove(s, e, t)), super.changeColumnOrder(e, t);
  }
}
class F {
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
  setValue(e, t, s) {
    return !1;
  }
  isSelectable(e, t) {
    return !1;
  }
  changeColumnOrder(e, t) {
  }
}
class qe {
  flattenTree(e, t = []) {
    var s;
    for (const o of e)
      this.isVisible(o) && t.push(o), (s = o.children) != null && s.length && this.flattenTree(o.children, t);
    return t;
  }
  isVisible(e) {
    return e.parent ? e.parent.expanded ? this.isVisible(e.parent) : !1 : !0;
  }
}
class Se {
  genericSortComparator(e, t, s) {
    if (typeof e == "number" && typeof t == "number")
      return s * (e - t);
    if (typeof e == "string" && typeof t == "string")
      return s * e.localeCompare(t);
    if (typeof e == "boolean" && typeof t == "boolean")
      return s * ((e ? -1 : 1) - (t ? -1 : 1));
    if (e instanceof Date && t instanceof Date)
      return s * (e.getTime() - t.getTime());
    if (e instanceof Array && t instanceof Array) {
      const o = e, i = t;
      if (o.length && i.length)
        return this.genericSortComparator(o[0], i[0], s);
    }
    return s * ("" + e).localeCompare("" + t);
  }
}
class de extends oe {
  constructor(e, t, s, o = []) {
    super(e, o, s), this.areaIdent = e, this.rows = t, this.defaultRowHeight = s, this.columnDefs = o, this.type = "AreaModelTree", this.sorterService = new Se(), this.service = new qe(), this.properties = o.map((i) => i.property), this.flattenRows = this.service.flattenTree(t), this.filteredFlattenRows = [...this.flattenRows];
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
    const s = this.getRowByIndex(e);
    if (s) {
      const o = this.properties[t];
      if (o)
        return o.includes(".") ? this.getPropertyValue(s.data, o.split(".")) : s.data[o];
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
    const { columnIndex: t, sortState: s } = e[e.length - 1], o = s === "asc" ? 1 : s === "desc" ? -1 : 0, i = this.properties[t];
    return this.treeSort(this.rows, i, o), this.flattenRows = this.service.flattenTree(this.rows), this.filteredFlattenRows = [...this.flattenRows], !0;
  }
  toggleExpandCollapseAll(e) {
    this.expandAllRecursive(this.rows, e), this.flattenRows = this.service.flattenTree(this.rows), this.doFiltering();
  }
  setAllParentsOk(e) {
    return e.parent && (e.parent.keep = !0, this.setAllParentsOk(e.parent)), !1;
  }
  setValue(e, t, s) {
    var r;
    const o = (r = this.columnDefs[t]) == null ? void 0 : r.editInputPipe;
    o && (s = o(s, e, t));
    const i = this.getRowByIndex(e);
    if (i) {
      const n = i.data, l = this.columnDefs[t].property;
      return l.includes(".") ? this.setPropertyValue(n, l.split("."), s) : (n[l] = s, !0);
    }
    return !1;
  }
  genericTreeTableSortComparator(e, t) {
    return (s, o) => {
      const i = this.getValueByT(s.data, e), r = this.getValueByT(o.data, e);
      return this.sorterService.genericSortComparator(i, r, t);
    };
  }
  expandAllRecursive(e, t) {
    for (const s of e)
      s.expanded = t, s.children && this.expandAllRecursive(s.children, t);
  }
  doFiltering() {
    if (!this.lastPredictFn)
      this.filteredFlattenRows = [...this.flattenRows ? this.flattenRows : []];
    else {
      this.flattenRows || (this.flattenRows = []);
      let e = 0;
      this.flattenRows.forEach((s) => {
        e = Math.max(e, s.deep);
      });
      const t = this.flattenRows.filter(
        (s, o, i) => this.lastPredictFn(s, o, i)
      );
      this.flattenRows.forEach((s) => s.keep = !1), this.flattenRows.forEach((s) => {
        t.includes(s) && (s.keep = !0, this.setAllParentsOk(s));
      }), this.filteredFlattenRows = this.flattenRows.filter(
        (s, o, i) => s.keep
      );
    }
  }
  getPropertyValue(e, t) {
    const s = t.shift();
    let o = e[s];
    return o && t.length ? this.getPropertyValue(o, t) : o;
  }
  treeSort(e, t, s) {
    e.sort(this.genericTreeTableSortComparator(t, s));
    for (const o of e)
      o.children && this.treeSort(o.children, t, s);
  }
}
class he {
  constructor(e = []) {
    this.allRootNodes = e;
  }
  checkRow(e, t) {
    if (e.checked = t, e.children)
      for (const s of e.children)
        this.checkRow(s, t);
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
    const t = this.areAllChildrenChecked(e), s = this.areAllChildrenUnchecked(e);
    return !t && !s ? "semi" : "none";
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
      const t = this.areAllChildrenChecked(e), s = this.areAllChildrenUnchecked(e);
      t ? e.checked = !0 : e.checked = !1, this.autoCheckParent(e.parent);
    }
  }
  areAllChildrenChecked(e) {
    var t, s;
    if ((t = e.children) != null && t.length) {
      for (const o of e.children)
        if (!o.checked || (s = o.children) != null && s.length && !this.areAllChildrenChecked(o))
          return !1;
    }
    return !0;
  }
  areAllChildrenUnchecked(e) {
    var t, s;
    if ((t = e.children) != null && t.length) {
      for (const o of e.children)
        if (o.checked || (s = o.children) != null && s.length && !this.areAllChildrenUnchecked(o))
          return !1;
    }
    return !0;
  }
  addSelectedRecursive(e, t) {
    for (const s of e)
      s.checked && t.push(s), s.children && this.addSelectedRecursive(s.children, t);
  }
}
class ue {
  constructor(e = 0, t = 0, s = 0, o = 0) {
    this.top = e, this.right = t, this.bottom = s, this.left = o;
  }
}
class Je {
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
class X {
  constructor(e, t, s, o = 0, i = 0, r = !1, n = new H(), l = [], a = [], c = -1, d = 0, u = 400, f = () => {
  }) {
    var p, m, g, b;
    this.headerAreaModel = e, this.bodyAreaModel = t, this.footerAreaModel = s, this.fixedLeftColumnCount = o, this.fixedRightColumnCount = i, this.rowCheckboxVisible = r, this.defaultRowHeights = n, this.columnDefs = l, this.columnSizes = a, this.overridingColumnWidth = c, this.columnCount = d, this.parentSize = u, this.getSelectionModel = f, this.rowCount = 0, this.contentHeightInPx = 0, this.contentWidthInPx = 0, this.padding = new ue(0, 0, 0, 0), this.xPositions = [], e.areaIdent = "header", t.areaIdent = "body", s.areaIdent = "footer", this.columnCount || ((p = this.columnDefs) != null && p.length ? this.columnCount = this.columnDefs.length : (m = this.columnSizes) != null && m.length && (this.columnCount = (g = this.columnSizes) == null ? void 0 : g.length)), (b = this.columnDefs) != null && b.length && ve(this.columnDefs[0]) && !t.rowSelectionModel && (t.rowSelectionModel = new Je());
  }
  init() {
    this.recalcSize(this.parentSize), this.overridingColumnWidth === -1 && this.calcXPositions(), this.headerAreaModel && this.headerAreaModel.init(), this.bodyAreaModel && this.bodyAreaModel.init(), this.footerAreaModel && this.footerAreaModel.init();
  }
  setParentWidth(e) {
    this.parentSize = e;
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
    var s;
    t = Math.max(0, t), this.overridingColumnWidth !== -1 && (this.overridingColumnWidth = t), e > -1 && e < ((s = this.columnSizes) == null ? void 0 : s.length) && (this.columnSizes[e] = t), this.recalcContentWidthInPx();
  }
  /**
   * Retrieves the width of a column specified by its index.
   *
   * @param {number} columnIndex - The index of the desired column.
   * @return {number} - The width of the specified column.
   */
  getColumnWidth(e) {
    var s;
    const t = this.getColumnDef(e);
    return t && t.isVisible && !t.isVisible() ? 0 : this.overridingColumnWidth !== -1 ? this.overridingColumnWidth : e > -1 && e < ((s = this.columnSizes) == null ? void 0 : s.length) ? this.columnSizes[e] : 0;
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
    this.recalcColumnWidths(e), this.recalcHeightAndPadding();
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
    const e = this.getSideAreaWidth("west"), t = this.getSideAreaWidth("east"), s = this.getAreaHeight("header"), o = this.getAreaHeight("footer");
    this.padding = new ue(
      s,
      t,
      o,
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
    const t = this.getModel(e), s = t.getRowCount();
    if (this.defaultRowHeights[e])
      return s * this.defaultRowHeights[e];
    let o = 0;
    for (let i = 0; i < s; i++)
      o = o + t.getRowHeight(i);
    return o;
  }
  /**
   * Returns the total width of the side area identified by sideIdent.
   *
   * @param {SideIdent} sideIdent - The identifier of the side area ("west" | "center" | "east").
   * @return {number} - The total width in pixels of the side area.
   */
  getSideAreaWidth(e) {
    const [t, s] = this.getSideStartAndEndColumnIndex(e);
    let o = 0;
    for (let i = t; i <= s; i++)
      o = o + this.getColumnWidth(i);
    return o;
  }
  /**
   * Retrieves the start and end column indices based on the given side identifier.
   *
   * @param {SideIdent} sideIdent - The side identifier, which can be "west", "east", or "center".
   * @return {[number, number]} - An array containing the start and end column indices.
   */
  getSideStartAndEndColumnIndex(e) {
    const t = this.getFixedLeftColumnCount(), s = this.getFixedRightColumnCount();
    let o = 0, i = this.columnCount - 1;
    return e === "west" ? i = t - 1 : e === "east" ? o = this.columnCount - s : (o = t, i = this.columnCount - s - 1), [o, i];
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
      const s = (t = this.columnDefs[e]) == null ? void 0 : t.sortable;
      if (typeof s == "function")
        return s();
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
    var s, o, i;
    this.arrayMove(this.columnDefs, e, t), this.arrayMove(this.columnSizes, e, t), (s = this.headerAreaModel) == null || s.changeColumnOrder(e, t), (o = this.bodyAreaModel) == null || o.changeColumnOrder(e, t), (i = this.footerAreaModel) == null || i.changeColumnOrder(e, t), this.calcXPositions();
  }
  recalcColumnWidths(e) {
    var t, s, o;
    if (!((t = this.columnDefs) != null && t.length) && !((s = this.columnSizes) != null && s.length) && (this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth)), (o = this.columnDefs) != null && o.length) {
      const i = this.columnDefs.filter((l) => {
        var a;
        return ((a = l.width) == null ? void 0 : a.unit) === "weight";
      });
      this.columnSizes = this.columnDefs.map((l) => {
        if (l.width.unit === "%" && e) {
          let a = Math.floor(l.width.value * e / 100);
          if (l.minWidth) {
            const c = this.sizeToPixel(l.minWidth, e);
            a = Math.max(c, a);
          }
          if (l.maxWidth) {
            const c = this.sizeToPixel(l.maxWidth, e);
            a = Math.min(c, a);
          }
          return a;
        } else if (l.width.unit === "px" && e)
          return l.width.value;
        return 0;
      });
      const r = this.columnSizes.reduce((l, a) => l + a), n = e - r;
      if (n > 0 && i.length) {
        const l = i.map((a) => a.width.value).reduce((a, c) => a + c);
        for (let a = 0; a < this.columnDefs.length; a++) {
          const c = this.columnDefs[a];
          c.width.unit === "weight" && (this.columnSizes[a] = c.width.value * n / l);
        }
      }
    }
  }
  /**
   * Converts the given `SizeIf` object to pixel units based on the provided `clientWidth`.
   * The given `SizeIf` must have the uniit '%' or 'px'.
   *
   * @param {SizeIf} width - The size object to be converted.
   * @param {number} clientWidth - The width of the client area in pixels.
   * @return {number} - The converted size value in pixels. returns -1 if unit is not '%' or 'px'.
   */
  sizeToPixel(e, t) {
    return e.unit === "px" ? e.value : e.unit === "%" ? Math.floor(e.value * t / 100) : -1;
  }
  arrayMove(e, t, s) {
    const o = e.splice(t, 1)[0];
    return e.splice(s, 0, o), e;
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
class Ze extends oe {
  constructor(e, t, s, o = []) {
    super(e, o, s), this.areaIdent = e, this.rows = t, this.defaultRowHeight = s, this.columnDefs = o, this.sorterService = new Se(), this.filteredRows = [...t], this.properties = o.map((i) => i.property);
  }
  setRows(e) {
    this.rows = e, this.filteredRows = [...e];
  }
  getRowCount() {
    var e;
    return ((e = this.filteredRows) == null ? void 0 : e.length) ?? 0;
  }
  getValueAt(e, t) {
    const s = this.properties[t];
    let o = this.filteredRows[e];
    return $(o) && (o = o.data), o ? this.getValueByT(o, s) : "";
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
      const { columnIndex: s, sortState: o } = t, i = o === "asc" ? 1 : o === "desc" ? -1 : 0, r = this.properties[s];
      this.filteredRows = this.filteredRows.sort(this.genericFlatTableSortComparator(r, i));
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
    return (s, o) => {
      const i = this.getValueByT(s, e), r = this.getValueByT(o, e);
      return this.sorterService.genericSortComparator(i, r, t);
    };
  }
  getPropertyValue(e, t) {
    const s = t.shift(), o = e[s];
    return o && t.length ? this.getPropertyValue(o, t) : o;
  }
}
class ge extends Ze {
  constructor(e, t, s, o) {
    super(
      e,
      t,
      o,
      s
    ), this.areaIdent = e, this.rows = t, this.columnDefs = s, this.defaultRowHeight = o;
  }
}
class _ {
  /**
   * TableFactory
   *
   * This class is responsible for creating table models based on various
   * parameters and configurations. TableFactory provides different methods
   * to create these models that must comply with TableModelIf interface.
   *
   * Methods:
   *
   * createTableModel(p: Partial<{...}>): TableModelIf
   * Receives a set of parameters as a Partial object with a number of properties
   * and returns an instance of an object that complies to TableModelIf interface.
   * Refer to the method's documentation for details.
   *
   * buildByTypedRowsParam(param: {rows: T[]; columnDefs: ColumnDefIf[]; tableOptions?: TableOptionsIf; fixedLeftColumnCount?: number; fixedRightColumnCount?: number}): TableModelIf
   * Receives a parameter object with essential properties needed to build the table model,
   * including rows (type T array), column definitions (ColumnDefIf array),
   * optional table options (TableOptionsIf object), and optional fixed column counts,
   * and returns an instance of TableModelIf.
   *
   * buildByTypedRows(rows: T[], columnDefs: ColumnDefIf[], tableOptions?: TableOptionsIf, fixedLeftColumnCount?: number, fixedRightColumnCount?: number): TableModelIf
   * Similar to `buildByTypedRowsParam` but accepts separate parameters instead of a single parameter object.
   *
   * createByObjectArrayParam(param: {rows: T[]; header?: string[][]; footer?: string[][]; fixedLeftColumnCount?: number; fixedRightColumnCount?: number; rowCheckboxVisible?: boolean; defaultRowHeights?: DefaultRowHeightsIf; columnDefs?: ColumnDefIf[]; columnSizes?: number[]}): TableModelIf
   * Similar to `createTableModel` but accepts an object parameter with properties required to create a table, including row data, header and footer multi-line data, fixed column counts, visibility of row checkbox, default row heights, column definitions, and column sizes, and returns a TableModelIf instance.
   *
   * createByAreaModels(headerAreaModel: AreaModelIf, bodyAreaModel: AreaModelIf, footerAreaModel: AreaModelIf, fixedLeftColumnCount: number, fixedRightColumnCount: number, rowCheckboxVisible: boolean, defaultRowHeights: DefaultRowHeightsIf): TableModelIf
   * Accepts area models for header, body, and footer, along with fixed column counts, visibility of row checkbox, and default row heights, to create a table model.
   *
   * createByAreaModelsParam(param: {headerAreaModel?: AreaModelIf; bodyAreaModel: AreaModelIf; footerAreaModel?: AreaModelIf; fixedLeftColumnCount?: number; fixedRightColumnCount?: number; rowCheckboxVisible?: boolean; defaultRowHeights?: DefaultRowHeightsIf; columnDefs?: ColumnDefIf[]; columnSizes?: number[]; overridingColumnWidth?: number; columnCount?: number}): TableModelIf
   * Similar to `createByAreaModels` but accepts an object parameter with the required and optional properties to create the table model.
   *
   * createByObjectArray(rows: T[], header: string[][], footer: string[][], fixedLeftColumnCount: number, fixedRightColumnCount: number, rowCheckboxVisible: boolean, defaultRowHeights: DefaultRowHeightsIf): TableModelIf
   * Allows to create a table model utilizing object array data for rows, header, and footer along with the specified configurations.
   * Please consult each method's documentation for detailed explanation of their functionality.
   */
  static createTableModel(e) {
    var t, s, o, i, r, n, l, a, c, d, u, f, p, m;
    if (e.defaultRowHeights === void 0)
      if ((t = e.tableOptions) != null && t.defaultRowHeights)
        e.defaultRowHeights = e.tableOptions.defaultRowHeights;
      else {
        if (e.defaultRowHeights = new H(), e.headerAreaModel && "defaultRowHeight" in e.headerAreaModel) {
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
    if (e.columnDefs === void 0 && ((s = e.properties) != null && s.length ? e.columnDefs = e.properties.map((g) => new V(g, g.toUpperCase(), ce)) : (o = e.rows) != null && o.length ? e.columnDefs = Object.keys(e.rows[0]).map((g) => new V(g, g.toUpperCase(), ce)) : e.columnDefs = []), e.columnCount === void 0 && ((i = e.columnDefs) != null && i.length ? e.columnCount = e.columnDefs.length : (r = e.headerData) != null && r.length ? e.columnCount = e.headerData[0].length : (n = e.columnSizes) != null && n.length ? e.columnCount = (l = e.columnSizes) == null ? void 0 : l.length : console.warn('Property "columnCount" is missing and cannot be derived from other properties.')), e.headerAreaModel || ((a = e.headerData) != null && a.length ? e.headerAreaModel = new D(
      "header",
      e.headerData,
      e.defaultRowHeights.header,
      e.columnDefs
    ) : (c = e.columnDefs) != null && c.length ? e.headerAreaModel = new D(
      "header",
      [e.columnDefs.map((g) => g.headerLabel)],
      e.defaultRowHeights.header,
      e.columnDefs
    ) : e.headerAreaModel = new F("header")), e.footerAreaModel || ((d = e.footerData) != null && d.length ? e.footerAreaModel = new D(
      "footer",
      e.footerData,
      e.defaultRowHeights.footer,
      e.columnDefs
    ) : e.footerAreaModel = new F("footer")), !e.bodyAreaModel)
      if (e.rows)
        if ((u = e.rows) != null && u.length && $(e.rows[0])) {
          const g = e.rows;
          e.bodyAreaModel = new de(
            "body",
            g,
            e.defaultRowHeights.body,
            e.columnDefs
          ), (e.columnDefs[0].property === "CheckboxColumn" || (f = e.tableOptions) != null && f.showCheckboxWihoutExtraColumn) && (e.bodyAreaModel.rowSelectionModel = new he(g));
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
        ) : e.bodyAreaModel = new F("body");
    return e.fixedLeftColumnCount === void 0 && (e.fixedLeftColumnCount = 0), e.fixedRightColumnCount === void 0 && (e.fixedRightColumnCount = 0), e.rowCheckboxVisible === void 0 && (e.rowCheckboxVisible = !1), e.overridingColumnWidth === void 0 && (e.overridingColumnWidth = -1), !e.getSelectionModel && ((p = e.tableOptions) != null && p.getSelectionModel) && (e.getSelectionModel = (m = e.tableOptions) == null ? void 0 : m.getSelectionModel), new X(
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
  /**
   * Constructs a table model (an instance of `TableModelIf`) by using provided parameters.
   *
   * @template T The generic parameter that represents the datatype of rows.
   *
   * @param {Object} param The parameter object.
   * @param {T[]} param.rows The rows data to be used in the table model.
   * @param {ColumnDefIf[]} param.columnDefs The definition of columns that are to be used in the table model.
   * @param {TableOptionsIf} [param.tableOptions=new TableOptions()] Optional table options that may override default table settings. Defaults to `new TableOptions()`.
   * @param {number} [param.fixedLeftColumnCount=0] Optional parameter that specifies the count of fixed (non-scrollable) columns from the left. Defaults to `0`.
   * @param {number} [param.fixedRightColumnCount=0] Optional parameter that specifies the count of fixed (non-scrollable) columns from the right. Defaults to `0`.
   *
   * @returns {TableModelIf} The newly constructed table model.
   *
   * @static
   * @method
   */
  static buildByTypedRowsParam(e) {
    return _.buildByTypedRows(
      e.rows ?? [],
      e.columnDefs,
      e.tableOptions ?? new K(),
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0
    );
  }
  /**
   * Static method that helps to build a table model object. It takes in tabular data and options and constructs a suitable
   * model for rendering as a table. This method is capable of handling both 'Flat' and 'Tree' data structures.
   *
   * @typeparam T - The type of the data in the rows.
   *
   * @param rows - An array of the data rows. The type of these rows could be anything which is defined by the generic type parameter T.
   *
   * @param columnDefs - An array of objects that define the columns of the table. Each object represents one column.
   *
   * @param tableOptions - A configuration object that allows you to customize how the table is displayed and behaves.
   * This is optional, and if not provided it defaults to a new instance of TableOptions.
   *
   * @param fixedLeftColumnCount - Optional parameter that specifies the number of columns that should remain fixed from the left
   * side of the table while scrolling horizontally. It defaults to 0 if not provided.
   *
   * @param fixedRightColumnCount - Optional parameter that specifies the number of columns that should remain fixed from the right
   * side of the table while scrolling horizontally. It defaults to 0 if not provided.
   *
   * @returns A TableModelIf object which can be used to render the table. The TableModelIf defines the structure of the table and
   * contains all its data and state.
   *
   * @usageNotes
   *
   * Here is an example of using this static method to build a table model:
   *
   * ```typescript
   * const tableModel = TableFactory.buildByTypedRows<User>(users, [{ property: 'name', headerLabel: 'Name' }, { property: 'email', headerLabel: 'Email' }]);
   * ```
   *
   * This will build a table with two columns 'Name' and 'Email', each row representing a 'User' object from the 'users' array.
   *
   * **Warning:** This function assumes that the first columnDef provided represents a checkbox column if the property of the first
   * columnDef is "CheckboxColumn". If the first column is not a checkbox column, ensure that the first columnDef does not have "CheckboxColumn"
   * as its property.
   */
  static buildByTypedRows(e, t, s = new K(), o = 0, i = 0) {
    const r = s.defaultRowHeights, n = t[0].property === "CheckboxColumn";
    if (e != null && e.length && $(e[0])) {
      const l = e, a = new de(
        "body",
        l,
        r.body,
        t
      );
      return (n || s.showCheckboxWihoutExtraColumn) && (a.rowSelectionModel = new he(l)), _.createByAreaModelsParam({
        headerAreaModel: new D("header", [t.map((c) => c.headerLabel)], r.header),
        bodyAreaModel: a,
        footerAreaModel: new D("footer", [], r.footer),
        columnDefs: t,
        fixedLeftColumnCount: o,
        fixedRightColumnCount: i,
        defaultRowHeights: s.defaultRowHeights,
        rowCheckboxVisible: !1,
        columnSizes: [],
        columnCount: t.length,
        overridingColumnWidth: -1
      });
    }
    return _.createByObjectArrayParam({
      rows: e,
      columnDefs: t,
      fixedLeftColumnCount: o,
      fixedRightColumnCount: i,
      defaultRowHeights: s.defaultRowHeights
    });
  }
  /**
   * The `createByObjectArrayParam` static method is used to create a `TableFactory` object with the data contained in the `param` object.
   * This method would call the `createByObjectArray` static method, which actually constructs the `TableModel` object with the provided data.
   *
   * @template T - Defines the type of the items contained in the rows.
   *
   * @param {Object} param - Method parameter as an object that carries several properties described below:
   * @param {T[]} param.rows - Array of table row data that can be of any type.
   * @param {string[][]} [param.header] - Optional array of arrays with the table header data.
   * @param {string[][]} [param.footer] - Optional array of arrays with the table footer data.
   * @param {number} [param.fixedLeftColumnCount] - Optional number detailing how many of the beginning columns are sticky to the left.
   * @param {number} [param.fixedRightColumnCount] - Optional number detailing how many of the ending columns are sticky to the right.
   * @param {boolean} [param.rowCheckboxVisible] - Optional flag that indicates whether checkboxes are visible in the rows.
   * @param {DefaultRowHeightsIf} [param.defaultRowHeights] - Optional object defining default heights of rows in different sections of the table. Defaults to new `DefaultRowHeights()`.
   * @param {ColumnDefIf[]} [param.columnDefs] - Optional array of column definitions, each is an object conforming to `ColumnDefIf` interface.
   * @param {number[]} [param.columnSizes] - Optional array of numbers providing the specific sizes for columns.
   *
   * @returns A `TableFactory` object created by the `createByObjectArray` method.
   *
   * @example
   * let param = {
   *   rows: [{name: 'John', age: 30}, {name: 'Doe', age: 40}],
   *   header: [['Name', 'Age']],
   *   footer: [['Avg', '35']],
   *   fixedLeftColumnCount: 1,
   *   fixedRightColumnCount: 0,
   *   rowCheckboxVisible: true,
   *   defaultRowHeights: new DefaultRowHeights(40, 50, 40),
   *   columnDefs: [
   *     {
   *       property: 'name',
   *       headerLabel: 'Name',
   *       width: 100
   *     },
   *     {
   *       property: 'age',
   *       headerLabel: 'Age',
   *       width: 50
   *     }
   *   ],
   *   columnSizes: [100, 50]
   * };
   * const tableModel = TableFactory.createByObjectArrayParam(param);
   */
  static createByObjectArrayParam(e) {
    const t = e.rowCheckboxVisible !== void 0 ? e.rowCheckboxVisible : !1;
    return _.createByObjectArray(
      e.rows,
      e.header ?? [],
      e.footer ?? [],
      e.fixedLeftColumnCount ?? 0,
      e.fixedRightColumnCount ?? 0,
      t,
      e.defaultRowHeights ?? new H(),
      e.columnDefs ?? [],
      e.columnSizes ?? []
    );
  }
  /**
   * This public static factory method creates a `TableModel` instance using the provided parameters.
   * Each parameter has a default value allowing for great flexibility in creating table models.
   * The main parameters are the AreaModel instances for different table sections:
   *
   * @param headerAreaModel - This parameter of type `AreaModelIf` represents the header area of the table.
   * The default value is a new instance of `AreaModelHidden`, indicating an invisible header.
   *
   * @param bodyAreaModel - This parameter of type `AreaModelIf` represents the body area of the table and is required.
   * It needs to be passed as it contains all the row data that will be displayed in the table.
   *
   * @param footerAreaModel - This `AreaModelIf` type parameter represents the footer area of the table.
   * Similar to `headerAreaModel`, the default value is a new instance of `AreaModelHidden`, indicating an invisible footer.
   *
   * Also, the method receives parameters for fixed columns, row checkbox visibility, default row heights, column definitions, column sizes, overriding column width, and column count:
   *
   * @param fixedLeftColumnCount - This value indicates the number of fixed columns on the left side of the table.
   * The default value is `0`, no fixed column by default.
   *
   * @param fixedRightColumnCount - This value indicates the number of fixed columns on the right side of the table.
   * Similarly to `fixedLeftColumnCount`, its default value is `0`.
   *
   * @param rowCheckboxVisible - This is a boolean that determines whether a checkbox will be visible for each row.
   * The default value is `false`, indicating that checkboxes will not be displayed unless otherwise specified.
   *
   * @param defaultRowHeights - This object of type `DefaultRowHeightsIf` allows setting of the default row heights for the table sections.
   * By default, it creates a new `DefaultRowHeights` instance with values of `34` for header, body and footer.
   *
   * @param columnDefs - Here, an array of `ColumnDefIf[]` needs to be passed to specify the column definitions.
   *
   * @param columnSizes - This is an array of `number[]` providing custom column sizes.
   * If not defined, an empty array `[]` is used.
   *
   * @param overridingColumnWidth - This number sets a uniform width for all columns, overriding individual column sizes.
   * Default value is `-1`, indicating that this feature is disabled by default.
   *
   * @param columnCount - This is the total column count.
   *
   * @return A new instance of `TableModel` is created using the provided parameters.
   * If a parameter isn't provided, the default value is used.
   */
  static createByAreaModels(e = new F(), t, s = new F(), o = 0, i = 0, r = !1, n = new H(), l, a = [], c = -1, d) {
    return new X(
      e,
      t,
      s,
      o,
      i,
      r,
      n,
      l,
      a,
      c,
      d
    );
  }
  /**
   * `TableFactory.createByAreaModelsParam` is a static method in the `TableFactory` class that creates a table model by area models and other optional parameters.
   * This method allows more flexibility and control over table building by providing the option to decide the visibility and nature of the header, body, footer, columns, and rows in the table.
   *
   * @param `param` is an object that holds the configuration settings for creating the table model. Below are the properties that this object can have:
   *   - `headerAreaModel`: Optional. An instance of `AreaModelIf` class to be used for creating the header of the table. If not provided, a new `AreaModelHidden` is created by default.
   *   - `bodyAreaModel`: Mandatory. An instance of `AreaModelIf` class for body of the table.
   *   - `footerAreaModel`: Optional. An instance of `AreaModelIf` class for table footer. If not provided, a new `AreaModelHidden` is created by default.
   *   - `fixedLeftColumnCount`: Optional. Number of fixed columns on the left side of the table. Default is 0.
   *   - `fixedRightColumnCount`: Optional. Number of fixed columns on the right side of the table. Default is 0.
   *   - `rowCheckboxVisible`: Optional. Boolean that decides if the row checkboxes are visible or not. Defaults to `false`.
   *   - `defaultRowHeights`: Optional. An instance of `DefaultRowHeightsIf` interface that specifies default row heights. No default value.
   *   - `columnDefs`: Optional. Array of instance(s) of `ColumnDefIf` interface to define column properties. Defaults to an empty array.
   *   - `columnSizes`: Optional. Array of numbers setting the sizes of the columns. Defaults to an empty array.
   *   - `overridingColumnWidth`: Optional. Overrides the width of all columns with this value. Defaults to `-1` which means no width override.
   *   - `columnCount`: Optional. Number setting the total count of columns. Defaults to 0.
   *
   * @returns a new instance of `TableModelIf` created by the `createByAreaModels` method of `TableFactory` using the provided parameters.
   *
   * Note: The area models (`headerAreaModel`, `bodyAreaModel`, `footerAreaModel`) should be initialized before being passed to this method. If not initialized, they might need to call their `init` method to ensure proper functioning.
   *
   * @example
   * const tableModel = TableFactory.createByAreaModelsParam({
   *    headerAreaModel: myHeaderModel,
   *    bodyAreaModel: myBodyModel,
   *    footerAreaModel: myFooterModel,
   *    fixedLeftColumnCount: 2,
   *    fixedRightColumnCount: 1,
   *    rowCheckboxVisible: true,
   *    defaultRowHeights: myDefaultHeights,
   *    columnDefs: myColumnDefs,
   *    columnSizes: [100, 100, 200],
   *    overridingColumnWidth: 150,
   *    columnCount: 3
   * });
   */
  static createByAreaModelsParam(e) {
    return _.createByAreaModels(
      e.headerAreaModel ?? new F(),
      e.bodyAreaModel,
      e.footerAreaModel ?? new F(),
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
  /**
   * Class method `createByObjectArray` of the `TableFactory` class.
   *
   * This public, static method is intended to create a table model by an array of objects.
   * This method is particularly useful when you are aiming to build a table from a set of data rows, header and footer information.
   * The table can include both fixed and flexible columns and optional checkboxes for each row.
   * The table layout can further be customized using the default row heights, column definitions, and column sizes parameters.
   *
   * @generic `T` - The generic type parameter for data rows.
   *
   * @param `rows` - This parameter is an array of typed data rows (type `T`) for the table body.
   *
   * @param `header` - This optional parameter is a two-dimensional string array. It defines the table header data. The default value is an empty array.
   *
   * @param `footer` - This optional parameter is a two-dimensional string array. It defines the table footer data. The default value is an empty array.
   *
   * @param `fixedLeftColumnCount` - This optional parameter specifies the count of fixed (non-scrollable) columns on the left side of the table. The default value is 0.
   *
   * @param `fixedRightColumnCount` - This optional parameter specifies the count of fixed (non-scrollable) columns on the right side of the table. The default value is 0.
   *
   * @param `rowCheckboxVisible` - This optional boolean parameter tells whether to display checkboxes for each row in the table. The default value is false.
   *
   * @param `defaultRowHeights` - This optional parameter is an instance of `DefaultRowHeightsIf` interface. It sets the default row heights for the header, body, and footer areas of the table.
   *
   * @param `columnDefs` - This optional parameter is an array of column definitions (`ColumnDefIf[]`). It helps to define the settings and properties of individual columns.
   *
   * @param `columnSizes` - This optional parameter is a number array. It helps to define the column widths. The default value is an empty array.
   *
   * The method further processes the header, footer, and body data to create respective models (`AreaModelIf`), and ultimately it creates and returns a new instance of `TableModel` containing all those prepared models, options, and properties.
   *
   * @returns It returns an instance of `TableModel` with all the provided/processed parameters.
   *
   * Note: You need to import the `AreaModelArrayOfArrays` and `AreaModelHidden` classes from the respective package/module before using this method.
   *
   * @example
   * ```typescript
   * // Given the following array of objects:
   * const rows = [{field1: 'data11', field2: 'data12'}, {field1: 'data21', field2: 'data22'}];
   *
   * // And a set of column definitions:
   * const columnDefs: ColumnDefIf[] = [{headerLabel: 'Field 1', property: 'field1'}, {headerLabel: 'Field 2', property: 'field2'}];
   *
   * // You can create a TableModel like following:
   * let tableModel = TableFactory.createByObjectArray(rows, undefined, undefined, 0, 0, false, new DefaultRowHeights(), columnDefs);
   * ```
   *
   * Reference: For more details regarding the `DefaultRowHeightsIf`, `ColumnDefIf`, `AreaModelIf`, and `AreaModelArrayOfArrays` classes/interfaces, please refer to the respective API documents.
   */
  static createByObjectArray(e, t = [], s = [], o = 0, i = 0, r = !1, n = new H(), l, a = []) {
    let c;
    t != null && t.length ? c = new D("header", t, n.header, l) : l != null && l.length ? c = new D("header", [l.map((f) => f.headerLabel)], n.header, l) : c = new F();
    const d = s ? new D("footer", s, n.footer, l) : new F(), u = new ge("body", e, l, n.body);
    return new X(
      c,
      u,
      d,
      o,
      i,
      r,
      n,
      l,
      a
    );
  }
}
const _t = [
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
class Ot {
  constructor(e, t) {
    this.tableModel = e, this.tableOptions = t;
  }
}
class Qe {
  constructor(e, t, s, o, i, r, n) {
    this.emmitDataKey = e, this.emmitCancelKey = t, this.queryId = s, this.filter = o, this.sorting = i, this.startIndex = r, this.endIndex = n;
  }
}
class Bt extends Qe {
  constructor(e, t, s, o, i, r, n, l) {
    super(
      e,
      t,
      s,
      o,
      i,
      r,
      n
    ), this.rows = l;
  }
}
class et {
  constructor(e, t) {
    this.value = e, this.label = t;
  }
}
class $t {
  constructor(e, t) {
    this.index = e, this.px = t;
  }
}
const Ht = { body: ["ge-table-text-align-left"] }, Vt = { body: ["ge-table-text-align-center"] }, Wt = { body: ["ge-table-text-align-right"] }, Nt = {
  header: ["ge-table-text-align-left"],
  body: ["ge-table-text-align-left"],
  footer: ["ge-table-text-align-left"]
}, Gt = {
  header: ["ge-table-text-align-center"],
  body: ["ge-table-text-align-center"],
  footer: ["ge-table-text-align-center"]
}, zt = {
  header: ["ge-table-text-align-right"],
  body: ["ge-table-text-align-right"],
  footer: ["ge-table-text-align-right"]
};
class pe {
  render(e, t, s, o, i, r, n) {
    if (i.isRowCheckable(t)) {
      n.addClass(e, "ge-table-row-checkbox-div");
      const l = i.isRowChecked(t), a = l === "full" ? "checked" : "", c = l === "semi" ? '<span style="opacity: 0.4;">✓<span>' : "";
      e.innerHTML = `
        <input
            type="checkbox"
            data-area="${o}"
            data-row-index="${t}"
            data-col-index="${s}"
            data-input-type="checkbox"
            ${a}
            class="ge-table-row-checkbox">
        ${c}  `;
    }
  }
}
class Ut {
  constructor() {
    this.type = "CheckboxColumnDef", this.property = "CheckboxColumn", this.headerLabel = "", this.width = new x(50, "px"), this.minWidth = new x(50, "px"), this.maxWidth = new x(100, "px"), this.rendererMap = new I(new pe(), new pe(), void 0), this.classes = new I(
      [],
      ["ge-table-text-align-left"],
      []
    );
  }
}
class jt {
  /**
   * A factory that creates a new AreaObjectMap with the given body renderer.
   *
   * @param {CellRendererIf} bodyRenderer - The renderer for the body of the map.
   * @returns {AreaObjectMap<CellRendererIf>} The newly created AreaObjectMap.
   */
  static body(e) {
    return new I(
      void 0,
      e,
      void 0
    );
  }
}
class Xt {
  constructor(e = "down", t) {
    this.status = e, this.originalEvent = t;
  }
}
class Yt {
  constructor(e, t, s, o, i = {}) {
    this.area = e, this.rowIndex = t, this.columnIndex = s, this.value = o, this.cssClasses = i;
  }
}
class Kt {
  constructor() {
    this.autoRestoreSortingState = !1, this.autoRestoreCollapsedExpandedState = !1, this.autoRestoreScrollPosition = !1, this.autoRestoreCheckedState = !1, this.autoRestoreSelectedState = !1, this.getStorageKeyFn = void 0, this.isSame = (e, t, s) => {
      if (e && t && s.getRowId) {
        const o = s.getRowId(e), i = s.getRowId(t);
        return o === i;
      }
      return !1;
    }, this.getRowId = (e) => {
      if (e) {
        for (const t of ["id", "uuid"]) {
          const s = e[t];
          if (s != null)
            return s;
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
class tt {
  constructor(e, t, s, o = !1, i = "normal", r = void 0) {
    this.data = e, this.property = t, this.toggle = s, this.closed = o, this.visibility = i, this.children = r, this.impl = "CellGroup";
  }
}
class st extends tt {
  constructor(e, t = 0, s = 0, o) {
    super(
      e.data,
      e.property,
      e.toggle,
      e.closed,
      e.visibility,
      e.children
    ), this.rowIndex = t, this.childIndex = s, this.parent = o, this.impl = "CellGroupExt", this.children = void 0, this.leftNeighbour = void 0, this.rightNeighbour = void 0;
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
    var s;
    if (e != null && e.claimsSpace() && t++, (s = e == null ? void 0 : e.children) != null && s.length)
      for (const o of e.children)
        t = this.getColumnCount(o, t);
    return t;
  }
  getRowSpan(e = this, t) {
    return e != null && e.claimsSpace() ? t - this.getParentCount(e, 0) : 1;
  }
  getParentCount(e = this, t = 0) {
    return e.parent && (t = t + 1 + this.getParentCount(e.parent, t)), t;
  }
  log(e = 10) {
    const t = "													".substring(0, 2 * this.rowIndex), s = `${this.getColumnIndex()}`, o = `${this.getColumnCount(this)}`, i = `${this.getRowSpan(this, e)}`, r = `${this.getParentCount(this)}`, n = `${t + this.data}
      childIndex:${this.childIndex}
      row:${this.rowIndex}
      col:${s}
      vis:${this.visibility}
      toggle:${this.toggle}
      closed:${this.closed}
      isVisible:${this.isVisible()}
      ownColumn:${this.ownColumn()}
      claimsSpace:${this.claimsSpace()}
      colCount:${o}
      rowSpan:${i}
      pc:${r}`.replace(/[ \n]+/g, " ");
    if (this.children)
      for (const l of this.children)
        l.log(e);
    return n;
  }
}
class T {
  static buildColumnDefs(e, t = []) {
    for (const s of e)
      s.property && t.push(
        V.create({
          property: s.property,
          headerLabel: s.data ? s.data : s.property,
          isVisible: () => typeof s.isVisible == "function" ? s.isVisible() : !0
        })
      ), s.children && T.buildColumnDefs(s.children, t);
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
  static buildGroupExts(e, t = [], s = 0, o) {
    let i;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], l = new st(n, s, r, o);
      i && (l.leftNeighbour = i, i.rightNeighbour = l), t.push(l), n.children && (l.children = T.buildGroupExts(n.children, [], s + 1, l)), i = l;
    }
    return t;
  }
  static flattenGroupExts(e, t = []) {
    for (const s of e)
      t.push(s), s.children && T.flattenGroupExts(s.children, t);
    return t;
  }
  /*
  
    Gold                                                           Hohenwarte
    Gold AB                         Gold CD                        HOH AB                                  HOH CD
    .          Gold A     Gold B    Gold C   Gold D    Gold Sum    .           HOH Loc    HOH A    HOH B   HOH C    HOH D
  
    */
  static buildArrayOfArrays(e, t) {
    var i;
    let s = -1, o = 99999;
    for (const r of e) {
      if (r.rowIndex <= o) {
        s++;
        for (let n = 0; n < t.length; n++)
          t[n][s] = null;
      }
      if (t[r.rowIndex][s] = r, o = r.rowIndex, r.ownColumn() && ((i = r.children) != null && i.length)) {
        for (let n = r.rowIndex + 1; n < t.length; n++)
          t[n][s] = void 0;
        s++;
        for (let n = 0; n < t.length; n++)
          t[n][s] = null;
      }
    }
    return t;
  }
  static iterateThrowColumns(e = [], t) {
    var s;
    for (const o of t)
      e.push(o.data + "    rowIndex:" + o.rowIndex), (s = o.children) != null && s.length && T.iterateThrowColumns(e, o.children);
  }
}
class qt {
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
  setValue(e, t, s) {
    return !1;
  }
}
const U = class U {
  constructor(e = new se()) {
    this.headerGroupOptions = e;
  }
  render(e, t, s, o, i, r, n) {
    const l = r != null && r.data ? r.data : "";
    if (r) {
      const { toggle: a, visibility: c, closed: d } = r, u = a ? U.toggleHeaderGroup : "";
      this.addText(e, o, t, s, l, u), a && c !== "always" && this.addArrowDiv(n, e, !d, t, s, o, u);
    } else
      this.addText(e, o, t, s, l, "");
  }
  addText(e, t, s, o, i, r) {
    e.innerHTML = `<span 
                data-ge-action="${r}"
                data-area="${t}"
                data-row-index="${s}"
                data-col-index="${o}"
                >${i}</span>`;
  }
  addArrowDiv(e, t, s = !0, o = -1, i = -1, r = "header", n) {
    const l = e.createElement("div");
    e.addClass(l, "ge-table-toggle-icon-div"), e.setStyle(l, "display", "inline-block"), e.setStyle(l, "position", ""), e.setStyle(l, "width", "20px"), e.setStyle(l, "background", "transparent"), e.setStyle(l, "cursor", "pointer"), e.setAttribute(l, "data-row-index", `${o}`), e.setAttribute(l, "data-col-index", `${i}`), e.setAttribute(l, "data-area", `${r}`), e.setAttribute(l, "data-ge-action", `${n}`);
    let a;
    s ? a = this.headerGroupOptions.iconExpanded : a = this.headerGroupOptions.iconCollapsed;
    const c = a.content, d = e.createText(c);
    e.appendChild(l, d), a.style && this.applyStyleString(e, l, a.style);
    for (const u of a.classes)
      e.addClass(l, u);
    return e.appendChild(t, l), l;
  }
  applyStyleString(e, t, s) {
    const o = s.split(";").map((i) => i.trim()).filter((i) => i);
    for (const i of o) {
      const [r, n] = i.split(":");
      e.setStyle(t, r.trim(), n.trim());
    }
  }
};
U.toggleHeaderGroup = "toggleHeaderGroup";
let J = U;
class Jt {
  constructor(e = "header", t, s = [], o, i = new se()) {
    this.areaIdent = e, this.groups = t, this.columnDefs = s, this.defaultRowHeight = o, this.headerGroupOptions = i, this.gammaCells = !0, this.arr = [], this.groupExts = [], this.cellGroupExtCellRenderer = new J(this.headerGroupOptions), this.groupExts = T.buildGroupExts(t), this.init();
  }
  init() {
    var e;
    for (const t of this.groupExts)
      t.log(this.getMaxRowCount());
    this.arr = this.buildArray(), !((e = this.columnDefs) != null && e.length) && this.areaIdent === "header" && (this.columnDefs = T.buildColumnDefs(this.groups));
  }
  getAllLeafs() {
    return T.flattenGroupExts(this.groupExts).filter((t) => !t.children);
  }
  getMaxRowCount() {
    const e = this.getAllLeafs();
    return e != null && e.length ? 1 + Math.max(...e.map((t) => t.getParentCount(t))) : 0;
  }
  buildArray() {
    const e = T.flattenGroupExts(this.groupExts), t = 1 + Math.max(...e.map((r) => r.rowIndex)), s = [];
    T.iterateThrowColumns(s, this.groupExts);
    const o = Array.from(Array(t).keys()).map((r) => []), i = T.buildArrayOfArrays(e, o);
    return console.table(i), i;
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
    const s = this.getValueAt(e, t);
    return s ? s.getColumnCount() : 0;
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
    const s = this.getValueAt(e, t);
    if (s) {
      const o = this.getRowCount();
      return s.getRowSpan(s, o);
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
  setValue(e, t, s) {
    return !1;
  }
  toggleHeaderGroup(e) {
    const t = this.arr[e.rowIdx][e.colIdx];
    return t != null && t.toggle && t.visibility !== "always" && (t.closed = !t.closed, this.init()), T.buildColumnDefs(this.groupExts);
  }
}
class Zt {
  filterPredict(e, t, s = this.objectToString.bind(this)) {
    if (!e)
      return !1;
    if (!t)
      return !0;
    t = t.toLowerCase();
    const o = "+", i = "-", r = t.toLowerCase().split(" ").filter((d) => d !== o && d !== i && d !== ""), n = r.filter((d) => !d.startsWith(o) && !d.startsWith(i)), l = r.filter((d) => d.startsWith(o)).map((d) => d.replace(/\+/g, "")), a = r.filter((d) => d.startsWith(i)).map((d) => d.replace(/-/g, ""));
    let c = !n.length;
    for (let d = 0; d < n.length; d++)
      (c || s(e).includes(n[d])) && (c = !0);
    if (!c)
      return !1;
    for (let d = 0; d < l.length; d++)
      if (!s(e).includes(l[d]))
        return !1;
    for (let d = 0; d < a.length; d++)
      if (s(e).includes(a[d]))
        return !1;
    return !0;
  }
  filterRows(e, t, s = (o) => JSON.stringify(o).toLowerCase()) {
    if (!e)
      return [];
    if (!t)
      return [...e];
    t = t.toLowerCase();
    const o = "+", i = "-", r = t.toLowerCase().split(" ").filter((c) => c !== o && c !== i && c !== ""), n = r.filter((c) => !c.startsWith(o) && !c.startsWith(i)), l = r.filter((c) => c.startsWith(o)).map((c) => c.replace(/\+/g, "")), a = r.filter((c) => c.startsWith(i)).map((c) => c.replace(/-/g, ""));
    return e == null ? void 0 : e.filter((c) => {
      let d = !n.length;
      for (let u = 0; u < n.length; u++)
        (d || s(c).includes(n[u])) && (d = !0);
      if (!d)
        return !1;
      for (let u = 0; u < l.length; u++)
        if (!s(c).includes(l[u]))
          return !1;
      for (let u = 0; u < a.length; u++)
        if (s(c).includes(a[u]))
          return !1;
      return !0;
    });
  }
  objectToString(e) {
    if (!e)
      return "";
    const t = [], s = Object.keys(e);
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      t.push(e[i]);
    }
    return t.join(" ").toLowerCase();
  }
}
class Qt {
  static bodyRenderer(e) {
    return new I(void 0, e, void 0);
  }
}
class es {
  constructor(e, t = !0, s = !1) {
    this.property = e, this.skipCheckableCheck = t, this.readonly = s;
  }
  render(e, t, s, o, i, r, n) {
    if (this.readonly || this.skipCheckableCheck || i.isRowCheckable(t)) {
      n.addClass(e, "ge-table-row-checkbox-div");
      const l = i.getRowByIndex(t), c = i.getValueByT(l, this.property) === !0 ? "checked" : "", d = this.readonly ? " readonly " : "";
      if (n.addClass(e, "ge-padding-property-checkbox"), e.innerHTML = `
        <input
          type="checkbox"
          data-area="${o}"
          data-row-index="${t}"
          data-col-index="${s}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${c}
          ${d}
          class="ge-input-checkbox">`, !this.readonly) {
        const u = e.querySelector(".ge-input-checkbox");
        u && u.addEventListener("click", (f, p) => (l[this.property] = !l[this.property], !0));
      }
    }
  }
}
class ts {
  render(e, t, s, o, i, r, n) {
    r && (e.innerText = new Date(r).toISOString());
  }
}
class ss {
  constructor() {
    this.formatter = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  render(e, t, s, o, i, r, n) {
    if (r) {
      let l = "";
      try {
        l = this.formatter.format(new Date(r));
      } catch {
        l = r;
      }
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${s}" data-area="${o}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${s}" data-area="${o}">${l}</div>
          </div>`;
    }
  }
}
class os {
  render(e, t, s, o, i, r, n) {
    r && (e.innerText = new Date(r).toLocaleDateString());
  }
}
class is {
  render(e, t, s, o, i, r, n) {
    r === "male" || r === "m" ? e.innerText = "♂" : (r === "female" || r === "f") && (e.innerText = "♀");
  }
}
class rs {
  constructor(e = 100, t = !1) {
    this.maxValue = e, this.labelVisible = t;
  }
  render(e, t, s, o, i, r, n) {
    if (n.addClass(e, "ge-progressbar-div"), !isNaN(r)) {
      const a = Number(r) * 100 / this.maxValue, c = this.labelVisible ? Math.round(a) + "%" : "";
      e.innerHTML = `
        <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${s}"
          data-area="${o}"
          title="${c}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${s}"
                  data-area="${o}">
                  <div class="ge-table-progress-bar"
                      style="width:${a}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${s}"
                      data-area="${o}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
class ls {
  render(e, t, s, o, i, r, n) {
    r === "true" || r === !0 ? e.innerHTML = '<span class="ge-true-text-color">✅</span>' : r === "false" || r === !1 ? e.innerHTML = '<span class="ge-false-text-color">❌</span>' : e.innerText = "";
  }
}
class ns {
  render(e, t, s, o, i, r, n) {
    r && (e.innerText = new Date(r).toISOString().replace(/T/g, " ").replace(/\..*/g, ""));
  }
}
class as {
  constructor(e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    this.min = e, this.max = t;
  }
  render(e, t, s, o, i, r, n) {
    r && (e.innerText = r, (typeof r == "string" || isNaN(r) || r < this.min || r > this.max) && n.addClass(e, "ge-cell-error"));
  }
}
class cs {
  constructor(e) {
    this.property = e;
  }
  render(e, t, s, o, i, r, n) {
    n.addClass(e, "ge-star-rating-div");
    const l = i.getRowByIndex(t), a = +("" + i.getValueByT(l, this.property));
    if (!isNaN(a)) {
      const c = [];
      for (let u = 0; u < a; u++)
        c.push("★");
      const d = c.join(" ");
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${s}" data-area="${o}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${s}" data-area="${o}">${d}</div>
          </div>`;
    }
  }
}
class ds {
  constructor(e, t = 100, s = !1) {
    this.property = e, this.maxValue = t, this.labelVisible = s;
  }
  render(e, t, s, o, i, r, n) {
    n.addClass(e, "ge-star-rating-div");
    const l = i.getRowByIndex(t), a = +("" + i.getValueByT(l, this.property));
    if (!isNaN(a)) {
      const c = a * 100 / this.maxValue, d = this.labelVisible ? Math.round(c) + "%" : "";
      e.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${s}"
          data-area="${o}"
          title="${d}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${t}"
                  data-col-index="${s}"
                  data-area="${o}">
                  <div class="ge-table-progress-bar"
                      style="width:${c}%;height:100%;padding:0;margin:0;"
                      data-row-index="${t}"
                      data-col-index="${s}"
                      data-area="${o}">&nbsp;
                  </div>
              </div>
          </div>`;
    }
  }
}
class hs {
  render(e, t, s, o, i, r, n) {
    if (r) {
      e.innerHTML = `
          <div 
            class="ge-table-label-div" 
            data-row-index=${t}" 
            data-col-index="${s}" 
            data-area="${o}" 
            style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div 
              class="ge-table-label"  
              data-row-index="${t}" 
              data-col-index="${s}" 
              data-area="${o}">${r}</div></div>`;
      const l = Number(r);
      l > 0 ? n.addClass(e, "ge-positive-text-color") : l < 0 && n.addClass(e, "ge-negative-text-color");
    }
  }
}
const us = function(h, e, t) {
  return h ? Number(h) : "";
};
class ye {
  constructor(e) {
    this.options = e;
  }
  static create(e) {
    return new ye(
      e.map((t) => new et(t, t))
    );
  }
  render(e, t, s, o, i, r, n) {
    if (i.isEditable(t, s)) {
      n.addClass(e, "ge-table-row-select-div");
      const l = i.getValueAt(t, s);
      let a = [];
      for (let d of this.options) {
        const u = d.value === l ? " selected " : "";
        a.push(`<option value="${d.value}" ${u}>${d.label}</option>`);
      }
      const c = a.join("");
      e.innerHTML = `
            <select
                type="text"
                value="${l}"
                autofocus
                data-listen="change"
                data-area="${o}"
                data-row-index="${t}"
                data-col-index="${s}"
                data-input-type="text"
                style="width:100%;height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-select">${c}</select>`;
    }
  }
}
class gs extends xe {
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
    return this.isAllSelected() ? e : e.filter((s, o) => t.includes(o));
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
class ps {
  constructor(e, t, s) {
    this.r = e, this.g = t, this.b = s;
  }
}
class fe {
  constructor(e, t, s, o) {
    this.minValue = e, this.minColor = t, this.maxValue = s, this.maxColor = o;
  }
}
class N {
  static normalize(e, t, s, o = 0, i = 1) {
    return (e - t) / (s - t) * (i - o) + o;
  }
  static getTwoColorGradientRGB(e, t) {
    const s = N.normalize(e, t.minValue, t.maxValue, 0, 1), o = t.maxColor.r - t.minColor.r, i = t.maxColor.g - t.minColor.g, r = t.maxColor.b - t.minColor.b, n = o * s + t.minColor.r, l = i * s + t.minColor.g, a = r * s + t.minColor.b;
    return `rgb(${Math.round(n)}, ${Math.round(l)}, ${Math.round(a)})`;
  }
  static getThreeColorGradientRGB(e, t) {
    return e < t.middleValue ? N.getTwoColorGradientRGB(e, new fe(t.minValue, t.minColor, t.middleValue, t.middleColor)) : e > t.middleValue ? N.getTwoColorGradientRGB(e, new fe(t.middleValue, t.middleColor, t.maxValue, t.maxColor)) : `rgb(${t.middleColor.r}, ${t.middleColor.g}, ${t.middleColor.b})`;
  }
}
class fs {
  constructor(e, t, s, o, i, r) {
    this.minValue = e, this.minColor = t, this.middleValue = s, this.middleColor = o, this.maxValue = i, this.maxColor = r;
  }
}
export {
  oe as AbstractAreaModel,
  jt as AreaMapFactory,
  qt as AreaModel,
  D as AreaModelArrayOfArrays,
  Jt as AreaModelCellGroups,
  F as AreaModelHidden,
  Ze as AreaModelObjectArray,
  ge as AreaModelObjectArrayWithColumndefs,
  de as AreaModelTree,
  I as AreaObjectMap,
  Kt as AutoRestoreOptions,
  it as AvoidDoubleExecution,
  tt as CellGroup,
  st as CellGroupExt,
  J as CellGroupExtCellRenderer,
  A as CellRange,
  T as CellgroupFactory,
  es as CheckboxBooleanPropertyCellRenderer,
  pe as CheckboxCellRenderer,
  Ut as CheckboxColumnDef,
  Je as CheckboxModel,
  Bt as ChunkData,
  Le as ColAndRowspanModel,
  ke as CollapsedExpandedData,
  ps as ColorRgb,
  V as ColumnDef,
  Re as ConvenienceDomService,
  G as CopyService,
  le as CssVars,
  ss as DateToIntlDDMMYYYYCellRenderer,
  ts as DateToIsoCellRenderer,
  os as DateToLocaleDateCellRenderer,
  ns as DateToTecCellRenderer,
  H as DefaultRowHeights,
  Fe as EleScope,
  re as EventAdapter,
  Ye as ExcelService,
  ae as FalseFn,
  ze as FocusModel,
  Be as GeCellIndices,
  N as GeCssColorUtil,
  Zt as GeFilterService,
  Xt as GeKeyEvent,
  te as GeModelChangeEvent,
  Z as GeMouseEvent,
  L as GeoData,
  P as Icon,
  $t as IndexAndPx,
  Ge as InputCellRenderer,
  Oe as InputHandler,
  O as LicenseManager,
  is as MaleFemaleToIconCellRenderer,
  Ee as MouseHandler,
  Ae as MouseTargetData,
  gs as MultiRowsSelectionModel,
  rs as NumberCellProgressBarCellRenderer,
  as as NumberCellRenderer,
  Ve as OsxShortcutActionIdMapping,
  ue as Padding,
  hs as PositiveAndNegativeNumberRenderer,
  ds as ProgressBarCellRenderer,
  Pe as RenderScope,
  Qt as Renderer,
  Qe as RequestChunk,
  Xe as ResizeHandler,
  ye as SelectCellRenderer,
  xe as SelectionModel,
  $e as SelectionService,
  We as ShortcutService,
  Ne as SimpleDomService,
  x as Size,
  _e as SortItem,
  be as SortedOptions,
  cs as StarRatingCellRenderer,
  Ie as StoreStateCollapsedExpandService,
  Te as StoreStateScrollPosService,
  De as StoreStateSortingService,
  Me as TableApi,
  Yt as TableCellUpdateEvent,
  _ as TableFactory,
  X as TableModel,
  Ot as TableModelAndOptions,
  K as TableOptions,
  we as TableScope,
  fs as ThreeColorGradientArg,
  he as TreeCheckboxModel,
  q as TreeFactory,
  me as TreeOptions,
  ne as TreeRow,
  qe as TreeRowService,
  ls as TrueFalseCellRenderer,
  Ke as TrueFn,
  fe as TwoColorGradientArg,
  et as ValueLabel,
  He as WindowsShortcutActionIdMapping,
  _t as actionIds,
  Gt as allCenter,
  Nt as allLeft,
  zt as allRight,
  Vt as bodyCenter,
  Ht as bodyLeft,
  Wt as bodyRight,
  Ce as debounce,
  us as editInputPipeForNumber,
  Q as getAreaIdentByString,
  Y as isAreaModelTree,
  ve as isCheckboxColumnDef,
  $ as isTreeRow,
  Pt as px0,
  Lt as px10,
  Rt as px100,
  vt as px110,
  Ct as px120,
  yt as px130,
  St as px140,
  wt as px150,
  xt as px160,
  bt as px170,
  mt as px180,
  ft as px190,
  Ft as px20,
  ce as px200,
  pt as px210,
  gt as px220,
  ut as px230,
  ht as px240,
  dt as px250,
  ct as px260,
  at as px270,
  nt as px280,
  lt as px290,
  Dt as px30,
  rt as px300,
  It as px40,
  kt as px50,
  Tt as px60,
  Mt as px70,
  Et as px80,
  At as px90,
  ot as throttle
};
