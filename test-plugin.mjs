import { build } from 'vite';

const cssAttributesPlugin = () => {
  return {
    name: 'css-attributes',
    enforce: 'pre',
    resolveId(source, importer, options) {
      if (options.attributes && options.attributes.type === 'css') {
        return this.resolve(source, importer, { skipSelf: true }).then(res => {
          if (res) {
            return res.id + '?inline&css-attributes';
          }
        });
      }
    },
    load(id) {
      if (id.endsWith('&css-attributes')) {
        const realId = id.replace('&css-attributes', '');
        return `
          import css from ${JSON.stringify(realId)};
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(css);
          export default sheet;
        `;
      }
    }
  };
};

await build({
  root: process.cwd(),
  plugins: [cssAttributesPlugin()],
  logLevel: 'silent',
  build: {
    rollupOptions: { input: 'test-entry.mjs' }
  }
});
console.log("SUCCESS");
