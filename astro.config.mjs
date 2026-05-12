import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coc-base-guide.vercel.app',
  integrations: [sitemap()],
  output: 'static',
});
