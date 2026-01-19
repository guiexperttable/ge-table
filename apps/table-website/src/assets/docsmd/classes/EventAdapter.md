[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventAdapter

# Class: EventAdapter

EventAdapter class implements the EventListenerIf interface.
It provides empty implementations for all the event listener methods.

**`Implements`**

## Hierarchy

- **`EventAdapter`**

  ↳ [`EventCheckboxChangedHandler`](EventCheckboxChangedHandler.md)

## Implements

- [`EventListenerIf`](../interfaces/EventListenerIf.md)

## Table of contents

### Constructors

- [constructor](EventAdapter.md#constructor)

### Methods

- [onCheckboxChanged](EventAdapter.md#oncheckboxchanged)
- [onContextmenu](EventAdapter.md#oncontextmenu)
- [onFocusChanged](EventAdapter.md#onfocuschanged)
- [onModelChanged](EventAdapter.md#onmodelchanged)
- [onMouseClicked](EventAdapter.md#onmouseclicked)
- [onMouseDragging](EventAdapter.md#onmousedragging)
- [onMouseDraggingEnd](EventAdapter.md#onmousedraggingend)
- [onMouseMoved](EventAdapter.md#onmousemoved)
- [onSelectionChanged](EventAdapter.md#onselectionchanged)

## Constructors

### constructor

• **new EventAdapter**(): [`EventAdapter`](EventAdapter.md)

#### Returns

[`EventAdapter`](EventAdapter.md)

## Methods

### onCheckboxChanged

▸ **onCheckboxChanged**(`_evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_evt` | `any`[] |

#### Returns

`void`

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onCheckboxChanged](../interfaces/EventListenerIf.md#oncheckboxchanged)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onContextmenu](../interfaces/EventListenerIf.md#oncontextmenu)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onFocusChanged](../interfaces/EventListenerIf.md#onfocuschanged)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onModelChanged](../interfaces/EventListenerIf.md#onmodelchanged)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onMouseClicked](../interfaces/EventListenerIf.md#onmouseclicked)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onMouseDragging](../interfaces/EventListenerIf.md#onmousedragging)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onMouseDraggingEnd](../interfaces/EventListenerIf.md#onmousedraggingend)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onMouseMoved](../interfaces/EventListenerIf.md#onmousemoved)

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

#### Implementation of

[EventListenerIf](../interfaces/EventListenerIf.md).[onSelectionChanged](../interfaces/EventListenerIf.md#onselectionchanged)

#### Defined in

[lib/table/event-adapter.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-adapter.ts#L37)
