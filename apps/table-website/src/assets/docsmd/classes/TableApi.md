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

[lib/table/table-api.ts:8](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L8)

## Properties

### tableScope

• `Private` `Readonly` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/table-api.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L9)

## Methods

### externalFilterChanged

▸ **externalFilterChanged**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:19](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L19)

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

[lib/table/table-api.ts:40](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L40)

___

### isFooterVisible

▸ **isFooterVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/table-api.ts:53](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L53)

___

### isHeaderVisible

▸ **isHeaderVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/table-api.ts:45](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L45)

___

### repaint

▸ **repaint**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:57](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L57)

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

[lib/table/table-api.ts:28](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L28)

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

[lib/table/table-api.ts:23](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L23)

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

[lib/table/table-api.ts:36](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L36)

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

[lib/table/table-api.ts:49](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L49)

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

[lib/table/table-api.ts:32](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L32)

___

### updateCells

▸ **updateCells**(`events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/table-api.ts#L14)
