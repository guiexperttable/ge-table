
import {defineConfig} from "vite";
import {svelte} from '@sveltejs/vite-plugin-svelte';
import dts from "vite-plugin-dts";
import {join} from "path";
import {viteStaticCopy} from "vite-plugin-static-copy";


export default defineConfig({
  cacheDir: "../../node_modules/.vite/svelte-table",

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json"),
      
    }),
    svelte({
      prebundleSvelteLibraries: true
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
