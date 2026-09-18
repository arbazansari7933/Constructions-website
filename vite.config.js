import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Inline demo images as base64 so the build has no separate asset
    // files to fetch — keeps the site fully self-contained. Raise this
    // (or remove it) once real, larger photography replaces the demo
    // images, and let Vite emit them as normal separate files instead.
    assetsInlineLimit: 100000,
  },
})
