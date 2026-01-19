[@guiexpert/table](../README.md) / [Exports](../modules.md) / JsonService

# Class: JsonService

## Table of contents

### Constructors

- [constructor](JsonService.md#constructor)

### Methods

- [fixJSON](JsonService.md#fixjson)

## Constructors

### constructor

• **new JsonService**(): [`JsonService`](JsonService.md)

#### Returns

[`JsonService`](JsonService.md)

## Methods

### fixJSON

▸ **fixJSON**(`jsonString`): `string`

Fixes an invalid json like this:
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

 into a valid json string by adding '}]'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |

#### Returns

`string`

#### Defined in

[lib/common/generator/json-service.ts:41](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/json-service.ts#L41)
