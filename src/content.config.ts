import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '*/index.mdx',
    base: './src/content/projects',
    // "iulart/index.mdx" -> "iulart" so URLs match the old Framer site
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      short: z.string(),
      subtitle: z.string(),
      role: z.string(),
      industry: z.string(),
      tools: z.string().optional(),
      year: z.string(),
      order: z.number(),
      liveUrl: z.string().url().optional(),
      hero: image(),
      heroAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
