[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeKeyEvent

# Class: GeKeyEvent

Represents a keyboard event.

## Table of contents

### Constructors

- [constructor](GeKeyEvent.md#constructor)

### Properties

- [originalEvent](GeKeyEvent.md#originalevent)
- [status](GeKeyEvent.md#status)

## Constructors

### constructor

• **new GeKeyEvent**(`status?`, `originalEvent?`): [`GeKeyEvent`](GeKeyEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `status` | ``"down"`` \| ``"up"`` | `"down"` |
| `originalEvent?` | `KeyboardEvent` | `undefined` |

#### Returns

[`GeKeyEvent`](GeKeyEvent.md)

#### Defined in

[lib/table/data/common/event/ge-key-event.ts:8](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/event/ge-key-event.ts#L8)

## Properties

### originalEvent

• `Optional` **originalEvent**: `KeyboardEvent`

#### Defined in

[lib/table/data/common/event/ge-key-event.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/event/ge-key-event.ts#L10)

___

### status

• **status**: ``"down"`` \| ``"up"`` = `"down"`

#### Defined in

[lib/table/data/common/event/ge-key-event.ts:9](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/event/ge-key-event.ts#L9)
