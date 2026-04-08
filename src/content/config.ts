import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional().default([]),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tech: z.array(z.string()).optional().default([]),
			github: z.string().url().optional(),
			live: z.string().url().optional(),
			featured: z.boolean().optional().default(false),
			image: image().optional(),
		}),
});

export const collections = { blog, projects };

