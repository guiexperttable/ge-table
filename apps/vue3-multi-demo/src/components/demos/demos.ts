
import { DemoItem } from './DemoItem.ts';
import Home from '../../views/Home.vue';

const demoItems: DemoItem[] = [
  new DemoItem("Home", "/home", 'home', Home),
  new DemoItem("Overview", "/overview", 'visibility', () => import('../../views/Overview.vue')),
  new DemoItem("Simple", "/simple", 'table_rows', () => import('./simple/Simple.vue'), 'Array of Arrays'),
  new DemoItem("Multi Sizes", "/multisize", 'table_rows', () => import('./multisize/MultiSize.vue'), 'Multiple cell heights and widths')
];



export default demoItems;