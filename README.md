# Stream Wallet - Development

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[Stream Protocol](https://streamprotocol.org)'s fork of the Keplr wallet by [chainapsis](https://github.com/chainapsis), which is designed to act as a generic wallet software for blockchains built using the [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk) and to support the inter-blockchain communication (IBC) protocol.

The wallet is configured for the Fetch.ai Stargate network. 

Further information on the Stream wallet can be found at the base [repo](https://github.com/stream-protocol/stream-wallet-extension).  

## Developing

### Environment Setup

Install global npm dependencies:

```bash
npm install --global yarn lerna

# TODO: install [watchman](https://facebook.github.io/watchman/docs/install.html)
```

[Bootstrap](https://lerna.js.org/#command-bootstrap) packages:

```bash
yarn bootstrap
```

Install package dependencies:

```bash
yarn install
```

Initial build:

```bash
yarn build
```

### Local dev server

```bash
yarn dev
```


### Developments and ToDo

- Blockchain configuration and implementations
- create icons, images and brand/logo designs, color presets HEX color codes: #000c72, #051150
- develop wallet extensions
- develop, implement STRM Token (ERC20)
- creating npm packages to @stream-wallet/umbral-types, @stream-wallet/wallet-types
- create/edit project mkdocs.yml documentation 
- develop staking platform
- develop token-bridge
- etc..

## Author

👤 **Stream Protocol**

* Twitter: [@stream_protocol](https://twitter.com/stream_protocol)
* Github: [@streamprotocol](https://github.com/stream-protocol)
