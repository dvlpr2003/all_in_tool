// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),eslint()],
  
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint'
import path from 'path';


export default defineConfig({
  plugins: [react(),eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for '@/components/' to './src/components/'
    },
  },
});
