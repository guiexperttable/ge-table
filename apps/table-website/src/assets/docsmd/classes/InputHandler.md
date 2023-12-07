[@guiexpert/table](../README.md) / [Exports](../modules.md) / InputHandler

# Class: InputHandler

Class representing an input handler for table input fields (HTMLSelectElement, HTMLTextAreaElement, HTMLInputElement).

**`Member Of`**

module:input

## Table of contents

### Constructors

- [constructor](InputHandler.md#constructor)

### Properties

- [tableScope](InputHandler.md#tablescope)

### Methods

- [onHostElementChanged](InputHandler.md#onhostelementchanged)

## Constructors

### constructor

• **new InputHandler**(`tableScope`): [`InputHandler`](InputHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`InputHandler`](InputHandler.md)

#### Defined in

[lib/table/input-handler.ts:13](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/input-handler.ts#L13)

## Properties

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/input-handler.ts:14](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/input-handler.ts#L14)

## Methods

### onHostElementChanged

▸ **onHostElementChanged**(`event`): `void`

Handles the onHostElementChanged event.
In case that the element is an input field, the tableScope.updateModelValueAfterEdit() method is triggered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Event` | The event object. |

#### Returns

`void`

#### Defined in

[lib/table/input-handler.ts:28](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/input-handler.ts#L28)
