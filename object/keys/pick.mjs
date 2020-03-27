/**
 * @name objectKeysPick
 * @param {Object} instance
 * @param {Array.<string>} keys
 * @returns {Object}
 */
export default function objectKeysPick(instance, keys) {
  if (!keys.length || !Object.keys(instance).length) {
    return {};
  }
  return keys.reduce((accumulator, key) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {});
}
