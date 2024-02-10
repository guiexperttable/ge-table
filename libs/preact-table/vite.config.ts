/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { join } from "path";
import {viteStaticCopy} from "vite-plugin-static-copy";
import { preact } from '@preact/preset-vite';

export default defineConfig({

  cacheDir: "../../node_modules/.vite/preact-table",

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json")
    }),
    // react(),
    preact({include: ['**/*[jt]sx']}),  // <-- add {include:...}
    viteTsConfigPaths({
      root: "../../"
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: './'
        }
      ]
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "preact-table",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["preact", "preact-dom", "preact/jsx-runtime"]
    }
  }
});

