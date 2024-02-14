import { join } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import {viteStaticCopy} from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";

export default  defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '..', 'table', 'src'),
      },
    ],
  },

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json"),
    }),
    Vue(),
    Components({
      dirs: ["src/lib"]
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: './'
        },
        {
          src: 'package.json',
          dest: './'
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: join(__dirname, "./src/index.ts"),
      name: "vue3-table",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ["vue"],
      output: {
        // globals to use in the UMD build for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
