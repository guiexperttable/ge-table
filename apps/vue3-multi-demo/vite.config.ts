import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
    ],
  }
})
