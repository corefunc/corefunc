/**
 * @name functionName
 * @description Extract function name
 * @param {(...args: unknown[]) => unknown} func
 * @returns {string}
 */
export function functionName(func) {
    if (func.name) {
        return func.name;
    }
    const match = /^function\s+([\w]+)\s*\(/.exec(func.toString());
    if (match) {
        return match[1];
    }
    return "";
}
