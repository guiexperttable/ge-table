import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
  selector: "demo-timetable-info",
  templateUrl: "./demo-timetableevents-info.component.html",
  styleUrls: ["./demo-timetableevents-info.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTimetableeventsInfoComponent implements OnInit {

  ngOnInit(): void {
  }

}
