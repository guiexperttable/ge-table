[@guiexpert/table](../README.md) / [Exports](../modules.md) / NumberCellProgressBarCellRenderer

# Class: NumberCellProgressBarCellRenderer\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](NumberCellProgressBarCellRenderer.md#constructor)

### Properties

- [labelVisible](NumberCellProgressBarCellRenderer.md#labelvisible)
- [maxValue](NumberCellProgressBarCellRenderer.md#maxvalue)

### Methods

- [render](NumberCellProgressBarCellRenderer.md#render)

## Constructors

### constructor

• **new NumberCellProgressBarCellRenderer**\<`T`\>(`maxValue?`, `labelVisible?`): [`NumberCellProgressBarCellRenderer`](NumberCellProgressBarCellRenderer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `maxValue` | `number` | `100` |
| `labelVisible` | `boolean` | `false` |

#### Returns

[`NumberCellProgressBarCellRenderer`](NumberCellProgressBarCellRenderer.md)\<`T`\>

#### Defined in

[lib/table/renderer/number-cell-progress-bar-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/number-cell-progress-bar-cell-renderer.ts#L10)

## Properties

### labelVisible

• **labelVisible**: `boolean` = `false`

#### Defined in

[lib/table/renderer/number-cell-progress-bar-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/number-cell-progress-bar-cell-renderer.ts#L12)

___

### maxValue

• **maxValue**: `number` = `100`

#### Defined in

[lib/table/renderer/number-cell-progress-bar-cell-renderer.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/number-cell-progress-bar-cell-renderer.ts#L11)

## Methods

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `_areaModel`, `cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `_areaModel` | [`AreaModelObjectArray`](AreaModelObjectArray.md)\<`T`\> |
| `cellValue` | `number` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/number-cell-progress-bar-cell-renderer.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/number-cell-progress-bar-cell-renderer.ts#L16)
