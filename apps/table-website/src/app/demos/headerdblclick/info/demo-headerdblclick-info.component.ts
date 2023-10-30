import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-headerdblclick-info",
  templateUrl: "./demo-headerdblclick-info.component.html",
  styleUrls: ["./demo-headerdblclick-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeaderdblclickInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
