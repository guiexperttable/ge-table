[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeRow

# Class: TreeRow\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](TreeRow.md#constructor)

### Properties

- [checked](TreeRow.md#checked)
- [children](TreeRow.md#children)
- [orderData](TreeRow.md#orderData)
- [deep](TreeRow.md#deep)
- [expanded](TreeRow.md#expanded)
- [keep](TreeRow.md#keep)
- [parent](TreeRow.md#parent)

## Constructors

### constructor

• **new TreeRow**\<`T`\>(`orderData`, `expanded?`, `children`, `parent`, `deep?`, `checked?`, `keep?`): [`TreeRow`](TreeRow.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `orderData` | `T` | `undefined` |
| `expanded` | `boolean` | `true` |
| `children` | `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[] | `undefined` |
| `parent` | `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\> | `undefined` |
| `deep` | `number` | `0` |
| `checked` | `boolean` | `false` |
| `keep` | `boolean` | `false` |

#### Returns

[`TreeRow`](TreeRow.md)\<`T`\>

#### Defined in

[lib/table/orderData/common/tree-row.ts:5](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L5)

## Properties

### checked

• **checked**: `boolean` = `false`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[checked](../interfaces/TreeRowIf.md#checked)

#### Defined in

[lib/table/orderData/common/tree-row.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L11)

___

### children

• **children**: `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[]

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[children](../interfaces/TreeRowIf.md#children)

#### Defined in

[lib/table/orderData/common/tree-row.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L8)

___

### orderData

• **orderData**: `T`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[orderData](../interfaces/TreeRowIf.md#orderData)

#### Defined in

[lib/table/orderData/common/tree-row.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L6)

___

### deep

• **deep**: `number` = `0`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[deep](../interfaces/TreeRowIf.md#deep)

#### Defined in

[lib/table/orderData/common/tree-row.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L10)

___

### expanded

• **expanded**: `boolean` = `true`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[expanded](../interfaces/TreeRowIf.md#expanded)

#### Defined in

[lib/table/orderData/common/tree-row.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L7)

___

### keep

• **keep**: `boolean` = `false`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[keep](../interfaces/TreeRowIf.md#keep)

#### Defined in

[lib/table/orderData/common/tree-row.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L12)

___

### parent

• **parent**: `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[parent](../interfaces/TreeRowIf.md#parent)

#### Defined in

[lib/table/orderData/common/tree-row.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/common/tree-row.ts#L9)
