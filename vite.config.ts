import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client.tsx',
          output: {
            entryFileNames: 'static/client.js'
          }
        }
      }
    }
  } else {
    return {
      ssr: {
        external: ['ai', '@ai-sdk/openai', 'react', 'react-dom']
      },
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
