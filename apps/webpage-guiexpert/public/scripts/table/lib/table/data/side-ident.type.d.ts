/**
 * The `SideIdent` type is utilized in various parts of the application to identify the position
 * of a component or an element on the horizontal axis within a layout. This can be seen in usage
 * within the `TableModel` and `AreaModelIf` classes to manage layout aspects such as column positioning
 * and adjustments.
 *
 * The `SideIdent` is a string literal type that can have the following values:
 * - "west"  : Represents the left side on the horizontal axis of a layout.
 * - "center": Represents the center on the horizontal axis of a layout.
 * - "east"  : Represents the right side on the horizontal axis of a layout.
 *
 * It is used as an argument in numerous functions and interfaces to specify which 'side' the operation pertains to.
 *
 * Example:
 * - In the `TableModel` class, it's used in `getSideAreaWidth` and `getSideStartAndEndColumnIndex` methods to determine
 *   the position and the width of different sections.
 * - In the `ArgsAdjustColumnsToRowParentParams` and `ArgsRenderCellDiv` interfaces, it's used to provide classification
 *   of the area requested for operation.
 *
 * These examples show how crucial this value is for the computation and organization of layout within the application.
 *
 * @see ArgsAdjustColumnsToRowParentParams
 * @see ArgsRenderCellDiv
 * @see TableModel
 * @see AreaModelIf
 * @type {("west"|"center"|"east")}
 */
export type SideIdent = "west" | "center" | "east";
