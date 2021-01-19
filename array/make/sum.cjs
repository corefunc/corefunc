"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMakeSum = void 0;
function arrayMakeSum(array) {
  return array.filter((value) => Number.isFinite(value)).reduce((accumulator, value) => accumulator + value);
}
exports.arrayMakeSum = arrayMakeSum;
