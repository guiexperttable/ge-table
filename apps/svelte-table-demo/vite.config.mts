/// <reference types="vitest" />
import {defineConfig} from "vite";
import {svelte} from '@sveltejs/vite-plugin-svelte';
import viteTsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import {join} from "path";
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/svelte-table",

  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: join(__dirname, "tsconfig.app.json"),
      skipDiagnostics: true
    }),
    svelte({
      prebundleSvelteLibraries: true
    }),

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
      name: "svelte-table",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["svelte", "react-dom", "react/jsx-runtime"]
    }
  }
});
