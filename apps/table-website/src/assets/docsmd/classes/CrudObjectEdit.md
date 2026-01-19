[@guiexpert/table](../README.md) / [Exports](../modules.md) / CrudObjectEdit

# Class: CrudObjectEdit\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `any`\> |

## Table of contents

### Constructors

- [constructor](CrudObjectEdit.md#constructor)

### Properties

- [dialogTitle](CrudObjectEdit.md#dialogtitle)
- [idKey](CrudObjectEdit.md#idkey)
- [object](CrudObjectEdit.md#object)

### Methods

- [generateForm](CrudObjectEdit.md#generateform)
- [getCombinedKey](CrudObjectEdit.md#getcombinedkey)
- [getLabel](CrudObjectEdit.md#getlabel)
- [openDialog](CrudObjectEdit.md#opendialog)
- [setNestedValue](CrudObjectEdit.md#setnestedvalue)

## Constructors

### constructor

• **new CrudObjectEdit**\<`T`\>(`idKey`, `obj`, `dialogTitle?`): [`CrudObjectEdit`](CrudObjectEdit.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `any`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `idKey` | keyof `T` | `undefined` |
| `obj` | `T` | `undefined` |
| `dialogTitle` | `string` | `'Edit Item'` |

#### Returns

[`CrudObjectEdit`](CrudObjectEdit.md)\<`T`\>

#### Defined in

[lib/table/crud/crud-object-edit.ts:5](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L5)

## Properties

### dialogTitle

• **dialogTitle**: `string` = `'Edit Item'`

#### Defined in

[lib/table/crud/crud-object-edit.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L8)

___

### idKey

• `Private` **idKey**: keyof `T`

#### Defined in

[lib/table/crud/crud-object-edit.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L6)

___

### object

• `Private` **object**: `T`

#### Defined in

[lib/table/crud/crud-object-edit.ts:3](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L3)

## Methods

### generateForm

▸ **generateForm**(`obj`, `parentKey?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `parentKey` | `string` | `''` |

#### Returns

`string`

#### Defined in

[lib/table/crud/crud-object-edit.ts:51](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L51)

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

[lib/table/crud/crud-object-edit.ts:119](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L119)

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

[lib/table/crud/crud-object-edit.ts:123](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L123)

___

### openDialog

▸ **openDialog**(`onSave`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSave` | (`updatedObject`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[lib/table/crud/crud-object-edit.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L13)

___

### setNestedValue

▸ **setNestedValue**(`obj`, `path`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `path` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[lib/table/crud/crud-object-edit.ts:109](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-object-edit.ts#L109)
