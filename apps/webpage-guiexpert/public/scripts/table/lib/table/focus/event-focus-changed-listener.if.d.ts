import { FocusModelIf } from './focus-model.if';
export interface EventFocusChangedListenerIf {
    onFocusChanged(model: FocusModelIf): void;
}
