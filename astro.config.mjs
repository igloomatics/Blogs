// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // 挑选一个漂亮的主题
      theme: 'one-dark-pro',
      // 也可以加载自定义主题
      wrap: true,
    },
  },
});
