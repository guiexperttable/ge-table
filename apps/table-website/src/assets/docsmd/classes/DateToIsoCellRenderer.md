[@guiexpert/table](../README.md) / [Exports](../modules.md) / DateToIsoCellRenderer

# Class: DateToIsoCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](DateToIsoCellRenderer.md#constructor)

### Methods

- [render](DateToIsoCellRenderer.md#render)

## Constructors

### constructor

• **new DateToIsoCellRenderer**(): [`DateToIsoCellRenderer`](DateToIsoCellRenderer.md)

#### Returns

[`DateToIsoCellRenderer`](DateToIsoCellRenderer.md)

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

[lib/table/renderer/date-to-iso-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/renderer/date-to-iso-cell-renderer.ts#L10)
