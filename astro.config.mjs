import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coc-guide.vercel.app', // 部署后替换为你的域名
  integrations: [sitemap()],
  output: 'static',
});
