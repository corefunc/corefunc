import jsonParseSafe from "../parse/safe.mjs";
import jsonStringifySafe from "../stringify/safe.mjs";

/**
 * @param {*} value
 * @return {*}
 */
export function jsonJsonify(value) {
  return jsonParseSafe(jsonStringifySafe(value));
}
