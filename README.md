# jazzicon-ts

[![npm](https://img.shields.io/npm/v/jazzicon-ts)](https://www.npmjs.com/package/jazzicon-ts) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/jazzicon-ts) ![NPM](https://img.shields.io/npm/l/jazzicon-ts)

Typescript version of Jazzicon from [danfinlay](https://github.com/danfinlay/jazzicon) based on improvements by [jmrossy](https://github.com/MetaMask/jazzicon).

## Usage

```ts
import jazzicon from 'jazzicon-ts';

const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc';

const identicon = jazzicon(64, parseInt(address.slice(2, 10), 16)

document.getElementById("#jazzicon").appendChild(identicon)
```
