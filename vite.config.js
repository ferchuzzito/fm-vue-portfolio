// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url' // 💡 Necesitas esto

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 🎯 Aquí se define que '@' apunta a la carpeta 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)) 
    }
  }
})
