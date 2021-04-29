"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid4 = void 0;
/**
 * @category Generate
 * @name generateUuid4
 * @description RFC4122 compliant UUID v4 generator.
 * @returns {string}
 */
function generateUuid4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (text) => {
    const random = (Math.random() * 16) | 0,
      value = text === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}
exports.generateUuid4 = generateUuid4;
