[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableApi

# Class: TableApi

## Table of contents

### Constructors

- [constructor](TableApi.md#constructor)

### Properties

- [tableScope](TableApi.md#tablescope)

### Methods

- [externalFilterChanged](TableApi.md#externalfilterchanged)
- [isColumnVisible](TableApi.md#iscolumnvisible)
- [isFooterVisible](TableApi.md#isfootervisible)
- [isHeaderVisible](TableApi.md#isheadervisible)
- [repaint](TableApi.md#repaint)
- [scrollToIndex](TableApi.md#scrolltoindex)
- [scrollToPixel](TableApi.md#scrolltopixel)
- [setColumnVisible](TableApi.md#setcolumnvisible)
- [setFooterVisible](TableApi.md#setfootervisible)
- [setHeaderVisible](TableApi.md#setheadervisible)
- [updateCells](TableApi.md#updatecells)

## Constructors

### constructor

• **new TableApi**(`tableScope`): [`TableApi`](TableApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-api.ts:8](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L8)

## Properties

### tableScope

• `Private` `Readonly` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/table-api.ts:9](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L9)

## Methods

### externalFilterChanged

▸ **externalFilterChanged**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:21](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L21)

___

### isColumnVisible

▸ **isColumnVisible**(`_column`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) |

#### Returns

`boolean`

#### Defined in

[lib/table/table-api.ts:42](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L42)

___

### isFooterVisible

▸ **isFooterVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/table-api.ts:55](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L55)

___

### isHeaderVisible

▸ **isHeaderVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/table-api.ts:47](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L47)

___

### repaint

▸ **repaint**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:59](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L59)

___

### scrollToIndex

▸ **scrollToIndex**(`_indexX?`, `_indexY?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_indexX` | `number` | `0` |
| `_indexY` | `number` | `0` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:30](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L30)

___

### scrollToPixel

▸ **scrollToPixel**(`_px?`, `_py?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_px` | `number` | `0` |
| `_py` | `number` | `0` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:25](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L25)

___

### setColumnVisible

▸ **setColumnVisible**(`_column`, `_visible?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) | `undefined` |
| `_visible` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:38](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L38)

___

### setFooterVisible

▸ **setFooterVisible**(`_visible?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_visible` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:51](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L51)

___

### setHeaderVisible

▸ **setHeaderVisible**(`_visible?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_visible` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:34](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L34)

___

### updateCells

▸ **updateCells**(`events`, `repaintAll?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] | `undefined` |
| `repaintAll` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:14](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/table-api.ts#L14)
