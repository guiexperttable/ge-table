[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeOptions

# Class: TreeOptions

This interface `TreeOptionsIf` represents the specific configuration and properties of a tree component, usually displayed in a User Interface (UI).
The interface includes several properties that illustrate the statuses of tree's collapsible nodes. All properties represent the Icon characteristics in their different states in the tree.

Property `arrowExpandCollapseAll` is an Icon configuration when an action to expand or collapse all nodes in the tree is performed.

Property `arrowExpanded` describes Icon configuration when a single tree node is expanded.

Property `arrowCollapsed` holds Icon configuration when a single tree node is collapsed.

Property `arrowPlaceholder` entails Icon configuration signifying an placeholder arrow, generally used when tree nodes have no children.

All properties of this interface are themselves objects based on another interface `IconIf`, symbolizing an icon configuration. Each icon has `content` - a string that represents icon, `style` - a string which determines the CSS styles applied to the icon, and `classes` - an array of strings for CSS class name(s) to be added to the icon.

**`See`**

[IconIf](../interfaces/IconIf.md)

**`Example`**

```ts
const treeOptions: TreeOptionsIf = {
  arrowExpandCollapseAll: {
    content: '>>',
    style: 'color: blue;',
    classes: ['expand-collapse-all-icon-class'],
  },
  arrowExpanded: {
    content: '>',
    style: 'color: green;',
    classes: ['expand-icon-class'],
  },
  arrowCollapsed: {
    content: '<',
    style: 'color: red;',
    classes: ['collapse-icon-class'],
  },
  arrowPlaceholder: {
    content: '-',
    style: 'color: gray;',
    classes: ['placeholder-icon-class'],
  },
};
```

## Implements

- [`TreeOptionsIf`](../interfaces/TreeOptionsIf.md)

## Table of contents

### Constructors

- [constructor](TreeOptions.md#constructor)

### Properties

- [arrowCollapsed](TreeOptions.md#arrowcollapsed)
- [arrowExpandCollapseAll](TreeOptions.md#arrowexpandcollapseall)
- [arrowExpanded](TreeOptions.md#arrowexpanded)
- [arrowPlaceholder](TreeOptions.md#arrowplaceholder)

## Constructors

### constructor

• **new TreeOptions**(`arrowExpanded?`, `arrowCollapsed?`, `arrowPlaceholder?`, `arrowExpandCollapseAll?`): [`TreeOptions`](TreeOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrowExpanded` | [`IconIf`](../interfaces/IconIf.md) |
| `arrowCollapsed` | [`IconIf`](../interfaces/IconIf.md) |
| `arrowPlaceholder` | [`IconIf`](../interfaces/IconIf.md) |
| `arrowExpandCollapseAll` | [`IconIf`](../interfaces/IconIf.md) |

#### Returns

[`TreeOptions`](TreeOptions.md)

#### Defined in

[lib/table/data/options/tree-options.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.ts#L7)

## Properties

### arrowCollapsed

• **arrowCollapsed**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[TreeOptionsIf](../interfaces/TreeOptionsIf.md).[arrowCollapsed](../interfaces/TreeOptionsIf.md#arrowcollapsed)

#### Defined in

[lib/table/data/options/tree-options.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.ts#L13)

___

### arrowExpandCollapseAll

• **arrowExpandCollapseAll**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[TreeOptionsIf](../interfaces/TreeOptionsIf.md).[arrowExpandCollapseAll](../interfaces/TreeOptionsIf.md#arrowexpandcollapseall)

#### Defined in

[lib/table/data/options/tree-options.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.ts#L23)

___

### arrowExpanded

• **arrowExpanded**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[TreeOptionsIf](../interfaces/TreeOptionsIf.md).[arrowExpanded](../interfaces/TreeOptionsIf.md#arrowexpanded)

#### Defined in

[lib/table/data/options/tree-options.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.ts#L8)

___

### arrowPlaceholder

• **arrowPlaceholder**: [`IconIf`](../interfaces/IconIf.md)

#### Implementation of

[TreeOptionsIf](../interfaces/TreeOptionsIf.md).[arrowPlaceholder](../interfaces/TreeOptionsIf.md#arrowplaceholder)

#### Defined in

[lib/table/data/options/tree-options.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.ts#L18)
