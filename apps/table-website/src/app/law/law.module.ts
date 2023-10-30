import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";

import { ImprintComponent } from "./imprint/imprint.component";
import { ConditionOfUseComponent } from "./condition-of-use/condition-of-use.component";
import { PrivacyNoticeDatenschutzComponent } from "./privacy-notice/privacy-notice.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forChild([
      {
        path: "imprint",
        component: ImprintComponent
      },
      {
        path: "cou",
        component: ConditionOfUseComponent
      },
      {
        path: "privacy",
        component: PrivacyNoticeDatenschutzComponent
      }
    ]),
    HttpClientModule
  ],
  declarations: [
    PrivacyNoticeDatenschutzComponent,
    ImprintComponent,
    ConditionOfUseComponent
  ],
  providers: []
})
export class LawModule {
}
