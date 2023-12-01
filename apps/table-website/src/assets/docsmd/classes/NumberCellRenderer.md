[@guiexpert/table](../README.md) / [Exports](../modules.md) / NumberCellRenderer

# Class: NumberCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](NumberCellRenderer.md#constructor)

### Properties

- [max](NumberCellRenderer.md#max)
- [min](NumberCellRenderer.md#min)

### Methods

- [render](NumberCellRenderer.md#render)

## Constructors

### constructor

• **new NumberCellRenderer**(`min?`, `max?`): [`NumberCellRenderer`](NumberCellRenderer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `Number.MIN_SAFE_INTEGER` |
| `max` | `number` | `Number.MAX_SAFE_INTEGER` |

#### Returns

[`NumberCellRenderer`](NumberCellRenderer.md)

#### Defined in

[lib/table/renderer/number-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/number-cell-renderer.ts#L10)

## Properties

### max

• `Protected` **max**: `number` = `Number.MAX_SAFE_INTEGER`

#### Defined in

[lib/table/renderer/number-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/number-cell-renderer.ts#L12)

___

### min

• `Protected` **min**: `number` = `Number.MIN_SAFE_INTEGER`

#### Defined in

[lib/table/renderer/number-cell-renderer.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/number-cell-renderer.ts#L11)

## Methods

### render

▸ **render**(`cellDiv`, `_rowIndex`, `_columnIndex`, `_areaIdent`, `_areaModel`, `cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |
| `_areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `_areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/number-cell-renderer.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/number-cell-renderer.ts#L15)
