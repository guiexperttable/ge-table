[@guiexpert/table](../README.md) / [Exports](../modules.md) / CheckboxBooleanPropertyCellRenderer

# Class: CheckboxBooleanPropertyCellRenderer\<T\>

Works with AreaModelObjectArray only

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](CheckboxBooleanPropertyCellRenderer.md#constructor)

### Properties

- [property](CheckboxBooleanPropertyCellRenderer.md#property)
- [readonly](CheckboxBooleanPropertyCellRenderer.md#readonly)
- [skipCheckableCheck](CheckboxBooleanPropertyCellRenderer.md#skipcheckablecheck)

### Methods

- [render](CheckboxBooleanPropertyCellRenderer.md#render)

## Constructors

### constructor

• **new CheckboxBooleanPropertyCellRenderer**\<`T`\>(`property`, `skipCheckableCheck?`, `readonly?`): [`CheckboxBooleanPropertyCellRenderer`](CheckboxBooleanPropertyCellRenderer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `property` | `string` | `undefined` |
| `skipCheckableCheck` | `boolean` | `true` |
| `readonly` | `boolean` | `false` |

#### Returns

[`CheckboxBooleanPropertyCellRenderer`](CheckboxBooleanPropertyCellRenderer.md)\<`T`\>

#### Defined in

[lib/table/renderer/checkbox-boolean-property-cell-renderer.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/checkbox-boolean-property-cell-renderer.ts#L12)

## Properties

### property

• **property**: `string`

#### Defined in

[lib/table/renderer/checkbox-boolean-property-cell-renderer.ts:13](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/checkbox-boolean-property-cell-renderer.ts#L13)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[lib/table/renderer/checkbox-boolean-property-cell-renderer.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/checkbox-boolean-property-cell-renderer.ts#L15)

___

### skipCheckableCheck

• **skipCheckableCheck**: `boolean` = `true`

#### Defined in

[lib/table/renderer/checkbox-boolean-property-cell-renderer.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/checkbox-boolean-property-cell-renderer.ts#L14)

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
| `areaModel` | [`AreaModelObjectyArray`](AreaModelObjectyArray.md)\<`T`\> |
| `_cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/checkbox-boolean-property-cell-renderer.ts:19](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/renderer/checkbox-boolean-property-cell-renderer.ts#L19)
