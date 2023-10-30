import { ActionId } from "./action-id.type";
export interface OnActionTriggeredIf {
    onActionTriggered(actionId: ActionId): boolean;
}
