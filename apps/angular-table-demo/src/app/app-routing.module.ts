import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: "demo", loadChildren: () => import("./simple/demo-simple.module").then(m => m.DemoSimpleModule)
  },
  {
    path: "demo", loadChildren: () => import("./objectarray/demo-objectarray.module").then(m => m.DemoObjectarrayModule)
  },
  {
    path: "demo", loadChildren: () => import("./multisize/demo-multisize.module").then(m => m.DemoMultisizeModule)
  },
  {
    path: "demo", loadChildren: () => import("./style/demo-style.module").then(m => m.DemoStyleModule)
  },
  {
    path: "demo", loadChildren: () => import("./mouseevent/demo-mouseevent.module").then(m => m.DemoMouseeventModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./rowandcolspan/demo-row-and-colspan.module").then(m => m.DemoRowAndColspanModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./columndef/demo-columndef.module").then(m => m.DemoColumndefModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./checkbox/treecheckbox/demo-treecheckbox.module").then(m => m.DemoTreecheckboxModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./checkbox/tablecheckbox/demo-tablecheckbox.module").then(m => m.DemoTablecheckboxModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./componentrenderer/demo-componentrenderer.module").then(m => m.DemoComponentrendererModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./filter/idfilter/demo-idfilter.module").then(m => m.DemoIdfilterModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./chunksocket/chunk-socket.module").then(m => m.ChunkSocketModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./sorting/headerdblclick/demo-headerdblclick.module").then(m => m.DemoHeaderdblclickModule)
  },
  {
    path: "demo",
    loadChildren: () => import("./olympic/demo-olympic.module").then(m => m.DemoOlympicModule)
  },
  {
    path: "**", redirectTo: "welcome"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
