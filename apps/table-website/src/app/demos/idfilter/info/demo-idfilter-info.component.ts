import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-idfilter-info",
  templateUrl: "./demo-idfilter-info.component.html",
  styleUrls: ["./demo-idfilter-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoIdfilterInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
