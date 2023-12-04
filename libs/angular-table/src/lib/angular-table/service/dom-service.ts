import {Injectable, Renderer2} from "@angular/core";
import {DomServiceIf} from "@guiexpert/table";


@Injectable({
  providedIn: "root"
})
export class DomService implements DomServiceIf {

  constructor(
    readonly renderer: Renderer2,
  ) {
  }

  setStyle(el: any, style: string, value: any): any {
    this.renderer.setStyle(el, style, value);
    return el;
  };


  appendText(parent: HTMLDivElement, text: string): HTMLDivElement {
    const div = this.renderer.createText(text);
    this.renderer.appendChild(parent, div);
    return div;
  }


  addClass(div: HTMLDivElement, clazz: string) {
    if (clazz.includes(' ')) {
      clazz.split(' ').forEach(c => this.renderer.addClass(div, c))
    } else {
      this.renderer.addClass(div, clazz);
    }
    return div;
  }

  removeClass(div: HTMLDivElement, clazz: string) {
    if (clazz.includes(" ")) {
      clazz.split(" ").forEach(c => div.classList.remove(c));
    } else {
      div.classList.remove(clazz);
    }
    return div;
  }

  appendChild(parent: HTMLElement, child: HTMLElement): void {
    this.renderer.appendChild(parent, child);
  }

  createElement<T>(name: string): T {
    return this.renderer.createElement(name);
  }

  createText(text: string): HTMLElement {
    return this.renderer.createText(text);
  }

  setAttribute(ele: HTMLElement, key: string, value: string): void {
    this.renderer.setAttribute(ele, key, value);
  }


}
