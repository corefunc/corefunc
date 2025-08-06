/**
 * @name functionCached
 * @description Create a cached version of a pure function. Function arguments must be primitives.
 * @param {Function} func
 * @returns {Function}
 */
export function functionCached(func) {
  const cache = Object.create(null);
  return function cachedFunction(...keys) {
    const key = JSON.stringify(keys);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = func(...keys);
    return cache[key];
  };
}
