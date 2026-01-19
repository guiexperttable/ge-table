[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelObjectArrayWithColumndefs

# Class: AreaModelObjectArrayWithColumndefs\<T\>

Represents an array of objects with column definitions for an area model.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of objects in the array. |

## Hierarchy

- [`AreaModelObjectArray`](AreaModelObjectArray.md)\<`T`\>

  ↳ **`AreaModelObjectArrayWithColumndefs`**

## Table of contents

### Constructors

- [constructor](AreaModelObjectArrayWithColumndefs.md#constructor)

### Properties

- [\_focusedRowIndex](AreaModelObjectArrayWithColumndefs.md#_focusedrowindex)
- [areaIdent](AreaModelObjectArrayWithColumndefs.md#areaident)
- [cellRenderers](AreaModelObjectArrayWithColumndefs.md#cellrenderers)
- [columnDefs](AreaModelObjectArrayWithColumndefs.md#columndefs)
- [defaultRowHeight](AreaModelObjectArrayWithColumndefs.md#defaultrowheight)
- [filteredRows](AreaModelObjectArrayWithColumndefs.md#filteredrows)
- [focusedRowClass](AreaModelObjectArrayWithColumndefs.md#focusedrowclass)
- [properties](AreaModelObjectArrayWithColumndefs.md#properties)
- [rowSelectionModel](AreaModelObjectArrayWithColumndefs.md#rowselectionmodel)
- [rows](AreaModelObjectArrayWithColumndefs.md#rows)
- [selectedRowClass](AreaModelObjectArrayWithColumndefs.md#selectedrowclass)
- [sorterService](AreaModelObjectArrayWithColumndefs.md#sorterservice)
- [yPositions](AreaModelObjectArrayWithColumndefs.md#ypositions)

### Methods

- [arrayMove](AreaModelObjectArrayWithColumndefs.md#arraymove)
- [changeColumnOrder](AreaModelObjectArrayWithColumndefs.md#changecolumnorder)
- [doSort](AreaModelObjectArrayWithColumndefs.md#dosort)
- [externalFilterChanged](AreaModelObjectArrayWithColumndefs.md#externalfilterchanged)
- [filterRowsByPredict](AreaModelObjectArrayWithColumndefs.md#filterrowsbypredict)
- [findRowFromAllRowsByAllCriteria](AreaModelObjectArrayWithColumndefs.md#findrowfromallrowsbyallcriteria)
- [findRowFromFilteredRowsByAllCriteria](AreaModelObjectArrayWithColumndefs.md#findrowfromfilteredrowsbyallcriteria)
- [genericFlatTableSortComparator](AreaModelObjectArrayWithColumndefs.md#genericflattablesortcomparator)
- [getAllRows](AreaModelObjectArrayWithColumndefs.md#getallrows)
- [getCellRenderer](AreaModelObjectArrayWithColumndefs.md#getcellrenderer)
- [getColspanAt](AreaModelObjectArrayWithColumndefs.md#getcolspanat)
- [getCustomClassesAt](AreaModelObjectArrayWithColumndefs.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelObjectArrayWithColumndefs.md#getcustomstyleat)
- [getFilteredRows](AreaModelObjectArrayWithColumndefs.md#getfilteredrows)
- [getFocusedRowIndex](AreaModelObjectArrayWithColumndefs.md#getfocusedrowindex)
- [getMaxColspan](AreaModelObjectArrayWithColumndefs.md#getmaxcolspan)
- [getMaxRowspan](AreaModelObjectArrayWithColumndefs.md#getmaxrowspan)
- [getRowByIndex](AreaModelObjectArrayWithColumndefs.md#getrowbyindex)
- [getRowCount](AreaModelObjectArrayWithColumndefs.md#getrowcount)
- [getRowHeight](AreaModelObjectArrayWithColumndefs.md#getrowheight)
- [getRowspanAt](AreaModelObjectArrayWithColumndefs.md#getrowspanat)
- [getTextValueAt](AreaModelObjectArrayWithColumndefs.md#gettextvalueat)
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
- [setFocusedRowIndex](AreaModelObjectArrayWithColumndefs.md#setfocusedrowindex)
- [setPropertyValue](AreaModelObjectArrayWithColumndefs.md#setpropertyvalue)
- [setRowChecked](AreaModelObjectArrayWithColumndefs.md#setrowchecked)
- [setRows](AreaModelObjectArrayWithColumndefs.md#setrows)
- [setValue](AreaModelObjectArrayWithColumndefs.md#setvalue)
- [sort](AreaModelObjectArrayWithColumndefs.md#sort)

## Constructors

### constructor

• **new AreaModelObjectArrayWithColumndefs**\<`T`\>(`areaIdent`, `rows`, `columnDefs`, `defaultRowHeight`, `selectedRowClass?`, `focusedRowClass?`): [`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `rows` | `T`[] | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` |
| `defaultRowHeight` | `number` | `undefined` |
| `selectedRowClass` | `string` | `'ge-selected-row'` |
| `focusedRowClass` | `string` | `'ge-focused-row'` |

#### Returns

[`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)\<`T`\>

#### Overrides

[AreaModelObjectArray](AreaModelObjectArray.md).[constructor](AreaModelObjectArray.md#constructor)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L13)

## Properties

### \_focusedRowIndex

• **\_focusedRowIndex**: `number` = `0`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[_focusedRowIndex](AreaModelObjectArray.md#_focusedrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L38)

___

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[areaIdent](AreaModelObjectArray.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L14)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[cellRenderers](AreaModelObjectArray.md#cellrenderers)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` `Readonly` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[columnDefs](AreaModelObjectArray.md#columndefs)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L16)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[defaultRowHeight](AreaModelObjectArray.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L17)

___

### filteredRows

• `Protected` **filteredRows**: `T`[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[filteredRows](AreaModelObjectArray.md#filteredrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L21)

___

### focusedRowClass

• **focusedRowClass**: `string` = `'ge-focused-row'`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[focusedRowClass](AreaModelObjectArray.md#focusedrowclass)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L31)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[properties](AreaModelObjectArray.md#properties)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L20)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[rowSelectionModel](AreaModelObjectArray.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Protected` **rows**: `T`[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[rows](AreaModelObjectArray.md#rows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array-with-columndefs.ts#L15)

___

### selectedRowClass

• **selectedRowClass**: `string` = `'ge-selected-row'`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[selectedRowClass](AreaModelObjectArray.md#selectedrowclass)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L30)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[sorterService](AreaModelObjectArray.md#sorterservice)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L22)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[yPositions](AreaModelObjectArray.md#ypositions)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[arrayMove](AreaModelObjectArray.md#arraymove)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[changeColumnOrder](AreaModelObjectArray.md#changecolumnorder)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[doSort](AreaModelObjectArray.md#dosort)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[externalFilterChanged](AreaModelObjectArray.md#externalfilterchanged)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[filterRowsByPredict](AreaModelObjectArray.md#filterrowsbypredict)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[findRowFromAllRowsByAllCriteria](AreaModelObjectArray.md#findrowfromallrowsbyallcriteria)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[findRowFromFilteredRowsByAllCriteria](AreaModelObjectArray.md#findrowfromfilteredrowsbyallcriteria)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[genericFlatTableSortComparator](AreaModelObjectArray.md#genericflattablesortcomparator)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L177)

___

### getAllRows

▸ **getAllRows**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getAllRows](AreaModelObjectArray.md#getallrows)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getCellRenderer](AreaModelObjectArray.md#getcellrenderer)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getColspanAt](AreaModelObjectArray.md#getcolspanat)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getCustomClassesAt](AreaModelObjectArray.md#getcustomclassesat)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getCustomStyleAt](AreaModelObjectArray.md#getcustomstyleat)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getFilteredRows](AreaModelObjectArray.md#getfilteredrows)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L85)

___

### getFocusedRowIndex

▸ **getFocusedRowIndex**(): `number`

#### Returns

`number`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getFocusedRowIndex](AreaModelObjectArray.md#getfocusedrowindex)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getMaxColspan](AreaModelObjectArray.md#getmaxcolspan)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getMaxRowspan](AreaModelObjectArray.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getRowByIndex](AreaModelObjectArray.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:125](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L125)

___

### getRowCount

▸ **getRowCount**(): `number`

return row count of filtered rows

#### Returns

`number`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getRowCount](AreaModelObjectArray.md#getrowcount)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getRowHeight](AreaModelObjectArray.md#getrowheight)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getRowspanAt](AreaModelObjectArray.md#getrowspanat)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getTextValueAt](AreaModelObjectArray.md#gettextvalueat)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getTooltipAt](AreaModelObjectArray.md#gettooltipat)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getValueAt](AreaModelObjectArray.md#getvalueat)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[getValueByT](AreaModelObjectArray.md#getvaluebyt)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[getYPosByRowIndex](AreaModelObjectArray.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L94)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[init](AreaModelObjectArray.md#init)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[isEditable](AreaModelObjectArray.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[isFilterable](AreaModelObjectArray.md#isfilterable)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[isRowCheckable](AreaModelObjectArray.md#isrowcheckable)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[isRowChecked](AreaModelObjectArray.md#isrowchecked)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[isSelectable](AreaModelObjectArray.md#isselectable)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[setFocusedRowIndex](AreaModelObjectArray.md#setfocusedrowindex)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[setPropertyValue](AreaModelObjectArray.md#setpropertyvalue)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[setRowChecked](AreaModelObjectArray.md#setrowchecked)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[setRows](AreaModelObjectArray.md#setrows)

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

[AreaModelObjectArray](AreaModelObjectArray.md).[setValue](AreaModelObjectArray.md#setvalue)

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

#### Inherited from

[AreaModelObjectArray](AreaModelObjectArray.md).[sort](AreaModelObjectArray.md#sort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-object-array.ts:144](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-object-array.ts#L144)
