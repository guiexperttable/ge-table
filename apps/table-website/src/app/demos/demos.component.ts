import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-demos",
  templateUrl: "./demos.component.html",
  styleUrls: ["./demos.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosComponent {

  wipVisible = location.host.includes('localhost');

}
