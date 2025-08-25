import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        // contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  plugins: [
    tailwindcss()
  ],
});