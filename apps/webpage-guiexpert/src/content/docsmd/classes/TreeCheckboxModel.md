[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeCheckboxModel

# Class: TreeCheckboxModel\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`any`\> |

## Implements

- [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](TreeCheckboxModel.md#constructor)

### Properties

- [allRootNodes](TreeCheckboxModel.md#allrootnodes)

### Methods

- [addCheckedRows](TreeCheckboxModel.md#addcheckedrows)
- [addSelectedRecursive](TreeCheckboxModel.md#addselectedrecursive)
- [areAllChildrenChecked](TreeCheckboxModel.md#areallchildrenchecked)
- [areAllChildrenUnchecked](TreeCheckboxModel.md#areallchildrenunchecked)
- [autoCheckParent](TreeCheckboxModel.md#autocheckparent)
- [checkAll](TreeCheckboxModel.md#checkall)
- [checkRow](TreeCheckboxModel.md#checkrow)
- [getCheckedRows](TreeCheckboxModel.md#getcheckedrows)
- [isRowChecked](TreeCheckboxModel.md#isrowchecked)
- [setCheckedRows](TreeCheckboxModel.md#setcheckedrows)

## Constructors

### constructor

• **new TreeCheckboxModel**\<`T`\>(`allRootNodes?`): [`TreeCheckboxModel`](TreeCheckboxModel.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`any`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allRootNodes` | `T`[] | `[]` |

#### Returns

[`TreeCheckboxModel`](TreeCheckboxModel.md)\<`T`\>

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L9)

## Properties

### allRootNodes

• `Protected` **allRootNodes**: `T`[] = `[]`

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L10)

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

[lib/table/checkbox/tree-checkbox-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L56)

___

### addSelectedRecursive

▸ **addSelectedRecursive**(`nodes`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `T`[] |
| `ret` | `T`[] |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:113](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L113)

___

### areAllChildrenChecked

▸ **areAllChildrenChecked**(`row`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

`boolean`

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:78](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L78)

___

### areAllChildrenUnchecked

▸ **areAllChildrenUnchecked**(`row`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

`boolean`

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:95](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L95)

___

### autoCheckParent

▸ **autoCheckParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| `T` |

#### Returns

`void`

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:62](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L62)

___

### checkAll

▸ **checkAll**(`_arr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_arr` | `T`[] |

#### Returns

`void`

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[checkAll](../interfaces/CheckboxModelIf.md#checkall)

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:24](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L24)

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

[lib/table/checkbox/tree-checkbox-model.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L14)

___

### getCheckedRows

▸ **getCheckedRows**(): `T`[]

#### Returns

`T`[]

#### Implementation of

[CheckboxModelIf](../interfaces/CheckboxModelIf.md).[getCheckedRows](../interfaces/CheckboxModelIf.md#getcheckedrows)

#### Defined in

[lib/table/checkbox/tree-checkbox-model.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L33)

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

[lib/table/checkbox/tree-checkbox-model.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L39)

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

[lib/table/checkbox/tree-checkbox-model.ts:51](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/checkbox/tree-checkbox-model.ts#L51)
