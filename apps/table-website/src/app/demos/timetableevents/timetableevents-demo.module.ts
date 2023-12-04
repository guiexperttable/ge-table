import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimetableeventsDemoComponent } from "./timetableevents-demo.component";
import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { DemoTimetableeventsInfoComponent } from "./info/demo-timetableevents-info.component";
import {SourceCodeModule} from "../../common/code/source-code.module";



@NgModule({
  declarations: [
    TimetableeventsDemoComponent, DemoTimetableeventsInfoComponent
  ],
    imports: [
        CommonModule,
        TableComponent,
        RouterModule.forChild([
            {
                path: "run",
                component: TimetableeventsDemoComponent
            },
            {
                path: "info",
                component: DemoTimetableeventsInfoComponent
            }
        ]),
        SourceCodeModule
    ],
  exports: [
    TimetableeventsDemoComponent
  ]
})
export class TimetableeventsDemoModule {
}
