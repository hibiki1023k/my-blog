// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // CSS Modulesの設定
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      // プリプロセッサの設定（例：SCSS）
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
})