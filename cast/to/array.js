import { collectionValues } from "../../collection/values.js";
/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @returns {Array}
 */
export function castToArray(value) {
    return collectionValues(value);
}
//# sourceMappingURL=array.js.map