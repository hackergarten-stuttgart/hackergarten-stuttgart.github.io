// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hackergarten-stuttgart.github.io',
  image: {
    // Only so `inferRemoteSize` may probe them; the images are served live, never downloaded.
    domains: ['img.shields.io', 'contrib.rocks'],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});