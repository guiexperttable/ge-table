import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoOlympicComponent } from "./demo-olympic.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { DemoOlympicInfoComponent } from "./info/demo-olympic-info.component";

@NgModule({
  declarations: [DemoOlympicComponent, DemoOlympicInfoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: DemoOlympicComponent
      },
      {
        path: "info",
        component: DemoOlympicInfoComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class DemoOlympicModule {
}
