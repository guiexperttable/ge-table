import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-treetable-info",
  templateUrl: "./demo-treetable-info.component.html",
  styleUrls: ["./demo-treetable-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTreetableInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
