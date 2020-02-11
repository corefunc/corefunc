import fnToFloat from "./toFloat";
import fnToInt from "./toInt";

/**
 * Typecast variable to number wih minimum and maximum value
 * @param {*} variable
 * @param {Number} [onFail=0] The return value in case of failure
 * @param {Number} numMin [Number.MIN_VALUE]
 * @param {Number} numMax [Number.MAX_VALUE]
 * @param {Boolean=false} isInteger
 * @returns {Number}
 * @example toRange("99.5", 0, 1, 100); // => 99.5
 */
function toRange(variable, onFail = 0, numMin = Number.MIN_VALUE, numMax = Number.MAX_VALUE, isInteger = false) {
  let range;
  if (isInteger) {
    range = fnToInt(variable, onFail);
  } else {
    range = fnToFloat(variable, onFail);
  }
  if (range < numMin) {
    return numMin;
  }
  if (range > numMax) {
    return numMax;
  }
  return range;
}

export default toRange;
