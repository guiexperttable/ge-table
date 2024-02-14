import { DomServiceIf } from "./dom-service.if";
export declare class SimpleDomService implements DomServiceIf {
    setStyle(el: any, style: string, value: any): any;
    appendText(parent: HTMLDivElement, text: string): HTMLDivElement;
    addClass(div: HTMLDivElement, clazz: string): HTMLDivElement;
    removeClass(div: HTMLDivElement, clazz: string): HTMLDivElement;
    appendChild(parent: HTMLElement, child: HTMLElement): void;
    createElement<T>(name: string): T;
    createText(value: string): any;
    setAttribute(ele: HTMLElement, key: string, value: string): void;
}
