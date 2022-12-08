# blst-ts
This repository is a fork of [chainsafe/blst-ts](https://github.com/chainsafe/blst-ts) which may be used as a staging area for changes that may (or may not) be upstreamed.

## Developing

Note that this repo contains a git submodule. Make sure the git submodule `blst` is populated before attempting to build locally. After cloning run:

```bash
git submodule update --init --recursive
```

### Using emscripten bindings

```bash
yarn add @fetchai/blst-ts
# or
npm install --save @fetchai/blst-ts
```

#### `package.json`:
```javascript
depencencies: {
  "@fetchai/blst-ts": "^0.3.1",
  ...
}
```

#### `webpack.config.js` (V5):
```javascript
module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "assert": require.resolve("assert-browserify"),
      "path": require.resolve("path-browserify"),
      "fs": false,
    },
    ...
  },
  ignoreWarnings: [
    {
      module: /^(fs|process)$/,
    }
  ]
}
```

#### `webpack.config.js` (V4):
```javascript
module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^(fs|process)$/),
  ],
  ...
}
```

### Building WebAssembly module

_(NOTE: docker is required to use the script)_

```bash
yarn build:emscripten
```

##### Manual build
_(NOTE: a copy of [emsdk](https://github.com/emscripten-core/emsdk) is required to build for web assembly. See [emscripten docs -> Building Projects](https://emscripten.org/docs/compiling/Building-Projects.html) for more information)_

```bash
# ensure enscripten sdk is active
/path/to/emsdk/emsdk activate
source /path/to/emsdk/emsdk_env.sh

CROSS_COMPILE=em CFLAGS="-o ./prebuild/emscripten/blst.js --pre-js ./prebuild/emscripten/pre.js --post-js ./prebuild/emscripten/post.js ./prebuild/emscripten/blst_glue_wrapper.cpp" ./blst/build.sh -link -no-archive
```

## Testing in the browser

Once built (see [building WebAssembly module](#building-webassembly-module)), applicable mocha tests can be run in the browser using webpack:

```bash
yarn test:browser
```

#### Karma

Additionally, [Karma](https://karma-runner.github.io/6.3/index.html) is configured to run browser-relevant tests in chrome by starting and running:

```bash
# Optionally, CHROME_BIN=$(which <non-standard-chromium-flavor>)
# (see: https://github.com/karma-runner/karma-chrome-launcher)

yarn karma start
```

```bash
# separate shell

yarn karma run
```

_(NOTE: it currently seems like Karma has to be run a few times before it picks up all the tests)_

## License

Apache-2.0
