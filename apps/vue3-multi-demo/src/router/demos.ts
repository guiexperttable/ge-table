
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

  new DemoItem(
    "Mouse events",
    "/mouseevents",
    'mouse',
    () => import('../components/demos/mouseevents/MouseEvents.vue'),
    'Mouse events: click, move and context menu'),

  new DemoItem(
    "Table & Checkbox",
    "/tablecheckbox",
    'check_box',
    () => import('../components/demos/tablecheckbox/TableCheckbox.vue'),
    'Table with checkbox in first column'),
  new DemoItem(
    "Tree Table & Checkbox",
    "/treetablecheckbox",
    'check_box',
    () => import('../components/demos/treecheckbox/TreeTableCheckbox.vue'),
    'Tree Table with checkbox'),
];



export default demoItems;