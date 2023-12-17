[@guiexpert/table](../README.md) / [Exports](../modules.md) / ShortcutService

# Class: ShortcutService

Represents a service for managing shortcuts and triggering actions based on keyboard events.

## Table of contents

### Constructors

- [constructor](ShortcutService.md#constructor)

### Properties

- [listener](ShortcutService.md#listener)
- [shortcutActionIdMapping](ShortcutService.md#shortcutactionidmapping)
- [tableScope](ShortcutService.md#tablescope)

### Methods

- [addListener](ShortcutService.md#addlistener)
- [areTokensEquals](ShortcutService.md#aretokensequals)
- [emit](ShortcutService.md#emit)
- [findEnty](ShortcutService.md#findenty)
- [getTokenByEvent](ShortcutService.md#gettokenbyevent)
- [init](ShortcutService.md#init)
- [isDebug](ShortcutService.md#isdebug)
- [isLocalhost](ShortcutService.md#islocalhost)
- [isMacintosh](ShortcutService.md#ismacintosh)
- [onKeyDown](ShortcutService.md#onkeydown)

## Constructors

### constructor

• **new ShortcutService**(`tableScope`): [`ShortcutService`](ShortcutService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`ShortcutService`](ShortcutService.md)

#### Defined in

[lib/table/action/shortcut.service.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L17)

## Properties

### listener

• `Private` **listener**: [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)[] = `[]`

#### Defined in

[lib/table/action/shortcut.service.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L15)

___

### shortcutActionIdMapping

• `Private` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping) = `{}`

#### Defined in

[lib/table/action/shortcut.service.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L14)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/action/shortcut.service.ts:18](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L18)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L25)

___

### areTokensEquals

▸ **areTokensEquals**(`tokens1`, `tokens2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokens1` | `string`[] |
| `tokens2` | `string`[] |

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:101](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L101)

___

### emit

▸ **emit**(`actionId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionId` | ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` |

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:70](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L70)

___

### findEnty

▸ **findEnty**(`evt`): `undefined` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `KeyboardEvent` |

#### Returns

`undefined` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"``

#### Defined in

[lib/table/action/shortcut.service.ts:84](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L84)

___

### getTokenByEvent

▸ **getTokenByEvent**(`evt`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `KeyboardEvent` |

#### Returns

`string`[]

#### Defined in

[lib/table/action/shortcut.service.ts:117](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L117)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:31](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L31)

___

### isDebug

▸ **isDebug**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:50](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L50)

___

### isLocalhost

▸ **isLocalhost**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:54](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L54)

___

### isMacintosh

▸ **isMacintosh**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:46](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L46)

___

### onKeyDown

▸ **onKeyDown**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:59](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/action/shortcut.service.ts#L59)
