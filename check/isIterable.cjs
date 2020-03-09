const isFunction = require("../is/function.cjs");
const iteratorSymbol = require("../lang/iteratorSymbol.cjs");

module.exports = function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
};
