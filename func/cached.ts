/**
 * @name functionCached
 * @description Create a cached version of a pure function. Function arguments must be primitives.
 * @param {Function} func
 * @returns {Function}
 */
export default function functionCached<F extends (...args: Array<boolean | null | number | string>) => unknown>(
  func: F,
): F {
  const cache = Object.create(null);
  return function cachedFunction(...keys) {
    const key = JSON.stringify(keys);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = func(...keys);
    return cache[key];
  } as F;
}
