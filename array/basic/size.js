"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayBasicSize(array) {
  return array.reduce((size) => size + 1, 0);
}
exports.default = arrayBasicSize;
