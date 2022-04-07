// old, not needed?
// from https://stackoverflow.com/questions/58145392/debugging-strapi-in-visual-studio-code

require('../.pnp.cjs').setup();

// https://yarnpkg.com/features/pnp
const strapi = require('@strapi/strapi');
strapi({ dir: process.cwd(), autoReload: true }).start();