[@guiexpert/table](../README.md) / [Exports](../modules.md) / MouseHandler

# Class: MouseHandler

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

[lib/table/mouse-handler.ts:20](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L20)

## Properties

### dragging

• `Private` **dragging**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:18](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L18)

___

### expandedAll

• `Private` **expandedAll**: `boolean` = `true`

#### Defined in

[lib/table/mouse-handler.ts:16](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L16)

___

### geMouseEvent

• `Optional` **geMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:13](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L13)

___

### geMouseEventOld

• `Optional` **geMouseEventOld**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L14)

___

### mouseDown

• `Private` **mouseDown**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:17](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L17)

___

### mouseEvent

• `Optional` **mouseEvent**: `MouseEvent`

#### Defined in

[lib/table/mouse-handler.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L11)

___

### startMouseEvent

• `Optional` **startMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L12)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/mouse-handler.ts:21](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L21)

## Methods

### getArrowColumnIndex

▸ **getArrowColumnIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/mouse-handler.ts:172](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L172)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:218](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L218)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:207](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L207)

___

### mouseMoveOnFrame

▸ **mouseMoveOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:230](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L230)

___

### onContextmenu

▸ **onContextmenu**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:40](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L40)

___

### onHostElementClicked

▸ **onHostElementClicked**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:47](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L47)

___

### onHostElementDblClicked

▸ **onHostElementDblClicked**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:93](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L93)

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

[lib/table/mouse-handler.ts:178](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L178)

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

[lib/table/mouse-handler.ts:186](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L186)

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

[lib/table/mouse-handler.ts:197](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L197)

___

### publishGeMouseEvent

▸ **publishGeMouseEvent**(`event`, `clickCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |
| `clickCount` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:144](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L144)

___

### updateCollapsedExpandedState

▸ **updateCollapsedExpandedState**(`tr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tr` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:155](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/mouse-handler.ts#L155)
