import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {


  private _sideMenuNeedsSpace = true;

  get sideMenuNeedsSpace(): boolean {
    return this._sideMenuNeedsSpace;
  }

  set sideMenuNeedsSpace(value: boolean) {
    this._sideMenuNeedsSpace = value;
    this.onSideMenuNeedsSpace$.next(value);
  }

  onSideMenuNeedsSpace$ = new BehaviorSubject<boolean>(this._sideMenuNeedsSpace);

}


