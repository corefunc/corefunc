"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkIsObjectLike = require("../check/isObjectLike.cjs");
const isMap = require("../is/map.cjs");
const isSet = require("../is/set.cjs");
const isWeakMap = require("../is/weakMap.cjs");
const isWeakSet = require("../is/weakSet.cjs");
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
