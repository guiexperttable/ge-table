import {NgModule} from '@angular/core';

import {RenderWrapperFactory, TableComponent} from "@guiexpert/angular-table";
import {DemoComponentrendererComponent} from "./demo-componentrenderer.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {EmailRendererComponent} from "./email-renderer.component";
import {ActionButtonRendererComponent} from "./action-button-renderer.component";

@NgModule({
  declarations: [
    DemoComponentrendererComponent,
    ActionButtonRendererComponent,
    EmailRendererComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "componentrenderer",
        component: DemoComponentrendererComponent
      }
    ]),
  ],
  providers: [RenderWrapperFactory],
  bootstrap: [DemoComponentrendererComponent],
})
export class DemoComponentrendererModule {
}
