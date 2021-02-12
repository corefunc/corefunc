/**
 * @name objectFromKeysValues
 * @description Create object form array of keys and array of values
 * @param {Array.<String>} keys
 * @param {Array} values
 * @returns {Object}
 */
export function objectFromKeysValues(keys: string[], values: unknown[]): Record<string, unknown> {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
