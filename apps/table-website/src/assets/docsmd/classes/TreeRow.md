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
- [data](TreeRow.md#data)
- [deep](TreeRow.md#deep)
- [expanded](TreeRow.md#expanded)
- [keep](TreeRow.md#keep)
- [parent](TreeRow.md#parent)
- [type](TreeRow.md#type)

## Constructors

### constructor

• **new TreeRow**\<`T`\>(`data`, `expanded?`, `children`, `parent`, `deep?`, `checked?`, `keep?`): [`TreeRow`](TreeRow.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `expanded` | `boolean` | `true` |
| `children` | `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[] | `undefined` |
| `parent` | `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\> | `undefined` |
| `deep` | `number` | `0` |
| `checked` | `boolean` | `false` |
| `keep` | `boolean` | `false` |

#### Returns

[`TreeRow`](TreeRow.md)\<`T`\>

#### Defined in

[lib/table/data/common/tree-row.ts:7](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L7)

## Properties

### checked

• **checked**: `boolean` = `false`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[checked](../interfaces/TreeRowIf.md#checked)

#### Defined in

[lib/table/data/common/tree-row.ts:13](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L13)

___

### children

• **children**: `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>[]

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[children](../interfaces/TreeRowIf.md#children)

#### Defined in

[lib/table/data/common/tree-row.ts:10](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L10)

___

### data

• **data**: `T`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[data](../interfaces/TreeRowIf.md#data)

#### Defined in

[lib/table/data/common/tree-row.ts:8](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L8)

___

### deep

• **deep**: `number` = `0`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[deep](../interfaces/TreeRowIf.md#deep)

#### Defined in

[lib/table/data/common/tree-row.ts:12](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L12)

___

### expanded

• **expanded**: `boolean` = `true`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[expanded](../interfaces/TreeRowIf.md#expanded)

#### Defined in

[lib/table/data/common/tree-row.ts:9](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L9)

___

### keep

• **keep**: `boolean` = `false`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[keep](../interfaces/TreeRowIf.md#keep)

#### Defined in

[lib/table/data/common/tree-row.ts:14](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L14)

___

### parent

• **parent**: `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`T`\>

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[parent](../interfaces/TreeRowIf.md#parent)

#### Defined in

[lib/table/data/common/tree-row.ts:11](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L11)

___

### type

• **type**: ``""`` \| ``"TreeRow"`` = `'TreeRow'`

#### Implementation of

[TreeRowIf](../interfaces/TreeRowIf.md).[type](../interfaces/TreeRowIf.md#type)

#### Defined in

[lib/table/data/common/tree-row.ts:5](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/common/tree-row.ts#L5)
