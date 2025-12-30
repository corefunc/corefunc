import { checkIsPrimitive } from "../check/is-primitive.js";
import { isFunction } from "./function.js";
import { isString } from "./string.js";
/**
 * @category Is
 * @name isStringable
 * @description Checks if a given value can be converted to string.
 * @summary ```import { isStringable } from "@corefunc/corefunc/is/stringable";```
 * @param {*} [value] Any value.
 * @param {boolean=} [isStrictCheck=false]
 * @returns {Boolean}
 * @since 0.3.54
 */
export function isStringable(value, isStrictCheck = false) {
    if (typeof value === "string" || value instanceof String) {
        return true;
    }
    if (checkIsPrimitive(value)) {
        return false;
    }
    if ("toString" in value && isFunction(value.toString) && isString(value.toString())) {
        return true;
    }
    return !isStrictCheck;
}
