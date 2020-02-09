import fnEntries from "lodash-es/entries";
import fnForEach from "lodash-es/forEach";

import isSetType from "../is/isSetType";

/**
 * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @param {Function} iteratee
 * @example
 * const iterable = new Map();
 * iterable.set('somekey1', 1);
 * iterable.set('somekey2', 2);
 * // or
 * const iterable = new Set();
 * iterable.add("entry1");
 * iterable.add("entry2");
 * // run function
 * forEach(iterable, (value, key) => {
 *   console.group('-');
 *   console.info('KEY');
 *   console.log(key);
 *   console.info('VALUE');
 *   console.log(value);
 *   console.groupEnd();
 * });
 */
function forEach(iterable, iteratee) {
  return fnForEach(isSetType(iterable) ? Array.from(iterable) : fnEntries(iterable), (entry, index, collection) => {
    iteratee(entry[1], entry[0], collection, index);
  });
}

export default forEach;
