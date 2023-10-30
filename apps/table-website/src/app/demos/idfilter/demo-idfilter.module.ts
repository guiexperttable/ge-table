import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoIdfilterComponent } from "./demo-idfilter.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoIdfilterInfoComponent } from "./info/demo-idfilter-info.component";

@NgModule({
  declarations: [DemoIdfilterComponent, DemoIdfilterInfoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoIdfilterComponent
      },
      {
        path: "info",
        component: DemoIdfilterInfoComponent
      }
    ]),
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemoIdfilterModule {
}
