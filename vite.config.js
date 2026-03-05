import { defineConfig } from 'vite';

const cssAttributesPlugin = () => {
  return {
    name: 'css-attributes',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.js') && !id.endsWith('.ts')) return null;

      // Look for: import <name> from '<path>.css' with { type: 'css' };
      const importRegex = /import\s+([a-zA-Z0-9_$]+)\s+from\s+['"]([^'"]+\.css)['"]\s*with\s*{\s*type\s*:\s*['"]css['"]\s*}\s*;/g;

      if (!importRegex.test(code)) return null;

      // Reset regex index
      importRegex.lastIndex = 0;

      const transformedCode = code.replace(importRegex, (match, name, path) => {
        return `
import __css_${name} from '${path}?inline';
const ${name} = new CSSStyleSheet();
${name}.replaceSync(__css_${name});
        `;
      });

      return { code: transformedCode, map: null };
    }
  };
};

export default defineConfig({
  plugins: [cssAttributesPlugin()],
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
