import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteBridge } from 'vite-bridge'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && viteBridge(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
  },
}))