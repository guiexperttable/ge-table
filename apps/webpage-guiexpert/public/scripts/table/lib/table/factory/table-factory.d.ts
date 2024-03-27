import { AreaModelIf } from "../data/tablemodel/areamodel/area-model.if";
import { DefaultRowHeightsIf } from "../data/options/default-row-heights.if";
import { ColumnDefIf } from "../data/tablemodel/column/column-def.if";
import { GetT } from "../data/common/get-t";
import { TableOptionsIf } from "../data/options/table-options.if";
import { TableModelIf } from "../data/tablemodel/table-model.if";
import { TableModel } from "../data/tablemodel/table-model";
import { SelectionModelIf } from "../selection/selection-model.if";
export declare class TableFactory {
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
    static createTableModel(p: Partial<{
        headerAreaModel: AreaModelIf;
        bodyAreaModel: AreaModelIf;
        footerAreaModel: AreaModelIf;
        fixedLeftColumnCount: number;
        fixedRightColumnCount: number;
        rowCheckboxVisible: boolean;
        defaultRowHeights: DefaultRowHeightsIf;
        columnDefs: ColumnDefIf[];
        columnSizes: number[];
        overridingColumnWidth: number;
        columnCount: number;
        parentSize: number;
        getSelectionModel: GetT<SelectionModelIf>;
        rows: any[];
        properties: string[];
        bodyData: any[][];
        headerData: string[][];
        footerData: string[][];
        tableOptions: TableOptionsIf;
    }>): TableModelIf;
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
    static buildByTypedRowsParam<T>(param: {
        rows: T[];
        columnDefs: ColumnDefIf[];
        tableOptions?: TableOptionsIf;
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
    }): TableModelIf;
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
    static buildByTypedRows<T>(rows: T[], columnDefs: ColumnDefIf[], tableOptions?: TableOptionsIf, fixedLeftColumnCount?: number, fixedRightColumnCount?: number): TableModelIf;
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
    static createByObjectArrayParam<T>(param: {
        rows: T[];
        header?: string[][];
        footer?: string[][];
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
        rowCheckboxVisible?: boolean;
        defaultRowHeights?: DefaultRowHeightsIf;
        columnDefs?: ColumnDefIf[];
        columnSizes?: number[];
    }): TableModel;
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
    static createByAreaModels(headerAreaModel: AreaModelIf | undefined, bodyAreaModel: AreaModelIf, footerAreaModel: AreaModelIf | undefined, fixedLeftColumnCount: number | undefined, fixedRightColumnCount: number | undefined, rowCheckboxVisible: boolean | undefined, defaultRowHeights: DefaultRowHeightsIf | undefined, columnDefs: ColumnDefIf[], columnSizes: number[] | undefined, overridingColumnWidth: number | undefined, columnCount: number): TableModel;
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
    static createByAreaModelsParam(param: {
        headerAreaModel?: AreaModelIf;
        bodyAreaModel: AreaModelIf;
        footerAreaModel?: AreaModelIf;
        fixedLeftColumnCount?: number;
        fixedRightColumnCount?: number;
        rowCheckboxVisible?: boolean;
        defaultRowHeights?: DefaultRowHeightsIf;
        columnDefs?: ColumnDefIf[];
        columnSizes?: number[];
        overridingColumnWidth?: number;
        columnCount?: number;
    }): TableModel;
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
    static createByObjectArray<T>(rows: T[], header: string[][] | undefined, footer: string[][] | undefined, fixedLeftColumnCount: number | undefined, fixedRightColumnCount: number | undefined, rowCheckboxVisible: boolean | undefined, defaultRowHeights: DefaultRowHeightsIf | undefined, columnDefs: ColumnDefIf[], columnSizes?: number[]): TableModel;
}
