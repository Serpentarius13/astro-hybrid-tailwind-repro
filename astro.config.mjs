// @ts-check
import { defineConfig } from "astro/config";

// import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercelStatic(),

  // output: "hybrid",

  // adapter: node({
  //   mode: "standalone",
  // }),
});
