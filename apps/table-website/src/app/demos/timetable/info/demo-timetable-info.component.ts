import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-timetable-info",
  templateUrl: "./demo-timetable-info.component.html",
  styleUrls: ["./demo-timetable-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTimetableInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
