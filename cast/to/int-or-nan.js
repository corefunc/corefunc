"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToIntOrNan = void 0;
const int_1 = require("./int");
/**
 * @category Cast To
 * @name castToIntOrNan
 * @description Typecast variable to integer or NaN if failed.
 * @summary ```import { castToIntOrNan } from "@corefunc/corefunc/cast/to/int-or-nan";```
 * @param {*} [value]
 * @returns {number|Number.NaN}
 * @example castToIntOrNan("16.5"); // => 16
 * @since 0.3.21
 */
function castToIntOrNan(value) {
    if (value === null || value === undefined) {
        return Number.NaN;
    }
    const integer = int_1.castToInt(value, Number.NaN, false);
    if (Number.isNaN(integer)) {
        return Number.NaN;
    }
    return integer;
}
exports.castToIntOrNan = castToIntOrNan;
