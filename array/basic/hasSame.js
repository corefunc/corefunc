"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicHasSame = void 0;
/**
 * @name arrayBasicHasSame
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {boolean}
 * @since 0.1.13
 */
function arrayBasicHasSame(alpha, beta) {
    if (!alpha.length || !beta.length) {
        return false;
    }
    const setB = new Set(beta);
    // @ts-ignore
    return Boolean([...new Set(alpha)].filter((x) => setB.has(x)).length);
}
exports.arrayBasicHasSame = arrayBasicHasSame;
