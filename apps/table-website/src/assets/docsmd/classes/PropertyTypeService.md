[@guiexpert/table](../README.md) / [Exports](../modules.md) / PropertyTypeService

# Class: PropertyTypeService

## Table of contents

### Constructors

- [constructor](PropertyTypeService.md#constructor)

### Properties

- [debugging](PropertyTypeService.md#debugging)

### Methods

- [countPath](PropertyTypeService.md#countpath)
- [createPropertyItem](PropertyTypeService.md#createpropertyitem)
- [createPropertyType](PropertyTypeService.md#createpropertytype)
- [extractValueInfos](PropertyTypeService.md#extractvalueinfos)
- [getFirstValueInfoByPath](PropertyTypeService.md#getfirstvalueinfobypath)
- [getParentPath](PropertyTypeService.md#getparentpath)
- [json2Object](PropertyTypeService.md#json2object)
- [json2PropertyType](PropertyTypeService.md#json2propertytype)
- [json2ValueInfos](PropertyTypeService.md#json2valueinfos)
- [logValueInfos](PropertyTypeService.md#logvalueinfos)
- [mergeValueInfos](PropertyTypeService.md#mergevalueinfos)
- [object2PropertyType](PropertyTypeService.md#object2propertytype)
- [object2ValueInfos](PropertyTypeService.md#object2valueinfos)
- [valueInfos2PropertyType](PropertyTypeService.md#valueinfos2propertytype)

## Constructors

### constructor

• **new PropertyTypeService**(): [`PropertyTypeService`](PropertyTypeService.md)

#### Returns

[`PropertyTypeService`](PropertyTypeService.md)

## Properties

### debugging

• **debugging**: `boolean` = `false`

#### Defined in

[lib/common/generator/property-type.service.ts:26](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L26)

## Methods

### countPath

▸ **countPath**(`valueInfos`, `path`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueInfos` | [`ValueInfo`](ValueInfo.md)[] |
| `path` | `string` |

#### Returns

`number`

#### Defined in

[lib/common/generator/property-type.service.ts:366](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L366)

___

### createPropertyItem

▸ **createPropertyItem**(`val`, `propertyName`): [`PropertyItem`](PropertyItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `propertyName` | `string` |

#### Returns

[`PropertyItem`](PropertyItem.md)

#### Defined in

[lib/common/generator/property-type.service.ts:429](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L429)

___

### createPropertyType

▸ **createPropertyType**(`val`, `propertyName`): [`PropertyType`](../interfaces/PropertyType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `propertyName` | `string` |

#### Returns

[`PropertyType`](../interfaces/PropertyType.md)

#### Defined in

[lib/common/generator/property-type.service.ts:438](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L438)

___

### extractValueInfos

▸ **extractValueInfos**(`parsedObject`, `rootName`): [`ValueInfo`](ValueInfo.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedObject` | `Object` |
| `rootName` | `string` |

#### Returns

[`ValueInfo`](ValueInfo.md)[]

#### Defined in

[lib/common/generator/property-type.service.ts:386](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L386)

___

### getFirstValueInfoByPath

▸ **getFirstValueInfoByPath**(`valueInfos`, `path`): ``null`` \| [`ValueInfo`](ValueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueInfos` | [`ValueInfo`](ValueInfo.md)[] |
| `path` | `string` |

#### Returns

``null`` \| [`ValueInfo`](ValueInfo.md)

#### Defined in

[lib/common/generator/property-type.service.ts:376](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L376)

___

### getParentPath

▸ **getParentPath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[lib/common/generator/property-type.service.ts:267](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L267)

___

### json2Object

▸ **json2Object**(`json`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`object`

#### Defined in

[lib/common/generator/property-type.service.ts:122](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L122)

___

### json2PropertyType

▸ **json2PropertyType**(`json`, `rootName?`): [`PropertyType`](../interfaces/PropertyType.md)

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

 into a PropertyTape tree structure like this:

    return new ArrayPropertyType(
      [
        new ObjectPropertyType('XyzRowEntity', [
          new PropertyItem('id', [new NumberPropertyType(), new NullPropertyType()]),
          new PropertyItem('name', [new StringPropertyType()]),
          new PropertyItem('description', [new StringPropertyType(), new UndefinedPropertyType()]),
          new PropertyItem('isActive', [new BooleanPropertyType()]),
          new PropertyItem('tags', [
            new ArrayPropertyType(
              [new StringPropertyType()]
            ),
            new NullPropertyType()
          ]),
          new PropertyItem('scripts', [
            new ArrayPropertyType(
              [new AnyPropertyType()]
            ),
          ]),
          new PropertyItem('profile', [
            new ObjectPropertyType('profile', [
              new PropertyItem('age', [new NumberPropertyType()]),
              new PropertyItem('location', [new StringPropertyType()])
            ])
          ]),
          new PropertyItem('preferences', [
            new ArrayPropertyType(
              [
                new ObjectPropertyType('preference', [
                  new PropertyItem('key', [new StringPropertyType()]),
                  new PropertyItem('value', [new StringPropertyType()])
                ])
              ])
          ])
        ])
      ]);

const json = JSON.stringify(demoData);
const rootPropertyType: PropertyType = new PropertyTypeService().json2PropertyType(json, 'XyzRows');

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` \| `object` | `undefined` |
| `rootName` | `string` | `''` |

#### Returns

[`PropertyType`](../interfaces/PropertyType.md)

#### Defined in

[lib/common/generator/property-type.service.ts:108](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L108)

___

### json2ValueInfos

▸ **json2ValueInfos**(`json`, `rootName?`): [`ValueInfo`](ValueInfo.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` \| `object` | `undefined` |
| `rootName` | `string` | `''` |

#### Returns

[`ValueInfo`](ValueInfo.md)[]

#### Defined in

[lib/common/generator/property-type.service.ts:239](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L239)

___

### logValueInfos

▸ **logValueInfos**(`mergedValueInfos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mergedValueInfos` | [`ValueInfo`](ValueInfo.md)[] |

#### Returns

`void`

#### Defined in

[lib/common/generator/property-type.service.ts:314](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L314)

___

### mergeValueInfos

▸ **mergeValueInfos**(`valueInfos`): [`ValueInfo`](ValueInfo.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueInfos` | [`ValueInfo`](ValueInfo.md)[] |

#### Returns

[`ValueInfo`](ValueInfo.md)[]

#### Defined in

[lib/common/generator/property-type.service.ts:323](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L323)

___

### object2PropertyType

▸ **object2PropertyType**(`parsedObject`, `rootName?`): [`PropertyType`](../interfaces/PropertyType.md)

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
];

into a PropertyTape tree structure like this:

    return new ArrayPropertyType(
      [
        new ObjectPropertyType('XyzRowEntity', [
          new PropertyItem('id', [new NumberPropertyType(), new NullPropertyType()]),
          new PropertyItem('name', [new StringPropertyType()]),
          new PropertyItem('description', [new StringPropertyType(), new UndefinedPropertyType()]),
          new PropertyItem('isActive', [new BooleanPropertyType()]),
          new PropertyItem('tags', [
            new ArrayPropertyType(
              [new StringPropertyType()]
            ),
            new NullPropertyType()
          ]),
          new PropertyItem('scripts', [
            new ArrayPropertyType(
              [new AnyPropertyType()]
            ),
          ]),
          new PropertyItem('profile', [
            new ObjectPropertyType('profile', [
              new PropertyItem('age', [new NumberPropertyType()]),
              new PropertyItem('location', [new StringPropertyType()])
            ])
          ]),
          new PropertyItem('preferences', [
            new ArrayPropertyType(
              [
                new ObjectPropertyType('preference', [
                  new PropertyItem('key', [new StringPropertyType()]),
                  new PropertyItem('value', [new StringPropertyType()])
                ])
              ])
          ])
        ])
      ]);

The PropertyTape tree structure can be rendered as TypeScript interface definitions with the SchemeGenerator:

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

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parsedObject` | `Object` | `undefined` |
| `rootName` | `string` | `''` |

#### Returns

[`PropertyType`](../interfaces/PropertyType.md)

#### Defined in

[lib/common/generator/property-type.service.ts:225](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L225)

___

### object2ValueInfos

▸ **object2ValueInfos**(`parsedObject`, `rootName?`): [`ValueInfo`](ValueInfo.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parsedObject` | `Object` | `undefined` |
| `rootName` | `string` | `''` |

#### Returns

[`ValueInfo`](ValueInfo.md)[]

#### Defined in

[lib/common/generator/property-type.service.ts:253](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L253)

___

### valueInfos2PropertyType

▸ **valueInfos2PropertyType**(`valueInfos`): [`PropertyType`](../interfaces/PropertyType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueInfos` | [`ValueInfo`](ValueInfo.md)[] |

#### Returns

[`PropertyType`](../interfaces/PropertyType.md)

#### Defined in

[lib/common/generator/property-type.service.ts:275](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/property-type.service.ts#L275)
