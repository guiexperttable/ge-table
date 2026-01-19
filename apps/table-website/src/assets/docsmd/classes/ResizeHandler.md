[@guiexpert/table](../README.md) / [Exports](../modules.md) / ResizeHandler

# Class: ResizeHandler

Class representing a ResizeHandler.

**`Classdesc`**

Handles resizing of elements and calls a callback function on resize. These calls will be debounced with 500 ms.

## Table of contents

### Constructors

- [constructor](ResizeHandler.md#constructor)

### Properties

- [debounceDelay](ResizeHandler.md#debouncedelay)
- [tableScope](ResizeHandler.md#tablescope)

### Methods

- [handleResize](ResizeHandler.md#handleresize)

## Constructors

### constructor

• **new ResizeHandler**(`tableScope`, `debounceDelay?`): [`ResizeHandler`](ResizeHandler.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) | `undefined` |
| `debounceDelay` | `number` | `500` |

#### Returns

[`ResizeHandler`](ResizeHandler.md)

#### Defined in

[lib/table/resize-handler.ts:12](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/resize-handler.ts#L12)

## Properties

### debounceDelay

• `Protected` **debounceDelay**: `number` = `500`

#### Defined in

[lib/table/resize-handler.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/resize-handler.ts#L14)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/resize-handler.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/resize-handler.ts#L13)

## Methods

### handleResize

▸ **handleResize**(`entries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `ResizeObserverEntry`[] |

#### Returns

`void`

#### Defined in

[lib/table/resize-handler.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/resize-handler.ts#L20)
