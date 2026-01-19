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
- [assignPredefinedSystemShortcutMappings](ShortcutService.md#assignpredefinedsystemshortcutmappings)
- [emit](ShortcutService.md#emit)
- [findEntity](ShortcutService.md#findentity)
- [getShortcutActionMapping](ShortcutService.md#getshortcutactionmapping)
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

[lib/table/action/shortcut.service.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L18)

## Properties

### listener

• `Private` **listener**: [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)[] = `[]`

#### Defined in

[lib/table/action/shortcut.service.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L16)

___

### shortcutActionIdMapping

• `Private` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping) = `{}`

#### Defined in

[lib/table/action/shortcut.service.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L15)

___

### tableScope

• `Protected` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/action/shortcut.service.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L19)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

Adds a listener to the list of listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md) | The listener to be added. |

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L32)

___

### assignPredefinedSystemShortcutMappings

▸ **assignPredefinedSystemShortcutMappings**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:64](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L64)

___

### emit

▸ **emit**(`actionId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionId` | ``"COPY_2_CLIPBOARD"`` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` |

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:96](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L96)

___

### findEntity

▸ **findEntity**(`evt`): `undefined` \| ``"COPY_2_CLIPBOARD"`` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `KeyboardEvent` |

#### Returns

`undefined` \| ``"COPY_2_CLIPBOARD"`` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"``

#### Defined in

[lib/table/action/shortcut.service.ts:110](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L110)

___

### getShortcutActionMapping

▸ **getShortcutActionMapping**(): [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

Retrieves the shortcut action mapping object.

#### Returns

[`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

- The shortcut action mapping object.

#### Defined in

[lib/table/action/shortcut.service.ts:169](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L169)

___

### init

▸ **init**(): `void`

Initializes the ShortcutService by assigning shortcut action id mappings based on the current operating system.
Also adds key down event listener to the table host element.

#### Returns

`void`

#### Defined in

[lib/table/action/shortcut.service.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L42)

___

### isDebug

▸ **isDebug**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L76)

___

### isLocalhost

▸ **isLocalhost**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L80)

___

### isMacintosh

▸ **isMacintosh**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/action/shortcut.service.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L72)

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

[lib/table/action/shortcut.service.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/action/shortcut.service.ts#L85)
