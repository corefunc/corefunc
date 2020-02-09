import fnValues from "../collection/values";

/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @return {Array}
 * @example import fnArray from '@selfserve/utility/cast/toArray';
 */
function toArray(value) {
  return fnValues(value);
}

export default toArray;
