import jsonStringifySafe from "./safe";

/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
export default function jsonStringifyWith(
  object: any,
  replacer?: (this: any, key: string, value: any) => any,
  spaces?: string | number,
  cycleReplacer?: Function,
): string {
  return jsonStringifySafe(object, replacer, spaces, cycleReplacer);
}
