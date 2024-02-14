import path, {join} from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,

  publicDir: path.resolve(__dirname, "./src/public"),
  plugins: [
    Vue(),
    Components({
      dirs: ["src/app/components"]
    })
  ],
  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/vue3-table/,
        replacement: join(__dirname, '../..', 'packages', 'vue3-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
    ],
  }
});
