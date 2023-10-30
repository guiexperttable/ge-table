import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-api-tsdoc",
  templateUrl: "./tsdoc.component.html",
  styleUrls: ["./tsdoc.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TsdocComponent {

  src = "/assets/docs/index.html";

  constructor() {
    this.src = document.location.pathname.replace(/\/api\/tsdoc/g, "/assets/docs");
  }
}
