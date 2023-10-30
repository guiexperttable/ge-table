import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoMouseeventComponent} from "./demo-mouseevent.component";
import {RouterModule} from "@angular/router";
import { NgIf } from "@angular/common";

@NgModule({
  declarations: [DemoMouseeventComponent],
  imports: [
    TableComponent,
    RouterModule.forChild([
      {
        path: "mouseevent",
        component: DemoMouseeventComponent
      }
    ]),
    NgIf
  ],
  providers: [],
  bootstrap: [DemoMouseeventComponent],
})
export class DemoMouseeventModule {
}
