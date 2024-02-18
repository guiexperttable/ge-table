
import { DemoItem } from './DemoItem.ts';
import Home from '../views/Home.vue';

const demoItems: DemoItem[] = [
  new DemoItem("Home", "/", 'home', Home),
  new DemoItem("Overview", "/overview", 'visibility', () => import('../views/Overview.vue')),
  new DemoItem("Simple", "/simple", 'table_rows', () => import('../components/demos/simple/Simple.vue'), 'Array of Arrays'),
  new DemoItem("Multi Sizes", "/multisize", 'table_rows', () => import('../components/demos/multisize/MultiSize.vue'), 'Multiple cell heights and widths'),
  new DemoItem("CSS Style", "/style", 'palette', () => import('../components/demos/style/CssStyle.vue'), 'Cell style'),
  new DemoItem("Object Array", "/objectarray", 'table_rows', () => import('../components/demos/objectarray/ObjectArray.vue'), 'Array of business objects'),
  new DemoItem(
    "Tree Table",
    "/treetable",
    'account_tree',
    () => import('../components/demos/treetable/TreeTable.vue'),
    'Tree Table of business objects'),
  new DemoItem(
    "Rowspan, Colspan",
    "/rowandcolspan",
    'dashboard',
    () => import('../components/demos/rowandcolspan/RowAndColspan.vue'),
    'Tablemodel with Rowspan and Colspan'),
];



export default demoItems;