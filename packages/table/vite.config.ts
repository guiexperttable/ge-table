import { defineConfig } from 'vite';
import {viteStaticCopy} from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";
import babel from "vite-plugin-babel";
import {join} from "path";


export default defineConfig({
  cacheDir: '../../node_modules/.vite/@guiexpert/table',

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json"),
    }),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { loose: true, version: "2022-03" },
          ],
        ],
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: './'
        },
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

  build: {
    lib: {
      entry: "src/index.ts",
      name: "table",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    }
  }
});
