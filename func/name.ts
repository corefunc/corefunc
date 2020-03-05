/**
 * @name funcName
 * @description Extract function name
 * @param {Function} func
 * @return {string}
 */
export default function funcName(func: Function): string {
  if (func.name) {
    return func.name;
  }
  const result = /^function\s+([\w]+)\s*\(/.exec(func.toString());
  if (result) {
    return result.shift();
  }
  return "";
}
