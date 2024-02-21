import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  server:{
    port:80
  },
  plugins: [
    vue(),
    copy({
      verbose: true,
      hook: 'closeBundle',
      targets: [
        {src: 'src/components/Editor.vue', dest: 'public/code'},
        {src: 'src/components/Editor.vue', dest: 'dist/code'},
        {src: 'src/pages/*', dest: 'public/code'},
        {src: 'src/pages/*', dest: 'dist/code'}
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
