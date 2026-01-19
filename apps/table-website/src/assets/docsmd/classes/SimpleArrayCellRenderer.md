[@guiexpert/table](../README.md) / [Exports](../modules.md) / SimpleArrayCellRenderer

# Class: SimpleArrayCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](SimpleArrayCellRenderer.md#constructor)

### Methods

- [render](SimpleArrayCellRenderer.md#render)

## Constructors

### constructor

• **new SimpleArrayCellRenderer**(): [`SimpleArrayCellRenderer`](SimpleArrayCellRenderer.md)

#### Returns

[`SimpleArrayCellRenderer`](SimpleArrayCellRenderer.md)

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
| `cellValue` | `any`[] |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/simple-array-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/simple-array-cell-renderer.ts#L10)
