[@guiexpert/table](../README.md) / [Exports](../modules.md) / SchemeGenerator

# Class: SchemeGenerator

Converts a json or object structure like this:
 [
  {
    id: 1,
    name: 'Alice',
    description: 'Lorem ipsum dolor',
    isActive: true,
    tags: ['typescript', 'javascript'],
    scripts: [],
    profile: { age: 30, location: 'Berlin' },
    preferences: [{ key: 'theme', value: 'dark' }]
  },
  {
    id: 2,
    name: 'Marc',
    description: 'Lorem ipsum dolor',
    isActive: false,
    tags: ['java', 'javascript'],
    scripts: [],
    profile: { age: 55, location: 'Frankfurt' },
    preferences: [{ key: 'theme', value: 'light' }]
  },
  {
    id: null,
    name: 'Bob',
    isActive: false,
    tags: null,
    scripts: [],
    profile: { age: 25, location: 'Frankfurt' },
    preferences: [{ key: 'language', value: 'de' }]
  }
]

 into a TypeScript interface definitions:

export interface XyzRowEntity {
  description?: string;
  id: number|null;
  isActive: boolean;
  name: string;
  preferences: PreferenceEntity[];
  profile: ProfileEntity;
  scripts: any[];
  tags: string[]|null;
}

export interface PreferenceEntity {
  key: string;
  value: string;
}

export interface ProfileEntity {
  age: number;
  location: string;
}

const json = JSON.stringify(demoData);
const rootPropertyType: PropertyType = new PropertyTypeService().object2PropertyType(demoData, 'XyzRows');
console.log(new SchemeGenerator().renderTypeScriptInterfaces(rootPropertyType).join('\n'));

## Table of contents

### Constructors

- [constructor](SchemeGenerator.md#constructor)

### Properties

- [orOperator](SchemeGenerator.md#oroperator)
- [renderTypeScriptInterfacesDone](SchemeGenerator.md#rendertypescriptinterfacesdone)
- [renderTypeScriptInterfacesFifo](SchemeGenerator.md#rendertypescriptinterfacesfifo)
- [rootName](SchemeGenerator.md#rootname)
- [rootPropertyType](SchemeGenerator.md#rootpropertytype)

### Methods

- [containsUndefinedPropertyType](SchemeGenerator.md#containsundefinedpropertytype)
- [propertyItem2InterfaceDateType](SchemeGenerator.md#propertyitem2interfacedatetype)
- [renderType](SchemeGenerator.md#rendertype)
- [renderTypeScriptInterfaces](SchemeGenerator.md#rendertypescriptinterfaces)
- [renderTypeScriptInterfacesFifoNext](SchemeGenerator.md#rendertypescriptinterfacesfifonext)
- [renderTypeScriptInterfacesRecursive](SchemeGenerator.md#rendertypescriptinterfacesrecursive)

## Constructors

### constructor

• **new SchemeGenerator**(): [`SchemeGenerator`](SchemeGenerator.md)

#### Returns

[`SchemeGenerator`](SchemeGenerator.md)

## Properties

### orOperator

• **orOperator**: `string` = `'|'`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L76)

___

### renderTypeScriptInterfacesDone

• `Private` **renderTypeScriptInterfacesDone**: `string`[] = `[]`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:81](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L81)

___

### renderTypeScriptInterfacesFifo

• `Private` **renderTypeScriptInterfacesFifo**: [`ObjectPropertyType`](ObjectPropertyType.md)[] = `[]`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L80)

___

### rootName

• `Private` **rootName**: `string` = `'Root'`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:79](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L79)

___

### rootPropertyType

• **rootPropertyType**: ``null`` \| [`PropertyType`](../interfaces/PropertyType.md) = `null`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L77)

## Methods

### containsUndefinedPropertyType

▸ **containsUndefinedPropertyType**(`propertyItem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyItem` | [`PropertyItem`](PropertyItem.md) |

#### Returns

`boolean`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:207](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L207)

___

### propertyItem2InterfaceDateType

▸ **propertyItem2InterfaceDateType**(`propertyItem`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyItem` | [`PropertyItem`](PropertyItem.md) |

#### Returns

`string`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:173](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L173)

___

### renderType

▸ **renderType**(`propertyType`, `propertyItem`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyType` | [`PropertyType`](../interfaces/PropertyType.md) |
| `propertyItem` | [`PropertyItem`](PropertyItem.md) |

#### Returns

`string`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:192](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L192)

___

### renderTypeScriptInterfaces

▸ **renderTypeScriptInterfaces**(`rootPropertyType`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootPropertyType` | [`PropertyType`](../interfaces/PropertyType.md) |

#### Returns

`string`[]

#### Defined in

[lib/common/generator/scheme-generator-service.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L84)

___

### renderTypeScriptInterfacesFifoNext

▸ **renderTypeScriptInterfacesFifoNext**(`buf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string`[] |

#### Returns

`void`

#### Defined in

[lib/common/generator/scheme-generator-service.ts:102](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L102)

___

### renderTypeScriptInterfacesRecursive

▸ **renderTypeScriptInterfacesRecursive**(`pt?`, `buf?`, `name?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pt` | ``null`` \| [`PropertyType`](../interfaces/PropertyType.md) | `undefined` |
| `buf` | `string`[] | `[]` |
| `name` | `string` | `undefined` |

#### Returns

`string`[]

#### Defined in

[lib/common/generator/scheme-generator-service.ts:111](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/scheme-generator-service.ts#L111)
