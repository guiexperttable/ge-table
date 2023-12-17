[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelObjectArrayWithColumndefs

# Class: AreaModelObjectArrayWithColumndefs\<T\>

Represents an array of objects with column definitions for an area model.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of objects in the array. |

## Hierarchy

- [`AreaModelObjectyArray`](AreaModelObjectyArray.md)\<`T`\>

  ↳ **`AreaModelObjectArrayWithColumndefs`**

## Table of contents

### Constructors

- [constructor](AreaModelObjectArrayWithColumndefs.md#constructor)

### Properties

- [areaIdent](AreaModelObjectArrayWithColumndefs.md#areaident)
- [cellRenderers](AreaModelObjectArrayWithColumndefs.md#cellrenderers)
- [columnDefs](AreaModelObjectArrayWithColumndefs.md#columndefs)
- [defaultRowHeight](AreaModelObjectArrayWithColumndefs.md#defaultrowheight)
- [filteredRows](AreaModelObjectArrayWithColumndefs.md#filteredrows)
- [properties](AreaModelObjectArrayWithColumndefs.md#properties)
- [rowSelectionModel](AreaModelObjectArrayWithColumndefs.md#rowselectionmodel)
- [rows](AreaModelObjectArrayWithColumndefs.md#rows)
- [sorterService](AreaModelObjectArrayWithColumndefs.md#sorterservice)
- [yPositions](AreaModelObjectArrayWithColumndefs.md#ypositions)

### Methods

- [arrayMove](AreaModelObjectArrayWithColumndefs.md#arraymove)
- [changeColumnOrder](AreaModelObjectArrayWithColumndefs.md#changecolumnorder)
- [doSort](AreaModelObjectArrayWithColumndefs.md#dosort)
- [externalFilterChanged](AreaModelObjectArrayWithColumndefs.md#externalfilterchanged)
- [genericFlatTableSortComparator](AreaModelObjectArrayWithColumndefs.md#genericflattablesortcomparator)
- [getAllRows](AreaModelObjectArrayWithColumndefs.md#getallrows)
- [getCellRenderer](AreaModelObjectArrayWithColumndefs.md#getcellrenderer)
- [getColspanAt](AreaModelObjectArrayWithColumndefs.md#getcolspanat)
- [getCustomClassesAt](AreaModelObjectArrayWithColumndefs.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelObjectArrayWithColumndefs.md#getcustomstyleat)
- [getFilteredRows](AreaModelObjectArrayWithColumndefs.md#getfilteredrows)
- [getMaxColspan](AreaModelObjectArrayWithColumndefs.md#getmaxcolspan)
- [getMaxRowspan](AreaModelObjectArrayWithColumndefs.md#getmaxrowspan)
- [getRowByIndex](AreaModelObjectArrayWithColumndefs.md#getrowbyindex)
- [getRowCount](AreaModelObjectArrayWithColumndefs.md#getrowcount)
- [getRowHeight](AreaModelObjectArrayWithColumndefs.md#getrowheight)
- [getRowspanAt](AreaModelObjectArrayWithColumndefs.md#getrowspanat)
- [getTooltipAt](AreaModelObjectArrayWithColumndefs.md#gettooltipat)
- [getValueAt](AreaModelObjectArrayWithColumndefs.md#getvalueat)
- [getValueByT](AreaModelObjectArrayWithColumndefs.md#getvaluebyt)
- [getYPosByRowIndex](AreaModelObjectArrayWithColumndefs.md#getyposbyrowindex)
- [init](AreaModelObjectArrayWithColumndefs.md#init)
- [isEditable](AreaModelObjectArrayWithColumndefs.md#iseditable)
- [isFilterable](AreaModelObjectArrayWithColumndefs.md#isfilterable)
- [isRowCheckable](AreaModelObjectArrayWithColumndefs.md#isrowcheckable)
- [isRowChecked](AreaModelObjectArrayWithColumndefs.md#isrowchecked)
- [isSelectable](AreaModelObjectArrayWithColumndefs.md#isselectable)
- [setPropertyValue](AreaModelObjectArrayWithColumndefs.md#setpropertyvalue)
- [setRowChecked](AreaModelObjectArrayWithColumndefs.md#setrowchecked)
- [setValue](AreaModelObjectArrayWithColumndefs.md#setvalue)

## Constructors

### constructor

• **new AreaModelObjectArrayWithColumndefs**\<`T`\>(`areaIdent`, `rows`, `columnDefs`, `defaultRowHeight`): [`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rows` | `T`[] |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] |
| `defaultRowHeight` | `number` |

#### Returns

[`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)\<`T`\>

#### Overrides

[AreaModelObjectyArray](AreaModelObjectyArray.md).[constructor](AreaModelObjectyArray.md#constructor)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L13)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[areaIdent](AreaModelObjectyArray.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L14)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[cellRenderers](AreaModelObjectyArray.md#cellrenderers)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` `Readonly` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[columnDefs](AreaModelObjectyArray.md#columndefs)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L16)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[defaultRowHeight](AreaModelObjectyArray.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L17)

___

### filteredRows

• `Protected` **filteredRows**: `T`[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[filteredRows](AreaModelObjectyArray.md#filteredrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L16)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[properties](AreaModelObjectyArray.md#properties)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L15)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[rowSelectionModel](AreaModelObjectyArray.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Protected` `Readonly` **rows**: `T`[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[rows](AreaModelObjectyArray.md#rows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L15)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[sorterService](AreaModelObjectyArray.md#sorterservice)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L17)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[yPositions](AreaModelObjectyArray.md#ypositions)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L16)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[arrayMove](AreaModelObjectyArray.md#arraymove)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:166](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L166)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[changeColumnOrder](AreaModelObjectyArray.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:87](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L87)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[doSort](AreaModelObjectyArray.md#dosort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:68](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L68)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[externalFilterChanged](AreaModelObjectyArray.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:64](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L64)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[genericFlatTableSortComparator](AreaModelObjectyArray.md#genericflattablesortcomparator)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:92](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L92)

___

### getAllRows

▸ **getAllRows**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getAllRows](AreaModelObjectyArray.md#getallrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:52](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L52)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getCellRenderer](AreaModelObjectyArray.md#getcellrenderer)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L37)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getColspanAt](AreaModelObjectyArray.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:44](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L44)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getCustomClassesAt](AreaModelObjectyArray.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L48)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getCustomStyleAt](AreaModelObjectyArray.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:52](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L52)

___

### getFilteredRows

▸ **getFilteredRows**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getFilteredRows](AreaModelObjectyArray.md#getfilteredrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L48)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getMaxColspan](AreaModelObjectyArray.md#getmaxcolspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:80](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L80)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The default is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getMaxRowspan](AreaModelObjectyArray.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:84](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L84)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getRowByIndex](AreaModelObjectyArray.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:60](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L60)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getRowCount](AreaModelObjectyArray.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L30)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getRowHeight](AreaModelObjectyArray.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:56](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L56)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getRowspanAt](AreaModelObjectyArray.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L56)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getTooltipAt](AreaModelObjectyArray.md#gettooltipat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:31](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L31)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getValueAt](AreaModelObjectyArray.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L34)

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

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getValueByT](AreaModelObjectyArray.md#getvaluebyt)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:79](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L79)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[getYPosByRowIndex](AreaModelObjectyArray.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[init](AreaModelObjectyArray.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:97](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L97)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[isEditable](AreaModelObjectyArray.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:116](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L116)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AreaModelObjectyArray](AreaModelObjectyArray.md).[isFilterable](AreaModelObjectyArray.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:107](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L107)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[isRowCheckable](AreaModelObjectyArray.md#isrowcheckable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:64](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L64)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[isRowChecked](AreaModelObjectyArray.md#isrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:68](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L68)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[isSelectable](AreaModelObjectyArray.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:141](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L141)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[setPropertyValue](AreaModelObjectyArray.md#setpropertyvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:150](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L150)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[setRowChecked](AreaModelObjectyArray.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L73)

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

[AreaModelObjectyArray](AreaModelObjectyArray.md).[setValue](AreaModelObjectyArray.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)
