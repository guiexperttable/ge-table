
import {defineConfig, searchForWorkspaceRoot} from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from "vite-plugin-dts";
import {join} from "path";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/svelte-table-demo',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '..',
      ],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.app.json")
    }),
    svelte(),
  ],

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/svelte-table/,
        replacement: join(__dirname, '../..', 'packages', 'svelte-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
    ],
  }
});
