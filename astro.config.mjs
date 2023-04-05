import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    config: {
      path: './custom-config.cjs'
    }
  }), react()]
});