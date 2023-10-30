import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-olympic-info",
  templateUrl: "./demo-olympic-info.component.html",
  styleUrls: ["./demo-olympic-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoOlympicInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
