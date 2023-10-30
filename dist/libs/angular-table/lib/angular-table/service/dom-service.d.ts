import { Renderer2 } from "@angular/core";
import { DomServiceIf } from "@guiexpert/table";
import * as i0 from "@angular/core";
export declare class DomService implements DomServiceIf {
    readonly renderer: Renderer2;
    constructor(renderer: Renderer2);
    setStyle(el: any, style: string, value: any): any;
    appendText(parent: HTMLDivElement, text: string): HTMLDivElement;
    addClass(div: HTMLDivElement, clazz: string): HTMLDivElement;
    appendChild(parent: HTMLElement, child: HTMLElement): void;
    createElement<T>(name: string): T;
    createText(text: string): HTMLElement;
    setAttribute(ele: HTMLElement, key: string, value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomService>;
}
