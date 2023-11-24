[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeMouseEvent

# Class: GeMouseEvent

## Table of contents

### Constructors

- [constructor](GeMouseEvent.md#constructor)

### Properties

- [action](GeMouseEvent.md#action)
- [areaIdent](GeMouseEvent.md#areaident)
- [clickCount](GeMouseEvent.md#clickcount)
- [columnIndex](GeMouseEvent.md#columnindex)
- [columnLeft](GeMouseEvent.md#columnleft)
- [draggingX](GeMouseEvent.md#draggingx)
- [draggingY](GeMouseEvent.md#draggingy)
- [originalEvent](GeMouseEvent.md#originalevent)
- [rowIndex](GeMouseEvent.md#rowindex)
- [rowTop](GeMouseEvent.md#rowtop)
- [sideIdent](GeMouseEvent.md#sideident)

### Methods

- [clone](GeMouseEvent.md#clone)

## Constructors

### constructor

• **new GeMouseEvent**(`rowIndex?`, `rowTop?`, `columnIndex?`, `columnLeft?`, `areaIdent?`, `sideIdent?`, `originalEvent?`, `clickCount?`, `draggingX?`, `draggingY?`, `action?`): [`GeMouseEvent`](GeMouseEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rowIndex` | `number` | `-1` |
| `rowTop` | `number` | `-1` |
| `columnIndex` | `number` | `-1` |
| `columnLeft` | `number` | `-1` |
| `areaIdent?` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `sideIdent?` | [`SideIdent`](../modules.md#sideident) | `undefined` |
| `originalEvent?` | `MouseEvent` | `undefined` |
| `clickCount` | `number` | `0` |
| `draggingX` | `number` | `0` |
| `draggingY` | `number` | `0` |
| `action` | ``null`` \| `string` | `""` |

#### Returns

[`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L7)

## Properties

### action

• **action**: ``null`` \| `string` = `""`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:18](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L18)

___

### areaIdent

• `Optional` **areaIdent**: [`AreaIdent`](../modules.md#areaident)

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L12)

___

### clickCount

• **clickCount**: `number` = `0`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L15)

___

### columnIndex

• **columnIndex**: `number` = `-1`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L10)

___

### columnLeft

• **columnLeft**: `number` = `-1`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L11)

___

### draggingX

• **draggingX**: `number` = `0`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L16)

___

### draggingY

• **draggingY**: `number` = `0`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L17)

___

### originalEvent

• `Optional` **originalEvent**: `MouseEvent`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L14)

___

### rowIndex

• **rowIndex**: `number` = `-1`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L8)

___

### rowTop

• **rowTop**: `number` = `-1`

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L9)

___

### sideIdent

• `Optional` **sideIdent**: [`SideIdent`](../modules.md#sideident)

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L13)

## Methods

### clone

▸ **clone**(): [`GeMouseEvent`](GeMouseEvent.md)

#### Returns

[`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/data/common/event/ge-mouse-event.ts:22](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-mouse-event.ts#L22)
