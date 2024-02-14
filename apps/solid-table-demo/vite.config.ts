
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import {join} from "path";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/solid-table-demo',

  server: {
    port: 3000,
  },

  build: {
    target: 'esnext',
  },

  plugins: [
    solidPlugin(),
  ],

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/solid-table/,
        replacement: join(__dirname, '../..', 'packages', 'solid-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
    ],
  }
});