"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToFloatOrNull = void 0;
const float_1 = require("./float");
/**
 * Typecast variable to float or null if failed
 * @name castToFloatOrNull
 * @param {*} variable
 * @param {number} [toFixed=]
 * @returns {Null|Number}
 * @example castToFloatOrNull("16.5"); // => 16.5
 */
function castToFloatOrNull(variable, toFixed) {
    if (variable === null || variable === undefined) {
        return null;
    }
    return float_1.castToFloat(variable, null, toFixed);
}
exports.castToFloatOrNull = castToFloatOrNull;
