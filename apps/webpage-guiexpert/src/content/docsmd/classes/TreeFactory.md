[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeFactory

# Class: TreeFactory

## Table of contents

### Constructors

- [constructor](TreeFactory.md#constructor)

### Methods

- [buildTreeRow](TreeFactory.md#buildtreerow)
- [buildTreeRows](TreeFactory.md#buildtreerows)

## Constructors

### constructor

• **new TreeFactory**(): [`TreeFactory`](TreeFactory.md)

#### Returns

[`TreeFactory`](TreeFactory.md)

## Methods

### buildTreeRow

▸ **buildTreeRow**\<`T`\>(`data`, `childrenProperty?`, `parent?`, `deep?`, `deepMaxLimit?`): [`TreeRow`](TreeRow.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `childrenProperty` | `string` | `"children"` |
| `parent` | [`TreeRow`](TreeRow.md)\<`T`\> | `undefined` |
| `deep` | `number` | `0` |
| `deepMaxLimit` | `number` | `12` |

#### Returns

[`TreeRow`](TreeRow.md)\<`T`\>

#### Defined in

[lib/table/factory/tree-factory.ts:19](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/factory/tree-factory.ts#L19)

___

### buildTreeRows

▸ **buildTreeRows**\<`T`\>(`data`, `childrenProperty?`, `deepMaxLimit?`): [`TreeRow`](TreeRow.md)\<`T`\>[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T`[] | `undefined` |
| `childrenProperty` | `string` | `"children"` |
| `deepMaxLimit` | `number` | `12` |

#### Returns

[`TreeRow`](TreeRow.md)\<`T`\>[]

#### Defined in

[lib/table/factory/tree-factory.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/factory/tree-factory.ts#L6)
