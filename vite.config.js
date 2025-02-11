import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que la base sea correcta
  build: {
    outDir: 'dist', // Render busca en "dist"
  },
  server: {
    historyApiFallback: true, // Redirige todas las rutas a index.html
  },
});
