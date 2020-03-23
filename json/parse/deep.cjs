const checkIsTraversable = require("../../check/isTraversable.cjs");
const collectionForEach = require("../../collection/forEach.cjs");
const jsonParseSafe = require("./safe.cjs");

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
module.exports = function jsonParseDeep(text, defaultResult = undefined, reviver = null) {
  const parsed = jsonParseSafe(text, defaultResult, true, true, reviver);
  if (checkIsTraversable(parsed)) {
    collectionForEach(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return { ...parsed };
};
