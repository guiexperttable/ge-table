[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelTree

# Class: AreaModelTree\<S\>

This is the model interface for an area model. A table can have three of these models, one for the header,
one for the body , and one for the footer.
An AreaModelIf gives you information about the rows and cell contents.
The column information is given by the TableModelIf.

## Type parameters

| Name |
| :------ |
| `S` |

## Hierarchy

- [`AbstractAreaModel`](AbstractAreaModel.md)\<[`TreeRow`](TreeRow.md)\<`S`\>\>

  ↳ **`AreaModelTree`**

## Table of contents

### Constructors

- [constructor](AreaModelTree.md#constructor)

### Properties

- [areaIdent](AreaModelTree.md#areaident)
- [cellRenderers](AreaModelTree.md#cellrenderers)
- [columnDefs](AreaModelTree.md#columndefs)
- [defaultRowHeight](AreaModelTree.md#defaultrowheight)
- [filteredFlattenRows](AreaModelTree.md#filteredflattenrows)
- [flattenRows](AreaModelTree.md#flattenrows)
- [lastPredictFn](AreaModelTree.md#lastpredictfn)
- [properties](AreaModelTree.md#properties)
- [rowSelectionModel](AreaModelTree.md#rowselectionmodel)
- [rows](AreaModelTree.md#rows)
- [service](AreaModelTree.md#service)
- [sorterService](AreaModelTree.md#sorterservice)
- [yPositions](AreaModelTree.md#ypositions)

### Methods

- [arrayMove](AreaModelTree.md#arraymove)
- [changeColumnOrder](AreaModelTree.md#changecolumnorder)
- [doFiltering](AreaModelTree.md#dofiltering)
- [doSort](AreaModelTree.md#dosort)
- [expandAllRecursive](AreaModelTree.md#expandallrecursive)
- [externalFilterChanged](AreaModelTree.md#externalfilterchanged)
- [genericTreeTableSortComparator](AreaModelTree.md#generictreetablesortcomparator)
- [getCellRenderer](AreaModelTree.md#getcellrenderer)
- [getColspanAt](AreaModelTree.md#getcolspanat)
- [getCustomClassesAt](AreaModelTree.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelTree.md#getcustomstyleat)
- [getFilteredFlattenRows](AreaModelTree.md#getfilteredflattenrows)
- [getMaxColspan](AreaModelTree.md#getmaxcolspan)
- [getMaxRowspan](AreaModelTree.md#getmaxrowspan)
- [getPropertyValue](AreaModelTree.md#getpropertyvalue)
- [getRowByIndex](AreaModelTree.md#getrowbyindex)
- [getRowCount](AreaModelTree.md#getrowcount)
- [getRowHeight](AreaModelTree.md#getrowheight)
- [getRowspanAt](AreaModelTree.md#getrowspanat)
- [getTooltipAt](AreaModelTree.md#gettooltipat)
- [getValueAt](AreaModelTree.md#getvalueat)
- [getValueByT](AreaModelTree.md#getvaluebyt)
- [getYPosByRowIndex](AreaModelTree.md#getyposbyrowindex)
- [init](AreaModelTree.md#init)
- [isEditable](AreaModelTree.md#iseditable)
- [isFilterable](AreaModelTree.md#isfilterable)
- [isRowCheckable](AreaModelTree.md#isrowcheckable)
- [isRowChecked](AreaModelTree.md#isrowchecked)
- [isSelectable](AreaModelTree.md#isselectable)
- [recalcVisibleTreeRows](AreaModelTree.md#recalcvisibletreerows)
- [setAllParentsOk](AreaModelTree.md#setallparentsok)
- [setPropertyValue](AreaModelTree.md#setpropertyvalue)
- [setRowChecked](AreaModelTree.md#setrowchecked)
- [setValue](AreaModelTree.md#setvalue)
- [toggleExpandCollapseAll](AreaModelTree.md#toggleexpandcollapseall)
- [treeSort](AreaModelTree.md#treesort)

## Constructors

### constructor

• **new AreaModelTree**\<`S`\>(`areaIdent`, `rows`, `defaultRowHeight`, `columnDefs?`): [`AreaModelTree`](AreaModelTree.md)\<`S`\>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `rows` | [`TreeRow`](TreeRow.md)\<`S`\>[] | `undefined` |
| `defaultRowHeight` | `number` | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |

#### Returns

[`AreaModelTree`](AreaModelTree.md)\<`S`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[constructor](AbstractAreaModel.md#constructor)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:20](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L20)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[areaIdent](AbstractAreaModel.md#areaident)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L21)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[cellRenderers](AbstractAreaModel.md#cellrenderers)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[columnDefs](AbstractAreaModel.md#columndefs)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:24](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L24)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[defaultRowHeight](AbstractAreaModel.md#defaultrowheight)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:23](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L23)

___

### filteredFlattenRows

• `Private` **filteredFlattenRows**: [`TreeRow`](TreeRow.md)\<`S`\>[]

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L16)

___

### flattenRows

• `Private` **flattenRows**: [`TreeRow`](TreeRow.md)\<`S`\>[]

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L17)

___

### lastPredictFn

• `Private` `Optional` **lastPredictFn**: [`FilterFunction`](../modules.md#filterfunction)\<`any`\>

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:18](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L18)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L12)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[rowSelectionModel](AbstractAreaModel.md#rowselectionmodel)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Readonly` **rows**: [`TreeRow`](TreeRow.md)\<`S`\>[]

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:22](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L22)

___

### service

• `Private` `Readonly` **service**: [`TreeRowService`](TreeRowService.md)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L15)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L13)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[yPositions](AbstractAreaModel.md#ypositions)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L16)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:166](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L166)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:32](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L32)

___

### doFiltering

▸ **doFiltering**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:161](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L161)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:97](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L97)

___

### expandAllRecursive

▸ **expandAllRecursive**(`arr`, `expanded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`TreeRow`](TreeRow.md)\<`S`\>[] |
| `expanded` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:152](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L152)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`S`\>(`predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`S`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[externalFilterChanged](AbstractAreaModel.md#externalfilterchanged)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:92](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L92)

___

### genericTreeTableSortComparator

▸ **genericTreeTableSortComparator**(`property`, `f`): (`a`: [`TreeRow`](TreeRow.md)\<`S`\>, `b`: [`TreeRow`](TreeRow.md)\<`S`\>) => `number`

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
| `a` | [`TreeRow`](TreeRow.md)\<`S`\> |
| `b` | [`TreeRow`](TreeRow.md)\<`S`\> |

##### Returns

`number`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:144](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L144)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:37](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L37)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L44)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:75](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L75)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:52](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L52)

___

### getFilteredFlattenRows

▸ **getFilteredFlattenRows**(): [`TreeRow`](TreeRow.md)\<`S`\>[]

#### Returns

[`TreeRow`](TreeRow.md)\<`S`\>[]

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:42](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L42)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:80](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L80)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:84](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L84)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:197](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L197)

___

### getRowByIndex

▸ **getRowByIndex**(`idx`): `undefined` \| [`TreeRow`](TreeRow.md)\<`S`\>

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`undefined` \| [`TreeRow`](TreeRow.md)\<`S`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowByIndex](AbstractAreaModel.md#getrowbyindex)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:80](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L80)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowCount](AbstractAreaModel.md#getrowcount)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:46](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L46)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:71](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L71)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L56)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L31)

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

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L56)

___

### getValueByT

▸ **getValueByT**(`t`, `property`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `S` |
| `property` | `string` |

#### Returns

`any`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:84](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L84)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L89)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[init](AbstractAreaModel.md#init)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:97](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L97)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:116](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L116)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isFilterable](AbstractAreaModel.md#isfilterable)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:107](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L107)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:64](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L64)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:68](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L68)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:141](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L141)

___

### recalcVisibleTreeRows

▸ **recalcVisibleTreeRows**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:38](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L38)

___

### setAllParentsOk

▸ **setAllParentsOk**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`TreeRow`](TreeRow.md)\<`any`\> |

#### Returns

`boolean`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:117](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L117)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:150](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L150)

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

[lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/abstract-area-model.ts#L73)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[setValue](AbstractAreaModel.md#setvalue)

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:125](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L125)

___

### toggleExpandCollapseAll

▸ **toggleExpandCollapseAll**(`expanded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expanded` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:110](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L110)

___

### treeSort

▸ **treeSort**(`rows`, `property`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | [`TreeRow`](TreeRow.md)\<`S`\>[] |
| `property` | `string` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/areamodel/area-model-tree.ts:207](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/areamodel/area-model-tree.ts#L207)
