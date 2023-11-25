import { TableModelIf } from "./table-model.if";
import { Padding } from "./padding";
import { AreaIdent } from "./area-ident.type";
import { AreaModelIf } from "./areamodel/area-model.if";
import { SideIdent } from "../side-ident.type";
import { DefaultRowHeightsIf } from "../options/default-row-heights.if";
import { DefaultRowHeights } from "../options/default-row-heights";
import { ColumnDefIf } from "./column/column-def.if";
import { FilterFunction } from "../common/filter-function";
import { SortItem } from "../common/sort-item";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { GetT } from "../common/get-t";
import { CheckboxModel } from "../../checkbox/checkbox-model";
import {isCheckboxColumnDef} from "../../instanceof-workaround";


/**
 * This is a default implementation of TableModelIf.
 * Ths TableModel is on one hand a container for the header, body, and footer models
 * (see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
 * the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).
 *
 * If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
 * header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
 * will result in the presence of an east area.
 *
 * <pre>
 *  +----------------+-------------------+--------------+
 *  |  header/west   |  header/center    | header/east  |
 *  +----------------+-------------------+--------------+
 *  |  body/west     |  body/center      | body/east    |
 *  +----------------+-------------------+--------------+
 *  |  footer/west   |  footer/center    | footer/east  |
 *  +----------------+-------------------+--------------+ </pre>
 *
 */
export class TableModel implements TableModelIf {

  protected rowCount = 0;
  protected contentHeightInPx = 0;
  protected contentWidthInPx = 0;

  // in case of a fixed header, left or right column, footer:
  protected padding = new Padding(0, 0, 0, 0); // the dimension of the 'body/center'
  protected xPositions: number[] = [];

  constructor(
    public readonly headerAreaModel: AreaModelIf,
    public readonly bodyAreaModel: AreaModelIf,
    public readonly footerAreaModel: AreaModelIf,
    public readonly fixedLeftColumnCount: number = 0,
    public readonly fixedRightColumnCount: number = 0,
    public readonly rowCheckboxVisible: boolean = false,
    public readonly defaultRowHeights: DefaultRowHeightsIf = new DefaultRowHeights(),
    public columnDefs: ColumnDefIf[] = [],
    public columnSizes: number[] = [],
    protected overridingColumnWidth: number = -1,
    protected columnCount: number = 0,
    protected parentSize: number = 400, // can be important when we have percentage widthes,
    public readonly getSelectionModel: GetT<SelectionModelIf> = () => undefined
  ) {
    headerAreaModel.areaIdent = "header";
    bodyAreaModel.areaIdent = "body";
    footerAreaModel.areaIdent = "footer";
    if (!this.columnCount) {
      if (this.columnDefs?.length) {
        this.columnCount = this.columnDefs.length;
      } else if (this.columnSizes?.length) {
        this.columnCount = this.columnSizes?.length;
      }
    }
    if (this.columnDefs?.length
      && isCheckboxColumnDef(this.columnDefs[0])
      && !bodyAreaModel.rowSelectionModel) {
      bodyAreaModel.rowSelectionModel = new CheckboxModel();
    }
  }

  init() {
    this.recalcSize(this.parentSize);
    if (this.overridingColumnWidth === -1) {
      this.calcXPositions();
    }
    if (this.headerAreaModel) {
      this.headerAreaModel.init();
    }
    if (this.bodyAreaModel) {
      this.bodyAreaModel.init();
    }
    if (this.footerAreaModel) {
      this.footerAreaModel.init();
    }
  }

  getColumnCount(): number {
    return this.columnCount;
  };

  setColumnWidth(columnIndex: number, width: number): void {
    width = Math.max(0, width);
    if (this.overridingColumnWidth !== -1) {
      this.overridingColumnWidth = width;
    }
    if (columnIndex > -1 && columnIndex < this.columnSizes?.length) {
      this.columnSizes[columnIndex] = width;
    }
    this.recalcContentWidthInPx();
  }

  getColumnWidth(columnIndex: number): number {
    const cd = this.getColumnDef(columnIndex);
    if (cd && cd.isVisible && !cd.isVisible()) {
      return 0;
    }
    if (this.overridingColumnWidth !== -1) {
      return this.overridingColumnWidth;
    }
    if (columnIndex > -1 && columnIndex < this.columnSizes?.length) {
      return this.columnSizes[columnIndex];
    }
    return 0;
  };

  getXPosByColumnIndex(columnIndex: number): number {
    if (columnIndex === 0) {
      return 0;
    }
    if (this.overridingColumnWidth > -1) {
      return this.overridingColumnWidth * columnIndex;
    }
    return this.xPositions[columnIndex];
  }

  recalcSize(clientWidth: number) {
    this.recalcColumnWidthes(clientWidth);
    this.recalcHeightAndPadding();
  }

  recalcHeightAndPadding() {
    const bodyModel = this.getAreaModel("body");
    this.rowCount = bodyModel.getRowCount();
    this.contentHeightInPx = this.getAreaHeight("body");
    this.recalcContentWidthInPx();

    this.recalcPadding();
  }

  recalcPadding() {
    const westWidth = this.getSideAreaWidth("west");
    const eastWidth = this.getSideAreaWidth("east");
    const headerHeight = this.getAreaHeight("header");
    const footerHeight = this.getAreaHeight("footer");

    this.padding = new Padding(
      headerHeight,
      eastWidth,
      footerHeight,
      westWidth);
  }

  getPadding(): Padding {
    return this.padding;
  }

  getContentHeightInPixel(): number {
    return this.contentHeightInPx;
  }

  getContentWidthInPixel(): number {
    return this.contentWidthInPx;
  }

  getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number {
    return this.getAreaModel(rowAreaIdent).getRowHeight(rowIndex);
  }

  getModel(rowAreaIdent: AreaIdent): AreaModelIf {
    return this.getAreaModel(rowAreaIdent);
  }

  getAreaHeight(areaIdent: AreaIdent): number {
    const model = this.getModel(areaIdent);
    const rowCount = model.getRowCount();
    if (this.defaultRowHeights[areaIdent]) {
      return rowCount * this.defaultRowHeights[areaIdent];
    }

    let ret = 0;
    for (let i = 0; i < rowCount; i++) {
      ret = ret + model.getRowHeight(i);
    }
    return ret;
  }

  getSideAreaWidth(sideIdent: SideIdent): number {
    const [cStart, cEnd] = this.getSideStartAndEndColumnIndex(sideIdent);
    let ret = 0;
    for (let i = cStart; i <= cEnd; i++) {
      ret = ret + this.getColumnWidth(i);
    }
    return ret;
  }

  getSideStartAndEndColumnIndex(sideIdent: SideIdent): [number, number] {
    const c1 = this.getFixedLeftColumnCount();
    const c2 = this.getFixedRightColumnCount();

    let cStart = 0;
    let cEnd = this.columnCount - 1;
    if (sideIdent === "west") {
      cEnd = c1 - 1;
    } else if (sideIdent === "east") {
      cStart = this.columnCount - c2;
    } else {
      // center:
      cStart = c1;
      cEnd = this.columnCount - c2 - 1;
    }
    return [cStart, cEnd];
  }

  getColumnDef(index: number): ColumnDefIf | undefined {
    if (index < this.columnDefs.length) {
      return this.columnDefs[index];
    }
    return undefined;
  }

  getFixedLeftColumnCount(): number {
    return this.fixedLeftColumnCount;
  }

  getFixedRightColumnCount(): number {
    return this.fixedRightColumnCount;
  }

  getAreaModel(area: AreaIdent): AreaModelIf {
    if (area === "header") {
      return this.headerAreaModel;
    }
    if (area === "body") {
      return this.bodyAreaModel;
    }
    if (area === "footer") {
      return this.footerAreaModel;
    }
    throw new Error("Wrong ident.");
  }

  getBodyModel(): AreaModelIf {
    return this.bodyAreaModel;
  }

  isFooterVisibe(): boolean {
    return (this.footerAreaModel?.getRowCount() ?? 0) > 0;
  }

  isHeaderVisibe(): boolean {
    return (this.headerAreaModel?.getRowCount() ?? 0) > 0;
  }

  isRowCheckboxVisible(): boolean {
    return this.rowCheckboxVisible;
  }

  externalFilterChanged<T>(predictFn: FilterFunction<T>): void {
    this.getAreaModel("body").externalFilterChanged(predictFn);
  }

  doSort(sortItems: SortItem[]): boolean {
    return this.getAreaModel("body").doSort(sortItems);
  }

  getColumnDefs(): ColumnDefIf[] | undefined {
    return this.columnDefs;
  }

  getColumnProperty(columnIndex: number): string {
    return this.columnDefs[columnIndex].property;
  }

  getBodyRowByIndex(rowIndex: number): any {
    return this.getBodyModel().getRowByIndex(rowIndex);
  }

  isSortable(columnIndex: number): boolean {
    if (this.columnDefs
      && columnIndex < this.columnDefs.length
      && this.columnDefs[columnIndex].sortable) {
      // @ts-ignore
      return this.columnDefs[columnIndex].sortable();
    }
    return false;
  }

  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void {
    this.arrayMove(this.columnDefs, sourceColumnIndex, targetColumnIndex);
    this.arrayMove(this.columnSizes, sourceColumnIndex, targetColumnIndex);
    this.headerAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.bodyAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.footerAreaModel?.changeColumnOrder(sourceColumnIndex, targetColumnIndex);
    this.calcXPositions();
  }


  private recalcColumnWidthes(clientWidth: number) {
    if (!this.columnDefs?.length && !this.columnSizes?.length) {
      this.columnSizes = new Array(this.getColumnCount()).fill(this.overridingColumnWidth);
    }
    if (this.columnDefs?.length) {
      this.columnSizes = this.columnDefs.map(def => {
        if (def.width.unit === "%" && clientWidth) {
          // only for a % value we have to check min and max:
          let px = Math.floor(def.width.value * clientWidth / 100);
          if (def.minWidth) {
            let pxMin = def.minWidth.unit === "px" ? def.minWidth.value : Math.floor(def.minWidth.value * clientWidth / 100);
            px = Math.max(pxMin, px);
          }
          if (def.maxWidth) {
            let pxMax = def.maxWidth.unit === "px" ? def.maxWidth.value : Math.floor(def.maxWidth.value * clientWidth / 100);
            px = Math.min(pxMax, px);
          }
          return px;
        }
        return def.width.value;
      });
    }
  }

  private arrayMove(arr: any[], fromIndex: number, toIndex: number) {
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
  }

  private recalcContentWidthInPx() {
    this.contentWidthInPx = this.getSideAreaWidth("center");
  }

  private calcXPositions() {
    const columnCount = this.getColumnCount();
    this.xPositions = new Array(columnCount + 1);
    this.xPositions[0] = 0;
    for (let i = 0; i < columnCount; i++) {
      this.xPositions[i + 1] = this.getColumnWidth(i) + this.xPositions[i];
    }
  }


}


