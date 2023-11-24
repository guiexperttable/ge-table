[@guiexpert/table](../README.md) / [Exports](../modules.md) / TrueFalseCellRenderer

# Class: TrueFalseCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](TrueFalseCellRenderer.md#constructor)

### Methods

- [render](TrueFalseCellRenderer.md#render)

## Constructors

### constructor

• **new TrueFalseCellRenderer**(): [`TrueFalseCellRenderer`](TrueFalseCellRenderer.md)

#### Returns

[`TrueFalseCellRenderer`](TrueFalseCellRenderer.md)

## Methods

### render

▸ **render**(`cellDiv`, `_rowIndex`, `_columnIndex`, `_areaIdent`, `_areaModel`, `cellValue`, `_domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |
| `_areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `_areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `any` |
| `_domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/true-false-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/renderer/true-false-cell-renderer.ts#L10)
