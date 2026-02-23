// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kiitoss.github.io",
  base: "/website-louis/",

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
