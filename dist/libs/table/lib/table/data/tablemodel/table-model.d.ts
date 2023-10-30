import { TableModelIf } from "./table-model.if";
import { Padding } from "./padding";
import { AreaIdent } from "./area-ident.type";
import { AreaModelIf } from "./areamodel/area-model.if";
import { SideIdent } from "../side-ident.type";
import { DefaultRowHeightsIf } from "../options/default-row-heights.if";
import { ColumnDefIf } from "./column/column-def.if";
import { FilterFunction } from "../common/filter-function";
import { SortItem } from "../common/sort-item";
import { SelectionModelIf } from "../../selection/selection-model.if";
import { GetT } from "../common/get-t";
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
export declare class TableModel implements TableModelIf {
    readonly headerAreaModel: AreaModelIf;
    readonly bodyAreaModel: AreaModelIf;
    readonly footerAreaModel: AreaModelIf;
    readonly fixedLeftColumnCount: number;
    readonly fixedRightColumnCount: number;
    readonly rowCheckboxVisible: boolean;
    readonly defaultRowHeights: DefaultRowHeightsIf;
    columnDefs: ColumnDefIf[];
    columnSizes: number[];
    protected overridingColumnWidth: number;
    protected columnCount: number;
    protected parentSize: number;
    readonly getSelectionModel: GetT<SelectionModelIf>;
    protected rowCount: number;
    protected contentHeightInPx: number;
    protected contentWidthInPx: number;
    protected padding: Padding;
    protected xPositions: number[];
    constructor(headerAreaModel: AreaModelIf, bodyAreaModel: AreaModelIf, footerAreaModel: AreaModelIf, fixedLeftColumnCount?: number, fixedRightColumnCount?: number, rowCheckboxVisible?: boolean, defaultRowHeights?: DefaultRowHeightsIf, columnDefs?: ColumnDefIf[], columnSizes?: number[], overridingColumnWidth?: number, columnCount?: number, parentSize?: number, // can be important when we have percentage widthes,
    getSelectionModel?: GetT<SelectionModelIf>);
    init(): void;
    getColumnCount(): number;
    setColumnWidth(columnIndex: number, width: number): void;
    getColumnWidth(columnIndex: number): number;
    getXPosByColumnIndex(columnIndex: number): number;
    recalcSize(clientWidth: number): void;
    recalcHeightAndPadding(): void;
    recalcPadding(): void;
    getPadding(): Padding;
    getContentHeightInPixel(): number;
    getContentWidthInPixel(): number;
    getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number;
    getModel(rowAreaIdent: AreaIdent): AreaModelIf;
    getAreaHeight(areaIdent: AreaIdent): number;
    getSideAreaWidth(sideIdent: SideIdent): number;
    getSideStartAndEndColumnIndex(sideIdent: SideIdent): [number, number];
    getColumnDef(index: number): ColumnDefIf | undefined;
    getFixedLeftColumnCount(): number;
    getFixedRightColumnCount(): number;
    getAreaModel(area: AreaIdent): AreaModelIf;
    getBodyModel(): AreaModelIf;
    isFooterVisibe(): boolean;
    isHeaderVisibe(): boolean;
    isRowCheckboxVisible(): boolean;
    externalFilterChanged<T>(predictFn: FilterFunction<T>): void;
    doSort(sortItems: SortItem[]): boolean;
    getColumnDefs(): ColumnDefIf[] | undefined;
    getColumnProperty(columnIndex: number): string;
    getBodyRowByIndex(rowIndex: number): any;
    isSortable(columnIndex: number): boolean;
    changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;
    private recalcColumnWidthes;
    private arrayMove;
    private recalcContentWidthInPx;
    private calcXPositions;
}
