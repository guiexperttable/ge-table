import { IconIf } from "./icon.if";
/**
 * This interface `TreeOptionsIf` represents the specific configuration and properties of a tree component, usually displayed in a User Interface (UI).
 * The interface includes several properties that illustrate the statuses of tree's collapsible nodes. All properties represent the Icon characteristics in their different states in the tree.
 *
 * Property `arrowExpandCollapseAll` is an Icon configuration when an action to expand or collapse all nodes in the tree is performed.
 *
 * Property `arrowExpanded` describes Icon configuration when a single tree node is expanded.
 *
 * Property `arrowCollapsed` holds Icon configuration when a single tree node is collapsed.
 *
 * Property `arrowPlaceholder` entails Icon configuration signifying an placeholder arrow, generally used when tree nodes have no children.
 *
 * All properties of this interface are themselves objects based on another interface `IconIf`, symbolizing an icon configuration. Each icon has `content` - a string that represents icon, `style` - a string which determines the CSS styles applied to the icon, and `classes` - an array of strings for CSS class name(s) to be added to the icon.
 *
 * @interface
 * @see {@link IconIf}
 * @example
 *
 * const treeOptions: TreeOptionsIf = {
 *   arrowExpandCollapseAll: {
 *     content: '>>',
 *     style: 'color: blue;',
 *     classes: ['expand-collapse-all-icon-class'],
 *   },
 *   arrowExpanded: {
 *     content: '>',
 *     style: 'color: green;',
 *     classes: ['expand-icon-class'],
 *   },
 *   arrowCollapsed: {
 *     content: '<',
 *     style: 'color: red;',
 *     classes: ['collapse-icon-class'],
 *   },
 *   arrowPlaceholder: {
 *     content: '-',
 *     style: 'color: gray;',
 *     classes: ['placeholder-icon-class'],
 *   },
 * };
 */
export interface TreeOptionsIf {
    arrowExpandCollapseAll: IconIf;
    arrowExpanded: IconIf;
    arrowCollapsed: IconIf;
    arrowPlaceholder: IconIf;
}
