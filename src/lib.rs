extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hey {}!", name))
}

#[wasm_bindgen]
pub fn add(x: f64, y: f64) -> f64 {
    return x + y;
}
