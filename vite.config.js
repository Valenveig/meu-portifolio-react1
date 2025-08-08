import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/meu-portifolio-react1/', // <-- nome do repositório
  plugins: [react()],
});
