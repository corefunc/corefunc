import fnParse from "./parse";
import fnStringify from "./stringify";

/**
 * @param {String} value
 * @return {Object}
 */
function toJsonObject(value) {
  return fnParse(fnStringify(value));
}

export default toJsonObject;
