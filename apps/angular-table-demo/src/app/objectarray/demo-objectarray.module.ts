import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoObjectarrayComponent} from "./demo-objectarray.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DemoObjectarrayComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "objectarray",
        component: DemoObjectarrayComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [DemoObjectarrayComponent],
})
export class DemoObjectarrayModule {
}
