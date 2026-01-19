[@guiexpert/table](../README.md) / [Exports](../modules.md) / CrudOptionsIf

# Interface: CrudOptionsIf

## Implemented by

- [`CrudOptions`](../classes/CrudOptions.md)

## Table of contents

### Properties

- [autoAddActionColumn](CrudOptionsIf.md#autoaddactioncolumn)
- [calcFixedRightColumnCount](CrudOptionsIf.md#calcfixedrightcolumncount)
- [deleteItem](CrudOptionsIf.md#deleteitem)
- [fetchItem](CrudOptionsIf.md#fetchitem)
- [fetchList](CrudOptionsIf.md#fetchlist)
- [getEmptyItem](CrudOptionsIf.md#getemptyitem)
- [getHeadersInit](CrudOptionsIf.md#getheadersinit)
- [getIdByObject](CrudOptionsIf.md#getidbyobject)
- [getIdKey](CrudOptionsIf.md#getidkey)
- [isActionDeleteEnabled](CrudOptionsIf.md#isactiondeleteenabled)
- [isActionDeleteVisible](CrudOptionsIf.md#isactiondeletevisible)
- [singleRowActions](CrudOptionsIf.md#singlerowactions)
- [tableActions](CrudOptionsIf.md#tableactions)
- [updateItem](CrudOptionsIf.md#updateitem)
- [urls](CrudOptionsIf.md#urls)

## Properties

### autoAddActionColumn

• `Optional` **autoAddActionColumn**: `boolean`

#### Defined in

[lib/table/crud/crud-options.if.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L23)

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

#### Defined in

[lib/table/crud/crud-options.if.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L21)

___

### deleteItem

• **deleteItem**: (`crudOptions`: [`CrudOptionsIf`](CrudOptionsIf.md), `id`: `any`) => `Promise`\<`any`\>

#### Type declaration

▸ (`crudOptions`, `id`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](CrudOptionsIf.md) |
| `id` | `any` |

##### Returns

`Promise`\<`any`\>

#### Defined in

[lib/table/crud/crud-options.if.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L16)

___

### fetchItem

• **fetchItem**: \<T\>(`crudOptions`: [`CrudOptionsIf`](CrudOptionsIf.md), `id`: `any`) => `Promise`\<`T`\>

#### Type declaration

▸ \<`T`\>(`crudOptions`, `id`): `Promise`\<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](CrudOptionsIf.md) |
| `id` | `any` |

##### Returns

`Promise`\<`T`\>

#### Defined in

[lib/table/crud/crud-options.if.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L14)

___

### fetchList

• **fetchList**: \<T\>(`crudOptions`: [`CrudOptionsIf`](CrudOptionsIf.md)) => `Promise`\<`T`[]\>

#### Type declaration

▸ \<`T`\>(`crudOptions`): `Promise`\<`T`[]\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](CrudOptionsIf.md) |

##### Returns

`Promise`\<`T`[]\>

#### Defined in

[lib/table/crud/crud-options.if.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L13)

___

### getEmptyItem

• **getEmptyItem**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[lib/table/crud/crud-options.if.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L20)

___

### getHeadersInit

• `Optional` **getHeadersInit**: () => `HeadersInit`

#### Type declaration

▸ (): `HeadersInit`

##### Returns

`HeadersInit`

#### Defined in

[lib/table/crud/crud-options.if.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L7)

___

### getIdByObject

• **getIdByObject**: \<T\>(`o`: `T`) => `any`

#### Type declaration

▸ \<`T`\>(`o`): `any`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

##### Returns

`any`

#### Defined in

[lib/table/crud/crud-options.if.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L19)

___

### getIdKey

• **getIdKey**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[lib/table/crud/crud-options.if.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L18)

___

### isActionDeleteEnabled

• `Optional` **isActionDeleteEnabled**: `boolean`

#### Defined in

[lib/table/crud/crud-options.if.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L25)

___

### isActionDeleteVisible

• `Optional` **isActionDeleteVisible**: `boolean`

#### Defined in

[lib/table/crud/crud-options.if.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L24)

___

### singleRowActions

• **singleRowActions**: [`CrudAction`](../classes/CrudAction.md)[]

#### Defined in

[lib/table/crud/crud-options.if.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L10)

___

### tableActions

• **tableActions**: [`CrudAction`](../classes/CrudAction.md)[]

#### Defined in

[lib/table/crud/crud-options.if.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L11)

___

### updateItem

• **updateItem**: (`crudOptions`: [`CrudOptionsIf`](CrudOptionsIf.md), `id`: `any`, `item`: `any`) => `Promise`\<`any`\>

#### Type declaration

▸ (`crudOptions`, `id`, `item`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptionsIf`](CrudOptionsIf.md) |
| `id` | `any` |
| `item` | `any` |

##### Returns

`Promise`\<`any`\>

#### Defined in

[lib/table/crud/crud-options.if.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L15)

___

### urls

• **urls**: [`UrlsIf`](UrlsIf.md)

#### Defined in

[lib/table/crud/crud-options.if.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-options.if.ts#L9)
