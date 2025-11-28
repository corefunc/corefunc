// typescript
/**
 * @category Object Keys
 * @name objectKeysPick
 * @description Pick keys from object and return new plain object.
 * @summary ```import { objectKeysPick } from '@corefunc/corefunc/object/keys/pick';```
 * @param {Object} [instance] Object to be picked from.
 * @param {Array.<String>} [keys] Array of keys to pick.
 * @param {boolean=} [defineMissing=false] Fill missing values with `undefined`.
 * @returns {Object} New plain object.
 */
export function objectKeysPick(instance, keys, defineMissing) {
    const result = {};
    if (!keys.length || !Object.keys(instance ?? {}).length) {
        if (defineMissing) {
            for (const key of keys) {
                result[key] = undefined;
            }
            return result;
        }
        else {
            return {};
        }
    }
    for (const key of keys) {
        // cast to satisfy the index type checks
        result[key] = instance[key];
    }
    return result;
}
//# sourceMappingURL=pick.js.map