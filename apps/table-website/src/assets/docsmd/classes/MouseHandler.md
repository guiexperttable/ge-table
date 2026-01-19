[@guiexpert/table](../README.md) / [Exports](../modules.md) / MouseHandler

# Class: MouseHandler

Class representing a MouseHandler.

## Table of contents

### Constructors

- [constructor](MouseHandler.md#constructor)

### Properties

- [doubleClickDelay](MouseHandler.md#doubleclickdelay)
- [dragging](MouseHandler.md#dragging)
- [expandedAll](MouseHandler.md#expandedall)
- [geMouseEvent](MouseHandler.md#gemouseevent)
- [geMouseEventOld](MouseHandler.md#gemouseeventold)
- [lastClicked](MouseHandler.md#lastclicked)
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

[lib/table/mouse-handler.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L32)

## Properties

### doubleClickDelay

• **doubleClickDelay**: `number` = `500`

Represents the delay in milliseconds between two consecutive double clicks.

#### Defined in

[lib/table/mouse-handler.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L21)

___

### dragging

• `Private` **dragging**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L30)

___

### expandedAll

• `Private` **expandedAll**: `boolean` = `true`

#### Defined in

[lib/table/mouse-handler.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L28)

___

### geMouseEvent

• `Optional` **geMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L25)

___

### geMouseEventOld

• `Optional` **geMouseEventOld**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:26](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L26)

___

### lastClicked

• `Private` **lastClicked**: `number` = `0`

#### Defined in

[lib/table/mouse-handler.ts:66](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L66)

___

### mouseDown

• `Private` **mouseDown**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L29)

___

### mouseEvent

• `Optional` **mouseEvent**: `MouseEvent`

#### Defined in

[lib/table/mouse-handler.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L23)

___

### startMouseEvent

• `Optional` **startMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L24)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/mouse-handler.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L33)

## Methods

### getArrowColumnIndex

▸ **getArrowColumnIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/mouse-handler.ts:238](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L238)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:291](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L291)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:280](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L280)

___

### mouseMoveOnFrame

▸ **mouseMoveOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:303](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L303)

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

[lib/table/mouse-handler.ts:60](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L60)

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

[lib/table/mouse-handler.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L74)

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

[lib/table/mouse-handler.ts:138](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L138)

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

[lib/table/mouse-handler.ts:244](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L244)

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

[lib/table/mouse-handler.ts:255](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L255)

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

[lib/table/mouse-handler.ts:269](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L269)

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

[lib/table/mouse-handler.ts:199](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L199)

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

[lib/table/mouse-handler.ts:221](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/mouse-handler.ts#L221)
