[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelObjectyArray

# Class: AreaModelObjectyArray\<T\>

This is the model interface for an area model. A table can have three of these models, one for the header,
one for the body , and one for the footer.
An AreaModelIf gives you information about the rows and cell contents.
The column information is given by the TableModelIf.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractAreaModel`](AbstractAreaModel.md)\<`T`\>

  ↳ **`AreaModelObjectyArray`**

  ↳↳ [`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)

## Table of contents

### Constructors

- [constructor](AreaModelObjectyArray.md#constructor)

### Properties

- [areaIdent](AreaModelObjectyArray.md#areaident)
- [cellRenderers](AreaModelObjectyArray.md#cellrenderers)
- [columnDefs](AreaModelObjectyArray.md#columndefs)
- [defaultRowHeight](AreaModelObjectyArray.md#defaultrowheight)
- [filteredRows](AreaModelObjectyArray.md#filteredrows)
- [properties](AreaModelObjectyArray.md#properties)
- [rowSelectionModel](AreaModelObjectyArray.md#rowselectionmodel)
- [rows](AreaModelObjectyArray.md#rows)
- [sorterService](AreaModelObjectyArray.md#sorterservice)
- [yPositions](AreaModelObjectyArray.md#ypositions)

### Methods

- [arrayMove](AreaModelObjectyArray.md#arraymove)
- [changeColumnOrder](AreaModelObjectyArray.md#changecolumnorder)
- [doSort](AreaModelObjectyArray.md#dosort)
- [externalFilterChanged](AreaModelObjectyArray.md#externalfilterchanged)
- [genericFlatTableSortComparator](AreaModelObjectyArray.md#genericflattablesortcomparator)
- [getAllRows](AreaModelObjectyArray.md#getallrows)
- [getCellRenderer](AreaModelObjectyArray.md#getcellrenderer)
- [getColspanAt](AreaModelObjectyArray.md#getcolspanat)
- [getCustomClassesAt](AreaModelObjectyArray.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelObjectyArray.md#getcustomstyleat)
- [getFilteredRows](AreaModelObjectyArray.md#getfilteredrows)
- [getMaxColspan](AreaModelObjectyArray.md#getmaxcolspan)
- [getMaxRowspan](AreaModelObjectyArray.md#getmaxrowspan)
- [getPropertyValue](AreaModelObjectyArray.md#getpropertyvalue)
- [getRowByIndex](AreaModelObjectyArray.md#getrowbyindex)
- [getRowCount](AreaModelObjectyArray.md#getrowcount)
- [getRowHeight](AreaModelObjectyArray.md#getrowheight)
- [getRowspanAt](AreaModelObjectyArray.md#getrowspanat)
- [getTooltipAt](AreaModelObjectyArray.md#gettooltipat)
- [getValueAt](AreaModelObjectyArray.md#getvalueat)
- [getValueByT](AreaModelObjectyArray.md#getvaluebyt)
- [getYPosByRowIndex](AreaModelObjectyArray.md#getyposbyrowindex)
- [init](AreaModelObjectyArray.md#init)
- [isEditable](AreaModelObjectyArray.md#iseditable)
- [isFilterable](AreaModelObjectyArray.md#isfilterable)
- [isRowCheckable](AreaModelObjectyArray.md#isrowcheckable)
- [isRowChecked](AreaModelObjectyArray.md#isrowchecked)
- [isSelectable](AreaModelObjectyArray.md#isselectable)
- [setPropertyValue](AreaModelObjectyArray.md#setpropertyvalue)
- [setRowChecked](AreaModelObjectyArray.md#setrowchecked)
- [setValue](AreaModelObjectyArray.md#setvalue)

## Constructors

### constructor

• **new AreaModelObjectyArray**\<`T`\>(`areaIdent`, `rows`, `defaultRowHeight`, `columnDefs?`): [`AreaModelObjectyArray`](AreaModelObjectyArray.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `rows` | `T`[] | `undefined` |
| `defaultRowHeight` | `number` | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |

#### Returns

[`AreaModelObjectyArray`](AreaModelObjectyArray.md)\<`T`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[constructor](AbstractAreaModel.md#constructor)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L15)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[areaIdent](AbstractAreaModel.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L16)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[cellRenderers](AbstractAreaModel.md#cellrenderers)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[columnDefs](AbstractAreaModel.md#columndefs)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:19](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L19)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[defaultRowHeight](AbstractAreaModel.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:18](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L18)

___

### filteredRows

• `Protected` **filteredRows**: `T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L12)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L11)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[rowSelectionModel](AbstractAreaModel.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Protected` `Readonly` **rows**: `T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L17)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L13)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[yPositions](AbstractAreaModel.md#ypositions)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L16)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[arrayMove](AbstractAreaModel.md#arraymove)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:166](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L166)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[changeColumnOrder](AbstractAreaModel.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:81](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L81)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

If the 'restore sort' option is set (see), this method will be triggered automatically by the table,

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`boolean`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[doSort](AbstractAreaModel.md#dosort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:62](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L62)

___

### externalFilterChanged

▸ **externalFilterChanged**(`predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`any`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[externalFilterChanged](AbstractAreaModel.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:58](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L58)

___

### genericFlatTableSortComparator

▸ **genericFlatTableSortComparator**(`property`, `f`): (`a`: `T`, `b`: `T`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `f` | `number` |

#### Returns

`fn`

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:86](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L86)

___

### getAllRows

▸ **getAllRows**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:46](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L46)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getCellRenderer](AbstractAreaModel.md#getcellrenderer)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:37](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L37)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getColspanAt](AbstractAreaModel.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L44)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getCustomClassesAt](AbstractAreaModel.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:48](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L48)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getCustomStyleAt](AbstractAreaModel.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:52](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L52)

___

### getFilteredRows

▸ **getFilteredRows**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:42](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L42)

___

### getMaxColspan

▸ **getMaxColspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no colspan,
a value of 0 would be good. The dafault is 32. If your model has a colspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getMaxColspan](AbstractAreaModel.md#getmaxcolspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:80](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L80)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The dafault is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getMaxRowspan](AbstractAreaModel.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:84](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L84)

___

### getPropertyValue

▸ **getPropertyValue**(`o`, `props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |
| `props` | `string`[] |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:95](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L95)

___

### getRowByIndex

▸ **getRowByIndex**(`rowIndex`): `any`

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`any`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowByIndex](AbstractAreaModel.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:54](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L54)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowCount](AbstractAreaModel.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:26](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L26)

___

### getRowHeight

▸ **getRowHeight**(`_rowIndex`): `number`

Returns the row height in pixel of the given row (rowIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`number`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowHeight](AbstractAreaModel.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:50](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L50)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getRowspanAt](AbstractAreaModel.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L56)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getTooltipAt](AbstractAreaModel.md#gettooltipat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L31)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getValueAt](AbstractAreaModel.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:30](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L30)

___

### getValueByT

▸ **getValueByT**(`t`, `property`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `property` | `string` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:73](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L73)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getYPosByRowIndex](AbstractAreaModel.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[init](AbstractAreaModel.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:97](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L97)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isEditable](AbstractAreaModel.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:116](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L116)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isFilterable](AbstractAreaModel.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:107](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L107)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowCheckable](AbstractAreaModel.md#isrowcheckable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:64](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L64)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowChecked](AbstractAreaModel.md#isrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:68](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L68)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isSelectable](AbstractAreaModel.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:141](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L141)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setPropertyValue](AbstractAreaModel.md#setpropertyvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:150](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L150)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setRowChecked](AbstractAreaModel.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L73)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setValue](AbstractAreaModel.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)
