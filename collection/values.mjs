/**
 * @param {Array|Map|object|Set|WeakMap|WeakSet} iterable
 * @returns {Array}
 */
export function collectionValues(iterable) {
  if (!iterable || Object(iterable) !== iterable) {
    return [];
  }
  if (Array.isArray(iterable)) {
    return iterable;
  }
  if (iterable instanceof Set) {
    return Array.from(iterable.values());
  }
  if (iterable instanceof Map) {
    return Array.from(iterable.values());
  }
  return Object.values(iterable);
}
