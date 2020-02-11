/**
 * Returns true if value is an Promise.
 * @param {*} value
 * @returns {boolean}
 */
function isPromise(value) {
  if (!value) {
    return false;
  }
  if (typeof value !== "object") {
    return false;
  }
  if (value instanceof Promise) {
    return true;
  }
  if ("constructor" in value && "name" in value.constructor && value.constructor.name === "Promise") {
    return true;
  }
  return "then" in value && typeof value.then === "function";
}

export default isPromise;
