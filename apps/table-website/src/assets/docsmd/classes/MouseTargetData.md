[@guiexpert/table](../README.md) / [Exports](../modules.md) / MouseTargetData

# Class: MouseTargetData

The MouseTargetData class is used to process and provide information about user interaction, especially mouse events, with specific areas and elements of a table built using HTML Div elements, Span elements, and Input elements.

The class encapsulates different types of data related to the element on which an event was targeted.
Data such as the targeted row and column indices, the area on the table identified (header, body, or footer),
the model of the table area the user interacted with, attributes of the HTML Input Element
(value and type), associated action, content row, and CSS class applied to the element.

The constructor expects an `EventTarget` and `TableScope` objects as parameters -
data encapsulated in the `EventTarget` object will be used to populate the properties of the `MouseTargetData` object.

**`Example`**

```ts
const mouseTarget = new MouseTargetData(eventTarget, tableScope);
```

## Table of contents

### Constructors

- [constructor](MouseTargetData.md#constructor)

### Properties

- [action](MouseTargetData.md#action)
- [areaIdent](MouseTargetData.md#areaident)
- [areaModel](MouseTargetData.md#areamodel)
- [className](MouseTargetData.md#classname)
- [colIdx](MouseTargetData.md#colidx)
- [inputType](MouseTargetData.md#inputtype)
- [row](MouseTargetData.md#row)
- [rowIdx](MouseTargetData.md#rowidx)
- [value](MouseTargetData.md#value)

## Constructors

### constructor

• **new MouseTargetData**(`eventTarget`, `tableScope`): [`MouseTargetData`](MouseTargetData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTarget` | ``null`` \| `EventTarget` |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`MouseTargetData`](MouseTargetData.md)

#### Defined in

[lib/table/data/event/mouse-target-data.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L42)

## Properties

### action

• **action**: ``null`` \| `string` = `null`

The associated action with the HTML Element (retrieved through "data-ge-action" data attribute). Default is `null`.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L37)

___

### areaIdent

• `Optional` **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identification of the targeted area on an interaction event. Possible value can be 'header', 'body', 'footer'.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L33)

___

### areaModel

• `Optional` **areaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

The model of the table area the user interacted with.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:34](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L34)

___

### className

• **className**: `string` = `""`

The CSS class name applied to the target element. Default is an empty string.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:39](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L39)

___

### colIdx

• **colIdx**: `number` = `-1`

The index of the targeted column on an interaction event. Default value is -1.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L32)

___

### inputType

• **inputType**: ``null`` \| `string` = `null`

The type of the HTML Input Element (retrieved through "data-input-type" data attribute). Default is `null`.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L38)

___

### row

• `Optional` **row**: `any`

The specific row the user interacted with.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L35)

___

### rowIdx

• **rowIdx**: `number` = `-1`

The index of the targeted row on an interaction event. Default value is -1.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L31)

___

### value

• `Optional` **value**: `any`

The value(s) associated with the HTML Input Element the user interacted with.

#### Defined in

[lib/table/data/event/mouse-target-data.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/event/mouse-target-data.ts#L36)
