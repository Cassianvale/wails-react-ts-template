import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/wails/runtime.js', '/wails/ipc.js']
    }
  },
  server: {
    port: 9245,
    strictPort: true
  }
})
