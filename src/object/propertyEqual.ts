import propertyGet from "./propertyGet";

/**
 * @param {Object} object
 * @param {Array|String} path
 * @param {*} value
 * @param {Boolean} isStrict
 * @returns {Boolean}
 */
function propertyEqual(object, path, value, isStrict = false) {
  if (isStrict) {
    return propertyGet(object, path) === value;
  }
  return propertyGet(object, path) === value;
}

export default propertyEqual;
