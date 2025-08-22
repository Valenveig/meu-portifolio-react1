// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/meu-portifolio-react1/', // necessário para GitHub Pages
  plugins: [react()],
});
