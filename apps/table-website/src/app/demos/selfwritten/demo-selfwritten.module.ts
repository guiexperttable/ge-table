import { NgModule } from "@angular/core";
import { TableComponent } from "@guiexpert/angular-table";
import { RouterModule } from "@angular/router";
import { DemoSelfwrittenComponent } from "./demo-selfwritten.component";
import { DemoSelfwrittenInfoComponent } from "./demo-selfwritten-info.component";
import { SourceCodeModule } from "../../common/code/source-code.module";
import { CircleLetterModule } from "../../common/circle-letter.module";
import { NgIf } from "@angular/common";

@NgModule({
  declarations: [
    DemoSelfwrittenComponent,
    DemoSelfwrittenInfoComponent
  ],
  imports: [
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoSelfwrittenComponent
      },
      {
        path: "info",
        component: DemoSelfwrittenInfoComponent
      }
    ]),
    SourceCodeModule,
    CircleLetterModule,
    NgIf
  ]
})
export class DemoSelfwrittenModule {
}
