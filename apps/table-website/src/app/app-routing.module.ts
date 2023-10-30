import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "", loadChildren: () =>
      import("./welcome/welcome.module").then(m => m.WelcomeModule)
  },
  {
    path: "welcome", loadChildren: () =>
      import("./welcome/welcome.module").then(m => m.WelcomeModule)
  },
  {
    path: "api", loadChildren: () =>
      import("./api/api.module").then(m => m.ApiModule)
  },
  {
    path: "doc", loadChildren: () =>
      import("./documentation/documentation.module").then(m => m.DocumentationModule)
  },
  {
    path: "demos", loadChildren: () =>
      import("./demos/demo-welcome.module").then(m => m.DemoWelcomeModule)
  },
  {
    path: "demo", loadChildren: () =>
      import("./demos/demos.module").then(m => m.DemosModule)
  },
  {
    path: "demos", loadChildren: () =>
      import("./demos/demos.module").then(m => m.DemosModule)
  },
  {
    path: "generator", loadChildren: () =>
      import("./generator/generator.module").then(m => m.GeneratorModule)
  },
  {
    path: "license", loadChildren: () =>
      import("./license/license.module").then(m => m.LicenseModule)
  },
  {
    path: "pricing", loadChildren: () =>
      import("./pricing/pricing.module").then(m => m.PricingModule)
  },
  {
    path: "law", loadChildren: () =>
      import("./law/law.module").then(m => m.LawModule)
  },
  {
    path: "", loadChildren: () =>
      import("./getstarted/getstarted.module").then(m => m.GetstartedModule)
  },
  {
    path: "themes/custom", loadChildren: () =>
      import("./themes/custom/custom-theme.module").then(m => m.CustomThemeModule)
  },
  {
    path: "**", redirectTo: "welcome"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
