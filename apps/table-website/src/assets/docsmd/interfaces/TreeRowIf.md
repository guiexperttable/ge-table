[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeRowIf

# Interface: TreeRowIf\<T\>

Represents a (table) row in a tree structure. It's a container object for T with additional tree node information.@template T - The type of data stored in each row.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`TreeRow`](../classes/TreeRow.md)

## Table of contents

### Properties

- [checked](TreeRowIf.md#checked)
- [children](TreeRowIf.md#children)
- [data](TreeRowIf.md#data)
- [deep](TreeRowIf.md#deep)
- [expanded](TreeRowIf.md#expanded)
- [keep](TreeRowIf.md#keep)
- [parent](TreeRowIf.md#parent)
- [type](TreeRowIf.md#type)

## Properties

### checked

• **checked**: `boolean`

#### Defined in

[lib/table/data/common/tree-row-if.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L13)

___

### children

• **children**: `undefined` \| [`TreeRowIf`](TreeRowIf.md)\<`T`\>[]

#### Defined in

[lib/table/data/common/tree-row-if.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L10)

___

### data

• **data**: `T`

#### Defined in

[lib/table/data/common/tree-row-if.ts:8](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L8)

___

### deep

• **deep**: `number`

#### Defined in

[lib/table/data/common/tree-row-if.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L12)

___

### expanded

• **expanded**: `boolean`

#### Defined in

[lib/table/data/common/tree-row-if.ts:9](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L9)

___

### keep

• **keep**: `boolean`

#### Defined in

[lib/table/data/common/tree-row-if.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L14)

___

### parent

• **parent**: `undefined` \| [`TreeRowIf`](TreeRowIf.md)\<`T`\>

#### Defined in

[lib/table/data/common/tree-row-if.ts:11](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L11)

___

### type

• `Optional` **type**: ``""`` \| ``"TreeRow"``

#### Defined in

[lib/table/data/common/tree-row-if.ts:7](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/tree-row-if.ts#L7)
