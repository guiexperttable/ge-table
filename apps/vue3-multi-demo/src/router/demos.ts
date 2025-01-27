
import { DemoItem } from './DemoItem.ts';
import Home from '../views/Home.vue';

const demoItems: DemoItem[] = [
  new DemoItem("Home", "/", 'home', Home),
  new DemoItem("Overview", "/overview", 'visibility', () => import('../views/Overview.vue')),
  new DemoItem("Simple", "/simple", 'table_rows', () => import('../components/demos/simple/Simple.vue'), 'Array of Arrays'),
  new DemoItem("Column Size", "/columnsizes", 'width_wide', () => import('../components/demos/columnsizes/ColumnSizes.vue'), 'Different units for column widths'),


  new DemoItem("Multi Sizes", "/multisize", 'table_rows', () => import('../components/demos/multisize/MultiSize.vue'), 'Multiple cell heights and widths'),
  new DemoItem("CSS Style", "/style", 'palette', () => import('../components/demos/style/CssStyle.vue'), 'Cell style'),
  new DemoItem("Object Array", "/objectarray", 'table_rows', () => import('../components/demos/objectarray/ObjectArray.vue'), 'Array of business objects'),
  new DemoItem("Auto Table 1", "/autotable1", 'lightbulb', () => import('../components/demos/autotable/AutoTable1.vue'), 'WIP AI Table'),
  new DemoItem("Auto Table 2", "/autotable2", 'lightbulb', () => import('../components/demos/autotable/AutoTable2.vue'), 'WIP AI Table'),

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

  new DemoItem(
    "CRUD",
    "/crud",
    'table_rows',
    () => import('../components/demos/crud/Crud.vue'),
    'CRUDL (create, read, update, delete, list) Demo'),

  new DemoItem(
    "CRUD2",
    "/crud2",
    'table_rows',
    () => import('../components/demos/crud/Crud2.vue'),
    'CRUDL 2 Demo'),

  new DemoItem(
    "CRUD3",
    "/crud3",
    'table_rows',
    () => import('../components/demos/crud/Crud3.vue'),
    'CRUDL 3 Pre-defined columnDefs'),
];



export default demoItems;