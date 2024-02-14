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

[lib/table/mouse-handler.ts:18](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L18)

## Properties

### dragging

• `Private` **dragging**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L16)

___

### expandedAll

• `Private` **expandedAll**: `boolean` = `true`

#### Defined in

[lib/table/mouse-handler.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L14)

___

### geMouseEvent

• `Optional` **geMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L11)

___

### geMouseEventOld

• `Optional` **geMouseEventOld**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L12)

___

### mouseDown

• `Private` **mouseDown**: `boolean` = `false`

#### Defined in

[lib/table/mouse-handler.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L15)

___

### mouseEvent

• `Optional` **mouseEvent**: `MouseEvent`

#### Defined in

[lib/table/mouse-handler.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L9)

___

### startMouseEvent

• `Optional` **startMouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/mouse-handler.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L10)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/mouse-handler.ts:19](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L19)

## Methods

### getArrowColumnIndex

▸ **getArrowColumnIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/mouse-handler.ts:170](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L170)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:216](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L216)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:205](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L205)

___

### mouseMoveOnFrame

▸ **mouseMoveOnFrame**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:228](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L228)

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

[lib/table/mouse-handler.ts:38](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L38)

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

[lib/table/mouse-handler.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L45)

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

[lib/table/mouse-handler.ts:91](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L91)

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

[lib/table/mouse-handler.ts:176](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L176)

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

[lib/table/mouse-handler.ts:184](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L184)

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

[lib/table/mouse-handler.ts:195](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L195)

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

[lib/table/mouse-handler.ts:142](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L142)

___

### updateCollapsedExpandedState

▸ **updateCollapsedExpandedState**(`tr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tr` | [`TreeRow`](TreeRow.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[lib/table/mouse-handler.ts:153](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/mouse-handler.ts#L153)
