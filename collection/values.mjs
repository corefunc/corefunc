/**
 * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @return {Array}
 */
export default function collectionValues(iterable) {
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
