import Simple from './simple/Simple.vue';
import MultiSize from './multisize/MultiSize.vue';
import About from '../../views/About.vue';
import { DemoItem } from './DemoItem.ts';

const demoItems: DemoItem[] = [
  { path: "/about", name: "About", component: About, icon: 'table_rows'},
  { path: "/simple", name: "Simple", component: Simple, icon: 'table_rows'},
  { path: "/multisize", name: "Multi Sizes", component: MultiSize, icon: 'table_rows'},
];



export default demoItems;