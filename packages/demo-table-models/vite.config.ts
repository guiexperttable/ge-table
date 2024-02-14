import {defineConfig} from "vite";
import {viteStaticCopy} from 'vite-plugin-static-copy'
import dts from "vite-plugin-dts";
import {join} from "path";
import babel from "vite-plugin-babel";

export default defineConfig({
  assetsInclude: ['**/README.md'],
  cacheDir: "../../node_modules/.vite/demo-table-models",

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
            {loose: true, version: "2022-03"},
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
        }
      ]
    })
  ],

  build: {
    lib: {
      entry: "src/index.ts",
      name: "demo-table-models",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],


    }
  },
  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '..', 'table', 'src'),
      },
    ],
  }
});
