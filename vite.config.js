import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages only, not for Vercel or local dev
  const isGitHubPages = typeof process !== 'undefined' && process.env.GITHUB_ACTIONS === 'true';
  const base = isGitHubPages && mode === 'production' ? '/Macbook_website/' : '/';
  
  return {
    plugins: [react(), tailwindcss()],
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  }
})
