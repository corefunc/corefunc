/**
 * @param {Arguments|Array|Map|Object|Set} iterable
 * @param {Function} iteratee
 * @example
 * const iterable = new Map();
 * iterable.set('someKey1', 1);
 * iterable.set('someKey2', 2);
 * // or
 * const iterable = new Set();
 * iterable.add("entry1");
 * iterable.add("entry2");
 * // run function
 * collectionForEach(iterable, (value, key, collection) => {
 *   console.group('-');
 *   console.info('KEY');
 *   console.log(key);
 *   console.info('VALUE');
 *   console.log(value);
 *   console.groupEnd();
 * });
 */
export default function collectionForEach(iterable, iteratee) {
  if (!iterable) {
    return iterable;
  }
  if (Array.isArray(iterable)) {
    iterable.forEach(iteratee);
  } else if (iterable instanceof Set) {
    iterable.forEach((value) => iteratee(value, undefined, iterable));
  } else if (iterable instanceof Map) {
    iterable.forEach(iteratee);
  } else if (typeof iterable === "object") {
    Object.keys(iterable).forEach((key) => iteratee(iterable[key], key, iterable));
  } else {
    Array.from(iterable).forEach(iteratee);
  }
  return iterable;
}
