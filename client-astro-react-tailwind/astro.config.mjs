import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
    devOptions: {
        tailwindConfig: './tailwind.config.js',
    },
});