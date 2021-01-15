/**
 * @name convertToFlag
 * @description
 * Turns: undefined, null, 0, "0", "", "false", "FALSE", "n", "no", "of" to boolean false.
 * Turns: 1, 1n, "1", "true", "TRUE", "on", "y", "yes" to boolean true.
 * @param {*} value
 * @param {*=false} onEmpty
 * @param {*=false} onUnParsable
 * @returns {boolean}
 */
export function convertToFlag(value, onEmpty = false, onUnParsable = false) {
  if (value === undefined || value === null) {
    return onEmpty;
  }
  if (typeof value === "boolean") {
    return value;
  }
  const affirmative = value.toString().toLocaleLowerCase().trim();
  if (affirmative.length === 0) {
    return onEmpty;
  }
  switch (affirmative) {
    case "1":
    case "on":
    case "true":
    case "y":
    case "yes":
      return true;
    case "0":
    case "false":
    case "n":
    case "no":
    case "off":
      return false;
    default:
      return onUnParsable;
  }
}
