import { SelectionModelIf } from './selection-model.if';
export interface EventSelectionChangedListenerIf {
    onSelectionChanged(model: SelectionModelIf): void;
}
