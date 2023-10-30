import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoColumndefComponent} from "./demo-columndef.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DemoColumndefComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "columndef",
        component: DemoColumndefComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [DemoColumndefComponent],
})
export class DemoColumndefModule {
}
