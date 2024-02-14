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
    /**
     * Retrieves the count of columns in the current instance.
     *
     * @return {number} The count of columns.
     */
    getColumnCount(): number;
    /**
     * Sets the width in pixel of a column (by columnIndex) in a table.
     *
     * @param {number} columnIndex - The index of the column.
     * @param {number} width - The desired width of the column.
     * @return {void}
     */
    setColumnWidth(columnIndex: number, width: number): void;
    /**
     * Retrieves the width of a column specified by its index.
     *
     * @param {number} columnIndex - The index of the desired column.
     * @return {number} - The width of the specified column.
     */
    getColumnWidth(columnIndex: number): number;
    /**
     * Retrieves the x position for a given column index.
     *
     * @param {number} columnIndex - The index of the column.
     * @return {number} - The x position of the column.
     */
    getXPosByColumnIndex(columnIndex: number): number;
    /**
     * Recalculates the size (width, height, padding)  of the elements based on the client width.
     *
     * @param {number} clientWidth - The width of the client area.
     *
     * @return {void} - This method does not return a value.
     */
    recalcSize(clientWidth: number): void;
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
    recalcHeightAndPadding(): void;
    /**
     * Recalculates the padding of an element based on the width and height of its surrounding areas.
     *
     * @method recalcPadding
     *
     * @returns {void}
     */
    recalcPadding(): void;
    /**
     * Retrieves the padding value.
     *
     * @returns {Padding} The padding value.
     */
    getPadding(): Padding;
    /**
     * Returns the height of the content in pixels.
     *
     * @returns {number} The height of the content in pixels.
     */
    getContentHeightInPixel(): number;
    /**
     * Returns the width of the content in pixels.
     *
     * @returns {number} The width of the content in pixels.
     */
    getContentWidthInPixel(): number;
    /**
     * Returns the height of the specified row in the given row area identifier.
     *
     * @param {AreaIdent} rowAreaIdent - The row area identifier.
     * @param {number} rowIndex - The index of the row.
     * @return {number} - The height of the specified row.
     */
    getRowHeight(rowAreaIdent: AreaIdent, rowIndex: number): number;
    /**
     * Retrieves the model for the given row area identifier.
     *
     * @param {AreaIdent} rowAreaIdent - The identifier of the row area.
     * @return {AreaModelIf} - The model of the specified row area.
     */
    getModel(rowAreaIdent: AreaIdent): AreaModelIf;
    /**
     * Calculates the height of the area identified by the given area identifier.
     *
     * @param {AreaIdent} areaIdent - The identifier of the area.
     * @return {number} - The height of the area.
     */
    getAreaHeight(areaIdent: AreaIdent): number;
    /**
     * Returns the total width of the side area identified by sideIdent.
     *
     * @param {SideIdent} sideIdent - The identifier of the side area ("west" | "center" | "east").
     * @return {number} - The total width in pixels of the side area.
     */
    getSideAreaWidth(sideIdent: SideIdent): number;
    /**
     * Retrieves the start and end column indices based on the given side identifier.
     *
     * @param {SideIdent} sideIdent - The side identifier, which can be "west", "east", or "center".
     * @return {[number, number]} - An array containing the start and end column indices.
     */
    getSideStartAndEndColumnIndex(sideIdent: SideIdent): [number, number];
    /**
     * Returns the column definition at the specified index.
     *
     * @param {number} index - The index of the column definition to retrieve.
     * @returns {ColumnDefIf | undefined} - The column definition at the specified index, or undefined if no ColumnDef is specified for the given column
     */
    getColumnDef(index: number): ColumnDefIf | undefined;
    /**
     * Retrieves the count of fixed left columns.
     *
     * @returns {number} The count of fixed left columns.
     */
    getFixedLeftColumnCount(): number;
    /**
     * Returns the number of fixed right columns.
     *
     * @returns {number} The number of fixed right columns.
     */
    getFixedRightColumnCount(): number;
    /**
     * Retrieves the area model (header, body or footer) based on the area identification.
     *
     * @param {AreaIdent} area - The identifier of the area.
     * @return {AreaModelIf} The area model corresponding to the given area identification.
     * @throws {Error} If the area identification is invalid.
     */
    getAreaModel(area: AreaIdent): AreaModelIf;
    /**
     * Returns the body area model.
     *
     * @returns {AreaModelIf} The body area model.
     */
    getBodyModel(): AreaModelIf;
    /**
     * Checks if the footer is visible.
     *
     * @returns {boolean} True if the footer is visible, false otherwise.
     */
    isFooterVisibe(): boolean;
    /**
     * Checks if the header area is visible.
     * @return {boolean} Returns true if the header area is visible, otherwise false.
     */
    isHeaderVisibe(): boolean;
    /**
     * Checks whether the row checkbox is visible.
     *
     * @returns {boolean} True if the row checkbox is visible, otherwise false.
     */
    isRowCheckboxVisible(): boolean;
    /**
     * This method is called when an external filter is changed.
     *
     * @param {FilterFunction<T>} predictFn - The function used to predict whether an element should be filtered or not.
     * @return {void}
     */
    externalFilterChanged<T>(predictFn: FilterFunction<T>): void;
    /**
     * Sorts the items using the given sortItems array.
     *
     * @param {SortItem[]} sortItems - An array of sort items to sort the items.
     * @return {boolean} - Returns true if the sorting is successful, otherwise false.
     */
    doSort(sortItems: SortItem[]): boolean;
    /**
     * Returns an array of ColumnDefIf objects or undefined.
     *
     * @return {ColumnDefIf[] | undefined} An array of ColumnDefIf objects or undefined.
     */
    getColumnDefs(): ColumnDefIf[] | undefined;
    /**
     * Retrieves the property key of the table row business object associated with the specified column index.
     * It's only available when columnDefs are specified.
     *
     * @param {number} columnIndex - The index of the column to retrieve the property from.
     * @return {string} The property associated with the specified column index.
     */
    getColumnProperty(columnIndex: number): string;
    /**
     * Retrieves the row object from the body model at the specified index.
     *
     * @param {number} rowIndex - The index of the row to retrieve.
     *
     * @return {any} The row object at the specified index.
     */
    getBodyRowByIndex(rowIndex: number): any;
    /**
     * Checks if a column at the given index is sortable.
     *
     * @param {number} columnIndex - The index of the column to check.
     *
     * @returns {boolean} - `true` if the column is sortable, `false` otherwise.
     */
    isSortable(columnIndex: number): boolean;
    /**
     * Moves a column in the column order.
     *
     * @param {number} sourceColumnIndex - The index of the column to be moved.
     * @param {number} targetColumnIndex - The index where the column should be moved to.
     *
     * @returns {void}
     */
    changeColumnOrder(sourceColumnIndex: number, targetColumnIndex: number): void;
    private recalcColumnWidthes;
    private arrayMove;
    private recalcContentWidthInPx;
    private calcXPositions;
}
