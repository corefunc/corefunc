"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Typecast variable to integer
 * @param {*}      variable
 * @param {*}      [onFail=0] The return value in case of failure
 * @param {number} [radix=10] An integer that represents the radix of the above mentioned string
 * @returns {number}
 * @example castToInt("F", 0, 16); // => 15
 */
function castToInt(variable, onFail, radix) {
  if (onFail === void 0) {
    onFail = 0;
  }
  if (radix === void 0) {
    radix = 10;
  }
  var type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    var temporary = Number.parseInt(variable, radix);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    return variable | 0;
  }
  return onFail;
}
exports.default = castToInt;
