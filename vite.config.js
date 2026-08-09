import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build. `/notes/` is a real document rather than a client-side
// route, so a direct link or a refresh works on any static host without
// SPA-fallback configuration, and each page ships only the JS it needs.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        notes: fileURLToPath(new URL('./notes/index.html', import.meta.url)),
      },
    },
  },
})
