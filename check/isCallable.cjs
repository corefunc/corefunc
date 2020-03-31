const isFunction = require("../is/function.cjs");

module.exports = function checkIsCallable(value) {
  if (!value) {
    return false;
  }
  if (isFunction(value)) {
    return true;
  }
  if ("toFunction" in value && isFunction(value.toFunction) && isFunction(value.toFunction())) {
    return true;
  }
  //
  return false;
};
