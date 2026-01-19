[@guiexpert/table](../README.md) / [Exports](../modules.md) / DomServiceIf

# Interface: DomServiceIf

## Implemented by

- [`SimpleDomService`](../classes/SimpleDomService.md)

## Table of contents

### Methods

- [addClass](DomServiceIf.md#addclass)
- [appendChild](DomServiceIf.md#appendchild)
- [appendText](DomServiceIf.md#appendtext)
- [createElement](DomServiceIf.md#createelement)
- [createText](DomServiceIf.md#createtext)
- [removeClass](DomServiceIf.md#removeclass)
- [setAttribute](DomServiceIf.md#setattribute)
- [setStyle](DomServiceIf.md#setstyle)

## Methods

### addClass

▸ **addClass**(`div`, `clazz`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLElement` |
| `clazz` | `string` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/dom-service.if.ts:5](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L5)

___

### appendChild

▸ **appendChild**(`parent`, `child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |
| `child` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[lib/table/service/dom-service.if.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L15)

___

### appendText

▸ **appendText**(`parent`, `text`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |
| `text` | `string` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/dom-service.if.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L13)

___

### createElement

▸ **createElement**\<`T`\>(`ele`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `string` |

#### Returns

`T`

#### Defined in

[lib/table/service/dom-service.if.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L9)

___

### createText

▸ **createText**(`text`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`HTMLElement`

#### Defined in

[lib/table/service/dom-service.if.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L11)

___

### removeClass

▸ **removeClass**(`div`, `clazz`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLElement` |
| `clazz` | `string` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/dom-service.if.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L7)

___

### setAttribute

▸ **setAttribute**(`ele`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLElement` |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/table/service/dom-service.if.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L17)

___

### setStyle

▸ **setStyle**(`el`, `style`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |
| `style` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[lib/table/service/dom-service.if.ts:3](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/dom-service.if.ts#L3)
