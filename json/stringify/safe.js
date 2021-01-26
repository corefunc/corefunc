"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonStringifySafe = void 0;
function serializer(replacer, cycleReplacerArg = null) {
  const keys = [];
  const stack = [];
  let cycleReplacer = cycleReplacerArg;
  if (cycleReplacer === null) {
    cycleReplacer = function cr(key, value) {
      if (stack[0] === value) {
        return "[Circular ~]";
      }
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
    };
  }
  return function (key, value) {
    let result = value;
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (stack.indexOf(result) !== -1) {
        result = cycleReplacer.call(this, key, result);
      }
    } else {
      stack.push(result);
    }
    if (replacer && Object.prototype.toString.call(replacer) === "[object Function]") {
      return replacer.call(this, key, result);
    }
    return result;
  };
}
/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
function jsonStringifySafe(object, replacer, spaces, cycleReplacer) {
  return JSON.stringify(object, serializer(replacer, cycleReplacer), spaces);
}
exports.jsonStringifySafe = jsonStringifySafe;
