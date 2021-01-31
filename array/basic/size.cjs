"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicSize = void 0;
function arrayBasicSize(array) {
  return array.reduce((size) => size + 1, 0);
}
exports.arrayBasicSize = arrayBasicSize;
