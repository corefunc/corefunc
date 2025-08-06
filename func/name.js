/**
 * @name functionName
 * @description Extract function name
 * @param {Function} func
 * @return {string}
 */
export function functionName(func) {
  if (func.name) {
    return func.name;
  }
  const result = /^function\s+([\w]+)\s*\(/.exec(func.toString());
  if (result) {
    return result.shift();
  }
  return "";
}
