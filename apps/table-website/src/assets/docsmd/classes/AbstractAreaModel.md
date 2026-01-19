[@guiexpert/table](../README.md) / [Exports](../modules.md) / AbstractAreaModel

# Class: AbstractAreaModel\<T\>

This is the model interface for an area model. A table can have three of these models, one for the header,
one for the body , and one for the footer.
An AreaModelIf gives you information about the rows and cell contents.
The column information is given by the TableModelIf.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`AbstractAreaModel`**

  ↳ [`AreaModelArrayOfArrays`](AreaModelArrayOfArrays.md)

  ↳ [`AreaModelObjectArray`](AreaModelObjectArray.md)

  ↳ [`AreaModelTree`](AreaModelTree.md)

## Implements

- [`AreaModelIf`](../interfaces/AreaModelIf.md)
- [`HasDefaultRowHeightIf`](../interfaces/HasDefaultRowHeightIf.md)

## Table of contents

### Constructors

- [constructor](AbstractAreaModel.md#constructor)

### Properties

- [areaIdent](AbstractAreaModel.md#areaident)
- [cellRenderers](AbstractAreaModel.md#cellrenderers)
- [columnDefs](AbstractAreaModel.md#columndefs)
- [defaultRowHeight](AbstractAreaModel.md#defaultrowheight)
- [rowSelectionModel](AbstractAreaModel.md#rowselectionmodel)
- [yPositions](AbstractAreaModel.md#ypositions)

### Methods

- [arrayMove](AbstractAreaModel.md#arraymove)
- [calcYPositions](AbstractAreaModel.md#calcypositions)
- [changeColumnOrder](AbstractAreaModel.md#changecolumnorder)
- [doSort](AbstractAreaModel.md#dosort)
- [externalFilterChanged](AbstractAreaModel.md#externalfilterchanged)
- [getCellRenderer](AbstractAreaModel.md#getcellrenderer)
- [getColspanAt](AbstractAreaModel.md#getcolspanat)
- [getCustomClassesAt](AbstractAreaModel.md#getcustomclassesat)
- [getCustomStyleAt](AbstractAreaModel.md#getcustomstyleat)
- [getMaxColspan](AbstractAreaModel.md#getmaxcolspan)
- [getMaxRowspan](AbstractAreaModel.md#getmaxrowspan)
- [getRowByIndex](AbstractAreaModel.md#getrowbyindex)
- [getRowCount](AbstractAreaModel.md#getrowcount)
- [getRowHeight](AbstractAreaModel.md#getrowheight)
- [getRowspanAt](AbstractAreaModel.md#getrowspanat)
- [getTextValueAt](AbstractAreaModel.md#gettextvalueat)
- [getTooltipAt](AbstractAreaModel.md#gettooltipat)
- [getValueAt](AbstractAreaModel.md#getvalueat)
- [getYPosByRowIndex](AbstractAreaModel.md#getyposbyrowindex)
- [init](AbstractAreaModel.md#init)
- [isEditable](AbstractAreaModel.md#iseditable)
- [isFilterable](AbstractAreaModel.md#isfilterable)
- [isRowCheckable](AbstractAreaModel.md#isrowcheckable)
- [isRowChecked](AbstractAreaModel.md#isrowchecked)
- [isSelectable](AbstractAreaModel.md#isselectable)
- [setPropertyValue](AbstractAreaModel.md#setpropertyvalue)
- [setRowChecked](AbstractAreaModel.md#setrowchecked)
- [setValue](AbstractAreaModel.md#setvalue)
- [sort](AbstractAreaModel.md#sort)

## Constructors

### constructor

• **new AbstractAreaModel**\<`T`\>(`areaIdent`, `columnDefs?`, `defaultRowHeight?`): [`AbstractAreaModel`](AbstractAreaModel.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |
| `defaultRowHeight` | `number` | `-1` |

#### Returns

[`AbstractAreaModel`](AbstractAreaModel.md)\<`T`\>

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L18)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[areaIdent](../interfaces/AreaModelIf.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L19)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L20)

___

### defaultRowHeight

• **defaultRowHeight**: `number` = `-1`

#### Implementation of

[HasDefaultRowHeightIf](../interfaces/HasDefaultRowHeightIf.md).[defaultRowHeight](../interfaces/HasDefaultRowHeightIf.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L21)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[rowSelectionModel](../interfaces/AreaModelIf.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L16)

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

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:171](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L171)

___

### calcYPositions

▸ **calcYPositions**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L177)

___

### changeColumnOrder

▸ **changeColumnOrder**(`sourceColumnIndex`, `targetColumnIndex`): `void`

Method for moving a column from position sourceColumnIndex to targetColumnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColumnIndex` | `number` |
| `targetColumnIndex` | `number` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[changeColumnOrder](../interfaces/AreaModelIf.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:151](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L151)

___

### doSort

▸ **doSort**(`_sortItems`): `boolean`

If the 'restore sort' option is set (see), this method will be triggered automatically by the table,

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[doSort](../interfaces/AreaModelIf.md#dosort)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:116](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L116)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[externalFilterChanged](../interfaces/AreaModelIf.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:110](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L110)

___

### getCellRenderer

▸ **getCellRenderer**(`_rowIndex`, `columnIndex`): `undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

Returns a cell renderer class for the given cell (rowIndex/columnIndex).
If the return value is undefined, no renderer is used and the model value will be rendered directly in the cell.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCellRenderer](../interfaces/AreaModelIf.md#getcellrenderer)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L42)

___

### getColspanAt

▸ **getColspanAt**(`_rowIndex`, `_columnIndex`): `number`

Returns the value of a colspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getColspanAt](../interfaces/AreaModelIf.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L49)

___

### getCustomClassesAt

▸ **getCustomClassesAt**(`_rowIndex`, `_columnIndex`): `string`[]

This method can be used to return a list of css classes for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`string`[]

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCustomClassesAt](../interfaces/AreaModelIf.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L53)

___

### getCustomStyleAt

▸ **getCustomStyleAt**(`_rowIndex`, `_columnIndex`): `undefined` \| \{ `[key: string]`: `string`;  }

This method can be used to return an object with css style information for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`undefined` \| \{ `[key: string]`: `string`;  }

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCustomStyleAt](../interfaces/AreaModelIf.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:57](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L57)

___

### getMaxColspan

▸ **getMaxColspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no colspan,
a value of 0 would be good. The dafault is 32. If your model has a colspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getMaxColspan](../interfaces/AreaModelIf.md#getmaxcolspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L85)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The default is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getMaxRowspan](../interfaces/AreaModelIf.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

___

### getRowByIndex

▸ **getRowByIndex**(`_rowIndex`): `any`

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowByIndex](../interfaces/AreaModelIf.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L65)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowCount](../interfaces/AreaModelIf.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L27)

___

### getRowHeight

▸ **getRowHeight**(`rowIndex`): `number`

Returns the row height in pixel of the given row (rowIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowHeight](../interfaces/AreaModelIf.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L40)

___

### getRowspanAt

▸ **getRowspanAt**(`_rowIndex`, `_columnIndex`): `number`

Returns the value of a rowspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowspanAt](../interfaces/AreaModelIf.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:61](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L61)

___

### getTextValueAt

▸ **getTextValueAt**(`rowIndex`, `columnIndex`): `string`

Returns a string value of the cell at position rowIndex/columnIndex.
This function will be called by 'export' or 'copy to clipboard'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`string`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getTextValueAt](../interfaces/AreaModelIf.md#gettextvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L31)

___

### getTooltipAt

▸ **getTooltipAt**(`_rowIndex`, `_columnIndex`): `any`

Returns the value of a tooltip of the given cell (rowIndex/columnIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getTooltipAt](../interfaces/AreaModelIf.md#gettooltipat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L36)

___

### getValueAt

▸ **getValueAt**(`rowIndex`, `columnIndex`): `any`

Returns the value of the cell at position rowIndex/columnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getValueAt](../interfaces/AreaModelIf.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L29)

___

### getYPosByRowIndex

▸ **getYPosByRowIndex**(`rowIndex`): `number`

Return the y-position in pixel of the top of the row on the scrollpane.
For big tables it can be a big value (greate than the height of the viewport).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getYPosByRowIndex](../interfaces/AreaModelIf.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L94)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[init](../interfaces/AreaModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:102](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L102)

___

### isEditable

▸ **isEditable**(`_rowIndex`, `columnIndex`): `boolean`

If this method returns true, the cell can be edited by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isEditable](../interfaces/AreaModelIf.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isFilterable](../interfaces/AreaModelIf.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:112](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L112)

___

### isRowCheckable

▸ **isRowCheckable**(`_rowIndex`): `boolean`

If true, the row is checkable and a checkbox is rendered at the beginning of the row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isRowCheckable](../interfaces/AreaModelIf.md#isrowcheckable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L69)

___

### isRowChecked

▸ **isRowChecked**(`rowIndex`): `undefined` \| [`CheckedType`](../modules.md#checkedtype)

Returns the checked state of an row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`undefined` \| [`CheckedType`](../modules.md#checkedtype)

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isRowChecked](../interfaces/AreaModelIf.md#isrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L73)

___

### isSelectable

▸ **isSelectable**(`_rowIndex`, `_columnIndex`): `boolean`

If true, the cell is selectable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isSelectable](../interfaces/AreaModelIf.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:147](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L147)

___

### setPropertyValue

▸ **setPropertyValue**(`o`, `props`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |
| `props` | `string`[] |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:156](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L156)

___

### setRowChecked

▸ **setRowChecked**(`rowIndex`, `checked`): `void`

Set the checked state of the row (rowIndex) to #checked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `checked` | `boolean` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[setRowChecked](../interfaces/AreaModelIf.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L78)

___

### setValue

▸ **setValue**(`rowIndex`, `columnIndex`, `value`): `boolean`

Method for changing a cell value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `value` | `any` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[setValue](../interfaces/AreaModelIf.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:131](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L131)

___

### sort

▸ **sort**(`_compareFn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_compareFn?` | (`a`: `any`, `b`: `any`) => `number` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[sort](../interfaces/AreaModelIf.md#sort)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L121)
