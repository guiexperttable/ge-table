[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectCellRenderer

# Class: SelectCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](SelectCellRenderer.md#constructor)

### Properties

- [options](SelectCellRenderer.md#options)

### Methods

- [render](SelectCellRenderer.md#render)
- [create](SelectCellRenderer.md#create)

## Constructors

### constructor

• **new SelectCellRenderer**(`options`): [`SelectCellRenderer`](SelectCellRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ValueLabelIf`](../interfaces/ValueLabelIf.md)[] |

#### Returns

[`SelectCellRenderer`](SelectCellRenderer.md)

#### Defined in

[lib/table/renderer/edit/select-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/renderer/edit/select-cell-renderer.ts#L12)

## Properties

### options

• `Protected` **options**: [`ValueLabelIf`](../interfaces/ValueLabelIf.md)[]

#### Defined in

[lib/table/renderer/edit/select-cell-renderer.ts:13](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/renderer/edit/select-cell-renderer.ts#L13)

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

[lib/table/renderer/edit/select-cell-renderer.ts:23](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/renderer/edit/select-cell-renderer.ts#L23)

___

### create

▸ **create**(`values`): [`SelectCellRenderer`](SelectCellRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `string`[] |

#### Returns

[`SelectCellRenderer`](SelectCellRenderer.md)

#### Defined in

[lib/table/renderer/edit/select-cell-renderer.ts:17](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/renderer/edit/select-cell-renderer.ts#L17)
