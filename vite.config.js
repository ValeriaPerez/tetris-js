import { defineConfig } from 'vite'

export default defineConfig({
  base: '/tetris-js/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: true
  }
})
