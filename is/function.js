"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} value
 * @returns {boolean}
 */
function isFunction(value) {
    if (Object.prototype.toString.call(value) !== "[object Function]") {
        return false;
    }
    return !/^class\s/.test(Function.prototype.toString.call(value));
}
exports.default = isFunction;
