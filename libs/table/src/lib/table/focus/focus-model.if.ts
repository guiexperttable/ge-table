export interface FocusModelIf {

  clear(): void;

  setFocus(rowIndex: number, columnIndex: number): void;

  hasFocus(rowIndex: number, columnIndex: number): boolean;

  getFocus(): [number, number];

  hasChanged(): boolean;

  clearChanged(): void;
}
