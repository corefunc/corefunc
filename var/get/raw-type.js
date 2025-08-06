const _toString = Object.prototype.toString;

/**
 * @name varGetRawType
 * @description Get the raw type string of a value, e.g., [object Object].
 * @param {*} value
 * @returns {string}
 */
export function varGetRawType(value) {
  return _toString.call(value).slice(8, -1);
}
