import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: [
      '@awesome.me/webawesome',
      'lit',
      '@floating-ui/dom',
      '@shoelace-style/animations',
      '@shoelace-style/localize'
    ]
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
});
