// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const packagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    price: z.string(),
    isPopular: z.boolean().default(false),
    features: z.array(z.string()),
    internalTasks: z.array(z.string()).optional(), // What your team does (from PDF)
    idealFor: z.string(),
  }),
});

const solutionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  'packages': packagesCollection,
  'solutions': solutionsCollection,
};