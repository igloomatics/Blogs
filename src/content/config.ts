import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => {
        // 自动转换日期对象为字符串 yyyy-mm-dd
        if (val instanceof Date) {
            return val.toISOString().split('T')[0];
        }
        return val;
    }),
    tags: z.array(z.string()).default([]),
    words: z.union([z.string(), z.number()]).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const fragmentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    author: z.string().default('Igloos'),
    avatar: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
  'fragments': fragmentsCollection,
};
