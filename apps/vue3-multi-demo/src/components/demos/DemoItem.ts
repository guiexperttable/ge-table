import { MenuItem } from '../mainmenu/MenuItem.ts';

import { RouteComponent, RouteRecordSingleView } from 'vue-router';

declare type Lazy<T> = () => Promise<T>;

export class DemoItem  extends MenuItem implements RouteRecordSingleView {

  constructor(
    public name: string,
    public path: string,
    public icon: string,
    public component: RouteComponent | Lazy<RouteComponent>,
  ) {
    super(name, path, icon);
  }


}