import { defineConfig } from 'astro/config';
import astro_react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    devOptions: {
        tailwindConfig: './tailwind.config.js',
    },
    integrations: [
        astro_react(),
    ],
});