import { IconIf } from "./icon.if";

/**
 * This TypeScript interface, `SortedOptionsIf`, represents the configuration options for sorting.
 *
 * It contains three properties, each of type `IconIf`. This allows the consumer of this interface to specify their
 * own icon for ascending sort order (`iconAsc`), descending sort order (`iconDesc`), and a placeholder icon (`iconPlaceholder`).
 *
 * The IconIf interface represents an icon with content, css style, and css classes.
 *
 * For example:
 *
 * ```typescript
 * {
 *    iconAsc: {content: '>', style: 'color:green;', classes: ['sortable-icon', 'sortable-asc']},
 *    iconDesc: {content: '<', style: 'color:red;', classes: ['sortable-icon', 'sortable-desc']},
 *    iconPlaceholder: {content: '', style: '', classes: ['sortable-icon']}
 * }
 * ```
 *
 * Note that the `classes` property in `IconIf` expects an array of strings, each string indicating a CSS class that should be applied to the icon.
 *
 * @interface
 */
export interface SortedOptionsIf {

  iconAsc: IconIf,
  iconDesc: IconIf
  iconPlaceholder: IconIf

}
