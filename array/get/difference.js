"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGetDifference = void 0;
function arrayGetDifference(alpha, beta) {
    const set = new Set(beta);
    return alpha.filter((value) => !set.has(value));
}
exports.arrayGetDifference = arrayGetDifference;
