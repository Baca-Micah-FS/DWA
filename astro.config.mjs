// // @ts-check
// import { defineConfig } from "astro/config";

// import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [react()],
// });

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
export default defineConfig({
  integrations: [mdx(), react()],
  base: "/",
  output: "server",
});
