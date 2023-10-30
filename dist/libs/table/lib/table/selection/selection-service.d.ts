import { GeMouseEvent } from "../data/common/event/ge-mouse-event";
import { TableScope } from "../table-scope";
import { GetT } from "../data/common/get-t";
import { SelectionModelIf } from "./selection-model.if";
import { FocusModelIf } from "../focus/focus-model.if";
import { OnActionTriggeredIf } from "../action/on-action-triggered.if";
import { ActionId } from "../action/action-id.type";
export declare class SelectionService implements OnActionTriggeredIf {
    protected readonly tableScope: TableScope;
    protected getSelectionModel?: GetT<SelectionModelIf>;
    protected getFocusModel?: GetT<FocusModelIf>;
    protected previousEvt?: GeMouseEvent;
    constructor(tableScope: TableScope);
    onMouseClicked(evt: GeMouseEvent, _previousEvt: GeMouseEvent | undefined): boolean;
    onActionTriggered(actionId: ActionId): boolean;
    private createRangeByEvents;
}
