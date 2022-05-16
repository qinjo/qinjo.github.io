import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { createSvg } from './src/plugins/svg/index'
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, './src')
    }
  },
  plugins: [
    DefineOptions(),
    vue(),
  createSvg('./src/assets/svg/')]
})
