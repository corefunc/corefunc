"use strict";
// import fnIsObject from "lodash-es/isObject";
// import isKeys from "lodash-es/keys";
// import fnMap from "lodash-es/map";
// import mapSortBy from "lodash-es/sortBy";
// import fnZipObject from "lodash-es/zipObject";
//
// export function collectionSortKeys(iterable, comparator, isDeep = true) {
//   const objectKeys = mapSortBy(isKeys(iterable), (key) => {
//     if (comparator) {
//       if (isDeep && fnIsObject(iterable[key])) {
//         return collectionSortKeys(iterable[key], comparator, isDeep);
//       }
//       return comparator(iterable[key], key);
//     }
//     return key;
//   });
//   return fnZipObject(
//     objectKeys,
//     fnMap(objectKeys, (key) => iterable[key]),
//   );
// }
