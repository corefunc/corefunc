"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
    var setB = new Set(beta);
    // @ts-ignore
    return Boolean(__spreadArrays(new Set(alpha)).filter(function (x) { return setB.has(x); }).length);
}
exports.default = arrayHasSame;
