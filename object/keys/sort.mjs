/**
 * @category Object Keys
 * @name objectKeysSort
 * @description Sort keys if can and return new object instance.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/sort";```
 * @param {Object} instance Object to be sorted.
 * @param {Boolean=} [isDeep=true] Deep sort.
 * @returns {Object} New object with sorted keys.
 */
export function objectKeysSort(instance, isDeep = true) {
  if (!instance || typeof instance !== "object" || Array.isArray(instance)) {
    return instance;
  }
  const keys = Object.keys(instance).sort((alpha, beta) => alpha.localeCompare(beta));
  if (!keys.length) {
    return instance;
  }
  return keys.reduce((sorted, key) => {
    if (isDeep && instance[key] && typeof instance[key] === "object" && !Array.isArray(instance[key])) {
      sorted[key] = objectKeysSort(instance[key], isDeep);
    } else {
      sorted[key] = instance[key];
    }
    return sorted;
  }, Object.create(Object.getPrototypeOf(instance)));
}
