[@guiexpert/table](../README.md) / [Exports](../modules.md) / Icon

# Class: Icon

Represents an Icon with content, css style and css classes.

Example:

new Icon(
   ">",
   "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
   ["gt-table-tree-arrow-expanded"]
)

## Implements

- [`IconIf`](../interfaces/IconIf.md)

## Table of contents

### Constructors

- [constructor](Icon.md#constructor)

### Properties

- [classes](Icon.md#classes)
- [content](Icon.md#content)
- [style](Icon.md#style)

## Constructors

### constructor

• **new Icon**(`content?`, `style?`, `classes?`): [`Icon`](Icon.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `string` | `">"` |
| `style` | `string` | `""` |
| `classes` | `string`[] | `[]` |

#### Returns

[`Icon`](Icon.md)

#### Defined in

[lib/table/data/options/icon.ts:4](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/icon.ts#L4)

## Properties

### classes

• **classes**: `string`[] = `[]`

#### Implementation of

[IconIf](../interfaces/IconIf.md).[classes](../interfaces/IconIf.md#classes)

#### Defined in

[lib/table/data/options/icon.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/icon.ts#L7)

___

### content

• **content**: `string` = `">"`

#### Implementation of

[IconIf](../interfaces/IconIf.md).[content](../interfaces/IconIf.md#content)

#### Defined in

[lib/table/data/options/icon.ts:5](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/icon.ts#L5)

___

### style

• **style**: `string` = `""`

#### Implementation of

[IconIf](../interfaces/IconIf.md).[style](../interfaces/IconIf.md#style)

#### Defined in

[lib/table/data/options/icon.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/icon.ts#L6)
