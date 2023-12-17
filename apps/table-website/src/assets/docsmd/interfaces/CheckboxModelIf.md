[@guiexpert/table](../README.md) / [Exports](../modules.md) / CheckboxModelIf

# Interface: CheckboxModelIf\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`CheckboxModel`](../classes/CheckboxModel.md)
- [`TreeCheckboxModel`](../classes/TreeCheckboxModel.md)

## Table of contents

### Methods

- [addCheckedRows](CheckboxModelIf.md#addcheckedrows)
- [checkAll](CheckboxModelIf.md#checkall)
- [checkRow](CheckboxModelIf.md#checkrow)
- [getCheckedRows](CheckboxModelIf.md#getcheckedrows)
- [isRowChecked](CheckboxModelIf.md#isrowchecked)
- [setCheckedRows](CheckboxModelIf.md#setcheckedrows)

## Methods

### addCheckedRows

▸ **addCheckedRows**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:9](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L9)

___

### checkAll

▸ **checkAll**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L15)

___

### checkRow

▸ **checkRow**(`row`, `check`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |
| `check` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:11](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L11)

___

### getCheckedRows

▸ **getCheckedRows**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:5](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L5)

___

### isRowChecked

▸ **isRowChecked**(`row`): [`CheckedType`](../modules.md#checkedtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

[`CheckedType`](../modules.md#checkedtype)

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L13)

___

### setCheckedRows

▸ **setCheckedRows**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/checkbox-model.if.ts:7](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/checkbox/checkbox-model.if.ts#L7)
