"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicIntersect = void 0;
/**
 * @name arrayBasicIntersect
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {Array}
 */
function arrayBasicIntersect(alpha, beta) {
    if (!alpha.length || !beta.length) {
        return [];
    }
    const setB = new Set(beta);
    // @ts-ignore
    return [...new Set(alpha)].filter((value) => setB.has(value));
}
exports.arrayBasicIntersect = arrayBasicIntersect;
