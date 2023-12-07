[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableFactory

# Class: TableFactory

## Table of contents

### Constructors

- [constructor](TableFactory.md#constructor)

### Methods

- [buildByTypedRows](TableFactory.md#buildbytypedrows)
- [buildByTypedRowsParam](TableFactory.md#buildbytypedrowsparam)
- [createByAreaModels](TableFactory.md#createbyareamodels)
- [createByAreaModelsParam](TableFactory.md#createbyareamodelsparam)
- [createByObjectArray](TableFactory.md#createbyobjectarray)
- [createByObjectArrayParam](TableFactory.md#createbyobjectarrayparam)
- [createTableModel](TableFactory.md#createtablemodel)

## Constructors

### constructor

• **new TableFactory**(): [`TableFactory`](TableFactory.md)

#### Returns

[`TableFactory`](TableFactory.md)

## Methods

### buildByTypedRows

▸ **buildByTypedRows**\<`T`\>(`rows`, `columnDefs`, `tableOptions?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`): [`TableModelIf`](../interfaces/TableModelIf.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rows` | `T`[] | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | `undefined` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/factory/table-factory.ts:215](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L215)

___

### buildByTypedRowsParam

▸ **buildByTypedRowsParam**\<`T`\>(`param`): [`TableModelIf`](../interfaces/TableModelIf.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] |
| `param.fixedLeftColumnCount?` | `number` |
| `param.fixedRightColumnCount?` | `number` |
| `param.rows` | `T`[] |
| `param.tableOptions?` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/factory/table-factory.ts:198](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L198)

___

### createByAreaModels

▸ **createByAreaModels**(`headerAreaModel?`, `bodyAreaModel`, `footerAreaModel?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs`, `columnSizes?`, `overridingColumnWidth?`, `columnCount`): [`TableModel`](TableModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `footerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |
| `rowCheckboxVisible` | `boolean` | `false` |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` |
| `columnSizes` | `number`[] | `[]` |
| `overridingColumnWidth` | `number` | `-1` |
| `columnCount` | `number` | `undefined` |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/factory/table-factory.ts:289](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L289)

___

### createByAreaModelsParam

▸ **createByAreaModelsParam**(`param`): [`TableModel`](TableModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.columnCount?` | `number` |
| `param.columnDefs?` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] |
| `param.columnSizes?` | `number`[] |
| `param.defaultRowHeights?` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) |
| `param.fixedLeftColumnCount?` | `number` |
| `param.fixedRightColumnCount?` | `number` |
| `param.footerAreaModel?` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.headerAreaModel?` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `param.overridingColumnWidth?` | `number` |
| `param.rowCheckboxVisible?` | `boolean` |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/factory/table-factory.ts:317](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L317)

___

### createByObjectArray

▸ **createByObjectArray**\<`T`\>(`rows`, `header?`, `footer?`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs`, `columnSizes?`): [`TableModel`](TableModel.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rows` | `T`[] | `undefined` |
| `header` | `string`[][] | `[]` |
| `footer` | `string`[][] | `[]` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |
| `rowCheckboxVisible` | `boolean` | `false` |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `undefined` |
| `columnSizes` | `number`[] | `[]` |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/factory/table-factory.ts:345](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L345)

___

### createByObjectArrayParam

▸ **createByObjectArrayParam**\<`T`\>(`param`): [`TableModel`](TableModel.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.columnDefs?` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] |
| `param.columnSizes?` | `number`[] |
| `param.defaultRowHeights?` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) |
| `param.fixedLeftColumnCount?` | `number` |
| `param.fixedRightColumnCount?` | `number` |
| `param.footer?` | `string`[][] |
| `param.header?` | `string`[][] |
| `param.rowCheckboxVisible?` | `boolean` |
| `param.rows` | `T`[] |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/factory/table-factory.ts:264](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L264)

___

### createTableModel

▸ **createTableModel**(`p`): [`TableModelIf`](../interfaces/TableModelIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Partial`\<\{ `bodyAreaModel`: [`AreaModelIf`](../interfaces/AreaModelIf.md) ; `bodyData`: `any`[][] ; `columnCount`: `number` ; `columnDefs`: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] ; `columnSizes`: `number`[] ; `defaultRowHeights`: [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) ; `fixedLeftColumnCount`: `number` ; `fixedRightColumnCount`: `number` ; `footerAreaModel`: [`AreaModelIf`](../interfaces/AreaModelIf.md) ; `footerData`: `string`[][] ; `getSelectionModel`: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\> ; `headerAreaModel`: [`AreaModelIf`](../interfaces/AreaModelIf.md) ; `headerData`: `string`[][] ; `overridingColumnWidth`: `number` ; `parentSize`: `number` ; `properties`: `string`[] ; `rowCheckboxVisible`: `boolean` ; `rows`: `any`[] ; `tableOptions`: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)  }\> |

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/factory/table-factory.ts:26](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/factory/table-factory.ts#L26)
