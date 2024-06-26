import { defineCollection, z } from 'astro:content';

const seoSchema = z
  .object({
    page_description: z.string().nullable(),
    canonical_url: z.string().nullable(),
    featured_image: z.string().nullable(),
    featured_image_alt: z.string().nullable(),
    author_twitter_handle: z.string().nullable(),
    open_graph_type: z.string().nullable(),
    no_index: z.boolean(),
  })
  .optional();

const blogCollection = defineCollection({
  schema: z.object({
    date: z.string().or(z.date()),
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()),
    author: z.array(
      z.object({
        name: z.string().optional(),
        avatar: z.string().optional(),
        social: z.string().optional(),
      })
    ).optional(),
    thumb_image_path: z.string().optional(),
    thumb_image_alt: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    featured: z.boolean().optional(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  content_blocks: z.array(z.any()),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  title: z.string(),
  page_size: z.number().positive(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
};
