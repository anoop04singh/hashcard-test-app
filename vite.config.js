import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['wagmi', 'viem', '@reown/appkit', '@reown/appkit-adapter-wagmi'],
  },
  server: {
    port: 3000, // You can change the port if needed
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
});
