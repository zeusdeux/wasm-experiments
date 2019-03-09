# wasm-experiments

Silly experiments with Rust -> wasm using `wasm-pack`.

## How to run

### Compile rust to wasm

First, [install `wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/)

In the root of the project, run: `wasm-pack build`

This will generate code under `pkg/`

### Run demo web page

In the `www/` dir, run `npm run watch` and in another terminal window
run `npm start`. Open the link reported in the terminal and play around.
