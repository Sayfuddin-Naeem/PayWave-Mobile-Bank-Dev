import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        addMoney: resolve(__dirname, 'add-money.html'),
      },
    },
  },
  plugins: [
    tailwindcss()
  ],
});