import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  private fullScreen = this.isDocumentFullScreen();

  onFullScreenToggled$ = new BehaviorSubject<boolean>(this.fullScreen);

  constructor() {
    document.addEventListener('fullscreenchange', () => {
      this.fullScreen = this.isDocumentFullScreen();
      this.onFullScreenToggled$.next(this.fullScreen);
    });
  }


  toggleFullScreen() {
    if (!this.isDocumentFullScreen()) {
      const documentElement = document.documentElement;
      if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
      }
      this.fullScreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.fullScreen = false;
    }
  }

  isFullScreen(): boolean {
    return this.fullScreen;
  }

  private isDocumentFullScreen(): boolean {
    return !!document.fullscreenElement;
  }

}


