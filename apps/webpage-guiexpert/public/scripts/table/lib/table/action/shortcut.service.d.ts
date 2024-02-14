import { TableScope } from "../table-scope";
import { ShortcutActionIdMapping } from "./shortcut-actionid-mapping.type";
import { OnActionTriggeredIf } from "./on-action-triggered.if";
/**
 * Represents a service for managing shortcuts and triggering actions based on keyboard events.
 */
export declare class ShortcutService {
    protected tableScope: TableScope;
    private shortcutActionIdMapping;
    private listener;
    constructor(tableScope: TableScope);
    /**
     * Adds a listener to the list of listeners.
     *
     * @param {OnActionTriggeredIf} listener - The listener to be added.
     * @returns {void}
     */
    addListener(listener: OnActionTriggeredIf): void;
    /**
     * Initializes the ShortcutService by assigning shortcut action id mappings based on the current operating system.
     * Also adds key down event listener to the table host element.
     */
    init(): void;
    private assignPredefinedSystemShortcutMappings;
    private isMacintosh;
    private isDebug;
    private isLocalhost;
    private onKeyDown;
    private emit;
    private findEntity;
    private areTokensEquals;
    private getTokenByEvent;
    /**
     * Retrieves the shortcut action mapping object.
     *
     * @returns {ShortcutActionIdMapping} - The shortcut action mapping object.
     */
    getShortcutActionMapping(): ShortcutActionIdMapping;
}
