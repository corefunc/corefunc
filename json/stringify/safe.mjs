import { convertErrorToJson } from "../../convert/error/json.mjs";

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
    if (result instanceof Error) {
      result = convertErrorToJson(result);
      delete result.stack;
    } else if (result instanceof Set) {
      result = Array.from(result);
    } else if (result instanceof Map) {
      result = Object.fromEntries(result);
    } else if (typeof result === "bigint") {
      result = String(result);
    } else if (typeof result === "symbol") {
      result = result.description;
    } else if (result instanceof RegExp) {
      result = String(result);
    } else {
      const proto = Object.prototype.toString.call(result);
      if (proto !== "[object Array]" && proto.startsWith("[object ") && proto.endsWith("Array]")) {
        result = Array.from(result);
      } else if (proto === "[object Arguments]") {
        result = Array.from(result);
      }
    }
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
 * @param {*} value
 * @param {Function=} replacer
 * @param {Number|String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
export function jsonStringifySafe(value, replacer, spaces, cycleReplacer) {
  return JSON.stringify(value, serializer(replacer, cycleReplacer), spaces);
}
