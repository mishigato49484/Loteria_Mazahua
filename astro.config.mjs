
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mishigato49484.github.io',
  base: '/Loteria_Mazahua',

  vite: {
    plugins: [tailwindcss()]
  }
});
