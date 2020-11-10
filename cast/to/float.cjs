"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToFloat = void 0;
/**
 * Typecast variable to float
 * @name castToFloat
 * @param {*} variable
 * @param {*} [onFail=0] The return value in case of failure
 * @param {number} [toFixed=]
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
function castToFloat(variable, onFail = 0, toFixed) {
  const type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    const temporary = Number.parseFloat(variable);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    if (typeof toFixed === "number") {
      return Number.parseFloat(temporary.toFixed(toFixed));
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    if (typeof toFixed === "number") {
      return Number.parseFloat(Number.parseFloat(variable).toFixed(toFixed));
    }
    return Number.parseFloat(variable);
  }
  return onFail;
}
exports.castToFloat = castToFloat;
