[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventCheckboxChangedHandler

# Class: EventCheckboxChangedHandler

EventAdapter class implements the EventListenerIf interface.
It provides empty implementations for all the event listener methods.

**`Implements`**

## Hierarchy

- [`EventAdapter`](EventAdapter.md)

  ↳ **`EventCheckboxChangedHandler`**

## Table of contents

### Constructors

- [constructor](EventCheckboxChangedHandler.md#constructor)

### Properties

- [onCheckboxChangedCallback](EventCheckboxChangedHandler.md#oncheckboxchangedcallback)

### Methods

- [onCheckboxChanged](EventCheckboxChangedHandler.md#oncheckboxchanged)
- [onContextmenu](EventCheckboxChangedHandler.md#oncontextmenu)
- [onFocusChanged](EventCheckboxChangedHandler.md#onfocuschanged)
- [onModelChanged](EventCheckboxChangedHandler.md#onmodelchanged)
- [onMouseClicked](EventCheckboxChangedHandler.md#onmouseclicked)
- [onMouseDragging](EventCheckboxChangedHandler.md#onmousedragging)
- [onMouseDraggingEnd](EventCheckboxChangedHandler.md#onmousedraggingend)
- [onMouseMoved](EventCheckboxChangedHandler.md#onmousemoved)
- [onSelectionChanged](EventCheckboxChangedHandler.md#onselectionchanged)

## Constructors

### constructor

• **new EventCheckboxChangedHandler**(`onCheckboxChangedCallback`): [`EventCheckboxChangedHandler`](EventCheckboxChangedHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onCheckboxChangedCallback` | (`evt`: `any`[]) => `void` |

#### Returns

[`EventCheckboxChangedHandler`](EventCheckboxChangedHandler.md)

#### Overrides

[EventAdapter](EventAdapter.md).[constructor](EventAdapter.md#constructor)

#### Defined in

[lib/table/event-checkbox-changed-handler.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-checkbox-changed-handler.ts#L6)

## Properties

### onCheckboxChangedCallback

• `Private` `Readonly` **onCheckboxChangedCallback**: (`evt`: `any`[]) => `void`

#### Type declaration

▸ (`evt`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any`[] |

##### Returns

`void`

#### Defined in

[lib/table/event-checkbox-changed-handler.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-checkbox-changed-handler.ts#L7)

## Methods

### onCheckboxChanged

▸ **onCheckboxChanged**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | `any`[] |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onCheckboxChanged](EventAdapter.md#oncheckboxchanged)

#### Defined in

[lib/table/event-adapter.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L16)

___

### onContextmenu

▸ **onContextmenu**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onContextmenu](EventAdapter.md#oncontextmenu)

#### Defined in

[lib/table/event-adapter.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L19)

___

### onFocusChanged

▸ **onFocusChanged**(`_model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_model` | [`FocusModelIf`](../interfaces/FocusModelIf.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onFocusChanged](EventAdapter.md#onfocuschanged)

#### Defined in

[lib/table/event-adapter.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L40)

___

### onModelChanged

▸ **onModelChanged**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeModelChangeEvent`](GeModelChangeEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onModelChanged](EventAdapter.md#onmodelchanged)

#### Defined in

[lib/table/event-adapter.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L22)

___

### onMouseClicked

▸ **onMouseClicked**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onMouseClicked](EventAdapter.md#onmouseclicked)

#### Defined in

[lib/table/event-adapter.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L25)

___

### onMouseDragging

▸ **onMouseDragging**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onMouseDragging](EventAdapter.md#onmousedragging)

#### Defined in

[lib/table/event-adapter.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L28)

___

### onMouseDraggingEnd

▸ **onMouseDraggingEnd**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onMouseDraggingEnd](EventAdapter.md#onmousedraggingend)

#### Defined in

[lib/table/event-adapter.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L31)

___

### onMouseMoved

▸ **onMouseMoved**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onMouseMoved](EventAdapter.md#onmousemoved)

#### Defined in

[lib/table/event-adapter.ts:34](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L34)

___

### onSelectionChanged

▸ **onSelectionChanged**(`_model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_model` | [`SelectionModelIf`](../interfaces/SelectionModelIf.md) |

#### Returns

`void`

#### Inherited from

[EventAdapter](EventAdapter.md).[onSelectionChanged](EventAdapter.md#onselectionchanged)

#### Defined in

[lib/table/event-adapter.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L37)
