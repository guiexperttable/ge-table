[@guiexpert/table](../README.md) / [Exports](../modules.md) / CheckboxCellRenderer

# Class: CheckboxCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](CheckboxCellRenderer.md#constructor)

### Methods

- [render](CheckboxCellRenderer.md#render)

## Constructors

### constructor

• **new CheckboxCellRenderer**(): [`CheckboxCellRenderer`](CheckboxCellRenderer.md)

#### Returns

[`CheckboxCellRenderer`](CheckboxCellRenderer.md)

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

[lib/table/renderer/checkbox-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/renderer/checkbox-cell-renderer.ts#L10)
