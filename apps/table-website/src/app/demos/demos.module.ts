import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { GeLogoModule } from "../ge-logo/ge-logo.module";
import { BidiModule } from "@angular/cdk/bidi";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "rowandcolspan", loadChildren: () =>
      import("../demos/rowandcolspan/demo-row-and-colspan.module").then(m => m.DemoRowAndColspanModule)
  },
  {
    path: "cellgroup", loadChildren: () =>
      import("../demos/cellgroup/demo-cellgroup.module").then(m => m.DemoCellgroupModule)
  },
  {
    path: "simple", loadChildren: () =>
      import("../demos/simple/demo-simple.module").then(m => m.DemoSimpleModule)
  },
  {
    path: "order", loadChildren: () =>
      import("../demos/order/order.module").then(m => m.OrderModule)
  },
  {
    path: "timetable", loadChildren: () =>
      import("../demos/timetable/timetable-demo.module").then(m => m.TimetableDemoModule)
  },
  {
    path: "prizes", loadChildren: () =>
      import("../demos/prizesdemo/prizes-demo.module").then(m => m.PrizesDemoModule)
  },
  {
    path: "treepeople", loadChildren: () =>
      import("../demos/treetablepeople/treetable-people.module").then(m => m.TreetablePeopleModule)
  },
  {
    path: "mouseevent", loadChildren: () =>
      import("../demos/mouseevent/demo-mouseevent.module").then(m => m.DemoMouseeventModule)
  },
  {
    path: "styledemo", loadChildren: () =>
      import("../demos/styledemo/demo-style.module").then(m => m.DemoStyleModule)
  },
  {
    path: "idfilter", loadChildren: () =>
      import("../demos/idfilter/demo-idfilter.module").then(m => m.DemoIdfilterModule)
  },
  {
    path: "olympic", loadChildren: () =>
      import("../demos/olympic/demo-olympic.module").then(m => m.DemoOlympicModule)
  },
  {
    path: "headerdblclick", loadChildren: () =>
      import("../demos/headerdblclick/demo-headerdblclick.module").then(m => m.DemoHeaderdblclickModule)
  },
  {
    path: "crypto", loadChildren: () =>
      import("../demos/cryptotop/crypto-top-100.module").then(m => m.CryptoTop100Module)
  },
  {
    path: "selfwritten", loadChildren: () =>
      import("../demos/selfwritten/demo-selfwritten.module").then(m => m.DemoSelfwrittenModule)
  },
  {
    path: "laf", loadChildren: () =>
      import("../demos/laf/demo-laf.module").then(m => m.DemoLafModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeLogoModule,
    BidiModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class DemosModule {
}

