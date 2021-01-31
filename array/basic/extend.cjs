"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicExtend = void 0;
function arrayBasicExtend(alpha, beta) {
  const extendedArray = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  return extendedArray;
}
exports.arrayBasicExtend = arrayBasicExtend;
