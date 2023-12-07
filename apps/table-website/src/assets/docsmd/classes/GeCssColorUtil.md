[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeCssColorUtil

# Class: GeCssColorUtil

## Table of contents

### Constructors

- [constructor](GeCssColorUtil.md#constructor)

### Methods

- [getThreeColorGradientRGB](GeCssColorUtil.md#getthreecolorgradientrgb)
- [getTwoColorGradientRGB](GeCssColorUtil.md#gettwocolorgradientrgb)
- [normalize](GeCssColorUtil.md#normalize)

## Constructors

### constructor

• **new GeCssColorUtil**(): [`GeCssColorUtil`](GeCssColorUtil.md)

#### Returns

[`GeCssColorUtil`](GeCssColorUtil.md)

## Methods

### getThreeColorGradientRGB

▸ **getThreeColorGradientRGB**(`value`, `para`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `para` | [`ThreeColorGradientArgIf`](../interfaces/ThreeColorGradientArgIf.md) |

#### Returns

`string`

#### Defined in

[lib/table/color/ge-css-color-util.ts:33](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/color/ge-css-color-util.ts#L33)

___

### getTwoColorGradientRGB

▸ **getTwoColorGradientRGB**(`value`, `para`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `para` | [`TwoColorGradientArgIf`](../interfaces/TwoColorGradientArgIf.md) |

#### Returns

`string`

#### Defined in

[lib/table/color/ge-css-color-util.ts:18](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/color/ge-css-color-util.ts#L18)

___

### normalize

▸ **normalize**(`value`, `fromSource`, `toSource`, `fromTarget?`, `toTarget?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `fromSource` | `number` | `undefined` |
| `toSource` | `number` | `undefined` |
| `fromTarget` | `number` | `0` |
| `toTarget` | `number` | `1` |

#### Returns

`number`

#### Defined in

[lib/table/color/ge-css-color-util.ts:8](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/color/ge-css-color-util.ts#L8)
