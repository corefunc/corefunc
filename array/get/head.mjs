import arrayKeyFirst from "../key/first.mjs";

/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {null|*}
 */
export default function arrayGetHead(array, onFail) {
  if (!Array.isArray(array)) {
    return onFail;
  }
  const first = arrayKeyFirst(array);
  if (first === null) {
    return onFail;
  }
  return array[first];
}
