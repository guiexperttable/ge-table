[@guiexpert/table](../README.md) / [Exports](../modules.md) / ShortcutService

# Class: ShortcutService

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

[lib/table/action/shortcut.service.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L14)

## Properties

### listener

• `Private` **listener**: [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)[] = `[]`

#### Defined in

[lib/table/action/shortcut.service.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L12)

___

### shortcutActionIdMapping

• `Private` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping) = `{}`

#### Defined in

[lib/table/action/shortcut.service.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L11)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/action/shortcut.service.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L15)

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

[lib/table/action/shortcut.service.ts:22](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L22)

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

[lib/table/action/shortcut.service.ts:98](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L98)

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

[lib/table/action/shortcut.service.ts:67](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L67)

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

[lib/table/action/shortcut.service.ts:81](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L81)

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

[lib/table/action/shortcut.service.ts:114](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L114)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:28](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L28)

___

### isDebug

▸ **isDebug**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:47](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L47)

___

### isLocalhost

▸ **isLocalhost**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:51](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L51)

___

### isMacintosh

▸ **isMacintosh**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:43](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L43)

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

[lib/table/action/shortcut.service.ts:56](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/action/shortcut.service.ts#L56)
