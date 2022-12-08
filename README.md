# Stream Wallet
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Twitter: Stream Wallet](https://img.shields.io/twitter/follow/stream-wallet.svg?style=social)](https://twitter.com/stream-wallet)

> The most powerful wallet for the Cosmos ecosystem and the Interchain.

## Official Releases

> NOTE: We do not accept native integrations to the official releases through pull requests. Please feel free to check out Stream's [suggest chain](https://docs.stream-wallet.app/api/suggest-chain.html) feature for permissionless integrations to your chain.

You can find the latest versions of the official managed releases on these links:
- [Browser Extension](https://chrome.google.com/webstore/detail/stream-wallet/dmkamcknogkgcdfhhbddcghachkejeap)
- [iOS App](https://apps.apple.com/us/app/stream-wallet/id1567851089)
- [Android App](https://play.google.com/store/apps/details?id=app.streamprotocol.stream-wallet)

For help using Stream Wallet, Visit our [User Support Site](https://stream-wallet.crunch.help).

## Building browser extension locally
This repo requires `protoc` to be installed. Check [Install protobuf](https://grpc.io/docs/protoc-installation/) for details.  

Clone this repo and run:
```sh
yarn bootstrap
yarn build
```

Browser extension's build output is placed in `packages/extension/build/chrome`, and you can check out [this page](https://developer.chrome.com/extensions/getstarted) for installing the developing version.

This repo contains submodules that are not open sourced and are only available through the Chainapsis’ official Stream Browser Extension release. However, all primary features of the extension will work without the closed sourced submodules.

Source code for mobile app is also placed in `packages/mobile`.

### Example
Refer to the [Stream Example repository](https://github.com/stream-protocol/stream-wallet-example) for examples of how to integrate Stream signing support for your web interface/application.

### Disclaimer
Usage of any other packages besides @stream-wallet/types is not recommended.
 - Any other packages besides @stream-wallet/types are actively being developed, backward compatibility is not in the scope of support.
 - Since there are active changes being made, documentation is not being updated to the most recent version of the package as of right now. Documentations would be updated as packages get stable.

## Author
👤 **Chainapsis**
* Twitter: [@chainapsis](https://twitter.com/chainapsis)
* Github: [@chainapsis](https://github.com/stream-protocol)

## License
### Browser Extension 
Apache 2.0
### iOS / Android App
Copyright (c) 2021 Chainapsis Inc. All rights reserved.
