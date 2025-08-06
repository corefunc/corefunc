/**
 * @name oneOfOrElse
 * @description Get on from list or other value
 * @param {Array} list
 * @param {*} value
 * @param {*=} defaultValue
 * @since 0.0.86
 */
export function varGetOneOfOrElse(list, value, defaultValue) {
  return new Set(list).has(value) ? value : defaultValue;
}
