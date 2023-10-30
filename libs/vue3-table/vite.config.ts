import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { tsconfigBaseAliases } from "nx-vue3-vite";

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
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "vue3-table",
      fileName: (format) => `vue3-table.${format}.js`
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
