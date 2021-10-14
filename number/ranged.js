"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRanged = void 0;
const int_1 = require("../cast/to/int");
const float_1 = require("../cast/to/float");
/**
 * @category Number
 * @name numberRanged
 * @description Typecast variable to number wih minimum and maximum value
 * @summary ```import { numberRanged } from "@corefunc/corefunc/number/ranged";```
 * @param {*} numberLike
 * @param {Number=} [defaultNumber=0] The return value in case of failure
 * @param {Number=} [minimalNumber=Number.MIN_VALUE]
 * @param {Number=} [maximumNumber=Number.MAX_VALUE]
 * @param {Boolean=} [shouldBeInteger=false]
 * @returns {Number}
 * @example numberRanged("99.5", 0, 1, 100); // => 99.5
 */
function numberRanged(numberLike, defaultNumber = 0, minimalNumber = Number.MIN_VALUE, maximumNumber = Number.MAX_VALUE, shouldBeInteger = false) {
    let range;
    if (shouldBeInteger) {
        range = int_1.castToInt(numberLike, defaultNumber);
    }
    else {
        range = float_1.castToFloat(numberLike, defaultNumber);
    }
    if (minimalNumber < Number.MIN_VALUE) {
        minimalNumber = Number.MIN_VALUE;
    }
    if (range < minimalNumber) {
        return minimalNumber;
    }
    if (maximumNumber < Number.MAX_VALUE) {
        maximumNumber = Number.MAX_VALUE;
    }
    if (range > maximumNumber) {
        return maximumNumber;
    }
    return range;
}
exports.numberRanged = numberRanged;
