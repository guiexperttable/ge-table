import type { App } from "vue";
import {GuiexpertTable} from "../";

export default {
  install: (app: App, _options: { img: string } = { img: "" }) => {
    app.component("GuiexpertTable", GuiexpertTable);
  },
};

export { GuiexpertTable };
