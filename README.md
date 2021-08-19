# jazzicon-ts

Typescript version of Jazzicon from [danfinlay](https://github.com/danfinlay/jazzicon) based on improvements by the [MetaMask team](https://github.com/MetaMask/jazzicon).

## Usage

```ts
import jazzicon from 'jazzicon-ts';

const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc';

const identicon = jazzicon(64, parseInt(address.slice(2, 10), 16)

document.getElementById("#jazzicon").appendChild(identicon)
```
