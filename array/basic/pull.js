"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayBasicPull(array, value) {
  const indexOf = array.indexOf(value);
  if (indexOf === -1) {
    return;
  }
  array.splice(indexOf, 1);
  arrayBasicPull(array, value);
}
exports.default = arrayBasicPull;
