import { ActionId } from "./action-id.type";
import { TableScope } from "../table-scope";
import { ShortcutActionIdMapping } from "./shortcut-actionid-mapping.type";
import { WindowsShortcutActionIdMapping } from "./windows-shortcut-actionId-mapping";
import { OsxShortcutActionIdMapping } from "./osx-shortcut-actionId-mapping";
import { OnActionTriggeredIf } from "./on-action-triggered.if";


/**
 * Represents a service for managing shortcuts and triggering actions based on keyboard events.
 */
export class ShortcutService {

  private shortcutActionIdMapping: ShortcutActionIdMapping = {};
  private listener: OnActionTriggeredIf[] = [];

  constructor(
    protected tableScope: TableScope
  ) {
    this.listener.push(tableScope);
    this.init();
  }


  addListener(listener: OnActionTriggeredIf) {
    if (!this.listener.includes(listener)) {
      this.listener.push(listener);
    }
  }

  init() {
    if (this.isMacintosh()) {
      Object.assign(this.shortcutActionIdMapping, new OsxShortcutActionIdMapping().get());
    } else {
      Object.assign(this.shortcutActionIdMapping, new WindowsShortcutActionIdMapping().get());
    }
    Object.assign(this.shortcutActionIdMapping, this.tableScope.tableOptions.shortcutActionIdMapping);
    if (this.isDebug()) {
      console.debug("ShortcutService", this.shortcutActionIdMapping);
    }
    // add key down listener:
    this.tableScope.hostElement.addEventListener("keydown", this.onKeyDown.bind(this));
    //this.tableScope.hostElement.addEventListener("keyup", this.onKeyDown.bind(this));
  }

  private isMacintosh() {
    return navigator.platform.indexOf("Mac") > -1;
  }

  private isDebug() {
    return this.isLocalhost();
  }

  private isLocalhost() {
    return (location.hostname === "localhost" || location.hostname === "127.0.0.1");
  }


  private onKeyDown(evt: KeyboardEvent) {
    const actionId = this.findEntity(evt);
    if (actionId) {
      const consumed = this.emit(actionId);
      if (consumed) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    }
  }

  private emit(actionId: ActionId): boolean {
    if (this.isDebug()) {
      console.debug("ShortcutService emit      :", actionId);
    }
    let ret = false;
    for (const l of this.listener) {
      const consumed = l.onActionTriggered(actionId);
      if (consumed) {
        ret = true;
      }
    }
    return ret;
  }

  private findEntity(evt: KeyboardEvent): ActionId | undefined {
    const tokens = this.getTokenByEvent(evt);
    if (this.isDebug()) {
      console.debug("ShortcutService tokens    :", tokens);
    }
    for (const key in this.shortcutActionIdMapping) {
      const shortcutTokens = key
        .replace(/opt/g, "alt")
        .replace(/cmd/g, "meta")
        .split(/[+ ]/g).sort();

      if (this.areTokensEquals(tokens, shortcutTokens)) {
        return this.shortcutActionIdMapping[key] as ActionId;
      }
    }
    return undefined;
  }

  private areTokensEquals(tokens1: string[], tokens2: string[]): boolean {
    if (tokens1.length !== tokens2.length) {
      return false;
    }
    if (tokens1.length === 0) {
      return false;
    }
    for (let i = 0; i < tokens1.length; i++) {
      if (tokens1[i] !== tokens2[i]) {
        return false;
      }
    }

    return true;
  }

  private getTokenByEvent(evt: KeyboardEvent): string[] {
    const tokens: string[] = [];
    if (evt.altKey) {
      tokens.push("alt");
    }
    if (evt.shiftKey) {
      tokens.push("shift");
    }
    if (evt.ctrlKey) {
      tokens.push("ctrl");
    }
    if (evt.metaKey) {
      tokens.push("meta");
    }
    if (evt.code) {
      tokens.push(evt.code.toLowerCase().replace(/key/g, ""));
    }
    return tokens.sort();
  }

}
