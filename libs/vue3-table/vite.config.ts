import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { tsconfigBaseAliases } from "nx-vue3-vite";
import {viteStaticCopy} from "vite-plugin-static-copy";

module.exports = defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  resolve: {
    alias: {
      ...tsconfigBaseAliases(__dirname)
      // Add your aliases here
    }
  },
  plugins: [
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
      entry: path.resolve(__dirname, "./src/index.ts"),
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
  },
  test: {
    environment: "happy-dom"
  }
});
