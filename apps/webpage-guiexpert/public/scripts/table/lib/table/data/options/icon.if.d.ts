/**
 * Represents an Icon with content, css style and css classes.
 *
 * Example:
 *
 * new Icon(
 *    ">",
 *    "transform: rotate(90deg) translate(66%, -66%); transform-origin: 0 0;",
 *    ["gt-table-tree-arrow-expanded"]
 * )
 *
 * @interface
 */
export interface IconIf {
    content: string;
    style: string;
    classes: string[];
}
