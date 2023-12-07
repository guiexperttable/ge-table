[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableModel

# Class: TableModel

This is a default implementation of TableModelIf.
Ths TableModel is on one hand a container for the header, body, and footer models
(see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).

If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
will result in the presence of an east area.

<pre>
 +----------------+-------------------+--------------+
 |  header/west   |  header/center    | header/east  |
 +----------------+-------------------+--------------+
 |  body/west     |  body/center      | body/east    |
 +----------------+-------------------+--------------+
 |  footer/west   |  footer/center    | footer/east  |
 +----------------+-------------------+--------------+ </pre>

## Implements

- [`TableModelIf`](../interfaces/TableModelIf.md)

## Table of contents

### Constructors

- [constructor](TableModel.md#constructor)

### Properties

- [bodyAreaModel](TableModel.md#bodyareamodel)
- [columnCount](TableModel.md#columncount)
- [columnDefs](TableModel.md#columndefs)
- [columnSizes](TableModel.md#columnsizes)
- [contentHeightInPx](TableModel.md#contentheightinpx)
- [contentWidthInPx](TableModel.md#contentwidthinpx)
- [defaultRowHeights](TableModel.md#defaultrowheights)
- [fixedLeftColumnCount](TableModel.md#fixedleftcolumncount)
- [fixedRightColumnCount](TableModel.md#fixedrightcolumncount)
- [footerAreaModel](TableModel.md#footerareamodel)
- [getSelectionModel](TableModel.md#getselectionmodel)
- [headerAreaModel](TableModel.md#headerareamodel)
- [overridingColumnWidth](TableModel.md#overridingcolumnwidth)
- [padding](TableModel.md#padding)
- [parentSize](TableModel.md#parentsize)
- [rowCheckboxVisible](TableModel.md#rowcheckboxvisible)
- [rowCount](TableModel.md#rowcount)
- [xPositions](TableModel.md#xpositions)

### Methods

- [arrayMove](TableModel.md#arraymove)
- [calcXPositions](TableModel.md#calcxpositions)
- [changeColumnOrder](TableModel.md#changecolumnorder)
- [doSort](TableModel.md#dosort)
- [externalFilterChanged](TableModel.md#externalfilterchanged)
- [getAreaHeight](TableModel.md#getareaheight)
- [getAreaModel](TableModel.md#getareamodel)
- [getBodyModel](TableModel.md#getbodymodel)
- [getBodyRowByIndex](TableModel.md#getbodyrowbyindex)
- [getColumnCount](TableModel.md#getcolumncount)
- [getColumnDef](TableModel.md#getcolumndef)
- [getColumnDefs](TableModel.md#getcolumndefs)
- [getColumnProperty](TableModel.md#getcolumnproperty)
- [getColumnWidth](TableModel.md#getcolumnwidth)
- [getContentHeightInPixel](TableModel.md#getcontentheightinpixel)
- [getContentWidthInPixel](TableModel.md#getcontentwidthinpixel)
- [getFixedLeftColumnCount](TableModel.md#getfixedleftcolumncount)
- [getFixedRightColumnCount](TableModel.md#getfixedrightcolumncount)
- [getModel](TableModel.md#getmodel)
- [getPadding](TableModel.md#getpadding)
- [getRowHeight](TableModel.md#getrowheight)
- [getSideAreaWidth](TableModel.md#getsideareawidth)
- [getSideStartAndEndColumnIndex](TableModel.md#getsidestartandendcolumnindex)
- [getXPosByColumnIndex](TableModel.md#getxposbycolumnindex)
- [init](TableModel.md#init)
- [isFooterVisibe](TableModel.md#isfootervisibe)
- [isHeaderVisibe](TableModel.md#isheadervisibe)
- [isRowCheckboxVisible](TableModel.md#isrowcheckboxvisible)
- [isSortable](TableModel.md#issortable)
- [recalcColumnWidthes](TableModel.md#recalccolumnwidthes)
- [recalcContentWidthInPx](TableModel.md#recalccontentwidthinpx)
- [recalcHeightAndPadding](TableModel.md#recalcheightandpadding)
- [recalcPadding](TableModel.md#recalcpadding)
- [recalcSize](TableModel.md#recalcsize)
- [setColumnWidth](TableModel.md#setcolumnwidth)

## Constructors

### constructor

• **new TableModel**(`headerAreaModel`, `bodyAreaModel`, `footerAreaModel`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs?`, `columnSizes?`, `overridingColumnWidth?`, `columnCount?`, `parentSize?`, `getSelectionModel?`): [`TableModel`](TableModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `footerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |
| `rowCheckboxVisible` | `boolean` | `false` |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |
| `columnSizes` | `number`[] | `[]` |
| `overridingColumnWidth` | `number` | `-1` |
| `columnCount` | `number` | `0` |
| `parentSize` | `number` | `400` |
| `getSelectionModel` | [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\> | `undefined` |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:47](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L47)

## Properties

### bodyAreaModel

• `Readonly` **bodyAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:49](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L49)

___

### columnCount

• `Protected` **columnCount**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:58](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L58)

___

### columnDefs

• **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:55](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L55)

___

### columnSizes

• **columnSizes**: `number`[] = `[]`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:56](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L56)

___

### contentHeightInPx

• `Protected` **contentHeightInPx**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:40](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L40)

___

### contentWidthInPx

• `Protected` **contentWidthInPx**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:41](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L41)

___

### defaultRowHeights

• `Readonly` **defaultRowHeights**: [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:54](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L54)

___

### fixedLeftColumnCount

• `Readonly` **fixedLeftColumnCount**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:51](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L51)

___

### fixedRightColumnCount

• `Readonly` **fixedRightColumnCount**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:52](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L52)

___

### footerAreaModel

• `Readonly` **footerAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:50](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L50)

___

### getSelectionModel

• `Readonly` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getSelectionModel](../interfaces/TableModelIf.md#getselectionmodel)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:60](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L60)

___

### headerAreaModel

• `Readonly` **headerAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:48](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L48)

___

### overridingColumnWidth

• `Protected` **overridingColumnWidth**: `number` = `-1`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:57](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L57)

___

### padding

• `Protected` **padding**: [`Padding`](Padding.md)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:44](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L44)

___

### parentSize

• `Protected` **parentSize**: `number` = `400`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:59](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L59)

___

### rowCheckboxVisible

• `Readonly` **rowCheckboxVisible**: `boolean` = `false`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:53](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L53)

___

### rowCount

• `Protected` **rowCount**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:39](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L39)

___

### xPositions

• `Protected` **xPositions**: `number`[] = `[]`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:45](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L45)

## Methods

### arrayMove

▸ **arrayMove**(`arr`, `fromIndex`, `toIndex`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |
| `fromIndex` | `number` |
| `toIndex` | `number` |

#### Returns

`any`[]

#### Defined in

[lib/table/data/tablemodel/table-model.ts:519](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L519)

___

### calcXPositions

▸ **calcXPositions**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:529](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L529)

___

### changeColumnOrder

▸ **changeColumnOrder**(`sourceColumnIndex`, `targetColumnIndex`): `void`

Moves a column in the column order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceColumnIndex` | `number` | The index of the column to be moved. |
| `targetColumnIndex` | `number` | The index where the column should be moved to. |

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[changeColumnOrder](../interfaces/TableModelIf.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:485](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L485)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

Sorts the items using the given sortItems array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortItems` | [`SortItem`](SortItem.md)[] | An array of sort items to sort the items. |

#### Returns

`boolean`

- Returns true if the sorting is successful, otherwise false.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[doSort](../interfaces/TableModelIf.md#dosort)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:422](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L422)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`predictFn`): `void`

This method is called when an external filter is changed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> | The function used to predict whether an element should be filtered or not. |

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[externalFilterChanged](../interfaces/TableModelIf.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:412](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L412)

___

### getAreaHeight

▸ **getAreaHeight**(`areaIdent`): `number`

Calculates the height of the area identified by the given area identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier of the area. |

#### Returns

`number`

- The height of the area.

#### Defined in

[lib/table/data/tablemodel/table-model.ts:267](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L267)

___

### getAreaModel

▸ **getAreaModel**(`area`): [`AreaModelIf`](../interfaces/AreaModelIf.md)

Retrieves the area model (header, body or footer) based on the area identification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `area` | [`AreaIdent`](../modules.md#areaident) | The identifier of the area. |

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

The area model corresponding to the given area identification.

**`Throws`**

If the area identification is invalid.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getAreaModel](../interfaces/TableModelIf.md#getareamodel)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:358](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L358)

___

### getBodyModel

▸ **getBodyModel**(): [`AreaModelIf`](../interfaces/AreaModelIf.md)

Returns the body area model.

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

The body area model.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getBodyModel](../interfaces/TableModelIf.md#getbodymodel)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:376](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L376)

___

### getBodyRowByIndex

▸ **getBodyRowByIndex**(`rowIndex`): `any`

Retrieves the row object from the body model at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the row to retrieve. |

#### Returns

`any`

The row object at the specified index.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getBodyRowByIndex](../interfaces/TableModelIf.md#getbodyrowbyindex)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:456](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L456)

___

### getColumnCount

▸ **getColumnCount**(): `number`

Retrieves the count of columns in the current instance.

#### Returns

`number`

The count of columns.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnCount](../interfaces/TableModelIf.md#getcolumncount)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:100](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L100)

___

### getColumnDef

▸ **getColumnDef**(`index`): `undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

Returns the column definition at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the column definition to retrieve. |

#### Returns

`undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

- The column definition at the specified index, or undefined if no ColumnDef is specified for the given column

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnDef](../interfaces/TableModelIf.md#getcolumndef)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:326](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L326)

___

### getColumnDefs

▸ **getColumnDefs**(): `undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

Returns an array of ColumnDefIf objects or undefined.

#### Returns

`undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

An array of ColumnDefIf objects or undefined.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnDefs](../interfaces/TableModelIf.md#getcolumndefs)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:431](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L431)

___

### getColumnProperty

▸ **getColumnProperty**(`columnIndex`): `string`

Retrieves the property key of the table row business object associated with the specified column index.
It's only available when columnDefs are specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column to retrieve the property from. |

#### Returns

`string`

The property associated with the specified column index.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnProperty](../interfaces/TableModelIf.md#getcolumnproperty)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:442](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L442)

___

### getColumnWidth

▸ **getColumnWidth**(`columnIndex`): `number`

Retrieves the width of a column specified by its index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the desired column. |

#### Returns

`number`

- The width of the specified column.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnWidth](../interfaces/TableModelIf.md#getcolumnwidth)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:128](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L128)

___

### getContentHeightInPixel

▸ **getContentHeightInPixel**(): `number`

Returns the height of the content in pixels.

#### Returns

`number`

The height of the content in pixels.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getContentHeightInPixel](../interfaces/TableModelIf.md#getcontentheightinpixel)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:227](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L227)

___

### getContentWidthInPixel

▸ **getContentWidthInPixel**(): `number`

Returns the width of the content in pixels.

#### Returns

`number`

The width of the content in pixels.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getContentWidthInPixel](../interfaces/TableModelIf.md#getcontentwidthinpixel)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:236](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L236)

___

### getFixedLeftColumnCount

▸ **getFixedLeftColumnCount**(): `number`

Retrieves the count of fixed left columns.

#### Returns

`number`

The count of fixed left columns.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getFixedLeftColumnCount](../interfaces/TableModelIf.md#getfixedleftcolumncount)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:338](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L338)

___

### getFixedRightColumnCount

▸ **getFixedRightColumnCount**(): `number`

Returns the number of fixed right columns.

#### Returns

`number`

The number of fixed right columns.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getFixedRightColumnCount](../interfaces/TableModelIf.md#getfixedrightcolumncount)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:347](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L347)

___

### getModel

▸ **getModel**(`rowAreaIdent`): [`AreaModelIf`](../interfaces/AreaModelIf.md)

Retrieves the model for the given row area identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier of the row area. |

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

- The model of the specified row area.

#### Defined in

[lib/table/data/tablemodel/table-model.ts:257](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L257)

___

### getPadding

▸ **getPadding**(): [`Padding`](Padding.md)

Retrieves the padding value.

#### Returns

[`Padding`](Padding.md)

The padding value.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getPadding](../interfaces/TableModelIf.md#getpadding)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:218](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L218)

___

### getRowHeight

▸ **getRowHeight**(`rowAreaIdent`, `rowIndex`): `number`

Returns the height of the specified row in the given row area identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) | The row area identifier. |
| `rowIndex` | `number` | The index of the row. |

#### Returns

`number`

- The height of the specified row.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getRowHeight](../interfaces/TableModelIf.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:247](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L247)

___

### getSideAreaWidth

▸ **getSideAreaWidth**(`sideIdent`): `number`

Returns the total width of the side area identified by sideIdent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | The identifier of the side area ("west" \| "center" \| "east"). |

#### Returns

`number`

- The total width in pixels of the side area.

#### Defined in

[lib/table/data/tablemodel/table-model.ts:287](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L287)

___

### getSideStartAndEndColumnIndex

▸ **getSideStartAndEndColumnIndex**(`sideIdent`): [`number`, `number`]

Retrieves the start and end column indices based on the given side identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | The side identifier, which can be "west", "east", or "center". |

#### Returns

[`number`, `number`]

- An array containing the start and end column indices.

#### Defined in

[lib/table/data/tablemodel/table-model.ts:302](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L302)

___

### getXPosByColumnIndex

▸ **getXPosByColumnIndex**(`columnIndex`): `number`

Retrieves the x position for a given column index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column. |

#### Returns

`number`

- The x position of the column.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getXPosByColumnIndex](../interfaces/TableModelIf.md#getxposbycolumnindex)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:148](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L148)

___

### init

▸ **init**(): `void`

Triggered by TableScope.firstInit() after the table tag is attached to the dom.

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[init](../interfaces/TableModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:79](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L79)

___

### isFooterVisibe

▸ **isFooterVisibe**(): `boolean`

Checks if the footer is visible.

#### Returns

`boolean`

True if the footer is visible, false otherwise.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isFooterVisibe](../interfaces/TableModelIf.md#isfootervisibe)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:385](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L385)

___

### isHeaderVisibe

▸ **isHeaderVisibe**(): `boolean`

Checks if the header area is visible.

#### Returns

`boolean`

Returns true if the header area is visible, otherwise false.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isHeaderVisibe](../interfaces/TableModelIf.md#isheadervisibe)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:393](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L393)

___

### isRowCheckboxVisible

▸ **isRowCheckboxVisible**(): `boolean`

Checks whether the row checkbox is visible.

#### Returns

`boolean`

True if the row checkbox is visible, otherwise false.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isRowCheckboxVisible](../interfaces/TableModelIf.md#isrowcheckboxvisible)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:402](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L402)

___

### isSortable

▸ **isSortable**(`columnIndex`): `boolean`

Checks if a column at the given index is sortable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column to check. |

#### Returns

`boolean`

- `true` if the column is sortable, `false` otherwise.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isSortable](../interfaces/TableModelIf.md#issortable)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:467](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L467)

___

### recalcColumnWidthes

▸ **recalcColumnWidthes**(`clientWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientWidth` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:495](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L495)

___

### recalcContentWidthInPx

▸ **recalcContentWidthInPx**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.ts:525](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L525)

___

### recalcHeightAndPadding

▸ **recalcHeightAndPadding**(): `void`

Recalculates the height and padding for the body area.

This method retrieves the area model for the "body" area,
and updates the rowCount property with the row count of the model.

The contentHeightInPx property is then updated with the height of the "body" area.

The method calls the recalcContentWidthInPx() method to recalculate the content width.

Finally, the method calls the recalcPadding() method to recalculate the padding.

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcHeightAndPadding](../interfaces/TableModelIf.md#recalcheightandpadding)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:184](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L184)

___

### recalcPadding

▸ **recalcPadding**(): `void`

Recalculates the padding of an element based on the width and height of its surrounding areas.

#### Returns

`void`

**`Method`**

recalcPadding

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcPadding](../interfaces/TableModelIf.md#recalcpadding)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:200](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L200)

___

### recalcSize

▸ **recalcSize**(`clientWidth`): `void`

Recalculates the size (width, height, padding)  of the elements based on the client width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientWidth` | `number` | The width of the client area. |

#### Returns

`void`

- This method does not return a value.

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcSize](../interfaces/TableModelIf.md#recalcsize)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:165](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L165)

___

### setColumnWidth

▸ **setColumnWidth**(`columnIndex`, `width`): `void`

Sets the width in pixel of a column (by columnIndex) in a table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column. |
| `width` | `number` | The desired width of the column. |

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[setColumnWidth](../interfaces/TableModelIf.md#setcolumnwidth)

#### Defined in

[lib/table/data/tablemodel/table-model.ts:111](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.ts#L111)
