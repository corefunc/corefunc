"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isIterable = require("./isIterable.js").default;
const isObjectLike = require("./isObjectLike.js").default;
function checkIsTraversable(value) {
  return Boolean(Array.isArray(value) || isObjectLike(value) || isIterable(value));
}
exports.default = checkIsTraversable;

console.log(checkIsTraversable({}));