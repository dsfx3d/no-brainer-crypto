# no-brainer-crypto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]

Easy no-brainer encryption and hashing for common use cases with built-in best practices.

## Usage

Install package:

```sh
# npm
npm install no-brainer-crypto

# yarn
yarn add no-brainer-crypto

# pnpm
pnpm install no-brainer-crypto
```

Import:

```js
// ESM
import {AesService, Pbkdf2Service, ShaService} from "no-brainer-crypto";

// CommonJS
const {AesService, Pbkdf2Service, ShaService} = require("no-brainer-crypto");

const plainText = "text";
const cipherKey = crypto.randomBytes(32);
ßconst password = "password123";

const aes = new AesService(cipherKey, "aes-256-cbc");
const cipherText = aes.encrypt(plainText);
cipherText === aes.decrypt(cipherText) // true

const pbkdf2 = new Pbkdf2Service();
const passwordHash = pbkdf2.hash(password);
pbkdf2.match({plain: password, hash: passwordHash}); // true

const sha = new ShaService("sha256");
const hash = sha.hash(plainText);
sha.match({plain: plainText, hash}); // true
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/no-brainer-crypto?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/no-brainer-crypto
[npm-downloads-src]: https://img.shields.io/npm/dm/no-brainer-crypto?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/no-brainer-crypto
[codecov-src]: https://img.shields.io/codecov/c/gh/dsfx3d/no-brainer-crypto/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/dsfx3d/no-brainer-crypto
[bundle-src]: https://img.shields.io/bundlephobia/minzip/no-brainer-crypto?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=no-brainer-crypto
