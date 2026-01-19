[@guiexpert/table](../README.md) / [Exports](../modules.md) / CheckboxModel

# Class: CheckboxModel\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](CheckboxModel.md#constructor)

### Properties

- [checkedRows](CheckboxModel.md#checkedrows)

### Methods

- [addCheckedRows](CheckboxModel.md#addcheckedrows)
- [checkAll](CheckboxModel.md#checkall)
- [checkRow](CheckboxModel.md#checkrow)
- [getCheckedRows](CheckboxModel.md#getcheckedrows)
- [isRowChecked](CheckboxModel.md#isrowchecked)
- [removeSelectedRow](CheckboxModel.md#removeselectedrow)
- [setCheckedRows](CheckboxModel.md#setcheckedrows)

## Constructors

### constructor

• **new CheckboxModel**\<`T`\>(): [`CheckboxModel`](CheckboxModel.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`CheckboxModel`](CheckboxModel.md)\<`T`\>

## Properties

### checkedRows

• `Protected` **checkedRows**: `T`[] = `[]`

#### Defined in

[lib/table/checkbox/checkbox-model.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L6)

## Methods

### addCheckedRows

▸ **addCheckedRows**(`rows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `T`[] |

#### Returns

`void`

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[addCheckedRows](../interfaces/CheckboxModelIf.md#addcheckedrows)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L17)

___

### checkAll

▸ **checkAll**(`_rows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rows` | `T`[] |

#### Returns

`void`

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[checkAll](../interfaces/CheckboxModelIf.md#checkall)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L49)

___

### checkRow

▸ **checkRow**(`row`, `sel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |
| `sel` | `boolean` |

#### Returns

`void`

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[checkRow](../interfaces/CheckboxModelIf.md#checkrow)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L28)

___

### getCheckedRows

▸ **getCheckedRows**(): `T`[]

#### Returns

`T`[]

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[getCheckedRows](../interfaces/CheckboxModelIf.md#getcheckedrows)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L8)

___

### isRowChecked

▸ **isRowChecked**(`row`): [`CheckedType`](../modules.md#checkedtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

[`CheckedType`](../modules.md#checkedtype)

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[isRowChecked](../interfaces/CheckboxModelIf.md#isrowchecked)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L42)

___

### removeSelectedRow

▸ **removeSelectedRow**(`row`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/checkbox-model.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L53)

___

### setCheckedRows

▸ **setCheckedRows**(`rows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `T`[] |

#### Returns

`void`

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[setCheckedRows](../interfaces/CheckboxModelIf.md#setcheckedrows)

#### Defined in

[lib/table/checkbox/checkbox-model.ts:12](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/checkbox/checkbox-model.ts#L12)
