/// <reference types='vitest' />
import {defineConfig, searchForWorkspaceRoot} from 'vite';
import preact from '@preact/preset-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

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
    preact({include: ['**/*[jt]sx']}),  // <-- add {include:...}
    nxViteTsPaths()
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // test: {
  //   globals: true,
  //   cache: {
  //     dir: '../../node_modules/.vitest',
  //   },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
});
