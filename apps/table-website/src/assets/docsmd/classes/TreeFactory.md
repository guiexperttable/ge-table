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

▸ **buildTreeRow**\<`T`\>(`data`, `childrenProperty?`, `parent?`, `deep?`, `deepMaxLimit?`): [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `childrenProperty` | `string` | `"children"` |
| `parent` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\> | `undefined` |
| `deep` | `number` | `0` |
| `deepMaxLimit` | `number` | `12` |

#### Returns

[`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>

#### Defined in

[lib/table/factory/tree-factory.ts:20](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/factory/tree-factory.ts#L20)

___

### buildTreeRows

▸ **buildTreeRows**\<`T`\>(`data`, `childrenProperty?`, `deepMaxLimit?`): [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[]

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

[`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[]

#### Defined in

[lib/table/factory/tree-factory.ts:7](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/factory/tree-factory.ts#L7)
