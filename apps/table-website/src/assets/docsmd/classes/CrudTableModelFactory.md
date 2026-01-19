[@guiexpert/table](../README.md) / [Exports](../modules.md) / CrudTableModelFactory

# Class: CrudTableModelFactory

## Implements

- [`ActionEventListenerIf`](../interfaces/ActionEventListenerIf.md)

## Table of contents

### Constructors

- [constructor](CrudTableModelFactory.md#constructor)

### Properties

- [bodyModel](CrudTableModelFactory.md#bodymodel)
- [crudOptions](CrudTableModelFactory.md#crudoptions)
- [listenActionEvent](CrudTableModelFactory.md#listenactionevent)
- [tableModel](CrudTableModelFactory.md#tablemodel)
- [tableOptions](CrudTableModelFactory.md#tableoptions)

### Methods

- [calcAutoColumnWidths](CrudTableModelFactory.md#calcautocolumnwidths)
- [createTableModel](CrudTableModelFactory.md#createtablemodel)
- [extractProperties](CrudTableModelFactory.md#extractproperties)
- [getPropertyValue](CrudTableModelFactory.md#getpropertyvalue)
- [getValueByT](CrudTableModelFactory.md#getvaluebyt)
- [onActionEvent](CrudTableModelFactory.md#onactionevent)
- [openDialogForCreate](CrudTableModelFactory.md#opendialogforcreate)

## Constructors

### constructor

• **new CrudTableModelFactory**(): [`CrudTableModelFactory`](CrudTableModelFactory.md)

#### Returns

[`CrudTableModelFactory`](CrudTableModelFactory.md)

## Properties

### bodyModel

• **bodyModel**: `undefined` \| [`AreaModelObjectArrayWithColumndefs`](AreaModelObjectArrayWithColumndefs.md)\<`any`\>

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L29)

___

### crudOptions

• **crudOptions**: [`CrudOptions`](CrudOptions.md)

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L31)

___

### listenActionEvent

• **listenActionEvent**: (`actionEvent`: [`ActionEventIf`](../interfaces/ActionEventIf.md)) => `void`

#### Type declaration

▸ (`actionEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `actionEvent` | [`ActionEventIf`](../interfaces/ActionEventIf.md) |

##### Returns

`void`

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L33)

___

### tableModel

• **tableModel**: `undefined` \| [`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L28)

___

### tableOptions

• **tableOptions**: `undefined` \| [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L30)

## Methods

### calcAutoColumnWidths

▸ **calcAutoColumnWidths**\<`T`\>(`rows`, `props`, `labels?`): `number`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rows` | `T`[] | `undefined` |
| `props` | `string`[] | `undefined` |
| `labels` | `string`[] | `props` |

#### Returns

`number`[]

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:194](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L194)

___

### createTableModel

▸ **createTableModel**\<`T`\>(`crudOptions`, `p`, `callback?`, `listenActionEvent?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `crudOptions` | [`CrudOptions`](CrudOptions.md) |
| `p` | `Partial`\<[`CreateTableModelPara`](../modules.md#createtablemodelpara)\> |
| `callback` | (`tableModelAndOptions`: [`TableModelAndOptionsIf`](../interfaces/TableModelAndOptionsIf.md)) => `void` |
| `listenActionEvent` | (`actionEvent`: [`ActionEventIf`](../interfaces/ActionEventIf.md)) => `void` |

#### Returns

`void`

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L37)

___

### extractProperties

▸ **extractProperties**(`obj`, `parentKey?`, `result?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `parentKey` | `string` | `''` |
| `result` | `string`[] | `[]` |

#### Returns

`string`[]

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:252](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L252)

___

### getPropertyValue

▸ **getPropertyValue**(`o`, `props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |
| `props` | `string`[] |

#### Returns

`any`

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:243](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L243)

___

### getValueByT

▸ **getValueByT**\<`T`\>(`t`, `property`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `property` | `string` |

#### Returns

`any`

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:236](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L236)

___

### onActionEvent

▸ **onActionEvent**(`actionEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionEvent` | [`ActionEventIf`](../interfaces/ActionEventIf.md) |

#### Returns

`void`

#### Implementation of

[ActionEventListenerIf](../interfaces/ActionEventListenerIf.md).[onActionEvent](../interfaces/ActionEventListenerIf.md#onactionevent)

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L121)

___

### openDialogForCreate

▸ **openDialogForCreate**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/crud/crud-table-model-factory.ts:114](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/crud-table-model-factory.ts#L114)
