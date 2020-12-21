/**
 * @name oneOfOrElse
 * @description Get on from list or other value
 * @param {Array} list
 * @param {*} value
 * @param {*=} defaultValue
 * @since 0.0.86
 */
export function oneOfOrElse<T, D>(list: T[], value: T, defaultValue: D = undefined): T | D {
  return new Set(list).has(value) ? value : defaultValue;
}
