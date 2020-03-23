import jsonParseSafe from "./safe";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @return {*}
 */
export default function jsonParseWith(
  text: string,
  defaultResult?: any,
  unsafe: boolean = true,
  reviver?: (this: any, key: string, value: any) => any,
): any {
  return jsonParseSafe(text, defaultResult, unsafe, false, reviver);
}
