[@guiexpert/table](../README.md) / [Exports](../modules.md) / LicenseManager

# Class: LicenseManager

LicenseManager class responsible for managing license keys.
As it's a singleton class, it only allows one instance of itself to exist.

Usage: LicenseManager.getInstance().setLicenseKey('Your API key');

## Table of contents

### Constructors

- [constructor](LicenseManager.md#constructor)

### Properties

- [alreadySet](LicenseManager.md#alreadyset)
- [instance](LicenseManager.md#instance)

### Methods

- [setLicenseKey](LicenseManager.md#setlicensekey)
- [getInstance](LicenseManager.md#getinstance)

## Constructors

### constructor

• **new LicenseManager**(): [`LicenseManager`](LicenseManager.md)

#### Returns

[`LicenseManager`](LicenseManager.md)

#### Defined in

[lib/table/license-manager.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/license-manager.ts#L14)

## Properties

### alreadySet

• `Private` **alreadySet**: `boolean` = `false`

#### Defined in

[lib/table/license-manager.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/license-manager.ts#L10)

___

### instance

▪ `Static` `Private` **instance**: [`LicenseManager`](LicenseManager.md)

#### Defined in

[lib/table/license-manager.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/license-manager.ts#L9)

## Methods

### setLicenseKey

▸ **setLicenseKey**(`key`): `void`

Method to set the license key for the application.
A 'meta' element is created with content as 'guiexperttable=<license key>'
and appended into the head section of the document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `undefined` \| `string` | The license key to set for the application. |

#### Returns

`void`

- This method does not return anything

#### Defined in

[lib/table/license-manager.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/license-manager.ts#L35)

___

### getInstance

▸ **getInstance**(): [`LicenseManager`](LicenseManager.md)

#### Returns

[`LicenseManager`](LicenseManager.md)

#### Defined in

[lib/table/license-manager.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/license-manager.ts#L18)
