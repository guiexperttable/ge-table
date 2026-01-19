[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableFactory

# Class: TableFactory

## Table of contents

### Constructors

- [constructor](TableFactory.md#constructor)

### Methods

- [buildByTypedRows](TableFactory.md#buildbytypedrows)
- [buildByTypedRowsParam](TableFactory.md#buildbytypedrowsparam)
- [createByAreaModels](TableFactory.md#createbyareamodels)
- [createByAreaModelsParam](TableFactory.md#createbyareamodelsparam)
- [createByObjectArray](TableFactory.md#createbyobjectarray)
- [createByObjectArrayParam](TableFactory.md#createbyobjectarrayparam)
- [createTableModel](TableFactory.md#createtablemodel)

## Constructors

### constructor

• **new TableFactory**(): [`TableFactory`](TableFactory.md)

#### Returns

[`TableFactory`](TableFactory.md)

## Methods

### buildByTypedRows

▸ **buildByTypedRows**\<`T`\>(`rows`, `columnDefs`, `tableOptions?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`): [`TableModelIf`](../interfaces/TableModelIf.md)

Static method that helps to build a table model object. It takes in tabular data and options and constructs a suitable
model for rendering as a table. This method is capable of handling both 'Flat' and 'Tree' data structures.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rows` | `T`[] | `undefined` | An array of the data rows. The type of these rows could be anything which is defined by the generic type parameter T. |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` | An array of objects that define the columns of the table. Each object represents one column. |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | `undefined` | A configuration object that allows you to customize how the table is displayed and behaves. This is optional, and if not provided it defaults to a new instance of TableOptions. |
| `fixedLeftColumnCount` | `number` | `0` | Optional parameter that specifies the number of columns that should remain fixed from the left side of the table while scrolling horizontally. It defaults to 0 if not provided. |
| `fixedRightColumnCount` | `number` | `0` | Optional parameter that specifies the number of columns that should remain fixed from the right side of the table while scrolling horizontally. It defaults to 0 if not provided. |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

A TableModelIf object which can be used to render the table. The TableModelIf defines the structure of the table and
contains all its data and state.

**`Typeparam`**

T - The type of the data in the rows.

**`Usage Notes`**

Here is an example of using this static method to build a table model:

```typescript
const tableModel = TableFactory.buildByTypedRows<User>(users, [{ property: 'name', headerLabel: 'Name' }, { property: 'email', headerLabel: 'Email' }]);
```

This will build a table with two columns 'Name' and 'Email', each row representing a 'User' object from the 'users' array.

**Warning:** This function assumes that the first columnDef provided represents a checkbox column if the property of the first
columnDef is "CheckboxColumn". If the first column is not a checkbox column, ensure that the first columnDef does not have "CheckboxColumn"
as its property.

#### Defined in

[lib/table/factory/table-factory.ts:309](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L309)

___

### buildByTypedRowsParam

▸ **buildByTypedRowsParam**\<`T`\>(`param`): [`TableModelIf`](../interfaces/TableModelIf.md)

Constructs a table model (an instance of `TableModelIf`) by using provided parameters.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The generic parameter that represents the datatype of rows. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `Object` | The parameter object. |
| `param.columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | The definition of columns that are to be used in the table model. |
| `param.fixedLeftColumnCount?` | `number` | Optional parameter that specifies the count of fixed (non-scrollable) columns from the left. Defaults to `0`. |
| `param.fixedRightColumnCount?` | `number` | Optional parameter that specifies the count of fixed (non-scrollable) columns from the right. Defaults to `0`. |
| `param.rows` | `T`[] | The rows data to be used in the table model. |
| `param.tableOptions?` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | Optional table options that may override default table settings. Defaults to `new TableOptions()`. |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

The newly constructed table model.

**`Static`**

**`Method`**

#### Defined in

[lib/table/factory/table-factory.ts:255](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L255)

___

### createByAreaModels

▸ **createByAreaModels**(`headerAreaModel?`, `bodyAreaModel`, `footerAreaModel?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs`, `columnSizes?`, `overridingColumnWidth?`, `columnCount`): [`TableModel`](TableModel.md)

This public static factory method creates a `TableModel` instance using the provided parameters.
Each parameter has a default value allowing for great flexibility in creating table models.
The main parameters are the AreaModel instances for different table sections:

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `headerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` | This parameter of type `AreaModelIf` represents the header area of the table. The default value is a new instance of `AreaModelHidden`, indicating an invisible header. |
| `bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` | This parameter of type `AreaModelIf` represents the body area of the table and is required. It needs to be passed as it contains all the row data that will be displayed in the table. |
| `footerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` | This `AreaModelIf` type parameter represents the footer area of the table. Similar to `headerAreaModel`, the default value is a new instance of `AreaModelHidden`, indicating an invisible footer. Also, the method receives parameters for fixed columns, row checkbox visibility, default row heights, column definitions, column sizes, overriding column width, and column count: |
| `fixedLeftColumnCount` | `number` | `0` | This value indicates the number of fixed columns on the left side of the table. The default value is `0`, no fixed column by default. |
| `fixedRightColumnCount` | `number` | `0` | This value indicates the number of fixed columns on the right side of the table. Similarly to `fixedLeftColumnCount`, its default value is `0`. |
| `rowCheckboxVisible` | `boolean` | `false` | This is a boolean that determines whether a checkbox will be visible for each row. The default value is `false`, indicating that checkboxes will not be displayed unless otherwise specified. |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` | This object of type `DefaultRowHeightsIf` allows setting of the default row heights for the table sections. By default, it creates a new `DefaultRowHeights` instance with values of `34` for header, body and footer. |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` | Here, an array of `ColumnDefIf[]` needs to be passed to specify the column definitions. |
| `columnSizes` | `number`[] | `[]` | This is an array of `number[]` providing custom column sizes. If not defined, an empty array `[]` is used. |
| `overridingColumnWidth` | `number` | `-1` | This number sets a uniform width for all columns, overriding individual column sizes. Default value is `-1`, indicating that this feature is disabled by default. |
| `columnCount` | `number` | `undefined` | This is the total column count. |

#### Returns

[`TableModel`](TableModel.md)

A new instance of `TableModel` is created using the provided parameters.
If a parameter isn't provided, the default value is used.

#### Defined in

[lib/table/factory/table-factory.ts:472](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L472)

___

### createByAreaModelsParam

▸ **createByAreaModelsParam**(`param`): [`TableModel`](TableModel.md)

`TableFactory.createByAreaModelsParam` is a static method in the `TableFactory` class that creates a table model by area models and other optional parameters.
This method allows more flexibility and control over table building by providing the option to decide the visibility and nature of the header, body, footer, columns, and rows in the table.

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.columnCount?` | `number` |
| `param.columnDefs?` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] |
| `param.columnSizes?` | `number`[] |
| `param.defaultRowHeights?` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) |
| `param.fixedLeftColumnCount?` | `number` |
| `param.fixedRightColumnCount?` | `number` |
| `param.footerAreaModel?` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.headerAreaModel?` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.overridingColumnWidth?` | `number` |
| `param.rowCheckboxVisible?` | `boolean` |

#### Returns

[`TableModel`](TableModel.md)

a new instance of `TableModelIf` created by the `createByAreaModels` method of `TableFactory` using the provided parameters.

Note: The area models (`headerAreaModel`, `bodyAreaModel`, `footerAreaModel`) should be initialized before being passed to this method. If not initialized, they might need to call their `init` method to ensure proper functioning.

**`Example`**

```ts
const tableModel = TableFactory.createByAreaModelsParam({
   headerAreaModel: myHeaderModel,
   bodyAreaModel: myBodyModel,
   footerAreaModel: myFooterModel,
   fixedLeftColumnCount: 2,
   fixedRightColumnCount: 1,
   rowCheckboxVisible: true,
   defaultRowHeights: myDefaultHeights,
   columnDefs: myColumnDefs,
   columnSizes: [100, 100, 200],
   overridingColumnWidth: 150,
   columnCount: 3
});
```

#### Defined in

[lib/table/factory/table-factory.ts:537](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L537)

___

### createByObjectArray

▸ **createByObjectArray**\<`T`\>(`rows`, `header?`, `footer?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs`, `columnSizes?`): [`TableModel`](TableModel.md)

Class method `createByObjectArray` of the `TableFactory` class.

This public, static method is intended to create a table model by an array of objects.
This method is particularly useful when you are aiming to build a table from a set of data rows, header and footer information.
The table can include both fixed and flexible columns and optional checkboxes for each row.
The table layout can further be customized using the default row heights, column definitions, and column sizes parameters.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rows` | `T`[] | `undefined` |
| `header` | `string`[][] | `[]` |
| `footer` | `string`[][] | `[]` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |
| `rowCheckboxVisible` | `boolean` | `false` |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` |
| `columnSizes` | `number`[] | `[]` |

#### Returns

[`TableModel`](TableModel.md)

It returns an instance of `TableModel` with all the provided/processed parameters.

Note: You need to import the `AreaModelArrayOfArrays` and `AreaModelHidden` classes from the respective package/module before using this method.

**`Generic`**

`T` - The generic type parameter for data rows.

**`Example`**

```typescript
// Given the following array of objects:
const rows = [{field1: 'data11', field2: 'data12'}, {field1: 'data21', field2: 'data22'}];

// And a set of column definitions:
const columnDefs: ColumnDefIf[] = [{headerLabel: 'Field 1', property: 'field1'}, {headerLabel: 'Field 2', property: 'field2'}];

// You can create a TableModel like following:
let tableModel = TableFactory.createByObjectArray(rows, undefined, undefined, 0, 0, false, new DefaultRowHeights(), columnDefs);
```

Reference: For more details regarding the `DefaultRowHeightsIf`, `ColumnDefIf`, `AreaModelIf`, and `AreaModelArrayOfArrays` classes/interfaces, please refer to the respective API documents.

#### Defined in

[lib/table/factory/table-factory.ts:614](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L614)

___

### createByObjectArrayParam

▸ **createByObjectArrayParam**\<`T`\>(`param`): [`TableModel`](TableModel.md)

The `createByObjectArrayParam` static method is used to create a `TableFactory` object with the data contained in the `param` object.
This method would call the `createByObjectArray` static method, which actually constructs the `TableModel` object with the provided data.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Defines the type of the items contained in the rows. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `Object` | Method parameter as an object that carries several properties described below: |
| `param.columnDefs?` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | Optional array of column definitions, each is an object conforming to `ColumnDefIf` interface. |
| `param.columnSizes?` | `number`[] | Optional array of numbers providing the specific sizes for columns. |
| `param.defaultRowHeights?` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | Optional object defining default heights of rows in different sections of the table. Defaults to new `DefaultRowHeights()`. |
| `param.fixedLeftColumnCount?` | `number` | Optional number detailing how many of the beginning columns are sticky to the left. |
| `param.fixedRightColumnCount?` | `number` | Optional number detailing how many of the ending columns are sticky to the right. |
| `param.footer?` | `string`[][] | Optional array of arrays with the table footer data. |
| `param.header?` | `string`[][] | Optional array of arrays with the table header data. |
| `param.rowCheckboxVisible?` | `boolean` | Optional flag that indicates whether checkboxes are visible in the rows. |
| `param.rows` | `T`[] | Array of table row data that can be of any type. |

#### Returns

[`TableModel`](TableModel.md)

A `TableFactory` object created by the `createByObjectArray` method.

**`Example`**

```ts
let param = {
  rows: [{name: 'John', age: 30}, {name: 'Doe', age: 40}],
  header: [['Name', 'Age']],
  footer: [['Avg', '35']],
  fixedLeftColumnCount: 1,
  fixedRightColumnCount: 0,
  rowCheckboxVisible: true,
  defaultRowHeights: new DefaultRowHeights(40, 50, 40),
  columnDefs: [
    {
      property: 'name',
      headerLabel: 'Name',
      width: 100
    },
    {
      property: 'age',
      headerLabel: 'Age',
      width: 50
    }
  ],
  columnSizes: [100, 50]
};
const tableModel = TableFactory.createByObjectArrayParam(param);
```

#### Defined in

[lib/table/factory/table-factory.ts:405](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L405)

___

### createTableModel

▸ **createTableModel**(`p`): [`TableModelIf`](../interfaces/TableModelIf.md)

TableFactory

This class is responsible for creating table models based on various
parameters and configurations. TableFactory provides different methods
to create these models that must comply with TableModelIf interface.

Methods:

createTableModel(p: Partial<{...}>): TableModelIf
Receives a set of parameters as a Partial object with a number of properties
and returns an instance of an object that complies to TableModelIf interface.
Refer to the method's documentation for details.

buildByTypedRowsParam(param: {rows: T[]; columnDefs: ColumnDefIf[]; tableOptions?: TableOptionsIf; fixedLeftColumnCount?: number; fixedRightColumnCount?: number}): TableModelIf
Receives a parameter object with essential properties needed to build the table model,
including rows (type T array), column definitions (ColumnDefIf array),
optional table options (TableOptionsIf object), and optional fixed column counts,
and returns an instance of TableModelIf.

buildByTypedRows(rows: T[], columnDefs: ColumnDefIf[], tableOptions?: TableOptionsIf, fixedLeftColumnCount?: number, fixedRightColumnCount?: number): TableModelIf
Similar to `buildByTypedRowsParam` but accepts separate parameters instead of a single parameter object.

createByObjectArrayParam(param: {rows: T[]; header?: string[][]; footer?: string[][]; fixedLeftColumnCount?: number; fixedRightColumnCount?: number; rowCheckboxVisible?: boolean; defaultRowHeights?: DefaultRowHeightsIf; columnDefs?: ColumnDefIf[]; columnSizes?: number[]}): TableModelIf
Similar to `createTableModel` but accepts an object parameter with properties required to create a table, including row data, header and footer multi-line data, fixed column counts, visibility of row checkbox, default row heights, column definitions, and column sizes, and returns a TableModelIf instance.

createByAreaModels(headerAreaModel: AreaModelIf, bodyAreaModel: AreaModelIf, footerAreaModel: AreaModelIf, fixedLeftColumnCount: number, fixedRightColumnCount: number, rowCheckboxVisible: boolean, defaultRowHeights: DefaultRowHeightsIf): TableModelIf
Accepts area models for header, body, and footer, along with fixed column counts, visibility of row checkbox, and default row heights, to create a table model.

createByAreaModelsParam(param: {headerAreaModel?: AreaModelIf; bodyAreaModel: AreaModelIf; footerAreaModel?: AreaModelIf; fixedLeftColumnCount?: number; fixedRightColumnCount?: number; rowCheckboxVisible?: boolean; defaultRowHeights?: DefaultRowHeightsIf; columnDefs?: ColumnDefIf[]; columnSizes?: number[]; overridingColumnWidth?: number; columnCount?: number}): TableModelIf
Similar to `createByAreaModels` but accepts an object parameter with the required and optional properties to create the table model.

createByObjectArray(rows: T[], header: string[][], footer: string[][], fixedLeftColumnCount: number, fixedRightColumnCount: number, rowCheckboxVisible: boolean, defaultRowHeights: DefaultRowHeightsIf): TableModelIf
Allows to create a table model utilizing object array data for rows, header, and footer along with the specified configurations.
Please consult each method's documentation for detailed explanation of their functionality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Partial`\<[`CreateTableModelPara`](../modules.md#createtablemodelpara)\> |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/factory/table-factory.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/factory/table-factory.ts#L85)
