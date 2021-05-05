"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToIntOrNull = void 0;
const int_1 = require("./int");
/**
 * @category Cast To
 * @name castToIntOrNull
 * @description Typecast variable to integer or null if failed.
 * @summary ```import { castToIntOrNull } from "@corefunc/corefunc/cast/to/int-or-null";```
 * @param {*} [value]
 * @returns {Null|Number}
 * @example castToIntOrNull("16.5"); // => 16
 */
function castToIntOrNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  return int_1.castToInt(value, null);
}
exports.castToIntOrNull = castToIntOrNull;
