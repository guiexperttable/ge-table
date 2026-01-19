[@guiexpert/table](../README.md) / [Exports](../modules.md) / DefaultRowHeightsIf

# Interface: DefaultRowHeightsIf

The `DefaultRowHeightsIf` interface provides a specification for the default row heights in the table layout.
It includes properties for defining heights of the header, body, and footer sections of the rows.
Each property is of type `number`, which states the height in pixels.

**`Example`**

```ts
// declaring a variable with default row heights
let rowHeights: DefaultRowHeightsIf = {
    header: 50,
    body: 100,
    footer: 60
};

For implementation details, refer to the `DefaultRowHeights` class.
```

## Implemented by

- [`DefaultRowHeights`](../classes/DefaultRowHeights.md)

## Table of contents

### Properties

- [body](DefaultRowHeightsIf.md#body)
- [footer](DefaultRowHeightsIf.md#footer)
- [header](DefaultRowHeightsIf.md#header)

## Properties

### body

• **body**: `number`

#### Defined in

[lib/table/data/options/default-row-heights.if.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/default-row-heights.if.ts#L22)

___

### footer

• **footer**: `number`

#### Defined in

[lib/table/data/options/default-row-heights.if.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/default-row-heights.if.ts#L23)

___

### header

• **header**: `number`

#### Defined in

[lib/table/data/options/default-row-heights.if.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/default-row-heights.if.ts#L21)
