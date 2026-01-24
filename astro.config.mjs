// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import vercel from '@astrojs/vercel'; 

// https://astro.build/config
export default defineConfig({
  // 👇👇👇 必须加上这一行！告诉 Astro 我们要用服务器模式 👇👇👇
  output: 'server', 
  
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
      },
    },
});
