[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectionService

# Class: SelectionService

## Implements

- [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)

## Table of contents

### Constructors

- [constructor](SelectionService.md#constructor)

### Properties

- [getFocusModel](SelectionService.md#getfocusmodel)
- [getSelectionModel](SelectionService.md#getselectionmodel)
- [previousEvt](SelectionService.md#previousevt)
- [tableScope](SelectionService.md#tablescope)

### Methods

- [createRangeByEvents](SelectionService.md#createrangebyevents)
- [onActionTriggered](SelectionService.md#onactiontriggered)
- [onMouseClicked](SelectionService.md#onmouseclicked)

## Constructors

### constructor

• **new SelectionService**(`tableScope`): [`SelectionService`](SelectionService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`SelectionService`](SelectionService.md)

#### Defined in

[lib/table/selection/selection-service.ts:18](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L18)

## Properties

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Defined in

[lib/table/selection/selection-service.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L14)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Defined in

[lib/table/selection/selection-service.ts:13](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L13)

___

### previousEvt

• `Protected` `Optional` **previousEvt**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/selection/selection-service.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L15)

___

### tableScope

• `Protected` `Readonly` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/selection/selection-service.ts:19](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L19)

## Methods

### createRangeByEvents

▸ **createRangeByEvents**(`evt`, `previousEvt?`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) |
| `previousEvt?` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/selection/selection-service.ts:104](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L104)

___

### onActionTriggered

▸ **onActionTriggered**(`actionId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionId` | ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` |

#### Returns

`boolean`

#### Implementation of

[OnActionTriggeredIf](../interfaces/OnActionTriggeredIf.md).[onActionTriggered](../interfaces/OnActionTriggeredIf.md#onactiontriggered)

#### Defined in

[lib/table/selection/selection-service.ts:77](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L77)

___

### onMouseClicked

▸ **onMouseClicked**(`evt`, `_previousEvt`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) |
| `_previousEvt` | `undefined` \| [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-service.ts:30](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-service.ts#L30)
