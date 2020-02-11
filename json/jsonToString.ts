import fnStringify from "./stringify";

/**
 * @param {Object} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
function jsonToString(object, replacer, spaces, cycleReplacer) {
  return fnStringify(object, replacer, spaces, cycleReplacer);
}

export default jsonToString;
