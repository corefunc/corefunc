/**
 * @category Object From
 * @name objectFromKeysValues
 * @description Create object form array of keys and array of values
 * @param {Array.<String>} keys
 * @param {Array} values
 * @returns {Object}
 */
export function objectFromKeysValues(keys, values) {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
