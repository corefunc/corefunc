/**
 * @param {*} value
 * @return {*}
 */
module.exports = function jsonStringifyParse(value) {
  return JSON.parse(JSON.stringify(value));
};
