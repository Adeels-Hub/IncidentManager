// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({  
  base: 'https://adeels-hub.github.io/incident-dashboard/',
  plugins: [react()],
});
