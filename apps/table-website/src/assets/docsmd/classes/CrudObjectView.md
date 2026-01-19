[@guiexpert/table](../README.md) / [Exports](../modules.md) / CrudObjectView

# Class: CrudObjectView\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `any`\> |

## Table of contents

### Constructors

- [constructor](CrudObjectView.md#constructor)

### Properties

- [object](CrudObjectView.md#object)

### Methods

- [generateHtmlTable](CrudObjectView.md#generatehtmltable)
- [generateTableRows](CrudObjectView.md#generatetablerows)
- [getCombinedKey](CrudObjectView.md#getcombinedkey)
- [getLabel](CrudObjectView.md#getlabel)
- [openDialog](CrudObjectView.md#opendialog)

## Constructors

### constructor

• **new CrudObjectView**\<`T`\>(`obj`): [`CrudObjectView`](CrudObjectView.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`CrudObjectView`](CrudObjectView.md)\<`T`\>

#### Defined in

[lib/table/crud/crud-object-view.ts:5](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L5)

## Properties

### object

• `Private` **object**: `T`

#### Defined in

[lib/table/crud/crud-object-view.ts:3](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L3)

## Methods

### generateHtmlTable

▸ **generateHtmlTable**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`string`

#### Defined in

[lib/table/crud/crud-object-view.ts:39](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L39)

___

### generateTableRows

▸ **generateTableRows**(`obj`, `parentKey?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `parentKey` | `string` | `''` |

#### Returns

`string`

#### Defined in

[lib/table/crud/crud-object-view.ts:55](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L55)

___

### getCombinedKey

▸ **getCombinedKey**(`parentKey`, `property`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentKey` | `string` |
| `property` | `string` |

#### Returns

`string`

#### Defined in

[lib/table/crud/crud-object-view.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L31)

___

### getLabel

▸ **getLabel**(`combinedKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `combinedKey` | `string` |

#### Returns

`string`

#### Defined in

[lib/table/crud/crud-object-view.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L35)

___

### openDialog

▸ **openDialog**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/crud/crud-object-view.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-view.ts#L9)
