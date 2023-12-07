[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventListenerIf

# Interface: EventListenerIf

Interface representing an event listener.

## Implemented by

- [`EventAdapter`](../classes/EventAdapter.md)

## Table of contents

### Methods

- [onCheckboxChanged](EventListenerIf.md#oncheckboxchanged)
- [onContextmenu](EventListenerIf.md#oncontextmenu)
- [onModelChanged](EventListenerIf.md#onmodelchanged)
- [onMouseClicked](EventListenerIf.md#onmouseclicked)
- [onMouseDragging](EventListenerIf.md#onmousedragging)
- [onMouseDraggingEnd](EventListenerIf.md#onmousedraggingend)
- [onMouseMoved](EventListenerIf.md#onmousemoved)

## Methods

### onCheckboxChanged

▸ **onCheckboxChanged**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:21](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L21)

___

### onContextmenu

▸ **onContextmenu**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](../classes/GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:11](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L11)

___

### onModelChanged

▸ **onModelChanged**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeModelChangeEvent`](../classes/GeModelChangeEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:23](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L23)

___

### onMouseClicked

▸ **onMouseClicked**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](../classes/GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:19](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L19)

___

### onMouseDragging

▸ **onMouseDragging**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](../classes/GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:17](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L17)

___

### onMouseDraggingEnd

▸ **onMouseDraggingEnd**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](../classes/GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:15](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L15)

___

### onMouseMoved

▸ **onMouseMoved**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](../classes/GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/event-listener.if.ts:13](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/event-listener.if.ts#L13)
