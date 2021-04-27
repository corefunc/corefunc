/**
 * @category Object Keys
 * @name objectKeysSort
 * @description Sort keys if can and return new object instance.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/sort";```
 * @param {Object} objectLike Object to be sorted.
 * @param {Boolean=} [isDeep=true] Deep sort.
 * @returns {Object} New object with sorted keys.
 */
export function objectKeysSort(objectLike, isDeep = true) {
  if (!objectLike || typeof objectLike !== "object" || Array.isArray(objectLike)) {
    return objectLike;
  }
  const keys = Object.keys(objectLike).sort((alpha, beta) => alpha.localeCompare(beta));
  if (!keys.length) {
    return objectLike;
  }
  return keys.reduce((sorted, key) => {
    if (isDeep && objectLike[key] && typeof objectLike[key] === "object" && !Array.isArray(objectLike[key])) {
      sorted[key] = objectKeysSort(objectLike[key], isDeep);
    } else {
      sorted[key] = objectLike[key];
    }
    return sorted;
  }, Object.create(Object.getPrototypeOf(objectLike)));
}
