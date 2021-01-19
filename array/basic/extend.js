"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayBasicExtend(alpha, beta) {
    const extendedArray = alpha.slice(0);
    extendedArray.push(...beta.slice(0));
    return extendedArray;
}
exports.default = arrayBasicExtend;
