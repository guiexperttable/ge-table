[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventListenerIf

# Interface: EventListenerIf

Interface representing an event listener.

## Hierarchy

- [`EventFocusChangedListenerIf`](EventFocusChangedListenerIf.md)

- [`EventSelectionChangedListenerIf`](EventSelectionChangedListenerIf.md)

  ↳ **`EventListenerIf`**

## Implemented by

- [`EventAdapter`](../classes/EventAdapter.md)

## Table of contents

### Methods

- [onCheckboxChanged](EventListenerIf.md#oncheckboxchanged)
- [onContextmenu](EventListenerIf.md#oncontextmenu)
- [onFocusChanged](EventListenerIf.md#onfocuschanged)
- [onModelChanged](EventListenerIf.md#onmodelchanged)
- [onMouseClicked](EventListenerIf.md#onmouseclicked)
- [onMouseDragging](EventListenerIf.md#onmousedragging)
- [onMouseDraggingEnd](EventListenerIf.md#onmousedraggingend)
- [onMouseMoved](EventListenerIf.md#onmousemoved)
- [onSelectionChanged](EventListenerIf.md#onselectionchanged)

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

[lib/table/event-listener.if.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L25)

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

[lib/table/event-listener.if.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L15)

___

### onFocusChanged

▸ **onFocusChanged**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FocusModelIf`](FocusModelIf.md) |

#### Returns

`void`

#### Overrides

[EventFocusChangedListenerIf](EventFocusChangedListenerIf.md).[onFocusChanged](EventFocusChangedListenerIf.md#onfocuschanged)

#### Defined in

[lib/table/event-listener.if.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L31)

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

[lib/table/event-listener.if.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L27)

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

[lib/table/event-listener.if.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L23)

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

[lib/table/event-listener.if.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L21)

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

[lib/table/event-listener.if.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L19)

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

[lib/table/event-listener.if.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L17)

___

### onSelectionChanged

▸ **onSelectionChanged**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`SelectionModelIf`](SelectionModelIf.md) |

#### Returns

`void`

#### Overrides

[EventSelectionChangedListenerIf](EventSelectionChangedListenerIf.md).[onSelectionChanged](EventSelectionChangedListenerIf.md#onselectionchanged)

#### Defined in

[lib/table/event-listener.if.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/event-listener.if.ts#L29)
