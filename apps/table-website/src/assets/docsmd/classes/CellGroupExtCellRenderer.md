[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellGroupExtCellRenderer

# Class: CellGroupExtCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](CellGroupExtCellRenderer.md#constructor)

### Properties

- [headerGroupOptions](CellGroupExtCellRenderer.md#headergroupoptions)
- [toggleHeaderGroup](CellGroupExtCellRenderer.md#toggleheadergroup)

### Methods

- [addArrowDiv](CellGroupExtCellRenderer.md#addarrowdiv)
- [addText](CellGroupExtCellRenderer.md#addtext)
- [applyStyleString](CellGroupExtCellRenderer.md#applystylestring)
- [render](CellGroupExtCellRenderer.md#render)

## Constructors

### constructor

• **new CellGroupExtCellRenderer**(`headerGroupOptions?`): [`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerGroupOptions` | `HeaderGroupOptionsIf` |

#### Returns

[`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L16)

## Properties

### headerGroupOptions

• `Private` **headerGroupOptions**: `HeaderGroupOptionsIf`

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L17)

___

### toggleHeaderGroup

▪ `Static` `Private` **toggleHeaderGroup**: `string` = `'toggleHeaderGroup'`

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L14)

## Methods

### addArrowDiv

▸ **addArrowDiv**(`domService`, `parent`, `expanded?`, `rowIndex?`, `columnIndex?`, `areaIdent?`, `action`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) | `undefined` |
| `parent` | `HTMLDivElement` | `undefined` |
| `expanded` | `boolean` | `true` |
| `rowIndex` | `number` | `-1` |
| `columnIndex` | `number` | `-1` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `'header'` |
| `action` | `string` | `undefined` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L65)

___

### addText

▸ **addText**(`cellDiv`, `areaIdent`, `rowIndex`, `columnIndex`, `label`, `action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `areaIdent` | ``"body"`` \| ``"footer"`` \| ``"header"`` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `label` | `string` |
| `action` | `string` |

#### Returns

`void`

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L49)

___

### applyStyleString

▸ **applyStyleString**(`domService`, `div`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |
| `div` | `HTMLDivElement` |
| `style` | `string` |

#### Returns

`void`

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:113](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L113)

___

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `_areaModel`, `cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `_areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md) |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/cell-group-ext-cell-renderer.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/cell-group-ext-cell-renderer.ts#L22)
