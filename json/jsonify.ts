import jsonParseSafe from "./parse/safe";
import jsonStringifySafe from "./stringify/safe";

/**
 * @param {String} value
 * @return {Object}
 */
export default function jsonJsonify(value: any): any {
  return jsonParseSafe(jsonStringifySafe(value));
}
