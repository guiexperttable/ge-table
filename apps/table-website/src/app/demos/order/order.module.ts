import { NgModule } from "@angular/core";

import { TableComponent } from "@guiexpert/angular-table";
import { OrderComponent } from "./order.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { OrderInfoComponent } from "./info/order-info.component";
import {SourceCodeModule} from "../../common/code/source-code.module";

@NgModule({
  declarations: [OrderComponent, OrderInfoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TableComponent,
    RouterModule.forChild([
      {
        path: "run",
        component: OrderComponent
      },
      {
        path: "info",
        component: OrderInfoComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SourceCodeModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule {
}
