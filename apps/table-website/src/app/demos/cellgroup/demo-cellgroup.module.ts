import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoCellgroupComponent } from "./demo-cellgroup.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
import { OverlayModule } from "@angular/cdk/overlay";
import { DemoCellgroupInfoComponent } from "./info/demo-cellgroup-info.component";

@NgModule({
  declarations: [
    DemoCellgroupComponent,
    DemoCellgroupInfoComponent
  ],

  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoCellgroupComponent
      },
      {
        path: "info",
        component: DemoCellgroupInfoComponent
      }
    ]),
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    OverlayModule
  ]
})
export class DemoCellgroupModule {
}
