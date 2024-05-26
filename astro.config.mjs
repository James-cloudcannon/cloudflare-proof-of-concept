import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import remarkAutoImport from "@cloudcannon/remark-auto-import";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-jackal.cloudvent.net/",
  integrations: [
    AutoImport({
      imports: ["src/components/snippets/CodeBlock.astro", "src/components/snippets/Figure.astro", "src/components/snippets/Iframe.astro"],
    }),
    react(),
    tailwind(),
    bookshop(),
    alpine(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [[remarkAutoImport, {}]],
    extendDefaultPlugins: true,
  },
});
