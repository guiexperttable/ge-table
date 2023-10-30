import { Padding } from "./padding";
import { AreaIdent } from "./area-ident.type";
import { ColumnDefIf } from "./column/column-def.if";
import { AreaModelIf } from "./areamodel/area-model.if";
import { FilterFunction } from "../common/filter-function";
import { SortItem } from "../common/sort-item";
import { SelectionModelIf } from "../../selection/selection-model.if";

/**
 * The TableModelIf is on one hand a container for the header, body, and footer models
 * (see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
 * the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).
 *
 * If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
 * header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
 * will result in the presence of an east area.
 * <pre>
 *  +----------------+-------------------+--------------+
 *  |  header/west   |  header/center    | header/east  |
 *  +----------------+-------------------+--------------+
 *  |  body/west     |  body/center      | body/east    |
 *  +----------------+-------------------+--------------+
 *  |  footer/west   |  footer/center    | footer/east  |
 *  +----------------+-------------------+--------------+</pre>
 *
 */
export interface TableModelIf {

  changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;

  isSortable(colIdx: number): boolean;

  init(): void;

  getColumnCount(): number;

  getColumnWidth(columnIndex: number): number;

  getXPosByColumnIndex(columnIndex: number): number;

  getAreaModel(rowAreaIdent: AreaIdent): AreaModelIf;

  getBodyModel(): AreaModelIf;

  getFixedLeftColumnCount(): number;

  getFixedRightColumnCount(): number;

  isHeaderVisibe(): boolean;

  isFooterVisibe(): boolean;

  isRowCheckboxVisible(): boolean;

  getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number;

  getColumnDef(index: number): ColumnDefIf | undefined;

  getColumnDefs(): ColumnDefIf[] | undefined;

  getColumnProperty(columnIndex: number): string;

  getBodyRowByIndex(rowIndex: number): any;

  getColumnWidth(columnIndex: number): number;

  setColumnWidth(columnIndex: number, width: number): void;


  // ----------------------------------
  recalcSize(clientWidth: number): void;

  recalcPadding(): void;

  recalcHeightAndPadding(): void;

  getPadding(): Padding;

  getContentHeightInPixel(): number;

  getContentWidthInPixel(): number;


  // ----------------------------------
  externalFilterChanged<T>(predictFn: FilterFunction<T>): void;

  doSort(sortItems: SortItem[]): boolean;

  getSelectionModel(): SelectionModelIf|undefined;
}
