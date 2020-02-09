/**
 * @param {String} value
 * @return {Object}
 */
function toJsonHash(value) {
  return JSON.parse(JSON.stringify(value));
}

export default toJsonHash;
