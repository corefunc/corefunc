import jsonToString from "../json/jsonToString";
import lzStringCompress from "../string/lzStringCompress";

/**
 * @param {Object} object
 * @param {Number=2} level
 * @return {String}
 */
function objectToUid(object, level = 2) {
  return lzStringCompress(level)(jsonToString(object));
}

export default objectToUid;
