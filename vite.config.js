import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
          // Use the direct path to the ESM build of ethers
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
