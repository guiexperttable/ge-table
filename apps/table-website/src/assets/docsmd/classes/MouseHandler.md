[@guiexpert/table](../README.md) / [Exports](../modules.md) / MouseHandler

# Class: MouseHandler

Class representing a MouseHandler.

## Table of contents

### Constructors

- [constructor](MouseHandler.md#constructor)

### Properties

- [dragging](MouseHandler.md#dragging)
- [expandedAll](MouseHandler.md#expandedall)
- [geMouseEvent](MouseHandler.md#gemouseevent)
- [geMouseEventOld](MouseHandler.md#gemouseeventold)
- [mouseDown](MouseHandler.md#mousedown)
- [mouseEvent](MouseHandler.md#mouseevent)
- [startMouseEvent](MouseHandler.md#startmouseevent)
- [tableScope](MouseHandler.md#tablescope)

### Methods

- [getArrowColumnIndex](MouseHandler.md#getarrowcolumnindex)
- [mouseDraggingEndOnFrame](MouseHandler.md#mousedraggingendonframe)
- [mouseDraggingOnFrame](MouseHandler.md#mousedraggingonframe)
- [mouseMoveOnFrame](MouseHandler.md#mousemoveonframe)
- [onContextmenu](MouseHandler.md#oncontextmenu)
- [onHostElementClicked](MouseHandler.md#onhostelementclicked)
- [onHostElementDblClicked](MouseHandler.md#onhostelementdblclicked)
- [onMouseDown](MouseHandler.md#onmousedown)
- [onMouseMove](MouseHandler.md#onmousemove)
- [onMouseUp](MouseHandler.md#onmouseup)
- [publishGeMouseEvent](MouseHandler.md#publishgemouseevent)
- [updateCollapsedExpandedState](MouseHandler.md#updatecollapsedexpandedstate)

## Constructors

### constructor

• **new MouseHandler**(`tableScope`): [`MouseHandler`](MouseHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`MouseHandler`](MouseHandler.md)

#### Defined in

[lib/table/mouse-handler.ts:24](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L24)

## Properties

### dragging

• `Private` **dragging**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:22](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L22)

___

### expandedAll

• `Private` **expandedAll**: `boolean` = `true`

#### Defined in

[lib/table/mouse-handler.ts:20](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L20)

___

### geMouseEvent

• `Optional` **geMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:17](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L17)

___

### geMouseEventOld

• `Optional` **geMouseEventOld**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:18](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L18)

___

### mouseDown

• `Private` **mouseDown**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:21](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L21)

___

### mouseEvent

• `Optional` **mouseEvent**: `MouseEvent`

#### Defined in

[lib/table/mouse-handler.ts:15](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L15)

___

### startMouseEvent

• `Optional` **startMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:16](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L16)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/mouse-handler.ts:25](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L25)

## Methods

### getArrowColumnIndex

▸ **getArrowColumnIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/mouse-handler.ts:210](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L210)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:256](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L256)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:245](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L245)

___

### mouseMoveOnFrame

▸ **mouseMoveOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:268](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L268)

___

### onContextmenu

▸ **onContextmenu**(`evt`): `void`

Handles the "contextmenu" event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `MouseEvent` | The mouse event object. |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:51](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L51)

___

### onHostElementClicked

▸ **onHostElementClicked**(`event`): `void`

Handles the click event on the host element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | The click event. |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:65](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L65)

___

### onHostElementDblClicked

▸ **onHostElementDblClicked**(`event`): `void`

Handles the double click event on the host element.
This method is private.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | The double click event. |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:117](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L117)

___

### onMouseDown

▸ **onMouseDown**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:216](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L216)

___

### onMouseMove

▸ **onMouseMove**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:224](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L224)

___

### onMouseUp

▸ **onMouseUp**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:235](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L235)

___

### publishGeMouseEvent

▸ **publishGeMouseEvent**(`event`, `clickCount`): `void`

Publishes a GeMouseEvent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | The MouseEvent to publish. |
| `clickCount` | `number` | The number of clicks for the GeMouseEvent. |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:176](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L176)

___

### updateCollapsedExpandedState

▸ **updateCollapsedExpandedState**(`tr`): `void`

Update the collapsed/expanded state of a tree row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tr` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`any`\> | The tree row object. |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:193](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/mouse-handler.ts#L193)
