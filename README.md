# Strapi Headless Blog Server Examples

Based on

* [Strapi Blog with Astro and Tailwind](https://strapi.io/blog/how-to-build-a-blog-with-astro-strapi-and-tailwind-css)
  + https://docs.astro.build/en/core-concepts/routing/

## References

* https://lukasznojek.com/blog/2020/02/4-node-js-package-managers-npm-vs-yarn-1-vs-yarn-2-vs-pnpm-vs-dry/

## Yarn 2 and VSCode

* Launch config _must_ be in workspace file: `strapi-headless-cms-examples.code-workspace`
* IDE (i.e. vscode) must be 'aware' of yarn 2: https://yarnpkg.com/getting-started/editor-sdks
* `typescript` must be installed (at least as `-D`)
* A few node modules are not compatible with yarn 2 pnp: https://yarnpkg.com/features/pnp

## strapi-headless-blog-server

Run with:

```bash
$ yarn develop
...
To access the server ⚡️, go to:
http://localhost:1337
```

### Changes

* Use yarn 2 (3.2.0) in 'zero-install' with `pnp` linker
* Use strapi 4 (instead of strapi 3)

# client-astro-react-tailwind

Run with:

```bash
$ yarn dev
  🚀  astro  v0.25.2 started in 298ms
  
  ┃ Local    http://localhost:3000/
  ┃ Network  use --host to expose
```

### Changes

* Use yarn 2 (3.2.0) in 'zero-install' with `pnpm` linker (`pnp` is not working)
* Adapt api path to strapi 4
* (TODO) Adapt resource loading

```bash
```

```bash
```

```bash
```

```bash
```

