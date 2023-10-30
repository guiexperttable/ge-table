import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { GetstartedComponent } from "./getstarted.component";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { AngularLogoComponent } from "../3p-logos/angular-logo.component";
import { VueLogoComponent } from "../3p-logos/vue-logo.component";
import { PreactLogoComponent } from "../3p-logos/preact-logo.component";
import { SvelteLogoComponent } from "../3p-logos/svelte-logo.component";
import { SolidLogoComponent } from "../3p-logos/solid-logo.component";
import { WebComponentLogoComponent } from "../3p-logos/web-component-logo.component";
import { JsLogoComponent } from "../3p-logos/js-logo.component";
import { ReactLogoComponent } from "../3p-logos/react-logo.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";


const routes: Routes = [
  {
    path: "getstarted",
    component: GetstartedComponent
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./angular/getstarted-angular.module").then(m => m.GetstartedAngularModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./vue/getstarted-vue.module").then(m => m.GetstartedVueModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./plainjs/getstarted-js.module").then(m => m.GetstartedJsModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./preact/getstarted-preact.module").then(m => m.GetstartedPreactModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./react/getstarted-react.module").then(m => m.GetstartedReactModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./solid/getstarted-solid.module").then(m => m.GetstartedSolidModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./svelte/getstarted-svelte.module").then(m => m.GetstartedSvelteModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./webcomponent/getstarted-webcomponent.module").then(m => m.GetstartedWebcomponentModule)
  },
  {
    path: "getstarted", loadChildren: () =>
      import("./plainjs/getstarted-js.module").then(m => m.GetstartedJsModule)
  }
];

@NgModule({
  declarations: [
    GetstartedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    AngularLogoComponent,
    VueLogoComponent,
    PreactLogoComponent,
    SvelteLogoComponent,
    SolidLogoComponent,
    WebComponentLogoComponent,
    JsLogoComponent,
    ReactLogoComponent,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [RouterModule, GetstartedComponent]
})
export class GetstartedModule {
}
