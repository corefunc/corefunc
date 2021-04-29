"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
/**
 * @category Generate
 * @name generateToken
 * @description Generate random string from latin characters and numbers.
 * @param {Number} [size=16]
 * @return {String}
 */
function generateToken(size = 16) {
  const random = new Array(size);
  for (let index = 0; index < size; index++) {
    random[index] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 62)];
  }
  return random.join("");
}
exports.generateToken = generateToken;
