function ot(c, e = 500) {
  let t = null, o = 0;
  return function(...i) {
    const s = Date.now(), r = e - (s - o);
    r <= 0 ? (c.apply(this, i), o = s) : t || (t = window.setTimeout(() => {
      c.apply(this, i), o = Date.now(), t = null;
    }, r));
  };
}
function ye(c, e = 500) {
  let t = null;
  return function(...o) {
    t && window.clearTimeout(t), t = window.setTimeout(() => {
      c.apply(this, o), t = null;
    }, e);
  };
}
function it(c = 500) {
  return function(e, t, o) {
    let i = 0;
    const s = o.value;
    return o.value = function(...r) {
      if (!(Date.now() - i < c))
        return i = Date.now(), s.apply(this, r);
    }, o;
  };
}
class P {
  // The constructor is private to prevent direct construction calls
  // with the `new` operator
  constructor() {
    this.alreadySet = !1;
  }
  static getInstance() {
    return P.instance || (P.instance = new P()), P.instance;
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
function ve(c) {
  return c && c.type === "CheckboxColumnDef";
}
class Q {
  constructor(e = -1, t = -1, o = -1, i = -1, s, r, l, n = 0, a = 0, d = 0, h = "") {
    this.rowIndex = e, this.rowTop = t, this.columnIndex = o, this.columnLeft = i, this.areaIdent = s, this.sideIdent = r, this.originalEvent = l, this.clickCount = n, this.draggingX = a, this.draggingY = d, this.action = h;
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
class O {
  constructor(e = ">", t = "", o = []) {
    this.content = e, this.style = t, this.classes = o;
  }
}
class fe {
  constructor(e = new O(
    ">",
    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
    ["gt-table-tree-arrow-expanded"]
  ), t = new O(
    ">",
    "",
    ["ge-table-tree-arrow-collapsed"]
  ), o = new O(
    ">",
    "color:transparent;",
    ["gt-table-tree-arrow-hidden"]
  ), i = new O(
    "↕",
    "",
    ["gt-table-tree-arrow-expanded-all"]
  )) {
    this.arrowExpanded = e, this.arrowCollapsed = t, this.arrowPlaceholder = o, this.arrowExpandCollapseAll = i;
  }
}
class me {
  constructor(e = new O("↑", "", ["ge-header-sorted-asc"]), t = new O("↓", "", ["ge-header-sorted-desc"]), o = new O("↑", "color:transparent;", [])) {
    this.iconAsc = e, this.iconDesc = t, this.iconPlaceholder = o;
  }
}
class Re {
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
      const a = ((t == null ? void 0 : t.index) ?? 0) % 2 === 0 ? "even" : "odd";
      this.domService.addClass(n, `ge-table-row-${a}`);
    }
    if (this.domService.setStyle(n, "display", "clip"), this.domService.setStyle(n, "position", "absolute"), this.domService.setStyle(n, "left", `${t.left}px`), this.domService.setStyle(n, "top", `${t.top}px`), this.domService.setStyle(n, "width", `${t.width}px`), this.domService.setStyle(n, "height", `${t.height}px`), this.domService.setAttribute(n, "data-row-index", `${o}`), this.domService.setAttribute(n, "data-area", `${i}`), r) {
      const a = this.domService.createText(r);
      this.domService.appendChild(n, a);
    }
    return this.domService.appendChild(e.child, n), n;
  }
  addColumnDiv(e) {
    const { parent: t, geo: o, rowIndex: i = -1, columnIndex: s = -1, areaIdent: r, sideIdent: l, text: n = "", treeArrow: a, tableOptions: d, checkedType: h = void 0, sortState: u } = e, m = d == null ? void 0 : d.treeOptions, b = d == null ? void 0 : d.showCheckboxWihoutExtraColumn, f = this.domService.createElement("div");
    this.domService.addClass(f, "ge-table-col-div"), b && this.domService.addClass(f, "ge-with-checkbox"), this.domService.addClass(f, `ge-table-col-div-${o.index}`), this.domService.setAttribute(f, "data-col-index", `${o.index}`), this.domService.setAttribute(f, "data-row-index", `${i}`), this.domService.setAttribute(f, "data-area", `${r}`);
    const g = ((o == null ? void 0 : o.index) ?? 0) % 2 === 0 ? "even" : "odd";
    if (r === "body" && l === "center" && this.domService.addClass(f, `ge-table-column-${g}`), this.domService.setStyle(f, "display", "clip"), this.domService.setStyle(f, "position", "absolute"), this.domService.setStyle(f, "left", `${o.left}px`), this.domService.setStyle(f, "top", `${o.top}px`), this.domService.setStyle(f, "width", `${o.width}px`), this.domService.setStyle(f, "height", `${o.height}px`), a && a !== "none" && (this.domService.addClass(f, "ge-table-col-tree"), this.addArrowDiv(f, a, m, i, s, r)), b && s === 0 && h && this.addCheckboxToDiv(f, h, r, i), n) {
      const p = a !== "none" && s === 0;
      this.addLabelDiv(f, n, p, i, s, r);
    }
    return u && this.addSortedIcon(f, u, d == null ? void 0 : d.sortedOptions, s), this.domService.appendChild(t, f), f;
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
        const a = this.domService.createText(t);
        this.domService.addClass(n, "ge-table-label"), this.domService.appendChild(n, a), this.domService.setAttribute(n, "data-row-index", `${i}`), this.domService.setAttribute(n, "data-col-index", `${s}`), this.domService.setAttribute(n, "data-area", `${r}`);
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
    for (const a of r.classes)
      this.domService.addClass(s, a);
    return this.domService.appendChild(e, s), s;
  }
  addArrowDiv(e, t = "none", o = new fe(), i = -1, s = -1, r = "body") {
    const l = this.domService.createElement("div");
    this.domService.addClass(l, "ge-table-tree-arrow-div"), this.domService.setStyle(l, "display", "inline-block"), this.domService.setStyle(l, "position", ""), this.domService.setStyle(l, "width", "20px"), this.domService.setStyle(l, "background", "transparent"), this.domService.setStyle(l, "cursor", "pointer"), this.domService.setAttribute(l, "data-row-index", `${i}`), this.domService.setAttribute(l, "data-col-index", `${s}`), this.domService.setAttribute(l, "data-area", `${r}`);
    let n;
    t === "expanded" ? n = o.arrowExpanded : t === "collapsed" ? n = o.arrowCollapsed : n = o.arrowPlaceholder;
    const a = n.content, d = this.domService.createText(a);
    this.domService.appendChild(l, d), n.style && this.applyStyleString(l, n.style);
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
class Ae {
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
    const o = new Ae(e.target, this.tableScope);
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
          const a = n;
          a.expanded = !a.expanded, "recalcVisibleTreeRows" in l && l.recalcVisibleTreeRows(), this.tableScope.tableModel.recalcSize(this.tableScope.hostElement.clientWidth), this.tableScope.adjustContainersAndRows(), this.updateCollapsedExpandedState(a);
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
      const n = (s = this.tableScope.storeStateCollapsedExpandService) == null ? void 0 : s.collapsedExpandedStateGet().mode, a = n === "collapsed" && !e.expanded || n === "expanded" && e.expanded, d = n === "collapsed" && e.expanded || n === "expanded" && !e.expanded, h = t(e.data);
      a ? (r = this.tableScope.storeStateCollapsedExpandService) == null || r.collapsedStateIdsPush(h) : d && ((l = this.tableScope.storeStateCollapsedExpandService) == null || l.collapsedStateIdsRemove(h));
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
class Ie extends ee {
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
class ke {
  constructor(e = "collapsed", t = [], o = !1, i = !1) {
    this.mode = e, this.rowIds = t, this.allCollapsed = o, this.allExpanded = i;
  }
}
class Te extends ee {
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
        const o = t + this.COLLAPSED_EXPANDED_STATE, i = this.loadFromLocalStorage(o);
        i && (this.collapsedExpandedState = i);
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
class _e {
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
class Fe {
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
class Oe extends _e {
  constructor(e, t, o, i) {
    var r, l;
    super(e, t, o, i), this.dragging = !1, this.editing = !1, this.storedColumnWidths = [], this.scrollLeft = 0, this.scrollViewportLeft = 0, this.scrollFactorY = 0, this.scrollFactorX = 0, this.cleanupFunctions = {
      header: [],
      body: [],
      footer: []
    }, this.tree = !1, this.colAndRowspanModels = new T(), this.firstVisibleRowIndex = -1, this.draggingTargetColumnIndex = -1, this.removables = [], this.tableModel.getSelectionModel ? this.getSelectionModel = this.tableModel.getSelectionModel : (r = this.tableOptions) != null && r.getSelectionModel && (this.getSelectionModel = this.tableOptions.getSelectionModel), (l = this.tableOptions) != null && l.getFocusModel && (this.getFocusModel = this.tableOptions.getFocusModel), K(t.getAreaModel("body")) && (this.tree = !0), ["header", "body", "footer"].forEach(
      (n) => {
        var a;
        this.colAndRowspanModels[n] = new Fe(t, t.getAreaModel(n)), (a = this.colAndRowspanModels[n]) == null || a.init();
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
      let a;
      const d = this.editorRenderer && this.editorRendererRow === t && this.editorRendererColumn === o;
      let h;
      if (d ? h = this.editorRenderer : h = r.getCellRenderer(t, o), n.innerText = "", this.applyCssClasses(n, s), h)
        a = h.render(n, t, o, e, r, i, this.dom.domService), a && this.cleanupFunctions[e].push(a);
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
    const l = 0, n = this.areaBodyCenterGeo.width, a = this.tableModel.getPadding(), d = this.tableModel.getAreaModel(e), h = d.getRowCount();
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
          areaModel: d,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: k,
          columnIndexEnd: m - b - 1,
          verticalFixed: !1,
          lastRowOfModel: y
        }), a.left > 0 && (x = { left: l, width: this.areaBodyWestGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(o, x, p, e, "west"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "west",
          areaModel: d,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: 0,
          columnIndexEnd: k - 1,
          verticalFixed: !0,
          lastRowOfModel: y
        })), a.right > 0 && (x = { left: l, width: this.areaBodyEastGeo.width, height: R, top: C, index: p }, S = this.dom.addRowDiv(s, x, p, e, "east"), this.adjustColumnsToRowParent({
          areaIdent: e,
          sideIdent: "east",
          areaModel: d,
          geo: x,
          parent: S,
          rowIndex: p,
          columnIndexStart: m - b,
          columnIndexEnd: m - 1,
          verticalFixed: !0,
          lastRowOfModel: y
        })), e === "header" && this.tree && p === h - 1) {
          const E = this.dom.applyStyle(
            this.dom.setAttribute(
              this.dom.addDiv(S, new F(16, 20, 20, 8)),
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
          this.drawBigCell(C, y, t, d, R, x);
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
    const l = o + this.getRowHeights(0, e.r1 - 1, i).reduce((g, p) => g + p, 0), n = this.tableModel.getColumnCount(), a = this.tableModel.getFixedRightColumnCount();
    let d = 0;
    a > 0 && e.c1 >= n - a && (d = n - a);
    const h = t + this.getColumnWidths(d, e.c1 - 1).reduce((g, p) => g + p, 0), u = this.getRowHeights(e.r1, e.r2, i).reduce((g, p) => g + p, 0), m = this.getColumnWidths(e.c1, e.c2).reduce((g, p) => g + p, 0);
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
    verticalFixed: a = !1,
    lastRowOfModel: d = !1
  }) {
    var f;
    this.scrollViewportLeft = this.scrollViewport.scrollLeft;
    let h = 0;
    if (!a) {
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
        R > 1 && (y = this.getRowHeights(r, r + R - 1, o).reduce((E, M) => E + M, 0));
        let S = C;
        x > 1 && (S = this.getColumnWidths(g, g + x - 1).reduce((E, M) => E + M, 0));
        let k = !1;
        if (this.colAndRowspanModels && this.colAndRowspanModels[e] && (f = this.colAndRowspanModels[e]) != null && f.isInRange(r, g) && (k = !0), this.draggingTargetColumnIndex === g && e !== "header") {
          this.renderDragTargetDiv(s, p, u, S, y);
          const E = { left: p, top: u, width: S, height: y };
          this.dom.addColumnBorderDivs(this.tableOptions, s, E, e, t);
        } else {
          const E = this.renderSelectedBackgroundDiv(k, m, t, o, r, g, s, p, u, S, y);
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
            cellSelected: E,
            lastRowOfModel: d,
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
    top: a,
    parent: d,
    lastRowOfModel: h
  }) {
    var se;
    const m = this.editorRenderer && this.editorRendererRow === i && this.editorRendererColumn === s ? this.editorRenderer : e.getCellRenderer(i, s), b = { left: r, width: l, height: n, top: a, index: s }, f = e.getRowByIndex(i);
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
        parent: d,
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
    const E = this.tableModel.getColumnDef(s);
    E && E.classes[t] && this.dom.addClasses(E.classes[t], S);
    let M;
    m && (M = m.render(S, i, s, t, e, y, this.dom.domService));
    const W = e.getCustomClassesAt(i, s);
    if (W.length && this.dom.addClasses(W, S), this.dom.addColumnBorderDivs(this.tableOptions, d, b, t, o), h && this.dom.addHorizontalBorder({ left: r, width: l, height: n, top: a + n }, d), this.getFocusModel && t === "body") {
      const v = this.getFocusModel();
      v != null && v.hasFocus(i, s) && this.dom.addFocusBorderDivs(d, b, {});
    }
    t === "header" && this.dom.setAttribute(S, "data-ge-action", "drag-column");
    const X = e.getCustomStyleAt(i, s);
    if (X)
      for (const v in X)
        this.dom.setStyle(S, v, X[v]);
    return [S, M];
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
        const d = { left: ((s = e.originalEvent) == null ? void 0 : s.clientX) - l / 2, width: l, height: r, top: 0, index: t };
        this.dom.applyStyle(this.draggingColumn, {
          background: "rgba(128,128,128,0.2)",
          display: "block",
          overfllow: "clip"
        }), this.dom.applyStyleInPx(this.draggingColumn, d), o && this.renderContentOfDraggingColumn(d);
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
      for (let a = 0; a < r; a++) {
        const d = o, h = s.getRowHeight(a), u = { left: 0, width: e.width, height: h, top: d, index: a }, m = s.getValueAt(a, l), b = s.getCellRenderer(a, l), f = b ? "" : `${m}`, g = {
          parent: n,
          geo: u,
          rowIndex: a,
          columnIndex: l,
          areaIdent: t,
          sideIdent: i,
          text: f
        }, p = this.dom.addColumnDiv(g);
        let C;
        b && (C = b.render(p, a, l, t, s, m, this.dom.domService), C && this.cleanupFunctions[t].push(C));
        const y = s.getCustomClassesAt(a, l);
        y.length && this.dom.addClasses(y, p);
        const R = this.tableModel.getColumnDef(l);
        R && R.classes[t] && this.dom.addClasses(R.classes[t], p), this.dom.addColumnBorderDivs(this.tableOptions, n, u, t, i);
        const x = s.getCustomStyleAt(a, l);
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
  renderSelectedBackgroundDiv(e, t, o, i, s, r, l, n, a, d, h) {
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
          this.dom.setStyle(g, "left", `${n}px`), this.dom.setStyle(g, "top", `${a}px`), this.dom.setStyle(g, "width", `${d}px`), this.dom.setStyle(g, "height", `${h}px`);
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
    height: a,
    parent: d,
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
      height: a,
      top: l,
      parent: d,
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
    const n = this.dom.domService, a = this.tableOptions.columnResizeHandleWidthInPx ?? 2, d = n.createElement("div");
    n.setAttribute(d, "data-col-index", `${t}`), n.setAttribute(d, "data-row-index", `${e}`), n.setAttribute(d, "data-area", "header"), n.setAttribute(d, "data-ge-action", "resize-column"), n.addClass(d, "ge-table-column-resize-handle"), n.setStyle(d, "display", "clip"), n.setStyle(d, "position", "absolute"), n.setStyle(d, "cursor", "col-resize"), n.setStyle(d, "left", `${o + s - a}px`), n.setStyle(d, "top", `${i}px`), n.setStyle(d, "width", `${a}px`), n.setStyle(d, "height", `${r}px`), n.appendChild(l, d);
  }
}
class $e {
  constructor(e, t) {
    this.columnIndex = e, this.sortState = t;
  }
}
class Pe {
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
class He {
  constructor(e) {
    var t, o;
    this.tableScope = e, (t = this.tableScope.tableOptions) != null && t.getSelectionModel && (this.getSelectionModel = this.tableScope.tableOptions.getSelectionModel), (o = this.tableScope.tableOptions) != null && o.getFocusModel && (this.getFocusModel = this.tableScope.tableOptions.getFocusModel);
  }
  onMouseClicked(e, t) {
    var s, r, l, n, a, d, h;
    let o = !1, i = !1;
    if (this.getSelectionModel && this.getFocusModel) {
      const u = this.getSelectionModel(), m = this.getFocusModel();
      u && m && (m.hasFocus(e.rowIndex, e.columnIndex) || (m.setFocus(e.rowIndex, e.columnIndex), this.tableScope.onFocusChanged(m), o = !0), (s = e.originalEvent) != null && s.shiftKey || u.hasSelection() && (u.clear(), o = !0), (r = e.originalEvent) != null && r.shiftKey && this.previousEvt ? (u.addSelection(this.createRangeByEvents(e, this.previousEvt)), i = !0, o = !0) : (l = e.originalEvent) != null && l.altKey && ((n = e.originalEvent) != null && n.ctrlKey || (a = e.originalEvent) != null && a.metaKey) ? (u.removeSelection(A.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0) : (d = e.originalEvent) != null && d.ctrlKey || (h = e.originalEvent) != null && h.metaKey ? (u.addSelection(A.singleCell(e.rowIndex, e.columnIndex)), i = !0, o = !0) : (u.firstClick(e.rowIndex, e.columnIndex), o = !0), this.tableScope.onSelectionChanged(u));
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
class Be {
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
    this.isMacintosh() ? Object.assign(this.shortcutActionIdMapping, new Ve().get()) : Object.assign(this.shortcutActionIdMapping, new Be().get());
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
class Ge {
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
class ze {
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
  constructor(e = new O(
    "❯",
    "",
    ["gt-table-icon-expanded"]
  ), t = new O(
    "❯",
    "transform: rotate(180deg) translate(-100%, -100%); transform-origin: 0 0;",
    ["ge-table-icon-collapsed"]
  )) {
    this.iconExpanded = e, this.iconCollapsed = t;
  }
  // `⊖ `,  `⊕ `;
}
const je = new we(), Xe = new Ne("cell");
class U {
  constructor() {
    this.overflowX = "auto", this.overflowY = "auto", this.horizontalBorderVisible = !0, this.verticalBorderVisible = !0, this.footerSeparatorBorderVisible = !0, this.headerSeparatorBorderVisible = !0, this.fixedEastSeparatorBorderVisible = !0, this.fixedWestSeparatorBorderVisible = !0, this.tableTopBorderVisible = !0, this.tableBottomBorderVisible = !0, this.hoverRowVisible = !0, this.hoverColumnVisible = !0, this.columnsResizable = !0, this.columnsDraggable = !0, this.columnResizeHandleWidthInPx = 4, this.defaultRowHeights = {
      header: 34,
      body: 34,
      footer: 34
    }, this.footerVerticalSeparator = !1, this.headerToggleExpandCollapseIcons = !1, this.headerVerticalSeparator = !1, this.treeOptions = new fe(), this.headerGroupOptions = new oe(), this.showCheckboxWihoutExtraColumn = !1, this.externalFilterFunction = void 0, this.sortedOptions = new me(), this.sortOrder = ["asc", "desc"], this.resizeEventDebounceDelay = 500, this.getEditRenderer = (e, t) => new ze(), this.getSelectionModel = () => je, this.getFocusModel = () => Xe;
  }
}
const L = class L {
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
            const a = [];
            for (let d = r.c1; d <= r.c2; d++) {
              const h = t.isSelected(n, d) ? e.getBodyModel().getTextValueAt(n, d) : "";
              a.push(h);
            }
            l.push(a.join(L.columnSeparatorChar));
          }
          return i(l.join(L.rowSeparatorChar));
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
L.columnSeparatorChar = "	", L.rowSeparatorChar = `
`;
let z = L;
class Ye {
  constructor(e, t = 500) {
    this.tableScope = e, this.debounceDelay = t, new ResizeObserver(ye(this.handleResize.bind(this), t)).observe(this.tableScope.hostElement);
  }
  handleResize(e) {
    const t = e[0], { width: o } = t.contentRect;
    this.tableScope.recalcColumnWidths(o);
  }
}
class Se extends Oe {
  constructor(e, t, o, i, s, r = new z()) {
    var a;
    if (super(e, t, new Re(o), i), this.eventListener = s, this.copyService = r, this.licenseManager = P.getInstance(), this.selectionService = new He(this), this.api = new Me(this), this.mouseStartAction = "", this.mouseStartWidth = -1, this.mouseStartColumnIndex = -1, this.dragFrom = -1, this.dragTo = -1, this.lastDragFrom = -1, this.lastDragTo = -1, this.firstDraggingRendering = !0, s || (this.eventListener = new re()), (a = this.tableOptions) != null && a.autoRestoreOptions) {
      const d = this.tableOptions.autoRestoreOptions, h = d.getStorageKeyFn;
      h && (d.autoRestoreScrollPosition && (this.storeScrollPosStateService = new Ie(h)), d.autoRestoreCollapsedExpandedState && (this.storeStateCollapsedExpandService = new Te(h)), d.autoRestoreSortingState && (this.storeSortingService = new De(h)));
    }
    this.mouseHandler = new Ee(this), this.inputHandler = new Pe(this), this.resizeHandler = new Ye(this, i.resizeEventDebounceDelay), this.shortcutService = new We(this), this.shortcutService.addListener(this.selectionService);
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
  static create(e, t, o = new U(), i = new re(), s = new Ge(), r = new z()) {
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
      const l = i.sortStatesOrder ? i.sortStatesOrder : this.tableOptions.sortOrder, n = i.sortState ?? "", a = l[(l.indexOf(n) + 1) % l.length], d = new $e(o, a);
      this.tableModel.doSort([d]) && ((s = this.tableModel.getColumnDefs()) == null || s.forEach((u) => u.sortState = ""), i.sortState = a), this.repaint(), (r = this.storeSortingService) == null || r.setSortItems([d]);
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
          for (let a = 0; a < n; a++) {
            const d = r.getRowByIndex(a);
            if (d)
              if (s.allExpanded)
                d.expanded = !0;
              else if (s.allCollapsed)
                d.expanded = !1;
              else {
                const h = i(d.data);
                s.mode === "expanded" ? d.expanded = this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h) : s.mode === "collapsed" && (d.expanded = !this.storeStateCollapsedExpandService.collapsedExpandedStateIncludes(h));
              }
          }
          l.recalcVisibleTreeRows();
        }
      }
    }
  }
}
const N = class N {
};
N.themes = ["light", "combat", "paper", "blackboard"], N.vars = {
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
let ne = N;
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
        const a = new le(n, !0, [], o, i + 1);
        if ((l = o.children) == null || l.push(a), q.buildTreeRow(
          n,
          t,
          a,
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
const Ke = () => !0, ae = () => !1;
class V {
  constructor(e, t, o = new w(100, "px"), i = new T(), s = new T(), r = new w(100, "px"), l = new w(100, "px"), n, a, d, h, u, m, b, f, g = () => this.visible) {
    this.property = e, this.headerLabel = t, this.width = o, this.classes = i, this.rendererMap = s, this.minWidth = r, this.maxWidth = l, this.sortable = n, this.sortComparator = a, this.sortState = d, this.sortStatesOrder = h, this.sortIconVisible = u, this.editable = m, this.getEditRenderer = b, this.editInputPipe = f, this.isVisible = g, this.visible = !0, o.unit !== "px" && (this.minWidth = new w(0, "px"), this.maxWidth = new w(1e5, "px"));
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
    ), i = e.sortIconVisible ?? e.sortable ?? ae, s = e.editable ?? e.editable ?? ae, r = e.isVisible ?? e.isVisible ?? Ke;
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
const st = new w(300, "px"), rt = new w(290, "px"), nt = new w(280, "px"), lt = new w(270, "px"), at = new w(260, "px"), dt = new w(250, "px"), ht = new w(240, "px"), ct = new w(230, "px"), ut = new w(220, "px"), gt = new w(210, "px"), de = new w(200, "px"), pt = new w(190, "px"), bt = new w(180, "px"), ft = new w(170, "px"), mt = new w(160, "px"), wt = new w(150, "px"), St = new w(140, "px"), xt = new w(130, "px"), Ct = new w(120, "px"), yt = new w(110, "px"), vt = new w(100, "px"), Rt = new w(90, "px"), At = new w(80, "px"), Et = new w(70, "px"), Mt = new w(60, "px"), It = new w(50, "px"), kt = new w(40, "px"), Tt = new w(30, "px"), Dt = new w(20, "px"), _t = new w(10, "px"), Ft = new w(0, "px");
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
class Ue {
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
    super(e, i, o), this.areaIdent = e, this.rows = t, this.defaultRowHeight = o, this.columnDefs = i, this.type = "AreaModelTree", this.sorterService = new xe(), this.service = new Ue(), this.properties = i.map((s) => s.property), this.flattenRows = this.service.flattenTree(t), this.filteredFlattenRows = [...this.flattenRows];
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
class qe {
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
  constructor(e, t, o, i = 0, s = 0, r = !1, l = new B(), n = [], a = [], d = -1, h = 0, u = 400, m = () => {
  }) {
    var b, f, g, p;
    this.headerAreaModel = e, this.bodyAreaModel = t, this.footerAreaModel = o, this.fixedLeftColumnCount = i, this.fixedRightColumnCount = s, this.rowCheckboxVisible = r, this.defaultRowHeights = l, this.columnDefs = n, this.columnSizes = a, this.overridingColumnWidth = d, this.columnCount = h, this.parentSize = u, this.getSelectionModel = m, this.rowCount = 0, this.contentHeightInPx = 0, this.contentWidthInPx = 0, this.padding = new ue(0, 0, 0, 0), this.xPositions = [], e.areaIdent = "header", t.areaIdent = "body", o.areaIdent = "footer", this.columnCount || ((b = this.columnDefs) != null && b.length ? this.columnCount = this.columnDefs.length : (f = this.columnSizes) != null && f.length && (this.columnCount = (g = this.columnSizes) == null ? void 0 : g.length)), (p = this.columnDefs) != null && p.length && ve(this.columnDefs[0]) && !t.rowSelectionModel && (t.rowSelectionModel = new qe());
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
  recalcColumnWidths(e) {
    var t, o, i;
    if (!((t = this.columnDefs) != null && t.length) && !((o = this.columnSizes) != null && o.length) && (this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth)), (i = this.columnDefs) != null && i.length) {
      const s = this.columnDefs.filter((n) => {
        var a;
        return ((a = n.width) == null ? void 0 : a.unit) === "weight";
      });
      this.columnSizes = this.columnDefs.map((n) => {
        if (n.width.unit === "%" && e) {
          let a = Math.floor(n.width.value * e / 100);
          if (n.minWidth) {
            const d = this.sizeToPixel(n.minWidth, e);
            a = Math.max(d, a);
          }
          if (n.maxWidth) {
            const d = this.sizeToPixel(n.maxWidth, e);
            a = Math.min(d, a);
          }
          return a;
        } else if (n.width.unit === "px" && e)
          return n.width.value;
        return 0;
      });
      const r = this.columnSizes.reduce((n, a) => n + a), l = e - r;
      if (l > 0 && s.length) {
        const n = s.map((a) => a.width.value).reduce((a, d) => a + d);
        for (let a = 0; a < this.columnDefs.length; a++) {
          const d = this.columnDefs[a];
          d.width.unit === "weight" && (this.columnSizes[a] = d.width.value * l / n);
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
class Je extends ie {
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
class ge extends Je {
  constructor(e, t, o, i) {
    super(
      e,
      t,
      i,
      o
    ), this.areaIdent = e, this.rows = t, this.columnDefs = o, this.defaultRowHeight = i;
  }
}
class $ {
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
    var t, o, i, s, r, l, n, a, d, h, u, m, b, f;
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
    if (e.columnDefs === void 0 && ((o = e.properties) != null && o.length ? e.columnDefs = e.properties.map((g) => new V(g, g.toUpperCase(), de)) : (i = e.rows) != null && i.length ? e.columnDefs = Object.keys(e.rows[0]).map((g) => new V(g, g.toUpperCase(), de)) : e.columnDefs = []), e.columnCount === void 0 && ((s = e.columnDefs) != null && s.length ? e.columnCount = e.columnDefs.length : (r = e.headerData) != null && r.length ? e.columnCount = e.headerData[0].length : (l = e.columnSizes) != null && l.length ? e.columnCount = (n = e.columnSizes) == null ? void 0 : n.length : console.warn('Property "columnCount" is missing and cannot be derived from other properties.')), e.headerAreaModel || ((a = e.headerData) != null && a.length ? e.headerAreaModel = new D(
      "header",
      e.headerData,
      e.defaultRowHeights.header,
      e.columnDefs
    ) : (d = e.columnDefs) != null && d.length ? e.headerAreaModel = new D(
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
    return $.buildByTypedRows(
      e.rows ?? [],
      e.columnDefs,
      e.tableOptions ?? new U(),
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
  static buildByTypedRows(e, t, o = new U(), i = 0, s = 0) {
    const r = o.defaultRowHeights, l = t[0].property === "CheckboxColumn";
    if (e != null && e.length && H(e[0])) {
      const n = e, a = new he(
        "body",
        n,
        r.body,
        t
      );
      return (l || o.showCheckboxWihoutExtraColumn) && (a.rowSelectionModel = new ce(n)), $.createByAreaModelsParam({
        headerAreaModel: new D("header", [t.map((d) => d.headerLabel)], r.header),
        bodyAreaModel: a,
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
    return $.createByObjectArrayParam({
      rows: e,
      columnDefs: t,
      fixedLeftColumnCount: i,
      fixedRightColumnCount: s,
      defaultRowHeights: o.defaultRowHeights
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
    return $.createByObjectArray(
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
  static createByAreaModels(e = new _(), t, o = new _(), i = 0, s = 0, r = !1, l = new B(), n, a = [], d = -1, h) {
    return new Y(
      e,
      t,
      o,
      i,
      s,
      r,
      l,
      n,
      a,
      d,
      h
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
    return $.createByAreaModels(
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
  static createByObjectArray(e, t = [], o = [], i = 0, s = 0, r = !1, l = new B(), n, a = []) {
    let d;
    t != null && t.length ? d = new D("header", t, l.header, n) : n != null && n.length ? d = new D("header", [n.map((m) => m.headerLabel)], l.header, n) : d = new _();
    const h = o ? new D("footer", o, l.footer, n) : new _(), u = new ge("body", e, n, l.body);
    return new Y(
      d,
      u,
      h,
      i,
      s,
      r,
      l,
      n,
      a
    );
  }
}
const Ot = [
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
class $t {
  constructor(e, t) {
    this.tableModel = e, this.tableOptions = t;
  }
}
class Qe {
  constructor(e, t, o, i, s, r, l) {
    this.emmitDataKey = e, this.emmitCancelKey = t, this.queryId = o, this.filter = i, this.sorting = s, this.startIndex = r, this.endIndex = l;
  }
}
class Pt extends Qe {
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
class Ze {
  constructor(e, t) {
    this.value = e, this.label = t;
  }
}
class Lt {
  constructor(e, t) {
    this.index = e, this.px = t;
  }
}
const Ht = { body: ["ge-table-text-align-left"] }, Bt = { body: ["ge-table-text-align-center"] }, Vt = { body: ["ge-table-text-align-right"] }, Wt = {
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
  render(e, t, o, i, s, r, l) {
    if (s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.isRowChecked(t), a = n === "full" ? "checked" : "", d = n === "semi" ? '<span style="opacity: 0.4;">✓<span>' : "";
      e.innerHTML = `
        <input
            type="checkbox"
            data-area="${i}"
            data-row-index="${t}"
            data-col-index="${o}"
            data-input-type="checkbox"
            ${a}
            class="ge-table-row-checkbox">
        ${d}  `;
    }
  }
}
class Nt {
  constructor() {
    this.type = "CheckboxColumnDef", this.property = "CheckboxColumn", this.headerLabel = "", this.width = new w(50, "px"), this.minWidth = new w(50, "px"), this.maxWidth = new w(100, "px"), this.rendererMap = new T(new pe(), new pe(), void 0), this.classes = new T(
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
    return new T(
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
  constructor(e, t, o, i, s = {}) {
    this.area = e, this.rowIndex = t, this.columnIndex = o, this.value = i, this.cssClasses = s;
  }
}
class Kt {
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
class et {
  constructor(e, t, o, i = !1, s = "normal", r = void 0) {
    this.data = e, this.property = t, this.toggle = o, this.closed = i, this.visibility = s, this.children = r, this.impl = "CellGroup";
  }
}
class tt extends et {
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
      const l = e[r], n = new tt(l, o, r, i);
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
class Ut {
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
      const { toggle: a, visibility: d, closed: h } = r, u = a ? j.toggleHeaderGroup : "";
      this.addText(e, i, t, o, n, u), a && d !== "always" && this.addArrowDiv(l, e, !h, t, o, i, u);
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
    let a;
    o ? a = this.headerGroupOptions.iconExpanded : a = this.headerGroupOptions.iconCollapsed;
    const d = a.content, h = e.createText(d);
    e.appendChild(n, h), a.style && this.applyStyleString(e, n, a.style);
    for (const u of a.classes)
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
class qt {
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
class Jt {
  filterPredict(e, t, o = this.objectToString.bind(this)) {
    if (!e)
      return !1;
    if (!t)
      return !0;
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((h) => h !== i && h !== s && h !== ""), l = r.filter((h) => !h.startsWith(i) && !h.startsWith(s)), n = r.filter((h) => h.startsWith(i)).map((h) => h.replace(/\+/g, "")), a = r.filter((h) => h.startsWith(s)).map((h) => h.replace(/-/g, ""));
    let d = !l.length;
    for (let h = 0; h < l.length; h++)
      (d || o(e).includes(l[h])) && (d = !0);
    if (!d)
      return !1;
    for (let h = 0; h < n.length; h++)
      if (!o(e).includes(n[h]))
        return !1;
    for (let h = 0; h < a.length; h++)
      if (o(e).includes(a[h]))
        return !1;
    return !0;
  }
  filterRows(e, t, o = (i) => JSON.stringify(i).toLowerCase()) {
    if (!e)
      return [];
    if (!t)
      return [...e];
    t = t.toLowerCase();
    const i = "+", s = "-", r = t.toLowerCase().split(" ").filter((d) => d !== i && d !== s && d !== ""), l = r.filter((d) => !d.startsWith(i) && !d.startsWith(s)), n = r.filter((d) => d.startsWith(i)).map((d) => d.replace(/\+/g, "")), a = r.filter((d) => d.startsWith(s)).map((d) => d.replace(/-/g, ""));
    return e == null ? void 0 : e.filter((d) => {
      let h = !l.length;
      for (let u = 0; u < l.length; u++)
        (h || o(d).includes(l[u])) && (h = !0);
      if (!h)
        return !1;
      for (let u = 0; u < n.length; u++)
        if (!o(d).includes(n[u]))
          return !1;
      for (let u = 0; u < a.length; u++)
        if (o(d).includes(a[u]))
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
class Qt {
  static bodyRenderer(e) {
    return new T(void 0, e, void 0);
  }
}
class Zt {
  constructor(e, t = !0, o = !1) {
    this.property = e, this.skipCheckableCheck = t, this.readonly = o;
  }
  render(e, t, o, i, s, r, l) {
    if (this.readonly || this.skipCheckableCheck || s.isRowCheckable(t)) {
      l.addClass(e, "ge-table-row-checkbox-div");
      const n = s.getRowByIndex(t), d = s.getValueByT(n, this.property) === !0 ? "checked" : "", h = this.readonly ? " readonly " : "";
      if (l.addClass(e, "ge-padding-property-checkbox"), e.innerHTML = `
        <input
          type="checkbox"
          data-area="${i}"
          data-row-index="${t}"
          data-col-index="${o}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${d}
          ${h}
          class="ge-input-checkbox">`, !this.readonly) {
        const u = e.querySelector(".ge-input-checkbox");
        u && u.addEventListener("click", (m, b) => (n[this.property] = !n[this.property], !0));
      }
    }
  }
}
class eo {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString());
  }
}
class to {
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
class oo {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toLocaleDateString());
  }
}
class io {
  render(e, t, o, i, s, r, l) {
    r === "male" || r === "m" ? e.innerText = "♂" : (r === "female" || r === "f") && (e.innerText = "♀");
  }
}
class so {
  constructor(e = 100, t = !1) {
    this.maxValue = e, this.labelVisible = t;
  }
  render(e, t, o, i, s, r, l) {
    if (l.addClass(e, "ge-progressbar-div"), !isNaN(r)) {
      const a = Number(r) * 100 / this.maxValue, d = this.labelVisible ? Math.round(a) + "%" : "";
      e.innerHTML = `
        <div class="ge-table-label-div"
          data-row-index="${t}"
          data-col-index="${o}"
          data-area="${i}"
          title="${d}"
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
class ro {
  render(e, t, o, i, s, r, l) {
    r === "true" || r === !0 ? e.innerHTML = '<span class="ge-true-text-color">✅</span>' : r === "false" || r === !1 ? e.innerHTML = '<span class="ge-false-text-color">❌</span>' : e.innerText = "";
  }
}
class no {
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = new Date(r).toISOString().replace(/T/g, " ").replace(/\..*/g, ""));
  }
}
class lo {
  constructor(e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    this.min = e, this.max = t;
  }
  render(e, t, o, i, s, r, l) {
    r && (e.innerText = r, (typeof r == "string" || isNaN(r) || r < this.min || r > this.max) && l.addClass(e, "ge-cell-error"));
  }
}
class ao {
  constructor(e) {
    this.property = e;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), a = +("" + s.getValueByT(n, this.property));
    if (!isNaN(a)) {
      const d = [];
      for (let u = 0; u < a; u++)
        d.push("★");
      const h = d.join(" ");
      e.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${t}" data-col-index="${o}" data-area="${i}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${t}" data-col-index="${o}" data-area="${i}">${h}</div>
          </div>`;
    }
  }
}
class ho {
  constructor(e, t = 100, o = !1) {
    this.property = e, this.maxValue = t, this.labelVisible = o;
  }
  render(e, t, o, i, s, r, l) {
    l.addClass(e, "ge-star-rating-div");
    const n = s.getRowByIndex(t), a = +("" + s.getValueByT(n, this.property));
    if (!isNaN(a)) {
      const d = a * 100 / this.maxValue, h = this.labelVisible ? Math.round(d) + "%" : "";
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
class co {
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
const uo = function(c, e, t) {
  return c ? Number(c) : "";
};
class Ce {
  constructor(e) {
    this.options = e;
  }
  static create(e) {
    return new Ce(
      e.map((t) => new Ze(t, t))
    );
  }
  render(e, t, o, i, s, r, l) {
    if (s.isEditable(t, o)) {
      l.addClass(e, "ge-table-row-select-div");
      const n = s.getValueAt(t, o);
      let a = [];
      for (let h of this.options) {
        const u = h.value === n ? " selected " : "";
        a.push(`<option value="${h.value}" ${u}>${h.label}</option>`);
      }
      const d = a.join("");
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
                class="ge-table-cell-editor-select">${d}</select>`;
    }
  }
}
class go extends we {
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
class po {
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
    const o = G.normalize(e, t.minValue, t.maxValue, 0, 1), i = t.maxColor.r - t.minColor.r, s = t.maxColor.g - t.minColor.g, r = t.maxColor.b - t.minColor.b, l = i * o + t.minColor.r, n = s * o + t.minColor.g, a = r * o + t.minColor.b;
    return `rgb(${Math.round(l)}, ${Math.round(n)}, ${Math.round(a)})`;
  }
  static getThreeColorGradientRGB(e, t) {
    return e < t.middleValue ? G.getTwoColorGradientRGB(e, new be(t.minValue, t.minColor, t.middleValue, t.middleColor)) : e > t.middleValue ? G.getTwoColorGradientRGB(e, new be(t.middleValue, t.middleColor, t.maxValue, t.maxColor)) : `rgb(${t.middleColor.r}, ${t.middleColor.g}, ${t.middleColor.b})`;
  }
}
class bo {
  constructor(e, t, o, i, s, r) {
    this.minValue = e, this.minColor = t, this.middleValue = o, this.middleColor = i, this.maxValue = s, this.maxColor = r;
  }
}
export {
  ie as AbstractAreaModel,
  jt as AreaMapFactory,
  Ut as AreaModel,
  D as AreaModelArrayOfArrays,
  qt as AreaModelCellGroups,
  _ as AreaModelHidden,
  Je as AreaModelObjectArray,
  ge as AreaModelObjectArrayWithColumndefs,
  he as AreaModelTree,
  T as AreaObjectMap,
  Kt as AutoRestoreOptions,
  it as AvoidDoubleExecution,
  et as CellGroup,
  tt as CellGroupExt,
  J as CellGroupExtCellRenderer,
  A as CellRange,
  I as CellgroupFactory,
  Zt as CheckboxBooleanPropertyCellRenderer,
  pe as CheckboxCellRenderer,
  Nt as CheckboxColumnDef,
  qe as CheckboxModel,
  Pt as ChunkData,
  Fe as ColAndRowspanModel,
  ke as CollapsedExpandedData,
  po as ColorRgb,
  V as ColumnDef,
  Re as ConvenienceDomService,
  z as CopyService,
  ne as CssVars,
  to as DateToIntlDDMMYYYYCellRenderer,
  eo as DateToIsoCellRenderer,
  oo as DateToLocaleDateCellRenderer,
  no as DateToTecCellRenderer,
  B as DefaultRowHeights,
  _e as EleScope,
  re as EventAdapter,
  ae as FalseFn,
  Ne as FocusModel,
  Le as GeCellIndices,
  G as GeCssColorUtil,
  Jt as GeFilterService,
  Xt as GeKeyEvent,
  te as GeModelChangeEvent,
  Q as GeMouseEvent,
  F as GeoData,
  O as Icon,
  Lt as IndexAndPx,
  ze as InputCellRenderer,
  Pe as InputHandler,
  P as LicenseManager,
  io as MaleFemaleToIconCellRenderer,
  Ee as MouseHandler,
  Ae as MouseTargetData,
  go as MultiRowsSelectionModel,
  so as NumberCellProgressBarCellRenderer,
  lo as NumberCellRenderer,
  Ve as OsxShortcutActionIdMapping,
  ue as Padding,
  co as PositiveAndNegativeNumberRenderer,
  ho as ProgressBarCellRenderer,
  Oe as RenderScope,
  Qt as Renderer,
  Qe as RequestChunk,
  Ye as ResizeHandler,
  Ce as SelectCellRenderer,
  we as SelectionModel,
  He as SelectionService,
  We as ShortcutService,
  Ge as SimpleDomService,
  w as Size,
  $e as SortItem,
  me as SortedOptions,
  ao as StarRatingCellRenderer,
  Te as StoreStateCollapsedExpandService,
  Ie as StoreStateScrollPosService,
  De as StoreStateSortingService,
  Me as TableApi,
  Yt as TableCellUpdateEvent,
  $ as TableFactory,
  Y as TableModel,
  $t as TableModelAndOptions,
  U as TableOptions,
  Se as TableScope,
  bo as ThreeColorGradientArg,
  ce as TreeCheckboxModel,
  q as TreeFactory,
  fe as TreeOptions,
  le as TreeRow,
  Ue as TreeRowService,
  ro as TrueFalseCellRenderer,
  Ke as TrueFn,
  be as TwoColorGradientArg,
  Ze as ValueLabel,
  Be as WindowsShortcutActionIdMapping,
  Ot as actionIds,
  Gt as allCenter,
  Wt as allLeft,
  zt as allRight,
  Bt as bodyCenter,
  Ht as bodyLeft,
  Vt as bodyRight,
  ye as debounce,
  uo as editInputPipeForNumber,
  Z as getAreaIdentByString,
  K as isAreaModelTree,
  ve as isCheckboxColumnDef,
  H as isTreeRow,
  Ft as px0,
  _t as px10,
  vt as px100,
  yt as px110,
  Ct as px120,
  xt as px130,
  St as px140,
  wt as px150,
  mt as px160,
  ft as px170,
  bt as px180,
  pt as px190,
  Dt as px20,
  de as px200,
  gt as px210,
  ut as px220,
  ct as px230,
  ht as px240,
  dt as px250,
  at as px260,
  lt as px270,
  nt as px280,
  rt as px290,
  Tt as px30,
  st as px300,
  kt as px40,
  It as px50,
  Mt as px60,
  Et as px70,
  At as px80,
  Rt as px90,
  ot as throttle
};
