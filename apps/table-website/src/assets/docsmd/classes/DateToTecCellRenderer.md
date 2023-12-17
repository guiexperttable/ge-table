[@guiexpert/table](../README.md) / [Exports](../modules.md) / DateToTecCellRenderer

# Class: DateToTecCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](DateToTecCellRenderer.md#constructor)

### Methods

- [render](DateToTecCellRenderer.md#render)

## Constructors

### constructor

• **new DateToTecCellRenderer**(): [`DateToTecCellRenderer`](DateToTecCellRenderer.md)

#### Returns

[`DateToTecCellRenderer`](DateToTecCellRenderer.md)

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

[lib/table/renderer/date-to-tec-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/renderer/date-to-tec-cell-renderer.ts#L10)
