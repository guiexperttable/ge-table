import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoRowAndColspanComponent} from "./demo-row-and-colspan.component";
import {RouterModule} from "@angular/router";
import { NgIf } from "@angular/common";

@NgModule({
  declarations: [DemoRowAndColspanComponent],
  imports: [
    TableComponent,
    RouterModule.forChild([
      {
        path: "rowandcolspan",
        component: DemoRowAndColspanComponent
      }
    ]),
    NgIf
  ],
  providers: [],
  bootstrap: [DemoRowAndColspanComponent],
})
export class DemoRowAndColspanModule {
}
