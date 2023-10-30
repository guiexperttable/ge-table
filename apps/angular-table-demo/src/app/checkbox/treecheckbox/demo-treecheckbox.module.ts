import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { DemoTreecheckboxComponent } from "./demo-treecheckbox.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DemoTreecheckboxComponent],
  imports: [
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "treecheckbox",
        component: DemoTreecheckboxComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [DemoTreecheckboxComponent]
})
export class DemoTreecheckboxModule {
}
