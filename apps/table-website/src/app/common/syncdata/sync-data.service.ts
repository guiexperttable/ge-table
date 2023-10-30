import { EventEmitter } from "@angular/core";


export class SyncDataService<T> {

  public received$ = new EventEmitter<T>();


  constructor(
    public storageKey: string = "message"
  ) {
    window.addEventListener("storage", this.messageReceived.bind(this));
  }

  messageBroadcast(message: T) {
    localStorage.setItem(this.storageKey, JSON.stringify(message));
  }

  private messageReceived(ev: StorageEvent) {
    if (ev.key === this.storageKey) {
      if (ev.newValue) {
        const data = JSON.parse(ev.newValue) as T;
        this.received$.next(data);
      }
    }
  }
}

