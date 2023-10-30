import { Component, Input } from "@angular/core";

export type LogoMode = "colored" | "monocolor-black" | "monocolor-white";

@Component({
  selector: "guiexpert-logo",
  templateUrl: "./gui-expert-logo.component.html",
  styleUrls: ["./gui-expert-logo.component.scss"]
})
export class GuiExpertLogoComponent {

  @Input()
  mode: LogoMode = "colored";

  @Input()
  size = 40;


}
