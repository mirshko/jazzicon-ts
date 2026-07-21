---
"jazzicon-ts": minor
---

Modernize packaging: ESM-native (`"type": "module"`) with a proper `exports` map and CJS compatibility (`dist/index.cjs`), `sideEffects: false` for tree-shaking, and sourcemaps. The ESM entry moves from `dist/index.mjs` to `dist/index.js` — only consumers deep-importing `dist/*` paths directly are affected. Also fixes the `hueShift` wobble formula to use the `WOBBLE` constant (no output change) and refactors internal PRNG state to be passed explicitly (icon output is unchanged).
