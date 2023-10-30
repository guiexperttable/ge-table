import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DocumentationComponent } from "./documentation.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { DiagramTablemodelModule } from "./diagram/diagram-tablemodel.module";


const routes: Routes = [
  {
    path: "",
    component: DocumentationComponent
  }
];

@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    DiagramTablemodelModule
  ],
  exports: [RouterModule]
})
export class DocumentationModule {
}
