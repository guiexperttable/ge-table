import { ActionId } from "./action-id.type";

export interface OnActionTriggeredIf {

  /**
   * Triggers an action based on the provided action ID.
   *
   * @param {ActionId} actionId - The ID of the action to be triggered.
   *
   * @return {boolean} - Returns true if the action was successfully triggered; otherwise, false.
   */
  onActionTriggered(actionId: ActionId): boolean;

}
