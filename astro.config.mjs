import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jennajob.github.io",
  integrations: [tailwind()],
  output: "static",
  build: { assets: "_assets" },
});
