"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToPercentOrNull = void 0;
const float_1 = require("./float");
/**
 * @category Cast To
 * @name castToPercentOrNull
 * @description Typecast variable to float or null if failed
 * @summary ```import { castToPercentOrNull } from "@corefunc/corefunc/cast/to/percent-or-null";```
 * @param {*} [value]
 * @returns {Null|Number}
 * @example castToPercentOrNull("16.501"); // => 16.50
 */
function castToPercentOrNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  return float_1.castToFloat(value, null, 2);
}
exports.castToPercentOrNull = castToPercentOrNull;
