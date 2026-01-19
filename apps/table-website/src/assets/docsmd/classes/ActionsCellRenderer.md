[@guiexpert/table](../README.md) / [Exports](../modules.md) / ActionsCellRenderer

# Class: ActionsCellRenderer

## Implements

- [`CellRendererIf`](../interfaces/CellRendererIf.md)

## Table of contents

### Constructors

- [constructor](ActionsCellRenderer.md#constructor)

### Properties

- [actionEventListener](ActionsCellRenderer.md#actioneventlistener)
- [crudActions](ActionsCellRenderer.md#crudactions)

### Methods

- [addClickEventListeners](ActionsCellRenderer.md#addclickeventlisteners)
- [buildButtonHtml](ActionsCellRenderer.md#buildbuttonhtml)
- [buildLinkHtml](ActionsCellRenderer.md#buildlinkhtml)
- [createActionEvent](ActionsCellRenderer.md#createactionevent)
- [getCrudActions](ActionsCellRenderer.md#getcrudactions)
- [render](ActionsCellRenderer.md#render)

## Constructors

### constructor

• **new ActionsCellRenderer**(`actionEventListener`, `crudActions`): [`ActionsCellRenderer`](ActionsCellRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionEventListener` | [`ActionEventListenerIf`](../interfaces/ActionEventListenerIf.md) |
| `crudActions` | [`CrudAction`](CrudAction.md)[] |

#### Returns

[`ActionsCellRenderer`](ActionsCellRenderer.md)

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L14)

## Properties

### actionEventListener

• `Private` **actionEventListener**: [`ActionEventListenerIf`](../interfaces/ActionEventListenerIf.md)

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L15)

___

### crudActions

• `Private` **crudActions**: [`CrudAction`](CrudAction.md)[]

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L16)

## Methods

### addClickEventListeners

▸ **addClickEventListeners**(`cellDiv`, `_areaIdent`, `areaModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `_areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:93](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L93)

___

### buildButtonHtml

▸ **buildButtonHtml**(`action`, `areaIdent`, `rowIndex`, `columnIndex`, `id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`CrudAction`](CrudAction.md) |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `id` | `any` |

#### Returns

`string`

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L48)

___

### buildLinkHtml

▸ **buildLinkHtml**(`action`, `areaIdent`, `rowIndex`, `columnIndex`, `id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`CrudAction`](CrudAction.md) |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `id` | `any` |

#### Returns

`string`

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:71](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L71)

___

### createActionEvent

▸ **createActionEvent**(`target`, `areaModel`): ``null`` \| [`ActionEvent`](ActionEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLButtonElement` |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |

#### Returns

``null`` \| [`ActionEvent`](ActionEvent.md)

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:112](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L112)

___

### getCrudActions

▸ **getCrudActions**(`val`): [`CrudAction`](CrudAction.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

[`CrudAction`](CrudAction.md)[]

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:133](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L133)

___

### render

▸ **render**(`cellDiv`, `rowIndex`, `columnIndex`, `areaIdent`, `areaModel`, `cellValue`, `domService`): `undefined` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellDiv` | `HTMLDivElement` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `cellValue` | `any` |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

`undefined` \| `Function`

#### Implementation of

[CellRendererIf](../interfaces/CellRendererIf.md).[render](../interfaces/CellRendererIf.md#render)

#### Defined in

[lib/table/renderer/action/actions-cell-renderer.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/renderer/action/actions-cell-renderer.ts#L20)
