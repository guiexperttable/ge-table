[@guiexpert/table](../README.md) / [Exports](../modules.md) / OnActionTriggeredIf

# Interface: OnActionTriggeredIf

## Implemented by

- [`SelectionService`](../classes/SelectionService.md)
- [`TableScope`](../classes/TableScope.md)

## Table of contents

### Methods

- [onActionTriggered](OnActionTriggeredIf.md#onactiontriggered)

## Methods

### onActionTriggered

▸ **onActionTriggered**(`actionId`): `boolean`

Triggers an action based on the provided action ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionId` | ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` | The ID of the action to be triggered. |

#### Returns

`boolean`

- Returns true if the action was successfully triggered; otherwise, false.

#### Defined in

[lib/table/action/on-action-triggered.if.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/on-action-triggered.if.ts#L12)
