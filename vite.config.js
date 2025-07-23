import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['ad00ea99-92c3-4e8c-ae8e-1e7df07d3403-00-3d4gielultarg.spock.replit.dev']
  },
  build: {
    outDir: 'dist'
  }
});
