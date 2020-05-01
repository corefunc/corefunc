"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySymmetricDifference(alpha, beta) {
  return alpha.filter((value) => !beta.includes(value)).concat(beta.filter((value) => !alpha.includes(value)));
}
exports.default = arraySymmetricDifference;
