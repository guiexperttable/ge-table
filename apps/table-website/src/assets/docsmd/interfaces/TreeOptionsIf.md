[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeOptionsIf

# Interface: TreeOptionsIf

This interface `TreeOptionsIf` represents the specific configuration and properties of a tree component, usually displayed in a User Interface (UI).
The interface includes several properties that illustrate the statuses of tree's collapsible nodes. All properties represent the Icon characteristics in their different states in the tree.

Property `arrowExpandCollapseAll` is an Icon configuration when an action to expand or collapse all nodes in the tree is performed.

Property `arrowExpanded` describes Icon configuration when a single tree node is expanded.

Property `arrowCollapsed` holds Icon configuration when a single tree node is collapsed.

Property `arrowPlaceholder` entails Icon configuration signifying an placeholder arrow, generally used when tree nodes have no children.

All properties of this interface are themselves objects based on another interface `IconIf`, symbolizing an icon configuration. Each icon has `content` - a string that represents icon, `style` - a string which determines the CSS styles applied to the icon, and `classes` - an array of strings for CSS class name(s) to be added to the icon.

**`See`**

[IconIf](IconIf.md)

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

## Implemented by

- [`TreeOptions`](../classes/TreeOptions.md)

## Table of contents

### Properties

- [arrowCollapsed](TreeOptionsIf.md#arrowcollapsed)
- [arrowExpandCollapseAll](TreeOptionsIf.md#arrowexpandcollapseall)
- [arrowExpanded](TreeOptionsIf.md#arrowexpanded)
- [arrowPlaceholder](TreeOptionsIf.md#arrowplaceholder)

## Properties

### arrowCollapsed

• **arrowCollapsed**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/tree-options.if.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.if.ts#L48)

___

### arrowExpandCollapseAll

• **arrowExpandCollapseAll**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/tree-options.if.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.if.ts#L46)

___

### arrowExpanded

• **arrowExpanded**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/tree-options.if.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.if.ts#L47)

___

### arrowPlaceholder

• **arrowPlaceholder**: [`IconIf`](IconIf.md)

#### Defined in

[lib/table/data/options/tree-options.if.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/tree-options.if.ts#L49)
