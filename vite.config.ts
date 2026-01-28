import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    allowedHosts: ['24edb055fd3b.ngrok-free.app'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
