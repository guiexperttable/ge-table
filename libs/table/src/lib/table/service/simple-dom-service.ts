import { DomServiceIf } from "./dom-service.if";


export class SimpleDomService implements DomServiceIf {


  setStyle(el: any, style: string, value: any): any {
    el.style[style] = value;
    return el;
  };


  appendText(parent: HTMLDivElement, text: string): HTMLDivElement {
    const div = this.createText(text);
    this.appendChild(parent, div);
    return div;
  }


  addClass(div: HTMLDivElement, clazz: string) {
    if (clazz.includes(" ")) {
      clazz.split(" ").forEach(c => div.classList.add(c));
    } else {
      div.classList.add(clazz);
    }
    return div;
  }

  appendChild(parent: HTMLElement, child: HTMLElement): void {
    parent.appendChild(child);
  }

  createElement<T>(name: string): T {
    return document.createElement(name) as T;
  }

  createText(value: string): any {
    return document.createTextNode(value);
  }

  setAttribute(ele: HTMLElement, key: string, value: string): void {
    ele.setAttribute(key, value);
  }


}
