"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayGetDifference(alpha, beta) {
  var set = new Set(beta);
  return alpha.filter(function (value) {
    return !set.has(value);
  });
}
exports.default = arrayGetDifference;
