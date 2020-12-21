import jsonParseSafe from "../parse/safe";
import jsonStringifySafe from "../stringify/safe";

/**
 * @param {*} value
 * @return {*}
 */
export function jsonJsonify(value: any): any {
  return jsonParseSafe(jsonStringifySafe(value));
}
