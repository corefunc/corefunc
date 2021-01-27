"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRanged = void 0;
const int_1 = require("../cast/to/int");
const float_1 = require("../cast/to/float");
/**
 * Typecast variable to number wih minimum and maximum value
 * @param {*} variable
 * @param {Number} [onFail=0] The return value in case of failure
 * @param {Number} numMin [Number.MIN_VALUE]
 * @param {Number} numMax [Number.MAX_VALUE]
 * @param {Boolean=false} isInteger
 * @returns {Number}
 * @example numberRanged("99.5", 0, 1, 100); // => 99.5
 */
function numberRanged(variable, onFail, numMin = Number.MIN_VALUE, numMax = Number.MAX_VALUE, isInteger = false) {
    let range;
    if (isInteger) {
        range = int_1.castToInt(variable, onFail);
    }
    else {
        range = float_1.castToFloat(variable, onFail);
    }
    if (range < numMin) {
        return numMin;
    }
    if (range > numMax) {
        return numMax;
    }
    return range;
}
exports.numberRanged = numberRanged;
