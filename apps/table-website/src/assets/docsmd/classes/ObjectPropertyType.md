[@guiexpert/table](../README.md) / [Exports](../modules.md) / ObjectPropertyType

# Class: ObjectPropertyType

## Implements

- [`PropertyType`](../interfaces/PropertyType.md)

## Table of contents

### Constructors

- [constructor](ObjectPropertyType.md#constructor)

### Properties

- [className](ObjectPropertyType.md#classname)
- [properties](ObjectPropertyType.md#properties)
- [propertyName](ObjectPropertyType.md#propertyname)
- [type](ObjectPropertyType.md#type)

## Constructors

### constructor

• **new ObjectPropertyType**(`propertyName`, `className`, `properties?`): [`ObjectPropertyType`](ObjectPropertyType.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `propertyName` | `string` | `undefined` |
| `className` | `string` | `undefined` |
| `properties` | [`PropertyItem`](PropertyItem.md)[] | `[]` |

#### Returns

[`ObjectPropertyType`](ObjectPropertyType.md)

#### Defined in

[lib/common/generator/domain/property-type.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/domain/property-type.ts#L74)

## Properties

### className

• **className**: `string`

#### Defined in

[lib/common/generator/domain/property-type.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/domain/property-type.ts#L76)

___

### properties

• **properties**: [`PropertyItem`](PropertyItem.md)[] = `[]`

#### Defined in

[lib/common/generator/domain/property-type.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/domain/property-type.ts#L77)

___

### propertyName

• **propertyName**: `string`

#### Implementation of

[PropertyType](../interfaces/PropertyType.md).[propertyName](../interfaces/PropertyType.md#propertyname)

#### Defined in

[lib/common/generator/domain/property-type.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/domain/property-type.ts#L75)

___

### type

• **type**: `string` = `PROPERTY_TYPE_KEY_OBJECT`

#### Implementation of

[PropertyType](../interfaces/PropertyType.md).[type](../interfaces/PropertyType.md#type)

#### Defined in

[lib/common/generator/domain/property-type.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/domain/property-type.ts#L72)
