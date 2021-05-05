"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToFloatOrNull = void 0;
const float_1 = require("./float");
/**
 * @category Cast To
 * @name castToFloatOrNull
 * @description Typecast variable to float or null if failed
 * @summary ```import { castToFloatOrNull } from "@corefunc/corefunc/cast/to/float-or-null";```
 * @param {*} [variable]
 * @param {Number} [toFixed=]
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
