export interface DomServiceIf {

  setStyle(el: any, style: string, value: any): any;

  addClass(div: HTMLElement, clazz: string): HTMLDivElement;

  createElement<T>(ele: string): T;

  createText(text: string): HTMLElement;

  appendText(parent: HTMLDivElement, text: string): HTMLDivElement;

  appendChild(parent: HTMLElement, child: HTMLElement): void;

  setAttribute(ele: HTMLElement, key: string, value: string): void;
}
