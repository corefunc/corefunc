"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionSortKeys = void 0;
const isObject_1 = require("lodash-es/isObject");
const keys_1 = require("lodash-es/keys");
const map_1 = require("lodash-es/map");
const sortBy_1 = require("lodash-es/sortBy");
const zipObject_1 = require("lodash-es/zipObject");
function collectionSortKeys(iterable, comparator, isDeep = true) {
  const objectKeys = sortBy_1.default(keys_1.default(iterable), (key) => {
    if (comparator) {
      if (isDeep && isObject_1.default(iterable[key])) {
        return collectionSortKeys(iterable[key], comparator, isDeep);
      }
      return comparator(iterable[key], key);
    }
    return key;
  });
  return zipObject_1.default(objectKeys, map_1.default(objectKeys, (key) => iterable[key]));
}
exports.collectionSortKeys = collectionSortKeys;
