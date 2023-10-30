import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoHeaderdblclickComponent} from "./demo-headerdblclick.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FriendRendererComponent} from "./renderer/friend-renderer.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    DemoHeaderdblclickComponent,
    FriendRendererComponent
  ],

  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "headerdblclick",
        component: DemoHeaderdblclickComponent
      }
    ]),
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [DemoHeaderdblclickComponent],
})
export class DemoHeaderdblclickModule {
}
