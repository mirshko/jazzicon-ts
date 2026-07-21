# jazzicon-ts

## 5.0.0

### Major Changes

- 2793b3c: The package is now ESM-only (`"type": "module"` with a single `exports` entry point). CJS builds (`dist/index.js` CJS / `dist/index.mjs`) are no longer shipped; `require("jazzicon-ts")` only works on Node versions with `require(esm)` support (Node ≥ 20.19 / ≥ 22.12). Bundlers and modern runtimes are unaffected. Also adds `sideEffects: false` and sourcemaps, fixes the `hueShift` wobble formula to use the `WOBBLE` constant, and refactors internal PRNG state to be passed explicitly — generated icons are unchanged.

## 4.0.0

### Major Changes

- d064add: Fixing esm not having a mjs file

## 3.0.0

### Major Changes

- 733e1e0: Switching to tsup cjs and esm export
