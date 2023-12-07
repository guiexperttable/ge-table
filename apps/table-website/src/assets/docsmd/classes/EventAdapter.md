[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventAdapter

# Class: EventAdapter

EventAdapter class implements the EventListenerIf interface.
It provides empty implementations for all the event listener methods.

**`Implements`**

## Implements

- [`EventListenerIf`](../interfaces/EventListenerIf.md)

## Table of contents

### Constructors

- [constructor](EventAdapter.md#constructor)

### Methods

- [onCheckboxChanged](EventAdapter.md#oncheckboxchanged)
- [onContextmenu](EventAdapter.md#oncontextmenu)
- [onModelChanged](EventAdapter.md#onmodelchanged)
- [onMouseClicked](EventAdapter.md#onmouseclicked)
- [onMouseDragging](EventAdapter.md#onmousedragging)
- [onMouseDraggingEnd](EventAdapter.md#onmousedraggingend)
- [onMouseMoved](EventAdapter.md#onmousemoved)

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

[lib/table/event-adapter.ts:14](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L14)

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

[lib/table/event-adapter.ts:17](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L17)

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

[lib/table/event-adapter.ts:20](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L20)

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

[lib/table/event-adapter.ts:23](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L23)

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

[lib/table/event-adapter.ts:26](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L26)

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

[lib/table/event-adapter.ts:29](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L29)

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

[lib/table/event-adapter.ts:32](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-adapter.ts#L32)
