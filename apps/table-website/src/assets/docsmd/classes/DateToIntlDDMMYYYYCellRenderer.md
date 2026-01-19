[@guiexpert/table](../README.md) / [Exports](../modules.md) / DateToIntlDDMMYYYYCellRenderer

# Class: DateToIntlDDMMYYYYCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](DateToIntlDDMMYYYYCellRenderer.md#constructor)

### Properties

- [formatter](DateToIntlDDMMYYYYCellRenderer.md#formatter)

### Methods

- [render](DateToIntlDDMMYYYYCellRenderer.md#render)

## Constructors

### constructor

• **new DateToIntlDDMMYYYYCellRenderer**(): [`DateToIntlDDMMYYYYCellRenderer`](DateToIntlDDMMYYYYCellRenderer.md)

#### Returns

[`DateToIntlDDMMYYYYCellRenderer`](DateToIntlDDMMYYYYCellRenderer.md)

## Properties

### formatter

• `Readonly` **formatter**: `DateTimeFormat`

#### Defined in

[lib/table/renderer/date-to-int-date-cell-renderer.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/date-to-int-date-cell-renderer.ts#L10)

## Methods

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `_areaModel`, `cellValue`, `_domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `_areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `any` |
| `_domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/date-to-int-date-cell-renderer.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/date-to-int-date-cell-renderer.ts#L16)
