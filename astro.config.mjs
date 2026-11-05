// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://aliennatione.github.io',
  base: '/artista',
  integrations: [svelte()],
});
