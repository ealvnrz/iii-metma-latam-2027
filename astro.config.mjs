import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://metma.mat.uc.cl',
  output: 'static',
  server: {
    host: true,
    port: 4321,
  },
});
