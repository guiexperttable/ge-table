[@guiexpert/table](../README.md) / [Exports](../modules.md) / ProgressBarCellRenderer

# Class: ProgressBarCellRenderer\<T\>

Works with AreaModelObjectArray only

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](ProgressBarCellRenderer.md#constructor)

### Properties

- [labelVisible](ProgressBarCellRenderer.md#labelvisible)
- [maxValue](ProgressBarCellRenderer.md#maxvalue)
- [property](ProgressBarCellRenderer.md#property)

### Methods

- [render](ProgressBarCellRenderer.md#render)

## Constructors

### constructor

• **new ProgressBarCellRenderer**\<`T`\>(`property`, `maxValue?`, `labelVisible?`): [`ProgressBarCellRenderer`](ProgressBarCellRenderer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `property` | `string` | `undefined` |
| `maxValue` | `number` | `100` |
| `labelVisible` | `boolean` | `false` |

#### Returns

[`ProgressBarCellRenderer`](ProgressBarCellRenderer.md)\<`T`\>

#### Defined in

[lib/table/renderer/progress-bar-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/progress-bar-cell-renderer.ts#L12)

## Properties

### labelVisible

• **labelVisible**: `boolean` = `false`

#### Defined in

[lib/table/renderer/progress-bar-cell-renderer.ts:15](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/progress-bar-cell-renderer.ts#L15)

___

### maxValue

• **maxValue**: `number` = `100`

#### Defined in

[lib/table/renderer/progress-bar-cell-renderer.ts:14](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/progress-bar-cell-renderer.ts#L14)

___

### property

• **property**: `string`

#### Defined in

[lib/table/renderer/progress-bar-cell-renderer.ts:13](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/progress-bar-cell-renderer.ts#L13)

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

[lib/table/renderer/progress-bar-cell-renderer.ts:19](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/progress-bar-cell-renderer.ts#L19)
