[@guiexpert/table](../README.md) / [Exports](../modules.md) / CrudOptions

# Class: CrudOptions

## Implements

- [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md)

## Table of contents

### Constructors

- [constructor](CrudOptions.md#constructor)

### Properties

- [autoAddActionColumn](CrudOptions.md#autoaddactioncolumn)
- [calcFixedRightColumnCount](CrudOptions.md#calcfixedrightcolumncount)
- [columnWidths](CrudOptions.md#columnwidths)
- [getEmptyItem](CrudOptions.md#getemptyitem)
- [getHeadersInit](CrudOptions.md#getheadersinit)
- [getIdKey](CrudOptions.md#getidkey)
- [singleRowActions](CrudOptions.md#singlerowactions)
- [tableActions](CrudOptions.md#tableactions)
- [urls](CrudOptions.md#urls)

### Methods

- [createItem](CrudOptions.md#createitem)
- [deleteItem](CrudOptions.md#deleteitem)
- [fetchItem](CrudOptions.md#fetchitem)
- [fetchList](CrudOptions.md#fetchlist)
- [getIdByObject](CrudOptions.md#getidbyobject)
- [updateItem](CrudOptions.md#updateitem)

## Constructors

### constructor

• **new CrudOptions**(): [`CrudOptions`](CrudOptions.md)

#### Returns

[`CrudOptions`](CrudOptions.md)

## Properties

### autoAddActionColumn

• **autoAddActionColumn**: `boolean` = `true`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[autoAddActionColumn](../interfaces/CrudOptionsIf.md#autoaddactioncolumn)

#### Defined in

[lib/table/crud/crud-options.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L27)

___

### calcFixedRightColumnCount

• **calcFixedRightColumnCount**: (`columnCount`: `number`) => `number`

#### Type declaration

▸ (`columnCount`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `columnCount` | `number` |

##### Returns

`number`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[calcFixedRightColumnCount](../interfaces/CrudOptionsIf.md#calcfixedrightcolumncount)

#### Defined in

[lib/table/crud/crud-options.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L30)

___

### columnWidths

• **columnWidths**: [`ColumnWidthsIf`](../interfaces/ColumnWidthsIf.md)

#### Defined in

[lib/table/crud/crud-options.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L28)

___

### getEmptyItem

• **getEmptyItem**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[getEmptyItem](../interfaces/CrudOptionsIf.md#getemptyitem)

#### Defined in

[lib/table/crud/crud-options.ts:111](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L111)

___

### getHeadersInit

• **getHeadersInit**: () => `HeadersInit`

#### Type declaration

▸ (): `HeadersInit`

##### Returns

`HeadersInit`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[getHeadersInit](../interfaces/CrudOptionsIf.md#getheadersinit)

#### Defined in

[lib/table/crud/crud-options.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L32)

___

### getIdKey

• **getIdKey**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[getIdKey](../interfaces/CrudOptionsIf.md#getidkey)

#### Defined in

[lib/table/crud/crud-options.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L36)

___

### singleRowActions

• **singleRowActions**: [`CrudAction`](CrudAction.md)[]

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[singleRowActions](../interfaces/CrudOptionsIf.md#singlerowactions)

#### Defined in

[lib/table/crud/crud-options.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L16)

___

### tableActions

• **tableActions**: [`CrudAction`](CrudAction.md)[]

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[tableActions](../interfaces/CrudOptionsIf.md#tableactions)

#### Defined in

[lib/table/crud/crud-options.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L23)

___

### urls

• **urls**: [`UrlsIf`](../interfaces/UrlsIf.md)

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[urls](../interfaces/CrudOptionsIf.md#urls)

#### Defined in

[lib/table/crud/crud-options.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L10)

## Methods

### createItem

▸ **createItem**(`crudOptions`, `item`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md) |
| `item` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[lib/table/crud/crud-options.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L84)

___

### deleteItem

▸ **deleteItem**(`crudOptions`, `id`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md) |
| `id` | `any` |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[deleteItem](../interfaces/CrudOptionsIf.md#deleteitem)

#### Defined in

[lib/table/crud/crud-options.ts:98](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L98)

___

### fetchItem

▸ **fetchItem**\<`T`\>(`crudOptions`, `id`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md) |
| `id` | `any` |

#### Returns

`Promise`\<`T`\>

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[fetchItem](../interfaces/CrudOptionsIf.md#fetchitem)

#### Defined in

[lib/table/crud/crud-options.ts:57](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L57)

___

### fetchList

▸ **fetchList**\<`T`\>(`crudOptions`): `Promise`\<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md) |

#### Returns

`Promise`\<`T`[]\>

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[fetchList](../interfaces/CrudOptionsIf.md#fetchlist)

#### Defined in

[lib/table/crud/crud-options.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L46)

___

### getIdByObject

▸ **getIdByObject**\<`T`\>(`o`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`any`

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[getIdByObject](../interfaces/CrudOptionsIf.md#getidbyobject)

#### Defined in

[lib/table/crud/crud-options.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L38)

___

### updateItem

▸ **updateItem**(`crudOptions`, `id`, `item`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](../interfaces/CrudOptionsIf.md) |
| `id` | `any` |
| `item` | `any` |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[CrudOptionsIf](../interfaces/CrudOptionsIf.md).[updateItem](../interfaces/CrudOptionsIf.md#updateitem)

#### Defined in

[lib/table/crud/crud-options.ts:70](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.ts#L70)
