"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionAtAny = void 0;
const isObjectLike_1 = require("../check/isObjectLike");
/**
 * @name collectionAtAny
 * @description Pick object property from list of names
 * @param {*} object
 * @param {Array} propertyNames
 * @param {*=} onFail
 * @returns {*}
 */
function collectionAtAny(object, propertyNames, onFail) {
    if (isObjectLike_1.checkIsObjectLike(object) === false) {
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
exports.collectionAtAny = collectionAtAny;
// import fnIsObjectLike from 'lodash/isObjectLike';
// // import fnEntries from 'lodash/entries';
//
// // import fnForEach from '../collection/forEach';
// import fnKeys from '../collection/keys';
// import fnValues from '../collection/values';
//
// /**
//  * Pick object property from list of names
//  * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
//  * @param {Array} propertyNames
//  * @param {*=} defaultValue
//  * @param {Boolean=false} strictNames
//  * @return {*}
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
