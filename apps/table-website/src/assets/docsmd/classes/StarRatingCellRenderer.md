[@guiexpert/table](../README.md) / [Exports](../modules.md) / StarRatingCellRenderer

# Class: StarRatingCellRenderer\<T\>

Works with AreaModelObjectArray only

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](StarRatingCellRenderer.md#constructor)

### Properties

- [property](StarRatingCellRenderer.md#property)

### Methods

- [render](StarRatingCellRenderer.md#render)

## Constructors

### constructor

• **new StarRatingCellRenderer**\<`T`\>(`property`): [`StarRatingCellRenderer`](StarRatingCellRenderer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

[`StarRatingCellRenderer`](StarRatingCellRenderer.md)\<`T`\>

#### Defined in

[lib/table/renderer/star-rating-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/star-rating-cell-renderer.ts#L12)

## Properties

### property

• **property**: `string`

#### Defined in

[lib/table/renderer/star-rating-cell-renderer.ts:13](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/star-rating-cell-renderer.ts#L13)

## Methods

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `areaModel`, `_cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `areaModel` | [`AreaModelObjectyArray`](AreaModelObjectyArray.md)\<`T`\> |
| `_cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/star-rating-cell-renderer.ts:17](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/star-rating-cell-renderer.ts#L17)
