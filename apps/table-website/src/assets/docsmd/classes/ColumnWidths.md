[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnWidths

# Class: ColumnWidths

## Implements

- [`ColumnWidthsIf`](../interfaces/ColumnWidthsIf.md)

## Table of contents

### Constructors

- [constructor](ColumnWidths.md#constructor)

### Properties

- [autoCalc](ColumnWidths.md#autocalc)
- [charCountToWidth](ColumnWidths.md#charcounttowidth)
- [maxWidth](ColumnWidths.md#maxwidth)
- [minWidth](ColumnWidths.md#minwidth)
- [takeHeaderLabelsIntoAccount](ColumnWidths.md#takeheaderlabelsintoaccount)

## Constructors

### constructor

• **new ColumnWidths**(`autoCalc?`, `takeHeaderLabelsIntoAccount?`, `charCountToWidth?`, `minWidth?`, `maxWidth?`): [`ColumnWidths`](ColumnWidths.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `autoCalc` | `boolean` | `true` |
| `takeHeaderLabelsIntoAccount` | `boolean` | `true` |
| `charCountToWidth` | (`charCount`: `number`, `columnIndex`: `number`) => `number` | `undefined` |
| `minWidth` | `number` | `50` |
| `maxWidth` | `number` | `450` |

#### Returns

[`ColumnWidths`](ColumnWidths.md)

#### Defined in

[lib/table/crud/column-widths.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L6)

## Properties

### autoCalc

• **autoCalc**: `boolean` = `true`

#### Implementation of

[ColumnWidthsIf](../interfaces/ColumnWidthsIf.md).[autoCalc](../interfaces/ColumnWidthsIf.md#autocalc)

#### Defined in

[lib/table/crud/column-widths.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L7)

___

### charCountToWidth

• **charCountToWidth**: (`charCount`: `number`, `columnIndex`: `number`) => `number`

#### Type declaration

▸ (`charCount`, `columnIndex`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `charCount` | `number` |
| `columnIndex` | `number` |

##### Returns

`number`

#### Implementation of

[ColumnWidthsIf](../interfaces/ColumnWidthsIf.md).[charCountToWidth](../interfaces/ColumnWidthsIf.md#charcounttowidth)

#### Defined in

[lib/table/crud/column-widths.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L9)

___

### maxWidth

• **maxWidth**: `number` = `450`

#### Implementation of

[ColumnWidthsIf](../interfaces/ColumnWidthsIf.md).[maxWidth](../interfaces/ColumnWidthsIf.md#maxwidth)

#### Defined in

[lib/table/crud/column-widths.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L11)

___

### minWidth

• **minWidth**: `number` = `50`

#### Implementation of

[ColumnWidthsIf](../interfaces/ColumnWidthsIf.md).[minWidth](../interfaces/ColumnWidthsIf.md#minwidth)

#### Defined in

[lib/table/crud/column-widths.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L10)

___

### takeHeaderLabelsIntoAccount

• **takeHeaderLabelsIntoAccount**: `boolean` = `true`

#### Implementation of

[ColumnWidthsIf](../interfaces/ColumnWidthsIf.md).[takeHeaderLabelsIntoAccount](../interfaces/ColumnWidthsIf.md#takeheaderlabelsintoaccount)

#### Defined in

[lib/table/crud/column-widths.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/crud/column-widths.ts#L8)
