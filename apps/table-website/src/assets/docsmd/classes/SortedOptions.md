[@guiexpert/table](../README.md) / [Exports](../modules.md) / SortedOptions

# Class: SortedOptions

This TypeScript interface, `SortedOptionsIf`, represents the configuration options for sorting.

It contains three properties, each of type `IconIf`. This allows the consumer of this interface to specify their
own icon for ascending sort order (`iconAsc`), descending sort order (`iconDesc`), and a placeholder icon (`iconPlaceholder`).

The IconIf interface represents an icon with content, css style, and css classes.

For example:

```typescript
{
   iconAsc: {content: '>', style: 'color:green;', classes: ['sortable-icon', 'sortable-asc']},
   iconDesc: {content: '<', style: 'color:red;', classes: ['sortable-icon', 'sortable-desc']},
   iconPlaceholder: {content: '', style: '', classes: ['sortable-icon']}
}
```

Note that the `classes` property in `IconIf` expects an array of strings, each string indicating a CSS class that should be applied to the icon.

## Implements

- [`SortedOptionsIf`](../interfaces/SortedOptionsIf.md)

## Table of contents

### Constructors

- [constructor](SortedOptions.md#constructor)

### Properties

- [iconAsc](SortedOptions.md#iconasc)
- [iconDesc](SortedOptions.md#icondesc)
- [iconPlaceholder](SortedOptions.md#iconplaceholder)

## Constructors

### constructor

• **new SortedOptions**(`iconAsc?`, `iconDesc?`, `iconPlaceholder?`): [`SortedOptions`](SortedOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iconAsc` | [`IconIf`](../interfaces/IconIf.md) |
| `iconDesc` | [`IconIf`](../interfaces/IconIf.md) |
| `iconPlaceholder` | [`IconIf`](../interfaces/IconIf.md) |

#### Returns

[`SortedOptions`](SortedOptions.md)

#### Defined in

[lib/table/data/options/sorted-options.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.ts#L7)

## Properties

### iconAsc

• **iconAsc**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[SortedOptionsIf](../interfaces/SortedOptionsIf.md).[iconAsc](../interfaces/SortedOptionsIf.md#iconasc)

#### Defined in

[lib/table/data/options/sorted-options.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.ts#L8)

___

### iconDesc

• **iconDesc**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[SortedOptionsIf](../interfaces/SortedOptionsIf.md).[iconDesc](../interfaces/SortedOptionsIf.md#icondesc)

#### Defined in

[lib/table/data/options/sorted-options.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.ts#L9)

___

### iconPlaceholder

• **iconPlaceholder**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[SortedOptionsIf](../interfaces/SortedOptionsIf.md).[iconPlaceholder](../interfaces/SortedOptionsIf.md#iconplaceholder)

#### Defined in

[lib/table/data/options/sorted-options.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.ts#L10)
