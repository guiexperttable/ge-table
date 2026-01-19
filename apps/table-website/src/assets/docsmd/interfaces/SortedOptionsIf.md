[@guiexpert/table](../README.md) / [Exports](../modules.md) / SortedOptionsIf

# Interface: SortedOptionsIf

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

## Implemented by

- [`SortedOptions`](../classes/SortedOptions.md)

## Table of contents

### Properties

- [iconAsc](SortedOptionsIf.md#iconasc)
- [iconDesc](SortedOptionsIf.md#icondesc)
- [iconPlaceholder](SortedOptionsIf.md#iconplaceholder)

## Properties

### iconAsc

• **iconAsc**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/sorted-options.if.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.if.ts#L27)

___

### iconDesc

• **iconDesc**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/sorted-options.if.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.if.ts#L28)

___

### iconPlaceholder

• **iconPlaceholder**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/sorted-options.if.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/sorted-options.if.ts#L29)
