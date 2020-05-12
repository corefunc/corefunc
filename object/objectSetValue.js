"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkIsObjectLike = require("../check/isObjectLike.js").default;
const isMap = require("../is/map.js").default;
const isSet = require("../is/set.js").default;
const isWeakMap = require("../is/weakMap.js").default;
const isWeakSet = require("../is/weakSet.js").default;
function objectSetValue(object, key, value) {
  if (checkIsObjectLike(object) === false) {
    return object;
  }
  if (isMap(object) || isWeakMap(object)) {
    object.set(key, value);
  }
  if (isSet(object) || isWeakSet(object)) {
    if (arguments.length > 2) {
      object.add(value);
    } else {
      object.add(key);
    }
  } else {
    object[key] = value;
  }
  return object;
}
exports.default = objectSetValue;
