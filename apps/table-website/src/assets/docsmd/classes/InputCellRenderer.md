[@guiexpert/table](../README.md) / [Exports](../modules.md) / InputCellRenderer

# Class: InputCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](InputCellRenderer.md#constructor)

### Methods

- [render](InputCellRenderer.md#render)

## Constructors

### constructor

• **new InputCellRenderer**(): [`InputCellRenderer`](InputCellRenderer.md)

#### Returns

[`InputCellRenderer`](InputCellRenderer.md)

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
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `_cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/edit/input-cell-renderer.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/edit/input-cell-renderer.ts#L11)
