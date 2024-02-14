
import {defineConfig, searchForWorkspaceRoot} from 'vite';
import preact from '@preact/preset-vite';
import {join} from "path";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/preact-table-demo',

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
    preact({include: ['**/*[jt]sx']}),
  ],

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/preact-table/,
        replacement: join(__dirname, '../..', 'packages', 'preact-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
    ],
  }

});
