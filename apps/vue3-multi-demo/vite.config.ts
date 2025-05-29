import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: join(__dirname, 'src/quasar-variables.sass')
    })
  ],

  resolve: {
    alias: [
      {
        find: /@guiexpert\/table/,
        replacement: join(__dirname, '../..', 'packages', 'table', 'src'),
      },
      {
        find: /@guiexpert\/vue3-table/,
        replacement: join(__dirname, '../..', 'packages', 'vue3-table', 'src'),
      },
      {
        find: /@guiexpert\/demo-table-models/,
        replacement: join(__dirname, '../..', 'packages', 'demo-table-models', 'src'),
      },
      {
        find: /^quasar$/,
        replacement: join(__dirname, '../../../node_modules/.pnpm/quasar@2.18.1/node_modules/quasar/dist/quasar.esm.js'),
      },
      {
        find: /^@quasar\/extras\/material-icons\/material-icons\.css$/,
        replacement: '../../../node_modules/.pnpm/@quasar+extras@1.17.0/node_modules/@quasar/extras/material-icons/material-icons.css',
      },
    ],
  }
})
