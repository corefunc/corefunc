/**
 * Extract function name
 * @param {Function} func
 * @return {string}
 */
export default function funcNameExtract(func: Function): string {
  if (func.name) {
    return func.name;
  }
  const result = /^function\s+([\w]+)\s*\(/.exec(func.toString());
  return result ? result[1] : "";
}
