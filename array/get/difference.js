"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayGetDifference(alpha, beta) {
    const set = new Set(beta);
    return alpha.filter((value) => !set.has(value));
}
exports.default = arrayGetDifference;
