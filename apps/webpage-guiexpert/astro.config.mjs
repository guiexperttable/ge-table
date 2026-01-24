import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import astroExpressiveCode from 'astro-expressive-code';
import icon from "astro-icon";

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
import sitemap from "@astrojs/sitemap";
import {join} from "path";
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: ['github-dark']
};

const __dirname = './';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://gui.expert/",
  integrations: [
    tailwind(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    sitemap(),
    icon()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ['@astrojs/prism']
    }
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: /@guiexpert\/table/,
  //       replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
  //     },
  //     {
  //       find: /@guiexpert\/webcomponent-table/,
  //       replacement: join(__dirname, '../..', 'packages', 'webcomponent-table', 'src'),
  //     },
  //     {
  //       find: /@guiexpert\/demo-table-models/,
  //       replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
  //     },
  //   ],
  // }
});
