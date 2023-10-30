import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'guiexpert-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {

  private doCheckCount = 0;
  private readonly logDoCheckInBrowserTitle = location.href.includes('localhost');

  constructor(
    private readonly router: Router
  ) {
  }

  ngDoCheck() {
    if (this.logDoCheckInBrowserTitle) {
      this.doCheckCount++;
      document.title = '' + this.doCheckCount;
    }
  }

  go2Home() {
    this.router.navigate(['/'])
  }
}
