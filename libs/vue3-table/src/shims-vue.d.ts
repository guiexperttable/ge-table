declare module "*.vue" {
  import type { DefineComponent } from "vue";
  import { TableModelIf } from "../../table/src";

  import { TableModelIf, TableOptions } from "@guiexpert/table";

  // eslint-disable-next-line
  const component: DefineComponent<{
    props: {
      tableModel: TableModelIf,
      tableOptions: TableOptions
    },
  }, {}, any>;
  export default component;
}
