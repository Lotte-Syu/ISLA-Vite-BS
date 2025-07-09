import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/ISLA-Vite-BS/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '_components',
          dest: ''
        },
        {
          src: 'cart-pages',
          dest: ''
        }
      ]
    })
  ]
})

