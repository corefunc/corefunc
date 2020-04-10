"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Typecast variable to float
 * @name castToFloat
 * @param {*} variable
 * @param {*} [onFail=0] The return value in case of failure
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
function castToFloat(variable, onFail) {
  if (onFail === void 0) {
    onFail = 0;
  }
  var type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    var temporary = Number.parseFloat(variable);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    return Number.parseFloat(variable);
  }
  return onFail;
}
exports.default = castToFloat;
