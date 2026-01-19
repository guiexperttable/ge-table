[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelObjectArray

# Class: AreaModelObjectArray\<T\>

Represents an area model defined by an object array.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of objects in the array |

## Hierarchy

- [`AbstractAreaModel`](AbstractAreaModel.md)\<`T`\>

  ↳ **`AreaModelObjectArray`**

  ↳↳ [`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)

## Implements

- [`ObjectArrayHolderIf`](../interfaces/ObjectArrayHolderIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](AreaModelObjectArray.md#constructor)

### Properties

- [\_focusedRowIndex](AreaModelObjectArray.md#_focusedrowindex)
- [areaIdent](AreaModelObjectArray.md#areaident)
- [cellRenderers](AreaModelObjectArray.md#cellrenderers)
- [columnDefs](AreaModelObjectArray.md#columndefs)
- [defaultRowHeight](AreaModelObjectArray.md#defaultrowheight)
- [filteredRows](AreaModelObjectArray.md#filteredrows)
- [focusedRowClass](AreaModelObjectArray.md#focusedrowclass)
- [properties](AreaModelObjectArray.md#properties)
- [rowSelectionModel](AreaModelObjectArray.md#rowselectionmodel)
- [rows](AreaModelObjectArray.md#rows)
- [selectedRowClass](AreaModelObjectArray.md#selectedrowclass)
- [sorterService](AreaModelObjectArray.md#sorterservice)
- [yPositions](AreaModelObjectArray.md#ypositions)

### Methods

- [arrayMove](AreaModelObjectArray.md#arraymove)
- [changeColumnOrder](AreaModelObjectArray.md#changecolumnorder)
- [doSort](AreaModelObjectArray.md#dosort)
- [externalFilterChanged](AreaModelObjectArray.md#externalfilterchanged)
- [filterRowsByPredict](AreaModelObjectArray.md#filterrowsbypredict)
- [findRowFromAllRowsByAllCriteria](AreaModelObjectArray.md#findrowfromallrowsbyallcriteria)
- [findRowFromFilteredRowsByAllCriteria](AreaModelObjectArray.md#findrowfromfilteredrowsbyallcriteria)
- [genericFlatTableSortComparator](AreaModelObjectArray.md#genericflattablesortcomparator)
- [getAllRows](AreaModelObjectArray.md#getallrows)
- [getCellRenderer](AreaModelObjectArray.md#getcellrenderer)
- [getColspanAt](AreaModelObjectArray.md#getcolspanat)
- [getCustomClassesAt](AreaModelObjectArray.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelObjectArray.md#getcustomstyleat)
- [getFilteredRows](AreaModelObjectArray.md#getfilteredrows)
- [getFocusedRowIndex](AreaModelObjectArray.md#getfocusedrowindex)
- [getMaxColspan](AreaModelObjectArray.md#getmaxcolspan)
- [getMaxRowspan](AreaModelObjectArray.md#getmaxrowspan)
- [getPropertyValue](AreaModelObjectArray.md#getpropertyvalue)
- [getRowByIndex](AreaModelObjectArray.md#getrowbyindex)
- [getRowCount](AreaModelObjectArray.md#getrowcount)
- [getRowHeight](AreaModelObjectArray.md#getrowheight)
- [getRowspanAt](AreaModelObjectArray.md#getrowspanat)
- [getTextValueAt](AreaModelObjectArray.md#gettextvalueat)
- [getTooltipAt](AreaModelObjectArray.md#gettooltipat)
- [getValueAt](AreaModelObjectArray.md#getvalueat)
- [getValueByT](AreaModelObjectArray.md#getvaluebyt)
- [getYPosByRowIndex](AreaModelObjectArray.md#getyposbyrowindex)
- [init](AreaModelObjectArray.md#init)
- [isEditable](AreaModelObjectArray.md#iseditable)
- [isFilterable](AreaModelObjectArray.md#isfilterable)
- [isRowCheckable](AreaModelObjectArray.md#isrowcheckable)
- [isRowChecked](AreaModelObjectArray.md#isrowchecked)
- [isSelectable](AreaModelObjectArray.md#isselectable)
- [setFocusedRowIndex](AreaModelObjectArray.md#setfocusedrowindex)
- [setPropertyValue](AreaModelObjectArray.md#setpropertyvalue)
- [setRowChecked](AreaModelObjectArray.md#setrowchecked)
- [setRows](AreaModelObjectArray.md#setrows)
- [setValue](AreaModelObjectArray.md#setvalue)
- [sort](AreaModelObjectArray.md#sort)

## Constructors

### constructor

• **new AreaModelObjectArray**\<`T`\>(`areaIdent`, `rows`, `defaultRowHeight`, `columnDefs?`, `selectedRowClass?`, `focusedRowClass?`): [`AreaModelObjectArray`](AreaModelObjectArray.md)\<`T`\>

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
| `selectedRowClass` | `string` | `'ge-selected-row'` |
| `focusedRowClass` | `string` | `'ge-focused-row'` |

#### Returns

[`AreaModelObjectArray`](AreaModelObjectArray.md)\<`T`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[constructor](AbstractAreaModel.md#constructor)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L25)

## Properties

### \_focusedRowIndex

• **\_focusedRowIndex**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L38)

___

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[areaIdent](AbstractAreaModel.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:26](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L26)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[cellRenderers](AbstractAreaModel.md#cellrenderers)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[columnDefs](AbstractAreaModel.md#columndefs)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L29)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[defaultRowHeight](AbstractAreaModel.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L28)

___

### filteredRows

• `Protected` **filteredRows**: `T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L21)

___

### focusedRowClass

• **focusedRowClass**: `string` = `'ge-focused-row'`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L31)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L20)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[rowSelectionModel](AbstractAreaModel.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Protected` **rows**: `T`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L27)

___

### selectedRowClass

• **selectedRowClass**: `string` = `'ge-selected-row'`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L30)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L22)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[yPositions](AbstractAreaModel.md#ypositions)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[arrayMove](AbstractAreaModel.md#arraymove)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:171](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L171)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:159](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L159)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:133](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L133)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:129](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L129)

___

### filterRowsByPredict

▸ **filterRowsByPredict**(`predict`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predict` | (`row`: `T`) => `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L53)

___

### findRowFromAllRowsByAllCriteria

▸ **findRowFromAllRowsByAllCriteria**(`criteria`, `predicate`): `undefined` \| `T`

Searches through all rows to find a row that matches the given criteria based on the predicate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `Partial`\<`T`\> | A partial object containing the search criteria |
| `predicate` | (`criteria`: `Partial`\<`T`\>, `row`: `T`) => `boolean` | A function that takes the search criteria and a row, and returns true if the row matches the criteria |

#### Returns

`undefined` \| `T`

The first matching row from all rows, or undefined if no match is found

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:115](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L115)

___

### findRowFromFilteredRowsByAllCriteria

▸ **findRowFromFilteredRowsByAllCriteria**(`criteria`, `predicate`): `undefined` \| `T`

Returns the first row from the filtered rows that matches the given criteria based on the provided predicate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `Partial`\<`T`\> | A partial object containing the search criteria |
| `predicate` | (`criteria`: `Partial`\<`T`\>, `row`: `T`) => `boolean` | A function that takes the search criteria and a row, and returns true if the row matches the criteria |

#### Returns

`undefined` \| `T`

The first matching row, or undefined if no match is found

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:101](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L101)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L177)

___

### getAllRows

▸ **getAllRows**(): `T`[]

#### Returns

`T`[]

#### Implementation of

[ObjectArrayHolderIf](../interfaces/ObjectArrayHolderIf.md).[getAllRows](../interfaces/ObjectArrayHolderIf.md#getallrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L89)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getColspanAt](AbstractAreaModel.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L49)

___

### getCustomClassesAt

▸ **getCustomClassesAt**(`rowIndex`, `_columnIndex`): `string`[]

This method can be used to return a list of css classes for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`string`[]

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getCustomClassesAt](AbstractAreaModel.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:164](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L164)

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

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:57](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L57)

___

### getFilteredRows

▸ **getFilteredRows**(): `T`[]

Retrieves the filtered and sorted rows from the dataset.
These rows are used for rendering the table.

#### Returns

`T`[]

An array containing the filtered (and sorted) rows.

#### Implementation of

[ObjectArrayHolderIf](../interfaces/ObjectArrayHolderIf.md).[getFilteredRows](../interfaces/ObjectArrayHolderIf.md#getfilteredrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L85)

___

### getFocusedRowIndex

▸ **getFocusedRowIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L40)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getMaxRowspan](AbstractAreaModel.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:195](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L195)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:125](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L125)

___

### getRowCount

▸ **getRowCount**(): `number`

return row count of filtered rows

#### Returns

`number`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowCount](AbstractAreaModel.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:61](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L61)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L121)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getTextValueAt](AbstractAreaModel.md#gettextvalueat)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getTooltipAt](AbstractAreaModel.md#gettooltipat)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getValueAt](AbstractAreaModel.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L65)

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

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:148](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L148)

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

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L94)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[init](AbstractAreaModel.md#init)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isEditable](AbstractAreaModel.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isFilterable](AbstractAreaModel.md#isfilterable)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowCheckable](AbstractAreaModel.md#isrowcheckable)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowChecked](AbstractAreaModel.md#isrowchecked)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isSelectable](AbstractAreaModel.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:147](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L147)

___

### setFocusedRowIndex

▸ **setFocusedRowIndex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:44](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L44)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setRowChecked](AbstractAreaModel.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L78)

___

### setRows

▸ **setRows**(`rows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `T`[] |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L48)

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

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:131](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L131)

___

### sort

▸ **sort**(`compareFn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | (`a`: `T`, `b`: `T`) => `number` |

#### Returns

`void`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[sort](AbstractAreaModel.md#sort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:144](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L144)
