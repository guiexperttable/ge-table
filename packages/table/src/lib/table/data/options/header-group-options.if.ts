import { IconIf } from "./icon.if";

/**
 * The `HeaderGroupOptionsIf` interface is part of the TypeScript project,
 * and it's used as a type definition for the options of a header group component.
 * It includes the specifications for both the expanded and collapsed states of the said header group component.
 *
 * This interface contains two properties:
 * - `iconExpanded`: An `IconIf` interface definition for the icon shown when the header group is expanded.
 * - `iconCollapsed`: An `IconIf` interface definition for the icon shown when the header group is collapsed.
 *
 * Each of these properties, `iconExpanded` and `iconCollapsed`, is an object that adheres to the `IconIf` interface.
 * Therefore, they should include:
 * - `content`: (type `string`) which represents the HTML content of the icon.
 * - `style`: (type `string`) a string containing the CSS style to be applied to the icon.
 * - `classes`: (type `string[]`) which is an array of CSS classes to be applied to the icon.
 *
 * @interface
 * @see {@link IconIf}
 *
 * @example
 *
 * const HeaderGroupOptions: HeaderGroupOptionsIf = {
 *   iconExpanded: {
 *     content: "<i class='my-expanded-icon'></i>",
 *     style: "color: green;",
 *     classes: ["my-expanded-icon-class"]
 *   },
 *   iconCollapsed: {
 *     content: "<i class='my-collapsed-icon'></i>",
 *     style: "color: red;",
 *     classes: ["my-collapsed-icon-class"]
 *   }
 * };
 *
 * This example creates an object conforming to the `HeaderGroupOptionsIf`
 * interface where `iconExpanded` and `iconCollapsed` each hold the specifications
 * for the expanded and collapsed states of a header group component respectively.
 */
export interface HeaderGroupOptionsIf {
  iconExpanded: IconIf;
  iconCollapsed: IconIf;
}

