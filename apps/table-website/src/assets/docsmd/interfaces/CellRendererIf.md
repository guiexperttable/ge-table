[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellRendererIf

# Interface: CellRendererIf

## Implemented by

- [`CellGroupExtCellRenderer`](../classes/CellGroupExtCellRenderer.md)
- [`CheckboxBooleanPropertyCellRenderer`](../classes/CheckboxBooleanPropertyCellRenderer.md)
- [`CheckboxCellRenderer`](../classes/CheckboxCellRenderer.md)
- [`DateToIntlDDMMYYYYCellRenderer`](../classes/DateToIntlDDMMYYYYCellRenderer.md)
- [`DateToIsoCellRenderer`](../classes/DateToIsoCellRenderer.md)
- [`DateToLocaleDateCellRenderer`](../classes/DateToLocaleDateCellRenderer.md)
- [`DateToTecCellRenderer`](../classes/DateToTecCellRenderer.md)
- [`InputCellRenderer`](../classes/InputCellRenderer.md)
- [`MaleFemaleToIconCellRenderer`](../classes/MaleFemaleToIconCellRenderer.md)
- [`NumberCellRenderer`](../classes/NumberCellRenderer.md)
- [`ProgressBarCellRenderer`](../classes/ProgressBarCellRenderer.md)
- [`SelectCellRenderer`](../classes/SelectCellRenderer.md)
- [`StarRatingCellRenderer`](../classes/StarRatingCellRenderer.md)
- [`TrueFalseCellRenderer`](../classes/TrueFalseCellRenderer.md)

## Table of contents

### Methods

- [render](CellRendererIf.md#render)

## Methods

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `areaModel`, `cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `areaModel` | [`AreaModelIf`](AreaModelIf.md) |
| `cellValue` | `any` |
| `domService` | [`DomServiceIf`](DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Defined in

[lib/table/renderer/cell-render.if.ts:8](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/cell-render.if.ts#L8)
