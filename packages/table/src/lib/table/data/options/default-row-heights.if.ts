/**
 * The `DefaultRowHeightsIf` interface provides a specification for the default row heights in the table layout.
 * It includes properties for defining heights of the header, body, and footer sections of the rows.
 * Each property is of type `number`, which states the height in pixels.
 *
 * @property `header`: It denotes the height of the table header row. Developers can set their preferred height as per the design requirements.
 * @property `body`: It sets the height of the body rows present in the table. This value can be individually adjusted by developers.
 * @property `footer`: This property represents the height of the table footer row. It has a mutable value that can be modified as per requirements.
 *
 * @example
 * // declaring a variable with default row heights
 * let rowHeights: DefaultRowHeightsIf = {
 *     header: 50,
 *     body: 100,
 *     footer: 60
 * };
 *
 * For implementation details, refer to the `DefaultRowHeights` class.
 */
export interface DefaultRowHeightsIf {
  header: number,
  body: number,
  footer: number
}
