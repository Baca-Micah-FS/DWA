// import { defineCollection, z } from "astro:content";
// const blog = defineCollection({
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     // updatedDate: z.coerce.date().optional(),
//     // coverImageCredit: z.string().optional(),
//   }),
// });
// export const collections = { blog };

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string(),
    description: z.string(),
    tag: z.string(),
    posts: z.string().optional(),
  }),
});

export const collections = { blog };
