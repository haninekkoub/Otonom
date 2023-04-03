import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    config: { path: './custom-config.cjs' },
  })],
});