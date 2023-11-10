import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {viteStaticCopy} from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";
import {join} from "path";


export default defineConfig({
  cacheDir: '../../node_modules/.vite/@guiexpert/table',

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json"),
    }),
    nxViteTsPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: './'
        },
        {
          src: 'css/*.css',
          dest: './css/'
        }
      ]
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    lib: {
      entry: "src/index.ts",
      name: "table",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    }
  },

  test: {
    globals: true,
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
