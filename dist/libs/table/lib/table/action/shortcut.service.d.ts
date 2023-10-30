import { TableScope } from "../table-scope";
import { OnActionTriggeredIf } from "./on-action-triggered.if";
export declare class ShortcutService {
    protected tableScope: TableScope;
    private shortcutActionIdMapping;
    private listener;
    constructor(tableScope: TableScope);
    addListener(listener: OnActionTriggeredIf): void;
    init(): void;
    private isMacintosh;
    private isDebug;
    private isLocalhost;
    private onKeyDown;
    private emit;
    private findEnty;
    private areTokensEquals;
    private getTokenByEvent;
}
