import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Add any specific aliasing here if needed
    },
  },
  optimizeDeps: {
    include: ['@reown/appkit', '@reown/appkit-adapter-wagmi', 'viem', 'wagmi'], // Pre-bundle these dependencies
  },
  build: {
    rollupOptions: {
      // Externalize dependencies that may cause issues
      external: [],
    },
  },
});
