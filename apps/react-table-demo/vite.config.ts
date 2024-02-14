import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {join} from "path";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/react-table-demo",

  server: {
    port: 4200,
    host: "localhost"
  },

  preview: {
    port: 4300,
    host: "localhost"
  },

  plugins: [
    react(),
  ],

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/react-table/,
        replacement: join(__dirname, '../..', 'packages', 'react-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
    ],
  }
});
