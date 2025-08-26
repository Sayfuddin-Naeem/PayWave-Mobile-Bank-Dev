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
        cashout: resolve(__dirname, 'cashout.html'),
        transferMoney: resolve(__dirname, 'transfer-money.html'),
        getBonus: resolve(__dirname, 'get-bonus.html'),
      },
    },
  },
  plugins: [
    tailwindcss()
  ],
});