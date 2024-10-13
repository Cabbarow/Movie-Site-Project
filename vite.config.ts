import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Projende alias kullanarak yolları kısaltabilirsin
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom','react-icons','@mui/material', '@emotion/react', '@emotion/styled'],
  },
})
