import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-headerdblclick-info",
  templateUrl: "./demo-cellgroup-info.component.html",
  styleUrls: ["./demo-cellgroup-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCellgroupInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
