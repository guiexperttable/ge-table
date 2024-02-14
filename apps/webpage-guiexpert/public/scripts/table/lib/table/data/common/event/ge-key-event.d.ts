/**
 * Represents a keyboard event.
 *
 * @class GeKeyEvent
 */
export declare class GeKeyEvent {
    status: "down" | "up";
    originalEvent?: KeyboardEvent | undefined;
    constructor(status?: "down" | "up", originalEvent?: KeyboardEvent | undefined);
}
