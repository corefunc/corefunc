"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name arrayHasSame
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {boolean}
 */
function arrayHasSame(alpha, beta) {
    if (!alpha.length || !beta.length) {
        return false;
    }
    const setB = new Set(beta);
    // @ts-ignore
    return Boolean([...new Set(alpha)].filter((x) => setB.has(x)).length);
}
exports.default = arrayHasSame;
