[@guiexpert/table](../README.md) / [Exports](../modules.md) / PositiveAndNegativeNumberRenderer

# Class: PositiveAndNegativeNumberRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](PositiveAndNegativeNumberRenderer.md#constructor)

### Methods

- [render](PositiveAndNegativeNumberRenderer.md#render)

## Constructors

### constructor

• **new PositiveAndNegativeNumberRenderer**(): [`PositiveAndNegativeNumberRenderer`](PositiveAndNegativeNumberRenderer.md)

#### Returns

[`PositiveAndNegativeNumberRenderer`](PositiveAndNegativeNumberRenderer.md)

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
| `_areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/positive-and-negative-number-renderer.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/positive-and-negative-number-renderer.ts#L11)
