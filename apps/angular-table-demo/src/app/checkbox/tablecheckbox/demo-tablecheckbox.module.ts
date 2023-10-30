import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoTablecheckboxComponent} from "./demo-tablecheckbox.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DemoTablecheckboxComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "tablecheckbox",
        component: DemoTablecheckboxComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [DemoTablecheckboxComponent],
})
export class DemoTablecheckboxModule {
}
