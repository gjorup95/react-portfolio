/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  // React style attributes, Leaflet and react-toastify set inline styles.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.tile.openstreetmap.org",
  "font-src 'self' data:",
  "connect-src 'self' https://api.emailjs.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

// Build only: the dev server relies on inline scripts and a websocket that this policy blocks.
const securityHeaders = (): Plugin => ({
  name: 'security-meta-tags',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy },
      injectTo: 'head-prepend',
    },
    {
      tag: 'meta',
      attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      injectTo: 'head-prepend',
    },
  ],
})

export default defineConfig({
  base: '/react-portfolio/',
  plugins: [react(), securityHeaders()],
  build: {
    outDir: 'build',
    rolldownOptions: {
      output: {
        minify: {
          compress: { dropConsole: true },
          mangle: true,
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    css: false,
  },
})
