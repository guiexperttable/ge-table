[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellGroupExtCellRenderer

# Class: CellGroupExtCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](CellGroupExtCellRenderer.md#constructor)

### Methods

- [render](CellGroupExtCellRenderer.md#render)

## Constructors

### constructor

• **new CellGroupExtCellRenderer**(): [`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

#### Returns

[`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

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
| `cellValue` | `undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md) |
| `_domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:11](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L11)
