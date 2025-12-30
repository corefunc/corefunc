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
export declare function collectionForEach(iterable: any, iteratee: (value: any, index: any, collection: any) => any): any;
