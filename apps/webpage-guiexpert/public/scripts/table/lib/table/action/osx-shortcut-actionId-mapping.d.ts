import { ActionId } from "./action-id.type";
/**
 * Class representing the mapping of OS X shortcut actions to action IDs.
 *
 * Use 'meta' for the MacOS 'cmd' key.
 *
 * @class OsxShortcutActionIdMapping
 */
export declare class OsxShortcutActionIdMapping {
    get(): {
        [key: string]: ActionId;
    };
}
