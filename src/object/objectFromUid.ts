import jsonFromString from "../json/jsonFromString";
import lzStringDecompress from "../string/lzStringDecompress";

/**
 * @param {String} string
 * @param {Number=2} level
 * @return {Object}
 */
export default function objectFromUid(string, level = 2) {
  return jsonFromString(lzStringDecompress(level)(string));
}
