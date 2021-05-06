import { convertErrorToJson } from "../../convert/error/json";

// eslint-disable-next-line no-unused-vars
function serializer(replacer?: (this: any, key: string, value: any) => any, cycleReplacerArg: null | Function = null) {
  const keys: string[] = [];
  const stack: any[] = [];
  let cycleReplacer = cycleReplacerArg;
  if (cycleReplacer === null) {
    cycleReplacer = function cr(key: string, value: any) {
      if (stack[0] === value) {
        return "[Circular ~]";
      }
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
    };
  }
  return function (key: string, value: any) {
    let result = value;
    if (result instanceof Error) {
      result = convertErrorToJson(result);
      delete result.stack;
    } else if (result instanceof Set) {
      result = Array.from(result);
    } else if (result instanceof Map) {
      result = Object.fromEntries(result);
    }
    if (stack.length > 0) {
      // @ts-ignore
      const thisPos = stack.indexOf(this);
      // @ts-ignore
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (stack.indexOf(result) !== -1) {
        // @ts-ignore
        result = (cycleReplacer as Function).call(this, key, result);
      }
    } else {
      stack.push(result);
    }
    if (replacer && Object.prototype.toString.call(replacer) === "[object Function]") {
      // @ts-ignore
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
export function jsonStringifySafe(
  value: any,
  // eslint-disable-next-line no-unused-vars
  replacer?: (this: any, key: string, value: any) => any,
  spaces?: string | number,
  // eslint-disable-next-line no-unused-vars
  cycleReplacer?: (key: string, value: any) => any,
): string {
  return JSON.stringify(value, serializer(replacer, cycleReplacer), spaces);
}
