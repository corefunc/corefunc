import { checkIsObjectLike } from "../check/is-object-like.js";

/**
 * @name collectionAtAny
 * @description Pick object property from list of names
 * @param {*} object
 * @param {Array} propertyNames
 * @param {*=} onFail
 * @returns {*}
 */
export function collectionAtAny<T>(object: Record<string, T>, propertyNames: Array<string>, onFail: T): T {
  if (!checkIsObjectLike(object)) {
    return onFail;
  }
  if (Array.isArray(propertyNames) === false) {
    return onFail;
  }
  for (let name of propertyNames) {
    name = name.toLowerCase();
    if (name in object) {
      return object[name];
    }
  }
  return onFail;
}

// import fnIsObjectLike from 'lodash/isObjectLike';
// // import fnEntries from 'lodash/entries';
//
// // import fnForEach from '../collection/forEach';
// import fnKeys from '../collection/keys.js';
// import fnValues from '../collection/values.js';
//
// /**
//  * Pick object property from list of names
//  * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
//  * @param {Array} propertyNames
//  * @param {*=} defaultValue
//  * @param {Boolean=false} strictNames
//  * @returns {*}
//  */
// function atAny(iterable, propertyNames, defaultValue = undefined, strictNames = false) {
//   if (!iterable || !propertyNames) {
//     return defaultValue;
//   }
//   if (fnIsObjectLike(iterable) === false) {
//     return defaultValue;
//   }
//   const names = fnValues(propertyNames);
//   if (names.length === 0) {
//     return defaultValue;
//   }
//   const keys = fnKeys(iterable);
//   if (keys.length === 0) {
//     return defaultValue;
//   }
//   // fnEntries(iterable, (key, value) => {});
//   if (strictNames) {
//     for (const name of names) {
//       if (name in iterable) {
//         return iterable[name];
//       }
//     }
//   } else {
//     for (let name of names) {
//       name = name.toLowerCase();
//       if (name in iterable) {
//         return iterable[name];
//       }
//     }
//   }
//   return defaultValue;
// }
//
// export default atAny;
