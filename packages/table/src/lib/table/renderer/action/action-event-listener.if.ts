import { ActionEventIf } from './action-event.if';

export interface ActionEventListenerIf{


  onActionEvent(actionEvent: ActionEventIf): void;

}