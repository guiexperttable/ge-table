[@guiexpert/table](../README.md) / [Exports](../modules.md) / SimpleDomService

# Class: SimpleDomService

## Implements

- [`DomServiceIf`](../interfaces/DomServiceIf.md)

## Table of contents

### Constructors

- [constructor](SimpleDomService.md#constructor)

### Methods

- [addClass](SimpleDomService.md#addclass)
- [appendChild](SimpleDomService.md#appendchild)
- [appendText](SimpleDomService.md#appendtext)
- [createElement](SimpleDomService.md#createelement)
- [createText](SimpleDomService.md#createtext)
- [removeClass](SimpleDomService.md#removeclass)
- [setAttribute](SimpleDomService.md#setattribute)
- [setStyle](SimpleDomService.md#setstyle)

## Constructors

### constructor

• **new SimpleDomService**(): [`SimpleDomService`](SimpleDomService.md)

#### Returns

[`SimpleDomService`](SimpleDomService.md)

## Methods

### addClass

▸ **addClass**(`div`, `clazz`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLDivElement` |
| `clazz` | `string` |

#### Returns

`HTMLDivElement`

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[addClass](../interfaces/DomServiceIf.md#addclass)

#### Defined in

[lib/table/service/simple-dom-service.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L20)

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

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[appendChild](../interfaces/DomServiceIf.md#appendchild)

#### Defined in

[lib/table/service/simple-dom-service.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L38)

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

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[appendText](../interfaces/DomServiceIf.md#appendtext)

#### Defined in

[lib/table/service/simple-dom-service.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L13)

___

### createElement

▸ **createElement**\<`T`\>(`name`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`T`

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[createElement](../interfaces/DomServiceIf.md#createelement)

#### Defined in

[lib/table/service/simple-dom-service.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L42)

___

### createText

▸ **createText**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`any`

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[createText](../interfaces/DomServiceIf.md#createtext)

#### Defined in

[lib/table/service/simple-dom-service.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L46)

___

### removeClass

▸ **removeClass**(`div`, `clazz`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLDivElement` |
| `clazz` | `string` |

#### Returns

`HTMLDivElement`

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[removeClass](../interfaces/DomServiceIf.md#removeclass)

#### Defined in

[lib/table/service/simple-dom-service.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L29)

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

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[setAttribute](../interfaces/DomServiceIf.md#setattribute)

#### Defined in

[lib/table/service/simple-dom-service.ts:50](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L50)

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

#### Implementation of

[DomServiceIf](../interfaces/DomServiceIf.md).[setStyle](../interfaces/DomServiceIf.md#setstyle)

#### Defined in

[lib/table/service/simple-dom-service.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/simple-dom-service.ts#L7)
