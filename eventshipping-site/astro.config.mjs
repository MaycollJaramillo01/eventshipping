import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eventshipping-review.cozyowlet1030.chatgpt.site',
  output: 'static',
  outDir: './dist',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
