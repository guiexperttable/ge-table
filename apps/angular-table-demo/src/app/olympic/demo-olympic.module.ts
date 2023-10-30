import {NgModule} from '@angular/core';

import {TableComponent} from "@guiexpert/angular-table";
import {DemoOlympicComponent} from "./demo-olympic.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DemoOlympicComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "olympic",
        component: DemoOlympicComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [DemoOlympicComponent],
})
export class DemoOlympicModule {
}
