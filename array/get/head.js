"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGetHead = void 0;
const first_1 = require("../key/first");
/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {null|*}
 * @example arrayGetHead([,,"🍌","🍏","🍊"]) ⇨ "🍌"
 */
function arrayGetHead(array, onFail) {
    if (!Array.isArray(array)) {
        return onFail;
    }
    const first = first_1.default(array);
    if (first === null) {
        return onFail;
    }
    return array[first];
}
exports.arrayGetHead = arrayGetHead;
