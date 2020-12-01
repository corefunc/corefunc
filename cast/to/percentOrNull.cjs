"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToPercentOrNull = void 0;
const float = require("./float.cjs");
/**
 * Typecast variable to float or null if failed
 * @name castToPercentOrNull
 * @param {*} variable
 * @returns {Null|Number}
 * @example castToPercentOrNull("16.501"); // => 16.50
 */
function castToPercentOrNull(variable) {
  if (variable === null || variable === undefined) {
    return null;
  }
  return float.castToFloat(variable, null, 2);
}
exports.castToPercentOrNull = castToPercentOrNull;